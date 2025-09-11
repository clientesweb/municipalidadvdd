import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Obras en marcha: seguimos construyendo un Villa del Dique para todos | Municipalidad de Villa del Dique",
  description:
    "Con decisión, firmeza y compromiso, desde la Municipalidad de Villa del Dique seguimos ejecutando obras en distintos puntos de nuestra localidad, respondiendo a las necesidades y demandas de nuestros vecinos y vecinas.",
  keywords:
    "Villa del Dique, obras públicas, Salón Municipal, infraestructura, municipalidad, construcción, mejoras urbanas",
  authors: [{ name: "Municipalidad de Villa del Dique" }],
  creator: "Municipalidad de Villa del Dique",
  publisher: "Municipalidad de Villa del Dique",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://municipalidadvdd.vercel.app"),
  alternates: {
    canonical: "/noticias/obras-en-marcha",
  },
  openGraph: {
    title: "Obras en marcha: seguimos construyendo un Villa del Dique para todos",
    description:
      "Con decisión, firmeza y compromiso, desde la Municipalidad de Villa del Dique seguimos ejecutando obras en distintos puntos de nuestra localidad, respondiendo a las necesidades y demandas de nuestros vecinos y vecinas.",
    url: "https://municipalidadvdd.vercel.app/noticias/obras-en-marcha",
    siteName: "Municipalidad de Villa del Dique",
    images: [
      {
        url: "/images/obras-en-marcha.jpg",
        width: 1200,
        height: 630,
        alt: "Obras en el Salón Municipal de Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Obras en marcha: seguimos construyendo un Villa del Dique para todos",
    description:
      "Con decisión, firmeza y compromiso, desde la Municipalidad de Villa del Dique seguimos ejecutando obras en distintos puntos de nuestra localidad.",
    images: ["/images/obras-en-marcha.jpg"],
    creator: "@MunicipalidadVDD",
  },
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
}

export default function ObrasEnMarchaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: "Obras en marcha: seguimos construyendo un Villa del Dique para todos",
            description:
              "Con decisión, firmeza y compromiso, desde la Municipalidad de Villa del Dique seguimos ejecutando obras en distintos puntos de nuestra localidad, respondiendo a las necesidades y demandas de nuestros vecinos y vecinas.",
            image: ["https://municipalidadvdd.vercel.app/images/obras-en-marcha.jpg"],
            datePublished: "2025-06-17T00:00:00-03:00",
            dateModified: "2025-06-17T00:00:00-03:00",
            author: {
              "@type": "Organization",
              name: "Municipalidad de Villa del Dique",
              url: "https://municipalidadvdd.vercel.app",
            },
            publisher: {
              "@type": "Organization",
              name: "Municipalidad de Villa del Dique",
              logo: {
                "@type": "ImageObject",
                url: "https://municipalidadvdd.vercel.app/icon-512x512.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://municipalidadvdd.vercel.app/noticias/obras-en-marcha",
            },
            articleSection: "Obras Públicas",
            keywords:
              "Villa del Dique, obras públicas, Salón Municipal, infraestructura, municipalidad, construcción, mejoras urbanas",
          }),
        }}
      />
      {children}
    </>
  )
}
