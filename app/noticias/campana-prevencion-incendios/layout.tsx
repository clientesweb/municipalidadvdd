import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Campaña de Prevención de Incendios en Villa del Dique | Municipalidad de Villa del Dique",
  description:
    "Un descuido puede terminar en tragedia. Sumate a las acciones de prevención de incendios y cuidemos entre todos nuestro entorno. No desafiemos al fuego.",
  keywords: "prevención incendios, Villa del Dique, bomberos, seguridad, fuego, emergencias, 911, bomberos 100",
  openGraph: {
    title: "Campaña de Prevención de Incendios en Villa del Dique",
    description:
      "Un descuido puede terminar en tragedia. Sumate a las acciones de prevención de incendios y cuidemos entre todos nuestro entorno.",
    images: [
      {
        url: "/images/no-al-fuego.jpg",
        width: 1200,
        height: 630,
        alt: "Campaña de Prevención de Incendios - No desafiemos al fuego",
      },
    ],
    type: "article",
    publishedTime: "2025-09-10T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaña de Prevención de Incendios en Villa del Dique",
    description: "Un descuido puede terminar en tragedia. Sumate a las acciones de prevención de incendios.",
    images: ["/images/no-al-fuego.jpg"],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
