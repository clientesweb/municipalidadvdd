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
    { name: "Servicios", href: "/vecinos/servicios" },
    { name: "Noticias", href: "/noticias" },
  ]

  const allMenuItems = [...leftMenuItems, ...rightMenuItems]

  return (
    <div className="min-h-screen">
      {/* Header Announcement - Pink color */}
      <div className="w-full bg-[#c84f9b] text-white py-2 px-4">
        <div className="container mx-auto text-center">
          <p className="text-base sm:text-lg font-medium">Página oficial de la Municipalidad de Villa del Dique</p>
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
                <a
                  key={index}
                  href={item.href}
                  className={`text-lg xl:text-xl font-medium transition-colors duration-200 py-2 whitespace-nowrap ${
                    item.active ? "text-[#c84f9b] border-b-2 border-[#c84f9b]" : "text-gray-800 hover:text-[#c84f9b]"
                  }`}
                >
                  {item.name}
                </a>
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
                  className="h-16 sm:h-18 md:h-20 lg:h-24 w-auto object-contain"
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
                  className="text-lg xl:text-xl font-medium text-gray-800 hover:text-[#c84f9b] transition-colors duration-200 py-2 whitespace-nowrap"
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
                  width={300}
                  height={120}
                  className="h-16 sm:h-18 md:h-20 w-auto object-contain"
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
                  className={`block text-3xl font-medium transition-colors duration-200 py-3 border-b border-gray-100 ${
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
      <nav className="w-full bg-gray-50 py-3 px-4">
        <div className="container mx-auto">
          <div className="flex items-center space-x-2 text-base text-gray-600">
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
            src="/images/banner-donde-alojarme-villa-del-dique.webp"
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
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">¿Dónde alojarme?</h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Villa del Dique ofrece una amplia variedad de opciones de alojamiento para todos los gustos y
              presupuestos. Desde camping municipal hasta hoteles de primera categoría y acogedoras cabañas.
            </p>
          </section>

          {/* Camping Municipal */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Tent className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Camping Municipal</h2>
            </div>
            <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-900 mb-3">Camping Municipal</h3>
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
                    href="tel:03456497241"
                    className="text-green-800 hover:text-green-900 font-medium hover:underline transition-colors"
                  >
                    03456-497241
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Hoteles</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Amerian / Hotel Carrillo */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Amerian / Hotel Carrillo</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                    <p className="text-blue-800 text-base">
                      <strong>Dirección:</strong> Av. de los Navegantes 663
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <div className="text-blue-800 text-base">
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
                      href="https://instagram.com/hotelcarrillo.amerian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      @hotelcarrillo.amerian
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a
                      href="https://www.amerian.com/hotel/amerian-villa-del-dique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      www.amerian.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a
                      href="https://g.co/kgs/r4Epumd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* El Portal de la Villa */}
              <div className="bg-purple-50 p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-bold text-purple-900 mb-3">El Portal de la Villa</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-purple-700 mt-0.5 flex-shrink-0" />
                    <p className="text-purple-800 text-base">
                      <strong>Dirección:</strong> Av. San Martín 194
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-purple-700 flex-shrink-0" />
                    <div className="text-purple-800 text-base">
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
                      className="text-purple-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      @elportaldelavillahotel
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-purple-700 flex-shrink-0" />
                    <a
                      href="https://g.co/kgs/pRFHC1e"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Hostería Valle Azul */}
              <div className="bg-cyan-50 p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
                <h3 className="text-xl font-bold text-cyan-900 mb-3">Hostería Valle Azul</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-cyan-700 mt-0.5 flex-shrink-0" />
                    <p className="text-cyan-800 text-base">
                      <strong>Dirección:</strong> Av. Los Pescadores 334
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-cyan-700 flex-shrink-0" />
                    <div className="text-cyan-800 text-base">
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
                      className="text-cyan-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      @hosteriavalleazuldeldique
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-cyan-700 flex-shrink-0" />
                    <a
                      href="https://g.co/kgs/zof4721"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Hotel Venezia */}
              <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-bold text-red-900 mb-3">Hotel Venezia</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-red-700 mt-0.5 flex-shrink-0" />
                    <p className="text-red-800 text-base">
                      <strong>Dirección:</strong> Av. Hipólito Yrigoyen 329
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-red-700 flex-shrink-0" />
                    <a href="tel:03546497252" className="text-red-800 text-base hover:text-[#c84f9b] hover:underline">
                      03546-497252
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-red-700 flex-shrink-0" />
                    <a
                      href="https://g.co/kgs/BWpCGW7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-800 text-base hover:text-[#c84f9b] hover:underline"
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
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Cabañas</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Cabaña El Refugio */}
              <div className="bg-orange-50 p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <h3 className="text-xl font-bold text-orange-900 mb-3">Cabaña El Refugio</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-orange-700 mt-0.5 flex-shrink-0" />
                    <p className="text-orange-800 text-base">
                      <strong>Dirección:</strong> Calle de los Pinos 225
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a
                      href="tel:03546123456"
                      className="text-orange-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      03546-123456
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/refugio.cabanas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      @refugio.cabanas
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a
                      href="https://www.refugio.com.ar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      www.refugio.com.ar
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a
                      href="https://g.co/kgs/vHepg3U"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Cabañas Las Sierras */}
              <div className="bg-emerald-50 p-6 rounded-lg shadow-md border-l-4 border-emerald-500">
                <h3 className="text-xl font-bold text-emerald-900 mb-3">Cabañas Las Sierras</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                    <p className="text-emerald-800 text-base">
                      <strong>Dirección:</strong> Ruta 5 Km 12
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a
                      href="tel:03546789101"
                      className="text-emerald-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      03546-789101
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/lassierras"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      @lassierras
                    </a>
                  </div>
                </div>
              </div>

              {/* Cabañas La Montaña */}
              <div className="bg-indigo-50 p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
                <h3 className="text-xl font-bold text-indigo-900 mb-3">Cabañas La Montaña</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-indigo-700 mt-0.5 flex-shrink-0" />
                    <p className="text-indigo-800 text-base">
                      <strong>Dirección:</strong> San José 154
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-indigo-700 flex-shrink-0" />
                    <a
                      href="tel:03546222333"
                      className="text-indigo-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      03546-222333
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-indigo-700 flex-shrink-0" />
                    <a
                      href="https://cabanaslamontana.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      cabanaslamontana.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4 text-indigo-700 flex-shrink-0" />
                    <a
                      href="https://www.google.com/travel/hotels/s/YRV1pU7xgMmSZEMq9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      Ver en Google Maps
                    </a>
                  </div>
                </div>
              </div>

              {/* Cabañas El Sol */}
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold text-yellow-900 mb-3">Cabañas El Sol</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-yellow-700 mt-0.5 flex-shrink-0" />
                    <p className="text-yellow-800 text-base">
                      <strong>Dirección:</strong> Calle Los Nogales 110
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-yellow-700 flex-shrink-0" />
                    <a
                      href="tel:03546335544"
                      className="text-yellow-800 text-base hover:text-[#c84f9b] hover:underline"
                    >
                      03546-335544
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="h-4 w-4 text-yellow-700 flex-shrink-0" />
                    <a
                      href="https://g.co/kgs/SfSSTnE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-800 text-base hover:text-[#c84f9b] hover:underline"
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
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">¿Ya elegiste tu alojamiento?</h3>
              <p className="text-lg mb-6">Descubre qué hacer y dónde comer en Villa del Dique</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/turistas/donde-comer"
                  className="bg-white text-[#c84f9b] font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  ¿Dónde comer?
                </Link>
                <Link
                  href="/turistas/circuitos"
                  className="bg-white text-[#c84f9b] font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  Ver Circuitos
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer - Pink color */}
      <footer className="w-full bg-[#c84f9b] text-white py-8 sm:py-10 md:py-12 px-4">
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
              <p className="text-xl sm:text-2xl font-semibold text-center sm:text-center lg:text-left">
                EL PROGRESO QUE QUEREMOS
              </p>
            </div>

            {/* Redes Sociales y Acceso Rápido */}
            <div className="space-y-6 text-center sm:text-center lg:text-left">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Redes Sociales</h3>
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
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Acceso Rápido</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/turistas/como-llegar"
                      className="hover:text-[#c84f9b] hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl"
                    >
                      ¿Cómo llegar?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/turistas/donde-alojarme"
                      className="hover:text-[#c84f9b] hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl font-medium"
                    >
                      ¿Dónde alojarme?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/vecinos/servicios"
                      className="hover:text-[#c84f9b] hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl"
                    >
                      Servicios
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Turismo */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Turismo</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/turistas/donde-comer"
                    className="hover:text-[#c84f9b] hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl"
                  >
                    ¿Dónde comer?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/turistas/circuitos"
                    className="hover:text-[#c84f9b] hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl"
                  >
                    Circuitos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Información Turística</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2 justify-center sm:justify-center lg:justify-start">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <p className="text-base sm:text-lg">
                    Oficina de Turismo
                    <br />
                    Villa del Dique, Córdoba
                  </p>
                </div>
                <div className="flex items-center space-x-2 justify-center sm:justify-center lg:justify-start">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <p className="text-base sm:text-lg">3546-528341</p>
                </div>
              </div>
            </div>
          </div>

          {/* Línea divisoria y copyright */}
          <div className="border-t border-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center space-y-2">
            <p className="text-base sm:text-lg opacity-80">
              © 2024 Municipalidad de Villa del Dique. Todos los derechos reservados.
            </p>
            <p className="text-base opacity-70">
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
