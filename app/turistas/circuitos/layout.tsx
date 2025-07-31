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
  title: "Circuitos - Villa del Dique | La Perla de Calamuchita, Córdoba",
  description:
    "Descubre los mejores circuitos y senderos de Villa del Dique. Trekking, caminatas, rutas en bicicleta y senderos para todos los niveles. El Camino de los Cuatro Vados, Circuito del Embalse, Ascenso al Cerro de la Cruz y más.",
  keywords: [
    "circuitos Villa del Dique",
    "senderos Córdoba",
    "trekking Villa del Dique",
    "caminatas Calamuchita",
    "Camino de los Cuatro Vados",
    "La Sierrita",
    "Circuito del Embalse",
    "Cerro de la Cruz",
    "sendero de la costa",
    "casco histórico Villa del Dique",
    "turismo activo",
    "rutas en bicicleta",
    "Sierras de Córdoba",
    "turismo aventura",
    "General San Martín",
    "Embalse Río Tercero",
    "Perla de Calamuchita circuitos",
  ],
  authors: [{ name: "Municipalidad de Villa del Dique" }],
  creator: "Municipalidad de Villa del Dique",
  publisher: "Municipalidad de Villa del Dique",
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
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.villadeldique.gob.ar/turistas/circuitos",
    siteName: "Municipalidad de Villa del Dique",
    title: "Circuitos - Villa del Dique | La Perla de Calamuchita",
    description:
      "Explora los mejores circuitos y senderos de Villa del Dique: trekking, caminatas, rutas en bicicleta y senderos históricos para todos los niveles.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/og-image-circuitos.jpg",
        width: 1200,
        height: 630,
        alt: "Circuitos Villa del Dique - La Perla de Calamuchita, Córdoba",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Circuitos - Villa del Dique | La Perla de Calamuchita",
    description:
      "Explora los mejores circuitos y senderos de Villa del Dique: trekking, caminatas y rutas para todos los niveles.",
    images: ["https://www.villadeldique.gob.ar/images/og-image-circuitos.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/turistas/circuitos",
  },
  category: "tourism",
  classification: "Circuitos Turísticos",
  other: {
    "theme-color": "#c84f9b",
    "msapplication-TileColor": "#c84f9b",
  },
}

export default function CircuitosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${darkerGrotesque.variable} ${cinzelDecorative.variable}`}>
      <head>
        {/* Structured Data for Tourist Circuits */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristAttraction",
              name: "Circuitos Turísticos Villa del Dique",
              description:
                "Circuitos y senderos turísticos en Villa del Dique: trekking, caminatas, rutas en bicicleta y tours históricos para todos los niveles.",
              url: "https://www.villadeldique.gob.ar/turistas/circuitos",
              logo: "https://www.villadeldique.gob.ar/images/logo-oficial.webp",
              image: "https://www.villadeldique.gob.ar/images/banner-circuitos-villa-del-dique.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },
              telephone: "+54-3546-528341",
              hasMap: "https://maps.google.com/villa-del-dique",
              offers: [
                {
                  "@type": "Offer",
                  name: "El Camino de los Cuatro Vados - La Sierrita",
                  description: "Caminata de 8km con dificultad media, apta para todo público",
                  priceRange: "Gratis",
                },
                {
                  "@type": "Offer",
                  name: "Circuito del Embalse",
                  description: "Ruta de 40km alrededor del Embalse del Río Tercero",
                  priceRange: "Gratis",
                },
                {
                  "@type": "Offer",
                  name: "Ascenso al Cerro de la Cruz",
                  description: "Trekking de 2 horas con dificultad media",
                  priceRange: "Gratis",
                },
              ],
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.villadeldique.gob.ar/turistas/circuitos",
              },
            }),
          }}
        />
      </head>
      <body className="font-darker-grotesk">{children}</body>
    </html>
  )
}