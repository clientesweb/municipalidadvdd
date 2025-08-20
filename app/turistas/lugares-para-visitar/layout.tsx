import type React from "react"
import type { Metadata } from "next"
import { Nunito, Montserrat } from "next/font/google"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lugares para Visitar - Villa del Dique | Atractivos Turísticos",
  description:
    "Descubre los mejores lugares para visitar en Villa del Dique: plazas históricas, iglesias, miradores panorámicos y sitios culturales. Guía completa de atractivos turísticos en la Perla de Calamuchita, Córdoba.",
  keywords: [
    "lugares para visitar Villa del Dique",
    "atractivos turísticos Villa del Dique",
    "plazas Villa del Dique",
    "iglesias Villa del Dique",
    "miradores Villa del Dique",
    "sitios culturales Villa del Dique",
    "que visitar Villa del Dique",
    "turismo cultural Córdoba",
    "patrimonio Villa del Dique",
    "puntos de interés Villa del Dique",
    "guía turística Villa del Dique",
    "Perla de Calamuchita atractivos",
    "turismo religioso Córdoba",
    "miradores serranos",
    "plaza central Villa del Dique",
    "arquitectura Villa del Dique",
    "historia Villa del Dique",
    "cultura serrana",
    "Valle de Calamuchita turismo",
    "Sierras de Córdoba atractivos",
  ],
  authors: [{ name: "Municipalidad de Villa del Dique" }],
  creator: "Municipalidad de Villa del Dique",
  publisher: "Municipalidad de Villa del Dique",
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
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.villadeldique.gob.ar/turistas/lugares-para-visitar",
    siteName: "Municipalidad de Villa del Dique",
    title: "Lugares para Visitar - Villa del Dique | Atractivos Turísticos",
    description:
      "Explora los mejores lugares para visitar en Villa del Dique: plazas, iglesias, miradores y sitios culturales. Tu guía completa de atractivos turísticos en las Sierras de Córdoba.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/banner-que-visitar.webp",
        width: 1200,
        height: 630,
        alt: "Lugares para Visitar en Villa del Dique - Atractivos Turísticos",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lugares para Visitar - Villa del Dique | Atractivos Turísticos",
    description:
      "Descubre plazas, iglesias, miradores y sitios culturales en Villa del Dique. Tu guía de atractivos turísticos en Córdoba.",
    images: ["https://www.villadeldique.gob.ar/images/banner-que-visitar.webp"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/turistas/lugares-para-visitar",
  },
  category: "tourism",
  classification: "Guía de Atractivos Turísticos",
  other: {
    "theme-color": "#c84f9b",
    "msapplication-TileColor": "#c84f9b",
  },
}

export default function LugaresParaVisitarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${nunito.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              name: "Lugares para Visitar en Villa del Dique",
              description:
                "Guía completa de lugares para visitar en Villa del Dique: plazas históricas, iglesias, miradores panorámicos y sitios culturales en la Perla de Calamuchita.",
              url: "https://www.villadeldique.gob.ar/turistas/lugares-para-visitar",
              image: "https://www.villadeldique.gob.ar/images/banner-que-visitar.webp",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Atractivos Turísticos Villa del Dique",
                itemListElement: [
                  {
                    "@type": "Place",
                    name: "Plazas Históricas",
                    description: "Espacios públicos históricos y recreativos de Villa del Dique",
                  },
                  {
                    "@type": "Place",
                    name: "Iglesias",
                    description: "Patrimonio religioso y arquitectónico de la localidad",
                  },
                  {
                    "@type": "Place",
                    name: "Miradores",
                    description: "Puntos panorámicos con vistas espectaculares de las sierras y el lago",
                  },
                  {
                    "@type": "Place",
                    name: "Sitios Culturales",
                    description: "Espacios de interés cultural e histórico de Villa del Dique",
                  },
                ],
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.villadeldique.gob.ar/turistas/lugares-para-visitar",
              },
            }),
          }}
        />
      </head>
      <body className="font-montserrat">{children}</body>
    </html>
  )
}
