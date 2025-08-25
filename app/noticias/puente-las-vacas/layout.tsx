import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Mantenimiento conjunto del Puente de las Vacas: trabajo articulado por la seguridad y el bienestar | Villa del Dique",
  description:
    "La Municipalidad de Villa del Dique, en coordinación con la Municipalidad de Embalse, llevó adelante tareas de mantenimiento en el Puente de las Vacas, ubicado en la zona limítrofe entre ambas localidades.",
  keywords:
    "Villa del Dique, Puente de las Vacas, mantenimiento, Embalse, colaboración intermunicipal, seguridad vial, infraestructura, trabajo conjunto",
  authors: [{ name: "Municipalidad de Villa del Dique" }],
  creator: "Municipalidad de Villa del Dique",
  publisher: "Municipalidad de Villa del Dique",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.villadeldique.gob.ar"),
  alternates: {
    canonical: "/noticias/puente-las-vacas",
  },
  openGraph: {
    title: "Mantenimiento conjunto del Puente de las Vacas: trabajo articulado por la seguridad y el bienestar",
    description:
      "La Municipalidad de Villa del Dique, en coordinación con la Municipalidad de Embalse, llevó adelante tareas de mantenimiento en el Puente de las Vacas.",
    url: "https://www.villadeldique.gob.ar/noticias/puente-las-vacas",
    siteName: "Municipalidad de Villa del Dique",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/puente-las-vacas.jpg",
        width: 800,
        height: 600,
        alt: "Mantenimiento conjunto del Puente de las Vacas",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mantenimiento conjunto del Puente de las Vacas: trabajo articulado por la seguridad y el bienestar",
    description:
      "La Municipalidad de Villa del Dique, en coordinación con la Municipalidad de Embalse, llevó adelante tareas de mantenimiento en el Puente de las Vacas.",
    images: ["https://www.villadeldique.gob.ar/images/puente-las-vacas.jpg"],
    creator: "@VillaDelDique",
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
  verification: {
    google: "google-site-verification-code",
  },
}

export default function PuenteLasVacasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline:
              "Mantenimiento conjunto del Puente de las Vacas: trabajo articulado por la seguridad y el bienestar",
            description:
              "La Municipalidad de Villa del Dique, en coordinación con la Municipalidad de Embalse, llevó adelante tareas de mantenimiento en el Puente de las Vacas, ubicado en la zona limítrofe entre ambas localidades.",
            image: "https://www.villadeldique.gob.ar/images/puente-las-vacas.jpg",
            author: {
              "@type": "Organization",
              name: "Municipalidad de Villa del Dique",
              url: "https://www.villadeldique.gob.ar",
            },
            publisher: {
              "@type": "Organization",
              name: "Municipalidad de Villa del Dique",
              logo: {
                "@type": "ImageObject",
                url: "https://www.villadeldique.gob.ar/images/logo-oficial.webp",
              },
            },
            datePublished: "2025-07-15",
            dateModified: "2025-07-15",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.villadeldique.gob.ar/noticias/puente-las-vacas",
            },
            articleSection: "Noticias",
            keywords:
              "Villa del Dique, Puente de las Vacas, mantenimiento, Embalse, colaboración intermunicipal, seguridad vial, infraestructura, trabajo conjunto",
          }),
        }}
      />
      {children}
    </>
  )
}
