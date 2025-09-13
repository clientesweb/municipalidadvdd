"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Calendar, ArrowLeft } from "lucide-react"
import Footer from "@/components/Footer"

export default function InauguracionPoloCulturalRealizadaPage() {
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
            className="inline-flex items-center text-[#16b5d0] hover:text-[#0ea5e9] transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
            Volver a Noticias
          </Link>

          <article className="max-w-4xl mx-auto">
            <header className="mb-8">
              <div className="flex items-center space-x-2 text-[#16b5d0] mb-4">
                <Calendar className="h-5 w-5" />
                <time dateTime="2025-09-12" className="text-lg font-medium">
                  12 de septiembre de 2025
                </time>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Villa del Dique inauguró su nuevo Polo Cultural
              </h1>
            </header>

            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] mb-8 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/gran-inaguracion.jpg"
                alt="Inauguración del Polo Cultural de Villa del Dique con vecinos visitando la Casa de la Cultura"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Con enorme orgullo anunciamos que Villa del Dique ya cuenta con un Polo Cultural que permitirá seguir
                promoviendo actividades que fortalezcan la unión, el intercambio y el disfrute de toda nuestra
                comunidad.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Hoy quedó inaugurada la puesta en valor de la histórica Casa de la Cultura y el nuevo Anfiteatro
                Municipal que, junto al Centro Cultural Pato Carret, conforman este espacio que seguirá creciendo en
                beneficio de los vecinos.
              </p>

              <div className="bg-blue-50 border-l-4 border-[#16b5d0] p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  🛠 Obra hecha con recursos propios y mano de obra local
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Toda la obra se realizó con recursos propios de la Municipalidad y en su mayor parte con trabajo de
                  empleados municipales. Las tareas que no pudieron ser ejecutadas por ellos se llevaron a cabo con mano
                  de obra local, permitiendo que los recursos queden en el pueblo y ayuden a motorizar la economía
                  local.
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  📢 Un plan integral para el desarrollo humano
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Nuestro plan no solo contempla las obras de infraestructura básicas, sino que también busca fortalecer
                  la cultura, fomentando la unidad y la identidad de Villa del Dique.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg my-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">El Polo Cultural incluye:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="text-[#16b5d0] mr-2">🏛</span>
                    La renovada Casa de la Cultura
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#16b5d0] mr-2">🎭</span>
                    El Centro Cultural Pato Carret
                  </li>
                  <li className="flex items-center">
                    <span className="text-[#16b5d0] mr-2">🎶</span>
                    El nuevo anfiteatro al aire libre
                  </li>
                </ul>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Este importante proyecto representa un hito en el desarrollo cultural de Villa del Dique, creando un
                espacio integral donde la comunidad podrá disfrutar de diversas actividades culturales, artísticas y
                educativas que enriquecerán la vida social del pueblo.
              </p>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
