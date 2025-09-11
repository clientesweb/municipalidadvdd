import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Firma del FOCOM para nuevas obras | Villa del Dique",
  description:
    "El Intendente Municipal Emiliano Torres firmó en la ciudad de Córdoba un convenio del Fondo de Compensación Municipal (FOCOM) junto al ministro de Gobierno de Córdoba, Manuel Calvo, para obras de adoquinado y cordón cuneta.",
  keywords:
    "FOCOM, obras públicas, infraestructura, adoquinado, cordón cuneta, Villa del Dique, Emiliano Torres, Manuel Calvo",
  openGraph: {
    title: "Firma del FOCOM para nuevas obras | Villa del Dique",
    description:
      "Importante avance en infraestructura: firma del FOCOM para nuevas obras de adoquinado y cordón cuneta en la localidad.",
    images: ["/images/firma-focom-1.webp"],
  },
}

export default function FirmaFocomLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
