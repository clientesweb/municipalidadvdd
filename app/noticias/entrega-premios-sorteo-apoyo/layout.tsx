import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Entrega de premios del Sorteo de Apoyo Institucional | Municipalidad de Villa del Dique",
  description:
    "El intendente Emiliano Torres recibió a los ganadores del Sorteo de Apoyo Institucional, llevado a cabo durante el almuerzo popular por el 89° aniversario de Villa del Dique.",
  keywords: "Villa del Dique, sorteo, apoyo institucional, premios, aniversario, municipalidad, Emiliano Torres",
  openGraph: {
    title: "Entrega de premios del Sorteo de Apoyo Institucional",
    description:
      "El intendente Emiliano Torres recibió a los ganadores del Sorteo de Apoyo Institucional, llevado a cabo durante el almuerzo popular por el 89° aniversario de Villa del Dique.",
    type: "article",
    publishedTime: "2024-10-16T00:00:00.000Z",
    authors: ["Municipalidad de Villa del Dique"],
    images: [
      {
        url: "/sorteo-de-apoyo-1.jpg",
        width: 1200,
        height: 630,
        alt: "Entrega de premios del Sorteo de Apoyo Institucional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Entrega de premios del Sorteo de Apoyo Institucional",
    description:
      "El intendente Emiliano Torres recibió a los ganadores del Sorteo de Apoyo Institucional, llevado a cabo durante el almuerzo popular por el 89° aniversario de Villa del Dique.",
    images: ["/sorteo-de-apoyo-1.jpg"],
  },
}

export default function Layout({
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
            headline: "Entrega de premios del Sorteo de Apoyo Institucional",
            description:
              "El intendente Emiliano Torres recibió a los ganadores del Sorteo de Apoyo Institucional, llevado a cabo durante el almuerzo popular por el 89° aniversario de Villa del Dique.",
            image: ["https://municipalidadvdd.vercel.app/sorteo-de-apoyo-1.jpg"],
            datePublished: "2024-10-16T00:00:00.000Z",
            dateModified: "2024-10-16T00:00:00.000Z",
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
                url: "https://municipalidadvdd.vercel.app/favicon.ico",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://municipalidadvdd.vercel.app/noticias/entrega-premios-sorteo-apoyo",
            },
          }),
        }}
      />
      {children}
    </>
  )
}
