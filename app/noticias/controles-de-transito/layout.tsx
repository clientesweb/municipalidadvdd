import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Controles de Tránsito: Circular en regla, una tarea de todos | Villa del Dique",
  description:
    "La Municipalidad de Villa del Dique, junto a la Policía de la Provincia de Córdoba, continúa fortaleciendo su compromiso con la seguridad vial mediante operativos de control de tránsito.",
  keywords: "Villa del Dique, controles de tránsito, seguridad vial, policía, guardia urbana, municipalidad",
  openGraph: {
    title: "Controles de Tránsito: Circular en regla, una tarea de todos",
    description:
      "La Municipalidad de Villa del Dique, junto a la Policía de la Provincia de Córdoba, continúa fortaleciendo su compromiso con la seguridad vial mediante operativos de control de tránsito.",
    images: ["/images/joenada-transito.webp"],
  },
}

export default function ControlesTransitoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
