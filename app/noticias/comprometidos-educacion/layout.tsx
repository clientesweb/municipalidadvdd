import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Comprometidos con la educación como motor de crecimiento | Villa del Dique",
  description:
    "Desde la Municipalidad de Villa del Dique reafirmamos nuestra convicción de que la educación es el camino fundamental para el desarrollo individual, familiar y colectivo.",
  keywords: "Villa del Dique, educación, desarrollo, comunidad, formación, crecimiento, municipalidad",
  openGraph: {
    title: "Comprometidos con la educación como motor de crecimiento",
    description: "La educación como pilar fundamental del desarrollo comunitario en Villa del Dique.",
    images: ["/comprometidos.jpg"],
  },
}

export default function ComprometidosEducacionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
