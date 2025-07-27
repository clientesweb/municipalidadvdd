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
} from "lucide-react"
import Link from "next/link"

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

        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">SERVICIOS</h1>
          <div className="w-24 h-1 bg-[#16b5d0] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Directorio completo de servicios públicos y privados en Villa del Dique
          </p>
        </div>

        {/* Services Sections */}
        <div className="space-y-12">
          {/* Oficina de Turismo */}
          <section className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6">
              <div className="flex items-center space-x-3">
                <Camera className="h-6 w-6" />
                <h2 className="text-2xl sm:text-3xl font-bold">OFICINA DE TURISMO</h2>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                  <a
                    href="https://g.co/kgs/7ctVbHL"
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
                    href="tel:3546528341"
                    className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                  >
                    3546-528341
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                  <a
                    href="mailto:villadeliqueturismo1@gmail.com"
                    className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                  >
                    villadeliqueturismo1@gmail.com
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
          </section>

          {/* Municipalidad */}
          <section className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6">
              <div className="flex items-center space-x-3">
                <Building2 className="h-6 w-6" />
                <h2 className="text-2xl sm:text-3xl font-bold">MUNICIPALIDAD DE VILLA DEL DIQUE</h2>
              </div>
            </div>
            <div className="p-6 sm:p-8">
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
                    03546-497241
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
          </section>

          {/* Transporte */}
          <section className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6">
              <div className="flex items-center space-x-3">
                <Bus className="h-6 w-6" />
                <h2 className="text-2xl sm:text-3xl font-bold">TRANSPORTE</h2>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Buses Lep</h3>
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
            </div>
          </section>

          {/* Servicio Médico */}
          <section className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6">
              <div className="flex items-center space-x-3">
                <Heart className="h-6 w-6" />
                <h2 className="text-2xl sm:text-3xl font-bold">SERVICIO MÉDICO</h2>
              </div>
            </div>
            <div className="p-6 sm:p-8 space-y-8">
              {/* Hospital */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hospital Dr. Luis Rivarola</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                    <a
                      href="https://g.co/kgs/C29D48B"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                    >
                      Bv. Hipólito Yrigoyen 106 - Ver en Google Maps
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                    <div className="space-x-4">
                      <a
                        href="tel:03546497636"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        03546-497636
                      </a>
                      <span className="text-gray-400">|</span>
                      <a
                        href="tel:3546454672"
                        className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                      >
                        3546-454672
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dispensario */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Dispensario Eduardo Berthollet</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-[#16b5d0] flex-shrink-0" />
                    <a
                      href="https://g.co/kgs/Yk62D5K"
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
                      href="tel:3546506145"
                      className="text-gray-700 hover:text-[#16b5d0] transition-colors duration-200 font-medium"
                    >
                      3546-506145
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Farmacias */}
          <section className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6">
              <div className="flex items-center space-x-3">
                <Pill className="h-6 w-6" />
                <h2 className="text-2xl sm:text-3xl font-bold">FARMACIAS</h2>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* FarmaVilla */}
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">FarmaVilla</h3>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Farmacia Grangetto</h3>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Farmacia Cuello</h3>
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
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Farmacia del Valle</h3>
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
            </div>
          </section>
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
