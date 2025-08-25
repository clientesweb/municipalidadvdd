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
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Check,
  Copy,
} from "lucide-react"
import Link from "next/link"

export default function NuevasMedidasSeguridadPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [shareStatus, setShareStatus] = useState<"idle" | "copied" | "shared">("idle")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleShare = async () => {
    const shareData = {
      title: "Nuevas medidas de seguridad en instituciones educativas de Villa del Dique",
      text: "La Municipalidad de Villa del Dique ha implementado nuevas medidas de seguridad en instituciones educativas con videovigilancia y personal especializado.",
      url: window.location.href,
    }

    try {
      // Try Web Share API first (works on mobile devices)
      if (navigator.share) {
        await navigator.share(shareData)
        setShareStatus("shared")
        setTimeout(() => setShareStatus("idle"), 2000)
        return
      }

      // Fallback: Copy to clipboard
      await navigator.clipboard.writeText(window.location.href)
      setShareStatus("copied")
      setTimeout(() => setShareStatus("idle"), 2000)
    } catch (error) {
      // Final fallback: Manual copy
      const textArea = document.createElement("textarea")
      textArea.value = window.location.href
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setShareStatus("copied")
      setTimeout(() => setShareStatus("idle"), 2000)
    }
  }

  const shareOnSocial = (platform: "facebook" | "twitter" | "whatsapp") => {
    const url = encodeURIComponent(window.location.href)
    const title = encodeURIComponent("Nuevas medidas de seguridad en instituciones educativas de Villa del Dique")
    const text = encodeURIComponent(
      "La Municipalidad de Villa del Dique ha implementado nuevas medidas de seguridad en instituciones educativas.",
    )

    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      whatsapp: `https://wa.me/?text=${title}%20${url}`,
    }

    window.open(urls[platform], "_blank", "width=600,height=400")
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
        {/* Breadcrumb Navigation */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-[#16b5d0] transition-colors duration-200">
              Inicio
            </Link>
            <span>/</span>
            <Link href="/noticias" className="hover:text-[#16b5d0] transition-colors duration-200">
              Noticias
            </Link>
            <span>/</span>
            <span className="text-gray-900">Nuevas medidas de seguridad en instituciones educativas</span>
          </nav>
        </div>

        {/* Back Button */}
        <div className="mb-8">
          <Link
            href="/noticias"
            className="inline-flex items-center space-x-2 text-[#16b5d0] hover:text-[#0ea5e9] transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Volver a Noticias</span>
          </Link>
        </div>

        {/* Article */}
        <article className="max-w-4xl mx-auto">
          {/* Article Header */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Nuevas medidas de seguridad en instituciones educativas de Villa del Dique
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">13 de julio de 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="text-sm">Municipalidad de Villa del Dique</span>
              </div>

              {/* Share Button with Dropdown */}
              <div className="relative group">
                <button
                  onClick={handleShare}
                  className="flex items-center space-x-2 text-[#16b5d0] hover:text-[#0ea5e9] transition-colors duration-200 px-3 py-1 rounded-md hover:bg-[#16b5d0]/10"
                >
                  {shareStatus === "copied" ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span className="text-sm">¡Copiado!</span>
                    </>
                  ) : shareStatus === "shared" ? (
                    <>
                      <Check className="h-4 w-4" />
                      <span className="text-sm">¡Compartido!</span>
                    </>
                  ) : (
                    <>
                      <Share2 className="h-4 w-4" />
                      <span className="text-sm">Compartir</span>
                    </>
                  )}
                </button>

                {/* Social Share Dropdown */}
                <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg border p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10 min-w-[160px]">
                  <button
                    onClick={() => shareOnSocial("facebook")}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded flex items-center space-x-2"
                  >
                    <Facebook className="h-4 w-4 text-blue-600" />
                    <span>Facebook</span>
                  </button>
                  <button
                    onClick={() => shareOnSocial("twitter")}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded flex items-center space-x-2"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    <span>X (Twitter)</span>
                  </button>
                  <button
                    onClick={() => shareOnSocial("whatsapp")}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded flex items-center space-x-2"
                  >
                    <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                    <span>WhatsApp</span>
                  </button>
                  <button
                    onClick={handleShare}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded flex items-center space-x-2"
                  >
                    <Copy className="h-4 w-4" />
                    <span>Copiar enlace</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Important Notice */}
            <div className="bg-[#16b5d0]/10 border-l-4 border-[#16b5d0] p-4 mb-8">
              <p className="text-lg font-semibold text-[#16b5d0]">
                🛡️ SEGURIDAD EDUCATIVA: Nuevas medidas de protección en instituciones educativas
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              La Municipalidad de Villa del Dique ha implementado <strong>nuevas medidas de seguridad</strong> en
              nuestras instituciones educativas con el objetivo de proteger a los alumnos, docentes y personal.
            </p>

            {/* Video Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-[#16b5d0]">Video: Medidas de Seguridad</span>
              </h3>

              <div className="flex justify-center">
                <div className="relative w-full max-w-md mx-auto bg-black rounded-lg overflow-hidden shadow-lg">
                  <div style={{ aspectRatio: "9/16" }}>
                    <video
                      controls
                      className="w-full h-full object-cover"
                      poster="/nuevas-medidas-seguridad.jpg"
                      preload="metadata"
                    >
                      <source src="/videos/nuevas-medidas-seguridad.mp4" type="video/mp4" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>

                  {/* Video Caption */}
                  <div className="p-4 bg-white">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Video oficial:</strong> Central de videovigilancia municipal con personal de Protección
                      Civil monitoreando las cámaras de seguridad.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Sections */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                <span className="text-[#16b5d0]">Sistema de Videovigilancia</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Se han instalado <strong>cinco cámaras de videovigilancia</strong> que cubren los ingresos de la Escuela
                Primaria Almirante Brown, el Jardín de Infantes y el Instituto Fray Mamerto Esquiú. Estas cámaras están
                conectadas a la Central de Videovigilancia del municipio, asegurando un monitoreo constante.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#16b5d0] mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Instituciones Cubiertas</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>Escuela Primaria Almirante Brown</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>Jardín de Infantes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>Instituto Fray Mamerto Esquiú</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Próximamente, se incorporará al sistema el <strong>centro educativo Veo Veo</strong>, ampliando así la
                cobertura de seguridad en todas nuestras instituciones educativas.
              </p>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-[#16b5d0]">Refuerzo de Personal de Seguridad</span>
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Se ha sumado <strong>personal de Seguridad Municipal y Protección Civil</strong> para acompañar los
                ingresos y salidas de los alumnos en los turnos mañana y tarde, así como para controlar los horarios de
                clases en la Escuela Primaria.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#16b5d0]">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Personal Actual</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-[#16b5d0] font-bold">•</span>
                      <span>Seguridad Municipal</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#16b5d0] font-bold">•</span>
                      <span>Protección Civil</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0ea5e9]">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Próximas Incorporaciones</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="text-[#0ea5e9] font-bold">•</span>
                      <span>Instituto CENMA</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-[#0ea5e9] font-bold">•</span>
                      <span>Efectivos policiales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-[#16b5d0]">Labor de los Inspectores Municipales</span>
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Estas acciones se complementan con la <strong>labor diaria de los Inspectores Municipales</strong>,
                quienes ordenan y supervisan los ingresos de los alumnos en diferentes horarios, garantizando un
                ambiente seguro y ordenado.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#16b5d0] mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Funciones de Supervisión</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>Control de ingresos y salidas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>Supervisión de horarios de clases</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>Mantenimiento del orden</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-[#16b5d0]">Compromiso con la Seguridad Educativa</span>
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La Municipalidad continuará <strong>incorporando recursos</strong> para fortalecer la seguridad en todas
                las instituciones educativas del municipio, reafirmando nuestro compromiso con la protección de nuestra
                comunidad educativa.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#16b5d0] mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Objetivos de Seguridad</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>Protección integral de estudiantes y personal</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>Monitoreo constante de instalaciones</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>Ambiente educativo seguro y ordenado</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-gray-50 p-8 rounded-lg mt-12">
              <p className="text-xl text-gray-800 leading-relaxed text-center font-medium">
                <strong>Estas medidas representan nuestro compromiso inquebrantable</strong> con la seguridad de
                nuestros estudiantes, docentes y personal educativo. La{" "}
                <strong>protección de nuestra comunidad educativa</strong> es una prioridad fundamental para la
                Municipalidad de Villa del Dique.
              </p>
            </div>
          </div>

          {/* Back to News */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/noticias"
              className="inline-flex items-center space-x-2 bg-[#16b5d0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0ea5e9] transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Ver más noticias</span>
            </Link>
          </div>
        </article>
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
