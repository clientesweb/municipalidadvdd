import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reconocimiento y apoyo a nuestros bomberos voluntarios | Villa del Dique",
  description:
    "El intendente de Villa del Dique acompañó a los bomberos voluntarios en la recepción de un aporte de 15 millones de pesos otorgado por el Gobierno de la Provincia de Córdoba.",
  keywords: "bomberos voluntarios, Villa del Dique, inversión, Provincia de Córdoba, Emiliano Torres, equipamiento",
  openGraph: {
    title: "Reconocimiento y apoyo a nuestros bomberos voluntarios",
    description:
      "El intendente de Villa del Dique acompañó a los bomberos voluntarios en la recepción de un aporte de 15 millones de pesos otorgado por el Gobierno de la Provincia de Córdoba.",
    type: "article",
    publishedTime: "2025-07-22T00:00:00.000Z",
    authors: ["Municipalidad de Villa del Dique"],
    images: [
      {
        url: "/images/bomberos-recaudacion.jpg",
        width: 800,
        height: 600,
        alt: "Ceremonia de entrega del aporte a bomberos voluntarios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reconocimiento y apoyo a nuestros bomberos voluntarios",
    description:
      "El intendente de Villa del Dique acompañó a los bomberos voluntarios en la recepción de un aporte de 15 millones de pesos otorgado por el Gobierno de la Provincia de Córdoba.",
    images: ["/images/bomberos-recaudacion.jpg"],
  },
}

export default function BomberosVoluntariosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
