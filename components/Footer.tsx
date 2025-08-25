import Image from "next/image"
import { Facebook, Instagram, Youtube, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#16b5d0] text-white py-8 sm:py-10 md:py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo y Lema */}
          <div className="flex flex-col items-center sm:items-center lg:items-start space-y-4">
            <Image
              src="/images/logo-footer-blanco.png"
              alt="Villa del Dique Municipalidad"
              width={150}
              height={150}
              className="h-20 sm:h-24 md:h-28 w-auto object-contain"
            />
            <p className="text-lg sm:text-xl font-nunito font-semibold text-center sm:text-center lg:text-left">
              EL PROGRESO QUE QUEREMOS
            </p>
          </div>

          {/* Redes Sociales y Acceso Rápido */}
          <div className="space-y-6 text-center sm:text-center lg:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4">Redes Sociales</h3>
              <div className="flex space-x-4 justify-center sm:justify-center lg:justify-start">
                <a href="#" className="hover:opacity-80 hover:scale-110 transition-all duration-200">
                  <Youtube className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a
                  href="https://m.facebook.com/munivilladeldique/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 hover:scale-110 transition-all duration-200"
                >
                  <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
                <a
                  href="https://www.instagram.com/munivilladeldique?igsh=MTlheW1mZmVnczJuMw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 hover:scale-110 transition-all duration-200"
                >
                  <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4">Acceso Rápido</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/vecinos/guia-de-tramites"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-montserrat"
                  >
                    Guía de trámites
                  </a>
                </li>
                <li>
                  <a
                    href="/noticias"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-montserrat"
                  >
                    Noticias
                  </a>
                </li>
                <li>
                  <a
                    href="/turistas"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-montserrat"
                  >
                    Turismo
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Institucional */}
          <div className="text-center sm:text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/vecinos/muni"
                  className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-montserrat"
                >
                  La Muni
                </a>
              </li>
              <li>
                <a
                  href="/vecinos/honorable-concejo-deliberante"
                  className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-montserrat"
                >
                  Concejo Deliberante
                </a>
              </li>
              <li>
                <a
                  href="/vecinos/el-pueblo"
                  className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-montserrat"
                >
                  El Pueblo
                </a>
              </li>
              <li>
                <a
                  href="/vecinos/servicios"
                  className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-montserrat"
                >
                  Servicios
                </a>
              </li>
              <li>
                <a
                  href="/vecinos/reclamos"
                  className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-montserrat"
                >
                  Reclamos
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="text-center sm:text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4 text-white">Emergencias y Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2 justify-center sm:justify-center lg:justify-start">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                <p className="text-sm sm:text-base font-montserrat">
                  Mario Nivoli 206
                  <br />
                  Villa del Dique, Córdoba
                </p>
              </div>
              <div className="flex items-center space-x-2 justify-center sm:justify-center lg:justify-start">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <p className="text-sm sm:text-base font-montserrat">03546-497241</p>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria y copyright */}
        <div className="border-t border-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center space-y-2">
          <p className="text-sm sm:text-base opacity-80 font-montserrat">
            © 2024 Municipalidad de Villa del Dique. Todos los derechos reservados.
          </p>
          <p className="text-sm opacity-70 font-montserrat">
            Powered By{" "}
            <a
              href="https://dualitydomain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline hover:opacity-90 font-medium transition-all duration-200"
            >
              Duality Domain
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
