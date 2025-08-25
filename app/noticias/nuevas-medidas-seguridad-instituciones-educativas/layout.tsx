import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Nuevas medidas de seguridad en instituciones educativas de Villa del Dique | Municipalidad de Villa del Dique",
  description:
    "La Municipalidad de Villa del Dique ha implementado nuevas medidas de seguridad en nuestras instituciones educativas con el objetivo de proteger a los alumnos, docentes y personal.",
  keywords:
    "Villa del Dique, seguridad educativa, videovigilancia, protección civil, instituciones educativas, Córdoba",
  authors: [{ name: "Municipalidad de Villa del Dique" }],
  creator: "Municipalidad de Villa del Dique",
  publisher: "Municipalidad de Villa del Dique",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://municipalidadvdd.vercel.app"),
  alternates: {
    canonical: "/noticias/nuevas-medidas-seguridad-instituciones-educativas",
  },
  openGraph: {
    title: "Nuevas medidas de seguridad en instituciones educativas de Villa del Dique",
    description:
      "La Municipalidad de Villa del Dique ha implementado nuevas medidas de seguridad en nuestras instituciones educativas con el objetivo de proteger a los alumnos, docentes y personal.",
    url: "/noticias/nuevas-medidas-seguridad-instituciones-educativas",
    siteName: "Municipalidad de Villa del Dique",
    images: [
      {
        url: "/nuevas-medidas-seguridad.jpg",
        width: 1200,
        height: 630,
        alt: "Nuevas medidas de seguridad en instituciones educativas de Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nuevas medidas de seguridad en instituciones educativas de Villa del Dique",
    description:
      "La Municipalidad de Villa del Dique ha implementado nuevas medidas de seguridad en nuestras instituciones educativas con el objetivo de proteger a los alumnos, docentes y personal.",
    images: ["/nuevas-medidas-seguridad.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
