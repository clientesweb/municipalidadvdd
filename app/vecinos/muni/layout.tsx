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
  title: "La Muni - Villa del Dique | Gobierno Municipal Oficial",
  description:
    "Conoce las autoridades municipales de Villa del Dique. Intendente Emiliano Torres y su gabinete: Lourdes Toloza (Obras Públicas), Gisela Moroni (Economía), Gustavo Cuello (Salud), Adrián Segura (Turismo) y Tobias Barco (Comunicación). Visión, misión y compromiso con el progreso de nuestra comunidad.",
  keywords: [
    "municipalidad Villa del Dique",
    "intendente Emiliano Torres",
    "autoridades municipales Villa del Dique",
    "gobierno municipal Villa del Dique",
    "Lourdes Toloza obras públicas",
    "Gisela Moroni economía finanzas",
    "Gustavo Cuello salud bienestar social",
    "Adrián Segura turismo cultura deportes",
    "Tobias Barco comunicación",
    "gabinete municipal Villa del Dique",
    "secretarios municipales",
    "visión misión municipalidad",
    "gobierno local Córdoba",
    "administración pública Villa del Dique",
    "políticas públicas Villa del Dique",
    "desarrollo local",
    "inclusión social Villa del Dique",
    "turismo Villa del Dique",
    "infraestructura municipal",
    "progreso Villa del Dique",
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
    url: "https://www.villadeldique.com.ar/vecinos/muni",
    siteName: "Municipalidad de Villa del Dique",
    title: "La Muni - Villa del Dique | Gobierno Municipal con Emiliano Torres",
    description:
      "Conoce al Intendente Emiliano Torres y las autoridades municipales de Villa del Dique. Un gobierno comprometido con la inclusión, el desarrollo humano y el turismo. Visión y misión para el progreso de nuestra comunidad.",
    images: [
      {
        url: "https://www.villadeldique.com.ar/images/og-image-muni.jpeg",
        width: 1200,
        height: 630,
        alt: "La Muni Villa del Dique - Gobierno Municipal con Intendente Emiliano Torres",
        type: "image/jpeg",
      },
    ],
    publishedTime: "2024-01-01T00:00:00.000Z",
    modifiedTime: "2024-01-01T00:00:00.000Z",
    section: "Gobierno Municipal",
    tags: [
      "Gobierno Municipal",
      "Villa del Dique",
      "Intendente",
      "Emiliano Torres",
      "Autoridades",
      "Secretarios",
      "Visión",
      "Misión",
      "Desarrollo Local",
      "Inclusión Social",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "La Muni - Villa del Dique | Gobierno Municipal",
    description:
      "Intendente Emiliano Torres y autoridades municipales comprometidas con el progreso, la inclusión y el desarrollo turístico de Villa del Dique.",
    images: ["https://www.villadeldique.com.ar/images/og-image-muni.jpeg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.com.ar/vecinos/muni",
  },
  category: "government",
  classification: "Gobierno Municipal",
  other: {
    "theme-color": "#16b5d0",
    "msapplication-TileColor": "#16b5d0",
    "article:publisher": "Municipalidad de Villa del Dique",
    "article:author": "Municipalidad de Villa del Dique",
    "article:section": "Gobierno Municipal",
    "article:tag":
      "gobierno municipal, intendente, autoridades, Villa del Dique, Emiliano Torres, secretarios municipales, visión, misión",
    government_keywords:
      "intendente, secretarios, gobierno municipal, autoridades, administración pública, políticas públicas, desarrollo local",
    "geo.region": "AR-X",
    "geo.placename": "Villa del Dique, Córdoba, Argentina",
    "geo.position": "-32.1833;-64.4833",
    ICBM: "-32.1833, -64.4833",
  },
}

export default function MuniLayout({
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
              name: "Municipalidad de Villa del Dique",
              alternateName: ["La Muni", "Gobierno Municipal de Villa del Dique"],
              description:
                "Gobierno municipal de Villa del Dique, Córdoba, Argentina. Liderado por el Intendente Emiliano Torres, promueve políticas de inclusión, desarrollo humano y turismo.",
              url: "https://www.villadeldique.com.ar/vecinos/muni",
              logo: "https://www.villadeldique.com.ar/images/logo-oficial.webp",
              image: "https://www.villadeldique.com.ar/images/intendente-emiliano-torres.webp",
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
              areaServed: {
                "@type": "City",
                name: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "Argentina",
              },
              employee: [
                {
                  "@type": "Person",
                  name: "Emiliano Torres",
                  jobTitle: "Intendente Municipal",
                  worksFor: {
                    "@type": "GovernmentOrganization",
                    name: "Municipalidad de Villa del Dique",
                  },
                  image: "https://www.villadeldique.com.ar/images/intendente-emiliano-torres.webp",
                },
                {
                  "@type": "Person",
                  name: "Lourdes Toloza",
                  jobTitle: "Secretaria de Obras Públicas",
                  worksFor: {
                    "@type": "GovernmentOrganization",
                    name: "Municipalidad de Villa del Dique",
                  },
                },
                {
                  "@type": "Person",
                  name: "Gisela Moroni",
                  jobTitle: "Secretaria de Economía y Finanzas",
                  worksFor: {
                    "@type": "GovernmentOrganization",
                    name: "Municipalidad de Villa del Dique",
                  },
                },
                {
                  "@type": "Person",
                  name: "Gustavo Cuello",
                  jobTitle: "Secretario de Salud y Bienestar Social",
                  worksFor: {
                    "@type": "GovernmentOrganization",
                    name: "Municipalidad de Villa del Dique",
                  },
                },
                {
                  "@type": "Person",
                  name: "Adrián Segura",
                  jobTitle: "Secretario de Turismo, Cultura y Deportes",
                  worksFor: {
                    "@type": "GovernmentOrganization",
                    name: "Municipalidad de Villa del Dique",
                  },
                },
                {
                  "@type": "Person",
                  name: "Tobias Barco",
                  jobTitle: "Secretario de Comunicación",
                  worksFor: {
                    "@type": "GovernmentOrganization",
                    name: "Municipalidad de Villa del Dique",
                  },
                },
              ],
              foundingDate: "1995",
              knowsAbout: [
                "Administración Pública",
                "Desarrollo Local",
                "Turismo",
                "Obras Públicas",
                "Salud Pública",
                "Inclusión Social",
                "Políticas Públicas",
              ],
              mission:
                "Promovemos políticas de inclusión que propicien el acceso a la educación, la salud y el trabajo en pos del progreso social y económico de Villa del Dique. Desarrollamos e impulsamos la actividad turística todo el año, aplicando políticas con el objetivo de mejorar la infraestructura y generar inversiones.",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.villadeldique.com.ar/vecinos/muni",
              },
              sameAs: [
                "https://www.facebook.com/MuniVilladelDique",
                "https://www.instagram.com/munivilladeldique",
                "https://www.youtube.com/villadeldique",
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
                  item: "https://www.villadeldique.com.ar",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Vecinos",
                  item: "https://www.villadeldique.com.ar/vecinos",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "La Muni",
                  item: "https://www.villadeldique.com.ar/vecinos/muni",
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
