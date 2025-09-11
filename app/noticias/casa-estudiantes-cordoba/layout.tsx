import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Villa del Dique ya cuenta con su Casa de Estudiantes en Córdoba Capital | Villa del Dique",
  description:
    "La Municipalidad de Villa del Dique anuncia con gran satisfacción la concreción de la Casa de Estudiantes en Córdoba Capital, un espacio destinado a brindar apoyo y acompañamiento a los jóvenes de nuestra localidad.",
  keywords:
    "Villa del Dique, Casa de Estudiantes, Córdoba Capital, educación superior, jóvenes, municipalidad, estudiantes universitarios",
  openGraph: {
    title: "Villa del Dique ya cuenta con su Casa de Estudiantes en Córdoba Capital",
    description:
      "La Municipalidad de Villa del Dique anuncia con gran satisfacción la concreción de la Casa de Estudiantes en Córdoba Capital, un espacio destinado a brindar apoyo y acompañamiento a los jóvenes de nuestra localidad.",
    images: ["/casa-de-estudiantes-villa-del-dique-en-c-rdoba-cap.png"],
    type: "article",
    publishedTime: "2024-02-07T00:00:00.000Z",
  },
}

export default function CasaEstudiantesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
