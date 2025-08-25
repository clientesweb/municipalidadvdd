import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Nuevas mejoras en el Cementerio Municipal: seguridad y dignidad para un espacio de memoria | Municipalidad de Villa del Dique",
  description:
    "La Municipalidad de Villa del Dique instaló luminarias y cámaras de seguridad en el Cementerio Municipal para garantizar un entorno más seguro, ordenado y digno.",
  keywords:
    "Villa del Dique, cementerio municipal, luminarias, cámaras de seguridad, mejoras, infraestructura, seguridad",
  openGraph: {
    title: "Nuevas mejoras en el Cementerio Municipal: seguridad y dignidad para un espacio de memoria",
    description:
      "La Municipalidad de Villa del Dique instaló luminarias y cámaras de seguridad en el Cementerio Municipal para garantizar un entorno más seguro, ordenado y digno.",
    images: ["/nuevas-luminarias.jpg"],
    type: "article",
    publishedTime: "2024-11-02T00:00:00.000Z",
    authors: ["Municipalidad de Villa del Dique"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuevas mejoras en el Cementerio Municipal: seguridad y dignidad para un espacio de memoria",
    description:
      "La Municipalidad de Villa del Dique instaló luminarias y cámaras de seguridad en el Cementerio Municipal para garantizar un entorno más seguro, ordenado y digno.",
    images: ["/nuevas-luminarias.jpg"],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "NewsArticle",
            headline: "Nuevas mejoras en el Cementerio Municipal: seguridad y dignidad para un espacio de memoria",
            description:
              "La Municipalidad de Villa del Dique instaló luminarias y cámaras de seguridad en el Cementerio Municipal para garantizar un entorno más seguro, ordenado y digno.",
            image: "/nuevas-luminarias.jpg",
            datePublished: "2024-11-02T00:00:00.000Z",
            dateModified: "2024-11-02T00:00:00.000Z",
            author: {
              "@type": "Organization",
              name: "Municipalidad de Villa del Dique",
            },
            publisher: {
              "@type": "Organization",
              name: "Municipalidad de Villa del Dique",
              logo: {
                "@type": "ImageObject",
                url: "/favicon.ico",
              },
            },
          }),
        }}
      />
    </>
  )
}
