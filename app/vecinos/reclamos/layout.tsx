import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Reclamos - Municipalidad de Villa del Dique",
  description: "Formulario de reclamos para vecinos de Villa del Dique.",
}

export default function ReclamosLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
