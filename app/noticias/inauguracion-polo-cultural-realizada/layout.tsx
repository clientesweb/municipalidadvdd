import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Villa del Dique inauguró su nuevo Polo Cultural | Municipalidad de Villa del Dique",
  description:
    "Con enorme orgullo anunciamos que Villa del Dique ya cuenta con un Polo Cultural que permitirá seguir promoviendo actividades que fortalezcan la unión, el intercambio y el disfrute de toda nuestra comunidad.",
  keywords: [
    "Villa del Dique",
    "Polo Cultural",
    "Casa de la Cultura",
    "Anfiteatro Municipal",
    "Centro Cultural Pato Carret",
    "inauguración",
    "cultura",
    "comunidad",
    "obras municipales",
    "mano de obra local",
  ],
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
    canonical: "/noticias/inauguracion-polo-cultural-realizada",
  },
  openGraph: {
    title: "Villa del Dique inauguró su nuevo Polo Cultural",
    description:
      "Con enorme orgullo anunciamos que Villa del Dique ya cuenta con un Polo Cultural que permitirá seguir promoviendo actividades que fortalezcan la unión, el intercambio y el disfrute de toda nuestra comunidad.",
    url: "/noticias/inauguracion-polo-cultural-realizada",
    siteName: "Municipalidad de Villa del Dique",
    images: [
      {
        url: "/images/gran-inaguracion.jpg",
        width: 1200,
        height: 630,
        alt: "Inauguración del Polo Cultural de Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique inauguró su nuevo Polo Cultural",
    description:
      "Con enorme orgullo anunciamos que Villa del Dique ya cuenta con un Polo Cultural que permitirá seguir promoviendo actividades que fortalezcan la unión, el intercambio y el disfrute de toda nuestra comunidad.",
    images: ["/images/gran-inaguracion.jpg"],
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

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
