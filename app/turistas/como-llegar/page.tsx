"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X, Facebook, Instagram, Youtube, MapPin, Phone, Car, Bus, Plane, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function ComoLlegarPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const leftMenuItems = [
    { name: "¿Cómo llegar?", href: "/turistas/como-llegar", active: true },
    { name: "¿Dónde alojarme?", href: "/turistas/donde-alojarme" },
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
                <a
                  key={index}
                  href={item.href}
                  className={`text-base xl:text-lg font-medium transition-colors duration-200 py-2 whitespace-nowrap ${
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
                  className="h-12 sm:h-14 md:h-16 w-auto object-contain"
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
                  className="text-base xl:text-lg font-medium text-gray-800 hover:text-[#c84f9b] transition-colors duration-200 py-2 whitespace-nowrap"
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
                  className={`block text-2xl font-medium transition-colors duration-200 py-3 border-b border-gray-100 ${
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
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#c84f9b] transition-colors">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/turistas" className="hover:text-[#c84f9b] transition-colors">
              Turistas
            </Link>
            <span>/</span>
            <span className="text-[#c84f9b] font-medium">¿Cómo llegar?</span>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative w-full">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src="/images/banner-como-llegar-villa-del-dique.webp"
            alt="Cómo llegar a Villa del Dique"
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
          {/* Rutas de Acceso */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Car className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Rutas de Acceso</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#c84f9b]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ruta Provincial N°5</h3>
                <p className="text-gray-700">Acceso principal desde Córdoba Capital</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#c84f9b]">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Ruta Nacional N°36</h3>
                <p className="text-gray-700">Ruta alternativa con conexión a otras localidades</p>
              </div>
            </div>
          </section>

          {/* Transporte en Ómnibus */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Bus className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Ómnibus</h2>
            </div>

            {/* Desde Córdoba */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Desde Córdoba a Villa del Dique</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">Buses Lep</h4>
                  <a
                    href="https://www.buseslep.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    www.buseslep.com.ar
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
                <div className="bg-green-50 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-green-900 mb-3">Grupo Sierras</h4>
                  <a
                    href="https://grupo-sierras.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-700 hover:text-green-900 transition-colors"
                  >
                    grupo-sierras.com.ar
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <p className="text-yellow-800 font-medium">
                  <strong>Horarios:</strong> Desde la Terminal de Córdoba hay colectivos hacia Villa del Dique a partir
                  de las 7:00 hs. hasta las 21:00 hs. con frecuencia de 1 hora aproximadamente.
                </p>
              </div>
            </div>

            {/* Desde Buenos Aires */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Desde Buenos Aires a Villa del Dique</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">Buses Lep</h4>
                  <a
                    href="https://www.buseslep.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-700 hover:text-blue-900 transition-colors"
                  >
                    www.buseslep.com.ar
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
                <div className="bg-red-50 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-red-900 mb-3">Chevallier</h4>
                  <a
                    href="https://www.nuevachevallier.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-red-700 hover:text-red-900 transition-colors"
                  >
                    www.nuevachevallier.com
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-bold text-purple-900 mb-3">San Juan Mar del Plata</h4>
                  <a
                    href="https://www.atsj.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-purple-700 hover:text-purple-900 transition-colors"
                  >
                    www.atsj.com.ar
                    <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Transporte Aéreo */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Plane className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Avión</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Vuelos al Aeropuerto Internacional Ingeniero Aeronáutico Ambrosio Taravella (Pajas Blancas), Córdoba:
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-orange-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-orange-900 mb-3">FlyBondi</h4>
                <p className="text-orange-800 text-sm">Buenos Aires, Bariloche, Mendoza, Neuquén, Salta</p>
              </div>
              <div className="bg-sky-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-sky-900 mb-3">Aerolíneas Argentinas</h4>
                <p className="text-sky-800 text-sm">
                  Jujuy, Salta, Tucumán, Resistencia, Iguazú, Posadas, San Juan, Mendoza, Buenos Aires, Mar del Plata,
                  Neuquén, Chapelco, Bariloche, Trelew, Comodoro Rivadavia, El Calafate, Ushuaia
                </p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-bold text-indigo-900 mb-3">JetSmart</h4>
                <p className="text-indigo-800 text-sm">Buenos Aires</p>
              </div>
            </div>
          </section>

          {/* Desde el Aeropuerto */}
          <section className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Cómo llegar a Villa del Dique desde el Aeropuerto
            </h2>
            <div className="bg-gradient-to-r from-[#c84f9b] to-pink-600 text-white p-6 rounded-lg shadow-lg mb-6">
              <h3 className="text-2xl font-bold mb-4">
                Aeropuerto Internacional Ingeniero Aeronáutico Ambrosio Taravella (Pajas Blancas)
              </h3>
              <p className="text-lg">Opciones de transporte desde el aeropuerto hasta Villa del Dique:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Servicio AEROBUS</h4>
                <p className="text-gray-700">Conexión directa Terminal-Aeropuerto con frecuencia cada una hora.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h4 className="text-xl font-bold text-green-900 mb-3">Colectivo Línea 25</h4>
                <p className="text-gray-700">Servicio de transporte público desde el aeropuerto.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                <h4 className="text-xl font-bold text-yellow-900 mb-3">Remises</h4>
                <p className="text-gray-700">Servicio de transporte privado disponible en el aeropuerto.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h4 className="text-xl font-bold text-red-900 mb-3">Taxis</h4>
                <p className="text-gray-700">Servicio de taxi disponible las 24 horas.</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-[#c84f9b] to-pink-600 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">¿Ya sabes cómo llegar?</h3>
              <p className="text-lg mb-6">Descubre qué hacer una vez que llegues a Villa del Dique</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/turistas/donde-alojarme"
                  className="bg-white text-[#c84f9b] font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  ¿Dónde alojarme?
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
                      href="/turistas/como-llegar"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-medium"
                    >
                      ¿Cómo llegar?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/turistas/donde-alojarme"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                    >
                      ¿Dónde alojarme?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/turistas/servicios"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                    >
                      Servicios
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Turismo */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Turismo</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/turistas/donde-comer"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                  >
                    ¿Dónde comer?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/turistas/circuitos"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                  >
                    Circuitos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Información Turística</h3>
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
