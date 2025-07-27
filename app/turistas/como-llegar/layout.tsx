import type React from "react"
import type { Metadata } from "next"
import { Darker_Grotesque, Cinzel_Decorative } from "next/font/google"

// Configurar Darker Grotesque con el rango de pesos
const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

// Configurar Cinzel Decorative con los pesos específicos
const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  weight: ["400", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cómo Llegar a Villa del Dique | Guía de Transporte y Acceso - Córdoba",
  description:
    "Guía completa sobre cómo llegar a Villa del Dique, la Perla de Calamuchita. Información detallada sobre transporte público, empresas de colectivos, rutas en auto, distancias desde principales ciudades y opciones de traslado a Córdoba.",
  keywords: [
    "como llegar Villa del Dique",
    "transporte Villa del Dique",
    "colectivos Villa del Dique",
    "rutas Villa del Dique",
    "distancia Villa del Dique",
    "omnibus Villa del Dique",
    "transporte público Córdoba",
    "Empresa Pajaro Blanco",
    "TAC transporte",
    "Sierras de Córdoba transporte",
    "ruta 5 Villa del Dique",
    "acceso Villa del Dique",
    "terminal omnibus Córdoba",
    "como ir Villa del Dique",
    "viaje Villa del Dique",
    "transporte turístico Córdoba",
    "Valle de Calamuchita acceso",
    "rutas serranas Córdoba",
    "transporte intermunicipal",
    "conexiones Villa del Dique",
    "horarios colectivos",
    "empresas transporte Córdoba",
    "traslados Villa del Dique",
    "guía transporte turístico",
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
    url: "https://www.villadeldique.com.ar/turistas/como-llegar",
    siteName: "Municipalidad de Villa del Dique",
    title: "Cómo Llegar a Villa del Dique | Guía de Transporte",
    description:
      "Descubre todas las opciones de transporte para llegar a Villa del Dique: colectivos, rutas en auto, distancias y horarios. Tu guía completa de acceso a la Perla de Calamuchita.",
    images: [
      {
        url: "https://www.villadeldique.com.ar/images/og-image-como-llegar.jpg",
        width: 1200,
        height: 630,
        alt: "Cómo Llegar a Villa del Dique - Vista aérea del lago y las sierras",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo Llegar a Villa del Dique | Guía de Transporte",
    description:
      "Guía completa de transporte a Villa del Dique: colectivos, rutas, distancias y opciones de traslado a la Perla de Calamuchita.",
    images: ["https://www.villadeldique.com.ar/images/og-image-como-llegar.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.com.ar/turistas/como-llegar",
  },
  category: "transportation",
  classification: "Guía de Transporte Turístico",
  other: {
    "theme-color": "#c84f9b",
    "msapplication-TileColor": "#c84f9b",
  },
}

export default function ComoLlegarLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${darkerGrotesque.variable} ${cinzelDecorative.variable}`}>
      <head>
        {/* Structured Data for Transportation Guide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelGuide",
              name: "Cómo Llegar a Villa del Dique - Guía de Transporte",
              description:
                "Guía completa de transporte y acceso a Villa del Dique, incluyendo opciones de colectivos, rutas en auto y distancias desde principales ciudades.",
              url: "https://www.villadeldique.com.ar/turistas/como-llegar",
              image: "https://www.villadeldique.com.ar/images/og-image-como-llegar.jpg",
              author: {
                "@type": "Organization",
                name: "Municipalidad de Villa del Dique",
                url: "https://www.villadeldique.com.ar",
              },
              publisher: {
                "@type": "Organization",
                name: "Municipalidad de Villa del Dique",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.villadeldique.com.ar/images/logo-oficial.webp",
                },
              },
              datePublished: "2024-01-01",
              dateModified: "2024-12-01",
              inLanguage: "es-AR",
              about: {
                "@type": "Place",
                name: "Villa del Dique",
                description: "La Perla de Calamuchita, Córdoba, Argentina",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Villa del Dique",
                  addressRegion: "Córdoba",
                  addressCountry: "AR",
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: -32.1833,
                  longitude: -64.4833,
                },
              },
              mainEntity: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "¿Cómo llego a Villa del Dique desde Córdoba Capital?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Desde Córdoba Capital puedes tomar colectivos de las empresas Pájaro Blanco o TAC desde la Terminal de Ómnibus. El viaje dura aproximadamente 1 hora y 30 minutos. En auto, toma la Ruta Provincial 5 hacia el sur.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Qué empresas de transporte llegan a Villa del Dique?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Las principales empresas son Pájaro Blanco y TAC (Transporte Automotor Córdoba), que conectan Villa del Dique con Córdoba Capital y otras localidades del Valle de Calamuchita.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Cuál es la distancia desde Buenos Aires?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Villa del Dique está a aproximadamente 750 km de Buenos Aires. El viaje en auto toma alrededor de 8 horas por Autopista y Ruta Nacional 9 hasta Córdoba, luego Ruta Provincial 5.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Hay servicios de transporte directo desde otras provincias?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Para llegar desde otras provincias, generalmente debes hacer conexión en Córdoba Capital. Desde allí puedes tomar los servicios locales hacia Villa del Dique.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Cuáles son las rutas principales para llegar en auto?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "La ruta principal es la Ruta Provincial 5 desde Córdoba Capital hacia el sur. También puedes acceder por rutas secundarias desde Villa General Belgrano o Santa Rosa de Calamuchita.",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://www.villadeldique.com.ar",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Turistas",
                  item: "https://www.villadeldique.com.ar/turistas",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Cómo Llegar",
                  item: "https://www.villadeldique.com.ar/turistas/como-llegar",
                },
              ],
            }),
          }}
        />

        {/* Location Information */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              name: "Villa del Dique",
              alternateName: "La Perla de Calamuchita",
              description:
                "Destino turístico en el Valle de Calamuchita, Córdoba, Argentina. Conocida por sus deportes acuáticos, paisajes serranos y turismo familiar.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "AR",
                postalCode: "5194",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -32.1833,
                longitude: -64.4833,
              },
              url: "https://www.villadeldique.com.ar",
              image: "https://www.villadeldique.com.ar/images/og-image-como-llegar.jpg",
              hasMap: "https://maps.google.com/?q=Villa+del+Dique,+Córdoba,+Argentina",
              isAccessibleForFree: true,
              publicAccess: true,
            }),
          }}
        />
      </head>
      <body className="font-darker-grotesk">{children}</body>
    </html>
  )
}
