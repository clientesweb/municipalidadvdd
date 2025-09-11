import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Villa del Dique incorpora una nueva camioneta para reforzar la seguridad | Municipalidad de Villa del Dique",
  description:
    "Con el objetivo de fortalecer el plan de seguridad en nuestra localidad, Villa del Dique recibió una camioneta 0 km gracias a las gestiones del Intendente Emiliano Torres ante el Gobierno Provincial, que se suma a la flota de vehículos de la Guardia Local.",
  keywords:
    "Villa del Dique, seguridad, camioneta, Guardia Local, Emiliano Torres, Gobierno Provincial, patrullaje, prevención",
  openGraph: {
    title: "Villa del Dique incorpora una nueva camioneta para reforzar la seguridad",
    description:
      "Con el objetivo de fortalecer el plan de seguridad en nuestra localidad, Villa del Dique recibió una camioneta 0 km gracias a las gestiones del Intendente Emiliano Torres ante el Gobierno Provincial.",
    images: [
      {
        url: "/images/nueva-camioneta.jpg",
        width: 1200,
        height: 630,
        alt: "Nueva camioneta para la Guardia Local de Villa del Dique",
      },
    ],
    type: "article",
    publishedTime: "2025-08-09T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique incorpora una nueva camioneta para reforzar la seguridad",
    description:
      "Con el objetivo de fortalecer el plan de seguridad en nuestra localidad, Villa del Dique recibió una camioneta 0 km gracias a las gestiones del Intendente Emiliano Torres ante el Gobierno Provincial.",
    images: ["/images/nueva-camioneta.jpg"],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
