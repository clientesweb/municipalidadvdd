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
  Clock,
  Users,
  Mountain,
  Bike,
  Camera,
} from "lucide-react"
import Link from "next/link"

export default function Circuitos() {
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
    { name: "Circuitos", href: "/turistas/circuitos", active: true },
    { name: "Servicios", href: "/vecinos/servicios" },
    { name: "Noticias", href: "/noticias" },
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
                  className={`text-base xl:text-lg font-montserrat font-medium transition-colors duration-200 py-2 whitespace-nowrap ${
                    item.active ? "text-[#c84f9b] border-b-2 border-[#c84f9b]" : "text-gray-800 hover:text-[#c84f9b]"
                  }`}
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
            <span className="text-[#c84f9b] font-medium">Circuitos</span>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative w-full">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src="/images/circuitos-banner.webp"
            alt="Circuitos Villa del Dique"
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
            <h1 className="text-4xl sm:text-5xl font-nunito font-bold text-gray-900 mb-6">Circuitos</h1>
            <p className="text-lg font-montserrat text-gray-700 max-w-3xl mx-auto">
              Descubre Villa del Dique a través de sus circuitos y senderos. Desde caminatas familiares hasta trekkings
              desafiantes, cada ruta te permitirá explorar la belleza natural y la rica historia de nuestra región.
            </p>
          </section>

          {/* El Camino de los Cuatro Vados - La Sierrita */}
          <article className="mb-16 bg-white rounded-lg shadow-md border-l-4 border-[#c84f9b] p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <Mountain className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-2xl sm:text-3xl font-nunito font-bold text-gray-900">
                El Carril de los Chilenos - La Sierrita
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 font-montserrat">
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2 text-[#c84f9b]" />
                <span>
                  <strong>Apto para:</strong> Todo público
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2 text-[#c84f9b]" />
                <span>
                  <strong>Extensión:</strong> 7 km
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mountain className="h-5 w-5 mr-2 text-[#c84f9b]" />
                <span>
                  <strong>Dificultad:</strong> Baja/Media
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <span>
                  <strong>Tipo:</strong> Caminata - Bicicleta - Auto
                </span>
              </div>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg mb-6 font-montserrat">
              <p className="text-pink-800">
                <strong>Trekking Guiado Opcional:</strong> consultar días y horarios en Oficina de Turismo
              </p>
            </div>

            <p className="text-gray-700 font-montserrat leading-relaxed mb-4">
              Este recorrido te lleva a descubrir la fascinante historia de "La Sierrita", explorando los vestigios de
              sus primeros habitantes, su entrañable escuelita rural y las antiguas moradas que aún se conservan.
            </p>

            <p className="text-gray-700 font-montserrat leading-relaxed mb-6">
              Además, te sumergirás en la rica flora y fauna autóctonas del lugar, mientras sigues los pasos del General
              San Martín por estas tierras. Los emblemáticos "carriles" se convierten en puntos estratégicos para el
              descanso y la hidratación, permitiéndote disfrutar plenamente de la experiencia.
            </p>

            <div className="relative w-full h-64 rounded-lg overflow-hidden my-8">
              <Image
                src="/images/circuito-la-sierrita.webp"
                alt="Circuito La Sierrita - Paisaje rural con ganado y arroyo"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </article>

          {/* Circuito del Embalse */}
          <article className="mb-16 bg-white rounded-lg shadow-md border-l-4 border-[#c84f9b] p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <Bike className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-2xl sm:text-3xl font-nunito font-bold text-gray-900">Circuito del Perilago</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 font-montserrat">
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2 text-[#c84f9b]" />
                <span>
                  <strong>Extensión:</strong> 40 km
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2 text-[#c84f9b]" />
                <span>
                  <strong>En auto:</strong> 2 horas
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <Bike className="h-5 w-5 mr-2 text-[#c84f9b]" />
                <span>
                  <strong>En bici:</strong> 4 horas
                </span>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg mb-6 font-montserrat">
              <p className="text-yellow-800">
                <strong>⚠️ Importante:</strong> Tiene partes de ripio y otras de asfalto, por lo que es{" "}
                <strong>recomendable circular con precaución</strong>.
              </p>
            </div>

            <p className="text-gray-700 font-montserrat leading-relaxed mb-4">
              Esta hermosa ruta bordea el Embalse del Río Tercero, ofreciendo un recorrido encantador para disfrutar de
              la naturaleza y sus impresionantes vistas panorámicas. A lo largo del camino, tendrás la oportunidad de
              explorar las diversas localidades del departamento de Calamuchita que se encuentran a su alrededor.
            </p>

            <p className="text-gray-700 font-montserrat leading-relaxed mb-6">
              <strong>El recorrido inicia en Villa del Dique</strong>, pasando por Villa Rumipal, San Ignacio, Amboy,
              Amancay, Villa Quillinzo, La Cruz, Embalse, retornando a Villa del Dique.
            </p>

            <div className="relative w-full h-64 rounded-lg overflow-hidden my-8">
              <Image
                src="/images/circuito-perilago.webp"
                alt="Circuito del Perilago - Vista panorámica del embalse con islas"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </article>

          {/* Circuitos en Bicicleta */}
          <article className="mb-16 bg-white rounded-lg shadow-md border-l-4 border-[#c84f9b] p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <Bike className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-2xl sm:text-3xl font-nunito font-bold text-gray-900">Circuitos en Bicicleta</h2>
            </div>

            <div className="space-y-8 font-montserrat">
              {/* Dificultad Baja */}
              <div className="border-l-4 border-green-500 bg-green-50 p-6 rounded-r-lg">
                <h3 className="text-xl font-nunito font-bold text-green-900 mb-4 flex items-center">
                  <Mountain className="h-6 w-6 mr-2" />
                  Dificultad Baja
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    • <strong>Recorrido Céntrico / Recorrido Casco Histórico</strong>
                  </li>
                  <li>
                    • <strong>Recorrido Costero</strong>
                  </li>
                </ul>
              </div>

              {/* Dificultad Media */}
              <div className="border-l-4 border-yellow-500 bg-yellow-50 p-6 rounded-r-lg">
                <h3 className="text-xl font-nunito font-bold text-yellow-900 mb-2 flex items-center">
                  <Mountain className="h-6 w-6 mr-2" />
                  Dificultad Media
                </h3>
                <ul className="text-gray-700 space-y-2">
                  <li>
                    • <strong>Vuelta al Cerro</strong>
                  </li>
                  <li>
                    • <strong>Playa 3 de Octubre</strong>
                  </li>
                  <li>
                    • <strong>La Sierrita</strong>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative w-full h-64 rounded-lg overflow-hidden my-8">
              <Image
                src="/images/circuitos-en-bicicleta.webp"
                alt="Circuitos en Bicicleta - Bicicleta junto al lago"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </article>

          {/* Ascenso al Cerro de la Cruz */}
          <article className="mb-16 bg-white rounded-lg shadow-md border-l-4 border-[#c84f9b] p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <Mountain className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-2xl sm:text-3xl font-nunito font-bold text-gray-900">Ascenso al Cerro de la Cruz</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 font-montserrat">
              <div className="flex items-center text-gray-600">
                <Mountain className="h-5 w-5 mr-2 text-[#c84f9b]" />
                <span>
                  <strong>Dificultad:</strong> Alta
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2 text-[#c84f9b]" />
                <span>
                  <strong>Duración:</strong> 2 horas
                </span>
              </div>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg mb-6 font-montserrat">
              <p className="text-pink-800">
                <strong>Trekking Guiado Opcional:</strong> consultar días y horarios en Oficina de Turismo
              </p>
            </div>

            <p className="text-gray-700 font-montserrat leading-relaxed mb-6">
              <strong>Se inicia desde la base del cerro, calle Hernán Cortez por Plaza Mateo Sferco</strong>
            </p>

            <p className="text-gray-700 font-montserrat leading-relaxed mb-6">
              Un ascenso exigente que recompensa con vistas panorámicas inigualables.
            </p>

            <div className="relative w-full h-64 rounded-lg overflow-hidden my-8">
              <Image
                src="/images/circuito-subida-al-cerro.webp"
                alt="Ascenso al Cerro de la Cruz - Vista panorámica desde el cerro"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </article>

          {/* Sendero de la Costa */}
          <article className="mb-16 bg-white rounded-lg shadow-md border-l-4 border-[#c84f9b] p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <MapPin className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-2xl sm:text-3xl font-nunito font-bold text-gray-900">Sendero de la Costa</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 font-montserrat">
              <div className="flex items-center text-gray-600">
                <Mountain className="h-5 w-5 mr-2 text-[#c84f9b]" />
                <span>
                  <strong>Dificultad:</strong> Media
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2 text-[#c84f9b]" />
                <span>
                  <strong>Duración:</strong> 1 hora y media
                </span>
              </div>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg mb-6 font-montserrat">
              <p className="text-pink-800">
                <strong>Trekking Guiado Opcional:</strong> consultar días y horarios en Oficina de Turismo
              </p>
            </div>

            <p className="text-gray-700 font-montserrat leading-relaxed mb-6">
              <strong>Se inicia desde el cartel VILLA DEL DIQUE</strong>, en el ingreso del pueblo.
            </p>

            <p className="text-gray-700 font-montserrat leading-relaxed mb-6">
              Disfrutá la costa como nunca antes, en este recorrido imperdible.
            </p>

            {/* Espacio para imagen */}
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center my-8">
              <div className="text-center text-gray-500 font-montserrat">
                <Camera className="h-12 w-12 mx-auto mb-2" />
                <p>Imagen del Sendero de la Costa</p>
              </div>
            </div>
          </article>

          {/* Recorrido por el Casco Histórico */}
          <article className="mb-16 bg-white rounded-lg shadow-md border-l-4 border-[#c84f9b] p-6 sm:p-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-2xl sm:text-3xl font-nunito font-bold text-gray-900">
                Recorrido por el Casco Histórico
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6 font-montserrat">
              <div className="flex items-center text-gray-600">
                <Users className="h-5 w-5 mr-2 text-[#c84f9b]" />
                <span>
                  <strong>Apto para:</strong> Todo público
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-5 w-5 mr-2 text-[#c84f9b]" />
                <span>
                  <strong>Duración:</strong> 1 hora
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <Mountain className="h-5 w-5 mr-2 text-[#c84f9b]" />
                <span>
                  <strong>Dificultad:</strong> Baja
                </span>
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2 text-[#c84f9b]" />
                <span>
                  <strong>Extensión:</strong> 3 km
                </span>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6 font-montserrat">
              <p className="text-blue-800">
                <strong>Caminata Guiada</strong>
                <br />
                <strong>Opcional: Intérpretes de Lengua de señas</strong>
              </p>
            </div>

            <p className="text-gray-700 font-montserrat leading-relaxed mb-4">
              Un paseo por los edificios y lugares que marcaron la historia del pueblo desde su fundación.
            </p>

            {/* Espacio para imagen */}
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center my-8">
              <div className="text-center text-gray-500 font-montserrat">
                <Camera className="h-12 w-12 mx-auto mb-2" />
                <p>Imagen del Casco Histórico</p>
              </div>
            </div>
          </article>

          {/* Recomendaciones Generales */}
          <section className="mb-12 bg-gradient-to-r from-[#c84f9b] to-pink-600 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl sm:text-3xl font-nunito font-bold mb-6">Recomendaciones Generales</h2>

            <div className="space-y-4 font-montserrat">
              <p className="text-lg font-medium">
                <strong>En todos los casos llevar:</strong>
              </p>
              <ul className="text-white space-y-2 text-base">
                <li>
                  • <strong>Ropa cómoda y calzado adecuado</strong>
                </li>
                <li>
                  • <strong>Gorra y protector solar</strong>
                </li>
                <li>
                  • <strong>Agua fría</strong>
                </li>
                <li>
                  • <strong>Frutas</strong> para comer durante los recorridos
                </li>
              </ul>

              <div className="bg-white bg-opacity-20 p-4 rounded-lg mt-6">
                <p className="text-white">
                  <strong>📍 Para obtener más información o solicitar mapa de los recorridos</strong> dirigirse a la{" "}
                  <strong>Oficina de Turismo</strong> ubicada en el ingreso de la localidad.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-[#c84f9b] to-pink-600 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-nunito font-bold mb-4">¿Listo para la aventura?</h3>
              <p className="text-lg font-montserrat mb-6">
                Descubre más sobre Villa del Dique y planifica tu visita completa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/turistas/donde-alojarme"
                  className="bg-white text-[#c84f9b] font-montserrat font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  ¿Dónde alojarme?
                </Link>
                <Link
                  href="/turistas/donde-comer"
                  className="bg-white text-[#c84f9b] font-montserrat font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  ¿Dónde comer?
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
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-medium"
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
