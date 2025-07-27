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
  title: "¿Dónde comer? - Gastronomía en Villa del Dique | Municipalidad",
  description:
    "Descubre la mejor gastronomía de Villa del Dique: restaurantes, cafeterías, pizzerías y opciones para llevar. Sabores únicos con vista al lago en las Sierras de Córdoba.",
  keywords: [
    "gastronomía Villa del Dique",
    "restaurantes Villa del Dique",
    "donde comer Villa del Dique",
    "cafeterías Villa del Dique",
    "pizzerías Villa del Dique",
    "comida Villa del Dique",
    "Milano Bar",
    "Chela",
    "Don Quijote Parrilla Cabritos",
    "Walnut Peñon",
    "Mama Pulpa",
    "La Sede del Club",
    "Walnut Cafeteria",
    "Flora Café Bristo",
    "Amelia Cafetería",
    "Tomassino y Pancracia",
    "IOWA Restaurant",
    "Pizzería La Casona",
    "Luga Parrilla",
    "Old Wolf Food",
    "Bsb Hamburguesería",
    "De Diez Pizzería",
    "Sur más que un bar",
    "Tasty Food",
    "El Parripollo de Pedro",
    "Pomponia",
    "Roda",
    "Mama Cocina",
    "turismo gastronómico",
    "comida serrana",
    "restaurantes con vista al lago",
  ],
  authors: [{ name: "Municipalidad de Villa del Dique" }],
  creator: "Municipalidad de Villa del Dique",
  publisher: "Municipalidad de Villa del Dique",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.villadeldique.com.ar/turistas/donde-comer",
  },
  openGraph: {
    title: "¿Dónde comer? - Gastronomía en Villa del Dique",
    description:
      "Descubre la mejor gastronomía de Villa del Dique: restaurantes, cafeterías, pizzerías y opciones para llevar. Sabores únicos con vista al lago.",
    url: "https://www.villadeldique.com.ar/turistas/donde-comer",
    siteName: "Municipalidad de Villa del Dique",
    images: [
      {
        url: "https://www.villadeldique.com.ar/images/og-image-donde-comer.jpg",
        width: 1200,
        height: 630,
        alt: "Gastronomía en Villa del Dique - Restaurantes y Cafeterías",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Dónde comer? - Gastronomía en Villa del Dique",
    description:
      "Descubre la mejor gastronomía de Villa del Dique: restaurantes, cafeterías, pizzerías y opciones para llevar.",
    images: ["https://www.villadeldique.com.ar/images/og-image-donde-comer.jpg"],
    creator: "@VillaDelDique",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
  other: {
    "theme-color": "#c84f9b",
    "msapplication-TileColor": "#c84f9b",
  },
}

export default function DondeComerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${darkerGrotesque.variable} ${cinzelDecorative.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebPage",
                  "@id": "https://www.villadeldique.com.ar/turistas/donde-comer",
                  url: "https://www.villadeldique.com.ar/turistas/donde-comer",
                  name: "¿Dónde comer? - Gastronomía en Villa del Dique",
                  description:
                    "Descubre la mejor gastronomía de Villa del Dique: restaurantes, cafeterías, pizzerías y opciones para llevar.",
                  isPartOf: {
                    "@id": "https://www.villadeldique.com.ar/#website",
                  },
                  about: {
                    "@id": "https://www.villadeldique.com.ar/#organization",
                  },
                  primaryImageOfPage: {
                    "@id": "https://www.villadeldique.com.ar/images/banner-donde-comer-villa-del-dique.jpg",
                  },
                  datePublished: "2024-01-15T10:00:00-03:00",
                  dateModified: "2024-01-15T10:00:00-03:00",
                  breadcrumb: {
                    "@id": "https://www.villadeldique.com.ar/turistas/donde-comer#breadcrumb",
                  },
                  inLanguage: "es-AR",
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.villadeldique.com.ar/turistas/donde-comer#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Inicio",
                      item: "https://www.villadeldique.com.ar",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Turistas",
                      item: "https://www.villadeldique.com.ar/turistas",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "¿Dónde comer?",
                      item: "https://www.villadeldique.com.ar/turistas/donde-comer",
                    },
                  ],
                },
                {
                  "@type": "Organization",
                  "@id": "https://www.villadeldique.com.ar/#organization",
                  name: "Municipalidad de Villa del Dique",
                  url: "https://www.villadeldique.com.ar",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.villadeldique.com.ar/images/logo-oficial.webp",
                    width: 300,
                    height: 120,
                  },
                  sameAs: [
                    "https://www.facebook.com/villadeldiqueoficial",
                    "https://www.instagram.com/villadeldiqueoficial",
                    "https://www.youtube.com/villadeldiqueoficial",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+54-3546-528341",
                    contactType: "Información Turística",
                    availableLanguage: "Spanish",
                  },
                },
                {
                  "@type": "TouristDestination",
                  "@id": "https://www.villadeldique.com.ar/#destination",
                  name: "Villa del Dique",
                  description:
                    "Hermoso destino turístico en las Sierras de Córdoba, Argentina, conocido por su lago, paisajes naturales y excelente gastronomía.",
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -32.1833,
                    longitude: -64.4667,
                  },
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  touristType: ["Families", "Food Lovers", "Nature Lovers"],
                  availableLanguage: "Spanish",
                },
                {
                  "@type": "Restaurant",
                  "@id": "https://www.villadeldique.com.ar/#milano-bar",
                  name: "Milano Bar",
                  description: "Bar y restaurante con ambiente acogedor en el centro de Villa del Dique.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Av. San Martín 267",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  telephone: "+54-3546-459280",
                  sameAs: ["https://www.instagram.com/milanobarvdd"],
                  servesCuisine: "Argentina",
                  priceRange: "$$",
                },
                {
                  "@type": "Restaurant",
                  "@id": "https://www.villadeldique.com.ar/#chela",
                  name: "Chela",
                  description: "Restaurante artesanal con propuestas gastronómicas únicas.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Av. San Martín 286",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  telephone: "+54-3546-478738",
                  sameAs: ["https://www.instagram.com/chelaartesana"],
                  servesCuisine: "Argentina",
                  priceRange: "$$",
                },
                {
                  "@type": "Restaurant",
                  "@id": "https://www.villadeldique.com.ar/#don-quijote",
                  name: "Don Quijote y Parrilla Cabritos",
                  description: "Parrilla tradicional especializada en carnes y cabritos.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Av. de los Navegantes 661",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  telephone: "+54-3546-650622",
                  sameAs: ["https://www.instagram.com/hotelcarrillo.amerian"],
                  servesCuisine: "Barbecue",
                  priceRange: "$$$",
                },
                {
                  "@type": "Cafe",
                  "@id": "https://www.villadeldique.com.ar/#walnut-cafeteria",
                  name: "Walnut Cafeteria & Pastelería",
                  description: "Cafetería y pastelería con productos artesanales y ambiente familiar.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Bv. Hipólito Irigoyen 268",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  sameAs: ["https://www.instagram.com/walnutpasteleria"],
                  servesCuisine: "Cafe",
                  priceRange: "$",
                },
                {
                  "@type": "Restaurant",
                  "@id": "https://www.villadeldique.com.ar/#iowa",
                  name: "IOWA",
                  description: "Restaurante con propuesta gastronómica internacional y ambiente moderno.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Av. San Martín 220",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  telephone: "+54-3546-497542",
                  sameAs: ["https://www.instagram.com/restaurant_iowa"],
                  servesCuisine: "International",
                  priceRange: "$$$",
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.villadeldique.com.ar/turistas/donde-comer#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "¿Cuáles son los mejores restaurantes en Villa del Dique?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Villa del Dique cuenta con excelentes opciones gastronómicas como Milano Bar, Chela, Don Quijote y Parrilla Cabritos, IOWA, Tomassino y Pancracia, y muchos más con diferentes especialidades y ambientes.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Hay cafeterías en Villa del Dique?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sí, contamos con varias cafeterías como Walnut Cafeteria & Pastelería, Flora Café Bristo y Amelia Cafetería y Pastelería, perfectas para disfrutar de un café y dulces artesanales.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Qué opciones de comida para llevar hay disponibles?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Ofrecemos varias opciones para llevar como El Parripollo de Pedro, Pomponia, Roda y Mama Cocina, ideales para disfrutar en el camping o en tu alojamiento.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Los restaurantes tienen vista al lago?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Varios restaurantes en Villa del Dique ofrecen hermosas vistas al lago y a las sierras, especialmente aquellos ubicados en las avenidas principales como Av. de los Navegantes y Av. San Martín.",
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-darker-grotesk">{children}</body>
    </html>
  )
}
