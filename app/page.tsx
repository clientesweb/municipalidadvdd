import Image from "next/image"
import { Facebook, Instagram, Youtube, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import { Darker_Grotesque } from "next/font/google" // Importar la fuente de Google [^1]

// Definir las instancias de la fuente con sus pesos y variables CSS [^2]
const darkerGrotesqueMedium = Darker_Grotesque({
  weight: "500", // Medium
  subsets: ["latin"],
  variable: "--font-darker-grotesque-medium",
  display: "swap",
})

const darkerGrotesqueBold = Darker_Grotesque({
  weight: "700", // Bold
  subsets: ["latin"],
  variable: "--font-darker-grotesque-bold",
  display: "swap",
})

const darkerGrotesqueBlack = Darker_Grotesque({
  weight: "900", // Black
  subsets: ["latin"],
  variable: "--font-darker-grotesque-black",
  display: "swap",
})

export default function HomePage() {
  return (
    <div
      className={`${darkerGrotesqueMedium.variable} ${darkerGrotesqueBold.variable} ${darkerGrotesqueBlack.variable} font-darker-grotesque-medium min-h-screen`}
    >
      {/* Header Announcement */}
      <div className="w-full bg-municipal-primary text-white py-2 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-base font-darker-grotesque-medium">
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
            width={400} // Aumentado el tamaño del logo
            height={160} // Aumentado el tamaño del logo
            className="h-16 sm:h-20 md:h-24 lg:h-28 xl:h-32 w-auto object-contain" // Clases responsivas para el logo
            priority
          />
        </div>
      </header>

      {/* Banner Principal - Pegado al header */}
      <section className="relative w-full">
        {/* Contenedor con aspect ratio 16:9 para mantener proporción 1920x1080 */}
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
          {/* Contenedor de botones responsivo */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16 justify-center items-center max-w-6xl mx-auto">
            {/* Botón VECINO */}
            <Link
              href="/vecinos"
              className="group bg-white/70 hover:bg-white/90 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 md:py-8 shadow-lg w-full sm:w-auto min-w-[240px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[360px] xl:min-w-[400px] rounded-sm block text-center"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-darker-grotesque-bold text-municipal-primary group-hover:text-municipal-secondary tracking-wide">
                VECINO
              </span>
            </Link>

            {/* Botón TURISTA */}
            <Link
              href="/turistas"
              className="group bg-white/70 hover:bg-white/90 hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 sm:py-6 md:py-8 shadow-lg w-full sm:w-auto min-w-[240px] sm:min-w-[280px] md:min-w-[320px] lg:min-w-[360px] xl:min-w-[400px] rounded-sm block text-center"
            >
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-darker-grotesque-bold text-[#E91E63] group-hover:text-[#C2185B] tracking-wide">
                TURISTA
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-municipal-primary text-white py-8 sm:py-10 md:py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Logo y Lema */}
            <div className="flex flex-col items-center sm:items-center lg:items-start space-y-4">
              <Image
                src="/images/logo-footer-blanco.png"
                alt="Villa del Dique Municipalidad"
                width={120}
                height={120}
                className="h-16 sm:h-18 md:h-20 w-auto object-contain"
              />
              <p className="text-lg sm:text-xl font-darker-grotesque-bold text-center sm:text-center lg:text-left">
                EL PROGRESO QUE QUEREMOS
              </p>
            </div>

            {/* Redes Sociales y Acceso Rápido */}
            <div className="space-y-6 text-center sm:text-center lg:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-darker-grotesque-black mb-4">Redes Sociales</h3>
                <div className="flex space-x-4 justify-center sm:justify-center lg:justify-start">
                  <a href="#" className="hover:opacity-80 hover:scale-110 transition-all duration-200">
                    <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a href="#" className="hover:opacity-80 hover:scale-110 transition-all duration-200">
                    <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a href="#" className="hover:opacity-80 hover:scale-110 transition-all duration-200">
                    <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-darker-grotesque-black mb-4">Acceso Rápido</h3>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-darker-grotesque-medium"
                    >
                      Guía de trámites
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-darker-grotesque-medium"
                    >
                      Noticias
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-darker-grotesque-medium"
                    >
                      Turismo
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Institucional */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-darker-grotesque-black mb-4">Institucional</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-darker-grotesque-medium"
                  >
                    La Muni
                  </a>
                </li>
                <li>
                  <a
                    href="/vecinos/honorable-concejo-deliberante"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-darker-grotesque-medium"
                  >
                    Concejo Deliberante
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-darker-grotesque-black mb-4 text-municipal-primary">
                Emergencias y Contacto
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2 justify-center sm:justify-center lg:justify-start">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base font-darker-grotesque-medium">
                    Mario Nivoli 206
                    <br />
                    Villa del Dique, Córdoba
                  </p>
                </div>
                <div className="flex items-center space-x-2 justify-center sm:justify-center lg:justify-start">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <p className="text-sm sm:text-base font-darker-grotesque-medium">03546-497241</p>
                </div>
              </div>
            </div>
          </div>

          {/* Línea divisoria y copyright */}
          <div className="border-t border-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center space-y-2">
            <p className="text-sm sm:text-base opacity-80 font-darker-grotesque-medium">
              © 2024 Municipalidad de Villa del Dique. Todos los derechos reservados.
            </p>
            <p className="text-sm opacity-70 font-darker-grotesque-medium">
              Powered By{" "}
              <a
                href="https://dualitydomain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:opacity-90 font-darker-grotesque-medium transition-all duration-200"
              >
                Duality Domain
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
