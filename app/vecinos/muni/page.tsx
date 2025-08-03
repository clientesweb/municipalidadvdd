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
  Users,
  Building2,
  Eye,
  Target,
  User,
  Briefcase,
} from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function MuniPage() {
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

  // Autoridades municipales
  const autoridades = {
    intendente: {
      nombre: "Emiliano Torres",
      cargo: "Intendente Municipal",
      imagen: "/images/intendente-emiliano-torres.webp",
    },
    secretarios: [
      {
        nombre: "Lourdes Toloza",
        cargo: "Secretaria de Obras Públicas",
        area: "Obras Públicas",
        icon: Building2,
      },
      {
        nombre: "Gisela Moroni",
        cargo: "Secretaria de Economía y Finanzas",
        area: "Economía y Finanzas",
        icon: Briefcase,
      },
      {
        nombre: "Gustavo Cuello",
        cargo: "Secretario de Salud y Bienestar Social",
        area: "Salud y Bienestar Social",
        icon: Users,
      },
      {
        nombre: "Adrián Segura",
        cargo: "Secretario de Turismo, Cultura y Deportes",
        area: "Turismo, Cultura y Deportes",
        icon: Users,
      },
      {
        nombre: "Tobias Barco",
        cargo: "Secretario de Comunicación",
        area: "Comunicación",
        icon: Users,
      },
    ],
  }

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
            LA MUNI
          </h1>
          <div className="w-24 h-1 bg-[#16b5d0] mx-auto mb-6"></div>
          <p className="text-xl font-montserrat text-gray-600 max-w-3xl mx-auto">
            Conoce las autoridades municipales comprometidas con el progreso y desarrollo de Villa del Dique
          </p>
        </div>

        {/* Intendente Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <User className="h-6 w-6" />
              <h2 className="text-2xl sm:text-3xl font-nunito font-bold">INTENDENTE MUNICIPAL</h2>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-b-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={autoridades.intendente.imagen || "/placeholder.svg"}
                  alt={`${autoridades.intendente.nombre} - Intendente de Villa del Dique`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-nunito font-bold text-gray-900 mb-4">
                  {autoridades.intendente.nombre}
                </h3>
                <p className="text-xl font-nunito text-[#16b5d0] font-semibold mb-6">{autoridades.intendente.cargo}</p>
                <p className="text-gray-600 font-montserrat leading-relaxed">
                  Líder del gobierno municipal de Villa del Dique, comprometido con el desarrollo integral de nuestra
                  comunidad a través de políticas inclusivas y el fortalecimiento del turismo como motor económico.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Secretarios Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6" />
              <h2 className="text-2xl sm:text-3xl font-nunito font-bold">GABINETE MUNICIPAL</h2>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-b-lg overflow-hidden p-8 lg:p-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {autoridades.secretarios.map((secretario, index) => {
                const IconComponent = secretario.icon
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#16b5d0]/10 to-[#0ea5e9]/10 p-6 rounded-lg border-l-4 border-[#16b5d0] hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 bg-[#16b5d0]/20 rounded-full flex items-center justify-center">
                        <IconComponent className="h-5 w-5 text-[#16b5d0]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-nunito font-bold text-gray-900">{secretario.nombre}</h4>
                      </div>
                    </div>
                    <p className="text-sm font-nunito font-semibold text-[#16b5d0] mb-2">{secretario.area}</p>
                    <p className="text-sm font-montserrat text-gray-600">{secretario.cargo}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Visión y Misión */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Visión */}
          <section className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6">
              <div className="flex items-center space-x-3">
                <Eye className="h-6 w-6" />
                <h2 className="text-2xl font-nunito font-bold">VISIÓN</h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg font-montserrat text-gray-700 leading-relaxed">
                Ser tierra de oportunidades de formación y de trabajo y que el progreso se sustente en la{" "}
                <strong>inclusión</strong>, en el <strong>desarrollo humano</strong> y en la{" "}
                <strong>actividad turística</strong>.
              </p>
            </div>
          </section>

          {/* Misión */}
          <section className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6">
              <div className="flex items-center space-x-3">
                <Target className="h-6 w-6" />
                <h2 className="text-2xl font-nunito font-bold">MISIÓN</h2>
              </div>
            </div>
            <div className="p-8">
              <p className="text-lg font-montserrat text-gray-700 leading-relaxed">
                Promovemos <strong>políticas de inclusión</strong> que propicien el acceso a la educación, la salud y el
                trabajo en pos del progreso social y económico de Villa del Dique. Desarrollamos e impulsamos la{" "}
                <strong>actividad turística todo el año</strong>, aplicando políticas con el objetivo de mejorar la
                infraestructura y generar inversiones.
              </p>
            </div>
          </section>
        </div>

        {/* Compromiso Section */}
        <section className="mt-12 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-nunito font-bold text-gray-900 mb-6 text-center">Nuestro Compromiso</h3>
          <div className="grid md:grid-cols-3 gap-6 text-center font-montserrat">
            <div className="space-y-3">
              <div className="w-16 h-16 bg-[#16b5d0]/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-[#16b5d0]" />
              </div>
              <h4 className="text-lg font-nunito font-semibold text-gray-900">Inclusión Social</h4>
              <p className="text-gray-600">
                Garantizamos el acceso equitativo a servicios de educación, salud y oportunidades laborales para todos
                los vecinos.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-[#16b5d0]/10 rounded-full flex items-center justify-center mx-auto">
                <Building2 className="h-8 w-8 text-[#16b5d0]" />
              </div>
              <h4 className="text-lg font-nunito font-semibold text-gray-900">Desarrollo de Infraestructura</h4>
              <p className="text-gray-600">
                Invertimos en obras públicas que mejoren la calidad de vida y fortalezcan el crecimiento económico
                local.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-16 h-16 bg-[#16b5d0]/10 rounded-full flex items-center justify-center mx-auto">
                <Eye className="h-8 w-8 text-[#16b5d0]" />
              </div>
              <h4 className="text-lg font-nunito font-semibold text-gray-900">Turismo Sustentable</h4>
              <p className="text-gray-600">
                Promovemos un turismo responsable que genere empleo y preserve nuestros recursos naturales y culturales.
              </p>
            </div>
          </div>
        </section>

        {/* Manifiesto Section */}
        <section className="mt-12">
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="manifiesto" className="border-none">
                <AccordionTrigger className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-6 px-8 hover:no-underline [&[data-state=open]>svg]:rotate-180">
                  <div className="flex items-center space-x-3">
                    <Target className="h-6 w-6" />
                    <h2 className="text-2xl sm:text-3xl font-nunito font-bold">MANIFIESTO GESTIÓN EMILIANO TORRES</h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="p-8 lg:p-12">
                  <div className="prose prose-lg max-w-none font-montserrat text-gray-700 leading-relaxed">
                    <p className="text-lg mb-6">
                      El pueblo que soñamos, es ese que nos convoca día a día a construirlo entre todos. Como sociedad,
                      estamos en un momento decisivo. Hoy más que nunca, tenemos el desafío de construir una comunidad
                      fuerte, próspera, equitativa e inclusiva. Un pueblo en el que podamos convivir con esperanza y de
                      manera fraterna y que, cuando lo necesitemos, sepamos que vamos a encontrar la mano tendida de
                      nuestros vecinos.
                    </p>

                    <p className="text-lg mb-6">
                      Es esa la Villa que deseamos y por la que apostamos: la que genere trabajo de calidad, la que nos
                      acompañe con más y mejor salud y educación, la que nos invite a construir en este día y cada día,
                      el progreso para todos sobre los pilares del orden, la seguridad, el desarrollo productivo y el
                      cuidado del medio ambiente.
                    </p>

                    <p className="text-lg mb-6">
                      Queremos que Villa del Dique sea ejemplo de trabajo en equipo, inclusión, identidad, participación
                      y sostenibilidad. Juntos, vamos a construir un futuro donde cada vecino se sienta parte del
                      progreso, donde el desarrollo sea humano, inclusivo y ecológicamente responsable. El camino al
                      futuro está en nuestras manos y en nuestra capacidad de soñar y construirlo juntos.
                    </p>

                    <p className="text-lg font-semibold text-[#16b5d0] mb-0">
                      Este es nuestro norte, vamos juntos con compromiso a construir la Villa del Dique que queremos.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
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
                width={160}
                height={160}
                className="h-20 sm:h-24 md:h-28 w-auto object-contain"
              />
              <p className="text-lg sm:text-xl font-nunito font-semibold text-center sm:text-center lg:text-left">
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
                <ul className="space-y-2 font-montserrat">
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
              <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4">Institucional</h3>
              <ul className="space-y-2 font-montserrat">
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
              <h3 className="text-xl sm:text-2xl font-nunito font-bold mb-4">Contacto</h3>
              <div className="space-y-3 font-montserrat">
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
          <div className="border-t border-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center space-y-2 font-montserrat">
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
