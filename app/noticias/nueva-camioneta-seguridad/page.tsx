"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Calendar, ArrowLeft, ExternalLink } from "lucide-react"
import Footer from "@/components/Footer"

export default function NuevaCamionetaSeguridadPage() {
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
          <div className="max-w-4xl mx-auto">
            <Link
              href="/noticias"
              className="inline-flex items-center text-[#16b5d0] hover:text-[#0ea5e9] font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Noticias
            </Link>

            <article className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="relative h-64 sm:h-80 lg:h-96">
                <Image
                  src="/images/nueva-camioneta.jpg"
                  alt="Nueva camioneta para la Guardia Local de Villa del Dique"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                  priority
                />
              </div>

              <div className="p-6 sm:p-8 lg:p-12">
                <div className="flex items-center space-x-2 text-[#16b5d0] mb-6">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm font-medium">9 de agosto de 2025</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                  Villa del Dique incorpora una nueva camioneta para reforzar la seguridad
                </h1>

                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-gray-700 leading-relaxed mb-8">
                    Con el objetivo de fortalecer el plan de seguridad en nuestra localidad, hemos sumado un nuevo
                    recurso que permitirá mejorar el patrullaje y la prevención en el pueblo.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Gracias a las gestiones realizadas por el Intendente Emiliano Torres ante el Gobierno Provincial,
                    Villa del Dique recibió una camioneta 0 km, que se suma a la flota de vehículos de la Guardia Local.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Este nuevo recurso permitirá intensificar las tareas de control, vigilancia y prevención, reforzando
                    el compromiso de seguir trabajando por la tranquilidad y seguridad de todos los vecinos.
                  </p>

                  <div className="bg-[#16b5d0] bg-opacity-10 border-l-4 border-[#16b5d0] p-6 rounded-r-lg mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Ver video completo</h3>
                    <p className="text-gray-700 mb-4">
                      Conoce más detalles sobre la incorporación de la nueva camioneta para la Guardia Local en nuestro
                      video oficial.
                    </p>
                    <a
                      href="https://www.instagram.com/reel/DNI-OE1uip8/?igsh=dW00aWE2eGJtOGIy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-[#16b5d0] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#0ea5e9] transition-colors duration-200"
                    >
                      Ver en Instagram
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </a>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Fortalecimiento de la Seguridad Local</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-[#16b5d0] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Intensificación de las tareas de patrullaje preventivo</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-[#16b5d0] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Mayor cobertura en el control y vigilancia del territorio</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-[#16b5d0] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Refuerzo del compromiso municipal con la seguridad ciudadana</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-[#16b5d0] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Ampliación de la flota de vehículos de la Guardia Local</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
