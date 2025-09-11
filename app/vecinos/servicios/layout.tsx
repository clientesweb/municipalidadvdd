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
  title: "Servicios - Villa del Dique | Directorio Completo de Servicios Públicos y Privados",
  description:
    "Directorio completo de servicios en Villa del Dique, Córdoba. Oficina de Turismo, Municipalidad, Hospital Dr. Luis Rivarola, Dispensario Eduardo Berthollet, farmacias (FarmaVilla, Grangetto, Cuello, del Valle), transporte Buses Lep. Teléfonos, direcciones y contactos de todos los servicios esenciales para vecinos y turistas.",
  keywords: [
    "servicios Villa del Dique",
    "directorio servicios Villa del Dique",
    "oficina de turismo Villa del Dique",
    "municipalidad Villa del Dique",
    "hospital Villa del Dique",
    "Hospital Dr. Luis Rivarola",
    "farmacias Villa del Dique",
    "transporte Villa del Dique",
    "Buses Lep Villa del Dique",
    "Dispensario Eduardo Berthollet",
    "FarmaVilla",
    "Farmacia Grangetto",
    "Farmacia Cuello",
    "Farmacia del Valle",
    "servicios públicos Villa del Dique",
    "servicios privados Villa del Dique",
    "directorio comercial Villa del Dique",
    "guía de servicios Córdoba",
    "contactos útiles Villa del Dique",
    "teléfonos servicios Villa del Dique",
    "direcciones servicios Villa del Dique",
    "turismo Villa del Dique contacto",
    "salud Villa del Dique",
    "emergencias Villa del Dique",
    "servicios esenciales Villa del Dique",
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
    url: "https://www.villadeldique.gob.ar/vecinos/servicios",
    siteName: "Municipalidad de Villa del Dique",
    title: "Servicios - Villa del Dique | Directorio Completo de Servicios Públicos y Privados",
    description:
      "Encuentra todos los servicios que necesitas en Villa del Dique: Oficina de Turismo, Municipalidad, servicios médicos, farmacias, transporte y más. Directorio completo con teléfonos, direcciones y contactos actualizados para vecinos y turistas.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/og-image-servicios.jpg",
        width: 1200,
        height: 630,
        alt: "Servicios Villa del Dique - Directorio Completo de Servicios Públicos y Privados",
        type: "image/jpeg",
      },
    ],
    publishedTime: "2024-01-01T00:00:00.000Z",
    modifiedTime: "2024-01-01T00:00:00.000Z",
    section: "Servicios",
    tags: [
      "Servicios",
      "Villa del Dique",
      "Directorio",
      "Turismo",
      "Salud",
      "Transporte",
      "Farmacias",
      "Municipalidad",
      "Servicios Públicos",
      "Servicios Privados",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Servicios - Villa del Dique | Directorio Completo",
    description:
      "Directorio completo de servicios en Villa del Dique: turismo, salud, transporte, farmacias y más. Toda la información de contacto actualizada.",
    images: ["https://www.villadeldique.gob.ar/images/og-image-servicios.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/vecinos/servicios",
  },
  category: "directory",
  classification: "Directorio de Servicios Municipales",
  other: {
    "theme-color": "#16b5d0",
    "msapplication-TileColor": "#16b5d0",
    "article:publisher": "Municipalidad de Villa del Dique",
    "article:author": "Municipalidad de Villa del Dique",
    "article:section": "Servicios Municipales",
    "article:tag":
      "servicios, directorio, Villa del Dique, turismo, salud, transporte, farmacias, municipalidad, servicios públicos, servicios privados",
    service_keywords:
      "oficina turismo, municipalidad, hospital, dispensario, farmacias, transporte, buses, servicios médicos, servicios públicos, directorio comercial",
    "geo.region": "AR-X",
    "geo.placename": "Villa del Dique, Córdoba, Argentina",
    "geo.position": "-32.1833;-64.4833",
    ICBM: "-32.1833, -64.4833",
    "business.contact_data:street_address": "Mario Nivoli 206",
    "business.contact_data:locality": "Villa del Dique",
    "business.contact_data:region": "Córdoba",
    "business.contact_data:postal_code": "5194",
    "business.contact_data:country_name": "Argentina",
    "business.contact_data:phone_number": "+54-3546-497241",
  },
}

