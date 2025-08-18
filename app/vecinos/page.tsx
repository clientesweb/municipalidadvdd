"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Facebook, Instagram, Youtube, MapPin, Phone, Trash2, DollarSign } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function VecinosPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentBanner, setCurrentBanner] = useState(0)

  // Auto-rotate carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev === 0 ? 1 : 0))
    }, 6000)

    return () => clearInterval(interval)
  }, [])

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
    <div className="min-h-screen">
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
                <a
                  key={index}
                  href={item.href}
                  className="text-base xl:text-lg font-montserrat font-medium text-gray-800 hover:text-[#16b5d0] transition-colors duration-200 py-2 whitespace-nowrap"
                >
                  {item.name}
                </a>
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
                <a
                  key={index}
                  href={item.href}
                  className="text-base xl:text-lg font-montserrat font-medium text-gray-800 hover:text-[#16b5d0] transition-colors duration-200 py-2 whitespace-nowrap"
                >
                  {item.name}
                </a>
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
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 z-[60]"
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
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[55] lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <nav className="space-y-6">
              {allMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-2xl font-montserrat font-medium text-gray-800 hover:text-[#16b5d0] transition-colors duration-200 py-3 border-b border-gray-100"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Banner Carousel */}
      <section className="relative w-full">
        <div className="relative w-full aspect-video overflow-hidden">
          {/* Banner 1 - Guía de Trámites */}
          <Link
            href="/vecinos/guia-de-tramites"
            className={`absolute inset-0 transition-opacity duration-500 ${
              currentBanner === 0 ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <Image
              src="/images/tramites.webp"
              alt="Guía de Trámites - Villa del Dique"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </Link>

          {/* Banner 2 - Ver Noticias */}
          <Link
            href="/noticias"
            className={`absolute inset-0 transition-opacity duration-500 ${
              currentBanner === 1 ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <Image
              src="/images/noticias.webp"
              alt="Ver Noticias - Villa del Dique"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </Link>
        </div>
      </section>

      {/* Banner Reclamos */}
      <section className="relative w-full">
        <Link href="/vecinos/reclamos" className="block w-full">
          <div className="relative w-full">
            <Image
              src="/images/reclamos-banner.webp"
              alt="Villa del Dique - Reclamos"
              width={1920}
              height={400}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>
        </Link>
      </section>

      {/* Pago de Tasas Municipales Section (now in Accordion) */}
      <section className="w-full py-8 sm:py-12 md:py-16 px-4 bg-gradient-to-r from-[#16b5d0] to-[#14a3bd]">
        <div className="container mx-auto max-w-6xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="municipal-taxes" className="border border-gray-200 rounded-lg shadow-sm bg-white">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-10 h-10 bg-[#16b5d0] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-nunito font-bold text-gray-900">
                    ¿QUERÉS PONERTE AL DÍA CON TUS TASAS MUNICIPALES?
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6 text-gray-700 font-montserrat">
                  <p className="text-base sm:text-lg leading-relaxed">
                    Seguí estos simples pasos para consultar y abonar tu deuda desde la comodidad de tu casa:
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded mb-6">
                    <p className="text-base sm:text-lg leading-relaxed text-blue-800">
                      <strong>Importante:</strong> Podrán hacerlo quienes tengan documentación en condiciones. Para
                      consultar su número de cuenta y verificador, pueden comunicarse a este{" "}
                      <a href="tel:3546123456" className="text-blue-600 hover:text-blue-800 underline font-semibold">
                        celular: 3546-123456
                      </a>{" "}
                      en horario de 7 a 14 hs.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-10">
                    <div className="bg-[#f8f9fa] rounded-xl p-4 sm:p-6 text-center border-l-4 border-[#16b5d0] hover:shadow-lg transition-shadow duration-200">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#16b5d0] text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-nunito font-bold mx-auto mb-3">
                        1
                      </div>
                      <p className="text-sm sm:text-base font-montserrat font-medium text-gray-800 leading-relaxed">
                        Hacé clic en "Consulta y pago de deuda"
                      </p>
                    </div>

                    <div className="bg-[#f8f9fa] rounded-xl p-4 sm:p-6 text-center border-l-4 border-[#16b5d0] hover:shadow-lg transition-shadow duration-200">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#16b5d0] text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-nunito font-bold mx-auto mb-3">
                        2
                      </div>
                      <p className="text-sm sm:text-base font-montserrat font-medium text-gray-800 leading-relaxed">
                        Ingresá en la opción "Tasa por Servicio a la Propiedad"
                      </p>
                    </div>

                    <div className="bg-[#f8f9fa] rounded-xl p-4 sm:p-6 text-center border-l-4 border-[#16b5d0] hover:shadow-lg transition-shadow duration-200">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#16b5d0] text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-nunito font-bold mx-auto mb-3">
                        3
                      </div>
                      <p className="text-sm sm:text-base font-montserrat font-medium text-gray-800 leading-relaxed">
                        Completá con tu número de cuenta y verificador
                      </p>
                    </div>

                    <div className="bg-[#f8f9fa] rounded-xl p-4 sm:p-6 text-center border-l-4 border-[#16b5d0] hover:shadow-lg transition-shadow duration-200">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#16b5d0] text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-nunito font-bold mx-auto mb-3">
                        4
                      </div>
                      <p className="text-sm sm:text-base font-montserrat font-medium text-gray-800 leading-relaxed">
                        Hacé clic en "Pagar"
                      </p>
                    </div>

                    <div className="bg-[#f8f9fa] rounded-xl p-4 sm:p-6 text-center border-l-4 border-[#16b5d0] hover:shadow-lg transition-shadow duration-200">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#16b5d0] text-white rounded-full flex items-center justify-center text-xl sm:text-2xl font-nunito font-bold mx-auto mb-3">
                        5
                      </div>
                      <p className="text-sm sm:text-base font-montserrat font-medium text-gray-800 leading-relaxed">
                        Seleccioná tu método de pago preferido y ¡listo!
                      </p>
                    </div>
                  </div>
                  <div className="text-center">
                    <a
                      href="https://www.municipalidad.com/villadeldique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-[#d39d85] hover:bg-[#c8906f] text-white font-nunito font-bold text-lg sm:text-xl lg:text-2xl px-8 py-4 sm:px-10 sm:py-5 lg:px-12 lg:py-6 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 transform"
                    >
                      Consulta y Pago de Deuda
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Organización y Horarios de Recolección de Residuos */}
      <section className="w-full py-8 sm:py-12 md:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="waste-collection" className="border border-gray-200 rounded-lg shadow-sm bg-white">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-10 h-10 bg-[#16b5d0] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <Trash2 className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-nunito font-bold text-gray-900">
                    ORGANIZACIÓN Y HORARIOS DE RECOLECCIÓN DE RESIDUOS
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6 text-gray-700 font-montserrat">
                  <p className="text-base sm:text-lg leading-relaxed">Estimados vecinos de Villa del Dique,</p>
                  <p className="text-base sm:text-lg leading-relaxed">
                    Con el objetivo de optimizar el servicio de recolección de residuos y facilitar la correcta
                    disposición de sus desechos, presentamos el detalle de los recorridos de nuestros camiones
                    compactadores.
                  </p>
                  <div className="bg-[#16b5d0] text-white p-4 rounded-lg">
                    <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4 text-center">
                      RECORRIDO Y DÍAS DE RECOLECCIÓN
                    </h3>
                  </div>
                  {/* Camión Compactador N° 1 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg sm:text-xl font-nunito font-bold text-[#16b5d0] mb-4 flex items-center">
                      <div className="w-8 h-8 bg-[#16b5d0] text-white rounded-full flex items-center justify-center text-sm font-nunito font-bold mr-3">
                        1
                      </div>
                      CAMIÓN COMPACTADOR N° 1
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-nunito font-semibold text-gray-900 mb-2">Lunes, Miércoles y Viernes:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                          <li>Parte de la zona comercial</li>
                          <li>Aguas Claras</li>
                          <li>Tulsa</li>
                          <li>Zona Náutica</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-nunito font-semibold text-gray-900 mb-2">Martes, Jueves y Sábado:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                          <li>Aguas Claras</li>
                          <li>Bello Horizonte</li>
                          <li>Vallecito</li>
                          <li>Parte de la zona del Valle</li>
                          <li>Playa Grande</li>
                          <li>Peñón</li>
                          <li>Villa Guadalupe</li>
                          <li>
                            Paraje La Sierrita (se recolecta los <strong>Martes y Jueves</strong>)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Camión Compactador N° 2 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h4 className="text-lg sm:text-xl font-nunito font-bold text-[#16b5d0] mb-4 flex items-center">
                      <div className="w-8 h-8 bg-[#16b5d0] text-white rounded-full flex items-center justify-center text-sm font-nunito font-bold mr-3">
                        2
                      </div>
                      CAMIÓN COMPACTADOR N° 2
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <h5 className="font-nunito font-semibold text-gray-900 mb-2">Lunes y Jueves:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                          <li>Parte de la zona comercial</li>
                          <li>Zona del Valle</li>
                          <li>IPVy Vivero</li>
                          <li>Residencial "A"</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-nunito font-semibold text-gray-900 mb-2">Martes y Viernes:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                          <li>Residencial "B"</li>
                          <li>Parte de la zona comercial</li>
                          <li>Villa del Dique Norte</li>
                          <li>Villa Nueva</li>
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-nunito font-semibold text-gray-900 mb-2">Miércoles y Sábados:</h5>
                        <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                          <li>Gahona</li>
                          <li>Pinar de Jeremías</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* Recomendación Importante */}
                  <div className="bg-[#d39d85] text-white p-6 rounded-lg">
                    <h4 className="text-lg sm:text-xl font-nunito font-bold mb-4">
                      RECOMENDACIÓN IMPORTANTE SOBRE EL HORARIO DE DISPOSICIÓN DE RESIDUOS
                    </h4>
                    <p className="text-base sm:text-lg leading-relaxed mb-4">
                      Para asegurar una recolección aún más eficiente y mantener la limpieza y el orden de nuestras
                      calles durante todo el día,{" "}
                      <strong>
                        les solicitamos encarecidamente que dispongan sus bolsas de residuos en la vía pública durante
                        la noche anterior al día de recolección.
                      </strong>
                    </p>
                    <p className="text-base sm:text-lg leading-relaxed">
                      Agradecemos enormemente su comprensión y colaboración para mantener nuestro Villa del Dique limpio
                      y ordenado.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Farmacias de Turno Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="pharmacy-duty" className="border border-gray-200 rounded-lg shadow-sm bg-white">
              <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50 transition-colors duration-200">
                <div className="flex items-center space-x-3 text-left">
                  <div className="w-10 h-10 bg-[#16b5d0] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 9.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-nunito font-bold text-gray-900">
                    FARMACIAS DE TURNO - AGOSTO 2025
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <div className="space-y-6 text-gray-700 font-montserrat">
                  <p className="text-base sm:text-lg leading-relaxed">
                    Consultá el cronograma de farmacias de turno para el mes de agosto y mantené siempre a mano los
                    contactos de emergencia.
                  </p>

                  {/* Calendar Image */}
                  <div className="bg-gray-50 rounded-lg p-4 text-center">
                    <Image
                      src="/images/farmacias-agosto.webp"
                      alt="Cronograma Farmacias de Turno - Agosto 2025"
                      width={800}
                      height={600}
                      className="w-full max-w-3xl mx-auto rounded-lg shadow-sm"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    />
                  </div>

                  {/* Pharmacy Contact Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="bg-[#16b5d0] text-white p-4 rounded-lg">
                      <h4 className="text-lg font-nunito font-bold mb-2">FARMACIA GRANGETTO</h4>
                      <p className="text-sm mb-1">San Martín 130</p>
                      <p className="text-sm">
                        <strong>Tel:</strong> 3546 503142 / 3546 659433
                      </p>
                    </div>

                    <div className="bg-[#16b5d0] text-white p-4 rounded-lg">
                      <h4 className="text-lg font-nunito font-bold mb-2">FARMACIA CUELLO</h4>
                      <p className="text-sm mb-1">Hipólito Yrigoyen</p>
                      <p className="text-sm">
                        <strong>Tel:</strong> 3546 417602
                      </p>
                    </div>

                    <div className="bg-[#16b5d0] text-white p-4 rounded-lg">
                      <h4 className="text-lg font-nunito font-bold mb-2">FARMACIA DEL VALLE</h4>
                      <p className="text-sm mb-1">San Martín 396</p>
                      <p className="text-sm">
                        <strong>Tel:</strong> 3546 435468
                      </p>
                    </div>

                    <div className="bg-[#16b5d0] text-white p-4 rounded-lg">
                      <h4 className="text-lg font-nunito font-bold mb-2">FARMACIA VILLA</h4>
                      <p className="text-sm mb-1">Hipólito Yrigoyen</p>
                      <p className="text-sm">
                        <strong>Tel:</strong> 3546 561747
                      </p>
                    </div>
                  </div>

                  {/* Download Button */}
                  <div className="text-center pt-4">
                    <a
                      href="/images/farmacias-agosto.webp"
                      download="farmacias-turno-agosto-2025.webp"
                      className="inline-flex items-center space-x-2 bg-[#d39d85] hover:bg-[#c8906f] text-white font-nunito font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 transform"
                    >
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span>Descargar Cronograma</span>
                    </a>
                  </div>

                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm text-yellow-700 font-montserrat">
                          <strong>Importante:</strong> En caso de emergencia fuera del horario de atención, comunicate
                          directamente con los números de teléfono indicados.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-nunito font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Últimas Noticias
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* News Item 1 */}
            <Link href="/noticias/nueva-maquinaria-vial" className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="relative aspect-video overflow-hidden">
                  <Image               src="https://www.villadeldique.gob.ar/images/incoporacion-maquinaria.webp"
                    alt="Nueva Maquinaria Vial"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#16b5d0] text-white px-3 py-1 rounded-full text-sm font-montserrat font-medium">
                    Obras Públicas
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-900 mb-3 group-hover:text-[#16b5d0] transition-colors duration-200">
                    Villa del Dique suma nueva maquinaria para el mantenimiento vial
                  </h3>
                  <p className="text-gray-600 font-montserrat text-base leading-relaxed mb-4">
                    La Municipalidad incorporó una moderna motoniveladora a su parque automotor para mejorar los
                    servicios públicos y optimizar los trabajos de mantenimiento vial.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-montserrat text-gray-500">27 de julio de 2025</span>
                    <span className="text-[#16b5d0] font-montserrat font-medium text-sm group-hover:underline">
                      Leer más →
                    </span>
                  </div>
                </div>
              </article>
            </Link>

            {/* News Item 2 */}
            <Link href="/noticias/controles-de-transito" className="group">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/images/joenada-transito.webp"
                    alt="Controles de Tránsito: Circular en regla, una tarea de todos"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4 bg-[#d39d85] text-white px-3 py-1 rounded-full text-sm font-montserrat font-medium">
                    Control
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-900 mb-3 group-hover:text-[#16b5d0] transition-colors duration-200">
                    Controles de Tránsito: Circular en regla, una tarea de todos
                  </h3>
                  <p className="text-gray-600 font-montserrat text-base leading-relaxed mb-4">
                    La Municipalidad de Villa del Dique, junto a la Policía de la Provincia de Córdoba, continúa
                    fortaleciendo su compromiso con La seguridad...
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-montserrat text-gray-500">21 de julio de 2025</span>
                    <span className="text-[#16b5d0] font-montserrat font-medium text-sm group-hover:underline">
                      Leer más →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          </div>

          {/* View All News Button */}
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/noticias"
              className="inline-block bg-[#16b5d0] hover:bg-[#14a3bd] text-white font-nunito font-bold text-lg sm:text-xl px-8 py-4 sm:px-10 sm:py-5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 transform"
            >
              Ver Todas las Noticias
            </Link>
          </div>
        </div>
      </section>

      {/* Banner "Tu Plan Perfecto" */}
      <section className="relative w-full">
        <Link href="/turistas" target="_blank" rel="noopener noreferrer" className="block w-full">
          <div className="relative w-full">
            <Image
              src="/images/banner-tu-plan-perfecto.webp"
              alt="Villa del Dique - Tu Plan Perfecto"
              width={1920}
              height={200}
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
          </div>
        </Link>
      </section>

      {/* Emergency Contact Buttons */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-nunito font-bold text-gray-900 mb-8 text-center">
            Contactos de Emergencia
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 justify-center items-center max-w-6xl mx-auto">
            <Link
              href="tel:354697829"
              className="bg-[#d39d85] text-white font-nunito font-bold text-lg sm:text-xl lg:text-2xl text-center px-8 py-4 lg:px-12 lg:py-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 w-full sm:w-auto min-w-[200px] lg:min-w-[250px] flex items-center justify-center"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2" /> Policía: 354697829
            </Link>
            <Link
              href="tel:3546497497"
              className="bg-[#d39d85] text-white font-nunito font-bold text-lg sm:text-xl lg:text-2xl text-center px-8 py-4 lg:px-12 lg:py-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 w-full sm:w-auto min-w-[200px] lg:min-w-[250px] flex items-center justify-center"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2" /> Bomberos: 3546497497
            </Link>
            <Link
              href="tel:3546497636"
              className="bg-[#d39d85] text-white font-nunito font-bold text-lg sm:text-xl lg:text-2xl text-center px-8 py-4 lg:px-12 lg:py-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 w-full sm:w-auto min-w-[200px] lg:min-w-[250px] flex items-center justify-center"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2" /> Hospital: 3546497636
            </Link>
          </div>
        </div>
      </section>

      {/* New Banner: Descargá Nuestra App (Updated) */}
      <section className="relative w-full">
        <Link
          href="#" // Placeholder link for app download
          className="block w-full"
        >
          <div className="relative w-full">
            <Image
              src="/images/banner-descarga-pwa.webp"
              alt="Villa del Dique - Descargá Nuestra App"
              width={1920}
              height={800} // Updated height for the new banner image
              className="w-full h-auto object-cover"
              sizes="100vw"
            />
            {/* Buttons positioned absolutely on top of the image */}
            <div className="absolute bottom-8 left-16 flex flex-row gap-3">
              <Link
                href="https://www.villadeldique.gob.ar/descargar-app-android/VillaDelDique.apk" // Placeholder link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src="/images/google-play-button.png"
                  alt="Get it on Google Play"
                  width={140}
                  height={42}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </Link>
              <Link
                href="#" // Placeholder link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-105 transition-transform duration-200"
              >
                <Image
                  src="/images/app-store-button.png"
                  alt="Available on the App Store"
                  width={140}
                  height={42}
                  className="h-10 sm:h-12 w-auto object-contain"
                />
              </Link>
            </div>
          </div>
        </Link>
      </section>

      {/* Footer */}
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
                  <a href="#" className="hover:opacity-80 hover:scale-110 transition-all duration-200">
                    <Facebook className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                  <a href="#" className="hover:opacity-80 hover:scale-110 transition-all duration-200">
                    <Instagram className="h-5 w-5 sm:h-6 sm:w-6" />
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4">Acceso Rápido</h3>
                <ul className="space-y-2 font-montserrat">
                  <li>
                    <Link
                      href="/vecinos/guia-de-tramites"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                    >
                      Guía de trámites
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/noticias"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                    >
                      Noticias
                    </a>
                  </li>
                  <li>
                    <a
                      href="/vecinos/servicios"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                    >
                      Servicios
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Institucional */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4">Institucional</h3>
              <ul className="space-y-2 font-montserrat">
                <li>
                  <a
                    href="/vecinos/muni"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                  >
                    La Muni
                  </a>
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
              <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4 text-white">Emergencias y Contacto</h3>
              <div className="space-y-3 font-montserrat">
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
          <div className="border-t border-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center space-y-2 font-montserrat">
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
