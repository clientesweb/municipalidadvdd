"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X, Facebook, Instagram, Youtube, MapPin, Phone, ArrowLeft, Users, Gavel, FileText } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function HonorableConcejoDeliberantePage() {
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

  // Autoridades del Concejo Deliberante
  const autoridades = {
    presidente: {
      nombre: "Ernesto Gustavo Cuello",
      cargo: "Presidente",
    },
    vicepresidente: {
      nombre: "Betiana Bassani",
      cargo: "Vice-Presidente",
    },
    vicepresidentePrimero: {
      nombre: "Laura Beatriz Loyola",
      cargo: "Vice-Presidente Primero",
    },
    concejales: ["Víctor Hugo Rivero", "Agustín Veliz", "Miguel Veron", "Marco Geremias"],
    secretaria: {
      nombre: "Mónica Palacios",
      cargo: "Secretaria",
    },
  }

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

        {/* Page Title - Centered without icon */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-nunito font-extrabold text-gray-900 mb-6">
            HONORABLE CONCEJO DELIBERANTE
          </h1>
          <div className="w-24 h-1 bg-[#16b5d0] mx-auto mb-6"></div>
          <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">
            Cuerpo legislativo municipal que representa a los ciudadanos de Villa del Dique en la toma de decisiones y
            la sanción de ordenanzas municipales.
          </p>
        </div>

        {/* Digestivo Normativo Section */}
        <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 rounded-t-lg mb-8">
          <div className="flex items-center space-x-3">
            <FileText className="h-6 w-6" />
            <h2 className="text-2xl sm:text-3xl font-nunito font-bold">DIGESTIVO NORMATIVO</h2>
          </div>
        </div>

        {/* Autoridades Section */}
        <div className="bg-white shadow-xl rounded-b-lg overflow-hidden mb-12">
          <div className="p-8 lg:p-12">
            <div className="flex items-center space-x-3 mb-8">
              <Users className="h-8 w-8 text-[#16b5d0]" />
              <h3 className="text-3xl sm:text-4xl font-nunito font-bold text-gray-900">Autoridades</h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 font-montserrat">
              {/* Presidente */}
              <div className="bg-gradient-to-br from-[#16b5d0]/10 to-[#0ea5e9]/10 p-6 rounded-lg border-l-4 border-[#16b5d0]">
                <h4 className="text-xl font-nunito font-bold text-[#16b5d0] mb-2">Presidente</h4>
                <p className="text-2xl font-semibold text-gray-900">{autoridades.presidente.nombre}</p>
              </div>

              {/* Vice-Presidente */}
              <div className="bg-gradient-to-br from-[#16b5d0]/10 to-[#0ea5e9]/10 p-6 rounded-lg border-l-4 border-[#16b5d0]">
                <h4 className="text-xl font-nunito font-bold text-[#16b5d0] mb-2">Vice-Presidente</h4>
                <p className="text-2xl font-semibold text-gray-900">{autoridades.vicepresidente.nombre}</p>
              </div>

              {/* Vice-Presidente Primero */}
              <div className="bg-gradient-to-br from-[#16b5d0]/10 to-[#0ea5e9]/10 p-6 rounded-lg border-l-4 border-[#16b5d0]">
                <h4 className="text-xl font-nunito font-bold text-[#16b5d0] mb-2">Vice-Presidente Primero</h4>
                <p className="text-2xl font-semibold text-gray-900">{autoridades.vicepresidentePrimero.nombre}</p>
              </div>

              {/* Secretaria */}
              <div className="bg-gradient-to-br from-[#16b5d0]/10 to-[#0ea5e9]/10 p-6 rounded-lg border-l-4 border-[#16b5d0]">
                <h4 className="text-xl font-nunito font-bold text-[#16b5d0] mb-2">Secretaria</h4>
                <p className="text-2xl font-semibold text-gray-900">{autoridades.secretaria.nombre}</p>
              </div>
            </div>

            {/* Concejales */}
            <div className="mt-12">
              <h4 className="text-3xl font-nunito font-bold text-gray-900 mb-6 flex items-center space-x-3">
                <Users className="h-8 w-8 text-[#16b5d0]" />
                <span>Concejales</span>
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 font-montserrat">
                {autoridades.concejales.map((concejal, index) => (
                  <div
                    key={index}
                    className="bg-white border-2 border-[#16b5d0]/20 p-4 rounded-lg hover:border-[#16b5d0]/40 hover:shadow-md transition-all duration-200"
                  >
                    <div className="text-center">
                      <div className="w-12 h-12 bg-[#16b5d0]/10 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Users className="h-6 w-6 text-[#16b5d0]" />
                      </div>
                      <p className="text-lg font-semibold text-gray-900">{concejal}</p>
                      <p className="text-sm text-gray-600">Concejal</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Boletín Oficial Section */}
        <div className="bg-white shadow-xl rounded-lg overflow-hidden mb-12">
          <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6">
            <div className="flex items-center space-x-3">
              <FileText className="h-6 w-6" />
              <h2 className="text-2xl sm:text-3xl font-nunito font-bold">BOLETÍN OFICIAL</h2>
            </div>
          </div>

          <div className="p-8 lg:p-12">
            <div className="mb-6">
              <p className="text-lg font-montserrat text-gray-600">
                Accede a las ordenanzas municipales vigentes. Puedes visualizar o descargar cada documento en formato
                PDF.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {/* Índice de Ordenanzas 2024 */}
              <AccordionItem value="indice-2024" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#16b5d0]" />
                    <span className="text-lg font-montserrat font-semibold text-left">ÍNDICE DE ORDENANZAS 2024</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-montserrat">
                      Índice completo de ordenanzas municipales del año 2024
                    </p>
                    <div className="flex space-x-2">
                      <a
                        href="/ordenanzas/INDICE DE ORDENANZA 2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#16b5d0] text-white rounded-md hover:bg-[#0ea5e9] transition-colors duration-200 font-montserrat"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver PDF
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Ordenanza 1049-2024 */}
              <AccordionItem value="ord-1049-2024" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#16b5d0]" />
                    <span className="text-lg font-montserrat font-semibold text-left">ORDENANZA 1049-2024</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-montserrat">Ordenanza Municipal N° 1049 del año 2024</p>
                    <div className="flex space-x-2">
                      <a
                        href="/ordenanzas/ORDENANZA-1049-2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#16b5d0] text-white rounded-md hover:bg-[#0ea5e9] transition-colors duration-200 font-montserrat"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver PDF
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Ordenanza 1043-2023 Desafío Encuentro Calamuchitano */}
              <AccordionItem value="ord-1043-2023" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#16b5d0]" />
                    <span className="text-lg font-montserrat font-semibold text-left">
                      ORDENANZA 1043-2023 - DESAFÍO ENCUENTRO CALAMUCHITANO
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-montserrat">Ordenanza sobre el Desafío Encuentro Calamuchitano</p>
                    <div className="flex space-x-2">
                      <a
                        href="/ordenanzas/ORDENANZA-1043-2023-DESAF-ENCUENTRO-CALAMUCHITANO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#16b5d0] text-white rounded-md hover:bg-[#0ea5e9] transition-colors duration-200 font-montserrat"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver PDF
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Ordenanza 1048-2024 Trabajos de Conservación Vialidad */}
              <AccordionItem value="ord-1048-2024" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#16b5d0]" />
                    <span className="text-lg font-montserrat font-semibold text-left">
                      ORDENANZA 1048-2024 - TRABAJOS DE CONSERVACIÓN VIALIDAD
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-montserrat">
                      Ordenanza sobre trabajos de conservación de vialidad
                    </p>
                    <div className="flex space-x-2">
                      <a
                        href="/ordenanzas/ORDENANZA-1048-2024-TRAB-DE-CONSERV-VIALIDAD.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#16b5d0] text-white rounded-md hover:bg-[#0ea5e9] transition-colors duration-200 font-montserrat"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver PDF
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Ordenanza 1050-2024 */}
              <AccordionItem value="ord-1050-2024" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#16b5d0]" />
                    <span className="text-lg font-montserrat font-semibold text-left">ORDENANZA 1050-2024</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-montserrat">Ordenanza Municipal N° 1050 del año 2024</p>
                    <div className="flex space-x-2">
                      <a
                        href="/ordenanzas/ORDENANZA-1050-2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#16b5d0] text-white rounded-md hover:bg-[#0ea5e9] transition-colors duration-200 font-montserrat"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver PDF
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Ordenanza 1045-2022 Tarifa Remis */}
              <AccordionItem value="ord-1045-2022" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#16b5d0]" />
                    <span className="text-lg font-montserrat font-semibold text-left">
                      ORDENANZA 1045-2022 - TARIFA REMIS
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-montserrat">Ordenanza sobre tarifas de servicios de remis</p>
                    <div className="flex space-x-2">
                      <a
                        href="/ordenanzas/ORDENANZA-1045-2022-TARIFA-REMIS.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#16b5d0] text-white rounded-md hover:bg-[#0ea5e9] transition-colors duration-200 font-montserrat"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver PDF
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Ordenanza 1044-2022 Adhesión Ente Regional Calamuchita */}
              <AccordionItem value="ord-1044-2022" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#16b5d0]" />
                    <span className="text-lg font-montserrat font-semibold text-left">
                      ORDENANZA 1044-2022 - ADHESIÓN ENTE REGIONAL CALAMUCHITA
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-montserrat">
                      Ordenanza de adhesión al Ente Regional de Calamuchita
                    </p>
                    <div className="flex space-x-2">
                      <a
                        href="/ordenanzas/ORDENANZA-1044-2022-ADHES-ENTE-REGUINAL-CALAMUCH.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#16b5d0] text-white rounded-md hover:bg-[#0ea5e9] transition-colors duration-200 font-montserrat"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver PDF
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Ordenanza 1046-24 Modificación Ordenanza 1039-23 */}
              <AccordionItem value="ord-1046-24" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#16b5d0]" />
                    <span className="text-lg font-montserrat font-semibold text-left">
                      ORDENANZA 1046-24 - MODIFICACIÓN ORDENANZA 1039-23
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-montserrat">Modificación de la Ordenanza 1039-23</p>
                    <div className="flex space-x-2">
                      <a
                        href="/ordenanzas/ORDENANZA-1046-24-MID-ORD-1039-23.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#16b5d0] text-white rounded-md hover:bg-[#0ea5e9] transition-colors duration-200 font-montserrat"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver PDF
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Ordenanza 1047-24 Modificación Servicio de Ambulancia */}
              <AccordionItem value="ord-1047-24" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#16b5d0]" />
                    <span className="text-lg font-montserrat font-semibold text-left">
                      ORDENANZA 1047-24 - SERVICIO DE AMBULANCIA
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-montserrat">
                      Modificación Ordenanza 872-17 sobre servicio de ambulancia
                    </p>
                    <div className="flex space-x-2">
                      <a
                        href="/ordenanzas/ORDENANZA-1047-24-MOD-ORD-872-17-SERVICIO-DERECHA-DE-AMBULANCIA.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#16b5d0] text-white rounded-md hover:bg-[#0ea5e9] transition-colors duration-200 font-montserrat"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver PDF
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Ordenanza 1051-2024 Fortalecimiento Educativo */}
              <AccordionItem value="ord-1051-2024" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#16b5d0]" />
                    <span className="text-lg font-montserrat font-semibold text-left">
                      ORDENANZA 1051-2024 - FORTALECIMIENTO EDUCATIVO
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-montserrat">Ordenanza sobre fortalecimiento educativo</p>
                    <div className="flex space-x-2">
                      <a
                        href="/ordenanzas/ORDENANZA-1051-2024-FORTALECIMIENTO-EDUCATIVO.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#16b5d0] text-white rounded-md hover:bg-[#0ea5e9] transition-colors duration-200 font-montserrat"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver PDF
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Ordenanza 1042-2023 Presupuesto 2024 */}
              <AccordionItem value="ord-1042-2023-pres" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#16b5d0]" />
                    <span className="text-lg font-montserrat font-semibold text-left">
                      ORDENANZA 1042-2023 - PRESUPUESTO 2024
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-montserrat">Ordenanza de Presupuesto Municipal 2024</p>
                    <div className="flex space-x-2">
                      <a
                        href="/ordenanzas/ORDENANZA-1042-2023-PRESUPUESTO-2024-1.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#16b5d0] text-white rounded-md hover:bg-[#0ea5e9] transition-colors duration-200 font-montserrat"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver PDF
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Ordenanza 1039-2023 Organigrama Municipal */}
              <AccordionItem value="ord-1039-2023" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#16b5d0]" />
                    <span className="text-lg font-montserrat font-semibold text-left">
                      ORDENANZA 1039-2023 - ORGANIGRAMA MUNICIPAL
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-montserrat">Ordenanza sobre organigrama municipal</p>
                    <div className="flex space-x-2">
                      <a
                        href="/ordenanzas/ORDENANZA-1039-2023-ORGANIGRAMA-MUNICIPAL.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#16b5d0] text-white rounded-md hover:bg-[#0ea5e9] transition-colors duration-200 font-montserrat"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver PDF
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Ordenanza 1042-2023 Presupuesto 2024 (segunda versión) */}
              <AccordionItem value="ord-1042-2023-pres2" className="border border-gray-200 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-[#16b5d0]" />
                    <span className="text-lg font-montserrat font-semibold text-left">
                      ORDENANZA 1042-2023 - PRESUPUESTO 2024 (VERSIÓN FINAL)
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-600 font-montserrat">
                      Versión final de la Ordenanza de Presupuesto Municipal 2024
                    </p>
                    <div className="flex space-x-2">
                      <a
                        href="/ordenanzas/ORDENANZA-1042-2023-PRESUPUESTO-2024.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-[#16b5d0] text-white rounded-md hover:bg-[#0ea5e9] transition-colors duration-200 font-montserrat"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Ver PDF
                      </a>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        {/* Información Institucional */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-nunito font-bold text-gray-900 mb-6 text-center">
            Función del Concejo Deliberante
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center font-montserrat">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-[#16b5d0]/10 rounded-full flex items-center justify-center mx-auto">
                <Gavel className="h-8 w-8 text-[#16b5d0]" />
              </div>
              <h4 className="text-lg font-nunito font-semibold text-gray-900">Poder Legislativo</h4>
              <p className="text-gray-600">
                Sanción de ordenanzas, resoluciones y declaraciones que regulan la vida municipal.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-[#16b5d0]/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-[#16b5d0]" />
              </div>
              <h4 className="text-lg font-nunito font-semibold text-gray-900">Representación Ciudadana</h4>
              <p className="text-gray-600">
                Los concejales representan los intereses y necesidades de los vecinos de Villa del Dique.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-[#16b5d0]/10 rounded-full flex items-center justify-center mx-auto">
                <FileText className="h-8 w-8 text-[#16b5d0]" />
              </div>
              <h4 className="text-lg font-nunito font-semibold text-gray-900">Control y Fiscalización</h4>
              <p className="text-gray-600">Supervisión y control de la gestión del Poder Ejecutivo Municipal.</p>
            </div>
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
                width={160}
                height={160}
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
                    <Link
                      href="/noticias"
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
              <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4">Institucional</h3>
              <ul className="space-y-2 font-montserrat">
                <li>
                  <Link
                    href="/vecinos/muni"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                  >
                    La Muni
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vecinos/honorable-concejo-deliberante"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                  >
                    Concejo Deliberante
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4">Contacto</h3>
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
