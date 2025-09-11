import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mejoras en infraestructura para una comunidad más segura y ordenada | Villa del Dique",
  description:
    "La Municipalidad de Villa del Dique continúa avanzando en el fortalecimiento de la infraestructura pública con la instalación de un cerco perimetral de 74 metros y reorganización del estacionamiento.",
  keywords: [
    "Villa del Dique",
    "infraestructura",
    "seguridad",
    "estacionamiento",
    "cerco perimetral",
    "mejoras urbanas",
    "municipalidad",
    "comunidad",
    "ordenamiento",
    "escuela primaria",
  ],
  authors: [{ name: "Municipalidad de Villa del Dique" }],
  creator: "Municipalidad de Villa del Dique",
  publisher: "Municipalidad de Villa del Dique",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://municipalidadvdd.vercel.app"),
  alternates: {
    canonical: "/noticias/mejoras-infraestructura-segura",
  },
  openGraph: {
    title: "Mejoras en infraestructura para una comunidad más segura y ordenada",
    description:
      "La Municipalidad de Villa del Dique continúa avanzando en el fortalecimiento de la infraestructura pública con la instalación de un cerco perimetral de 74 metros y reorganización del estacionamiento.",
    url: "/noticias/mejoras-infraestructura-segura",
    siteName: "Municipalidad de Villa del Dique",
    images: [
      {
        url: "/la-villa-que-queremos.jpg",
        width: 1200,
        height: 630,
        alt: "Mejoras en infraestructura - Estacionamiento y cerco perimetral en la Escuela Primaria",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mejoras en infraestructura para una comunidad más segura y ordenada",
    description:
      "La Municipalidad de Villa del Dique continúa avanzando en el fortalecimiento de la infraestructura pública con la instalación de un cerco perimetral de 74 metros y reorganización del estacionamiento.",
    images: ["/la-villa-que-queremos.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Mejoras en infraestructura para una comunidad más segura y ordenada",
  description:
    "La Municipalidad de Villa del Dique continúa avanzando en el fortalecimiento de la infraestructura pública con la instalación de un cerco perimetral de 74 metros y reorganización del estacionamiento.",
  image: ["https://municipalidadvdd.vercel.app/la-villa-que-queremos.jpg"],
  datePublished: "2024-10-22T10:00:00-03:00",
  dateModified: "2024-10-22T10:00:00-03:00",
  author: {
    "@type": "Organization",
    name: "Municipalidad de Villa del Dique",
    url: "https://municipalidadvdd.vercel.app",
  },
  publisher: {
    "@type": "Organization",
    name: "Municipalidad de Villa del Dique",
    logo: {
      "@type": "ImageObject",
      url: "https://municipalidadvdd.vercel.app/images/logo-oficial.webp",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://municipalidadvdd.vercel.app/noticias/mejoras-infraestructura-segura",
  },
  articleSection: "Infraestructura",
  keywords: "Villa del Dique, infraestructura, seguridad, estacionamiento, cerco perimetral, mejoras urbanas",
  locationCreated: {
    "@type": "Place",
    name: "Villa del Dique, Córdoba, Argentina",
  },
}

export default function MejorasInfraestructuraLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  )
}
