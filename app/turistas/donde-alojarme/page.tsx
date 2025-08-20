"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X, Facebook, Instagram, Youtube, MapPin, Phone, Tent, Home, Building, Users } from "lucide-react"
import Link from "next/link"

export default function DondeAlojarme() {
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
    { name: "Lugares para visitar", href: "/turistas/lugares-para-visitar" },
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
                  className="text-base xl:text-lg font-montserrat font-medium text-gray-800 hover:text-[#c84f9b] transition-colors duration-200 py-2 whitespace-nowrap"
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
                  width={350}
                  height={140}
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
                  width={350}
                  height={140}
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 z-[55]"
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
          className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-[50] lg:hidden ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 pt-20">
            <nav className="space-y-6">
              {allMenuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="block text-2xl font-montserrat font-medium text-gray-800 hover:text-[#c84f9b] transition-colors duration-200 py-3 border-b border-gray-100"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Banner */}
      <section className="relative w-full">
        <div className="relative w-full aspect-[21/9] overflow-hidden">
          <Image
            src="/images/donde-dormir-banner.webp"
            alt="Dónde Alojarse en Villa del Dique"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-nunito font-bold mb-4">
                ¿DÓNDE <span className="font-extrabold">ALOJARME?</span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl font-montserrat font-medium max-w-3xl mx-auto">
                Encuentra el alojamiento perfecto para tu estadía en Villa del Dique
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-nunito font-bold text-gray-900 mb-6">
            Tu Hogar en las <span className="text-[#c84f9b]">Sierras</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 font-montserrat leading-relaxed">
            Villa del Dique ofrece una amplia variedad de opciones de alojamiento para todos los gustos y presupuestos.
            Desde camping hasta cabañas de lujo, encuentra el lugar perfecto para descansar y disfrutar de la Perla de
            Calamuchita.
          </p>
        </div>
      </section>

      {/* Accommodation Types */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12">
            {/* Camping */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-[#c84f9b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tent className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-900 mb-3">Camping</h3>
                <p className="text-gray-600 font-montserrat">
                  Conecta con la naturaleza en nuestros espacios de camping equipados con todas las comodidades.
                </p>
              </div>
            </div>

            {/* Cabañas */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-[#c84f9b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-900 mb-3">Cabañas</h3>
                <p className="text-gray-600 font-montserrat">
                  Disfruta de la comodidad y privacidad de nuestras cabañas totalmente equipadas.
                </p>
              </div>
            </div>

            {/* Hoteles */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-[#c84f9b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-900 mb-3">Hoteles</h3>
                <p className="text-gray-600 font-montserrat">
                  Servicios de hotelería con atención personalizada y todas las comodidades.
                </p>
              </div>
            </div>

            {/* Hosterías */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-[#c84f9b] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-nunito font-bold text-gray-900 mb-3">Hosterías</h3>
                <p className="text-gray-600 font-montserrat">
                  Ambiente familiar y acogedor con el encanto tradicional de las sierras cordobesas.
                </p>
              </div>
            </div>
          </div>

          {/* Accommodation Details */}
          <div className="space-y-8">
            {/* Camping Municipal */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <Tent className="h-6 w-6 text-[#c84f9b] mr-3" />
                  <h3 className="text-2xl sm:text-3xl font-nunito font-bold text-gray-900">Camping Municipal</h3>
                </div>
                <p className="text-gray-700 font-montserrat mb-4 leading-relaxed">
                  Nuestro camping municipal ofrece un ambiente natural y familiar, ideal para quienes buscan conectar
                  con la naturaleza sin renunciar a las comodidades básicas. Ubicado estratégicamente cerca del lago y
                  con fácil acceso a todos los atractivos turísticos.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-montserrat">
                  <div>
                    <strong className="text-gray-900">Servicios incluidos:</strong>
                    <ul className="list-disc list-inside text-gray-600 mt-1">
                      <li>Sanitarios y duchas</li>
                      <li>Electricidad</li>
                      <li>Agua potable</li>
                      <li>Seguridad 24hs</li>
                    </ul>
                  </div>
                  <div>
                    <strong className="text-gray-900">Contacto:</strong>
                    <p className="text-gray-600 mt-1">
                      <a
                        href="https://wa.me/5493546519333"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#c84f9b] hover:underline"
                      >
                        +54 3546 519333 (WhatsApp)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cabañas y Alojamientos Privados */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <Home className="h-6 w-6 text-[#c84f9b] mr-3" />
                  <h3 className="text-2xl sm:text-3xl font-nunito font-bold text-gray-900">
                    Cabañas y Alojamientos Privados
                  </h3>
                </div>
                <p className="text-gray-700 font-montserrat mb-4 leading-relaxed">
                  Villa del Dique cuenta con una amplia oferta de cabañas y alojamientos privados que brindan comodidad,
                  privacidad y servicios de calidad. Desde opciones económicas hasta alojamientos de lujo con vistas
                  panorámicas al lago.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 font-montserrat text-center">
                    <strong>Para consultas y reservas de alojamientos privados:</strong>
                    <br />
                    Contacta a la Oficina de Turismo al{" "}
                    <a href="tel:3546528341" className="text-[#c84f9b] hover:underline font-semibold">
                      3546-528341
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Hoteles y Hosterías */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-[#c84f9b] mr-3" />
                  <h3 className="text-2xl sm:text-3xl font-nunito font-bold text-gray-900">Hoteles y Hosterías</h3>
                </div>
                <p className="text-gray-700 font-montserrat mb-4 leading-relaxed">
                  Disfruta de servicios hoteleros de calidad con atención personalizada. Nuestros establecimientos
                  ofrecen desde habitaciones estándar hasta suites con amenities completos, restaurantes y servicios
                  adicionales para una estadía inolvidable.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 font-montserrat text-center">
                    <strong>Información y reservas:</strong>
                    <br />
                    Oficina de Turismo -{" "}
                    <a href="tel:3546528341" className="text-[#c84f9b] hover:underline font-semibold">
                      3546-528341
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-nunito font-bold text-gray-900 mb-8 text-center">
            Consejos para tu <span className="text-[#c84f9b]">Estadía</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-nunito font-bold text-gray-900 mb-3">Temporada Alta</h3>
              <p className="text-gray-700 font-montserrat">
                Durante enero, febrero y feriados largos, te recomendamos reservar con anticipación. La demanda es alta
                y los mejores alojamientos se agotan rápidamente.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-nunito font-bold text-gray-900 mb-3">Qué Traer</h3>
              <p className="text-gray-700 font-montserrat">
                No olvides protector solar, repelente, ropa cómoda para actividades al aire libre y abrigo para las
                noches serranas que pueden ser frescas.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-nunito font-bold text-gray-900 mb-3">Mascotas</h3>
              <p className="text-gray-700 font-montserrat">
                Muchos alojamientos aceptan mascotas. Consulta previamente las políticas y asegúrate de mantener a tu
                mascota siempre controlada y respetando el entorno.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-nunito font-bold text-gray-900 mb-3">Transporte</h3>
              <p className="text-gray-700 font-montserrat">
                Villa del Dique es un pueblo pequeño y caminar es la mejor forma de recorrerlo. Para excursiones,
                consulta sobre servicios de transporte local.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 px-4 bg-[#c84f9b]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-nunito font-bold text-white mb-6">
            ¿Necesitas <span className="font-extrabold">Ayuda?</span>
          </h2>
          <p className="text-lg sm:text-xl text-white font-montserrat mb-8 max-w-3xl mx-auto">
            Nuestro equipo de turismo está disponible para ayudarte a encontrar el alojamiento perfecto según tus
            necesidades y presupuesto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-white">
              <MapPin className="h-5 w-5" />
              <span className="font-montserrat">Oficina de Turismo, Villa del Dique</span>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <Phone className="h-5 w-5" />
              <a href="tel:3546528341" className="font-montserrat hover:underline">
                3546-528341
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#c84f9b] text-white py-8 sm:py-10 md:py-12 px-4 font-montserrat">
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
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
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
              <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4">Turismo</h3>
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
                <li>
                  <Link
                    href="/turistas/lugares-para-visitar"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg"
                  >
                    Lugares para visitar
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4 text-white">Información Turística</h3>
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
