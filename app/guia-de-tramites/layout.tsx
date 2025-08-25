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
  title: "Guía de Trámites - Villa del Dique | Municipalidad Oficial",
  description:
    "Guía completa de trámites municipales en Villa del Dique. Habilitación de comercio, certificación de posesión, mensura de posesión, extracción de arbolado público y más. Requisitos, documentación y procedimientos paso a paso.",
  keywords: [
    "trámites Villa del Dique",
    "habilitación comercio",
    "certificación posesión",
    "mensura posesión",
    "trámites municipales",
    "documentación municipal",
    "requisitos trámites",
    "procedimientos municipales",
    "Villa del Dique municipalidad",
    "gestiones municipales",
    "arbolado público",
    "catastro inmuebles",
    "espacios verdes",
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
    url: "https://www.villadeldique.gob.ar/vecinos/guia-de-tramites",
    siteName: "Municipalidad de Villa del Dique",
    title: "Guía de Trámites - Villa del Dique | Vamos Juntos",
    description:
      "Guía completa de trámites municipales en Villa del Dique. Habilitación de comercio, certificación de posesión, mensura y más. Requisitos y procedimientos paso a paso para vecinos.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/og-image-tramites.jpg",
        width: 1200,
        height: 630,
        alt: "Guía de Trámites - Villa del Dique Municipalidad",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Guía de Trámites - Villa del Dique | Vamos Juntos",
    description:
      "Guía completa de trámites municipales: habilitación de comercio, certificación de posesión, mensura y más procedimientos en Villa del Dique.",
    images: ["https://www.villadeldique.gob.ar/images/og-image-tramites.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/vecinos/guia-de-tramites",
  },
  category: "government",
  classification: "Servicios Municipales",
  other: {
    "theme-color": "#16b5d0",
    "msapplication-TileColor": "#16b5d0",
    "article:publisher": "Municipalidad de Villa del Dique",
    "article:author": "Municipalidad de Villa del Dique",
    "article:section": "Trámites Municipales",
    "article:tag": "trámites, municipalidad, Villa del Dique, habilitación comercio, certificación posesión",
    service_keywords: "trámites municipales, habilitación comercio, certificación posesión, mensura, arbolado público",
  },
}

export default function GuiaDeTramitesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${darkerGrotesque.variable} ${cinzelDecorative.variable}`}>
      <head>
        {/* Structured Data for Government Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentService",
              name: "Guía de Trámites Municipales - Villa del Dique",
              description:
                "Servicios y trámites municipales disponibles para los vecinos de Villa del Dique, incluyendo habilitación de comercio, certificación de posesión, mensura y más.",
              url: "https://www.villadeldique.com.ar/vecinos/guia-de-tramites",
              provider: {
                "@type": "GovernmentOrganization",
                name: "Municipalidad de Villa del Dique",
                url: "https://www.villadeldique.gob.ar",
                logo: "https://www.villadeldique.gob.ar/images/logo-oficial.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Mario Nivoli 206",
                  addressLocality: "Villa del Dique",
                  addressRegion: "Córdoba",
                  addressCountry: "AR",
                },
                telephone: "+54-3546-497241",
                email: "obraprivadavdd@gmail.com",
              },
              areaServed: {
                "@type": "City",
                name: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "Argentina",
              },
              availableChannel: [
                {
                  "@type": "ServiceChannel",
                  name: "Presencial",
                  serviceLocation: {
                    "@type": "Place",
                    name: "Edificio de la Municipalidad",
                    address: {
                      "@type": "PostalAddress",
                      streetAddress: "Mario Nivoli 206",
                      addressLocality: "Villa del Dique",
                      addressRegion: "Córdoba",
                      addressCountry: "AR",
                    },
                  },
                },
                {
                  "@type": "ServiceChannel",
                  name: "Online",
                  serviceUrl: "https://www.villadeldique.gob.ar/vecinos/guia-de-tramites",
                },
              ],
              serviceType: "Trámites Municipales",
              category: "Government Services",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Catálogo de Trámites Municipales",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Habilitación de Comercio",
                    description: "Trámite para habilitar actividades comerciales en Villa del Dique",
                    category: "Comercio",
                  },
                  {
                    "@type": "Offer",
                    name: "Certificación de Posesión",
                    description: "Certificado de posesión para propiedades inmuebles",
                    category: "Catastro / Inmuebles",
                  },
                  {
                    "@type": "Offer",
                    name: "Mensura de Posesión",
                    description: "Trámite de mensura para regularización de posesión",
                    category: "Catastro / Inmuebles",
                  },
                  {
                    "@type": "Offer",
                    name: "Solicitud de Extracción de Arbolado Público",
                    description: "Permiso para extracción de árboles en espacios públicos",
                    category: "Espacios Verdes",
                  },
                ],
              },
              audience: {
                "@type": "Audience",
                name: "Vecinos de Villa del Dique",
                geographicArea: {
                  "@type": "City",
                  name: "Villa del Dique",
                  addressRegion: "Córdoba",
                  addressCountry: "Argentina",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.villadeldique.gob.ar/vecinos/guia-de-tramites",
              },
              sameAs: [
                "https://www.facebook.com/villadeldique",
                "https://www.instagram.com/villadeldique",
                "https://www.youtube.com/villadeldique",
              ],
            }),
          }}
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Dónde se realizan los trámites de habilitación de comercio?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Los trámites de habilitación de comercio se realizan en el Edificio de la Municipalidad, ubicado en Mario Nivoli 206, Villa del Dique, Córdoba.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué documentos necesito para la certificación de posesión?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Para la certificación de posesión necesitas: ser titular con escritura o poseedor con mensuras aprobadas, libre de deuda de impuestos, certificado de amojonamiento, plano de proyectos firmado por profesional matriculado, DNI del solicitante y relevamiento de especies nativas del lote.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo solicito la extracción de arbolado público?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Para solicitar la extracción de arbolado público debes completar el formulario correspondiente y contactar a obraprivadavdd@gmail.com. Puedes descargar la documentación oficial desde nuestra página web.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Dónde se realizan las mensuras de posesión?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las mensuras de posesión se realizan en el Colegio de Arquitectos de Villa del Dique. También puedes contactar a mensuras.municipalidad.vdd@gmail.com para más información.",
                  },
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
