import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header Announcement */}
      <div className="w-full bg-[#16b5d0] text-white py-2 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-base font-montserrat font-medium">
            Página oficial de la Municipalidad de Villa del Dique
          </p>
        </div>
      </div>

      {/* Header */}
      <header className="w-full py-2 sm:py-3 px-4 bg-white shadow-sm">
        <div className="container mx-auto flex justify-center">
          <Image
            src="/images/logo-oficial.webp"
            alt="Villa del Dique Municipalidad"
            width={350}
            height={140}
            className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain"
            priority
          />
        </div>
      </header>

      {/* Banner Principal - Pegado al header */}
      <section className="relative w-full">
        <div className="relative w-full aspect-video">
          <Image
            src="/images/banner-principal.webp"
            alt="Vista del lago con veleros en Villa del Dique"
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Sección de Botones */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4" style={{ backgroundColor: "#B8D4E3" }}>
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 justify-center items-center max-w-6xl mx-auto">
            {/* Botón VECINO */}
            <Link
              href="/vecinos"
              className="group bg-white/70 hover:bg-white/90 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 md:py-8 shadow-lg w-full sm:w-auto min-w-[240px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[360px] xl:min-w-[400px] rounded-sm block text-center"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-nunito font-bold text-[#16b5d0] group-hover:text-[#008A9B] tracking-wide">
                VECINO
              </span>
            </Link>

            {/* Botón TURISTA */}
            <Link
              href="/turistas"
              className="group bg-white/70 hover:bg-white/90 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 md:py-8 shadow-lg w-full sm:w-auto min-w-[240px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[360px] xl:min-w-[400px] rounded-sm block text-center"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-nunito font-bold text-[#E91E63] group-hover:text-[#C2185B] tracking-wide">
                TURISTA
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
