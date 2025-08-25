import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reforestación y educación ambiental en el Parque Lineal | Villa del Dique",
  description:
    "La Municipalidad de Villa del Dique continúa avanzando en la consolidación del pulmón verde de nuestro Parque Lineal. Se plantaron 30 algarrobos en una jornada de reforestación y concientización ambiental realizada junto a la comunidad educativa de la Escuela Almirante Guillermo Brown.",
  keywords:
    "Villa del Dique, reforestación, parque lineal, educación ambiental, algarrobos, Escuela Almirante Brown, medio ambiente, sostenibilidad",
  openGraph: {
    title: "Reforestación y educación ambiental en el Parque Lineal | Villa del Dique",
    description:
      "La Municipalidad de Villa del Dique continúa avanzando en la consolidación del pulmón verde de nuestro Parque Lineal.",
    images: [
      {
        url: "/parque-lineal-1.jpg",
        width: 800,
        height: 600,
        alt: "Plantación de algarrobos en el Parque Lineal",
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reforestación y educación ambiental en el Parque Lineal | Villa del Dique",
    description:
      "La Municipalidad de Villa del Dique continúa avanzando en la consolidación del pulmón verde de nuestro Parque Lineal.",
    images: ["/parque-lineal-1.jpg"],
  },
}

export default function ReforestacionParqueLinealLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
