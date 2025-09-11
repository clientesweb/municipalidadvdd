import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "El Registro Civil de Villa del Dique retoma su atención con normalidad | Municipalidad de Villa del Dique",
  description:
    "El Registro Civil de Villa del Dique ya funciona con normalidad, pudiendo dar curso a solicitudes de DNI y/o Pasaporte tras la resolución de inconvenientes en los servidores del RENAPER.",
  keywords: "registro civil, villa del dique, dni, pasaporte, renaper, normalidad, servicios",
  openGraph: {
    title: "El Registro Civil de Villa del Dique retoma su atención con normalidad",
    description:
      "El Registro Civil de Villa del Dique ya funciona con normalidad, pudiendo dar curso a solicitudes de DNI y/o Pasaporte tras la resolución de inconvenientes en los servidores del RENAPER.",
    images: [
      {
        url: "/images/registro-civil-vdd.jpg",
        width: 1200,
        height: 630,
        alt: "Registro Civil Villa del Dique funciona con normalidad",
      },
    ],
    type: "article",
    publishedTime: "2025-09-10T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Registro Civil de Villa del Dique retoma su atención con normalidad",
    description:
      "El Registro Civil de Villa del Dique ya funciona con normalidad, pudiendo dar curso a solicitudes de DNI y/o Pasaporte tras la resolución de inconvenientes en los servidores del RENAPER.",
    images: ["/images/registro-civil-vdd.jpg"],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
