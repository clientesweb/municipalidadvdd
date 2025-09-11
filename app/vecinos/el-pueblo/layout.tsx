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
  title: "El Pueblo - Villa del Dique | La Perla de Calamuchita, Córdoba",
  description:
    "Descubre Villa del Dique, la Perla de Calamuchita. Fundada en 1935 por Mateo Osella y Enrique Marandino, nuestro pueblo de 7.000 habitantes combina historia, tradiciones serranas, deportes acuáticos, senderos, gastronomía regional y una naturaleza incomparable en el corazón del Valle de Calamuchita, Córdoba.",
  keywords: [
    "Villa del Dique pueblo",
    "Perla de Calamuchita",
    "Valle de Calamuchita",
    "historia Villa del Dique",
    "Mateo Osella Enrique Marandino",
    "fundación 1935",
    "Sierras Grandes Córdoba",
    "lago Calamuchita",
    "embalse río Ctalamochita",
    "Cerro de la Cruz",
    "deportes acuáticos Villa del Dique",
    "esquí náutico wakeboard kayak",
    "windsurf kitesurf SUP",
    "pesca deportiva Villa del Dique",
    "senderos serranos Villa del Dique",
    "trekking ciclismo Villa del Dique",
    "La Sierrita mirador",
    "Playa 3 de Octubre",
    "camping municipal Villa del Dique",
    "balneario municipal",
    "Plaza San Martín Villa del Dique",
    "Plaza de la Música",
    "Plaza de la Memoria",
    "Plaza de los Fundadores",
    "gastronomía serrana",
    "empanadas asado criollo",
    "pejerrey cabritos alfajores",
    "festivales Villa del Dique",
    "paseo artesanos",
    "viernes peatonales",
    "Ruta Provincial 5",
    "Ruta Nacional 36",
    "terminal ómnibus Villa del Dique",
    "alojamiento Villa del Dique",
    "cabañas hosterías hoteles",
    "turismo Villa del Dique",
    "naturaleza sierras cordobesas",
    "vida al aire libre",
    "tranquilidad descanso",
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
    url: "https://www.villadeldique.gob.ar/vecinos/el-pueblo",
    siteName: "Municipalidad de Villa del Dique",
    title: "El Pueblo - Villa del Dique | La Perla de Calamuchita en las Sierras de Córdoba",
    description:
      "Conoce Villa del Dique, la Perla de Calamuchita. Un pueblo de 7.000 habitantes fundado en 1935, ubicado entre el Cerro de la Cruz y el lago de Calamuchita. Historia, tradiciones, deportes acuáticos, senderos serranos, gastronomía regional y naturaleza incomparable en el corazón de las Sierras Grandes de Córdoba.",
    images: [
      {
        url: "https://www.villadeldique.gob.ar/images/og-image-el-pueblo.jpeg",
        width: 1200,
        height: 630,
        alt: "Villa del Dique - La Perla de Calamuchita, Córdoba",
        type: "image/jpeg",
      },
    ],
    publishedTime: "2024-01-01T00:00:00.000Z",
    modifiedTime: "2024-01-01T00:00:00.000Z",
    section: "Turismo y Cultura",
    tags: [
      "Villa del Dique",
      "Perla de Calamuchita",
      "Valle de Calamuchita",
      "Sierras de Córdoba",
      "Turismo",
      "Historia",
      "Naturaleza",
      "Deportes Acuáticos",
      "Senderos",
      "Gastronomía",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El Pueblo - Villa del Dique | La Perla de Calamuchita",
    description:
      "Descubre Villa del Dique: historia, tradiciones serranas, deportes acuáticos, senderos, gastronomía y naturaleza incomparable en Córdoba.",
    images: ["https://www.villadeldique.gob.ar/images/og-image-el-pueblo.jpeg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  alternates: {
    canonical: "https://www.villadeldique.gob.ar/vecinos/el-pueblo",
  },
  category: "tourism",
  classification: "Información Turística y Cultural",
  other: {
    "theme-color": "#16b5d0",
    "msapplication-TileColor": "#16b5d0",
    "article:publisher": "Municipalidad de Villa del Dique",
    "article:author": "Municipalidad de Villa del Dique",
    "article:section": "Turismo y Cultura",
    "article:tag":
      "Villa del Dique, Perla de Calamuchita, Valle de Calamuchita, Sierras de Córdoba, turismo, historia, naturaleza, deportes acuáticos, senderos, gastronomía",
    tourism_keywords:
      "Villa del Dique, Calamuchita, sierras, lago, deportes acuáticos, senderos, camping, turismo, naturaleza, Córdoba",
    "geo.region": "AR-X",
    "geo.placename": "Villa del Dique, Córdoba, Argentina",
    "geo.position": "-32.1833;-64.4833",
    ICBM: "-32.1833, -64.4833",
    "place:location:latitude": "-32.1833",
    "place:location:longitude": "-64.4833",
  },
}

export default function ElPuebloLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-AR" className={`${darkerGrotesque.variable} ${cinzelDecorative.variable}`}>
      <head>
        {/* Enhanced Structured Data for Tourist Destination */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristDestination",
              name: "Villa del Dique - La Perla de Calamuchita",
              alternateName: ["Villa del Dique", "Perla de Calamuchita"],
              description:
                "Villa del Dique es la Perla de Calamuchita, un pintoresco pueblo de 7.000 habitantes ubicado entre el Cerro de la Cruz y el lago de Calamuchita, en el corazón del Valle de Calamuchita, Sierras Grandes de Córdoba, Argentina.",
              url: "https://www.villadeldique.gob.ar/vecinos/el-pueblo",
              image: [
                "https://www.villadeldique.gob.ar/images/vista-aerea-villa-del-dique.jpeg",
                "https://www.villadeldique.gob.ar/images/panoramica-villa-del-dique.webp",
                "https://www.villadeldique.gob.ar/images/cartel-villa-del-dique.jpeg",
                "https://www.villadeldique.gob.ar/images/tarde-verano-lago.webp",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "AR",
                postalCode: "5194",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -32.1833,
                longitude: -64.4833,
              },
              foundingDate: "1935-10-11",
              founder: [
                {
                  "@type": "Person",
                  name: "Mateo Osella",
                },
                {
                  "@type": "Person",
                  name: "Enrique Marandino",
                },
              ],
              population: {
                "@type": "QuantitativeValue",
                value: 7000,
                unitText: "habitantes",
              },
              touristType: [
                "Turismo de Naturaleza",
                "Turismo Acuático",
                "Turismo Rural",
                "Turismo Familiar",
                "Turismo de Aventura",
              ],
              hasMap: "https://goo.gl/maps/VilladelDique",
              isAccessibleForFree: true,
              publicAccess: true,
              containsPlace: [
                {
                  "@type": "Lake",
                  name: "Lago de Calamuchita",
                  alternateName: "Embalse del río Ctalamochita",
                  description: "Lago formado por el embalse más grande de la provincia de Córdoba",
                },
                {
                  "@type": "Mountain",
                  name: "Cerro de la Cruz",
                  description: "Cerro emblemático que domina el paisaje de Villa del Dique",
                },
                {
                  "@type": "Park",
                  name: "Camping y Balneario Municipal",
                  description:
                    "Camping municipal con zona de acampe, balneario, confitería, asadores, cancha de vóley playero, juegos infantiles, pileta olímpica y bajada de lanchas",
                },
                {
                  "@type": "Park",
                  name: "Plaza San Martín",
                  description: "Plaza principal con juegos para niños y espacios verdes",
                },
                {
                  "@type": "Park",
                  name: "Plaza de la Música",
                  description: "Espacio verde dedicado a actividades culturales y musicales",
                },
                {
                  "@type": "Park",
                  name: "Plaza de la Memoria",
                  description: "Plaza conmemorativa con espacios verdes",
                },
                {
                  "@type": "Park",
                  name: "Plaza de los Fundadores",
                  description: "Plaza en honor a los fundadores Mateo Osella y Enrique Marandino",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Actividades y Atractivos Turísticos",
                itemListElement: [
                  {
                    "@type": "Offer",
                    name: "Deportes Acuáticos",
                    description:
                      "Esquí náutico, wakeboard, kayak, windsurf, kitesurf, Stand up paddle (SUP) y pesca deportiva",
                    category: "Deportes y Recreación",
                  },
                  {
                    "@type": "Offer",
                    name: "Senderos y Miradores Serranos",
                    description:
                      "Trekking y ciclismo por La Sierrita, Cerro de la Cruz, el Mirador, el Perilago y Playa 3 de Octubre",
                    category: "Turismo de Aventura",
                  },
                  {
                    "@type": "Offer",
                    name: "Gastronomía Regional",
                    description: "Empanadas, asado criollo, pejerrey, cabritos y alfajores artesanales",
                    category: "Gastronomía",
                  },
                  {
                    "@type": "Offer",
                    name: "Festivales y Eventos",
                    description: "Paseo de artesanos, viernes peatonales con música en vivo, teatro y literatura",
                    category: "Cultura y Entretenimiento",
                  },
                ],
              },
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Acceso por Ruta",
                  value: "Ruta Nacional 36 y Ruta Provincial 5",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Terminal de Ómnibus",
                  value: "Terminal ubicada en el centro de la localidad",
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Alojamiento Variado",
                  value: "Camping, cabañas, casas, hosterías, colonias y hoteles",
                },
              ],
              knowsAbout: [
                "Turismo de Naturaleza",
                "Deportes Acuáticos",
                "Senderismo",
                "Gastronomía Regional",
                "Historia Local",
                "Cultura Serrana",
                "Festivales Locales",
              ],
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.villadeldique.gpb.ar/vecinos/el-pueblo",
              },
              sameAs: [
                "https://www.facebook.com/villadeldique",
                "https://www.instagram.com/villadeldique",
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
                  name: "El Pueblo",
                  item: "https://www.villadeldique.gob.ar/vecinos/el-pueblo",
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
