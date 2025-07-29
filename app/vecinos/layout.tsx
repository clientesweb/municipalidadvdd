import type React from "react"
import type { Metadata } from "next"
import { Darker_Grotesque, Cinzel_Decorative } from "next/font/google"

// Configurar Darker Grotesque con el rango de pesos
const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

// Configurar Cinzel Decorative con los pesos específicos
const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  weight: ["400", "700", "900"],
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
    url: "https://www.villadeldique.com.ar/vecinos",
    siteName: "Municipalidad de Villa del Dique",
    images: [
      {
        url: "https://www.villadeldique.com.ar/images/og-image-vecinos.jpeg",
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
    images: ["https://www.villadeldique.com.ar/images/og-image-vecinos.jpeg"],
  },
  alternates: {
    canonical: "https://www.villadeldique.com.ar/vecinos",
  },
}

export default function VecinosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${darkerGrotesque.variable} ${cinzelDecorative.variable}`}>
      <body className="font-darker-grotesk">{children}</body>
    </html>
  )
}
