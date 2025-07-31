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
  title: "Villa del Dique No Para: Avances de Obras Públicas Durante el Receso Invernal",
  description:
    "El Municipio de Villa del Dique continúa ejecutando importantes obras durante el receso invernal: finalización de sala cuna, adoquinado en barrio IPV, mejoras en Escuela Almirante Brown, nueva oficina de reclamos y anfiteatro del Polo Cultural al 50% de avance.",
  keywords: [
    "Villa del Dique no para",
    "obras públicas Villa del Dique",
    "infraestructura municipal",
    "sala cuna Villa del Dique",
    "adoquinado barrio IPV",
    "escuela Almirante Brown",
    "anfiteatro polo cultural",
    "desarrollo urbano",
    "municipalidad obras",
    "receso invernal 2025",
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
    url: "https://www.villadeldique.gob.ar/noticias/villa-del-dique-no-para",
    siteName: "Municipalidad de Villa del Dique",
    title: "Villa del Dique No Para: Avances de Obras Públicas Durante el Receso Invernal",
    description:
      "El Municipio de Villa del Dique continúa ejecutando importantes obras durante el receso invernal: finalización de sala cuna, adoquinado en barrio IPV, mejoras en escuelas y construcción del anfiteatro del Polo Cultural.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/villa-del-dique-no-para.webp",
        width: 1200,
        height: 800,
        alt: "Villa del Dique No Para - Obras en progreso durante receso invernal",
        type: "image/webp",
      },
      {
        url: "https://www.villadeldique.gob.ar/images/nuevo-edificio-sala-cuna.webp",
        width: 800,
        height: 600,
        alt: "Construcción del nuevo edificio de la Sala Cuna en Villa del Dique",
        type: "image/webp",
      },
      {
        url: "https://www.villadeldique.gob.ar/images/anfiteatro-polo-cultural.webp",
        width: 800,
        height: 600,
        alt: "Construcción del anfiteatro en el Polo Cultural de Villa del Dique",
        type: "image/webp",
      },
    ],
    publishedTime: "2025-07-08T00:00:00.000Z",
    modifiedTime: "2025-07-08T00:00:00.000Z",
    section: "Obras Públicas",
    tags: ["Obras Públicas", "Infraestructura", "Desarrollo", "Villa del Dique", "Receso Invernal"],
    authors: ["Municipalidad de Villa del Dique"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique No Para: Avances de Obras Públicas",
    description:
      "El Municipio continúa con importantes obras durante el receso invernal: sala cuna, adoquinado, mejoras en escuelas y anfiteatro del Polo Cultural.",
    images: ["https://www.villadeldique.gob.ar/images/villa-del-dique-no-para.webp"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/noticias/villa-del-dique-no-para",
  },
  category: "news",
  classification: "Artículo de Noticias",
  other: {
    "article:publisher": "Municipalidad de Villa del Dique",
    "article:author": "Municipalidad de Villa del Dique",
    "article:published_time": "2025-07-08T00:00:00.000Z",
    "article:modified_time": "2025-07-08T00:00:00.000Z",
    "article:section": "Obras Públicas",
    "article:tag": "Obras Públicas, Infraestructura, Desarrollo, Villa del Dique, Receso Invernal",
    news_keywords: "Villa del Dique, obras públicas, infraestructura, sala cuna, adoquinado, escuela, anfiteatro",
  },
}

export default function VilladelDiqueNoParaLayout({
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
              headline: "Villa del Dique No Para: Avances de Obras Públicas Durante el Receso Invernal",
              description:
                "El Municipio de Villa del Dique continúa ejecutando importantes obras durante el receso invernal: finalización de sala cuna, adoquinado en barrio IPV, mejoras en Escuela Almirante Brown, nueva oficina de reclamos y anfiteatro del Polo Cultural.",
              image: [
                "https://www.villadeldique.gob.ar/images/villa-del-dique-no-para.webp",
                "https://www.villadeldique.gob.ar/images/nuevo-edificio-sala-cuna.webp",
                "https://www.villadeldique.gob.ar/images/obras-barrio-ipv.webp",
                "https://www.villadeldique.gob.ar/images/anfiteatro-polo-cultural.webp",
              ],
              datePublished: "2025-07-08T00:00:00.000Z",
              dateModified: "2025-07-08T00:00:00.000Z",
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
                "@id": "https://www.villadeldique.gob.ar/noticias/villa-del-dique-no-para",
              },
              articleSection: "Obras Públicas",
              keywords: [
                "Villa del Dique",
                "obras públicas",
                "infraestructura",
                "sala cuna",
                "adoquinado",
                "escuela Almirante Brown",
                "anfiteatro",
                "desarrollo urbano",
                "receso invernal",
              ],
              wordCount: 850,
              articleBody:
                "Mientras los niños y niñas disfrutan del receso invernal, el Municipio de Villa del Dique continúa ejecutando importantes obras en distintos puntos de la localidad...",
              about: [
                {
                  "@type": "Thing",
                  name: "Obras Públicas",
                  description: "Proyectos de infraestructura municipal en Villa del Dique",
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
                  "@type": "Place",
                  name: "Sala Cuna Villa del Dique",
                  description: "Nueva construcción para cuidado de primera infancia",
                },
                {
                  "@type": "Place",
                  name: "Barrio IPV Villa del Dique",
                  description: "Barrio donde se realizan trabajos de adoquinado",
                },
                {
                  "@type": "EducationalOrganization",
                  name: "Escuela Almirante Brown",
                  description: "Institución educativa con mejoras en infraestructura deportiva",
                },
                {
                  "@type": "Place",
                  name: "Polo Cultural Villa del Dique",
                  description: "Espacio cultural con construcción de anfiteatro",
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