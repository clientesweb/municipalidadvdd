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
  title: "Villa del Dique brilló en el Torneo Nacional de Atletismo para Personas con Síndrome de Down en Mendoza",
  description:
    "El pasado 4 de septiembre, Villa del Dique fue protagonista en el Torneo Nacional de Atletismo para Personas con Síndrome de Down, realizado en la provincia de Mendoza. Más de 300 participantes de todo el país se reunieron en esta importante competencia.",
  keywords: [
    "Villa del Dique atletismo",
    "Torneo Nacional Síndrome de Down",
    "deporte adaptado Villa del Dique",
    "Tania Rivero",
    "Iker Mansilla",
    "Victoria De la Torre",
    "atletismo Mendoza",
    "inclusión deportiva",
    "municipalidad deporte",
    "septiembre 2025",
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
    url: "https://www.villadeldique.gob.ar/noticias/torneo-nacional-atletismo-sindrome-down",
    siteName: "Municipalidad de Villa del Dique",
    title: "Villa del Dique brilló en el Torneo Nacional de Atletismo para Personas con Síndrome de Down en Mendoza",
    description:
      "El pasado 4 de septiembre, Villa del Dique fue protagonista en el Torneo Nacional de Atletismo para Personas con Síndrome de Down, realizado en la provincia de Mendoza.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/deportes-vdd-1.jpg",
        width: 1200,
        height: 800,
        alt: "Atletas de Villa del Dique en el Torneo Nacional de Atletismo para Personas con Síndrome de Down",
        type: "image/jpeg",
      },
      {
        url: "https://www.villadeldique.gob.ar/images/deportes-vdd-3.jpg",
        width: 800,
        height: 600,
        alt: "Atletas de Villa del Dique en el podio del torneo nacional",
        type: "image/jpeg",
      },
      {
        url: "https://www.villadeldique.gob.ar/images/deportes-vdd-5.jpg",
        width: 800,
        height: 600,
        alt: "Atletas de Villa del Dique con medallas en el torneo nacional",
        type: "image/jpeg",
      },
    ],
    publishedTime: "2025-09-04T00:00:00.000Z",
    modifiedTime: "2025-09-04T00:00:00.000Z",
    section: "Deportes",
    tags: ["Deportes", "Inclusión", "Atletismo", "Villa del Dique", "Síndrome de Down"],
    authors: ["Municipalidad de Villa del Dique"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique brilló en el Torneo Nacional de Atletismo para Personas con Síndrome de Down",
    description:
      "Nuestros atletas obtuvieron importantes resultados en Mendoza: Tania Rivero con dos terceros puestos, Iker Mansilla finalista y Victoria De la Torre quinta en marcha.",
    images: ["https://www.villadeldique.gob.ar/images/deportes-vdd-1.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/noticias/torneo-nacional-atletismo-sindrome-down",
  },
  category: "news",
  classification: "Artículo de Noticias",
  other: {
    "article:publisher": "Municipalidad de Villa del Dique",
    "article:author": "Municipalidad de Villa del Dique",
    "article:published_time": "2025-09-04T00:00:00.000Z",
    "article:modified_time": "2025-09-04T00:00:00.000Z",
    "article:section": "Deportes",
    "article:tag": "Deportes, Inclusión, Atletismo, Villa del Dique, Síndrome de Down",
    news_keywords: "Villa del Dique, atletismo, síndrome de down, deporte adaptado, Mendoza, torneo nacional",
  },
}

export default function TorneoNacionalAtletismoLayout({
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
              headline:
                "Villa del Dique brilló en el Torneo Nacional de Atletismo para Personas con Síndrome de Down en Mendoza",
              description:
                "El pasado 4 de septiembre, Villa del Dique fue protagonista en el Torneo Nacional de Atletismo para Personas con Síndrome de Down, realizado en la provincia de Mendoza. Más de 300 participantes de todo el país se reunieron en esta importante competencia.",
              image: [
                "https://www.villadeldique.gob.ar/images/deportes-vdd-1.jpg",
                "https://www.villadeldique.gob.ar/images/deportes-vdd-2.jpg",
                "https://www.villadeldique.gob.ar/images/deportes-vdd-3.jpg",
                "https://www.villadeldique.gob.ar/images/deportes-vdd-4.jpg",
                "https://www.villadeldique.gob.ar/images/deportes-vdd-5.jpg",
              ],
              datePublished: "2025-09-04T00:00:00.000Z",
              dateModified: "2025-09-04T00:00:00.000Z",
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
                "@id": "https://www.villadeldique.gob.ar/noticias/torneo-nacional-atletismo-sindrome-down",
              },
              articleSection: "Deportes",
              keywords: [
                "Villa del Dique",
                "atletismo",
                "síndrome de down",
                "deporte adaptado",
                "Mendoza",
                "torneo nacional",
                "inclusión",
                "Tania Rivero",
                "Iker Mansilla",
                "Victoria De la Torre",
              ],
              wordCount: 650,
              articleBody:
                "El pasado 4 de septiembre, Villa del Dique fue protagonista en el Torneo Nacional de Atletismo para Personas con Síndrome de Down, realizado en la provincia de Mendoza...",
              about: [
                {
                  "@type": "Thing",
                  name: "Deporte Adaptado",
                  description: "Atletismo para personas con síndrome de Down en Villa del Dique",
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
                  "@type": "Person",
                  name: "Tania Rivero",
                  description: "Atleta de Villa del Dique, 3° puesto en lanzamiento de jabalina y disco",
                },
                {
                  "@type": "Person",
                  name: "Iker Mansilla",
                  description: "Atleta de Villa del Dique, finalista en 80 metros llanos",
                },
                {
                  "@type": "Person",
                  name: "Victoria De la Torre",
                  description: "Atleta de Villa del Dique, 5° puesto en marcha",
                },
                {
                  "@type": "Place",
                  name: "Mendoza",
                  description: "Provincia donde se realizó el Torneo Nacional de Atletismo",
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
