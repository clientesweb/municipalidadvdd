import type { Metadata } from "next"
import Header from "@/components/header"
import NewsGrid from "@/components/news-grid"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Novedades | Merkat Agri",
  description:
    "Últimas noticias, eventos y novedades de Merkat Agri. Mantente al día con las innovaciones en trituradoras ORSI y tecnología agrícola italiana.",
  openGraph: {
    title: "Novedades | Merkat Agri",
    description: "Últimas noticias, eventos y novedades de Merkat Agri. Innovaciones en maquinaria agrícola ORSI.",
  },
}

export default function NewsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <NewsGrid />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
