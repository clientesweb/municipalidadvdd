import type React from "react"
import type { Metadata } from "next"
import { Nunito, Montserrat } from "next/font/google" // Importar las nuevas fuentes
import "./globals.css"

// Configurar Nunito para títulos y subtítulos
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"], // Pesos comunes para títulos
  display: "swap",
})

// Configurar Montserrat para textos de cuerpo y pie de página
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"], // Pesos comunes para texto de cuerpo
  display: "swap",
})

export const metadata: Metadata = {
  title: "Villa del Dique - Municipalidad Oficial | Córdoba, Argentina",
  description:
    "Sitio web oficial de la Municipalidad de Villa del Dique, Córdoba. Información para vecinos y turistas, trámites municipales, noticias locales y servicios públicos. El progreso que queremos.",
  keywords: [
    "Villa del Dique",
    "Municipalidad",
    "Córdoba",
    "Argentina",
    "trámites municipales",
    "turismo",
    "vecinos",
    "servicios públicos",
    "gobierno local",
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
    url: "https://www.villadeldique.gob.ar",
    siteName: "Municipalidad de Villa del Dique",
    title: "Villa del Dique - Municipalidad Oficial | Córdoba, Argentina",
    description:
      "Sitio web oficial de la Municipalidad de Villa del Dique, Córdoba. Información para vecinos y turistas, trámites municipales y servicios públicos.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa del Dique Municipalidad - Sitio Oficial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique - Municipalidad Oficial",
    description: "Sitio web oficial de la Municipalidad de Villa del Dique, Córdoba. El progreso que queremos.",
    images: ["https://www.villadeldique.gob.ar/images/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification=9UECrS73eR-RxxnAb3t4F8NVHGKdCPqp2HSHBvF1I64",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar",
  },
  category: "government",
  classification: "Gobierno Municipal",
  other: {
    "theme-color": "#16b5d0", // Updated color
    "msapplication-TileColor": "#16b5d0", // Updated color
    "msapplication-config": "/browserconfig.xml",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${nunito.variable} ${montserrat.variable}`}>
      <head>
        <meta name="theme-color" content="#16b5d0" /> {/* Updated color */}
        <meta name="msapplication-TileColor" content="#16b5d0" /> {/* Updated color */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Villa del Dique" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/favicon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/images/favicon-512x512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/images/favicon-192x192.png" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentOrganization",
              name: "Municipalidad de Villa del Dique",
              alternateName: "Villa del Dique Municipality",
              url: "https://www.villadeldique.gob.ar",
              logo: "https://www.villadeldique.gob.ar/images/logo-oficial.webp",
              description:
                "Municipalidad de Villa del Dique, Córdoba, Argentina. Servicios públicos, trámites municipales e información para vecinos y turistas.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mario Nivoli 206",
                addressLocality: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },
              telephone: "+54-3546-497241",
              areaServed: {
                "@type": "City",
                name: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "Argentina",
              },
              sameAs: [
                "https://www.facebook.com/villadeldique",
                "https://www.instagram.com/villadeldique",
                "https://www.youtube.com/villadeldique",
              ],
            }),
          }}
        />
      </head>
      <body className="font-montserrat">{children}</body> {/* Aplicar Montserrat como fuente base */}
    </html>
  )
}
