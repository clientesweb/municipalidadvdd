import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Oswald } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
})

const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Merkat Agri | Distribuidor Oficial ORSI - Maquinaria Agrícola Italiana",
  description:
    "Merkat Agri ofrece al agricultor argentino equipos agrícolas ORSI de la más avanzada tecnología italiana. Especializados en trituración y laboreo del suelo desde 1979.",
  keywords:
    "maquinaria agrícola, ORSI, Merkat Agri, implementos agrícolas, tecnología italiana, trituración suelo, maquinaria Argentina, equipos ORSI, agro, campo argentino",
  authors: [{ name: "Merkat Agri" }],
  creator: "Merkat Agri",
  publisher: "Merkat Agri",
  robots: "index, follow",
  themeColor: "#eeb010",
  viewport: "width=device-width, initial-scale=1",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://merkat-agri.vercel.app",
    siteName: "Merkat Agri - Distribuidor Oficial ORSI",
    title: "Merkat Agri | Distribuidor Oficial ORSI - Maquinaria Agrícola Italiana",
    description:
      "Merkat Agri ha nacido para ofrecer al agricultor argentino los equipos agrícolas ORSI de la más avanzada tecnología italiana y la mayor calidad.",
    images: [
      {
        url: "/images/banner-promocional-merkat-agri.webp",
        width: 1200,
        height: 630,
        alt: "Merkat Agri - Tradicionalmente un paso adelante",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Merkat Agri | Distribuidor Oficial ORSI - Maquinaria Agrícola Italiana",
    description: "Equipos agrícolas ORSI de tecnología italiana para el campo argentino desde 1979.",
    images: ["/images/banner-promocional-merkat-agri.webp"],
  },
  alternates: {
    canonical: "https://merkat-agri.vercel.app",
  },
  category: "agriculture",
  classification: "Agricultural Machinery",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${oswald.variable} antialiased`}>
      <head>
        <link rel="icon" href="/favicon.webp" sizes="any" />
        <link rel="apple-touch-icon" href="/favicon.webp" />
      </head>
      <body>{children}</body>
    </html>
  )
}
