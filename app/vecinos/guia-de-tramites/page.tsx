"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X, Facebook, Instagram, Youtube, MapPin, Phone, Mail, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function GuiaDeTramitesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const leftMenuItems = [
    { name: "Noticias", href: "/noticias" }, // Changed from "/vecinos/noticias"
    { name: "El Pueblo", href: "/vecinos/el-pueblo" },
    { name: "Muni", href: "/vecinos/muni" },
  ]

  const rightMenuItems = [
    { name: "Servicios", href: "/vecinos/servicios" },
    { name: "Trámites", href: "/vecinos/guia-de-tramites" },
    { name: "Concejo Deliberante", href: "/vecinos/honorable-concejo-deliberante" },
  ]

  const allMenuItems = [...leftMenuItems, ...rightMenuItems]

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Announcement */}
      <div className="w-full bg-[#16b5d0] text-white py-2 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-base font-medium">Página oficial de la Municipalidad de Villa del Dique</p>
        </div>
      </div>

      {/* Header with Navigation */}
      <header className="w-full py-2 sm:py-3 px-4 bg-white shadow-sm relative">
        <div className="container mx-auto">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Left Menu Items */}
            <nav className="flex space-x-6 xl:space-x-8">
              {leftMenuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-base xl:text-lg font-medium text-gray-800 hover:text-[#16b5d0] transition-colors duration-200 py-2 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Logo Center */}
            <div className="flex-shrink-0 mx-6 xl:mx-8">
              <Link href="/">
                <Image
                  src="/images/logo-oficial.webp"
                  alt="Villa del Dique Municipalidad"
                  width={300}
                  height={120}
                  className="h-12 xl:h-16 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Right Menu Items */}
            <nav className="flex space-x-6 xl:space-x-8">
              {rightMenuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-base xl:text-lg font-medium text-gray-800 hover:text-[#16b5d0] transition-colors duration-200 py-2 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="flex lg:hidden justify-between items-center">
            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <Link href="/">
                <Image
                  src="/images/logo-oficial.webp"
                  alt="Villa del Dique Municipalidad"
                  width={300}
                  height={120}
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 z-50"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-[#16b5d0]" /> : <Menu className="h-6 w-6 text-[#16b5d0]" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleMenu} />}

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <nav className="space-y-6">
              {allMenuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-2xl font-medium text-gray-800 hover:text-[#16b5d0] transition-colors duration-200 py-3 border-b border-gray-100"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow container mx-auto py-8 px-4 sm:py-12 md:py-16 lg:py-20">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/vecinos"
            className="inline-flex items-center space-x-2 text-[#16b5d0] hover:text-[#0ea5e9] transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Volver a Vecinos</span>
          </Link>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-8 text-center">
          GUÍA DE TRÁMITES
        </h1>

        {/* Habilitación de Comercio */}
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#16b5d0]">Habilitación de Comercio</span>
          </h2>

          <div className="space-y-6 text-gray-700 text-lg sm:text-xl">
            <p>
              <span className="font-semibold">Categoría:</span> Comercio
            </p>
            <p>
              <span className="font-semibold">Nombre del Trámite:</span> Habilitación de Comercio
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">✅ Requisitos</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Fotocopia del DNI del titular.</li>
              <li>Título de la propiedad o contrato de locación.</li>
              <li>Fotocopia del CUIT (o constancia de inscripción).</li>
              <li>Fotocopia del Monotributo.</li>
              <li>Especificar el rubro sobre el cual se desarrollará la actividad.</li>
              <li>Inspección libre de deudas.</li>
              <li>Tasa de servicio a la propiedad (comprobante de pago).</li>
              <li>Planos aprobados.</li>
              <li>Final de obra.</li>
              <li>Carnet de manipulación de alimentos (en caso de rubros gastronómicos).</li>
            </ul>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">📍 ¿Dónde se realiza?</h3>
            <p className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
              <span>
                En el Edificio de la Municipalidad.{" "}
                <a
                  href="https://g.co/kgs/srGht4d"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#16b5d0] hover:underline font-medium"
                >
                  Ver en Google Maps
                </a>
              </span>
            </p>
          </div>
        </div>

        {/* Certificación de Posesión */}
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 max-w-3xl mx-auto mt-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#16b5d0]">Certificación de Posesión</span>
          </h2>

          <div className="space-y-6 text-gray-700 text-lg sm:text-xl">
            <p>
              <span className="font-semibold">Categoría:</span> Catastro / Inmuebles
            </p>
            <p>
              <span className="font-semibold">Nombre del Trámite:</span> Certificación de Posesión
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">✅ Requisitos</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Ser titular con escritura o poseedor con mensuras de posesión aprobadas.</li>
              <li>Libre de deuda de impuestos.</li>
              <li>Certificado de amojonamiento.</li>
              <li>Plano de proyectos firmados por un profesional matriculado y colegiado.</li>
              <li>Presentar DNI del solicitante.</li>
              <li>Relevamiento de especies nativas del lote.</li>
            </ul>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">📍 ¿Dónde se realiza?</h3>
            <p className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
              <span>
                En el Colegio de Arquitectos de Villa del Dique.{" "}
                <a
                  href="https://villadeldique.colegio-arquitectos.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#16b5d0] hover:underline font-medium"
                >
                  Visitar sitio web
                </a>
              </span>
            </p>
          </div>
        </div>

        {/* Solicitud de Extracción de Arbolado Público */}
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 max-w-3xl mx-auto mt-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#16b5d0]">Solicitud de Extracción de Arbolado Público</span>
          </h2>

          <div className="space-y-6 text-gray-700 text-lg sm:text-xl">
            <p>
              <span className="font-semibold">Categoría:</span> Espacios Verdes
            </p>
            <p>
              <span className="font-semibold">Nombre del Trámite:</span> Solicitud de pedido de extracción de arbolado
              público
            </p>
            <p className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
              <span className="font-semibold">Contacto:</span>{" "}
              <a href="mailto:obraprivadavdd@gmail.com" className="text-[#16b5d0] hover:underline font-medium">
                obraprivadavdd@gmail.com
              </a>
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">✅ Requisitos</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Completar y presentar el formulario correspondiente.</li>
              <li>
                <a
                  href="/solicitud.pdf"
                  download="solicitud.pdf"
                  className="text-[#16b5d0] hover:underline font-medium"
                >
                  Descargar la documentación oficial.
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mensura de Posesión */}
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 max-w-3xl mx-auto mt-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#16b5d0]">Mensura de Posesión</span>
          </h2>

          <div className="space-y-6 text-gray-700 text-lg sm:text-xl">
            <p>
              <span className="font-semibold">Categoría:</span> Catastro / Inmuebles
            </p>
            <p>
              <span className="font-semibold">Nombre del Trámite:</span> Mensura de Posesión
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">✅ Requisitos</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Plano de mensura de posesión firmado por un profesional matriculado y visado por el colegio profesional.
              </li>
              <li>Reporte de cuenta y dominio.</li>
              <li>Reserva de nomenclatura.</li>
              <li>Contrato de cesión de derechos.</li>
              <li>Acta de constatación o declaración jurada ante juez de paz.</li>
              <li>DNI del poseedor.</li>
              <li>Impuestos municipales al día.</li>
            </ul>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">📍 ¿Dónde se realiza?</h3>
            <p className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
              <span>
                En el Colegio de Arquitectos de Villa del Dique.{" "}
                <a
                  href="https://villadeldique.colegio-arquitectos.com.ar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#16b5d0] hover:underline font-medium"
                >
                  Visitar sitio web
                </a>
              </span>
            </p>

            <p className="flex items-start space-x-2">
              <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0 mt-0.5" />
              <span className="font-semibold text-sm">Contacto:</span>{" "}
              <a
                href="mailto:mensuras.municipalidad.vdd@gmail.com"
                className="text-[#16b5d0] hover:underline font-medium text-sm break-all"
              >
                mensuras.municipalidad.vdd@gmail.com
              </a>
            </p>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-8 mb-4">📥 Descargar Documentación</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a
                  href="/Mensuras_de_Posesion.pdf"
                  download="Mensuras_de_Posesion.pdf"
                  className="text-[#16b5d0] hover:underline font-medium"
                >
                  Formulario de Solicitud
                </a>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#16b5d0] text-white py-8 sm:py-10 md:py-12 px-4 mt-auto">
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
              <p className="text-lg sm:text-xl font-semibold text-center sm:text-center lg:text-left">
                EL PROGRESO QUE QUEREMOS
              </p>
            </div>

            {/* Redes Sociales y Acceso Rápido */}
            <div className="space-y-6 text-center sm:text-center lg:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Redes Sociales</h3>
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
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Acceso Rápido</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/vecinos/guia-de-tramites"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                    >
                      Guía de trámites
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/noticias" // Changed from "/vecinos/noticias"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                    >
                      Noticias
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/vecinos/servicios"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                    >
                      Servicios
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Institucional */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Institucional</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/vecinos/muni"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                  >
                    La Muni
                  </Link>
                </li>
                <li>
                  <a
                    href="/vecinos/honorable-concejo-deliberante"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                  >
                    Concejo Deliberante
                  </a>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2 justify-center sm:justify-center lg:justify-start">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base">
                    Mario Nivoli 206
                    <br />
                    Villa del Dique, Córdoba
                  </p>
                </div>
                <div className="flex items-center space-x-2 justify-center sm:justify-center lg:justify-start">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <p className="text-sm sm:text-base">03546-497241</p>
                </div>
              </div>
            </div>
          </div>

          {/* Línea divisoria y copyright */}
          <div className="border-t border-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center space-y-2">
            <p className="text-sm sm:text-base opacity-80">
              © 2024 Municipalidad de Villa del Dique. Todos los derechos reservados.
            </p>
            <p className="text-sm opacity-70">
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
    </div>
  )
}
