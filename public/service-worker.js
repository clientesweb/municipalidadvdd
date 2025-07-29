const CACHE_NAME = "villa-del-dique-v2.1.0"
const STATIC_CACHE = "villa-del-dique-static-v2.1.0"
const DYNAMIC_CACHE = "villa-del-dique-dynamic-v2.1.0"
const IMAGE_CACHE = "villa-del-dique-images-v2.1.0"

// Recursos estáticos críticos que siempre deben estar en caché
const STATIC_ASSETS = [
  "/",
  "/offline",
  "/manifest.json",
  "/favicon.ico",
  "/icon-192x192.png",
  "/icon-512x512.png",
  "/images/logo-oficial.webp",
  "/images/logo-footer-blanco.png",
]

// Recursos que se cachean bajo demanda
const CACHE_STRATEGIES = {
  pages: ["/", "/noticias", "/turistas", "/vecinos"],
  images: [".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg"],
  fonts: [".woff", ".woff2", ".ttf", ".otf"],
  styles: [".css"],
  scripts: [".js"],
}

// Configuración de caché por tipo de recurso
const CACHE_CONFIG = {
  maxAge: {
    pages: 24 * 60 * 60 * 1000, // 24 horas
    images: 7 * 24 * 60 * 60 * 1000, // 7 días
    static: 30 * 24 * 60 * 60 * 1000, // 30 días
    api: 5 * 60 * 1000, // 5 minutos
  },
  maxEntries: {
    pages: 50,
    images: 100,
    dynamic: 100,
  },
}

// Instalación del Service Worker
self.addEventListener("install", (event) => {
  console.log("🔧 Service Worker: Instalando versión", CACHE_NAME)

  event.waitUntil(
    Promise.all([
      // Caché de recursos estáticos críticos
      caches
        .open(STATIC_CACHE)
        .then((cache) => {
          console.log("📦 Cacheando recursos estáticos críticos")
          return cache.addAll(STATIC_ASSETS)
        }),
      // Pre-caché de páginas principales
      caches
        .open(DYNAMIC_CACHE)
        .then((cache) => {
          console.log("📄 Pre-cacheando páginas principales")
          return cache.addAll(CACHE_STRATEGIES.pages)
        }),
    ]).then(() => {
      console.log("✅ Service Worker instalado correctamente")
      // Forzar activación inmediata
      return self.skipWaiting()
    }),
  )
})

// Activación del Service Worker
self.addEventListener("activate", (event) => {
  console.log("🚀 Service Worker: Activando versión", CACHE_NAME)

  event.waitUntil(
    Promise.all([
      // Limpiar cachés antiguos
      caches
        .keys()
        .then((cacheNames) => {
          const validCaches = [STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE]
          return Promise.all(
            cacheNames.map((cacheName) => {
              if (!validCaches.includes(cacheName)) {
                console.log("🗑️ Eliminando caché antigua:", cacheName)
                return caches.delete(cacheName)
              }
            }),
          )
        }),
      // Tomar control de todas las pestañas
      self.clients.claim(),
    ]).then(() => {
      console.log("✅ Service Worker activado y controlando todas las pestañas")
    }),
  )
})

// Estrategia de caché para diferentes tipos de recursos
self.addEventListener("fetch", (event) => {
  const { request } = event
  const url = new URL(request.url)

  // Solo manejar requests del mismo origen
  if (url.origin !== location.origin) {
    return
  }

  // Estrategia Cache First para recursos estáticos
  if (isStaticAsset(request.url)) {
    event.respondWith(cacheFirst(request, STATIC_CACHE))
    return
  }

  // Estrategia Stale While Revalidate para páginas
  if (isPageRequest(request)) {
    event.respondWith(staleWhileRevalidate(request, DYNAMIC_CACHE))
    return
  }

  // Estrategia Cache First para imágenes
  if (isImageRequest(request.url)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE))
    return
  }

  // Network First para APIs y recursos dinámicos
  event.respondWith(networkFirst(request, DYNAMIC_CACHE))
})

// Estrategia Cache First
async function cacheFirst(request, cacheName) {
  try {
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }

    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    console.error("Error en Cache First:", error)
    return getOfflineResponse(request)
  }
}

// Estrategia Network First
async function networkFirst(request, cacheName) {
  try {
    const networkResponse = await fetch(request)
    if (networkResponse.ok) {
      const cache = await caches.open(cacheName)
      cache.put(request, networkResponse.clone())
    }
    return networkResponse
  } catch (error) {
    const cachedResponse = await caches.match(request)
    if (cachedResponse) {
      return cachedResponse
    }
    return getOfflineResponse(request)
  }
}

