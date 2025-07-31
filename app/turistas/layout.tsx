import type React from "react"
import type { Metadata } from "next"
import { Nunito, Montserrat } from "next/font/google" // Changed imports to Nunito and Montserrat

// Configurar Nunito con el rango de pesos
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

// Configurar Montserrat con los pesos específicos
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Turistas - Villa del Dique | La Perla de Calamuchita, Córdoba",
  description:
    "Descubre Villa del Dique, la Perla de Calamuchita. Guía completa para turistas: cómo llegar, dónde alojarse, dónde comer, circuitos turísticos, servicios y atractivos. Deportes acuáticos, senderos serranos, gastronomía regional y naturaleza incomparable en las Sierras de Córdoba.",
  keywords: [
    "turismo Villa del Dique",
    "Perla de Calamuchita turismo",
    "como llegar Villa del Dique",
    "donde alojarse Villa del Dique",
    "donde comer Villa del Dique",
    "circuitos turísticos Villa del Dique",
    "deportes acuáticos Córdoba",
    "senderos serranos",
    "camping Villa del Dique",
    "cabañas Villa del Dique",
    "hoteles Villa del Dique",
    "gastronomía serrana",
    "lago Calamuchita",
    "Sierras de Córdoba",
    "turismo aventura",
    "turismo familiar",
    "turismo naturaleza",
    "Valle de Calamuchita",
    "esquí náutico",
    "kayak windsurf",
    "pesca deportiva",
    "trekking ciclismo",
    "miradores serranos",
    "turismo Córdoba",
    "vacaciones sierras",
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
    url: "https://www.villadeldique.gob.ar/turistas",
    siteName: "Municipalidad de Villa del Dique",
    title: "Turistas - Villa del Dique | La Perla de Calamuchita",
    description:
      "Tu guía completa para visitar Villa del Dique, la Perla de Calamuchita. Descubre cómo llegar, dónde alojarte, dónde comer, circuitos turísticos y todos los atractivos de las Sierras de Córdoba.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/og-image-turistas.jpg",
        width: 1200,
        height: 630,
        alt: "Turistas Villa del Dique - La Perla de Calamuchita, Córdoba",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Turistas - Villa del Dique | La Perla de Calamuchita",
    description:
      "Tu guía completa para visitar Villa del Dique: cómo llegar, dónde alojarte, dónde comer, circuitos y atractivos turísticos en Córdoba.",
    images: ["https://www.villadeldique.gob.ar/images/og-image-turistas.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/turistas",
  },
  category: "tourism",
  classification: "Guía Turística",
  other: {
    "theme-color": "#c84f9b",
    "msapplication-TileColor": "#c84f9b",
  },
}

export default function TuristasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${nunito.variable} ${montserrat.variable}`}>
      <head>
        {/* Structured Data for Tourist Information */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristInformationCenter",
              name: "Villa del Dique - Información Turística",
              description:
                "Centro de información turística oficial de Villa del Dique, la Perla de Calamuchita. Guía completa para visitantes con información sobre alojamiento, gastronomía, actividades y atractivos turísticos.",
              url: "https://www.villadeldique.gob.ar/turistas",
              logo: "https://www.villadeldique.gob.ar/images/logo-oficial.webp",
              image: "https://www.villadeldique.gob.ar/images/banner-turistas-recomendacion.webp",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },
              telephone: "+54-3546-528341",
              email: "villadeliqueturismo1@gmail.com",
              sameAs: ["https://www.instagram.com/turismoycultura.villadeldique"],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios Turísticos Villa del Dique",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Información de Acceso",
                    description: "Cómo llegar a Villa del Dique por diferentes medios de transporte",
                    category: "Transporte",
                  },
                  {
                    "@type": "Offer",
                    name: "Alojamiento",
                    description: "Opciones de hospedaje: camping, cabañas, hoteles, hosterías",
                    category: "Hospedaje",
                  },
                  {
                    "@type": "Offer",
                    name: "Gastronomía",
                    description: "Restaurantes, confiterías y gastronomía regional serrana",
                    category: "Gastronomía",
                  },
                  {
                    "@type": "Offer",
                    name: "Circuitos Turísticos",
                    description: "Tours, senderos, deportes acuáticos y actividades recreativas",
                    category: "Actividades",
                  },
                ],
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.villadeldique.gob.ar/turistas",
              },
            }),
          }}
        />
      </head>
      <body className="font-montserrat">{children}</body>
    </html>
  )
}
