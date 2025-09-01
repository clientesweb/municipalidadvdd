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
  Globe,
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
                {/* Programa Viaje Seguro */}
                <div className="bg-blue-50 border-l-4 border-[#16b5d0] p-4 mb-8">
                  <h3 className="text-lg font-nunito font-bold text-gray-900 mb-2">
                    Programa Municipal "Viaje seguro"
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Vecinos, para sus traslados, les recordamos la importancia de utilizar remises habilitados por su
                    municipio y que formen parte del programa "Viaje Seguro".
                  </p>
                  <p className="text-gray-700 font-medium mt-2">
                    Su seguridad es nuestra prioridad. ¡Gracias por colaborar!
                  </p>
                </div>

                {/* Lista de Remises Habilitados */}
                <div className="space-y-6">
                  {/* Remis 1 - Segura, Juan Carlos */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="text-lg font-nunito font-bold text-gray-900 mb-3">Segura, Juan Carlos</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">DNI:</span>
                        <span className="text-gray-800">12.669.715</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Marca:</span>
                        <span className="text-gray-800">Volkswagen</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Vehículo:</span>
                        <span className="text-gray-800">Voyage</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Patente:</span>
                        <span className="text-gray-800">LLS939</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Chapa:</span>
                        <span className="text-gray-800 font-semibold">AE 007</span>
                      </div>
                    </div>
                  </div>

                  {/* Remis 2 - Videla, Jorge */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="text-lg font-nunito font-bold text-gray-900 mb-3">Videla, Jorge</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">DNI:</span>
                        <span className="text-gray-800">23.979.952</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Marca:</span>
                        <span className="text-gray-800">Renault</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Vehículo:</span>
                        <span className="text-gray-800">Logan</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Patente:</span>
                        <span className="text-gray-800">PEO377</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Chapa:</span>
                        <span className="text-gray-800 font-semibold">AE 009</span>
                      </div>
                    </div>
                  </div>

                  {/* Remis 3 - Tavano, Martín */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="text-lg font-nunito font-bold text-gray-900 mb-3">Tavano, Martín</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">DNI:</span>
                        <span className="text-gray-800">25.610.951</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Marca:</span>
                        <span className="text-gray-800">Fiat</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Vehículo:</span>
                        <span className="text-gray-800">Cronos</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Patente:</span>
                        <span className="text-gray-800">AH175YQ</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Chapa:</span>
                        <span className="text-gray-800 font-semibold">AE 002</span>
                      </div>
                    </div>
                  </div>

                  {/* Remis 4 - Marín, Leonel */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="text-lg font-nunito font-bold text-gray-900 mb-3">Marín, Leonel</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">DNI:</span>
                        <span className="text-gray-800">35.668.175</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Marca:</span>
                        <span className="text-gray-800">Fiat</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Vehículo:</span>
                        <span className="text-gray-800">Strada Freedom</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Patente:</span>
                        <span className="text-gray-800">AF295CA</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Chapa:</span>
                        <span className="text-gray-800 font-semibold">AE 010</span>
                      </div>
                    </div>
                  </div>

                  {/* Remis 5 - Cejas, Jesica */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="text-lg font-nunito font-bold text-gray-900 mb-3">Cejas, Jesica</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">DNI:</span>
                        <span className="text-gray-800">38.159.030</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Marca:</span>
                        <span className="text-gray-800">Renault</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Vehículo:</span>
                        <span className="text-gray-800">Duster Oroch</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Patente:</span>
                        <span className="text-gray-800">AE035ZE</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Chapa:</span>
                        <span className="text-gray-800 font-semibold">AE 003</span>
                      </div>
                    </div>
                  </div>

                  {/* Remis 6 - Díaz, Andrea */}
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <h4 className="text-lg font-nunito font-bold text-gray-900 mb-3">Díaz, Andrea</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">DNI:</span>
                        <span className="text-gray-800">24.863.903</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Marca:</span>
                        <span className="text-gray-800">Chevrolet</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Vehículo:</span>
                        <span className="text-gray-800">Corsa</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Patente:</span>
                        <span className="text-gray-800">KYG819</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-gray-600">Chapa:</span>
                        <span className="text-gray-800 font-semibold">AE 001</span>
                      </div>
                    </div>
                  </div>
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

            {/* SERVICIOS PRIVADOS - Cambié el título de "ELECTRICIDAD VILLA DEL DIQUE" a "SERVICIOS PRIVADOS" y agregué todos los nuevos servicios organizados por categorías */}
            <AccordionItem value="item-6" className="bg-white shadow-xl rounded-lg overflow-hidden mb-6">
              <AccordionTrigger className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 text-left hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-6 w-6" />
                  <h2 className="text-2xl sm:text-3xl font-nunito font-bold">SERVICIOS PRIVADOS</h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 sm:p-8 font-montserrat space-y-8">
                {/*  Removí Electricidad Villa del Dique de aquí para moverla a la sección de electricistas */}

                {/* Electricistas - Agregué nueva sección de electricistas */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🔌</span>
                    Electricistas
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 pl-6">
                    <div className="space-y-4">
                      {/*  Agregué Electricidad Villa del Dique como primer electricista con dirección y página web */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Electricidad Villa del Dique</h4>
                        <p className="text-sm text-gray-600 mb-2">Responsable: Guillermo Modesto</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-[#16b5d0]" />
                            <span>Ruta 5 km 107</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#16b5d0]" />
                            <a href="tel:+5493546534000" className="hover:text-[#16b5d0]">
                              +54 9 3546 53-4000
                            </a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-[#16b5d0]" />
                            <a href="mailto:Electrocidadvilladeldiqueok@gmail.com" className="hover:text-[#16b5d0]">
                              Electrocidadvilladeldiqueok@gmail.com
                            </a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Globe className="h-4 w-4 text-[#16b5d0]" />
                            <a
                              href="https://www.electricidadvilladeldique.com.ar"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#16b5d0]"
                            >
                              www.electricidadvilladeldique.com.ar
                            </a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Instagram className="h-4 w-4 text-[#16b5d0]" />
                            <a
                              href="https://www.instagram.com/electricidadvilladeldiqueok?igsh=NXkwOWh0Nmt2bW1j"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-[#16b5d0]"
                            >
                              @electricidadvilladeldiqueok
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Electroman</h4>
                        <p className="text-sm text-gray-600 mb-2">Ezequiel Lattuada</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-[#16b5d0]" />
                            <span>La Cumbre 50</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#16b5d0]" />
                            <a href="tel:3413457078" className="hover:text-[#16b5d0]">
                              3413457078
                            </a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-[#16b5d0]" />
                            <a href="mailto:ezequiel.lattuada.2@gmail.com" className="hover:text-[#16b5d0]">
                              ezequiel.lattuada.2@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Fran</h4>
                        <p className="text-sm text-gray-600 mb-2">Franco Laurino</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-[#16b5d0]" />
                            <span>Eslovaquia 958</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#16b5d0]" />
                            <a href="tel:1133529482" className="hover:text-[#16b5d0]">
                              1133529482
                            </a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-[#16b5d0]" />
                            <a href="mailto:francolaurino1990@gmail.com" className="hover:text-[#16b5d0]">
                              francolaurino1990@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">JF Servicios Eléctricos</h4>
                        <p className="text-sm text-gray-600 mb-2">Juan Fierro</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-[#16b5d0]" />
                            <span>Estocolmo s/n</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#16b5d0]" />
                            <a href="tel:3517506633" className="hover:text-[#16b5d0]">
                              3517506633
                            </a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-[#16b5d0]" />
                            <a href="mailto:juancabj9822@gmail.com" className="hover:text-[#16b5d0]">
                              juancabj9822@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Perticarari Electricidad</h4>
                        <p className="text-sm text-gray-600 mb-2">Francisco Perticarari</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-[#16b5d0]" />
                            <span>Calle pública s/n</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#16b5d0]" />
                            <a href="tel:3546500069" className="hover:text-[#16b5d0]">
                              3546500069
                            </a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-[#16b5d0]" />
                            <a href="mailto:admperticarari293@gmail.com" className="hover:text-[#16b5d0]">
                              admperticarari293@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Servicios del Valle</h4>
                        <p className="text-sm text-gray-600 mb-2">Marcos Hidalgo</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-[#16b5d0]" />
                            <span>Salta 776</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#16b5d0]" />
                            <a href="tel:3546405881" className="hover:text-[#16b5d0]">
                              3546405881
                            </a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-[#16b5d0]" />
                            <a href="mailto:hidalgomarcosjulian@gmail.com" className="hover:text-[#16b5d0]">
                              hidalgomarcosjulian@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">Lucas Ernesto Martínez</h4>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-[#16b5d0]" />
                            <span>Santa María 544, zona del valle</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#16b5d0]" />
                            <a href="tel:3517458886" className="hover:text-[#16b5d0]">
                              3517458886
                            </a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-[#16b5d0]" />
                            <a href="mailto:lucianamartinez1414@gmail.com" className="hover:text-[#16b5d0]">
                              lucianamartinez1414@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Limpieza - Agregué sección de servicios de limpieza */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🧹</span>
                    Limpieza
                  </h3>
                  <div className="pl-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Yazmin</h4>
                      <p className="text-sm text-gray-600 mb-2">Verónica Orbes - Personal de limpieza</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-[#16b5d0]" />
                          <span>Barrio IPV</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:3546490348" className="hover:text-[#16b5d0]">
                            3546490348
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#16b5d0]" />
                          <a href="mailto:orbesvero44@gmail.com" className="hover:text-[#16b5d0]">
                            orbesvero44@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Matafuegos - Agregué sección de matafuegos */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🔥</span>
                    Matafuegos
                  </h3>
                  <div className="pl-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">MATAFUEGOS LA VILLA</h4>
                      <p className="text-sm text-gray-600 mb-2">Ramon Cuello - Mantenimiento, venta de matafuegos</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-[#16b5d0]" />
                          <span>Rio Quinto 380</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:3546502274" className="hover:text-[#16b5d0]">
                            3546502274
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#16b5d0]" />
                          <a href="mailto:candelaalemi24@gmail.com" className="hover:text-[#16b5d0]">
                            candelaalemi24@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Albañilería - Agregué sección de albañilería */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🛠</span>
                    Albañilería / Construcción
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 pl-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Vieyra</h4>
                      <p className="text-sm text-gray-600 mb-2">Agustín Vieyra - Albañilería en general</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-[#16b5d0]" />
                          <span>Zona del valle, Villa del Dique</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:3546650402" className="hover:text-[#16b5d0]">
                            3546650402
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#16b5d0]" />
                          <a href="mailto:agustinvieyra2018@gmail.com" className="hover:text-[#16b5d0]">
                            agustinvieyra2018@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">M Y M CONSTRUCCIÓN</h4>
                      <p className="text-sm text-gray-600 mb-2">Mariano Marín - Construcción en general</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-[#16b5d0]" />
                          <span>Pública s/n, Barrio IPV, Villa del Dique</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:3546538858" className="hover:text-[#16b5d0]">
                            3546538858
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#16b5d0]" />
                          <a href="mailto:marinmariano3639@gmail.com" className="hover:text-[#16b5d0]">
                            marinmariano3639@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Climatización / Gas / Plomería - New section */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">❄</span>
                    Climatización / Gas / Plomería
                  </h3>
                  <div className="pl-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">JR Servicios de Climatización</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Javier Arancibia - Plomero, gasista, reparación e instalación de aire acondicionado
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-[#16b5d0]" />
                          <span>La Falda s/n</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:3413344185" className="hover:text-[#16b5d0]">
                            3413344185
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#16b5d0]" />
                          <a href="mailto:javierarancibia00@gmail.com" className="hover:text-[#16b5d0]">
                            javierarancibia00@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mecánica / Lubricentro - New section */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🛠</span>
                    Mecánica / Lubricentro
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 pl-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Mecánica Hinsch</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Dario David Hinsch - Mecánica Vial, mecánica especializada Diesel y Naftero, mecánica
                        automotriz, servicio de diagnóstico computarizado, lubricentro, armado de motores, reparación de
                        sistemas hidráulicos y neumáticos de equipos, embragues
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-[#16b5d0]" />
                          <span>Ruta 5 KMS 104</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:3546524893" className="hover:text-[#16b5d0]">
                            3546524893
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#16b5d0]" />
                          <a href="mailto:tallerhinsch@hotmail.com.ar" className="hover:text-[#16b5d0]">
                            tallerhinsch@hotmail.com.ar
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Lubricentro Barra</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Martinez Viviana Elizabeth - Aceites, filtros, escapes, repuestos de electricidad del automotor
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-[#16b5d0]" />
                          <span>San Martín 635, Villa del Dique</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:3571322356" className="hover:text-[#16b5d0]">
                            3571322356
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#16b5d0]" />
                          <a href="mailto:florenciabarra98@outlook.es" className="hover:text-[#16b5d0]">
                            florenciabarra98@outlook.es
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Lavaderos de autos - New section */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🚗</span>
                    Lavaderos de autos
                  </h3>
                  <div className="pl-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Brillo Car</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Lichiri Franco - Lavado del automóvil, cambio de lámparas, baterías, aceite
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-[#16b5d0]" />
                          <span>Hipólito Irigoyen 672</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#16b5d0]" />
                          <a href="mailto:Francolichiri160@gmail.com" className="hover:text-[#16b5d0]">
                            Francolichiri160@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tecnología / Informática - New section */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">💻</span>
                    Tecnología / Informática
                  </h3>
                  <div className="pl-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">DEL DIQUE TECNOLOGÍA</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        De Leandro Miguel Reyes - Reparación de PC, instalación de cámaras de seguridad, filmación con
                        drones, instalación de Internet Starlink, automatización de hogares con asistencia virtual
                        (Alexa)
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-[#16b5d0]" />
                          <span>RPN5 y Av. Eva Perón (pegado a ABERCOR)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:3546543115" className="hover:text-[#16b5d0]">
                            3546543115
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#16b5d0]" />
                          <a href="mailto:DelDiqueTecnologia@gmail.com" className="hover:text-[#16b5d0]">
                            DelDiqueTecnologia@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Náutica / Embarcaciones - New section */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🛥</span>
                    Náutica / Embarcaciones
                  </h3>
                  <div className="pl-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Náutica NAUTILUS</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Toccoli Franco Germán - Fabricación de hidropedales y reparaciones en fibra de vidrio, gestoría
                        náutica, traslado de embarcaciones
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-[#16b5d0]" />
                          <span>San Martín s/n, Villa Nueva / Villa del Dique</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:3546453119" className="hover:text-[#16b5d0]">
                            3546453119
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#16b5d0]" />
                          <a href="mailto:elcuchuflito22@gmail.com" className="hover:text-[#16b5d0]">
                            elcuchuflito22@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Motos / Venta y Consignación - New section */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🏍</span>
                    Motos / Venta y Consignación
                  </h3>
                  <div className="pl-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Bailone Motos</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Bailone Jonathan - Venta y consignación de motos, cuatriciclos y UTV
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-[#16b5d0]" />
                          <span>Ruta 5 km 106</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:0353154243474" className="hover:text-[#16b5d0]">
                            0353/154243474
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:0353155690594" className="hover:text-[#16b5d0]">
                            0353/155690594
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#16b5d0]" />
                          <a href="mailto:jonibailone@hotmail.com" className="hover:text-[#16b5d0]">
                            jonibailone@hotmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Herrería / Metalúrgica - New section */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🔧</span>
                    Herrería / Metalúrgica
                  </h3>
                  <div className="pl-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Techos Calamuchita</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Julio Santillán - Herrería, rejas, portones, tinglados, trailer, trabajos en acero inoxidable
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-[#16b5d0]" />
                          <span>Mendoza 51</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:3546454714" className="hover:text-[#16b5d0]">
                            3546454714
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#16b5d0]" />
                          <a href="mailto:Santillan.julio@gmail.com" className="hover:text-[#16b5d0]">
                            Santillan.julio@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seguridad - Updated section with MAC MONITOREO */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">📹</span>
                    Seguridad
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 pl-6">
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">SM Seguridad</h4>
                        <p className="text-sm text-gray-600 mb-2">Thiago Moscetta - Alarmas, cámaras y monitoreo</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-[#16b5d0]" />
                            <span>San Martín s/n</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#16b5d0]" />
                            <a href="tel:3546525631" className="hover:text-[#16b5d0]">
                              3546525631
                            </a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-[#16b5d0]" />
                            <a href="mailto:thiagomoscetta123@gmail.com" className="hover:text-[#16b5d0]">
                              thiagomoscetta123@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">MAC MONITOREO</h4>
                        <p className="text-sm text-gray-600 mb-2">Lorena Pizzio - Sistema de seguridad y monitoreo</p>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center space-x-2">
                            <MapPin className="h-4 w-4 text-[#16b5d0]" />
                            <span>Arturo Illia 189</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Phone className="h-4 w-4 text-[#16b5d0]" />
                            <a href="tel:3546514464" className="hover:text-[#16b5d0]">
                              3546514464
                            </a>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Mail className="h-4 w-4 text-[#16b5d0]" />
                            <a href="mailto:Macmonitoreo@gmail.com" className="hover:text-[#16b5d0]">
                              Macmonitoreo@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Clan Seguridad</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Cámaras, alarmas, distribución de wifi, instalaciones de antenas Starlink, servicio técnico
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <span>Claudio: </span>
                          <a href="tel:351572169" className="hover:text-[#16b5d0]">
                            351572169
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <span>Gustavo: </span>
                          <a href="tel:3546405796" className="hover:text-[#16b5d0]">
                            3546405796
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <span>Agustín: </span>
                          <a href="tel:3512273169" className="hover:text-[#16b5d0]">
                            3512273169
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Alquiler de Baños / Sanitarios - New section */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">🚽</span>
                    Alquiler de Baños / Sanitarios
                  </h3>
                  <div className="pl-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Baños Químicos Calamuchita</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Vanina K. Lopez - Alquiler de baños químicos para obras y eventos, obradores, desagote de cámara
                        séptica
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-[#16b5d0]" />
                          <span>La Falda 441, Villa del Dique</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:+5493516786671" className="hover:text-[#16b5d0]">
                            +54 9 351 678-6671
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#16b5d0]" />
                          <a href="mailto:bqcalamuchita@hotmail.com" className="hover:text-[#16b5d0]">
                            bqcalamuchita@hotmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Estudios / Agrimensura y Arquitectura - New section */}
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
                    <span className="text-2xl mr-2">📐</span>
                    Estudios / Agrimensura y Arquitectura
                  </h3>
                  <div className="pl-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">Estudio Carnevale & Asoc.</h4>
                      <p className="text-sm text-gray-600 mb-2">
                        Ing. Alejandro Carnevale – MP 2899 - Agrimensura y arquitectura
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-[#16b5d0]" />
                          <span>Buenos Aires 16, Local 7</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:3546659946" className="hover:text-[#16b5d0]">
                            3546 659946
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="h-4 w-4 text-[#16b5d0]" />
                          <a href="tel:3546488592" className="hover:text-[#16b5d0]">
                            3546 488592
                          </a>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="h-4 w-4 text-[#16b5d0]" />
                          <a href="mailto:estudiocarnevale@live.com.ar" className="hover:text-[#16b5d0]">
                            estudiocarnevale@live.com.ar
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t-2 border-[#16b5d0] mt-8">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <svg className="h-6 w-6 text-[#16b5d0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-nunito font-bold text-gray-900 mb-2">¿Prestás algún servicio?</h4>
                        <p className="text-gray-700 font-montserrat">
                          Si prestás algún servicio y no llegaste a inscribirte a través del formulario que compartimos
                          desde las redes de la Municipalidad, no te preocupes: todavía podés sumarte. Para hacerlo,
                          solo tenés que comunicarte enviando un mensaje al{" "}
                          <a
                            href="tel:3512142738"
                            className="text-[#16b5d0] hover:text-[#0ea5e9] font-semibold underline"
                          >
                            351 214 2738
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-white shadow-xl rounded-lg overflow-hidden">
              <AccordionTrigger className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 text-left hover:no-underline">
                <div className="flex items-center space-x-3">
                  <Car className="h-6 w-6" />
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
