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
  title: "Villa del Dique inaugura su nuevo Polo Cultural",
  description:
    "Desde el viernes 12 de septiembre, Villa del Dique contará con un nuevo Polo Cultural que integra la renovada Casa de la Cultura, el Centro Cultural Pato Carret y el nuevo anfiteatro al aire libre, formando un verdadero corazón cultural para el pueblo.",
  keywords: [
    "Villa del Dique polo cultural",
    "inauguración centro cultural",
    "Casa de la Cultura Villa del Dique",
    "Centro Cultural Pato Carret",
    "anfiteatro Villa del Dique",
    "cultura Villa del Dique",
    "eventos culturales",
    "desarrollo cultural",
    "turismo cultural",
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
    url: "https://www.villadeldique.gob.ar/noticias/inauguracion-polo-cultural",
    siteName: "Municipalidad de Villa del Dique",
    title: "Villa del Dique inaugura su nuevo Polo Cultural",
    description:
      "Desde el viernes 12 de septiembre, Villa del Dique contará con un nuevo Polo Cultural que integra la renovada Casa de la Cultura, el Centro Cultural Pato Carret y el nuevo anfiteatro al aire libre.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/inaguracion-vdd.jpg",
        width: 1200,
        height: 800,
        alt: "Inauguración del Polo Cultural de Villa del Dique",
        type: "image/jpeg",
      },
    ],
    publishedTime: "2025-09-06T00:00:00.000Z",
    modifiedTime: "2025-09-06T00:00:00.000Z",
    section: "Cultura",
    tags: ["Cultura", "Inauguración", "Polo Cultural", "Villa del Dique", "Desarrollo Cultural"],
    authors: ["Municipalidad de Villa del Dique"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique inaugura su nuevo Polo Cultural",
    description:
      "Desde el viernes 12 de septiembre, Villa del Dique contará con un nuevo Polo Cultural que integra la Casa de la Cultura, el Centro Cultural Pato Carret y el nuevo anfiteatro.",
    images: ["https://www.villadeldique.gob.ar/images/inaguracion-vdd.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/noticias/inauguracion-polo-cultural",
  },
  category: "news",
  classification: "Artículo de Noticias",
  other: {
    "article:publisher": "Municipalidad de Villa del Dique",
    "article:author": "Municipalidad de Villa del Dique",
    "article:published_time": "2025-09-06T00:00:00.000Z",
    "article:modified_time": "2025-09-06T00:00:00.000Z",
    "article:section": "Cultura",
    "article:tag": "Cultura, Inauguración, Polo Cultural, Villa del Dique, Desarrollo Cultural",
    news_keywords: "Villa del Dique, polo cultural, inauguración, Casa de la Cultura, anfiteatro, cultura",
  },
}

export default function InauguracionPoloCulturalLayout({
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
              headline: "Villa del Dique inaugura su nuevo Polo Cultural",
              description:
                "Desde el viernes 12 de septiembre, Villa del Dique contará con un nuevo Polo Cultural que integra la renovada Casa de la Cultura, el Centro Cultural Pato Carret y el nuevo anfiteatro al aire libre, formando un verdadero corazón cultural para el pueblo.",
              image: ["https://www.villadeldique.gob.ar/images/inaguracion-vdd.jpg"],
              datePublished: "2025-09-06T00:00:00.000Z",
              dateModified: "2025-09-06T00:00:00.000Z",
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
                "@id": "https://www.villadeldique.gob.ar/noticias/inauguracion-polo-cultural",
              },
              articleSection: "Cultura",
              keywords: [
                "Villa del Dique",
                "polo cultural",
                "inauguración",
                "Casa de la Cultura",
                "Centro Cultural Pato Carret",
                "anfiteatro",
                "cultura",
                "desarrollo cultural",
                "turismo cultural",
              ],
              wordCount: 650,
              articleBody:
                "Desde el viernes 12 de septiembre, Villa del Dique contará con un nuevo Polo Cultural, un espacio pensado para el encuentro, la creatividad y el desarrollo de nuestra comunidad...",
              about: [
                {
                  "@type": "Thing",
                  name: "Polo Cultural",
                  description: "Espacio cultural integrado en Villa del Dique",
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
                  name: "Casa de la Cultura Villa del Dique",
                  description: "Espacio cultural renovado para actividades artísticas",
                },
                {
                  "@type": "Place",
                  name: "Centro Cultural Pato Carret",
                  description: "Centro cultural emblemático de Villa del Dique",
                },
                {
                  "@type": "Place",
                  name: "Anfiteatro Villa del Dique",
                  description: "Nuevo anfiteatro al aire libre para eventos culturales",
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
