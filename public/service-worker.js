const CACHE_NAME = "villa-del-dique-cache-v1"
const urlsToCache = [
  "/",
  "/index.html",
  "/globals.css",
  "/favicon.ico",
  "/icon-192x192.png",
  "/icon-512x512.png",
  // Agrega aquí cualquier otro recurso estático que quieras cachear
  // Por ejemplo: '/images/logo.png', '/js/main.js', '/css/styles.css'
  "/images/logo-oficial.webp",
  "/images/guia-de-tramites.webp",
  "/images/ver-noticias.webp",
  "/images/banner-tu-plan-perfecto.webp",
  "/images/google-play-button.png",
  "/images/app-store-button.png",
  "/images/banner-descarga-wpa.webp",
  "/images/logo-footer-blanco.png",
]

self.addEventListener("install", (event) => {
  console.log("Service Worker: Instalado")
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache")
      return cache.addAll(urlsToCache)
    }),
  )
})

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activado")
  const cacheWhitelist = [CACHE_NAME]
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
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
      // Cache hit - return response
      if (response) {
        return response
      }
      return fetch(event.request)
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
