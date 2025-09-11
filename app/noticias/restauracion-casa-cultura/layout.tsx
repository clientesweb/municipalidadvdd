import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Restauración de la Casa de la Cultura: recuperar el patrimonio, fortalecer la identidad | Villa del Dique",
  description:
    "La Municipalidad de Villa del Dique avanza en la restauración integral de la Casa de la Cultura, un espacio emblemático que forma parte del patrimonio histórico y cultural de nuestra comunidad.",
  keywords: [
    "Casa de la Cultura",
    "restauración",
    "patrimonio histórico",
    "cultura",
    "Villa del Dique",
    "municipalidad",
    "identidad",
    "actividades culturales",
    "infraestructura cultural",
    "gestión cultural",
  ],
  authors: [{ name: "Municipalidad de Villa del Dique" }],
  creator: "Municipalidad de Villa del Dique",
  publisher: "Municipalidad de Villa del Dique",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://villadeldique.gob.ar"),
  alternates: {
    canonical: "/noticias/restauracion-casa-cultura",
  },
  openGraph: {
    title: "Restauración de la Casa de la Cultura: recuperar el patrimonio, fortalecer la identidad",
    description:
      "La Municipalidad de Villa del Dique avanza en la restauración integral de la Casa de la Cultura, un espacio emblemático que forma parte del patrimonio histórico y cultural de nuestra comunidad.",
    url: "https://villadeldique.gob.ar/noticias/restauracion-casa-cultura",
    siteName: "Municipalidad de Villa del Dique",
    images: [
      {
        url: "/images/casa-cultura-restauracion.jpg",
        width: 1200,
        height: 630,
        alt: "Restauración de la Casa de la Cultura en Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Restauración de la Casa de la Cultura: recuperar el patrimonio, fortalecer la identidad",
    description:
      "La Municipalidad de Villa del Dique avanza en la restauración integral de la Casa de la Cultura, un espacio emblemático que forma parte del patrimonio histórico y cultural de nuestra comunidad.",
    images: ["/images/casa-cultura-restauracion.jpg"],
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

export default function RestauracionCasaCulturaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
