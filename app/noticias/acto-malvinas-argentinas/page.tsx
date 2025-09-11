"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X, Facebook, Calendar, User, ArrowLeft, Share2, Check, Copy } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/Footer"

export default function ActoMalvinasPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [shareStatus, setShareStatus] = useState<"idle" | "copied" | "shared">("idle")

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleShare = async () => {
    const shareData = {
      title: "Acto en conmemoración del Día del Veterano y de los Caídos en la Guerra de Malvinas",
      text: "En la Plazoleta de los Fundadores se realizó un emotivo acto en homenaje a los Veteranos y a los Caídos en la Guerra de Malvinas, en el marco del 2 de abril.",
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
    const title = encodeURIComponent(
      "Acto en conmemoración del Día del Veterano y de los Caídos en la Guerra de Malvinas",
    )
    const text = encodeURIComponent(
      "En la Plazoleta de los Fundadores se realizó un emotivo acto en homenaje a los Veteranos y a los Caídos en la Guerra de Malvinas.",
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
            <span className="text-gray-900">
              Acto en conmemoración del Día del Veterano y de los Caídos en la Guerra de Malvinas
            </span>
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
              Acto en conmemoración del Día del Veterano y de los Caídos en la Guerra de Malvinas
            </h1>

            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">2 de abril de 2024</span>
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
                🇦🇷 HOMENAJE PATRIO: Conmemoración del Día del Veterano y de los Caídos en la Guerra de Malvinas
              </p>
            </div>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-8">
              En la <strong>Plazoleta de los Fundadores</strong> se realizó un emotivo acto en homenaje a los Veteranos
              y a los Caídos en la Guerra de Malvinas, en el marco del <strong>2 de abril</strong>.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La ceremonia contó con la presencia del <strong>intendente municipal Emiliano Torres</strong>, ex
              combatientes, familiares de caídos, autoridades locales, representantes de instituciones educativas,
              alumnos y vecinos de la comunidad.
            </p>

            {/* Video Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-[#16b5d0]">Video: Acto Conmemorativo</span>
              </h3>

              <div className="flex justify-center">
                <div className="relative w-full max-w-md mx-auto bg-black rounded-lg overflow-hidden shadow-lg">
                  <div style={{ aspectRatio: "9/16" }}>
                    <video
                      controls
                      className="w-full h-full object-cover"
                      poster="/acto-malvinas-argentinas.webp"
                      preload="metadata"
                    >
                      <source src="/videos/acto-malvinas-argentinas.mp4" type="video/mp4" />
                      Tu navegador no soporta el elemento de video.
                    </video>
                  </div>

                  {/* Video Caption */}
                  <div className="p-4 bg-white">
                    <p className="text-sm text-gray-600 text-center">
                      <strong>Video oficial:</strong> Acto en conmemoración del Día del Veterano y de los Caídos en la
                      Guerra de Malvinas en Villa del Dique.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="mb-12">
              <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/acto-malvinas-argentinas.webp"
                  alt="Veterano de Malvinas en el acto conmemorativo"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                />
              </div>
              <p className="text-sm text-gray-600 text-center mt-4">
                <strong>Imagen:</strong> Veterano de Malvinas durante el emotivo acto en la Plazoleta de los Fundadores.
              </p>
            </div>

            {/* Content Sections */}
            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                <span className="text-[#16b5d0]">Reconocimiento a los Héroes</span>
              </h2>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Durante el acto se destacó la <strong>valentía de quienes defendieron la soberanía nacional</strong> y
                se reafirmó el reconocimiento permanente hacia los héroes que dieron su vida por la Patria.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#16b5d0] mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Participantes del Acto</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>
                      <strong>Intendente municipal Emiliano Torres</strong>
                    </span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>Ex combatientes de la Guerra de Malvinas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>Familiares de caídos en el conflicto</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>Autoridades locales</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>Representantes de instituciones educativas</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-[#16b5d0] font-bold">•</span>
                    <span>Alumnos y vecinos de la comunidad</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                <span className="text-[#16b5d0]">Memoria y Soberanía</span>
              </h3>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El acto sirvió como un espacio de <strong>reflexión y memoria</strong>, donde la comunidad de Villa del
                Dique se unió para honrar a quienes lucharon por la soberanía argentina en las Islas Malvinas.
              </p>

              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <blockquote className="text-xl text-gray-800 leading-relaxed text-center font-medium italic">
                  "Durante el acto se destacó la valentía de quienes defendieron la soberanía nacional y se reafirmó el
                  reconocimiento permanente hacia los héroes que dieron su vida por la Patria."
                </blockquote>
              </div>
            </section>

            {/* Conclusion */}
            <div className="bg-[#16b5d0]/10 p-8 rounded-lg mt-12">
              <p className="text-2xl text-gray-800 leading-relaxed text-center font-bold">
                <span className="text-[#16b5d0]">Las Malvinas son argentinas</span>
              </p>
              <p className="text-lg text-gray-700 leading-relaxed text-center mt-4">
                Villa del Dique reafirma su compromiso con la memoria de nuestros héroes y la defensa de la soberanía
                nacional.
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
      <Footer />
    </div>
  )
}
