import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Acto en conmemoración del Día del Veterano y de los Caídos en la Guerra de Malvinas | Villa del Dique",
  description:
    "En la Plazoleta de los Fundadores se realizó un emotivo acto en homenaje a los Veteranos y a los Caídos en la Guerra de Malvinas, en el marco del 2 de abril.",
  keywords:
    "Villa del Dique, Malvinas, veteranos, caídos, guerra, conmemoración, 2 de abril, homenaje, Plazoleta de los Fundadores, Emiliano Torres",
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
    canonical: "/noticias/acto-malvinas-argentinas",
  },
  openGraph: {
    title: "Acto en conmemoración del Día del Veterano y de los Caídos en la Guerra de Malvinas",
    description:
      "En la Plazoleta de los Fundadores se realizó un emotivo acto en homenaje a los Veteranos y a los Caídos en la Guerra de Malvinas, en el marco del 2 de abril.",
    url: "/noticias/acto-malvinas-argentinas",
    siteName: "Municipalidad de Villa del Dique",
    images: [
      {
        url: "/acto-malvinas-argentinas.webp",
        width: 1200,
        height: 630,
        alt: "Acto en conmemoración del Día del Veterano y de los Caídos en la Guerra de Malvinas",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acto en conmemoración del Día del Veterano y de los Caídos en la Guerra de Malvinas",
    description:
      "En la Plazoleta de los Fundadores se realizó un emotivo acto en homenaje a los Veteranos y a los Caídos en la Guerra de Malvinas.",
    images: ["/acto-malvinas-argentinas.webp"],
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

export default function ActoMalvinasLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
