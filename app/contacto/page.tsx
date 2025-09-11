import type { Metadata } from "next"
import Header from "@/components/header"
import ContactForm from "@/components/contact-form"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Contacto | Merkat Agri",
  description:
    "Contáctanos para consultas sobre trituradoras ORSI, maquinaria agrícola y servicios técnicos especializados en Argentina.",
  openGraph: {
    title: "Contacto | Merkat Agri",
    description: "Contáctanos para consultas sobre trituradoras ORSI y maquinaria agrícola especializada.",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
