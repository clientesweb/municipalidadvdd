import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export default function NewsSection() {
  return (
    <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 xl:py-24 bg-gray-50">
      <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-6 xs:mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-display font-bold text-black mb-2 xs:mb-3 sm:mb-4 lg:mb-6">
            <span className="text-[#B8860B]">ÚLTIMAS</span> NOVEDADES
          </h2>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-3xl mx-auto font-sans leading-relaxed px-2 sm:px-0">
            Mantente al día con las últimas noticias y eventos de Merkat Agri
          </p>
        </div>

        {/* Featured Article */}
        <div className="max-w-xs xs:max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto">
          <article className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative h-48 xs:h-56 sm:h-64 md:h-full min-h-[200px] md:min-h-[300px] lg:min-h-[350px] xl:min-h-[400px] overflow-hidden">
                <Image
                  src="/images/nosotros-banner-principal.jpeg"
                  alt="Merkat Agri - Distribuidores oficiales ORSI en Argentina"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/20" />
              </div>

              {/* Content */}
              <div className="p-4 xs:p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-2 text-[#D2691E] mb-3 sm:mb-4">
                  <Calendar className="h-3 xs:h-4 w-3 xs:w-4" />
                  <span className="text-xs xs:text-sm font-medium font-sans">Distribución Oficial</span>
                </div>

                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl font-display font-bold text-black mb-3 xs:mb-4 lg:mb-6 leading-tight">
                  Merkat Agri: Distribuidores Oficiales de <span className="text-[#B8860B]">TRITURADORAS ORSI</span>
                </h3>

                <p className="text-sm xs:text-base sm:text-base md:text-lg text-gray-600 mb-4 xs:mb-5 sm:mb-6 font-sans leading-relaxed">
                  Somos distribuidores oficiales de ORSI en Argentina, ofreciendo la más alta tecnología italiana en
                  trituradoras agrícolas. Desde Bolonia, Italia, hasta tu campo.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    asChild
                    className="bg-[#ffdd02] hover:bg-[#ffd700] text-black font-semibold px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 text-sm xs:text-base rounded-full transition-all duration-300 group/btn font-display"
                  >
                    <Link href="/novedades" className="flex items-center justify-center gap-2">
                      Ver más novedades
                      <ArrowRight className="h-3 xs:h-4 w-3 xs:w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>

                  <a
                    href="https://wa.me/5492612210039?text=Hola%20Merkat%20Agri,%20me%20interesa%20conocer%20más%20sobre%20las%20trituradoras%20ORSI%20y%20su%20distribución%20oficial%20en%20Argentina."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-[#D2691E] text-[#D2691E] hover:bg-[#D2691E] hover:text-white px-4 xs:px-5 sm:px-6 py-2.5 xs:py-3 text-sm xs:text-base rounded-full font-semibold transition-all duration-300 font-display"
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
