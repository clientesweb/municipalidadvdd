"use client"

import { useEffect } from "react"

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("Service Worker registrado con éxito:", registration.scope)
          })
          .catch((error) => {
            console.error("Fallo en el registro del Service Worker:", error)
          })
      })
    }
  }, [])

  return null // Este componente no renderiza nada visualmente
}
