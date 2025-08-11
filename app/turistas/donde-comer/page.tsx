"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X, Facebook, Instagram, Youtube, MapPin, Phone, Utensils, Coffee, ShoppingBag } from "lucide-react"
import Link from "next/link"

export default function DondeComer() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const leftMenuItems = [
    { name: "¿Cómo llegar?", href: "/turistas/como-llegar" },
    { name: "¿Dónde alojarme?", href: "/turistas/donde-alojarme" },
    { name: "¿Dónde comer?", href: "/turistas/donde-comer", active: true },
  ]

  const rightMenuItems = [
    { name: "Circuitos", href: "/turistas/circuitos" },
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
                  className={`text-base xl:text-lg font-montserrat font-medium transition-colors duration-200 py-2 whitespace-nowrap ${
                    item.active ? "text-[#c84f9b] border-b-2 border-[#c84f9b]" : "text-gray-800 hover:text-[#c84f9b]"
                  }`}
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
            <span className="text-[#c84f9b] font-medium">¿Dónde comer?</span>
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <section className="relative w-full">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src="/images/donde-comer-banner.webp"
            alt="Gastronomía en Villa del Dique"
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
            <h1 className="text-4xl sm:text-5xl font-nunito font-bold text-gray-900 mb-6">¿Dónde comer?</h1>
            <p className="text-lg font-montserrat text-gray-700 max-w-3xl mx-auto">
              Descubre la rica gastronomía de Villa del Dique. Desde restaurantes con vista al lago hasta acogedoras
              cafeterías y opciones para llevar, encontrarás sabores únicos que harán de tu visita una experiencia
              inolvidable.
            </p>
          </section>

          {/* Restaurantes / Cafeterías */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Utensils className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-nunito font-bold text-gray-900">Restaurantes / Cafeterías</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-montserrat">
              {/* Milano Bar */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-nunito font-bold text-blue-900 mb-3">Milano Bar</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                    <p className="text-blue-800 text-sm">
                      <strong>Dirección:</strong> Av. San Martín 267
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a href="tel:3546459280" className="text-blue-800 text-sm hover:underline">
                      3546-459280
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/milanobarvdd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 text-sm hover:underline"
                    >
                      @milanobarvdd
                    </a>
                  </div>
                </div>
              </div>

              {/* Chela */}
              <div className="bg-purple-50 p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-nunito font-bold text-purple-900 mb-3">Chela</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-purple-700 mt-0.5 flex-shrink-0" />
                    <p className="text-purple-800 text-sm">
                      <strong>Dirección:</strong> Av. San Martín 286
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-purple-700 flex-shrink-0" />
                    <a href="tel:3546478738" className="text-purple-800 text-sm hover:underline">
                      3546-478738
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-purple-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/chelaartesana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-800 text-sm hover:underline"
                    >
                      @chelaartesana
                    </a>
                  </div>
                </div>
              </div>

              {/* Don Quijote y Parrilla Cabritos */}
              <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-nunito font-bold text-green-900 mb-3">Don Quijote y Parrilla Cabritos</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 text-sm">
                      <strong>Dirección:</strong> Av. de los Navegantes 661
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-700 flex-shrink-0" />
                    <a href="tel:3546650760" className="text-green-800 text-sm hover:underline">
                      3546-650760
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-green-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/hotelcarrilloamerian"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-800 text-sm hover:underline"
                    >
                      @hotelcarrilloamerian
                    </a>
                  </div>
                </div>
              </div>

              {/* Walnut Peñon */}
              <div className="bg-orange-50 p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <h3 className="text-xl font-nunito font-bold text-orange-900 mb-3">
                  Walnut Peñon (Solo en temporada de verano)
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-orange-700 mt-0.5 flex-shrink-0" />
                    <p className="text-orange-800 text-sm">
                      <strong>Dirección:</strong> Av. de los Navegantes, esq calle 20
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/walnutbypuntapenon"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-800 text-sm hover:underline"
                    >
                      @walnutbypuntapenon
                    </a>
                  </div>
                </div>
              </div>

              {/* Mama Pulpa */}
              <div className="bg-red-50 p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <h3 className="text-xl font-nunito font-bold text-red-900 mb-3">Mama Pulpa</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-red-700 mt-0.5 flex-shrink-0" />
                    <p className="text-red-800 text-sm">
                      <strong>Dirección:</strong> Av. San Martín 315
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-red-700 flex-shrink-0" />
                    <a href="tel:3546560900" className="text-red-800 text-sm hover:underline">
                      3546-560900
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-red-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/mamapulpa_vdd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red-800 text-sm hover:underline"
                    >
                      @mamapulpa_vdd
                    </a>
                  </div>
                </div>
              </div>

              {/* La Terminal */}
              <div className="bg-teal-50 p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <h3 className="text-xl font-nunito font-bold text-teal-900 mb-3">La Terminal</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-teal-700 mt-0.5 flex-shrink-0" />
                    <p className="text-teal-800 text-sm">
                      <strong>Dirección:</strong> Av. San Martín 58
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-teal-700 flex-shrink-0" />
                    <a href="tel:3546401411" className="text-teal-800 text-sm hover:underline">
                      3546-401411
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-teal-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/laterminalvdd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-800 text-sm hover:underline"
                    >
                      @laterminalvdd
                    </a>
                  </div>
                </div>
              </div>

              {/* La Fika */}
              <div className="bg-amber-50 p-6 rounded-lg shadow-md border-l-4 border-amber-500">
                <h3 className="text-xl font-nunito font-bold text-amber-900 mb-3">La Fika</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-amber-700 mt-0.5 flex-shrink-0" />
                    <p className="text-amber-800 text-sm">
                      <strong>Dirección:</strong> Tierra del Fuego 59
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-amber-700 flex-shrink-0" />
                    <a href="tel:3546490125" className="text-amber-800 text-sm hover:underline">
                      3546-490125
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-amber-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/lafika_vdd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-800 text-sm hover:underline"
                    >
                      @lafika_vdd
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Cafeterías */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Coffee className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-nunito font-bold text-gray-900">Cafeterías</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-montserrat">
              {/* Flora Café Bristo */}
              <div className="bg-emerald-50 p-6 rounded-lg shadow-md border-l-4 border-emerald-500">
                <h3 className="text-xl font-nunito font-bold text-emerald-900 mb-3">Flora Café Bristo</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                    <p className="text-emerald-800 text-sm">
                      <strong>Dirección:</strong> Av. San Martín 366
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a href="tel:3546456227" className="text-emerald-800 text-sm hover:underline">
                      3546-456227
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/flora.cafe.bistro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 text-sm hover:underline"
                    >
                      @flora.cafe.bistro
                    </a>
                  </div>
                </div>
              </div>

              {/* Amelia Cafetería y Pastelería */}
              <div className="bg-pink-50 p-6 rounded-lg shadow-md border-l-4 border-pink-500">
                <h3 className="text-xl font-nunito font-bold text-pink-900 mb-3">Amelia Cafetería y Pastelería</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-pink-700 mt-0.5 flex-shrink-0" />
                    <p className="text-pink-800 text-sm">
                      <strong>Dirección:</strong> Bv. Hipólito Irigoyen 90
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-pink-700 flex-shrink-0" />
                    <a href="tel:3546545235" className="text-pink-800 text-sm hover:underline">
                      3546-545235
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-pink-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/ameliacafe.vdd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-800 text-sm hover:underline"
                    >
                      @ameliacafe.vdd
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Restaurantes */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <Utensils className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-nunito font-bold text-gray-900">Restaurantes</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-montserrat">
              {/* Tomassino y Pancracia */}
              <div className="bg-indigo-50 p-6 rounded-lg shadow-md border-l-4 border-indigo-500">
                <h3 className="text-xl font-nunito font-bold text-indigo-900 mb-3">Tomassino y Pancracia</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-indigo-700 mt-0.5 flex-shrink-0" />
                    <p className="text-indigo-800 text-sm">
                      <strong>Dirección:</strong> Av. de Los Pescadores 302
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-indigo-700 flex-shrink-0" />
                    <a href="tel:3546405413" className="text-indigo-800 text-sm hover:underline">
                      3546-405413
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-indigo-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/tomassinoypancracia_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-800 text-sm hover:underline"
                    >
                      @tomassinoypancracia_
                    </a>
                  </div>
                </div>
              </div>

              {/* IOWA */}
              <div className="bg-teal-50 p-6 rounded-lg shadow-md border-l-4 border-teal-500">
                <h3 className="text-xl font-nunito font-bold text-teal-900 mb-3">IOWA</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-teal-700 mt-0.5 flex-shrink-0" />
                    <p className="text-teal-800 text-sm">
                      <strong>Dirección:</strong> Av. San Martín 220
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-teal-700 flex-shrink-0" />
                    <div className="text-teal-800 text-sm">
                      <a href="tel:03546497542" className="hover:underline mr-2">
                        03546-497542
                      </a>
                      <span>/</span>
                      <a href="tel:3512082818" className="hover:underline ml-2">
                        3512-082818
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-teal-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/restaurant_iowa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-800 text-sm hover:underline"
                    >
                      @restaurant_iowa
                    </a>
                  </div>
                </div>
              </div>

              {/* Pizzería La Casona */}
              <div className="bg-yellow-50 p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                <h3 className="text-xl font-nunito font-bold text-yellow-900 mb-3">Pizzería La Casona</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-yellow-700 mt-0.5 flex-shrink-0" />
                    <p className="text-yellow-800 text-sm">
                      <strong>Dirección:</strong> Teniente Nivoli 357
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-yellow-700 flex-shrink-0" />
                    <div className="text-yellow-800 text-sm">
                      <a href="tel:3546488248" className="hover:underline mr-2">
                        3546-488248
                      </a>
                      <span>/</span>
                      <a href="tel:03546497917" className="hover:underline ml-2">
                        03546-497917
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-yellow-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/luga.parrillarestobar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-800 text-sm hover:underline"
                    >
                      @luga.parrillarestobar
                    </a>
                  </div>
                </div>
              </div>

              {/* Luga Parrilla y Restobar */}
              <div className="bg-lime-50 p-6 rounded-lg shadow-md border-l-4 border-lime-500">
                <h3 className="text-xl font-nunito font-bold text-lime-900 mb-3">Luga Parrilla y Restobar</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-lime-700 mt-0.5 flex-shrink-0" />
                    <p className="text-lime-800 text-sm">
                      <strong>Dirección:</strong> Ruta 5, km 105
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-lime-700 flex-shrink-0" />
                    <a href="tel:3546536112" className="text-lime-800 text-sm hover:underline">
                      3546-536112
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-lime-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/luga.parrillarestobar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lime-800 text-sm hover:underline"
                    >
                      @luga.parrillarestobar
                    </a>
                  </div>
                </div>
              </div>

              {/* Old Wolf Food & Drinks */}
              <div className="bg-slate-50 p-6 rounded-lg shadow-md border-l-4 border-slate-500">
                <h3 className="text-xl font-nunito font-bold text-slate-900 mb-3">Old Wolf Food & Drinks</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-slate-700 mt-0.5 flex-shrink-0" />
                    <p className="text-slate-800 text-sm">
                      <strong>Dirección:</strong> Av. San Martín 15
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-slate-700 flex-shrink-0" />
                    <a href="tel:3546437561" className="text-slate-800 text-sm hover:underline">
                      3546-437561
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-slate-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/oldwolfburger"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-800 text-sm hover:underline"
                    >
                      @oldwolfburger
                    </a>
                  </div>
                </div>
              </div>

              {/* Bsb Hamburguesería */}
              <div className="bg-rose-50 p-6 rounded-lg shadow-md border-l-4 border-rose-500">
                <h3 className="text-xl font-nunito font-bold text-rose-900 mb-3">
                  Bsb Hamburguesería (Solo en temporada de verano)
                </h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-rose-700 mt-0.5 flex-shrink-0" />
                    <p className="text-rose-800 text-sm">
                      <strong>Dirección:</strong> Av. San Martín 194
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-rose-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/beicon.bsb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-rose-800 text-sm hover:underline"
                    >
                      @beicon.bsb
                    </a>
                  </div>
                </div>
              </div>

              {/* De Diez Pizzería */}
              <div className="bg-violet-50 p-6 rounded-lg shadow-md border-l-4 border-violet-500">
                <h3 className="text-xl font-nunito font-bold text-violet-900 mb-3">De Diez Pizzería</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-violet-700 mt-0.5 flex-shrink-0" />
                    <p className="text-violet-800 text-sm">
                      <strong>Dirección:</strong> Av. San Martín 108
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-violet-700 flex-shrink-0" />
                    <a href="tel:3546524822" className="text-violet-800 text-sm hover:underline">
                      3546-524822
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-violet-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/dediez_rotiseria"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-violet-800 text-sm hover:underline"
                    >
                      @dediez_rotiseria
                    </a>
                  </div>
                </div>
              </div>

              {/* Tasty Food */}
              <div className="bg-fuchsia-50 p-6 rounded-lg shadow-md border-l-4 border-fuchsia-500">
                <h3 className="text-xl font-nunito font-bold text-fuchsia-900 mb-3">Tasty Food</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-fuchsia-700 mt-0.5 flex-shrink-0" />
                    <p className="text-fuchsia-800 text-sm">
                      <strong>Dirección:</strong> Av. San Martín 309
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-fuchsia-700 flex-shrink-0" />
                    <a href="tel:3546546116" className="text-fuchsia-800 text-sm hover:underline">
                      3546-546116
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-fuchsia-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/tastyfood.resto"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-fuchsia-800 text-sm hover:underline"
                    >
                      @tastyfood.resto
                    </a>
                  </div>
                </div>
              </div>

              {/* Espinillo, Sabores Argentinos */}
              <div className="bg-emerald-50 p-6 rounded-lg shadow-md border-l-4 border-emerald-500">
                <h3 className="text-xl font-nunito font-bold text-emerald-900 mb-3">Espinillo, Sabores Argentinos</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                    <p className="text-emerald-800 text-sm">
                      <strong>Dirección:</strong> Ruta 5, km 105
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a href="tel:3546401949" className="text-emerald-800 text-sm hover:underline">
                      3546-401949
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-emerald-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/espinillo.vdd"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-800 text-sm hover:underline"
                    >
                      @espinillo.vdd
                    </a>
                  </div>
                </div>
              </div>

              {/* Rodá Gastronomía */}
              <div className="bg-blue-50 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <h3 className="text-xl font-nunito font-bold text-blue-900 mb-3">Rodá Gastronomía</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-blue-700 mt-0.5 flex-shrink-0" />
                    <p className="text-blue-800 text-sm">
                      <strong>Dirección:</strong> Arturo Illia 187
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a href="tel:3546406684" className="text-blue-800 text-sm hover:underline">
                      3546-406684
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-blue-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/roda.gastronomia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-800 text-sm hover:underline"
                    >
                      @roda.gastronomia
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Para Llevar */}
          <section className="mb-12">
            <div className="flex items-center mb-6">
              <ShoppingBag className="h-8 w-8 text-[#c84f9b] mr-3" />
              <h2 className="text-3xl sm:text-4xl font-nunito font-bold text-gray-900">Para Llevar</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-montserrat">
              {/* El Parripollo de Pedro */}
              <div className="bg-orange-50 p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <h3 className="text-xl font-nunito font-bold text-orange-900 mb-3">El Parripollo de Pedro</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-orange-700 mt-0.5 flex-shrink-0" />
                    <p className="text-orange-800 text-sm">
                      <strong>Dirección:</strong> Chaco 152
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a href="tel:3546528601" className="text-orange-800 text-sm hover:underline">
                      3546-528601
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-orange-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/el.parripollo.de.pedro"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-800 text-sm hover:underline"
                    >
                      @el.parripollo.de.pedro
                    </a>
                  </div>
                </div>
              </div>

              {/* Pomponia */}
              <div className="bg-green-50 p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <h3 className="text-xl font-nunito font-bold text-green-900 mb-3">Pomponia</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-green-700 mt-0.5 flex-shrink-0" />
                    <p className="text-green-800 text-sm">
                      <strong>Dirección:</strong> Bv. Hipólito Irigoyen 118
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-green-700 flex-shrink-0" />
                    <a href="tel:3546513737" className="text-green-800 text-sm hover:underline">
                      3546-513737
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-green-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/pomponia.villadeldique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-800 text-sm hover:underline"
                    >
                      @pomponia.villadeldique
                    </a>
                  </div>
                </div>
              </div>

              {/* Mama Cocina */}
              <div className="bg-purple-50 p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <h3 className="text-xl font-nunito font-bold text-purple-900 mb-3">Mama Cocina</h3>
                <div className="space-y-2">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-purple-700 mt-0.5 flex-shrink-0" />
                    <p className="text-purple-800 text-sm">
                      <strong>Dirección:</strong> Neuquén 98
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-purple-700 flex-shrink-0" />
                    <a href="tel:3546524583" className="text-purple-800 text-sm hover:underline">
                      3546-524583
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Instagram className="h-4 w-4 text-purple-700 flex-shrink-0" />
                    <a
                      href="https://instagram.com/mama_cocina_52"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-800 text-sm hover:underline"
                    >
                      @mama_cocina_52
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-[#c84f9b] to-pink-600 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl sm:text-3xl font-nunito font-bold mb-4">¿Ya elegiste dónde comer?</h3>
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
                  href="/turistas/circuitos"
                  className="bg-white text-[#c84f9b] font-montserrat font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors duration-200"
                >
                  Ver Circuitos
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
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-base sm:text-lg font-medium"
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
