import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jornada de Limpieza en Nuestras Costas | Villa del Dique",
  description:
    "La Municipalidad de Villa del Dique llevó adelante una importante jornada de limpieza en las costas con empleados municipales, demostrando su compromiso con el cuidado del medio ambiente y la calidad de vida de la comunidad.",
  keywords:
    "Villa del Dique, limpieza costas, medio ambiente, municipalidad, empleados municipales, preservación entorno, calidad de vida, responsabilidad cívica",
  openGraph: {
    title: "Jornada de Limpieza en Nuestras Costas | Villa del Dique",
    description:
      "La Municipalidad de Villa del Dique llevó adelante una importante jornada de limpieza en las costas con empleados municipales, demostrando su compromiso con el cuidado del medio ambiente.",
    images: ["/limpieza-nuestras-costas.webp"],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jornada de Limpieza en Nuestras Costas | Villa del Dique",
    description:
      "La Municipalidad de Villa del Dique llevó adelante una importante jornada de limpieza en las costas con empleados municipales.",
    images: ["/limpieza-nuestras-costas.webp"],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
