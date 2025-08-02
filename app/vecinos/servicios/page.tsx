"use client"

import Image from "next/image"
import { useState } from "react"
import {
  Menu,
  X,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
  ArrowLeft,
  Camera,
  Building2,
  Bus,
  Heart,
  Pill,
  ShieldCheck,
  Scale,
  ClipboardList,
  BookOpen,
  GraduationCap,
  Megaphone,
  FlaskConical,
  Waves,
  Radio,
  Leaf,
} from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ServiciosPage() {
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

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-nunito font-extrabold text-gray-900 mb-6">
            SERVICIOS
          </h1>
          <div className="w-24 h-1 bg-[#16b5d0] mx-auto mb-6"></div>
          <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">
            Directorio completo de servicios públicos y privados en Villa del Dique
          </p>
        </div>

        {/* Services Sections */}
        <div className="space-y-6">
          <Accordion type="multiple" className="w-full">
            {/* SERVICIOS MUNICIPALES */}
            <AccordionItem value="item-1" className="bg-white shadow-xl rounded-lg overflow-hidden mb-6">
              <AccordionTrigger className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 text-left hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-6 w-6" />
                  <h2 className="text-2xl sm:text-3xl font-nunito font-bold">SERVICIOS MUNICIPALES</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 sm:p-8 font-montserrat space-y-8">
                {/* Municipalidad de Villa del Dique */}
                <div>
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4">Municipalidad de Villa del Dique</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="https://g.co/kgs/VUnXHqZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        Mario Nivoli 206 - Ver en Google Maps
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:+5493546405918"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        +54 9 3546 40 5918
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:secretariaturismoycultura.vdd@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        secretariaturismoycultura.vdd@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Instagram className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="https://www.instagram.com/munivilladeldique"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        @munivilladeldique
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Facebook className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="https://www.facebook.com/MuniVilladelDique"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        Muni Villa del Dique
                      </a>
                    </div>
                  </div>
                </div>

                {/* Salud */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Heart className="h-6 w-6 text-[#16b5d0]" />
                    <span>Salud</span>
                  </h3>
                  <div className="space-y-6">
                    {/* Hospital Municipal */}
                    <div>
                      <h4 className="text-lg font-nunito font-semibold text-gray-800 mb-2">Hospital Municipal</h4>
                      <p className="text-gray-600 mb-2">Atención médica general y atención primaria de la salud</p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                          <a
                            href="https://g.co/kgs/C29D48B"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                          >
                            Bv. Hipólito Yrigoyen 106 - Ver en Google Maps
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                          <a
                            href="tel:3546454672"
                            className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                          >
                            3546-454672 (Urgencias)
                          </a>
                        </div>
                      </div>
                    </div>
                    {/* Dispensario Municipal */}
                    <div>
                      <h4 className="text-lg font-nunito font-semibold text-gray-800 mb-2">Dispensario Municipal</h4>
                      <p className="text-gray-600 mb-2">Atención médica general y atención primaria de la salud</p>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                          <a
                            href="https://g.co/kgs/Yk62D5K"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                          >
                            Ver ubicación en Google Maps
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                          <a
                            href="tel:3546506145"
                            className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                          >
                            3546-506145
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Inspección, Monitoreo, Guardia Local y Defensa Civil */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <ShieldCheck className="h-6 w-6 text-[#16b5d0]" />
                    <span>Inspección, Monitoreo, Guardia Local, Defensa Civil y Juzgado de Faltas</span>
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 font-medium">Atención: 24 hs</p>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <div className="space-x-4">
                        <a
                          href="tel:3546565157"
                          className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                        >
                          Monitoreo: 3546 565157
                        </a>
                        <span className="text-gray-400">|</span>
                        <a
                          href="tel:3546565159"
                          className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                        >
                          Inspección, Monitoreo, Defensa Civil: 3546 565159
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:vdd.inspeccion@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        vdd.inspeccion@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <p className="text-gray-700 font-medium">Ubicación: Pilcomayo s/n (Misma que Radio Municipal)</p>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <h4 className="text-lg font-nunito font-semibold text-gray-800 mb-2 flex items-center space-x-2">
                        <Scale className="h-5 w-5 text-[#16b5d0]" />
                        <span>Juzgado de Faltas</span>
                      </h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                          <a
                            href="https://g.co/kgs/VUnXHqZ"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                          >
                            https://g.co/kgs/VUnXHqZ - Ver en Google Maps
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                          <a
                            href="tel:+5493546000000"
                            className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                          >
                            +54 9 3546 00-0000
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Registro Civil */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <ClipboardList className="h-6 w-6 text-[#16b5d0]" />
                    <span>Registro Civil</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="https://www.google.com/maps/search/Pilcomayo+s%2Fn+Villa+del+Dique" // Placeholder link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        Pilcomayo s/n - Ver ubicación
                      </a>
                    </div>
                    <p className="text-gray-700 font-medium">Horario de atención: 7:00 a 14:00 hs</p>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:reclamosmunivdd@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        reclamosmunivdd@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Oficina de Turismo */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Camera className="h-6 w-6 text-[#16b5d0]" />
                    <span>Oficina de Turismo</span>
                  </h3>
                  <p className="text-gray-700 font-medium">
                    Información turística, asesoramiento y coordinación de circuitos
                  </p>
                  <div className="space-y-4 mt-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="https://g.co/kgs/7ctVbHL"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        Ingreso a la localidad (Oficina de Turismo) - Ver ubicación en Google Maps
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:+5493546405918"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        +54 9 3546 40 5918
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:secretariaturismoycultura.vdd@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        secretariaturismoycultura.vdd@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Instagram className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="https://www.instagram.com/turismoycultura.villadeldique"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        @turismoycultura.villadeldique
                      </a>
                    </div>
                  </div>
                </div>

                {/* Casa de la Cultura */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <BookOpen className="h-6 w-6 text-[#16b5d0]" />
                    <span>Casa de la Cultura</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="https://www.google.com/maps/search/Casa+de+la+Cultura+Villa+del+Dique" // Placeholder link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        Ver ubicación
                      </a>
                    </div>
                    <p className="text-gray-700 font-medium">
                      Contiene: Oficina de Gestión Cultural, Biblioteca, Sala de Informática, Museo e Historia de Villa
                      del Dique
                    </p>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:+5493546405918"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        +54 9 3546 40 5918
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:secretariaturismoycultura.vdd@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        secretariaturismoycultura.vdd@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Centro de Capacitación y Formación Villa del Dique */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <GraduationCap className="h-6 w-6 text-[#16b5d0]" />
                    <span>Centro de Capacitación y Formación Villa del Dique</span>
                  </h3>
                  <p className="text-gray-700 font-medium">
                    Incluye: Universidad Popular, CEDER (Centro de Desarrollo Regional)
                  </p>
                  <p className="text-gray-700 font-medium">Dirección: (agregar si está disponible)</p>
                </div>

                {/* Oficina de Reclamos (Galpón Municipal) */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Megaphone className="h-6 w-6 text-[#16b5d0]" />
                    <span>Oficina de Reclamos (Galpón Municipal)</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="https://www.google.com/maps/search/Pilcomayo+s%2Fn+Villa+del+Dique" // Placeholder link
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        Pilcomayo s/n
                      </a>
                    </div>
                    <p className="text-gray-700 font-medium">Horario de atención: 7:00 a 14:00 hs</p>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:reclamosmunivdd@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        reclamosmunivdd@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Puesto de Control Bromatológico y Registro de Introductores */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <FlaskConical className="h-6 w-6 text-[#16b5d0]" />
                    <span>Puesto de Control Bromatológico y Registro de Introductores</span>
                  </h3>
                  <p className="text-gray-700 font-medium">Dirección: (agregar si está disponible)</p>
                  <p className="text-gray-700 font-medium">Contacto: (no proporcionado)</p>
                </div>

                {/* Pileta Climatizada “VISAN” */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Waves className="h-6 w-6 text-[#16b5d0]" />
                    <span>Pileta Climatizada “VISAN”</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:3546435753"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        3546 435753
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:adrianrafaelsegura@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        adrianrafaelsegura@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Radio Municipal */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Radio className="h-6 w-6 text-[#16b5d0]" />
                    <span>Radio Municipal</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:3546458812"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        3546 458812
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:comunicacionvilladeldique@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        comunicacionvilladeldique@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <p className="text-gray-700 font-medium">
                        Ubicación: Pilcomayo s/n (Misma que Inspección y Monitoreo)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Oficina de Ambiente */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Leaf className="h-6 w-6 text-[#16b5d0]" />
                    <span>Oficina de Ambiente</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:3546400080"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        3546 400080
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:ambientemunivdd@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        ambientemunivdd@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Electricidad */}
            <AccordionItem value="item-2" className="bg-white shadow-xl rounded-lg overflow-hidden mb-6">
              <AccordionTrigger className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 text-left hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-6 w-6" />
                  <h2 className="text-2xl sm:text-3xl font-nunito font-bold">ELECTRICIDAD VILLA DEL DIQUE</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 sm:p-8 font-montserrat">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                    <a
                      href="tel:+5493546534000"
                      className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                    >
                      +54 9 3546 53-4000
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                    <a
                      href="mailto:Electrocidadvilladeldiqueok@gmail.com"
                      className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                    >
                      Electrocidadvilladeldiqueok@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Instagram className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                    <a
                      href="https://www.instagram.com/electricidadvilladeldiqueok?igsh=NXkwOWh0Nmt2bW1j"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                    >
                      @electricidadvilladeldiqueok
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Cooperativa de Obra y Servicios Públicos de Villa del Dique Ltda. */}
            <AccordionItem value="item-3" className="bg-white shadow-xl rounded-lg overflow-hidden mb-6">
              <AccordionTrigger className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 text-left hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-6 w-6" />
                  <h2 className="text-2xl sm:text-3xl font-nunito font-bold">
                    COOPERATIVA DE OBRA Y SERVICIOS PÚBLICOS DE VILLA DEL DIQUE LTDA.
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 sm:p-8 font-montserrat">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                    <a
                      href="https://share.google/3oNfajs3HtUVQqVG9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                    >
                      Bv Hipólito Yrigoyen S/N (esq. Chaco) - Ver en Google Maps
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                    <a
                      href="tel:03546497250"
                      className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                    >
                      03546-497250
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                    <a
                      href="mailto:coopvdique@grandeslagos.com.ar"
                      className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                    >
                      coopvdique@grandeslagos.com.ar
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Link
                      href="http://www.coopvvilladeldique.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                    >
                      www.coopvvilladeldique.com
                    </Link>
                  </div>
                </div>
                <div className="mt-4 space-y-4">
                  <div>
                    <h3 className="text-xl font-nunito font-bold text-gray-900 mb-2">Servicios Principales</h3>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:03546497250"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        03546-497250
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-nunito font-bold text-gray-900 mb-2">Internet</h3>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:+5493546405803"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        +54 9 3546 40-5803
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-nunito font-bold text-gray-900 mb-2">Pagos</h3>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:+5493546405869"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        +54 9 3546 40-5869
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-nunito font-bold text-gray-900 mb-2">Sepelio</h3>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:+5493546405807"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        +54 9 3546 40-5807
                      </a>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Transporte */}
            <AccordionItem value="item-4" className="bg-white shadow-xl rounded-lg overflow-hidden mb-6">
              <AccordionTrigger className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 text-left hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Bus className="h-6 w-6" />
                  <h2 className="text-2xl sm:text-3xl font-nunito font-bold">TRANSPORTE</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 sm:p-8 font-montserrat">
                <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4">Buses Lep</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                    <a
                      href="https://g.co/kgs/j5n77ro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                    >
                      Av. San Martín 10 (Terminal) - Ver en Google Maps
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                    <a
                      href="tel:3546510724"
                      className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                    >
                      3546-510724
                    </a>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Farmacias */}
            <AccordionItem value="item-5" className="bg-white shadow-xl rounded-lg overflow-hidden">
              <AccordionTrigger className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 text-left hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Pill className="h-6 w-6" />
                  <h2 className="text-2xl sm:text-3xl font-nunito font-bold">FARMACIAS</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 sm:p-8 font-montserrat">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* FarmaVilla */}
                  <div>
                    <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4">FarmaVilla</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                        <a
                          href="https://g.co/kgs/nwiK8gE"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                        >
                          Bv. Hipólito Yrigoyen 836
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                        <a
                          href="tel:3546561747"
                          className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                        >
                          3546-561747
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Farmacia Grangetto */}
                  <div>
                    <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4">Farmacia Grangetto</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                        <a
                          href="https://g.co/kgs/Fn9TyCQ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                        >
                          Av. San Martín 130
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                        <div className="space-x-2">
                          <a
                            href="tel:03546497294"
                            className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                          >
                            03546-497294
                          </a>
                          <span className="text-gray-400 text-sm">|</span>
                          <a
                            href="tel:3546503142"
                            className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                          >
                            3546-503142
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Farmacia Cuello */}
                  <div>
                    <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4">Farmacia Cuello</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                        <a
                          href="https://g.co/kgs/EJsNYN3"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                        >
                          Bv. Hipólito Yrigoyen
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                        <a
                          href="tel:3546417602"
                          className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                        >
                          3546-417602
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Farmacia del Valle */}
                  <div>
                    <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4">Farmacia del Valle</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                        <a
                          href="https://g.co/kgs/6KZKBdZ"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                        >
                          Av. San Martín 396
                        </a>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                        <a
                          href="tel:3546435468"
                          className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                        >
                          3546-435468
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
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
