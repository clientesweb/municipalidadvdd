import type React from "react"
import type { Metadata } from "next"
import { Darker_Grotesque, Cinzel_Decorative } from "next/font/google"
import "./globals.css"
import { ServiceWorkerRegistration } from "@/components/service-worker-registration" // Import the new component

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
  title: "Villa del Dique - Municipalidad Oficial | Córdoba, Argentina",
  description:
    "Sitio web oficial de la Municipalidad de Villa del Dique, Córdoba. Información para vecinos y turistas, trámites municipales, noticias locales y servicios públicos. El progreso que queremos.",
  keywords: [
    "Villa del Dique",
    "Municipalidad",
    "Córdoba",
    "Argentina",
    "trámites municipales",
    "turismo",
    "vecinos",
    "servicios públicos",
    "gobierno local",
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
    url: "https://www.villadeldique.com.ar",
    siteName: "Municipalidad de Villa del Dique",
    title: "Villa del Dique - Municipalidad Oficial | Córdoba, Argentina",
    description:
      "Sitio web oficial de la Municipalidad de Villa del Dique, Córdoba. Información para vecinos y turistas, trámites municipales y servicios públicos.",
    images: [
      {
        url: "https://www.villadeldique.com.ar/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa del Dique Municipalidad - Sitio Oficial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique - Municipalidad Oficial",
    description: "Sitio web oficial de la Municipalidad de Villa del Dique, Córdoba. El progreso que queremos.",
    images: ["https://www.villadeldique.com.ar/images/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  alternates: {
    canonical: "https://www.villadeldique.com.ar",
  },
  category: "government",
  classification: "Gobierno Municipal",
  other: {
    "theme-color": "#16b5d0",
    "msapplication-TileColor": "#16b5d0",
    "msapplication-config": "/browserconfig.xml",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/icon-192x192.png",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${darkerGrotesque.variable} ${cinzelDecorative.variable}`}>
      <head>
        <meta name="theme-color" content="#16b5d0" />
        <meta name="msapplication-TileColor" content="#16b5d0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Villa del Dique" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* Link to manifest.json */}
        <link rel="manifest" href="/manifest.json" />
        {/* Favicons (already present, but ensure consistency with manifest) */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="icon" href="/icon-512x512.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentOrganization",
              name: "Municipalidad de Villa del Dique",
              alternateName: "Villa del Dique Municipality",
              url: "https://www.villadeldique.com.ar",
              logo: "https://www.villadeldique.com.ar/images/logo-oficial.webp",
              description:
                "Municipalidad de Villa del Dique, Córdoba, Argentina. Servicios públicos, trámites municipales e información para vecinos y turistas.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Mario Nivoli 206",
                addressLocality: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },
              telephone: "+54-3546-497241",
              areaServed: {
                "@type": "City",
                name: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "Argentina",
              },
              sameAs: [
                "https://www.facebook.com/villadeldique",
                "https://www.instagram.com/villadeldique",
                "https://www.youtube.com/villadeldique",
              ],
            }),
          }}
        />
      </head>
      <body className="font-darker-grotesk">
        {children}
        <ServiceWorkerRegistration /> {/* Register the service worker */}
      </body>
    </html>
  )
}
