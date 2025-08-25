import type React from "react"
import type { Metadata } from "next"
import { Darker_Grotesque, Cinzel_Decorative } from "next/font/google"

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  weight: ["400", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nueva cancha de bochas sintética en Villa del Dique: más deporte, inclusión y comunidad",
  description:
    "La Municipalidad de Villa del Dique inauguró la nueva cancha de bochas sintética en el Club Deportivo y Biblioteca Villa del Dique, una obra que representa un nuevo impulso al desarrollo del deporte local y a la generación de espacios de encuentro y recreación para personas de todas las edades.",
  keywords: [
    "cancha bochas sintética Villa del Dique",
    "Club Deportivo Villa del Dique",
    "deporte inclusivo",
    "infraestructura deportiva",
    "bochas Villa del Dique",
    "espacios recreativos",
    "desarrollo deportivo",
    "comunidad Villa del Dique",
    "inauguración cancha bochas",
    "abril 2025",
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
    type: "article",
    locale: "es_AR",
    url: "https://www.villadeldique.gob.ar/noticias/nueva-cancha-bochas-sintetica",
    siteName: "Municipalidad de Villa del Dique",
    title: "Nueva cancha de bochas sintética en Villa del Dique: más deporte, inclusión y comunidad",
    description:
      "La Municipalidad inauguró la nueva cancha de bochas sintética en el Club Deportivo y Biblioteca Villa del Dique, impulsando el desarrollo del deporte local y generando espacios de encuentro para todas las edades.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/nueva-cancha-bochas-1.jpg",
        width: 1200,
        height: 800,
        alt: "Inauguración de la nueva cancha de bochas sintética en Villa del Dique",
        type: "image/jpeg",
      },
      {
        url: "https://www.villadeldique.gob.ar/images/nueva-cancha-bochas-7.jpg",
        width: 800,
        height: 600,
        alt: "Vista completa de la nueva cancha de bochas sintética",
        type: "image/jpeg",
      },
      {
        url: "https://www.villadeldique.gob.ar/images/nueva-cancha-bochas-4.jpg",
        width: 800,
        height: 600,
        alt: "Jugadora en acción en la nueva cancha de bochas",
        type: "image/jpeg",
      },
    ],
    publishedTime: "2025-04-07T00:00:00.000Z",
    modifiedTime: "2025-04-07T00:00:00.000Z",
    section: "Deportes",
    tags: ["Deportes", "Infraestructura", "Comunidad", "Villa del Dique", "Bochas"],
    authors: ["Municipalidad de Villa del Dique"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nueva cancha de bochas sintética en Villa del Dique",
    description:
      "La Municipalidad inauguró la nueva cancha de bochas sintética, impulsando el desarrollo del deporte local y generando espacios de encuentro para todas las edades.",
    images: ["https://www.villadeldique.gob.ar/images/nueva-cancha-bochas-1.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/noticias/nueva-cancha-bochas-sintetica",
  },
  category: "news",
  classification: "Artículo de Noticias",
  other: {
    "article:publisher": "Municipalidad de Villa del Dique",
    "article:author": "Municipalidad de Villa del Dique",
    "article:published_time": "2025-04-07T00:00:00.000Z",
    "article:modified_time": "2025-04-07T00:00:00.000Z",
    "article:section": "Deportes",
    "article:tag": "Deportes, Infraestructura, Comunidad, Villa del Dique, Bochas",
    news_keywords: "Villa del Dique, cancha bochas, deporte, infraestructura, comunidad, Club Deportivo",
  },
}

export default function NuevaCanchaBochasSinteticaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${darkerGrotesque.variable} ${cinzelDecorative.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsArticle",
              headline: "Nueva cancha de bochas sintética en Villa del Dique: más deporte, inclusión y comunidad",
              description:
                "La Municipalidad de Villa del Dique inauguró la nueva cancha de bochas sintética en el Club Deportivo y Biblioteca Villa del Dique, una obra que representa un nuevo impulso al desarrollo del deporte local y a la generación de espacios de encuentro y recreación para personas de todas las edades.",
              image: [
                "https://www.villadeldique.gob.ar/images/nueva-cancha-bochas-1.jpg",
                "https://www.villadeldique.gob.ar/images/nueva-cancha-bochas-7.jpg",
                "https://www.villadeldique.gob.ar/images/nueva-cancha-bochas-4.jpg",
                "https://www.villadeldique.gob.ar/images/nueva-cancha-bochas-2.jpg",
              ],
              datePublished: "2025-04-07T00:00:00.000Z",
              dateModified: "2025-04-07T00:00:00.000Z",
              author: {
                "@type": "Organization",
                name: "Municipalidad de Villa del Dique",
                url: "https://www.villadeldique.gob.ar",
              },
              publisher: {
                "@type": "GovernmentOrganization",
                name: "Municipalidad de Villa del Dique",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.villadeldique.gob.ar/images/logo-oficial.webp",
                  width: 300,
                  height: 120,
                },
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
                "@id": "https://www.villadeldique.gob.ar/noticias/nueva-cancha-bochas-sintetica",
              },
              articleSection: "Deportes",
              keywords: [
                "Villa del Dique",
                "cancha bochas sintética",
                "Club Deportivo",
                "deporte inclusivo",
                "infraestructura deportiva",
                "comunidad",
                "recreación",
                "desarrollo deportivo",
              ],
              wordCount: 650,
              articleBody:
                "La Municipalidad de Villa del Dique inauguró la nueva cancha de bochas sintética en el Club Deportivo y Biblioteca Villa del Dique, una obra que representa un nuevo impulso al desarrollo del deporte local...",
              about: [
                {
                  "@type": "Thing",
                  name: "Infraestructura Deportiva",
                  description: "Desarrollo de espacios deportivos en Villa del Dique",
                },
                {
                  "@type": "Place",
                  name: "Villa del Dique",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "Argentina",
                  },
                },
              ],
              mentions: [
                {
                  "@type": "Organization",
                  name: "Club Deportivo y Biblioteca Villa del Dique",
                  description: "Institución deportiva y cultural de Villa del Dique",
                },
                {
                  "@type": "Organization",
                  name: "Club de Bochas Villa del Dique",
                  description: "Institución que promueve la práctica deportiva de bochas",
                },
                {
                  "@type": "Thing",
                  name: "Cancha de Bochas Sintética",
                  description: "Nueva infraestructura deportiva para la práctica de bochas",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-darker-grotesk">{children}</body>
    </html>
  )
}
