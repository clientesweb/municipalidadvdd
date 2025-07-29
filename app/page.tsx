import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Municipalidad de Villa del Dique",
    short_name: "VillaDiqueApp",
    description: "Aplicación Progresiva de la Municipalidad de Villa del Dique",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#16b5d0", // Color principal de tu sitio
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
