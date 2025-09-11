"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Calendar, ArrowLeft, ExternalLink, Phone, AlertTriangle } from "lucide-react"
import Footer from "@/components/Footer"

export default function CampanaPrevencionIncendiosPage() {
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
      <div className="w-full bg-[#16b5d0] text-white py-2 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm sm:text-base font-medium">Página oficial de la Municipalidad de Villa del Dique</p>
        </div>
      </div>

      <header className="w-full py-2 sm:py-3 px-4 bg-white shadow-sm relative">
        <div className="container mx-auto">
          <div className="hidden lg:flex items-center justify-between">
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

          <div className="flex lg:hidden justify-between items-center">
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

            <button
              onClick={toggleMenu}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 hover:bg-gray-100 rounded-md transition-colors duration-200 z-[60]"
              aria-label="Abrir menú"
            >
              {isMenuOpen ? <X className="h-6 w-6 text-[#16b5d0]" /> : <Menu className="h-6 w-6 text-[#16b5d0]" />}
            </button>
          </div>
        </div>

        {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={toggleMenu} />}

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

      <main className="flex-grow">
        <div className="container mx-auto py-8 px-4 sm:py-12 md:py-16 lg:py-20">
          <Link
            href="/noticias"
            className="inline-flex items-center text-[#16b5d0] hover:text-[#0ea5e9] transition-colors duration-200 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver a Noticias
          </Link>

          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <div className="flex items-center space-x-2 text-[#16b5d0] mb-4">
                <Calendar className="h-5 w-5" />
                <time dateTime="2025-09-10" className="text-sm font-medium">
                  10 de septiembre de 2025
                </time>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Campaña de Prevención de Incendios en Villa del Dique
              </h1>
            </header>

            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/no-al-fuego.jpg"
                alt="Bombero con equipo completo - No desafiemos al fuego"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
                <p className="text-xl text-red-800 font-bold mb-4 flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2" />
                  "Un descuido puede terminar en tragedia."
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Por eso, te invitamos a sumarte a las acciones de prevención de incendios y cuidar entre todos nuestro
                  entorno.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">✅</span>
                  Activemos prevención
                </h2>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">•</span>
                    <span>No hagas asado en zonas prohibidas</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">•</span>
                    <span>No tires colillas de cigarrillo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">•</span>
                    <span>No quemes basura ni restos de poda</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-red-500">•</span>
                    <span>No hagas fogatas</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 my-8 text-center">
                <h3 className="text-2xl font-bold text-orange-800 mb-4 flex items-center justify-center">
                  <span className="mr-2">🔥</span>
                  No desafiemos al fuego
                </h3>
                <p className="text-lg text-gray-700 font-semibold">La responsabilidad de prevenir es de todos.</p>
              </div>

              <div className="bg-red-100 border-2 border-red-300 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                  <Phone className="h-5 w-5 mr-2" />
                  Si ves humo o fuego, llamá de inmediato
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white rounded-lg p-4 shadow">
                    <p className="text-2xl font-bold text-red-600">0800-888-FUEGO</p>
                    <p className="text-sm text-gray-600">(38346)</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <p className="text-2xl font-bold text-red-600">911</p>
                    <p className="text-sm text-gray-600">Emergencias</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow">
                    <p className="text-2xl font-bold text-red-600">100</p>
                    <p className="text-sm text-gray-600">Bomberos</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ver video completo</h3>
                <a
                  href="https://www.instagram.com/reel/DOZFsDZEYwl/?igsh=b2RmczFmZHZzYmZm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#16b5d0] text-white font-semibold rounded-lg hover:bg-[#0ea5e9] transition-colors duration-200"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Ver en Instagram
                </a>
              </div>

              <div className="border-t border-gray-200 pt-8 mt-12">
                <p className="text-gray-600 text-center italic">
                  La prevención de incendios es responsabilidad de todos. Cuidemos juntos nuestro entorno y mantengamos
                  a Villa del Dique segura.
                </p>
              </div>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
