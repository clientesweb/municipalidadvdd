"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Footer from "@/components/Footer"

export default function GuiaDeTramitesPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const leftMenuItems = [
    { name: "Noticias", href: "/noticias" },
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
          <p className="text-sm sm:text-base font-montserrat font-medium">
            Página oficial de la Municipalidad de Villa del Dique
          </p>
        </div>
      </div>

      {/* Header with Navigation */}
      <header className="w-full py-2 sm:py-3 px-4 bg-white shadow-sm relative">
        <div className="container mx-auto relative">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between">
            {/* Left Menu Items */}
            <nav className="flex space-x-6 xl:space-x-8">
              {leftMenuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-base xl:text-lg font-montserrat font-medium text-gray-800 hover:text-[#16b5d0] transition-colors duration-200 py-2 whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Logo Center */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link href="/">
                <Image
                  src="/images/logo-oficial.webp"
                  alt="Villa del Dique Municipalidad"
                  width={400}
                  height={160}
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain"
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
                  className="text-base xl:text-lg font-montserrat font-medium text-gray-800 hover:text-[#16b5d0] transition-colors duration-200 py-2 whitespace-nowrap"
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
                  width={400}
                  height={160}
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain"
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
                  className="block text-2xl font-montserrat font-medium text-gray-800 hover:text-[#16b5d0] transition-colors duration-200 py-3 border-b border-gray-100"
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
            className="inline-flex items-center space-x-2 text-[#16b5d0] hover:text-[#0ea5e9] transition-colors duration-200 font-montserrat"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Volver a Vecinos</span>
          </Link>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-nunito font-extrabold text-gray-900 mb-8 text-center">
          GUÍA DE TRÁMITES
        </h1>

        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple" className="w-full space-y-4">
            {/* Habilitación de Comercio */}
            <AccordionItem value="item-1" className="bg-white shadow-lg rounded-lg border-none">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-nunito font-bold text-[#16b5d0]">
                  Habilitación de Comercio
                </h2>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6 font-montserrat text-gray-700 text-lg sm:text-xl">
                  <p>
                    <span className="font-semibold">Categoría:</span> Comercio
                  </p>
                  <p>
                    <span className="font-semibold">Nombre del Trámite:</span> Habilitación de Comercio
                  </p>

                  <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-800 mt-8 mb-4">✅ Requisitos</h3>
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

                  <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-800 mt-8 mb-4">
                    📍 ¿Dónde se realiza?
                  </h3>
                  <p className="flex items-center space-x-2">
                    <Image
                      src="/images/map-pin-icon.svg"
                      alt="Map Pin Icon"
                      width={24}
                      height={24}
                      className="h-5 w-5 text-[#16b5d0] flex-shrink-0"
                    />
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
              </AccordionContent>
            </AccordionItem>

            {/* Certificado de Dominio */}
            <AccordionItem value="item-2" className="bg-white shadow-lg rounded-lg border-none">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-nunito font-bold text-[#16b5d0]">
                  CERTIFICADO DE DOMINIO
                </h2>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6 font-montserrat text-gray-700 text-lg sm:text-xl">
                  <p>
                    <span className="font-semibold">Categoría:</span> Catastro / Inmuebles
                  </p>
                  <p>
                    <span className="font-semibold">Nombre del Trámite:</span> Certificado de dominio (cambio de
                    titularidad)
                  </p>

                  <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-800 mt-8 mb-4">✅ Requisitos</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Escritura</li>
                    <li>Informe de dominio catastral</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Solicitud de Extracción de Arbolado Público */}
            <AccordionItem value="item-3" className="bg-white shadow-lg rounded-lg border-none">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-nunito font-bold text-[#16b5d0]">
                  Solicitud de Extracción de Arbolado Público
                </h2>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6 font-montserrat text-gray-700 text-lg sm:text-xl">
                  <p>
                    <span className="font-semibold">Categoría:</span> Espacios Verdes
                  </p>
                  <p>
                    <span className="font-semibold">Nombre del Trámite:</span> Solicitud de pedido de extracción de
                    arbolado público
                  </p>
                  <p className="flex items-center space-x-2">
                    <Image
                      src="/images/mail-icon.svg"
                      alt="Mail Icon"
                      width={24}
                      height={24}
                      className="h-5 w-5 text-[#16b5d0] flex-shrink-0"
                    />
                    <span className="font-semibold">Contacto:</span>{" "}
                    <a href="mailto:obraprivadavdd@gmail.com" className="text-[#16b5d0] hover:underline font-medium">
                      obraprivadavdd@gmail.com
                    </a>
                  </p>

                  <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-800 mt-8 mb-4">✅ Requisitos</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Completar y presentar el formulario correspondiente.</li>
                    <li>
                      <a
                        href="/solicitud.pdf" // Updated path to use public folder
                        download="solicitud.pdf"
                        className="text-[#16b5d0] hover:underline font-medium"
                      >
                        Descargar la documentación oficial.
                      </a>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Por Construcciones Nuevas o Relevamientos */}
            <AccordionItem value="item-4" className="bg-white shadow-lg rounded-lg border-none">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-nunito font-bold text-[#16b5d0]">
                  POR CONSTRUCCIÓNES NUEVAS O RELEVAMIENTOS
                </h2>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6 font-montserrat text-gray-700 text-lg sm:text-xl">
                  <p>
                    <span className="font-semibold">Categoría:</span> Obras Privadas
                  </p>
                  <p>
                    <span className="font-semibold">Nombre del Trámite:</span> Permiso de edificación / constancia de
                    conexión de servicios
                  </p>

                  <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-800 mt-8 mb-4">✅ Requisitos</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Ser titular con escritura o poseedor con mensuras de posesión aprobadas</li>
                    <li>Libre de deuda de impuestos</li>
                    <li>Certificado de amojonamiento (solo si presenta escritura)</li>
                    <li>
                      Plano municipal de proyecto y conducción técnica firmado y colegiado por un profesional
                      matriculado de la provincia de Córdoba
                    </li>
                    <li>DNI del titular o poseedor</li>
                    <li>Relevamiento de especies nativas del lote, con fotos del frente y fondo</li>
                  </ul>

                  <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-800 mt-8 mb-4">
                    🏗️ Al iniciar la obra:
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Dar aviso de inicio de obra</li>
                    <li>Planilla de datos de constructores</li>
                    <li>
                      Cartel de obra con nro de expediente municipal y M.P del profesional/es (descargar el modelo aquí)
                      tamaño 60 x 43 cm
                    </li>
                  </ul>

                  <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-800 mt-8 mb-4">
                    📍 ¿Dónde se realiza?
                  </h3>
                  <p className="flex items-center space-x-2">
                    <Image
                      src="/images/map-pin-icon.svg"
                      alt="Map Pin Icon"
                      width={24}
                      height={24}
                      className="h-5 w-5 text-[#16b5d0] flex-shrink-0"
                    />
                    <span>
                      En la plataforma web del Colegio de Arquitectos de Villa del Dique.{" "}
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
                    <Image
                      src="/images/mail-icon.svg"
                      alt="Mail Icon"
                      width={24}
                      height={24}
                      className="h-5 w-5 text-[#16b5d0] flex-shrink-0 mt-0.5"
                    />
                    <span className="font-semibold">Contacto:</span>{" "}
                    <a href="mailto:obraprivadavdd@gmail.com" className="text-[#16b5d0] hover:underline font-medium">
                      obraprivadavdd@gmail.com
                    </a>
                  </p>

                  <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-800 mt-8 mb-4">💡 Consejos:</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Consulta el código de edificación y las nuevas ordenanzas antes de realizar cualquier movimiento
                      en su lote.
                    </li>
                    <li>Asesórate con la oficina técnica ante cualquier duda</li>
                    <li>Evite multas por construir sin permiso.</li>
                    <li>Evite multas por la tala indiscriminada de especies nativas.</li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Mensura de Posesión */}
            <AccordionItem value="item-5" className="bg-white shadow-lg rounded-lg border-none">
              <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-nunito font-bold text-[#16b5d0]">
                  Mensura de Posesión
                </h2>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6 font-montserrat text-gray-700 text-lg sm:text-xl">
                  <p>
                    <span className="font-semibold">Categoría:</span> Catastro / Inmuebles
                  </p>
                  <p>
                    <span className="font-semibold">Nombre del Trámite:</span> Mensura de Posesión
                  </p>

                  <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-800 mt-8 mb-4">✅ Requisitos</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Plano de mensura de posesión firmado por un profesional matriculado y visado por el colegio
                      profesional.
                    </li>
                    <li>Reporte de cuenta y dominio.</li>
                    <li>Reserva de nomenclatura.</li>
                    <li>Contrato de cesión de derechos.</li>
                    <li>Acta de constatación o declaración jurada ante juez de paz.</li>
                    <li>DNI del poseedor.</li>
                    <li>Impuestos municipales al día.</li>
                  </ul>

                  <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-800 mt-8 mb-4">
                    📍 ¿Dónde se realiza?
                  </h3>
                  <p className="flex items-center space-x-2">
                    <Image
                      src="/images/map-pin-icon.svg"
                      alt="Map Pin Icon"
                      width={24}
                      height={24}
                      className="h-5 w-5 text-[#16b5d0] flex-shrink-0"
                    />
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
                    <Image
                      src="/images/mail-icon.svg"
                      alt="Mail Icon"
                      width={24}
                      height={24}
                      className="h-5 w-5 text-[#16b5d0] flex-shrink-0 mt-0.5"
                    />
                    <span className="font-semibold text-sm">Contacto:</span>{" "}
                    <a
                      href="mailto:mensuras.municipalidad.vdd@gmail.com"
                      className="text-[#16b5d0] hover:underline font-medium text-sm break-all"
                    >
                      mensuras.municipalidad.vdd@gmail.com
                    </a>
                  </p>

                  <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-800 mt-8 mb-4">
                    📥 Descargar Documentación
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <a
                        href="/solicitud.pdf" // Placeholder, assuming this PDF is also in public
                        download="Mensuras_de_Posesion.pdf"
                        className="text-[#16b5d0] hover:underline font-medium"
                      >
                        Formulario de Solicitud
                      </a>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Recomendación */}
          <div className="mt-12 p-6 bg-gradient-to-r from-[#16b5d0]/10 to-[#0ea5e9]/10 rounded-lg border-l-4 border-[#16b5d0]">
            <p className="text-lg sm:text-xl font-montserrat text-gray-800 italic leading-relaxed text-center">
              "Un pueblo que crece sin pensar en el mañana, termina pagando las consecuencias: servicios que no
              alcanzan, tránsito desordenado, naturaleza herida y barrios sin alma. Planificar no es poner freno, es
              cuidar lo que somos y construir, juntos, el progreso que queremos."
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
