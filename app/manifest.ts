import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Municipalidad de Villa del Dique",
    short_name: "Villa del Dique",
    description: "Sitio web oficial de la Municipalidad de Villa del Dique, Córdoba. El progreso que queremos.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#16b5d0",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "16x16 32x32 48x48",
        type: "image/x-icon",
        purpose: "any",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/images/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/images/favicon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    categories: ["government", "public", "utilities"],
    lang: "es-AR",
    scope: "/",
    shortcuts: [
      {
        name: "Noticias",
        short_name: "Noticias",
        description: "Ver las últimas noticias de Villa del Dique",
        url: "/noticias",
        icons: [
          {
            src: "/images/og-image-noticias.jpg",
            sizes: "192x192",
            type: "image/jpeg",
          },
        ],
      },
      {
        name: "Turistas",
        short_name: "Turismo",
        description: "Información turística de Villa del Dique",
        url: "/turistas",
        icons: [
          {
            src: "/images/og-image-turistas.jpg",
            sizes: "192x192",
            type: "image/jpeg",
          },
        ],
      },
      {
        name: "Vecinos",
        short_name: "Vecinos",
        description: "Servicios y trámites para vecinos",
        url: "/vecinos",
        icons: [
          {
            src: "/images/og-image-vecinos.jpeg",
            sizes: "192x192",
            type: "image/jpeg",
          },
        ],
      },
    ],
  }
}
