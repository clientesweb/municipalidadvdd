"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function VideoBanner() {
  return (
    <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] xl:h-screen overflow-hidden bg-gray-900">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/banner-principal-mobile.webp"
          alt="ORSI - Maquinaria Agrícola de Calidad"
          fill
          className="object-cover object-center block sm:hidden"
          sizes="100vw"
          priority
        />
        <Image
          src="/images/banner-principal-orsi.webp"
          alt="ORSI - Maquinaria Agrícola de Calidad"
          fill
          className="object-cover object-center hidden sm:block"
          sizes="100vw"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-black/10" />

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-1000 delay-500">
          <div className="p-6 sm:p-8 lg:p-12">
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-bold text-white leading-tight mb-4 sm:mb-6 lg:mb-8 text-balance"
              style={{
                textShadow:
                  "4px 4px 8px rgba(0,0,0,0.95), 2px 2px 4px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,1)",
              }}
            >
              Equipos Agrícolas de
              <span
                className="font-bold block sm:inline"
                style={{
                  color: "#ffd700",
                  textShadow:
                    "4px 4px 8px rgba(0,0,0,0.95), 2px 2px 4px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,1)",
                }}
              >
                {" "}
                Alta Tecnología
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-white leading-relaxed mb-6 sm:mb-8 lg:mb-10 font-sans max-w-3xl mx-auto text-pretty"
              style={{
                textShadow:
                  "3px 3px 6px rgba(0,0,0,0.95), 1px 1px 3px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.8), 1px 1px 2px rgba(0,0,0,1)",
              }}
            >
              Merkat Agri ofrece al agricultor argentino los equipos ORSI de la más avanzada tecnología italiana
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button
                className="bg-[#eeb010] hover:bg-[#d49e0e] text-[#1e1d1c] font-display font-bold text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                style={{
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3), 0 6px 12px rgba(0,0,0,0.2)",
                }}
                onClick={() => {
                  const productsSection = document.getElementById("productos")
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: "smooth" })
                  }
                }}
              >
                Ver Productos
                <svg
                  className="ml-2 w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>

              <Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1e1d1c] font-display font-bold text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 bg-transparent"
                style={{
                  boxShadow: "0 10px 25px rgba(0,0,0,0.3), 0 6px 12px rgba(0,0,0,0.2)",
                  textShadow: "2px 2px 4px rgba(0,0,0,0.8)",
                }}
                onClick={() => (window.location.href = "/contacto")}
              >
                Contáctanos
                <svg
                  className="ml-2 w-5 sm:w-6 lg:w-7 h-5 sm:h-6 lg:h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
