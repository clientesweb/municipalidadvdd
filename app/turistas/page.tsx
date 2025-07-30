"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X, Facebook, Instagram, Youtube, MapPin, Phone } from "lucide-react"
import Link from "next/link"

export default function TuristasPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const leftMenuItems = [
    { name: "¿Cómo llegar?", href: "/turistas/como-llegar" },
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
                  className="text-lg xl:text-xl font-medium text-gray-800 hover:text-[#c84f9b] transition-colors duration-200 py-2 whitespace-nowrap"
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
                  className="block text-3xl font-medium text-gray-800 hover:text-[#c84f9b] transition-colors duration-200 py-3 border-b border-gray-100"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Single Banner */}
      <section className="relative w-full">
        <Link href="/turistas/recomendaciones" className="block w-full">
          <div className="relative w-full aspect-video overflow-hidden">
            <Image
              src="/images/recomendacion-al-turista.webp"
              alt="Recomendación al Turista - Villa del Dique"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </Link>
      </section>

      {/* Banner "Tu Plan Perfecto" */}
      <section className="relative w-full">
        <Link
          href="https://www.instagram.com/turismoycultura.villadeldique?igsh=NGR6bnJhcXB4Z3h5"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full"
        >
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center">
            Contactos de Emergencia
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-12 justify-center items-center max-w-6xl mx-auto">
            <Link
              href="tel:354697829"
              className="bg-[#d39d85] text-white font-bold text-lg sm:text-xl lg:text-2xl text-center px-8 py-4 lg:px-12 lg:py-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 w-full sm:w-auto min-w-[200px] lg:min-w-[250px] flex items-center justify-center"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2" /> Policía: 354697829
            </Link>
            <Link
              href="tel:3546497497"
              className="bg-[#d39d85] text-white font-bold text-lg sm:text-xl lg:text-2xl text-center px-8 py-4 lg:px-12 lg:py-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 w-full sm:w-auto min-w-[200px] lg:min-w-[250px] flex items-center justify-center"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2" /> Bomberos: 3546497497
            </Link>
            <Link
              href="tel:3546497636"
              className="bg-[#d39d85] text-white font-bold text-lg sm:text-xl lg:text-2xl text-center px-8 py-4 lg:px-12 lg:py-6 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 w-full sm:w-auto min-w-[200px] lg:min-w-[250px] flex items-center justify-center"
            >
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 mr-2" /> Hospital: 3546497636
            </Link>
          </div>
        </div>
      </section>

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
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl"
                    >
                      ¿Cómo llegar?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/turistas/donde-alojarme"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl"
                    >
                      ¿Dónde alojarme?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/vecinos/servicios"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl"
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
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl"
                  >
                    ¿Dónde comer?
                  </Link>
                </li>
                <li>
                  <Link
                    href="/turistas/circuitos"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl"
                  >
                    Circuitos
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Información Turística</h3>
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
