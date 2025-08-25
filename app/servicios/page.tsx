"use client"

import Image from "next/image"
import { useState } from "react"
import {
  Menu,
  X,
  Facebook,
  Instagram,
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
  Hammer,
  HandHeart,
  Car,
  Fuel,
} from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Footer from "@/components/Footer"

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
                        href="tel:03546497241"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        03546 497241 (fijo)
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:secretariaturismoycultura.vdd@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        municipiovdd@gmail.com
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
                    <span>Inspección, Monitoreo, Guardia Local, Defensa Civil, Juzgado de Faltas</span>
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
                      <p className="text-gray-700 font-medium">Ubicación: Dentro del balneario municipal</p>
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
                            Dentro del balneario municipal - Ver en Google Maps
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                          <a
                            href="mailto:+5493546000000"
                            className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 text-sm font-medium"
                          >
                            vddjuzgado@gmail.com
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
                        href="https://www.google.com/maps/search/Buenos+Aires+s%2Fn+Villa+del+Dique"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        Buenos Aires s/n - Ver ubicación
                      </a>
                    </div>
                    <p className="text-gray-700 font-medium">Horario de atención: 7:00 a 14:00 hs</p>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:registrocivilvillsdeldique@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        registrocivilvilladeldique@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:3546506607"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        3546-506607
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
                        (Oficina de Turismo) - Ver ubicación en Google Maps
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:+5493546405918"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        3546 528341
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:secretariaturismoycultura.vdd@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        villadeldiqueturismo1@gmail.com
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
                        href="https://www.google.com/maps/search/Casa+de+la+Cultura+Villa+del+Dique"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        RGCX+Q4C Villa del Dique, Córdoba - Ver ubicación en Google Maps
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
                        03546 497962 (fijo)
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
                  <div className="space-y-4">
                    <p className="text-gray-700 font-medium">Dirección: Hipólito Yrigoyen s/n (canchita ipv)</p>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:2302641330"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        2302 641330
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:centrodecapacitacionvdd@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        centrodecapacitacionvdd@gmail.com
                      </a>
                    </div>
                  </div>
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
                        href="https://www.google.com/maps/search/Pilcomayo+s%2Fn+Villa+del+Dique"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        Pilcomayo s/n
                      </a>
                    </div>
                    <p className="text-gray-700 font-medium">Horario de atención: 7:00 a 14:00 hs</p>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:3546437516"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        3546 437516
                      </a>
                    </div>
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
                  <p className="text-gray-700 font-medium">Sobre Ruta 5</p>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                    <a
                      href="https://www.google.com/maps/place/RHP7%2BV85+Villa+del+Dique,+C%C3%B3rdoba/@-32.18333,-64.46667,15z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                    >
                      RHP7+V85 Villa del Dique, Córdoba - Ver en Google Maps
                    </a>
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
                    <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                    <a
                      href="tel:3546565159"
                      className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                    >
                      3546 565159
                    </a>
                  </div>
                </div>

                {/* Pileta Climatizada "VISAN" */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Waves className="h-6 w-6 text-[#16b5d0]" />
                    <span>Pileta Climatizada "VISAN"</span>
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
                        deportesvdd@gmail.com
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
                        href="tel:3546565157"
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
                        radiovdd90.7@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <p className="text-gray-700 font-medium">Ubicación: Dentro del balneario municipal</p>
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

                {/* Bienestar Social */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <HandHeart className="h-6 w-6 text-[#16b5d0]" />
                    <span>Bienestar Social</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <p className="text-gray-700 font-medium">Córdoba 20</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:3546549479"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        3546 549479
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:bienestarsocialvdd@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        bienestarsocialvdd@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Oficina Técnica */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <Hammer className="h-6 w-6 text-[#16b5d0]" />
                    <span>Oficina Técnica</span>
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <p className="text-gray-700 font-medium">
                        Ubicación: Dentro de la Municipalidad (Mario Nivoli 206)
                      </p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:obraprivadavdd@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        obraprivadavdd@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="mailto:obraspublicasvdd@gmail.com"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        obraspublicasvdd@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Cooperativa de Obra y Servicios Públicos de Villa del Dique Ltda. */}
            <AccordionItem value="item-2" className="bg-white shadow-xl rounded-lg overflow-hidden mb-6">
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
                      href="https://coopvdique.com.ar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                    >
                      https://coopvdique.com.ar
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
            <AccordionItem value="item-3" className="bg-white shadow-xl rounded-lg overflow-hidden mb-6">
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

            {/* REMISES HABILITADOS */}
            <AccordionItem value="item-4" className="bg-white shadow-xl rounded-lg overflow-hidden mb-6">
              <AccordionTrigger className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 text-left hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Car className="h-6 w-6" />
                  <h2 className="text-2xl sm:text-3xl font-nunito font-bold">REMISES HABILITADOS</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 sm:p-8 font-montserrat">
                <div className="text-center py-8">
                  <p className="text-gray-600 text-lg font-medium">
                    Información de remises habilitados próximamente disponible
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    Estamos actualizando la información de los servicios de remises en Villa del Dique
                  </p>
                </div>

                {/* Placeholder structure for 10 remises - ready for future data */}
                <div className="hidden">
                  {/* Remis 1 */}
                  <div className="space-y-4 mb-6">
                    <h3 className="text-xl font-nunito font-bold text-gray-900">Remis [Nombre]</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Phone className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                        <span className="text-gray-700">[Teléfono]</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                        <span className="text-gray-700">[Dirección]</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                        <span className="text-gray-700">[Email]</span>
                      </div>
                    </div>
                  </div>

                  {/* Remis 2-10 structure ready for data */}
                  {Array.from({ length: 9 }, (_, i) => (
                    <div key={i + 2} className="space-y-4 mb-6 pt-4 border-t border-gray-100">
                      <h3 className="text-xl font-nunito font-bold text-gray-900">Remis [Nombre {i + 2}]</h3>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-3">
                          <Phone className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                          <span className="text-gray-700">[Teléfono]</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                          <span className="text-gray-700">[Dirección]</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="h-4 w-4 text-[#16b5d0] flex-shrink-0" />
                          <span className="text-gray-700">[Email]</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Farmacias */}
            <AccordionItem value="item-5" className="bg-white shadow-xl rounded-lg overflow-hidden mb-6">
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

            {/* Electricidad Villa del Dique */}
            <AccordionItem value="item-6" className="bg-white shadow-xl rounded-lg overflow-hidden mb-6">
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

            {/* ESTACIONES DE SERVICIO */}
            <AccordionItem value="item-7" className="bg-white shadow-xl rounded-lg overflow-hidden">
              <AccordionTrigger className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 text-left hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Fuel className="h-6 w-6" />
                  <h2 className="text-2xl sm:text-3xl font-nunito font-bold">ESTACIONES DE SERVICIO</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 sm:p-8 font-montserrat space-y-8">
                {/* ACA - YPF VDD */}
                <div>
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4">ACA - YPF VDD</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="https://share.google/f5IABJPRM4IHSvHOSnúmero"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        Ver ubicación en Google Maps
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:3546497827"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        3546 497827
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Instagram className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="https://www.instagram.com/aca.ypf.vdd?igsh=N2MxbnB0b2tybjIx"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        @aca.ypf.vdd
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Link
                        href="https://www.ypf.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        https://www.ypf.com/
                      </Link>
                    </div>
                  </div>
                </div>

                {/* GNC de Barale SA */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4">GNC de Barale SA</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="https://maps.app.goo.gl/Y7T7HPZi2SSFiLa27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        Ruta 5 km 105
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                      <a
                        href="tel:03571501402"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        03571501402
                      </a>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
