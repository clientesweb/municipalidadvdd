"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloat() {
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true)
      setTimeout(() => setShowNotification(false), 3000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed bottom-3 xs:bottom-4 sm:bottom-6 lg:bottom-8 right-3 xs:right-4 sm:right-6 lg:right-8 z-50">
      {showNotification && (
        <div className="absolute bottom-full right-0 mb-2 xs:mb-3 bg-black text-white px-2 xs:px-3 py-1.5 xs:py-2 rounded-md xs:rounded-lg text-xs xs:text-sm whitespace-nowrap animate-in slide-in-from-bottom duration-300 font-sans">
          ¡Contáctanos!
          <div className="absolute top-full right-3 xs:right-4 w-0 h-0 border-l-3 xs:border-l-4 border-r-3 xs:border-r-4 border-t-3 xs:border-t-4 border-transparent border-t-black"></div>
        </div>
      )}

      <Button
        size="lg"
        className="bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg sm:shadow-xl lg:shadow-2xl hover:shadow-xl sm:hover:shadow-2xl lg:hover:shadow-3xl transition-all duration-300 rounded-full w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 xl:w-20 xl:h-20 p-0 group border-2 xs:border-3 sm:border-4 border-white"
        onClick={() =>
          window.open(
            "https://wa.me/2622522760?text=¡Hola! Me contacto desde la web de Merkat Agri. Me interesa recibir información sobre las trituradoras ORSI y sus servicios especializados.",
            "_blank",
          )
        }
        aria-label="Contactar por WhatsApp"
      >
        <Image
          src="/images/whatsapp-icon.webp"
          alt="WhatsApp"
          width={40}
          height={40}
          className="w-5 h-5 xs:w-6 xs:h-6 sm:w-8 sm:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 group-hover:scale-110 transition-transform duration-200"
          sizes="(max-width: 480px) 20px, (max-width: 640px) 24px, (max-width: 1024px) 32px, (max-width: 1280px) 36px, 40px"
        />
      </Button>
    </div>
  )
}
