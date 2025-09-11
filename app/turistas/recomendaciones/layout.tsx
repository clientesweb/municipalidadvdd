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
  title: "Recomendaciones al Turista - Villa del Dique | Guía de Seguridad y Consejos",
  description:
    "Recomendaciones oficiales para turistas que visitan Villa del Dique. Consejos de seguridad, normas de convivencia, cuidado del medio ambiente y disfrute responsable en la Perla de Calamuchita, Córdoba.",
  keywords: [
    "recomendaciones turistas Villa del Dique",
    "consejos seguridad turismo",
    "normas turistas Córdoba",
    "seguridad lago Calamuchita",
    "turismo responsable Villa del Dique",
    "consejos visitantes sierras",
    "recomendaciones deportes acuáticos",
    "seguridad camping Villa del Dique",
    "normas convivencia turística",
    "cuidado medio ambiente turismo",
    "prevención accidentes turísticos",
    "consejos pesca deportiva",
    "seguridad senderos serranos",
    "recomendaciones trekking",
    "turismo seguro Córdoba",
    "consejos vacaciones sierras",
    "prevención Villa del Dique",
    "guía turista responsable",
    "normas municipales turismo",
    "seguridad familiar turismo",
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
    url: "https://www.villadeldique.gob.ar/turistas/recomendaciones",
    siteName: "Municipalidad de Villa del Dique",
    title: "Recomendaciones al Turista - Villa del Dique",
    description:
      "Guía oficial de recomendaciones para turistas: consejos de seguridad, normas de convivencia y turismo responsable en Villa del Dique, la Perla de Calamuchita.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/og-image-recomendaciones.jpg",
        width: 1200,
        height: 630,
        alt: "Recomendación al Turista - Villa del Dique, Municipalidad",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Recomendaciones al Turista - Villa del Dique",
    description:
      "Consejos oficiales de seguridad y turismo responsable para disfrutar Villa del Dique de manera segura y sustentable.",
    images: ["https://www.villadeldique.gob.ar/images/og-image-recomendaciones.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/turistas/recomendaciones",
  },
  category: "tourism",
  classification: "Guía de Seguridad Turística",
  other: {
    "theme-color": "#c84f9b",
    "msapplication-TileColor": "#c84f9b",
  },
}

export default function RecomendacionesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${darkerGrotesque.variable} ${cinzelDecorative.variable}`}>
      <head>
        {/* Structured Data for Tourist Safety Guide */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelGuide",
              name: "Recomendaciones al Turista - Villa del Dique",
              description:
                "Guía oficial de recomendaciones de seguridad y turismo responsable para visitantes de Villa del Dique, la Perla de Calamuchita.",
              url: "https://www.villadeldique.gob.ar/turistas/recomendaciones",
              image: "https://www.villadeldique.gob.ar/images/og-image-recomendaciones.jpg",
              author: {
                "@type": "Organization",
                name: "Municipalidad de Villa del Dique",
                url: "https://www.villadeldique.gob.ar",
              },
              publisher: {
                "@type": "Organization",
                name: "Municipalidad de Villa del Dique",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.villadeldique.gob.ar/images/logo-oficial.webp",
                },
              },
              datePublished: "2024-01-01",
              dateModified: "2024-12-01",
              inLanguage: "es-AR",
              about: {
                "@type": "Place",
                name: "Villa del Dique",
                description: "La Perla de Calamuchita, Córdoba, Argentina",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Villa del Dique",
                  addressRegion: "Córdoba",
                  addressCountry: "AR",
                },
              },
              mainEntity: {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "¿Qué precauciones debo tomar en actividades acuáticas?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Siempre use chaleco salvavidas, respete las zonas habilitadas para cada actividad, no ingrese al agua en estado de ebriedad, y manténgase informado sobre las condiciones climáticas.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Cuáles son las normas para acampar en Villa del Dique?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Acampe solo en lugares autorizados, mantenga limpio el lugar, respete el horario de silencio, no haga fuego fuera de las parrillas habilitadas, y deposite la basura en los contenedores.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Cómo puedo contribuir al cuidado del medio ambiente?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No arroje basura en espacios naturales, respete la flora y fauna local, use senderos marcados, no extraiga plantas o piedras, y participe en el turismo sustentable.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Qué debo saber sobre la pesca deportiva?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Respete las vedas y tallas mínimas, obtenga los permisos necesarios, practique pesca con devolución cuando sea posible, y no pesque en zonas prohibidas.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "¿Cuáles son las recomendaciones para senderismo?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Informe su itinerario, lleve agua y protección solar, use calzado adecuado, no se desvíe de senderos marcados, y evite caminar solo en zonas remotas.",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Breadcrumb Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://www.villadeldique.gob.ar",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Turistas",
                  item: "https://www.villadeldique.gob.ar/turistas",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Recomendaciones",
                  item: "https://www.villadeldique.gob.ar/turistas/recomendaciones",
                },
              ],
            }),
          }}
        />

        {/* Tourist Information Center */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristInformationCenter",
              name: "Centro de Información Turística Villa del Dique",
              description:
                "Centro oficial de información y recomendaciones para turistas que visitan Villa del Dique, la Perla de Calamuchita.",
              url: "https://www.villadeldique.com.ar/turistas/recomendaciones",
              telephone: "+54-3546-528341",
              email: "villadeliqueturismo1@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -32.1833,
                longitude: -64.4833,
              },
              openingHours: "Mo-Su 08:00-20:00",
              sameAs: ["https://www.instagram.com/turismoycultura.villadeldique"],
            }),
          }}
        />
      </head>
      <body className="font-darker-grotesk">{children}</body>
    </html>
  )
}
