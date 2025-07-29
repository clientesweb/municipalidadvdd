self.addEventListener("install", (event) => {
  console.log("Service Worker: Instalado")
  event.waitUntil(
    caches.open("v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/app/vecinos/page.tsx", // Asegúrate de que las rutas de tus páginas principales estén aquí
        "/app/noticias/page.tsx",
        "/app/turistas/page.tsx",
        "/images/logo-oficial.webp",
        "/images/guia-de-tramites.webp",
        "/images/ver-noticias.webp",
        "/images/banner-tu-plan-perfecto.webp",
        "/images/google-play-button.png",
        "/images/app-store-button.png",
        "/images/banner-descarga-wpa.webp",
        "/images/logo-footer-blanco.png",
        "/icon-192x192.png",
        "/icon-512x512.png",
        // Agrega aquí cualquier otro recurso estático que quieras cachear
      ])
    }),
  )
})

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activado")
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== "v1") {
            console.log("Service Worker: Eliminando caché antigua", cacheName)
            return caches.delete(cacheName)
          }
          return null
        }),
      )
    }),
  )
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request)
    }),
  )
})

self.addEventListener("push", (event) => {
  if (event.data) {
    const data = event.data.json()
    const options = {
      body: data.body,
      icon: data.icon || "/icon-192x192.png", // Usar el icono de la PWA
      badge: "/icon-192x192.png", // Puedes usar un icono de badge si tienes uno
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: "1",
      },
    }
    event.waitUntil(self.registration.showNotification(data.title, options))
  }
})

self.addEventListener("notificationclick", (event) => {
  console.log("Notification click received.")
  event.notification.close()
  event.waitUntil(clients.openWindow("https://www.villadeldique.com.ar")) // Reemplaza con tu URL real
})
