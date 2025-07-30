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
  Calendar,
  Users,
  Mountain,
  Waves,
  Camera,
  Music,
  Car,
  Bed,
  TreePine,
} from "lucide-react"
import Link from "next/link"

export default function ElPuebloPage() {
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
          <p className="text-base sm:text-lg font-medium">Página oficial de la Municipalidad de Villa del Dique</p>
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
                  className="text-lg xl:text-xl font-medium text-gray-800 hover:text-[#16b5d0] transition-colors duration-200 py-2 whitespace-nowrap"
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
                  width={300}
                  height={120}
                  className="h-16 sm:h-18 md:h-20 lg:h-24 w-auto object-contain"
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
                  className="text-lg xl:text-xl font-medium text-gray-800 hover:text-[#16b5d0] transition-colors duration-200 py-2 whitespace-nowrap"
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
                  width={300}
                  height={120}
                  className="h-16 sm:h-18 md:h-20 w-auto object-contain"
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
                  className="block text-3xl font-medium text-gray-800 hover:text-[#16b5d0] transition-colors duration-200 py-3 border-b border-gray-100"
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
            className="inline-flex items-center space-x-2 text-[#16b5d0] hover:text-[#0ea5e9] transition-colors duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="font-medium">Volver a Vecinos</span>
          </Link>
        </div>

        {/* Hero Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6">
              EL PUEBLO
            </h1>
            <div className="w-24 h-1 bg-[#16b5d0] mx-auto mb-6"></div>
            <p className="text-2xl sm:text-3xl text-[#16b5d0] font-bold mb-4">La Perla de Calamuchita</p>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Un rincón único de las sierras cordobesas en el centro de Argentina. Villa del Dique combina historia,
              tradiciones y una naturaleza incomparable que enamora a sus habitantes y a todos sus visitantes.
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative w-full h-96 md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl mb-8">
            <Image
              src="/images/vista-aerea-villa-del-dique.jpeg"
              alt="Vista aérea de Villa del Dique - La Perla de Calamuchita"
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </section>

        {/* Introducción */}
        <section className="mb-16">
          <div className="bg-white shadow-xl rounded-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestro Pueblo</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Villa del Dique es un pintoresco pueblo ubicado entre el{" "}
                  <strong>cerro de La Cruz y el lago formado por el embalse del río Ctalamochita</strong> (Calamuchita o
                  Tercero), rodeado por la belleza y la majestuosidad de las Sierras Grandes de Córdoba.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Con una <strong>población aproximada de 7.000 habitantes</strong>, este destino se encuentra ubicado
                  en el corazón del Valle de Calamuchita y combina historia, tradiciones y una naturaleza incomparable.
                </p>
                <div className="flex items-center space-x-4 text-[#16b5d0]">
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold">7.000 habitantes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5" />
                    <span className="font-semibold">Fundado en 1935</span>
                  </div>
                </div>
              </div>
              <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/cartel-villa-del-dique.jpeg"
                  alt="Cartel icónico de Villa del Dique con vista al lago"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Historia */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6" />
              <h2 className="text-2xl sm:text-3xl font-bold">HISTORIA: UNA TIERRA NACIDA DEL AGUA Y LAS SIERRAS</h2>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-b-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/panoramica-villa-del-dique.webp"
                  alt="Vista panorámica histórica de Villa del Dique"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Ubicada sobre la <strong>Ruta Provincial 5</strong>, nuestro pueblo fue fundado por{" "}
                  <strong>Mateo Osella y Enrique Marandino el 11 de octubre de 1935</strong>, a orillas del lago.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  La construcción del imponente dique que dio origen al{" "}
                  <strong>embalse más grande de la provincia</strong>, no solo transformó la geografía local, sino
                  también su economía y estilo de vida, consolidando a la villa como un lugar ideal para el descanso y
                  las actividades náuticas.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Su historia está marcada por la llegada de familias de distintas regiones de la provincia y del país,
                  que contribuyeron a su <strong>diversidad cultural</strong> y forjaron una{" "}
                  <strong>comunidad hospitalaria y trabajadora</strong>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Costumbres y Tradiciones */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6" />
              <h2 className="text-2xl sm:text-3xl font-bold">COSTUMBRES Y TRADICIONES</h2>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-b-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Los habitantes de Villa del Dique valoran profundamente sus <strong>raíces serranas</strong>. La vida
                  diaria transcurre con un ritmo tranquilo, marcado por:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>El encuentro de las familias y los amigos</li>
                  <li>El mate compartido</li>
                  <li>La pesca y los deportes acuáticos</li>
                  <li>La vida al aire libre</li>
                  <li>Las artesanías y festividades locales</li>
                </ul>
                <p className="text-lg text-gray-700 leading-relaxed">
                  La <strong>gastronomía regional</strong> también ocupa un lugar destacado, con sabores como las
                  empanadas, el asado criollo, el pejerrey, los cabritos y los alfajores artesanales.
                </p>
              </div>
              <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/tarde-verano-lago.webp"
                  alt="Tarde de verano en el lago - Familias disfrutando"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Cultura y Entretenimientos */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <Music className="h-6 w-6" />
              <h2 className="text-2xl sm:text-3xl font-bold">CULTURA Y ENTRETENIMIENTOS</h2>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-b-lg p-8 lg:p-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              El pueblo ofrece <strong>festivales y eventos durante todo el año</strong>, creando una agenda nutrida de
              actividades para grandes y chicos:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-[#16b5d0]/10 rounded-lg">
                <Camera className="h-8 w-8 text-[#16b5d0] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Paseo de Artesanos</h4>
                <p className="text-sm text-gray-600">Exposición y venta de artesanías locales</p>
              </div>
              <div className="text-center p-4 bg-[#16b5d0]/10 rounded-lg">
                <Music className="h-8 w-8 text-[#16b5d0] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Viernes Peatonales</h4>
                <p className="text-sm text-gray-600">Música en vivo sobre la avenida principal</p>
              </div>
              <div className="text-center p-4 bg-[#16b5d0]/10 rounded-lg">
                <Users className="h-8 w-8 text-[#16b5d0] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Obras de Teatro</h4>
                <p className="text-sm text-gray-600">Presentaciones teatrales locales</p>
              </div>
              <div className="text-center p-4 bg-[#16b5d0]/10 rounded-lg">
                <Users className="h-8 w-8 text-[#16b5d0] mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Literatura</h4>
                <p className="text-sm text-gray-600">Presentaciones literarias y culturales</p>
              </div>
            </div>
          </div>
        </section>

        {/* Atractivos Turísticos */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <Mountain className="h-6 w-6" />
              <h2 className="text-2xl sm:text-3xl font-bold">ATRACTIVOS TURÍSTICOS: EN EL AGUA Y LAS MONTAÑAS</h2>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-b-lg p-8 lg:p-12">
            <div className="space-y-8">
              {/* El Lago */}
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Waves className="h-6 w-6 text-[#16b5d0]" />
                    <h3 className="text-2xl font-bold text-gray-900">El Lago</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Ideal para practicar deportes acuáticos como:
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-gray-700">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                      <span>Esquí náutico</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                      <span>Wakeboard</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                      <span>Kayak</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                      <span>Windsurf</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                      <span>Kitesurf</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                      <span>Stand up paddle (SUP)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                      <span>Pesca deportiva</span>
                    </div>
                  </div>
                </div>
                <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/vista-aerea-cerro-cruz.jpeg"
                    alt="Vista aérea del lago con el Cerro de la Cruz"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              {/* Senderos y Miradores */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <TreePine className="h-6 w-6 text-[#16b5d0]" />
                  <h3 className="text-2xl font-bold text-gray-900">Senderos y Miradores Serranos</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Ofrecen vistas panorámicas inigualables y una conexión íntima con la naturaleza a través de la
                  práctica del ciclismo o el trekking por recorridos imperdibles:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Mountain className="h-4 w-4 text-[#16b5d0]" />
                    <span>La Sierrita</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Mountain className="h-4 w-4 text-[#16b5d0]" />
                    <span>Cerro de la Cruz</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Mountain className="h-4 w-4 text-[#16b5d0]" />
                    <span>El Mirador</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Mountain className="h-4 w-4 text-[#16b5d0]" />
                    <span>El Perilago</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <Mountain className="h-4 w-4 text-[#16b5d0]" />
                    <span>Playa 3 de Octubre</span>
                  </div>
                </div>
              </div>

              {/* Camping y Balneario */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <TreePine className="h-6 w-6 text-[#16b5d0]" />
                  <h3 className="text-2xl font-bold text-gray-900">Camping y Balneario Municipal</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Para todos los días o para los findes, una buena opción es visitar el renovado Camping y Balneario
                  municipal, que cuenta con una amplia oferta de servicios:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                    <span>Zona de acampe</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                    <span>Balneario</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                    <span>Confitería</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                    <span>Asadores</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                    <span>Cancha de vóley playero</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                    <span>Juegos infantiles</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                    <span>Baños</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                    <span>Pileta olímpica con guardavidas</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                    <span>Bajada de lanchas</span>
                  </div>
                </div>
              </div>

              {/* Espacios Verdes */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <TreePine className="h-6 w-6 text-[#16b5d0]" />
                  <h3 className="text-2xl font-bold text-gray-900">Espacios Verdes</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  La Perla de Calamuchita cuenta con numerosos espacios verdes y plazas con juegos para las infancias:
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <TreePine className="h-4 w-4 text-[#16b5d0]" />
                    <span>Plaza San Martín</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <TreePine className="h-4 w-4 text-[#16b5d0]" />
                    <span>Plaza de la Música</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <TreePine className="h-4 w-4 text-[#16b5d0]" />
                    <span>Plaza de la Memoria</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <TreePine className="h-4 w-4 text-[#16b5d0]" />
                    <span>Plaza de los Fundadores</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo Llegar y Dónde Alojarse */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Cómo Llegar */}
          <section className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6">
              <div className="flex items-center space-x-3">
                <Car className="h-6 w-6" />
                <h2 className="text-2xl font-bold">CÓMO LLEGAR</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                A Villa del Dique se puede llegar por ruta a través de:
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Car className="h-5 w-5 text-[#16b5d0]" />
                  <span className="text-gray-700">Autovía Ruta Nacional 36</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Car className="h-5 w-5 text-[#16b5d0]" />
                  <span className="text-gray-700">Ruta Provincial 5</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-[#16b5d0]" />
                  <span className="text-gray-700">Terminal de ómnibus en pleno centro</span>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                Los visitantes tienen a disposición una diversidad de empresas que provienen de distintos puntos del
                país.
              </p>
            </div>
          </section>

          {/* Dónde Alojarse */}
          <section className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-gradient-to-r from-[#16b5d0] to-[#0ea5e9] text-white py-4 px-6">
              <div className="flex items-center space-x-3">
                <Bed className="h-6 w-6" />
                <h2 className="text-2xl font-bold">DÓNDE ALOJARSE</h2>
              </div>
            </div>
            <div className="p-6">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Para aquellas familias o grupos de amigos que eligen pasar unos días en contacto con la naturaleza:
              </p>
              <div className="space-y-3 mb-4">
                <div className="flex items-center space-x-3">
                  <TreePine className="h-5 w-5 text-[#16b5d0]" />
                  <span className="text-gray-700 font-semibold">Camping Municipal</span>
                </div>
                <p className="text-gray-600 ml-8">
                  Con todos los servicios necesarios (sanitarios, electricidad, agua, asadores, pileta, proveeduría).
                  Habilitado para carpas y motorhomes.
                </p>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed mb-3">
                Además, existe una amplia oferta de alojamientos:
              </p>
              <div className="grid grid-cols-2 gap-2 text-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                  <span>Cabañas</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                  <span>Casas en alquiler</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                  <span>Hosterías</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                  <span>Colonias</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#16b5d0] rounded-full"></div>
                  <span>Hoteles</span>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Conclusión */}
        <section className="bg-gradient-to-r from-[#16b5d0]/10 to-[#0ea5e9]/10 p-8 lg:p-12 rounded-lg text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">El Lugar Ideal</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
            Villa del Dique es el lugar ideal para todas las personas amantes de la{" "}
            <strong>tranquilidad, de la vida al aire libre, de los deportes y los juegos en el agua</strong>, del picnic
            o los mates a la orilla del lago, de la lectura bajo una sombra hospitalaria, de comer rico, de divertirse y
            de <strong>compartir buenos momentos en familia y, también, con amigos</strong>.
          </p>
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
                width={120}
                height={120}
                className="h-16 sm:h-18 md:h-20 w-auto object-contain"
              />
              <p className="text-xl sm:text-2xl font-semibold text-center sm:text-center lg:text-left">
                EL PROGRESO QUE QUEREMOS
              </p>
            </div>

            {/* Redes Sociales y Acceso Rápido */}
            <div className="space-y-6 text-center sm:text-center lg:text-left">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Redes Sociales</h3>
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
                <h3 className="text-2xl sm:text-3xl font-bold mb-4">Acceso Rápido</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/vecinos/guia-de-tramites"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl"
                    >
                      Guía de trámites
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/noticias"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl"
                    >
                      Noticias
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/vecinos/servicios"
                      className="hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl"
                    >
                      Servicios
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Institucional */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Institucional</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/vecinos/muni"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl"
                  >
                    La Muni
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vecinos/honorable-concejo-deliberante"
                    className="hover:underline hover:opacity-80 transition-all duration-200 text-lg sm:text-xl"
                  >
                    Concejo Deliberante
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contacto */}
            <div className="text-center sm:text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">Contacto</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-2 justify-center sm:justify-center lg:justify-start">
                  <MapPin className="h-4 w-4 sm:h-5 sm:w-5 mt-0.5 flex-shrink-0" />
                  <p className="text-base sm:text-lg">
                    Mario Nivoli 206
                    <br />
                    Villa del Dique, Córdoba
                  </p>
                </div>
                <div className="flex items-center space-x-2 justify-center sm:justify-center lg:justify-start">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                  <p className="text-base sm:text-lg">03546-497241</p>
                </div>
              </div>
            </div>
          </div>

          {/* Línea divisoria y copyright */}
          <div className="border-t border-white/20 mt-6 sm:mt-8 pt-4 sm:pt-6 text-center space-y-2">
            <p className="text-base sm:text-lg opacity-80">
              © 2024 Municipalidad de Villa del Dique. Todos los derechos reservados.
            </p>
            <p className="text-base opacity-70">
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
