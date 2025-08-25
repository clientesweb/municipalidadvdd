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
  title: "Honorable Concejo Deliberante - Villa del Dique | Municipalidad Oficial",
  description:
    "Honorable Concejo Deliberante de Villa del Dique. Conoce las autoridades, digestivo normativo y la composición del cuerpo legislativo municipal. Presidente Alejandra Tosco, Vice-Presidentes Betiana Bassani y Laura Beatriz Loyola, concejales Víctor Hugo Rivero, Agustín Veliz, Miguel Veron, Marco Geremias y Secretaria Mónica Palacios.",
  keywords: [
    "Honorable Concejo Deliberante Villa del Dique",
    "concejales Villa del Dique",
    "Alejandra Tosco presidente",
    "Betiana Bassani vicepresidente",
    "Laura Beatriz Loyola vicepresidente primero",
    "Víctor Hugo Rivero concejal",
    "Agustín Veliz concejal",
    "Miguel Veron concejal",
    "Marco Geremias concejal",
    "Mónica Palacios secretaria",
    "digestivo normativo",
    "autoridades municipales",
    "cuerpo legislativo",
    "ordenanzas municipales",
    "gobierno local Villa del Dique",
    "democracia participativa",
    "representación ciudadana",
    "poder legislativo municipal",
    "sesiones concejo deliberante",
    "HCD Villa del Dique",
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
    url: "https://www.villadeldique.gob.ar/vecinos/honorable-concejo-deliberante",
    siteName: "Municipalidad de Villa del Dique",
    title: "Honorable Concejo Deliberante - Villa del Dique | Cuerpo Legislativo Municipal",
    description:
      "Conoce las autoridades del Honorable Concejo Deliberante de Villa del Dique. Presidente Alejandra Tosco, concejales y digestivo normativo del cuerpo legislativo que representa a los ciudadanos en la toma de decisiones municipales.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/og-image-concejo.jpg",
        width: 1200,
        height: 630,
        alt: "Honorable Concejo Deliberante de Villa del Dique - Sesión del cuerpo legislativo municipal",
        type: "image/jpeg",
      },
    ],
    publishedTime: "2024-01-01T00:00:00.000Z",
    modifiedTime: "2024-01-01T00:00:00.000Z",
    section: "Gobierno Municipal",
    tags: [
      "Honorable Concejo Deliberante",
      "Villa del Dique",
      "Autoridades Municipales",
      "Cuerpo Legislativo",
      "Gobierno Local",
      "Alejandra Tosco",
      "Concejales",
      "Digestivo Normativo",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Honorable Concejo Deliberante - Villa del Dique",
    description:
      "Autoridades del Honorable Concejo Deliberante de Villa del Dique. Presidente Alejandra Tosco y cuerpo de concejales que representan a los ciudadanos.",
    images: ["https://www.villadeldique.gob.ar/images/og-image-concejo.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gpb.ar/vecinos/honorable-concejo-deliberante",
  },
  category: "government",
  classification: "Poder Legislativo Municipal",
  other: {
    "theme-color": "#16b5d0",
    "msapplication-TileColor": "#16b5d0",
    "article:publisher": "Municipalidad de Villa del Dique",
    "article:author": "Municipalidad de Villa del Dique",
    "article:section": "Gobierno Municipal",
    "article:tag":
      "honorable concejo deliberante, autoridades municipales, Villa del Dique, gobierno local, cuerpo legislativo, concejales, digestivo normativo",
    government_keywords:
      "concejo deliberante, concejales, presidente, vicepresidente, secretaria, digestivo normativo, ordenanzas municipales, poder legislativo",
    "geo.region": "AR-X",
    "geo.placename": "Villa del Dique, Córdoba, Argentina",
    "geo.position": "-32.1833;-64.4833",
    ICBM: "-32.1833, -64.4833",
  },
}

export default function HonorableConcejoDeliberanteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${darkerGrotesque.variable} ${cinzelDecorative.variable}`}>
      <head>
        {/* Structured Data for Government Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentOrganization",
              name: "Honorable Concejo Deliberante de Villa del Dique",
              alternateName: ["HCD Villa del Dique", "Concejo Deliberante Villa del Dique"],
              description:
                "Cuerpo legislativo municipal de Villa del Dique, Córdoba, Argentina. Compuesto por concejales electos que representan a los ciudadanos en la toma de decisiones municipales y la sanción de ordenanzas.",
              url: "https://www.villadeldique.gob.ar/vecinos/honorable-concejo-deliberante",
              logo: "https://www.villadeldique.gob.ar/images/logo-oficial.webp",
              image: "https://www.villadeldique.gob.ar/images/og-image-concejo.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mario Nivoli 206",
                addressLocality: "Villa del Dique",
                addressRegion: "Córdoba",
                postalCode: "5194",
                addressCountry: "AR",
              },
              telephone: "+54-3546-497241",
              email: "info@villadeldique.gob.ar",
              parentOrganization: {
                "@type": "GovernmentOrganization",
                name: "Municipalidad de Villa del Dique",
                url: "https://www.villadeldique.gob.ar",
              },
              areaServed: {
                "@type": "City",
                name: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "Argentina",
              },
              employee: [
                {
                  "@type": "Person",
                  name: "Alejandra Tosco",
                  jobTitle: "Presidente del Honorable Concejo Deliberante",
                  worksFor: {
                    "@type": "GovernmentOrganization",
                    name: "Honorable Concejo Deliberante de Villa del Dique",
                  },
                },
                {
                  "@type": "Person",
                  name: "Betiana Bassani",
                  jobTitle: "Vice-Presidente del Honorable Concejo Deliberante",
                  worksFor: {
                    "@type": "GovernmentOrganization",
                    name: "Honorable Concejo Deliberante de Villa del Dique",
                  },
                },
                {
                  "@type": "Person",
                  name: "Laura Beatriz Loyola",
                  jobTitle: "Vice-Presidente Primero del Honorable Concejo Deliberante",
                  worksFor: {
                    "@type": "GovernmentOrganization",
                    name: "Honorable Concejo Deliberante de Villa del Dique",
                  },
                },
                {
                  "@type": "Person",
                  name: "Víctor Hugo Rivero",
                  jobTitle: "Concejal",
                  worksFor: {
                    "@type": "GovernmentOrganization",
                    name: "Honorable Concejo Deliberante de Villa del Dique",
                  },
                },
                {
                  "@type": "Person",
                  name: "Agustín Veliz",
                  jobTitle: "Concejal",
                  worksFor: {
                    "@type": "GovernmentOrganization",
                    name: "Honorable Concejo Deliberante de Villa del Dique",
                  },
                },
                {
                  "@type": "Person",
                  name: "Miguel Veron",
                  jobTitle: "Concejal",
                  worksFor: {
                    "@type": "GovernmentOrganization",
                    name: "Honorable Concejo Deliberante de Villa del Dique",
                  },
                },
                {
                  "@type": "Person",
                  name: "Marco Geremias",
                  jobTitle: "Concejal",
                  worksFor: {
                    "@type": "GovernmentOrganization",
                    name: "Honorable Concejo Deliberante de Villa del Dique",
                  },
                },
                {
                  "@type": "Person",
                  name: "Mónica Palacios",
                  jobTitle: "Secretaria del Honorable Concejo Deliberante",
                  worksFor: {
                    "@type": "GovernmentOrganization",
                    name: "Honorable Concejo Deliberante de Villa del Dique",
                  },
                },
              ],
              foundingDate: "1995",
              knowsAbout: [
                "Ordenanzas Municipales",
                "Legislación Local",
                "Gobierno Municipal",
                "Representación Ciudadana",
                "Poder Legislativo",
                "Digestivo Normativo",
              ],
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.villadeldique.gob.ar/vecinos/honorable-concejo-deliberante",
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
                  name: "¿Quién es el Presidente del Honorable Concejo Deliberante de Villa del Dique?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La Presidente del Honorable Concejo Deliberante de Villa del Dique es Alejandra Tosco.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuáles son las funciones del Concejo Deliberante?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El Honorable Concejo Deliberante tiene tres funciones principales: ejercer el poder legislativo municipal sancionando ordenanzas, resoluciones y declaraciones; representar los intereses y necesidades de los vecinos de Villa del Dique; y realizar el control y fiscalización de la gestión del Poder Ejecutivo Municipal.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Quiénes integran el Honorable Concejo Deliberante?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El Honorable Concejo Deliberante está integrado por: Presidente Alejandra Tosco, Vice-Presidente Betiana Bassani, Vice-Presidente Primero Laura Beatriz Loyola, los concejales Víctor Hugo Rivero, Agustín Veliz, Miguel Veron y Marco Geremias, y la Secretaria Mónica Palacios.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué es el digestivo normativo?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El digestivo normativo es el conjunto de normas, ordenanzas, resoluciones y reglamentaciones que regulan la vida municipal y son sancionadas por el Honorable Concejo Deliberante de Villa del Dique.",
                  },
                },
              ],
            }),
          }}
        />

        {/* BreadcrumbList Structured Data */}
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
                  name: "Vecinos",
                  item: "https://www.villadeldique.gob.ar/vecinos",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Honorable Concejo Deliberante",
                  item: "https://www.villadeldique.gob.ar/vecinos/honorable-concejo-deliberante",
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
