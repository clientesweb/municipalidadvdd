import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Villa del Dique celebró sus 89 años con obras, homenajes y una gran participación popular | Municipalidad de Villa del Dique",
  description:
    "En el marco del 89° aniversario de Villa del Dique, el intendente Emiliano Torres encabezó los actos conmemorativos y anunció una inversión de 150 millones de pesos en nuevas maquinarias.",
  keywords:
    "Villa del Dique, 89 aniversario, Emiliano Torres, maquinaria vial, inversión municipal, fiesta popular, Córdoba",
  openGraph: {
    title: "Villa del Dique celebró sus 89 años con obras, homenajes y una gran participación popular",
    description:
      "En el marco del 89° aniversario de Villa del Dique, el intendente Emiliano Torres encabezó los actos conmemorativos y anunció una inversión de 150 millones de pesos en nuevas maquinarias.",
    images: ["/images/89-años-villa-del-dique-1.jpg"],
  },
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
