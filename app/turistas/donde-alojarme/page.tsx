"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X, Facebook, Instagram, Youtube, MapPin, Phone, ExternalLink, Tent, Building, Home } from "lucide-react"
import Link from "next/link"

export default function DondeAlojarme() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const leftMenuItems = [
    { name: "¿Cómo llegar?", href: "/turistas/como-llegar" },
    { name: "¿Dónde alojarme?", href: "/turistas/donde-alojarme", active: true },
    { name: "¿Dónde comer?", href: "/turistas/donde-comer" },
  ]

  const rightMenuItems = [
    { name: "Circuitos", href: "/turistas/circuitos" },
    { name: "Lugares que visitar", href: "/turistas/lugares-para-visitar" },
    { name: "Servicios", href: "/vecinos/servicios" },
  ]

  const allMenuItems = [...leftMenuItems, ...rightMenuItems]

  return (
    <div className="min-h-screen font-montserrat">
      {/* Header Announcement - Pink color */}
      <div className="w-full bg-[#c84f9b] text-white py-2 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-base font-medium">Página oficial de la Municipalidad de Villa del Dique</p>
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
                  className={`text-base xl:text-lg font-montserrat font-medium transition-colors duration-200 py-2 whitespace-nowrap ${
                    item.active ? "text-[#c84f9b] border-b-2 border-[#c84f9b]" : "text-gray-800 hover:text-[#c84f9b]"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Logo Center */}
            <div className="flex-shrink-0 mx-6 xl:mx-8 absolute left-1/2 -translate-x-1/2">
              <Link href="/">
                <Image
                  src="/images/logo-oficial.webp"
                  alt="Villa del Dique Municipalidad"
                  width={350} // Increased width
                  height={140} // Increased height
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain" // Increased responsive height
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
                  className="text-base xl:text-lg font-montserrat font-medium text-gray-800 hover:text-[#c84f9b] transition-colors duration-200 py-2 whitespace-nowrap"
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
                  width={350} // Increased width
                  height={140} // Increased height
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain" // Increased responsive height
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
              {isMenuOpen ? <X className="h-6 w-6 text-[#c84f9b]" /> : <Menu className="h-6 w-6 text-[#c84f9b]" />}
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
                  className={`block text-2xl font-montserrat font-medium transition-colors duration-200 py-3 border-b border-gray-100 ${
                    item.active ? "text-[#c84f9b]" : "text-gray-800 hover:text-[#c84f9b]"
                  }`}
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <nav className="w-full bg-gray-50 py-3 px-4 font-montserrat">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#c84f9b] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/turistas" className="hover:text-[#c84f9b] transition-colors">
              Turistas
            </Link>
            <span>/</span>
            <span className="text-[#c84f9b] font-medium">¿Dónde alojarme?</span>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative w-full">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src="/images/donde-dormir-banner.webp"
            alt="Alojamientos en Villa del Dique"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="w-full py-8 sm:py-12 md:py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Intro */}
          <section className="mb-12 text-center">
            <h1 className="text-4xl sm:text-5xl font-nunito font-bold text-gray-900 mb-6">¿Dónde alojarme?</h1>
            <p className="text-lg font-montserrat text-gray-700 max-w-3xl mx-auto">
              Villa del Dique ofrece una amplia variedad de opciones de alojamiento para todos los gustos y
              presupuestos. Desde camping municipal hasta hoteles de primera categoría y acogedoras cabañas.
            </p>
          </section>

          {/* Camping Municipal */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Tent className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-nunito font-bold text-gray-900">Camping Municipal</h2>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-500 font-montserrat">
              <h3 className="text-xl font-nunito font-bold text-green-900 mb-3">Camping Municipal</h3>
              <div className="space-y-2">
                <div className="flex items-start space-x-2">
                  <MapPin className="h-5 w-5 text-green-700 mt-0.5 flex-shrink-0" />
                  <p className="text-green-800">
                    <strong>Dirección:</strong> San Casimiro 130 (Balneario Municipal Villa del Dique)
                  </p>
                </div>
                <div className="flex items-center space-x-2">
                  <Phone className="h-5 w-5 text-green-700 flex-shrink-0" />
                  <a
                    href="tel:+543546519333‬"
                    className="text-green-800 hover:text-green-900 font-medium hover:underline transition-colors"
                  >
                    +54-3546-519333‬
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <ExternalLink className="h-5 w-5 text-green-700 flex-shrink-0" />
                  <a
                    href="https://g.co/kgs/jZeLcTn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-800 hover:text-green-900 font-medium hover:underline transition-colors"
                  >
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Hoteles */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Building className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-nunito font-bold text-gray-900">Hoteles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-montserrat">
              {/* Amerian / Hotel Carrillo */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-nunito font-bold text-blue-900 mb-3">Amerian / Hotel Carrillo</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                    <p className="text-blue-800 text-sm">
                      <strong>Dirección:</strong> Av. de los Navegantes 663
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <div className="text-blue-800 text-sm">
                      <a href="tel:3546506285" className="hover:text-[#c84f9b] hover:underline mr-2">
                        3546-506285
                      </a>
                      <span>o</span>
                      <a href="https://wa.me/5493546650622" className="hover:text-[#c84f9b] hover:underline ml-2">
                        WhatsApp 3546650622
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/hotelcarrilloamerian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @hotelcarrilloamerian
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a
                      href="https://www.amerian.com/hotel/amerian-villa-del-dique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      www.amerian.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/sMdRotVHjAhTBwk18"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Hotel Portal de la Villa */}
              <div className="bg-purple-50 p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-nunito font-bold text-purple-900 mb-3">Hotel Portal de la Villa</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-purple-700 mt-0.5 flex-shrink-0" />
                    <p className="text-purple-800 text-sm">
                      <strong>Dirección:</strong> Av. San Martín 194
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-purple-700 flex-shrink-0" />
                    <div className="text-purple-800 text-sm">
                      <a href="tel:03546497995" className="hover:text-[#c84f9b] hover:underline mr-2">
                        03546-497995
                      </a>
                      <span>o</span>
                      <a href="https://wa.me/5493546520478" className="hover:text-[#c84f9b] hover:underline ml-2">
                        WhatsApp 3546520478
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-purple-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/elportaldelavillahotel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @elportaldelavillahotel
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-purple-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/nfUybPsresbr8L257"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Hostería Valle Azul */}
              <div className="bg-cyan-50 p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
                <h3 className="text-xl font-nunito font-bold text-cyan-900 mb-3">Hostería Valle Azul</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-cyan-700 mt-0.5 flex-shrink-0" />
                    <p className="text-cyan-800 text-sm">
                      <strong>Dirección:</strong> Av. Los Pescadores 334
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-cyan-700 flex-shrink-0" />
                    <div className="text-cyan-800 text-sm">
                      <a href="tel:03546497815" className="hover:text-[#c84f9b] hover:underline mr-2">
                        03546-497815
                      </a>
                      <span>o</span>
                      <a href="https://wa.me/5493546650269" className="hover:text-[#c84f9b] hover:underline ml-2">
                        WhatsApp 3546650269
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-cyan-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/hosteriavalleazuldeldique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @hosteriavalleazuldeldique
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-cyan-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/S3Y44RnECXjoqXvXA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Hotel San Carlos */}
              <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-nunito font-bold text-green-900 mb-3">Hotel San Carlos</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 text-sm">
                      <strong>Dirección:</strong> Ruta 5 km 118
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-700 flex-shrink-0" />
                    <a href="tel:3546520773" className="text-green-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3546-520773
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-green-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/2Qn639vXVWE1hBmX8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Hotel Luna del Lago */}
              <div className="bg-indigo-50 p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
                <h3 className="text-xl font-nunito font-bold text-indigo-900 mb-3">Hotel Luna del Lago</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-indigo-700 mt-0.5 flex-shrink-0" />
                    <p className="text-indigo-800 text-sm">
                      <strong>Dirección:</strong> Av. San Martín 267
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-indigo-700 flex-shrink-0" />
                    <a href="tel:3546409286" className="text-indigo-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3546-409286
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-indigo-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/nmtfASaRxxiNkdSU9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Hotel Venecia */}
              <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-nunito font-bold text-red-900 mb-3">Hotel Venecia</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-red-700 mt-0.5 flex-shrink-0" />
                    <p className="text-red-800 text-sm">
                      <strong>Dirección:</strong> Av. Hipólito Irigoyen s/n
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-red-700 flex-shrink-0" />
                    <a href="tel:03546497252" className="text-red-800 text-sm hover:text-[#c84f9b] hover:underline">
                      03546-497252 (fijo)
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-red-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/o1Ju98P9qSfKbNyDA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Colonia de Vacaciones Luz y Fuerza */}
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                <h3 className="text-xl font-nunito font-bold text-yellow-900 mb-3">
                  Colonia de Vacaciones Luz y Fuerza
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-yellow-700 mt-0.5 flex-shrink-0" />
                    <p className="text-yellow-800 text-sm">
                      <strong>Dirección:</strong> Ruta Prov. 5 Km 105
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-yellow-700 flex-shrink-0" />
                    <a href="tel:03546497214" className="text-yellow-800 text-sm hover:text-[#c84f9b] hover:underline">
                      03546-497214 (fijo)
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-yellow-700 flex-shrink-0" />
                    <a
                      href="http://wb.luzyfuerzariocuarto.org/colonia-de-vacaciones/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Sitio web oficial
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-yellow-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/GqxKoW5ujW9VHUPz9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Hotel de La Cañada (Sinpecor) */}
              <div className="bg-pink-50 p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                <h3 className="text-xl font-nunito font-bold text-pink-900 mb-3">Hotel de La Cañada (Sinpecor)</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-pink-700 mt-0.5 flex-shrink-0" />
                    <p className="text-pink-800 text-sm">
                      <strong>Dirección:</strong> Malvinas Argentinas 387
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-pink-700 flex-shrink-0" />
                    <a href="tel:3514204420" className="text-pink-800 text-sm hover:text-[#c84f9b] hover:underline">
                      351-4204420
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-pink-700 flex-shrink-0" />
                    <a
                      href="https://www.sinpecor.org.ar/seccion/7/84"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      www.sinpecor.org.ar
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-pink-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/b91e9JruoiLJFsx78"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Colonia Marina */}
              <div className="bg-teal-50 p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <h3 className="text-xl font-nunito font-bold text-teal-900 mb-3">Colonia Marina</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-teal-700 mt-0.5 flex-shrink-0" />
                    <p className="text-teal-800 text-sm">
                      <strong>Dirección:</strong> Ruta provincial 5, Km 106,5
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-teal-700 flex-shrink-0" />
                    <a href="tel:03546497062" className="text-teal-800 text-sm hover:text-[#c84f9b] hover:underline">
                      03546-497062 (fijo)
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-teal-700 flex-shrink-0" />
                    <a
                      href="https://turismo.iosfa.gob.ar/destino/sierras-de-cordoba"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      turismo.iosfa.gob.ar
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-teal-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/DZkqNU38rZVQwJRN7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Complejo Foxes 2 */}
              <div className="bg-orange-50 p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <h3 className="text-xl font-nunito font-bold text-orange-900 mb-3">Complejo Foxes 2</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-orange-700 mt-0.5 flex-shrink-0" />
                    <p className="text-orange-800 text-sm">
                      <strong>Dirección:</strong> Ruta Prov. 5 km 105 y Eva Perón
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a href="tel:3546404574" className="text-orange-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3546-404574
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/complejofoxes2"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @complejofoxes2
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/zwVSAaSU1YfKbCe18"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Complejo 3 de Octubre */}
              <div className="bg-emerald-50 p-6 rounded-lg shadow-md border-l-4 border-emerald-500">
                <h3 className="text-xl font-nunito font-bold text-emerald-900 mb-3">
                  Complejo 3 de Octubre (Sindicato Festiqypra)
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                    <p className="text-emerald-800 text-sm">
                      <strong>Dirección:</strong> Guaviare s/n Esquina, Guárico
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a href="tel:1144125031" className="text-emerald-800 text-sm hover:text-[#c84f9b] hover:underline">
                      11-44125031
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a
                      href="https://complejo3deoctubre.com.ar/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      complejo3deoctubre.com.ar
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/J7RaaCweV1krLqTCA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Hotel Federación de Sindicatos */}
              <div className="bg-violet-50 p-6 rounded-lg shadow-md border-l-4 border-violet-500">
                <h3 className="text-xl font-nunito font-bold text-violet-900 mb-3">
                  Hotel Federación de Sindicatos de Trabajadores Municipales de la Provincia de Córdoba
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-violet-700 mt-0.5 flex-shrink-0" />
                    <p className="text-violet-800 text-sm">
                      <strong>Dirección:</strong> Av. Los Navegantes 237
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-violet-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/T8nXLCugwdjNHAFGA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cabañas */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Home className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-nunito font-bold text-gray-900">Cabañas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-montserrat">
              {/* Cabaña Las Ruedas */}
              <div className="bg-orange-50 p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <h3 className="text-xl font-nunito font-bold text-orange-900 mb-3">Cabaña Las Ruedas</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-orange-700 mt-0.5 flex-shrink-0" />
                    <p className="text-orange-800 text-sm">
                      <strong>Dirección:</strong> Juan Bonivardo 300
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a href="tel:3462660908" className="text-orange-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3462-660908
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/cabanas_lasruedas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @cabanas_lasruedas
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/Vhg3GHwG8bPceBfE8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Cabañas del Dique */}
              <div className="bg-emerald-50 p-6 rounded-lg shadow-md border-l-4 border-emerald-500">
                <h3 className="text-xl font-nunito font-bold text-emerald-900 mb-3">Cabañas del Dique</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                    <p className="text-emerald-800 text-sm">
                      <strong>Dirección:</strong> Av. Los Navegantes 509
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a href="tel:1144088383" className="text-emerald-800 text-sm hover:text-[#c84f9b] hover:underline">
                      11-44088383
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/cabaniasdeldique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @cabaniasdeldique
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/1JDFzmLFqWPWVYW37"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Complejo El Tala */}
              <div className="bg-indigo-50 p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
                <h3 className="text-xl font-nunito font-bold text-indigo-900 mb-3">Complejo El Tala</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-indigo-700 mt-0.5 flex-shrink-0" />
                    <p className="text-indigo-800 text-sm">
                      <strong>Dirección:</strong> Av. Los Pescadores 415
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-indigo-700 flex-shrink-0" />
                    <a href="tel:3546650901" className="text-indigo-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3546-650901
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-indigo-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/complejoeltalaeltala"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @complejoeltalaeltala
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-indigo-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/xxmoshGEnw7rtyaX6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Cabaña Las Pircas */}
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                <h3 className="text-xl font-nunito font-bold text-yellow-900 mb-3">Cabaña Las Pircas</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-yellow-700 mt-0.5 flex-shrink-0" />
                    <p className="text-yellow-800 text-sm">
                      <strong>Dirección:</strong> Av. Los Pescadores y Belalcazar
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-yellow-700 flex-shrink-0" />
                    <a href="tel:3584874033" className="text-yellow-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3584-874033
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-yellow-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/cabanaslaspircas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @cabanaslaspircas
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-yellow-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/T2r4zDoNgxyr3t2z8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Bellezas del Lago */}
              <div className="bg-pink-50 p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                <h3 className="text-xl font-nunito font-bold text-pink-900 mb-3">Bellezas del Lago</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-pink-700 mt-0.5 flex-shrink-0" />
                    <p className="text-pink-800 text-sm">
                      <strong>Dirección:</strong> Av. Colón 1816
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-pink-700 flex-shrink-0" />
                    <div className="text-pink-800 text-sm">
                      <a href="tel:1136270212" className="hover:text-[#c84f9b] hover:underline mr-2">
                        11-36270212
                      </a>
                      <span>/</span>
                      <a href="tel:1130840019" className="hover:text-[#c84f9b] hover:underline ml-2">
                        11-30840019
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-pink-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/bellezasdellago"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @bellezasdellago
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-pink-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/GTRKCPmQMRLfjFRb7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Cabañas Los Molles */}
              <div className="bg-teal-50 p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <h3 className="text-xl font-nunito font-bold text-teal-900 mb-3">Cabañas Los Molles</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-teal-700 mt-0.5 flex-shrink-0" />
                    <p className="text-teal-800 text-sm">
                      <strong>Dirección:</strong> Av. De los Navegantes esq. Adrián "Ñoño" Urquía
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-teal-700 flex-shrink-0" />
                    <a href="tel:3546450167" className="text-teal-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3546-450167
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-teal-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/unZA4t7mfUxBieck6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Chalet y Cabaña de Montaña Esmeralda */}
              <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-nunito font-bold text-green-900 mb-3">
                  Chalet y Cabaña de Montaña Esmeralda
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 text-sm">
                      <strong>Dirección:</strong> Calle Salta s/n
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-700 flex-shrink-0" />
                    <a href="tel:3584195017" className="text-green-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3584-195017
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-green-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/cabanaesmeraldavdd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @cabanaesmeraldavdd
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-green-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/oDm1rouBhZRY7MSa8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Bungalows Aguas Claras */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-nunito font-bold text-blue-900 mb-3">Bungalows Aguas Claras</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                    <p className="text-blue-800 text-sm">
                      <strong>Dirección:</strong> Av. De los Navegantes 648
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a href="tel:3546400519" className="text-blue-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3546-400519
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/bungaguasclaras"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @bungaguasclaras
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/6PCToDpmJLmbvW4d8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Luces Casas de Montaña */}
              <div className="bg-purple-50 p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-nunito font-bold text-purple-900 mb-3">Luces Casas de Montaña</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-purple-700 mt-0.5 flex-shrink-0" />
                    <p className="text-purple-800 text-sm">
                      <strong>Dirección:</strong> Av. de Los Exploradores 309, Bello Horizonte
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-purple-700 flex-shrink-0" />
                    <a href="tel:1163095057" className="text-purple-800 text-sm hover:text-[#c84f9b] hover:underline">
                      11-63095057
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-purple-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/lucescasasdemontana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @lucescasasdemontana
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-purple-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/yhA34A1ErmSnarjR7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* El Castillo */}
              <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-nunito font-bold text-red-900 mb-3">El Castillo</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-red-700 mt-0.5 flex-shrink-0" />
                    <p className="text-red-800 text-sm">
                      <strong>Dirección:</strong> Río Quinto 271
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-red-700 flex-shrink-0" />
                    <a href="tel:3583404525" className="text-red-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3583-404525
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-red-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/cabaniaselcastillo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @cabaniaselcastillo
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-red-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/6yW9fupYqeQgiG1J6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* La Casita de Fran */}
              <div className="bg-cyan-50 p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
                <h3 className="text-xl font-nunito font-bold text-cyan-900 mb-3">La Casita de Fran</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-cyan-700 mt-0.5 flex-shrink-0" />
                    <p className="text-cyan-800 text-sm">
                      <strong>Dirección:</strong> Los Paraísos s/n
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-cyan-700 flex-shrink-0" />
                    <a href="tel:3515721619" className="text-cyan-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3515-721619
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-cyan-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/lcdfran"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @lcdfran
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-cyan-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/maV1qCaYd1amBf5j9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Amanecer en el Lago */}
              <div className="bg-amber-50 p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                <h3 className="text-xl font-nunito font-bold text-amber-900 mb-3">Amanecer en el Lago</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-amber-700 mt-0.5 flex-shrink-0" />
                    <p className="text-amber-800 text-sm">
                      <strong>Dirección:</strong> Av. de los Navegantes 815
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-amber-700 flex-shrink-0" />
                    <a href="tel:1161265006" className="text-amber-800 text-sm hover:text-[#c84f9b] hover:underline">
                      11-61265006
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-amber-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/cabanasamanecerenellago"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @cabanasamanecerenellago
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-amber-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/oRuTwTYE1XrXcoBm8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Cabañas Los Quebrachos */}
              <div className="bg-lime-50 p-6 rounded-lg shadow-md border-l-4 border-lime-500">
                <h3 className="text-xl font-nunito font-bold text-lime-900 mb-3">Cabañas Los Quebrachos</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-lime-700 mt-0.5 flex-shrink-0" />
                    <p className="text-lime-800 text-sm">
                      <strong>Dirección:</strong> Av. Colón 1297 esq. Apure
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-lime-700 flex-shrink-0" />
                    <a href="tel:3462332141" className="text-lime-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3462-332141
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-lime-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/losquebrachos_villadeldique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lime-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @losquebrachos_villadeldique
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-lime-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/iuuG4JHZ3inwiFU48"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lime-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Tres Ángeles */}
              <div className="bg-sky-50 p-6 rounded-lg shadow-md border-l-4 border-sky-500">
                <h3 className="text-xl font-nunito font-bold text-sky-900 mb-3">Tres Ángeles</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-sky-700 mt-0.5 flex-shrink-0" />
                    <p className="text-sky-800 text-sm">
                      <strong>Dirección:</strong> Juan 23 s/n
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-sky-700 flex-shrink-0" />
                    <a href="tel:3586002813" className="text-sky-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3586-002813
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-sky-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/cabanas_3_angeles"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @cabanas_3_angeles
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-sky-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/BA9nGJKHvA4vsERM8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Añoranzas */}
              <div className="bg-rose-50 p-6 rounded-lg shadow-md border-l-4 border-rose-500">
                <h3 className="text-xl font-nunito font-bold text-rose-900 mb-3">Añoranzas</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-rose-700 mt-0.5 flex-shrink-0" />
                    <p className="text-rose-800 text-sm">
                      <strong>Dirección:</strong> Tirana esq. Oslo
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-rose-700 flex-shrink-0" />
                    <a href="tel:3516066451" className="text-rose-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3516-066451
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-rose-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/cabanas_anoranzas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @cabanas_anoranzas
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-rose-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/kywSW1r4zY8k1xRR6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Casitas Doña Dora */}
              <div className="bg-slate-50 p-6 rounded-lg shadow-md border-l-4 border-slate-500">
                <h3 className="text-xl font-nunito font-bold text-slate-900 mb-3">Casitas Doña Dora</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-slate-700 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-800 text-sm">
                      <strong>Dirección:</strong> Tte. 1º Nivoli 358
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-slate-700 flex-shrink-0" />
                    <a href="tel:1141474255" className="text-slate-800 text-sm hover:text-[#c84f9b] hover:underline">
                      11-41474255
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-slate-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/donadora36"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @donadora36
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-slate-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/Lk61H5bkGSoAZdwT8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* AleSte */}
              <div className="bg-stone-50 p-6 rounded-lg shadow-md border-l-4 border-stone-500">
                <h3 className="text-xl font-nunito font-bold text-stone-900 mb-3">AleSte</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-stone-700 mt-0.5 flex-shrink-0" />
                    <p className="text-stone-800 text-sm">
                      <strong>Dirección:</strong> Hungría 48
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-stone-700 flex-shrink-0" />
                    <div className="text-stone-800 text-sm">
                      <a href="tel:3468564066" className="hover:text-[#c84f9b] hover:underline mr-2">
                        3468-564066
                      </a>
                      <span>/</span>
                      <a href="tel:3468569976" className="hover:text-[#c84f9b] hover:underline ml-2">
                        3468-569976
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-stone-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/LmkFybVxLPqpsMLz8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Luma Apart */}
              <div className="bg-neutral-50 p-6 rounded-lg shadow-md border-l-4 border-neutral-500">
                <h3 className="text-xl font-nunito font-bold text-neutral-900 mb-3">Luma Apart</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-neutral-700 mt-0.5 flex-shrink-0" />
                    <p className="text-neutral-800 text-sm">
                      <strong>Dirección:</strong> Magallanes s/n
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-neutral-700 flex-shrink-0" />
                    <a href="tel:3513557755" className="text-neutral-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3513-557755
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-neutral-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/lumaapart"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @lumaapart
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-neutral-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/NAKe8WDQypDrWaKA6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Cabañas CyC */}
              <div className="bg-zinc-50 p-6 rounded-lg shadow-md border-l-4 border-zinc-500">
                <h3 className="text-xl font-nunito font-bold text-zinc-900 mb-3">Cabañas CyC</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-zinc-700 mt-0.5 flex-shrink-0" />
                    <p className="text-zinc-800 text-sm">
                      <strong>Dirección:</strong> Av. Los Conquistadores s/n
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-zinc-700 flex-shrink-0" />
                    <a href="tel:1167101391" className="text-zinc-800 text-sm hover:text-[#c84f9b] hover:underline">
                      11-67101391
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-zinc-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/cabanas.cyc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @cabanas.cyc
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-zinc-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/bc8VnrYFR2weqadv9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Cabañas Las Rosas */}
              <div className="bg-fuchsia-50 p-6 rounded-lg shadow-md border-l-4 border-fuchsia-500">
                <h3 className="text-xl font-nunito font-bold text-fuchsia-900 mb-3">Cabañas Las Rosas</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-fuchsia-700 mt-0.5 flex-shrink-0" />
                    <p className="text-fuchsia-800 text-sm">
                      <strong>Dirección:</strong> Los Conquistadores y Velazco
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-fuchsia-700 flex-shrink-0" />
                    <a href="tel:3533415934" className="text-fuchsia-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3533-415934
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-fuchsia-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/cabanaslasrosas.villadeldique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fuchsia-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @cabanaslasrosas.villadeldique
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-fuchsia-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/KVMC7RhXqXUnEcFM8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fuchsia-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Casitas La Costa */}
              <div className="bg-violet-50 p-6 rounded-lg shadow-md border-l-4 border-violet-500">
                <h3 className="text-xl font-nunito font-bold text-violet-900 mb-3">Casitas La Costa</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-violet-700 mt-0.5 flex-shrink-0" />
                    <p className="text-violet-800 text-sm">
                      <strong>Dirección:</strong> Guaviaré s/n
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-violet-700 flex-shrink-0" />
                    <a href="tel:3584320295" className="text-violet-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3584-320295
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-violet-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/casitaslacosta"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @casitaslacosta
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-violet-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/6xoZM1AELubouxNf7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Lomas del Dique */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-gray-500">
                <h3 className="text-xl font-nunito font-bold text-gray-900 mb-3">Lomas del Dique</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-700 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-800 text-sm">
                      <strong>Dirección:</strong> Conquistadores y Cabrera
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-700 flex-shrink-0" />
                    <a href="tel:1167860810" className="text-gray-800 text-sm hover:text-[#c84f9b] hover:underline">
                      11-67860810
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-gray-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/zdztfENVRCgacCUf7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Las Lucías */}
              <div className="bg-emerald-50 p-6 rounded-lg shadow-md border-l-4 border-emerald-500">
                <h3 className="text-xl font-nunito font-bold text-emerald-900 mb-3">Las Lucías</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                    <p className="text-emerald-800 text-sm">
                      <strong>Dirección:</strong> Calle 11
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a href="tel:3382447273" className="text-emerald-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3382-447273
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a
                      href="https://laslucias.com.ar/villa_dique.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      laslucias.com.ar
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/T4G8V8EGM4rJZFPL8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Yo-Yo */}
              <div className="bg-orange-50 p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <h3 className="text-xl font-nunito font-bold text-orange-900 mb-3">Yo-Yo</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-orange-700 mt-0.5 flex-shrink-0" />
                    <p className="text-orange-800 text-sm">
                      <strong>Dirección:</strong> Hipólito Yrigoyen 168
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a href="tel:3512765867" className="text-orange-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3512-765867
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a
                      href="https://www.facebook.com/profile.php?id=100086291894007&mibextid=LQQJ4d"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Facebook
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/iJCAwRMQnka6RNJT6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Refugio del Sol */}
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                <h3 className="text-xl font-nunito font-bold text-yellow-900 mb-3">Refugio del Sol</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-yellow-700 mt-0.5 flex-shrink-0" />
                    <p className="text-yellow-800 text-sm">
                      <strong>Dirección:</strong> Av. De los Pescadores 383
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-yellow-700 flex-shrink-0" />
                    <a href="tel:3546651795" className="text-yellow-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3546-651795
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-yellow-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/cabanas_refugiodelsol"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @cabanas_refugiodelsol
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-yellow-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/id5YPM44CWwgPooq5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Cabañas Facu */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-nunito font-bold text-blue-900 mb-3">Cabañas Facu</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                    <p className="text-blue-800 text-sm">
                      <strong>Dirección:</strong> Magallanes esq. Conquistadores
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a href="tel:3546430333" className="text-blue-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3546-430333
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/cabanas_facu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      @cabanas_facu
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/ZnYdR3rDdteystDa8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Cabañas Alma Serrana */}
              <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-nunito font-bold text-green-900 mb-3">Cabañas Alma Serrana</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 text-sm">
                      <strong>Dirección:</strong> Av. De los Pescadores s/n
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-700 flex-shrink-0" />
                    <a href="tel:3546544919" className="text-green-800 text-sm hover:text-[#c84f9b] hover:underline">
                      3546-544919
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-green-700 flex-shrink-0" />
                    <a
                      href="https://maps.app.goo.gl/9xxugWmJ1SPYgwTE6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-800 text-sm hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-[#c84f9b] to-pink-600 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-nunito font-bold mb-4">¿Ya elegiste tu alojamiento?</h3>
              <p className="text-lg font-montserrat mb-6">Descubre qué hacer y dónde comer en Villa del Dique</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/turistas/donde-comer"
                  className="bg-white text-[#c84f9b] font-montserrat font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  ¿Dónde comer?
                </Link>
                <Link
                  href="/turistas/circuitos"
                  className="bg-white text-[#c84f9b] font-montserrat font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  Ver Circuitos
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer - Pink color */}
      <footer className="w-full bg-[#c84f9b] text-white py-8 sm:py-10 md:py-12 px-4 font-montserrat">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Logo y Lema */}
            <div className="flex flex-col items-center sm:items-center lg:items-start space-y-4">
              <Image
                src="/images/logo-footer-blanco.png"
                alt="Villa del Dique Municipalidad"
                width={150} // Increased width
                height={150} // Increased height
                className="h-20 sm:h-24 md:h-28 w-auto object-contain" // Increased responsive height
              />
              <p className="text-lg sm:text-xl font-semibold text-center sm:text-center lg:text-left">
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
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/turistas/como-llegar"
                      className="hover:text-[#c84f9b] hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                    >
                      ¿Cómo llegar?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/turistas/donde-alojarme"
                      className="hover:text-[#c84f9b] hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-medium"
                    >
                      ¿Dónde alojarme?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/turistas/servicios"
                      className="hover:text-[#c84f9b] hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                    >
                      Servicios
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Turismo */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4">Turismo</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/turistas/donde-comer"
                    className="hover:text-[#c84f9b] hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                  >
                    ¿Dónde comer?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/turistas/circuitos"
                    className="hover:text-[#c84f9b] hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                  >
                    Circuitos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4">Información Turística</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2 justify-center sm:justify-center lg:justify-start">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <p className="text-sm sm:text-base">
                    Oficina de Turismo
                    <br />
                    Villa del Dique, Córdoba
                  </p>
                </div>
                <div className="flex items-center space-x-2 justify-center sm:justify-center lg:justify-start">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <p className="text-sm sm:text-base">3546-528341</p>
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