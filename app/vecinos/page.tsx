import type React from "react"
import type { Metadata } from "next"
import { Nunito, Montserrat } from "next/font/google" // Import Nunito and Montserrat

// Configure Nunito for titles/headings
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito", // Define as CSS variable
  display: "swap",
})

// Configure Montserrat for body text
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Define as CSS variable
  display: "swap",
})

export const metadata: Metadata = {
  title: "Vecinos - Municipalidad de Villa del Dique",
  description: "Información y servicios para los vecinos de Villa del Dique.",
  keywords: [
    "Villa del Dique",
    "Municipalidad",
    "Vecinos",
    "Trámites",
    "Servicios",
    "Noticias",
    "Concejo Deliberante",
    "Recolección de residuos",
    "Tasas municipales",
    "Emergencias",
  ],
  openGraph: {
    title: "Vecinos - Municipalidad de Villa del Dique",
    description: "Información y servicios para los vecinos de Villa del Dique.",
    url: "https://www.villadeldique.gob.ar/vecinos",
    siteName: "Municipalidad de Villa del Dique",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/og-image-vecinos.jpeg",
        width: 1200,
        height: 630,
        alt: "Municipalidad de Villa del Dique - Vecinos",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vecinos - Municipalidad de Villa del Dique",
    description: "Información y servicios para los vecinos de Villa del Dique.",
    images: ["https://www.villadeldique.gob.ar/images/og-image-vecinos.jpeg"],
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
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/vecinos",
  },
}

export default function VecinosLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${nunito.variable} ${montserrat.variable}`}>
      {" "}
      {/* Apply font variables to html */}
      <body className={`font-montserrat`}>{children}</body> {/* Set default body font */}
    </html>
  )
}
