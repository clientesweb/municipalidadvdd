import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Avanza el adoquinado de la Plaza del Estudiante | Municipalidad de Villa del Dique",
  description:
    "La Municipalidad de Villa del Dique informa que se encuentra en plena ejecución la obra de adoquinado en la Plaza del Estudiante, mejorando la circulación peatonal y vial.",
  keywords: "Villa del Dique, Plaza del Estudiante, adoquinado, obras públicas, municipalidad, infraestructura",
  openGraph: {
    title: "Avanza el adoquinado de la Plaza del Estudiante",
    description:
      "Obra de adoquinado en la Plaza del Estudiante para mejorar la circulación peatonal y vial en Villa del Dique.",
    images: ["/avanza-adoquinado.webp"],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
