import type React from "react"
import type { Metadata } from "next"
import { Nunito, Montserrat } from "next/font/google" // Changed font imports

// Configure Nunito for titles and subtitles
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

// Configure Montserrat for body text and footer
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vecinos - Villa del Dique | Municipalidad Oficial",
  description:
    "Información y servicios para los vecinos de Villa del Dique. Accede a trámites, noticias locales, servicios municipales y más.",
  keywords: [
    "vecinos Villa del Dique",
    "noticias locales",
    "servicios municipales",
    "trámites online",
    "el pueblo",
    "municipalidad",
    "Villa del Dique",
  ],
  openGraph: {
    title: "Vecinos - Villa del Dique | Municipalidad Oficial",
    description:
      "Información y servicios para los vecinos de Villa del Dique. Accede a trámites, noticias locales, servicios municipales y más.",
    url: "https://www.villadeldique.gob.ar/vecinos",
    siteName: "Municipalidad de Villa del Dique",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/og-image-vecinos.jpeg",
        width: 1200,
        height: 630,
        alt: "Vamos Juntos - Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vecinos - Villa del Dique | Municipalidad Oficial",
    description:
      "Información y servicios para los vecinos de Villa del Dique. Accede a trámites, noticias locales, servicios municipales y más.",
    images: ["https://www.villadeldique.gob.ar/images/og-image-vecinos.jpeg"],
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/vecinos",
  },
}

export default function VecinosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${nunito.variable} ${montserrat.variable}`}>
      <body className="font-montserrat">{children}</body> {/* Default body font set to Montserrat */}
    </html>
  )
}
