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
  ArrowLeft,
  TreePine,
  Shield,
  Heart,
  ShoppingBag,
  Clock,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"

export default function RecomendacionesPage() {
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
    { name: "Servicios", href: "/turistas/servicios" },
    { name: "Noticias", href: "/noticias" },
  ]

  const allMenuItems = [...leftMenuItems, ...rightMenuItems]

  return (
    <div className="min-h-screen">
      {/* Header Announcement */}
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
                  className="text-base xl:text-lg font-medium text-gray-800 hover:text-[#c84f9b] transition-colors duration-200 py-2 whitespace-nowrap"
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
                  className="block text-2xl font-medium text-gray-800 hover:text-[#c84f9b] transition-colors duration-200 py-3 border-b border-gray-100"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="w-full bg-gray-50 py-4 px-4">
        <div className="container mx-auto">
          <Link
            href="/turistas"
            className="inline-flex items-center text-[#c84f9b] hover:text-[#a63d7a] transition-colors duration-200 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver a Información Turística
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4">
        <div className="absolute inset-0">
          <Image
            src="/images/panoramica-villa-del-dique.webp"
            alt="Vista panorámica de Villa del Dique"
            fill
            className="object-cover opacity-20"
            sizes="100vw"
          />
        </div>
        <div className="relative container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            RECOMENDACIONES AL TURISTA
          </h1>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-6 sm:p-8 shadow-lg">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-800 mb-6 leading-relaxed font-semibold">
                Bienvenidos a <span className="font-bold text-[#c84f9b]">Villa del Dique</span>, la{" "}
                <span className="font-bold text-[#c84f9b]">Perla de Calamuchita</span>.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-700 leading-relaxed">
                El destino ideal y tu plan perfecto para disfrutar de actividades y entretenimientos, gastronomía, la
                tranquilidad del lago y de la zona rural, la vida al aire libre y la belleza natural de nuestro entorno,
                para toda la familia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="w-full py-8 sm:py-12 px-4 bg-white">
        <div className="container mx-auto text-center">
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Antes de emprender tu aventura, te invitamos a tener en cuenta estas recomendaciones para que tu experiencia
            sea <span className="font-bold text-[#c84f9b]">inolvidable</span>.
          </p>
        </div>
      </section>

      {/* Recommendations Sections */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* 1. Cuidado del entorno natural */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <TreePine className="h-8 w-8 text-green-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">1. Cuidado del entorno natural</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Respetá la flora y fauna local. Evitá alimentar a los animales y pisá solo por los senderos demarcados
                  y señalizados.
                </p>
                <p className="text-lg leading-relaxed">
                  Cuando salgas de paseo, no olvides llevar una bolsa para que tus residuos vuelvan con vos y no queden
                  tirados contaminando el ambiente y el paisaje.
                </p>
              </div>
              <div className="mt-6">
                <Image
                  src="/images/tarde-verano-lago.webp"
                  alt="Tarde de verano en el lago de Villa del Dique"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* 2. Seguridad en el lago */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">2. Seguridad en el lago</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Si vas a nadar, hacelo solo en áreas habilitadas y señalizadas. Si lo vas a hacer solo, avisá siempre
                  a tu entorno en qué lugar.
                </p>
                <p className="text-lg leading-relaxed">
                  Utilizá siempre el chaleco salvavidas si vas a navegar en lancha, moto de agua, kayak o paddle surf.
                </p>
                <p className="text-lg leading-relaxed">
                  Si vas a usar embarcaciones, asegurate de cumplir con la normativa de seguridad náutica vigente en la
                  región.
                </p>
              </div>
              <div className="mt-6">
                <Image
                  src="/images/vista-aerea-villa-del-dique.jpeg"
                  alt="Vista aérea de Villa del Dique y su lago"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* 3. Disfrutá responsablemente */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-red-100 p-3 rounded-full mr-4">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">3. Disfrutá responsablemente</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Los fogones están prohibidos en épocas de sequía. Consultá la normativa para evitar riesgos de
                  incendio.
                </p>
                <p className="text-lg leading-relaxed">
                  Respetá las normativas de pesca deportiva: consultá por permisos, temporadas y cuotas establecidas.
                </p>
                <a
                  href="https://ambiente.cba.gov.ar/tramites-y-servicios/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[#c84f9b] hover:text-[#a63d7a] transition-colors duration-200 font-medium text-lg"
                >
                  Ver normativas de pesca <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
              <div className="mt-6">
                <Image
                  src="/images/vista-aerea-cerro-cruz.jpeg"
                  alt="Vista aérea del Cerro de la Cruz en Villa del Dique"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* 4. Apoyá la economía local */}
            <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <ShoppingBag className="h-8 w-8 text-purple-600" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">4. Apoyá la economía local</h2>
              </div>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg leading-relaxed">
                  Descubrí nuestras ferias de artesanías y productos regionales. Cada compra ayuda a las familias de
                  nuestra comunidad.
                </p>
                <p className="text-lg leading-relaxed">
                  Conocé nuestros bares, restaurantes y cafeterías locales. Ofrecemos platos tradicionales elaborados
                  con ingredientes frescos.
                </p>
              </div>
              <div className="mt-6">
                <Image
                  src="/images/cartel-villa-del-dique.jpeg"
                  alt="Cartel de bienvenida a Villa del Dique"
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Información Útil */}
      <section className="w-full py-12 sm:py-16 md:py-20 px-4 bg-[#c84f9b]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Información Útil</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 sm:p-12">
              <div className="text-center mb-8">
                <h3 className="text-3xl sm:text-4xl font-bold text-[#c84f9b] mb-4">Oficina de Información Turística</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#c84f9b] p-2 rounded-full">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Dirección</h4>
                      <p className="text-lg text-gray-700">Entre Av. Carril de los chilenos y Av. de los Navegantes</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-[#c84f9b] p-2 rounded-full">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Horarios</h4>
                      <p className="text-lg text-gray-700">
                        Lunes a sábado: 8 a 20 hs
                        <br />
                        Domingo: 8 a 13 hs
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-[#c84f9b] p-2 rounded-full">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h4>
                      <Link
                        href="tel:3546528341"
                        className="text-lg text-[#c84f9b] hover:text-[#a63d7a] transition-colors duration-200 font-medium"
                      >
                        3546-528341
                      </Link>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-lg text-gray-700 text-center">
                      <span className="font-bold text-[#c84f9b]">¡Estamos aquí para ayudarte!</span>
                      <br />
                      Consultá por actividades, alojamientos, restaurantes y todo lo que necesites para disfrutar al
                      máximo tu estadía.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-12 sm:py-16 px-4 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            ¡Explorá todo lo que Villa del Dique tiene para ofrecerte!
          </h2>
          <Link
            href="/turistas"
            className="inline-flex items-center bg-[#c84f9b] text-white font-bold text-xl px-8 py-4 rounded-full shadow-lg hover:bg-[#a63d7a] hover:scale-105 transition-all duration-200"
          >
            <ArrowLeft className="h-6 w-6 mr-2" />
            Volver a Información Turística
          </Link>
        </div>
      </section>

      {/* Footer */}
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
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#c84f9b]">Información Turística</h3>
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

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelGuide",
            name: "Recomendaciones al Turista - Villa del Dique",
            description: "Guía oficial con recomendaciones para turistas en Villa del Dique, la Perla de Calamuchita",
            url: "https://villadeldique.gob.ar/turistas/recomendaciones",
            author: {
              "@type": "Organization",
              name: "Municipalidad de Villa del Dique",
            },
            publisher: {
              "@type": "Organization",
              name: "Municipalidad de Villa del Dique",
              logo: {
                "@type": "ImageObject",
                url: "https://villadeldique.gob.ar/images/logo-oficial.webp",
              },
            },
            about: {
              "@type": "Place",
              name: "Villa del Dique",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Villa del Dique",
                addressRegion: "Córdoba",
                addressCountry: "AR",
              },
            },
            mainEntity: [
              {
                "@type": "Question",
                name: "¿Cómo cuidar el entorno natural en Villa del Dique?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Respetá la flora y fauna local. Evitá alimentar a los animales y pisá solo por los senderos demarcados. Llevá una bolsa para tus residuos.",
                },
              },
              {
                "@type": "Question",
                name: "¿Qué medidas de seguridad debo tomar en el lago?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Nadá solo en áreas habilitadas, usá chaleco salvavidas en embarcaciones y cumplí con la normativa náutica vigente.",
                },
              },
            ],
          }),
        }}
      />
    </div>
  )
}
