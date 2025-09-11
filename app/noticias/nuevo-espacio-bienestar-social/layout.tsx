import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nuevo Espacio de Bienestar Social en Villa del Dique | Municipalidad de Villa del Dique",
  description:
    "La Municipalidad anuncia la recuperación y puesta en funcionamiento de las nuevas oficinas de Bienestar Social, totalmente renovadas para centralizar y fortalecer las acciones orientadas a mejorar la calidad de vida de nuestros vecinos.",
  keywords: "Villa del Dique, bienestar social, oficinas municipales, renovación, políticas sociales, comunidad",
  openGraph: {
    title: "Nuevo Espacio de Bienestar Social en Villa del Dique",
    description:
      "La Municipalidad anuncia la recuperación y puesta en funcionamiento de las nuevas oficinas de Bienestar Social.",
    images: ["/images/nuevo-espacio-bienestar.jpg"],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
