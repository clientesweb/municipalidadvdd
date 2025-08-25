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
  title: "Villa del Dique avanza en la creación de un Polo Cultural para la comunidad y el turismo",
  description:
    "La Municipalidad de Villa del Dique continúa invirtiendo recursos propios en obras que fortalecen la infraestructura cultural local. El nuevo Polo Cultural integrará el Centro Cultural Pato Carret, la Casa de la Cultura, la Oficina de Información Turística y un nuevo anfiteatro.",
  keywords: [
    "Polo Cultural Villa del Dique",
    "Centro Cultural Pato Carret",
    "Casa de la Cultura Villa del Dique",
    "anfiteatro Villa del Dique",
    "turismo cultural",
    "infraestructura cultural",
    "desarrollo cultural",
    "obras municipales",
    "restauración patrimonio",
    "espectáculos Villa del Dique",
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
    url: "https://www.villadeldique.gob.ar/noticias/polo-cultural",
    siteName: "Municipalidad de Villa del Dique",
    title: "Villa del Dique avanza en la creación de un Polo Cultural para la comunidad y el turismo",
    description:
      "La Municipalidad continúa invirtiendo en obras que fortalecen la infraestructura cultural local. El nuevo Polo Cultural integrará el Centro Cultural Pato Carret, la Casa de la Cultura, la Oficina de Información Turística y un nuevo anfiteatro.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/polo-cultural-avances.jpg",
        width: 1200,
        height: 800,
        alt: "Avances en el desarrollo del Polo Cultural de Villa del Dique",
        type: "image/jpeg",
      },
    ],
    publishedTime: "2025-06-13T00:00:00.000Z",
    modifiedTime: "2025-06-13T00:00:00.000Z",
    section: "Cultura y Turismo",
    tags: ["Cultura", "Turismo", "Infraestructura", "Villa del Dique", "Polo Cultural"],
    authors: ["Municipalidad de Villa del Dique"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique avanza en la creación de un Polo Cultural",
    description:
      "La Municipalidad continúa invirtiendo en obras culturales. El nuevo Polo Cultural integrará el Centro Cultural Pato Carret, la Casa de la Cultura y un nuevo anfiteatro.",
    images: ["https://www.villadeldique.gob.ar/images/polo-cultural-avances.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/noticias/polo-cultural",
  },
  category: "news",
  classification: "Artículo de Noticias",
  other: {
    "article:publisher": "Municipalidad de Villa del Dique",
    "article:author": "Municipalidad de Villa del Dique",
    "article:published_time": "2025-06-13T00:00:00.000Z",
    "article:modified_time": "2025-06-13T00:00:00.000Z",
    "article:section": "Cultura y Turismo",
    "article:tag": "Cultura, Turismo, Infraestructura, Villa del Dique, Polo Cultural",
    news_keywords:
      "Villa del Dique, polo cultural, Centro Cultural Pato Carret, Casa de la Cultura, anfiteatro, turismo cultural",
  },
}

export default function PoloCulturalLayout({
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
              headline: "Villa del Dique avanza en la creación de un Polo Cultural para la comunidad y el turismo",
              description:
                "La Municipalidad de Villa del Dique continúa invirtiendo recursos propios en obras que fortalecen la infraestructura cultural local. El nuevo Polo Cultural integrará el Centro Cultural Pato Carret, la Casa de la Cultura, la Oficina de Información Turística y un nuevo anfiteatro.",
              image: ["https://www.villadeldique.gob.ar/images/polo-cultural-avances.jpg"],
              datePublished: "2025-06-13T00:00:00.000Z",
              dateModified: "2025-06-13T00:00:00.000Z",
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
                "@id": "https://www.villadeldique.gob.ar/noticias/polo-cultural",
              },
              articleSection: "Cultura y Turismo",
              keywords: [
                "Villa del Dique",
                "polo cultural",
                "Centro Cultural Pato Carret",
                "Casa de la Cultura",
                "anfiteatro",
                "turismo cultural",
                "infraestructura cultural",
              ],
              wordCount: 750,
              articleBody:
                "La Municipalidad de Villa del Dique continúa invirtiendo recursos propios en obras que fortalecen la infraestructura local y promueven el desarrollo cultural...",
              about: [
                {
                  "@type": "Thing",
                  name: "Polo Cultural",
                  description: "Proyecto integral de infraestructura cultural en Villa del Dique",
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
                  name: "Centro Cultural Pato Carret",
                  description: "Centro cultural integrado al Polo Cultural de Villa del Dique",
                },
                {
                  "@type": "Place",
                  name: "Casa de la Cultura Villa del Dique",
                  description: "Edificio histórico en proceso de restauración",
                },
                {
                  "@type": "Place",
                  name: "Anfiteatro Villa del Dique",
                  description: "Nuevo anfiteatro en construcción para eventos culturales",
                },
                {
                  "@type": "Organization",
                  name: "Oficina de Información Turística",
                  description: "Servicio de atención turística integrado al Polo Cultural",
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