export default function ServiciosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${darkerGrotesque.variable} ${cinzelDecorative.variable}`}>
      <head>
        {/* Enhanced Structured Data for Local Business Directory */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: "Directorio de Servicios - Villa del Dique",
              description:
                "Directorio completo de servicios públicos y privados en Villa del Dique, Córdoba, Argentina. Incluye información de contacto actualizada para turismo, salud, transporte, farmacias y servicios municipales.",
              url: "https://www.villadeldique.gob.ar/vecinos/servicios",
              publisher: {
                "@type": "GovernmentOrganization",
                name: "Municipalidad de Villa del Dique",
                url: "https://www.villadeldique.gob.ar",
                logo: "https://www.villadeldique.gob.ar/images/logo-oficial.webp",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Mario Nivoli 206",
                  addressLocality: "Villa del Dique",
                  addressRegion: "Córdoba",
                  postalCode: "5194",
                  addressCountry: "AR",
                },
                telephone: "+54-3546-497241",
              },
              numberOfItems: 8,
              itemListElement: [
                {
                  "@type": "TouristInformationCenter",
                  "@id": "1",
                  name: "Oficina de Turismo Villa del Dique",
                  description:
                    "Oficina oficial de turismo de Villa del Dique. Información turística, actividades, alojamiento y servicios para visitantes.",
                  telephone: "+54-3546-528341",
                  email: "villadeliqueturismo1@gmail.com",
                  sameAs: ["https://www.instagram.com/turismoycultura.villadeldique"],
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  openingHours: "Mo-Fr 08:00-16:00",
                  serviceType: "Información Turística",
                },
                {
                  "@type": "GovernmentOrganization",
                  "@id": "2",
                  name: "Municipalidad de Villa del Dique",
                  description:
                    "Gobierno municipal de Villa del Dique. Trámites, servicios públicos y gestión administrativa.",
                  telephone: "+54-3546-497241",
                  sameAs: [
                    "https://www.instagram.com/munivilladeldique",
                    "https://www.facebook.com/MuniVilladelDique",
                    "https://www.villadeldique.com.ar",
                  ],
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Mario Nivoli 206",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    postalCode: "5194",
                    addressCountry: "AR",
                  },
                  openingHours: "Mo-Fr 07:00-13:00",
                  serviceType: "Servicios Municipales",
                },
                {
                  "@type": "BusStation",
                  "@id": "3",
                  name: "Terminal de Buses Lep",
                  description: "Terminal de ómnibus de Villa del Dique. Servicios de transporte interurbano.",
                  telephone: "+54-3546-510724",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Av. San Martín 10",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  serviceType: "Transporte Público",
                },
                {
                  "@type": "Hospital",
                  "@id": "4",
                  name: "Hospital Dr. Luis Rivarola",
                  description:
                    "Hospital municipal de Villa del Dique. Servicios de salud, emergencias y atención médica general.",
                  telephone: ["+54-3546-497636", "+54-3546-454672"],
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Bv. Hipólito Yrigoyen 106",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  openingHours: "24/7",
                  serviceType: "Servicios de Salud",
                  medicalSpecialty: "Medicina General",
                },
                {
                  "@type": "MedicalClinic",
                  "@id": "5",
                  name: "Dispensario Eduardo Berthollet",
                  description:
                    "Dispensario médico de Villa del Dique. Atención primaria de salud y servicios médicos básicos.",
                  telephone: "+54-3546-506145",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  serviceType: "Atención Primaria de Salud",
                },
                {
                  "@type": "Pharmacy",
                  "@id": "6",
                  name: "FarmaVilla",
                  description: "Farmacia en Villa del Dique. Medicamentos, productos de salud y atención farmacéutica.",
                  telephone: "+54-3546-561747",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Bv. Hipólito Yrigoyen 836",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  serviceType: "Farmacia",
                },
                {
                  "@type": "Pharmacy",
                  "@id": "7",
                  name: "Farmacia Grangetto",
                  description:
                    "Farmacia en Villa del Dique. Medicamentos, productos farmacéuticos y servicios de salud.",
                  telephone: ["+54-3546-497294", "+54-3546-503142"],
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Av. San Martín 130",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  serviceType: "Farmacia",
                },
                {
                  "@type": "Pharmacy",
                  "@id": "8",
                  name: "Farmacia del Valle",
                  description:
                    "Farmacia en Villa del Dique. Medicamentos, productos de farmacia y atención especializada.",
                  telephone: "+54-3546-435468",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Av. San Martín 396",
                    addressLocality: "Villa del Dique",
                    addressRegion: "Córdoba",
                    addressCountry: "AR",
                  },
                  serviceType: "Farmacia",
                },
              ],
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.villadeldique.gob.ar/vecinos/servicios",
              },
              about: {
                "@type": "Place",
                name: "Villa del Dique",
                description: "Localidad turística en la provincia de Córdoba, Argentina",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Villa del Dique",
                  addressRegion: "Córdoba",
                  addressCountry: "Argentina",
                },
              },
            }),
          }}
        />

        {/* FAQ Structured Data for Services */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Dónde está ubicada la Oficina de Turismo de Villa del Dique?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La Oficina de Turismo de Villa del Dique se encuentra en el centro de la localidad. Puedes contactarlos al teléfono 3546-528341 o por email a villadeliqueturismo1@gmail.com. También puedes seguirlos en Instagram @turismoycultura.villadeldique.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuáles son los servicios médicos disponibles en Villa del Dique?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Villa del Dique cuenta con el Hospital Dr. Luis Rivarola (Bv. Hipólito Yrigoyen 106, tel: 03546-497636 / 3546-454672) y el Dispensario Eduardo Berthollet (tel: 3546-506145) para atención médica y emergencias.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué farmacias hay en Villa del Dique?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Villa del Dique cuenta con cuatro farmacias: FarmaVilla (Bv. Hipólito Yrigoyen 836), Farmacia Grangetto (Av. San Martín 130), Farmacia Cuello (Bv. Hipólito Yrigoyen) y Farmacia del Valle (Av. San Martín 396).",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo llegar a Villa del Dique en transporte público?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Puedes llegar a Villa del Dique utilizando los servicios de Buses Lep, que tiene su terminal en Av. San Martín 10. Para información sobre horarios y destinos, contacta al 3546-510724.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Dónde está ubicada la Municipalidad de Villa del Dique?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "La Municipalidad de Villa del Dique se encuentra en Mario Nivoli 206. Puedes contactarlos al 03546-497241 o seguirlos en redes sociales @munivilladeldique en Instagram y Muni Villa del Dique en Facebook.",
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
                  name: "Servicios",
                  item: "https://www.villadeldique.gob.ar/vecinos/servicios",
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
