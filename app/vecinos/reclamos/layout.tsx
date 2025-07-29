import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Formulario de Reclamos - Municipalidad de Villa del Dique",
  description:
    "Envía tus reclamos y sugerencias a la Municipalidad de Villa del Dique. Ayúdanos a mejorar los servicios para nuestra comunidad.",
  openGraph: {
    title: "Formulario de Reclamos - Municipalidad de Villa del Dique",
    description:
      "Envía tus reclamos y sugerencias a la Municipalidad de Villa del Dique. Ayúdanos a mejorar los servicios para nuestra comunidad.",
    url: "https://www.villadeldique.gob.ar/vecinos/reclamos", // Replace with your actual domain
    images: [
      {
        url: "/images/og-image-reclamos.jpg", // Path to your OG image
        width: 1200,
        height: 630,
        alt: "Formulario de Reclamos - Municipalidad de Villa del Dique",
      },
    ],
    siteName: "Municipalidad de Villa del Dique",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Formulario de Reclamos - Municipalidad de Villa del Dique",
    description:
      "Envía tus reclamos y sugerencias a la Municipalidad de Villa del Dique. Ayúdanos a mejorar los servicios para nuestra comunidad.",
    images: ["/images/Og-image-reclamos.jpg"], // Path to your Twitter image
  },
}

export default function ReclamosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
