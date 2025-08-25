"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Calendar, ArrowRight } from "lucide-react"
import Footer from "@/components/Footer"

export default function NoticiasPage() {
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
                  width={350} // Increased width
                  height={140} // Increased height
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain" // Increased size classes
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
                  width={350} // Increased width
                  height={140} // Increased height
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain" // Increased size classes
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

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8 px-4 sm:py-12 md:py-16 lg:py-20">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">Noticias</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre las últimas novedades y acontecimientos de Villa del Dique
          </p>
        </div>

        {/* Featured News */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Noticia Destacada</h2>
          <Link href="/noticias/nueva-maquinaria-vial" className="group">
            <article className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 sm:h-80 lg:h-96">
                  <Image
                    src="/images/incoporacion-maquinaria.webp"
                    alt="Villa del Dique suma nueva maquinaria para el mantenimiento vial"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center space-x-2 text-[#16b5d0] mb-4">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">27 de julio de 2025</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#16b5d0] transition-colors duration-200">
                    Villa del Dique suma nueva maquinaria para el mantenimiento vial
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    La Municipalidad incorporó una moderna motoniveladora a su parque automotor para mejorar los
                    servicios públicos y optimizar los trabajos de mantenimiento vial.
                  </p>
                  <div className="flex items-center text-[#16b5d0] font-semibold group-hover:text-[#0ea5e9] transition-colors duration-200">
                    <span>Leer más</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </section>

        {/* Regular News */}
        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Más Noticias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/noticias/nuevas-medidas-seguridad-instituciones-educativas" className="group">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/nuevas-medidas-seguridad.jpg"
                    alt="Nuevas medidas de seguridad en instituciones educativas de Villa del Dique"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-[#16b5d0] mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">13 de julio de 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#16b5d0] transition-colors duration-200">
                    Nuevas medidas de seguridad en instituciones educativas de Villa del Dique
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    La Municipalidad ha implementado nuevas medidas de seguridad en nuestras instituciones educativas
                    con el objetivo de proteger a los alumnos, docentes y personal...
                  </p>
                  <div className="flex items-center text-[#16b5d0] font-semibold text-sm group-hover:text-[#0ea5e9] transition-colors duration-200">
                    <span>Leer más</span>
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/noticias/jornada-limpieza-nuestras-costas" className="group">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/limpieza-nuestras-costas.webp"
                    alt="Jornada de Limpieza en Nuestras Costas"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-[#16b5d0] mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">13 de junio de 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#16b5d0] transition-colors duration-200">
                    Jornada de Limpieza en Nuestras Costas
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Hemos dado un paso importante en la preservación de nuestro entorno con una jornada de limpieza en
                    las costas, llevada adelante por nuestros empleados municipales...
                  </p>
                  <div className="flex items-center text-[#16b5d0] font-semibold text-sm group-hover:text-[#0ea5e9] transition-colors duration-200">
                    <span>Leer más</span>
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/noticias/homenaje-teniente-mario-victor-nivoli" className="group">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/homenaje-teniente-mario-victor-nivoli.webp"
                    alt="Homenaje al Teniente Mario Víctor Nivoli"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-[#16b5d0] mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">13 de mayo de 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#16b5d0] transition-colors duration-200">
                    Homenaje al Teniente Mario Víctor Nivoli
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Rendimos homenaje a la memoria del Teniente Mario Víctor Nivoli, cuyo coraje y sacrificio en las
                    Islas Malvinas continúan inspirándonos como comunidad...
                  </p>
                  <div className="flex items-center text-[#16b5d0] font-semibold text-sm group-hover:text-[#0ea5e9] transition-colors duration-200">
                    <span>Leer más</span>
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/noticias/acto-malvinas-argentinas" className="group">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/acto-malvinas-argentinas.webp"
                    alt="Acto en conmemoración del Día del Veterano y de los Caídos en la Guerra de Malvinas"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-[#16b5d0] mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">2 de abril de 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#16b5d0] transition-colors duration-200">
                    Acto en conmemoración del Día del Veterano y de los Caídos en la Guerra de Malvinas
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    En la Plazoleta de los Fundadores se realizó un emotivo acto en homenaje a los Veteranos y a los
                    Caídos en la Guerra de Malvinas...
                  </p>
                  <div className="flex items-center text-[#16b5d0] font-semibold text-sm group-hover:text-[#0ea5e9] transition-colors duration-200">
                    <span>Leer más</span>
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </article>
            </Link>

            <Link href="/noticias/adoquinado-plaza-estudiante" className="group">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/avanza-adoquinado.webp"
                    alt="Avanza el adoquinado de la Plaza del Estudiante"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-[#16b5d0] mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">25 de marzo de 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#16b5d0] transition-colors duration-200">
                    Avanza el adoquinado de la Plaza del Estudiante
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    La Municipalidad informa que se encuentra en plena ejecución la obra de adoquinado en la Plaza del
                    Estudiante, mejorando la circulación peatonal y vial...
                  </p>
                  <div className="flex items-center text-[#16b5d0] font-semibold text-sm group-hover:text-[#0ea5e9] transition-colors duration-200">
                    <span>Leer más</span>
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </article>
            </Link>

            {/* Avanzando Juntos news article */}
            <Link href="/noticias/avanzando-juntos" className="group">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/avanzando-juntos.webp"
                    alt="Avanzando juntos hacia un futuro mejor en Villa del Dique"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-[#16b5d0] mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">16 de marzo de 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#16b5d0] transition-colors duration-200">
                    Avanzando juntos hacia un futuro mejor en Villa del Dique
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    La gestión municipal informa los avances logrados en el marco del plan de obras públicas, incluyendo
                    infraestructura educativa, espacios verdes y seguridad ciudadana...
                  </p>
                  <div className="flex items-center text-[#16b5d0] font-semibold text-sm group-hover:text-[#0ea5e9] transition-colors duration-200">
                    <span>Leer más</span>
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </article>
            </Link>

            {/* Casa de Estudiantes news article */}
            <Link href="/noticias/casa-estudiantes-cordoba" className="group">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/casa-de-estudiantes-villa-del-dique-en-c-rdoba-cap.png"
                    alt="Villa del Dique ya cuenta con su Casa de Estudiantes en Córdoba Capital"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-[#16b5d0] mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">7 de febrero de 2024</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#16b5d0] transition-colors duration-200">
                    Villa del Dique ya cuenta con su Casa de Estudiantes en Córdoba Capital
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    La Municipalidad anuncia con gran satisfacción la concreción de la Casa de Estudiantes en Córdoba
                    Capital, un espacio destinado a brindar apoyo a los jóvenes...
                  </p>
                  <div className="flex items-center text-[#16b5d0] font-semibold text-sm group-hover:text-[#0ea5e9] transition-colors duration-200">
                    <span>Leer más</span>
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </article>
            </Link>

            {/* Controles de Tránsito: Circular en regla, una tarea de todos */}
            <Link href="/noticias/controles-de-transito" className="group">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/joenada-transito.webp"
                    alt="La Municipalidad de Villa del Dique, junto a la Policía de la Provincia de Córdoba, continúa fortaleciendo su compromiso con la seguridad"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-[#16b5d0] mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">21 de julio de 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#16b5d0] transition-colors duration-200">
                    Controles de Tránsito: Circular en regla, una tarea de todos
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    La Municipalidad de Villa del Dique, junto a la Policía de la Provincia de Córdoba, continúa
                    fortaleciendo su compromiso con la seguridad...
                  </p>
                  <div className="flex items-center text-[#16b5d0] font-semibold text-sm group-hover:text-[#0ea5e9] transition-colors duration-200">
                    <span>Leer más</span>
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </article>
            </Link>

            {/* Villa del Dique No Para */}
            <Link href="/noticias/villa-del-dique-no-para" className="group">
              <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48">
                  <Image
                    src="/images/villa-del-dique-no-para.webp"
                    alt="Villa del Dique No Para: Avances de Obras Públicas Durante el Receso Invernal"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 text-[#16b5d0] mb-3">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">8 de julio de 2025</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#16b5d0] transition-colors duration-200">
                    Villa del Dique No Para: Avances de Obras Públicas Durante el Receso Invernal
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    El Municipio continúa ejecutando importantes obras en distintos puntos de la localidad durante el
                    receso invernal.
                  </p>
                  <div className="flex items-center text-[#16b5d0] font-semibold text-sm group-hover:text-[#0ea5e9] transition-colors duration-200">
                    <span>Leer más</span>
                    <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </article>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
