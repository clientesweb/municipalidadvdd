import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Avanzando juntos hacia un futuro mejor en Villa del Dique | Municipalidad de Villa del Dique",
  description:
    "La gestión municipal informa los avances logrados en el marco del plan de obras públicas, incluyendo infraestructura educativa, espacios verdes y seguridad ciudadana.",
  keywords:
    "Villa del Dique, obras públicas, infraestructura educativa, espacios verdes, seguridad ciudadana, gestión municipal, Emiliano Torres",
  openGraph: {
    title: "Avanzando juntos hacia un futuro mejor en Villa del Dique",
    description:
      "La gestión municipal informa los avances logrados en el marco del plan de obras públicas, incluyendo infraestructura educativa, espacios verdes y seguridad ciudadana.",
    images: ["/avanzando-juntos.webp"],
    type: "article",
    publishedTime: "2024-03-16T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avanzando juntos hacia un futuro mejor en Villa del Dique",
    description:
      "La gestión municipal informa los avances logrados en el marco del plan de obras públicas, incluyendo infraestructura educativa, espacios verdes y seguridad ciudadana.",
    images: ["/avanzando-juntos.webp"],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
