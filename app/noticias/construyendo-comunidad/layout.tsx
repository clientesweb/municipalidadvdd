import type React from "react"
import type { Metadata } from "next"
import { Darker_Grotesque, Cinzel_Decorative } from "next/font/google"

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  variable: "--font-cinzel-decorative",
  weight: ["400", "700", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Construyendo comunidad: un llamado al trabajo colectivo",
  description:
    "Desde la gestión municipal de Villa del Dique renovamos nuestro compromiso con una visión clara: construir, entre todos, un pueblo que sea ejemplo de trabajo en equipo, inclusión y participación ciudadana.",
  keywords: [
    "construyendo comunidad Villa del Dique",
    "trabajo colectivo",
    "participación ciudadana",
    "inclusión social",
    "desarrollo comunitario",
    "gestión municipal",
    "identidad local",
    "cooperación vecinal",
    "futuro común",
    "Villa del Dique octubre 2024",
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
    type: "article",
    locale: "es_AR",
    url: "https://www.villadeldique.gob.ar/noticias/construyendo-comunidad",
    siteName: "Municipalidad de Villa del Dique",
    title: "Construyendo comunidad: un llamado al trabajo colectivo",
    description:
      "Desde la gestión municipal de Villa del Dique renovamos nuestro compromiso con una visión clara: construir, entre todos, un pueblo que sea ejemplo de trabajo en equipo, inclusión y participación ciudadana.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construyendo-comunidad-4.jpg-Z2RXynoS67SZOqjcTJcZS85rmC9XIG.jpeg",
        width: 1200,
        height: 800,
        alt: "Construyendo comunidad - Villa del Dique",
        type: "image/jpeg",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construyendo-comunidad-3.jpg-nkiotM14vZmOpD244AXvkGaVTBK9hc.jpeg",
        width: 800,
        height: 600,
        alt: "Intendente hablando sobre el futuro de Villa del Dique",
        type: "image/jpeg",
      },
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construyendo-comunidad-1.jpg-KR9A8ZN5WPfiB9hcop1tXKv9mKx23E.jpeg",
        width: 800,
        height: 600,
        alt: "Celebración del aniversario de Villa del Dique",
        type: "image/jpeg",
      },
    ],
    publishedTime: "2024-10-13T00:00:00.000Z",
    modifiedTime: "2024-10-13T00:00:00.000Z",
    section: "Comunidad",
    tags: ["Comunidad", "Participación Ciudadana", "Desarrollo", "Villa del Dique", "Trabajo Colectivo"],
    authors: ["Municipalidad de Villa del Dique"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Construyendo comunidad: un llamado al trabajo colectivo",
    description:
      "Renovamos nuestro compromiso con una visión clara: construir, entre todos, un pueblo que sea ejemplo de trabajo en equipo, inclusión y participación ciudadana.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construyendo-comunidad-4.jpg-Z2RXynoS67SZOqjcTJcZS85rmC9XIG.jpeg",
    ],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/noticias/construyendo-comunidad",
  },
  category: "news",
  classification: "Artículo de Noticias",
  other: {
    "article:publisher": "Municipalidad de Villa del Dique",
    "article:author": "Municipalidad de Villa del Dique",
    "article:published_time": "2024-10-13T00:00:00.000Z",
    "article:modified_time": "2024-10-13T00:00:00.000Z",
    "article:section": "Comunidad",
    "article:tag": "Comunidad, Participación Ciudadana, Desarrollo, Villa del Dique, Trabajo Colectivo",
    news_keywords: "Villa del Dique, comunidad, trabajo colectivo, participación ciudadana, desarrollo local",
  },
}

export default function ConstruyendoComunidadLayout({
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
              "@type": "NewsArticle",
              headline: "Construyendo comunidad: un llamado al trabajo colectivo",
              description:
                "Desde la gestión municipal de Villa del Dique renovamos nuestro compromiso con una visión clara: construir, entre todos, un pueblo que sea ejemplo de trabajo en equipo, inclusión y participación ciudadana.",
              image: [
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construyendo-comunidad-4.jpg-Z2RXynoS67SZOqjcTJcZS85rmC9XIG.jpeg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construyendo-comunidad-3.jpg-nkiotM14vZmOpD244AXvkGaVTBK9hc.jpeg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construyendo-comunidad-1.jpg-KR9A8ZN5WPfiB9hcop1tXKv9mKx23E.jpeg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construyendo-comunidad-7.jpg-JUGqlexcA4fWMNijjkh8Jy2AsGqPeG.jpeg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construyendo-comunidad-5.jpg-Wz9wEnGgmsj6lBftw8nuu8XPQ2558J.jpeg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construyendo-comunidad-2.jpg-kprLFk0S9emMuqge3aU8dyJnhD86dk.jpeg",
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construyendo-comunidad-6.jpg-3i7QFkAFKbKFSXCSYAPcDE41hQt1Ms.jpeg",
              ],
              datePublished: "2024-10-13T00:00:00.000Z",
              dateModified: "2024-10-13T00:00:00.000Z",
              author: {
                "@type": "Organization",
                name: "Municipalidad de Villa del Dique",
                url: "https://www.villadeldique.gob.ar",
              },
              publisher: {
                "@type": "GovernmentOrganization",
                name: "Municipalidad de Villa del Dique",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.villadeldique.gob.ar/images/logo-oficial.webp",
                  width: 300,
                  height: 120,
                },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Mario Nivoli 206",
                  addressLocality: "Villa del Dique",
                  addressRegion: "Córdoba",
                  addressCountry: "AR",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.villadeldique.gob.ar/noticias/construyendo-comunidad",
              },
              articleSection: "Comunidad",
              keywords: [
                "Villa del Dique",
                "comunidad",
                "trabajo colectivo",
                "participación ciudadana",
                "desarrollo local",
                "inclusión social",
                "identidad local",
                "cooperación",
                "futuro común",
              ],
              wordCount: 420,
              articleBody:
                "Desde la gestión municipal de Villa del Dique renovamos nuestro compromiso con una visión clara: construir, entre todos, un pueblo que sea ejemplo de trabajo en equipo, inclusión y participación ciudadana...",
              about: [
                {
                  "@type": "Thing",
                  name: "Desarrollo Comunitario",
                  description: "Iniciativas de participación ciudadana y trabajo colectivo en Villa del Dique",
                },
                {
                  "@type": "Place",
                  name: "Villa del Dique",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "Argentina",
                  },
                },
              ],
              mentions: [
                {
                  "@type": "Thing",
                  name: "Participación Ciudadana",
                  description: "Involucramiento activo de los vecinos en el desarrollo del pueblo",
                },
                {
                  "@type": "Thing",
                  name: "Trabajo Colectivo",
                  description: "Esfuerzo conjunto para el progreso de Villa del Dique",
                },
                {
                  "@type": "Thing",
                  name: "Identidad Local",
                  description: "Valoración y fortalecimiento de la identidad de Villa del Dique",
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