// Estrategia Stale While Revalidate
async function staleWhileRevalidate(request, cacheName) {
  const cachedResponse = await caches.match(request)

  const fetchPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse.ok) {
        const cache = caches.open(cacheName)
        cache.then((c) => c.put(request, networkResponse.clone()))
      }
      return networkResponse
    })
    .catch(() => cachedResponse)

  return cachedResponse || fetchPromise || getOfflineResponse(request)
}

// Funciones de utilidad
function isStaticAsset(url) {
  return (
    CACHE_STRATEGIES.fonts.some((ext) => url.includes(ext)) ||
    CACHE_STRATEGIES.styles.some((ext) => url.includes(ext)) ||
    url.includes("/favicon.ico") ||
    url.includes("/manifest.json")
  )
}

function isPageRequest(request) {
  return request.method === "GET" && request.headers.get("accept")?.includes("text/html")
}

function isImageRequest(url) {
  return CACHE_STRATEGIES.images.some((ext) => url.includes(ext))
}

function getOfflineResponse(request) {
  if (isPageRequest(request)) {
    return (
      caches.match("/offline") ||
      new Response("Página no disponible sin conexión", {
        status: 503,
        statusText: "Service Unavailable",
      })
    )
  }

  if (isImageRequest(request.url)) {
    return new Response(
      '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><rect width="200" height="200" fill="#f0f0f0"/><text x="100" y="100" text-anchor="middle" dy=".3em" fill="#999">Sin conexión</text></svg>',
      { headers: { "Content-Type": "image/svg+xml" } },
    )
  }

  return new Response("Recurso no disponible", {
    status: 503,
    statusText: "Service Unavailable",
  })
}

// Manejo de notificaciones push
self.addEventListener("push", (event) => {
  console.log("📱 Notificación push recibida")

  let notificationData = {
    title: "Municipalidad de Villa del Dique",
    body: "Nueva información disponible",
    icon: "/icon-192x192.png",
    badge: "/icon-192x192.png",
  }

  if (event.data) {
    try {
      notificationData = { ...notificationData, ...event.data.json() }
    } catch (error) {
      console.error("Error parsing push data:", error)
    }
  }

  const options = {
    body: notificationData.body,
    icon: notificationData.icon,
    badge: notificationData.badge,
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: notificationData.id || "1",
      url: notificationData.url || "/",
    },
    actions: [
      {
        action: "open",
        title: "Abrir",
        icon: "/icon-192x192.png",
      },
      {
        action: "close",
        title: "Cerrar",
      },
    ],
    requireInteraction: false,
    silent: false,
    tag: "villa-del-dique-notification",
  }

  event.waitUntil(self.registration.showNotification(notificationData.title, options))
})

// Manejo de clics en notificaciones
self.addEventListener("notificationclick", (event) => {
  console.log("🔔 Click en notificación:", event.action)

  event.notification.close()

  if (event.action === "close") {
    return
  }

  const urlToOpen = event.notification.data?.url || "/"

  event.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: true }).then((clientList) => {
      // Buscar si ya hay una ventana abierta con la URL
      for (const client of clientList) {
        if (client.url === urlToOpen && "focus" in client) {
          return client.focus()
        }
      }

      // Si no hay ventana abierta, abrir una nueva
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen)
      }
    }),
  )
})

// Sincronización en segundo plano
self.addEventListener("sync", (event) => {
  console.log("🔄 Sincronización en segundo plano:", event.tag)

  if (event.tag === "background-sync") {
    event.waitUntil(doBackgroundSync())
  }
})

async function doBackgroundSync() {
  try {
    // Aquí puedes implementar lógica de sincronización
    // Por ejemplo, enviar formularios pendientes, actualizar datos, etc.
    console.log("Ejecutando sincronización en segundo plano")
  } catch (error) {
    console.error("Error en sincronización:", error)
  }
}

// Limpieza periódica de caché
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "CLEAN_CACHE") {
    event.waitUntil(cleanOldCache())
  }
})

async function cleanOldCache() {
  const caches_to_clean = [DYNAMIC_CACHE, IMAGE_CACHE]

  for (const cacheName of caches_to_clean) {
    const cache = await caches.open(cacheName)
    const requests = await cache.keys()

    for (const request of requests) {
      const response = await cache.match(request)
      if (response) {
        const dateHeader = response.headers.get("date")
        if (dateHeader) {
          const age = Date.now() - new Date(dateHeader).getTime()
          const maxAge = isImageRequest(request.url) ? CACHE_CONFIG.maxAge.images : CACHE_CONFIG.maxAge.pages

          if (age > maxAge) {
            await cache.delete(request)
            console.log("🗑️ Eliminado del caché por antigüedad:", request.url)
          }
        }
      }
    }
  }
}

console.log("🎉 Service Worker cargado correctamente - Villa del Dique PWA")
