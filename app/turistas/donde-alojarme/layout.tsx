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
  title: "¿Dónde alojarme? - Alojamientos en Villa del Dique | Municipalidad",
  description:
    "Descubre las mejores opciones de alojamiento en Villa del Dique: hoteles, cabañas, camping municipal y más. Encuentra el lugar perfecto para tu estadía en nuestro hermoso destino turístico.",
  keywords: [
    "alojamiento Villa del Dique",
    "hoteles Villa del Dique",
    "cabañas Villa del Dique",
    "camping Villa del Dique",
    "donde dormir Villa del Dique",
    "hospedaje Villa del Dique",
    "turismo Villa del Dique",
    "vacaciones Villa del Dique",
    "Hotel Amerian",
    "Hotel Carrillo",
    "El Portal de la Villa",
    "Hostería Valle Azul",
    "Hotel Venezia",
    "Cabañas El Refugio",
    "Cabañas Las Sierras",
    "Cabañas La Montaña",
    "Cabañas El Sol",
    "Camping Municipal Villa del Dique",
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
    canonical: "https://www.villadeldique.com.ar/turistas/donde-alojarme",
  },
  openGraph: {
    title: "¿Dónde alojarme? - Alojamientos en Villa del Dique",
    description:
      "Descubre las mejores opciones de alojamiento en Villa del Dique: hoteles, cabañas, camping municipal y más. Encuentra el lugar perfecto para tu estadía.",
    url: "https://www.villadeldique.com.ar/turistas/donde-alojarme",
    siteName: "Municipalidad de Villa del Dique",
    images: [
      {
        url: "https://www.villadeldique.com.ar/images/og-image-donde-alojarme.jpg",
        width: 1200,
        height: 630,
        alt: "Alojamientos en Villa del Dique - Hoteles, Cabañas y Camping",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "¿Dónde alojarme? - Alojamientos en Villa del Dique",
    description:
      "Descubre las mejores opciones de alojamiento en Villa del Dique: hoteles, cabañas, camping municipal y más.",
    images: ["https://www.villadeldique.com.ar/images/og-image-donde-alojarme.jpg"],
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

export default function DondeAlojarmeLayout({
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
                  "@id": "https://www.villadeldique.com.ar/turistas/donde-alojarme",
                  url: "https://www.villadeldique.com.ar/turistas/donde-alojarme",
                  name: "¿Dónde alojarme? - Alojamientos en Villa del Dique",
                  description:
                    "Descubre las mejores opciones de alojamiento en Villa del Dique: hoteles, cabañas, camping municipal y más.",
                  isPartOf: {
                    "@id": "https://www.villadeldique.com.ar/#website",
                  },
                  about: {
                    "@id": "https://www.villadeldique.com.ar/#organization",
                  },
                  primaryImageOfPage: {
                    "@id": "https://www.villadeldique.com.ar/images/banner-donde-alojarme-villa-del-dique.webp",
                  },
                  datePublished: "2024-01-15T10:00:00-03:00",
                  dateModified: "2024-01-15T10:00:00-03:00",
                  breadcrumb: {
                    "@id": "https://www.villadeldique.com.ar/turistas/donde-alojarme#breadcrumb",
                  },
                  inLanguage: "es-AR",
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.villadeldique.com.ar/turistas/donde-alojarme#breadcrumb",
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
                      name: "¿Dónde alojarme?",
                      item: "https://www.villadeldique.com.ar/turistas/donde-alojarme",
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
                    "Hermoso destino turístico en las Sierras de Córdoba, Argentina, conocido por su lago y paisajes naturales.",
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
                  touristType: ["Families", "Nature Lovers", "Adventure Seekers"],
                  availableLanguage: "Spanish",
                },
                {
                  "@type": "Hotel",
                  "@id": "https://www.villadeldique.com.ar/#hotel-amerian",
                  name: "Amerian / Hotel Carrillo",
                  description:
                    "Hotel de primera categoría en Villa del Dique con excelentes servicios y ubicación privilegiada.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Av. de los Navegantes 663",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  telephone: "+54-3546-506285",
                  url: "https://www.amerian.com/hotel/amerian-villa-del-dique",
                  sameAs: ["https://www.instagram.com/hotelcarrillo.amerian", "https://g.co/kgs/r4Epumd"],
                  starRating: {
                    "@type": "Rating",
                    ratingValue: "4",
                  },
                  priceRange: "$$$",
                },
                {
                  "@type": "Hotel",
                  "@id": "https://www.villadeldique.com.ar/#hotel-portal",
                  name: "El Portal de la Villa",
                  description: "Hotel boutique con encanto y atención personalizada en el corazón de Villa del Dique.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Av. San Martín 194",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  telephone: "+54-3546-497995",
                  sameAs: ["https://www.instagram.com/elportaldelavillahotel", "https://g.co/kgs/pRFHC1e"],
                  starRating: {
                    "@type": "Rating",
                    ratingValue: "3",
                  },
                  priceRange: "$$",
                },
                {
                  "@type": "Hotel",
                  "@id": "https://www.villadeldique.com.ar/#hosteria-valle-azul",
                  name: "Hostería Valle Azul",
                  description: "Hostería familiar con vista al lago y ambiente acogedor.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Av. Los Pescadores 334",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  telephone: "+54-3546-497815",
                  sameAs: ["https://www.instagram.com/hosteriavalleazuldeldique", "https://g.co/kgs/zof4721"],
                  starRating: {
                    "@type": "Rating",
                    ratingValue: "3",
                  },
                  priceRange: "$$",
                },
                {
                  "@type": "Hotel",
                  "@id": "https://www.villadeldique.com.ar/#hotel-venezia",
                  name: "Hotel Venezia",
                  description: "Hotel tradicional con excelente ubicación y servicios de calidad.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Av. Hipólito Yrigoyen 329",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  telephone: "+54-3546-497252",
                  sameAs: ["https://g.co/kgs/BWpCGW7"],
                  starRating: {
                    "@type": "Rating",
                    ratingValue: "3",
                  },
                  priceRange: "$$",
                },
                {
                  "@type": "Campground",
                  "@id": "https://www.villadeldique.com.ar/#camping-municipal",
                  name: "Camping Municipal Villa del Dique",
                  description:
                    "Camping municipal ubicado en el balneario con acceso directo al lago y todas las comodidades.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "San Casimiro 130",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  telephone: "+54-3456-497241",
                  sameAs: ["https://g.co/kgs/jZeLcTn"],
                  amenityFeature: [
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Acceso al lago",
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Sanitarios",
                    },
                    {
                      "@type": "LocationFeatureSpecification",
                      name: "Electricidad",
                    },
                  ],
                  priceRange: "$",
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://www.villadeldique.com.ar/turistas/donde-alojarme#faq",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "¿Cuáles son las mejores opciones de alojamiento en Villa del Dique?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Villa del Dique ofrece diversas opciones: hoteles como Amerian/Hotel Carrillo y El Portal de la Villa, hosterías como Valle Azul, cabañas familiares y el camping municipal con acceso directo al lago.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Hay camping en Villa del Dique?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sí, contamos con el Camping Municipal ubicado en San Casimiro 130, en el Balneario Municipal, con acceso directo al lago y todas las comodidades necesarias.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Qué hoteles recomiendan en Villa del Dique?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Recomendamos el Amerian/Hotel Carrillo en Av. de los Navegantes, El Portal de la Villa en Av. San Martín, la Hostería Valle Azul en Av. Los Pescadores, y el Hotel Venezia en Av. Hipólito Yrigoyen.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "¿Hay cabañas disponibles en Villa del Dique?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Sí, ofrecemos varias opciones de cabañas: El Refugio, Las Sierras, La Montaña y El Sol, todas con diferentes ubicaciones y servicios para familias y grupos.",
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
