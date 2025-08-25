import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Homenaje al Teniente Mario Víctor Nivoli | Municipalidad de Villa del Dique",
  description:
    "Rendimos homenaje a la memoria del Teniente Mario Víctor Nivoli, cuyo coraje y sacrificio en las Islas Malvinas continúan inspirándonos como comunidad.",
  keywords: "homenaje, teniente, mario victor nivoli, malvinas, villa del dique, municipalidad, veteranos, heroes",
  openGraph: {
    title: "Homenaje al Teniente Mario Víctor Nivoli",
    description:
      "Rendimos homenaje a la memoria del Teniente Mario Víctor Nivoli, cuyo coraje y sacrificio en las Islas Malvinas continúan inspirándonos como comunidad.",
    images: ["/homenaje-teniente-mario-victor-nivoli.webp"],
    type: "article",
    publishedTime: "2024-05-13T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homenaje al Teniente Mario Víctor Nivoli",
    description:
      "Rendimos homenaje a la memoria del Teniente Mario Víctor Nivoli, cuyo coraje y sacrificio en las Islas Malvinas continúan inspirándonos como comunidad.",
    images: ["/homenaje-teniente-mario-victor-nivoli.webp"],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
