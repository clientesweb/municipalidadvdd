import type React from "react"
import type { Metadata } from "next"
import { Nunito, Montserrat } from "next/font/google"

// Configure Nunito for titles and subtitles
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

// Configure Montserrat for body text and footer
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Noticias - Villa del Dique | Municipalidad Oficial",
  description:
    "Mantente informado con las últimas noticias, obras públicas y novedades de Villa del Dique. Información oficial de la Municipalidad sobre desarrollo urbano, eventos y servicios para la comunidad.",
  keywords: [
    "noticias Villa del Dique",
    "obras públicas",
    "municipalidad noticias",
    "desarrollo urbano",
    "infraestructura",
    "Villa del Dique actualidad",
    "gobierno local",
    "servicios municipales",
    "Córdoba noticias",
    "el progreso que queremos",
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
    url: "https://www.villadeldique.gob.ar/noticias",
    siteName: "Municipalidad de Villa del Dique",
    title: "Noticias - Villa del Dique | La Villa QUE QUEREMOS",
    description:
      "Últimas noticias y novedades oficiales de Villa del Dique. Obras públicas, desarrollo urbano, eventos y servicios municipales. El progreso que queremos.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/og-image-noticias.jpg",
        width: 1200,
        height: 630,
        alt: "Noticias Villa del Dique - La Villa QUE QUEREMOS",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Noticias - Villa del Dique | La Villa QUE QUEREMOS",
    description:
      "Últimas noticias y novedades oficiales de Villa del Dique. Obras públicas, desarrollo urbano y servicios municipales.",
    images: ["https://www.villadeldique.gob.ar/images/og-image-noticias.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/noticias",
  },
  category: "news",
  classification: "Noticias Municipales",
  other: {
    "article:publisher": "Municipalidad de Villa del Dique",
    "article:author": "Municipalidad de Villa del Dique",
    news_keywords: "Villa del Dique, obras públicas, municipalidad, noticias locales, desarrollo urbano",
  },
}

export default function NoticiasLayout({
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
              "@type": "NewsMediaOrganization",
              name: "Municipalidad de Villa del Dique - Noticias",
              url: "https://www.villadeldique.gob.ar/noticias",
              logo: "https://www.villadeldique.gob.ar/images/logo-oficial.webp",
              description: "Portal de noticias oficial de la Municipalidad de Villa del Dique, Córdoba, Argentina.",
              publisher: {
                "@type": "GovernmentOrganization",
                name: "Municipalidad de Villa del Dique",
                url: "https://www.villadeldique.gob.ar",
                logo: "https://www.villadeldique.gob.ar/images/logo-oficial.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Mario Nivoli 206",
                  addressLocality: "Villa del Dique",
                  addressRegion: "Córdoba",
                  addressCountry: "AR",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.villadeldique.gob.ar/noticias",
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
      <body className="font-montserrat">{children}</body>
    </html>
  )
}
