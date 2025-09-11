import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Último día del Mamógrafo Móvil en Villa del Dique | Municipalidad de Villa del Dique",
  description:
    "Recordamos a todas las vecinas que mañana será el último día de atención del Mamógrafo Móvil en Villa del Dique. La mamografía es el método más eficaz para detectar el cáncer de mama en etapas tempranas.",
  keywords: "mamógrafo móvil, Villa del Dique, salud, mamografía, cáncer de mama, prevención, APROSS",
  openGraph: {
    title: "Último día del Mamógrafo Móvil en Villa del Dique",
    description:
      "Recordamos a todas las vecinas que mañana será el último día de atención del Mamógrafo Móvil en Villa del Dique. La mamografía es el método más eficaz para detectar el cáncer de mama en etapas tempranas.",
    images: [
      {
        url: "/images/mamofrago-movil.jpg",
        width: 1200,
        height: 630,
        alt: "Mamógrafo Móvil en Villa del Dique",
      },
    ],
    type: "article",
    publishedTime: "2025-09-11T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Último día del Mamógrafo Móvil en Villa del Dique",
    description:
      "Recordamos a todas las vecinas que mañana será el último día de atención del Mamógrafo Móvil en Villa del Dique.",
    images: ["/images/mamofrago-movil.jpg"],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
