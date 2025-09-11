import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Linkedin as LinkedIn } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1e1d1c] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Logo y descripción */}
          <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <div className="mb-4 sm:mb-6">
              {/* Actualizado logo a nuevo formato webp y aumentado tamaño */}
              <Image
                src="/images/merkat-agri-logo-new.webp"
                alt="Merkat Agri - Distribuidor Oficial ORSI Argentina"
                width={280}
                height={84}
                className="w-60 sm:w-70 h-auto mx-auto sm:mx-0"
              />
            </div>
            <p className="text-white/80 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Merkat Agri ha nacido por ofrecer al agricultor argentino los equipos agrícolas de la más avanzada
              tecnología y la mayor calidad ORSI.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              <a
                href="https://www.facebook.com/merkatagri"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#581f0b] hover:bg-[#eeb010] text-white p-2 sm:p-3 rounded-full transition-colors duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@merkatagri"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#581f0b] hover:bg-[#eeb010] text-white p-2 sm:p-3 rounded-full transition-colors duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@merkatagri"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#581f0b] hover:bg-[#eeb010] text-white p-2 sm:p-3 rounded-full transition-colors duration-300"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/merkatagriargentina/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#581f0b] hover:bg-[#eeb010] text-white p-2 sm:p-3 rounded-full transition-colors duration-300"
              >
                <LinkedIn className="w-4 h-4 sm:w-5 sm:h-5 text-[#eeb010] flex-shrink-0" />
              </a>
            </div>
          </div>

          {/* Navegación */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-white font-display">NAVEGACIÓN</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-[#eeb010] transition-colors duration-300 text-sm sm:text-base"
                >
                  INICIO
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-white/80 hover:text-[#eeb010] transition-colors duration-300 text-sm sm:text-base"
                >
                  NOSOTROS
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-white/80 hover:text-[#eeb010] transition-colors duration-300 text-sm sm:text-base"
                >
                  PRODUCTOS
                </Link>
              </li>
              <li>
                <Link
                  href="/novedades"
                  className="text-white/80 hover:text-[#eeb010] transition-colors duration-300 text-sm sm:text-base"
                >
                  NOVEDADES
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-white/80 hover:text-[#eeb010] transition-colors duration-300 text-sm sm:text-base"
                >
                  CONTACTO
                </Link>
              </li>
            </ul>
          </div>

          {/* Nuestra Marca */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-white font-display">NUESTRA MARCA</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link
                  href="/productos"
                  className="text-white/80 hover:text-[#eeb010] transition-colors duration-300 font-medium text-sm sm:text-base"
                >
                  ORSI - MAQUINARIA ITALIANA
                </Link>
              </li>
              <li className="text-white/60 text-xs sm:text-sm leading-relaxed">
                DISTRIBUIDOR EXCLUSIVO DE EQUIPOS ORSI EN ARGENTINA
              </li>
              <li className="text-white/60 text-xs sm:text-sm leading-relaxed">TECNOLOGÍA ITALIANA DESDE 1979</li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4 text-white font-display">CONTACTO</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center sm:justify-start space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#eeb010] flex-shrink-0" />
                <span className="text-white/80 text-sm sm:text-base">262252270</span>
              </div>
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#eeb010] flex-shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <span className="text-white/80 text-sm sm:text-base">gsosa@merkatagri.com</span>
                  <span className="text-white/80 text-sm sm:text-base">servicio@merkatagri.com</span>
                  <span className="text-white/80 text-sm sm:text-base">ventasarg@merkatagri.com</span>
                </div>
              </div>
              <div className="flex items-start justify-center sm:justify-start space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#eeb010] flex-shrink-0 mt-1" />
                <div className="flex flex-col space-y-1">
                  <span className="text-white/80 font-medium text-sm sm:text-base">ARGENTINA</span>
                  <span className="text-white/60 text-xs sm:text-sm">CORNELIO SAAVEDRA 44</span>
                  <span className="text-white/60 text-xs sm:text-sm">LA CONSULTA, MENDOZA</span>
                  <span className="text-white/60 text-xs sm:text-sm">262252270</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <p className="text-[#eeb010] text-xs sm:text-sm font-bold text-center lg:text-left">
              © 2024 MERKAT AGRI. TODOS LOS DERECHOS RESERVADOS.
            </p>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
              <Link
                href="/privacidad"
                className="text-white/80 hover:text-[#eeb010] text-xs sm:text-sm transition-colors duration-300"
              >
                POLÍTICA DE PRIVACIDAD
              </Link>
              <Link
                href="/terminos"
                className="text-white/80 hover:text-[#eeb010] text-xs sm:text-sm transition-colors duration-300"
              >
                TÉRMINOS Y CONDICIONES
              </Link>
            </div>
          </div>
          <div className="text-center mt-4 pt-4 border-t border-white/10">
            <p className="text-[#eeb010] text-xs font-bold">
              DESARROLLADO POR{" "}
              <a
                href="https://dualitydomain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#eeb010] hover:text-white font-bold transition-colors duration-300"
              >
                DUALITY DOMAIN
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
