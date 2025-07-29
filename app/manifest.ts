import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Municipalidad de Villa del Dique",
    short_name: "Villa del Dique",
    description: "Sitio web oficial de la Municipalidad de Villa del Dique, Córdoba. El progreso que queremos.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff", // A light background color for the splash screen
    theme_color: "#16b5d0", // Matches the existing theme color in layout.tsx
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
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
