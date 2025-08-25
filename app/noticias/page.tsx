"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X, Calendar, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import Footer from "@/components/Footer"

interface Noticia {
  id: string
  titulo: string
  fecha: string
  fechaDisplay: string
  imagen: string
  descripcion: string
  slug: string
}

const todasLasNoticias: Noticia[] = [
  {
    id: "bomberos-voluntarios",
    titulo: "Reconocimiento y apoyo a nuestros bomberos voluntarios: acompañamiento a una inversión histórica",
    fecha: "2025-07-22",
    fechaDisplay: "22 de julio de 2025",
    imagen: "/images/bomberos-recaudacion.jpg",
    descripcion:
      "El intendente de Villa del Dique acompañó a los bomberos voluntarios en la recepción de un aporte de 15 millones de pesos otorgado por el Gobierno de la Provincia de Córdoba.",
    slug: "/noticias/bomberos-voluntarios",
  },
  {
    id: "puente-las-vacas",
    titulo: "Mantenimiento conjunto del Puente de las Vacas: trabajo articulado por la seguridad y el bienestar",
    fecha: "2025-07-15",
    fechaDisplay: "15 de julio de 2025",
    imagen: "/images/puente-las-vacas.jpg",
    descripcion:
      "La Municipalidad de Villa del Dique, en coordinación con la Municipalidad de Embalse, llevó adelante tareas de mantenimiento en el Puente de las Vacas, ubicado en la zona limítrofe entre ambas localidades.",
    slug: "/noticias/puente-las-vacas",
  },
  {
    id: "obras-en-marcha",
    titulo: "Obras en marcha: seguimos construyendo un Villa del Dique para todos",
    fecha: "2025-06-17",
    fechaDisplay: "17 de junio de 2025",
    imagen: "/images/obras-en-marcha.jpg",
    descripcion:
      "Con decisión, firmeza y compromiso, desde la Municipalidad de Villa del Dique seguimos ejecutando obras en distintos puntos de nuestra localidad, respondiendo a las necesidades y demandas de nuestros vecinos y vecinas.",
    slug: "/noticias/obras-en-marcha",
  },
  {
    id: "polo-cultural",
    titulo: "Villa del Dique avanza en la creación de un Polo Cultural para la comunidad y el turismo",
    fecha: "2025-06-13",
    fechaDisplay: "13 de junio de 2025",
    imagen: "/images/polo-cultural-avances.jpg",
    descripcion:
      "La Municipalidad de Villa del Dique continúa invirtiendo recursos propios en obras que fortalecen la infraestructura local y promueven el desarrollo cultural. En paralelo a la restauración de la histórica Casa de la Cultura, se está llevando adelante la construcción de un nuevo anfiteatro.",
    slug: "/noticias/polo-cultural",
  },
  {
    id: "comprometidos-educacion",
    titulo: "Comprometidos con la educación como motor de crecimiento",
    fecha: "2025-05-31",
    fechaDisplay: "31 de mayo de 2025",
    imagen: "/comprometidos.jpg",
    descripcion:
      "Desde la Municipalidad de Villa del Dique reafirmamos nuestra convicción de que la educación es el camino fundamental para el desarrollo individual, familiar y colectivo. Por ello, cada acción que impulsamos en esta área representa una inversión en el futuro de nuestra comunidad.",
    slug: "/noticias/comprometidos-educacion",
  },
  {
    id: "reforestacion-parque-lineal",
    titulo: "Reforestación y educación ambiental en el Parque Lineal: un compromiso que crece con la comunidad",
    fecha: "2025-05-06",
    fechaDisplay: "6 de mayo de 2025",
    imagen: "/parque-lineal-1.jpg",
    descripcion:
      "La Municipalidad de Villa del Dique continúa avanzando en la consolidación del pulmón verde de nuestro Parque Lineal. En esta oportunidad, se plantaron 30 algarrobos en una jornada de reforestación y concientización ambiental realizada junto a la comunidad educativa de la Escuela Almirante Guillermo Brown.",
    slug: "/noticias/reforestacion-parque-lineal",
  },
  {
    id: "restauracion-casa-cultura",
    titulo: "Restauración de la Casa de la Cultura: recuperar el patrimonio, fortalecer la identidad",
    fecha: "2025-04-24",
    fechaDisplay: "24 de abril de 2025",
    imagen: "/casa-cultura.jpg",
    descripcion:
      "La Municipalidad de Villa del Dique avanza en la restauración integral de la Casa de la Cultura, un espacio emblemático que forma parte del patrimonio histórico y cultural de nuestra comunidad.",
    slug: "/noticias/restauracion-casa-cultura",
  },
  {
    id: "nueva-cancha-bochas-sintetica",
    titulo: "Nueva cancha de bochas sintética en Villa del Dique: más deporte, inclusión y comunidad",
    fecha: "2025-04-07",
    fechaDisplay: "7 de abril de 2025",
    imagen: "/images/nueva-cancha-bochas-1.jpg",
    descripcion:
      "La Municipalidad inauguró la nueva cancha de bochas sintética en el Club Deportivo y Biblioteca Villa del Dique, impulsando el desarrollo del deporte local y generando espacios de encuentro para todas las edades.",
    slug: "/noticias/nueva-cancha-bochas-sintetica",
  },
  {
    id: "mejoras-cementerio-municipal",
    titulo: "Nuevas mejoras en el Cementerio Municipal: seguridad y dignidad para un espacio de memoria",
    fecha: "2024-11-02",
    fechaDisplay: "2 de noviembre de 2024",
    imagen: "/nuevas-luminarias.jpg",
    descripcion:
      "La Municipalidad de Villa del Dique instaló luminarias y cámaras de seguridad en el Cementerio Municipal para garantizar un entorno más seguro, ordenado y digno en este espacio de profundo significado para la comunidad.",
    slug: "/noticias/mejoras-cementerio-municipal",
  },
  {
    id: "mejoras-infraestructura-segura",
    titulo: "Mejoras en infraestructura para una comunidad más segura y ordenada",
    fecha: "2024-10-22",
    fechaDisplay: "22 de octubre de 2024",
    imagen: "/la-villa-que-queremos.jpg",
    descripcion:
      "La Municipalidad de Villa del Dique continúa avanzando en obras de infraestructura que mejoran la calidad de vida de nuestros vecinos, con la construcción de un cerco perimetral de 74 metros y reorganización del estacionamiento en la Escuela Primaria.",
    slug: "/noticias/mejoras-infraestructura-segura",
  },
  {
    id: "entrega-premios-sorteo-apoyo",
    titulo: "Entrega de premios del Sorteo de Apoyo Institucional",
    fecha: "2024-10-16",
    fechaDisplay: "16 de octubre de 2024",
    imagen: "/sorteo-de-apoyo-1.jpg",
    descripcion:
      "El intendente Emiliano Torres recibió a los ganadores del Sorteo de Apoyo Institucional, llevado a cabo durante el almuerzo popular por el 89° aniversario de Villa del Dique.",
    slug: "/noticias/entrega-premios-sorteo-apoyo",
  },
  {
    id: "construyendo-comunidad",
    titulo: "Construyendo comunidad: un llamado al trabajo colectivo",
    fecha: "2024-10-13",
    fechaDisplay: "13 de octubre de 2024",
    imagen:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/construyendo-comunidad-4.jpg-Z2RXynoS67SZOqjcTJcZS85rmC9XIG.jpeg",
    descripcion:
      "Desde la gestión municipal de Villa del Dique renovamos nuestro compromiso con una visión clara: construir, entre todos, un pueblo que sea ejemplo de trabajo en equipo, inclusión y participación ciudadana.",
    slug: "/noticias/construyendo-comunidad",
  },
  {
    id: "89-anos-villa-del-dique", // cambiado id para usar caracteres seguros
    titulo: "Villa del Dique celebró sus 89 años con obras, homenajes y una gran participación popular",
    fecha: "2024-10-11",
    fechaDisplay: "11 de octubre de 2024",
    imagen: "/images/89-años-villa-del-dique-1.jpg",
    descripcion:
      "En el marco del 89° aniversario de Villa del Dique, el intendente Emiliano Torres encabezó los actos conmemorativos y anunció una inversión de 150 millones de pesos en la adquisición de nuevas maquinarias destinadas al mantenimiento de calles y espacios públicos.",
    slug: "/noticias/89-anos-villa-del-dique", // cambiado slug para usar caracteres seguros sin ñ
  },
  {
    id: "nuevo-espacio-bienestar-social",
    titulo: "Nuevo Espacio de Bienestar Social en Villa del Dique",
    fecha: "2024-08-27",
    fechaDisplay: "27 de agosto de 2024",
    imagen: "/images/nuevo-espacio-bienestar.jpg",
    descripcion:
      "La Municipalidad anuncia la recuperación y puesta en funcionamiento de las nuevas oficinas de Bienestar Social, totalmente renovadas para centralizar y fortalecer las acciones orientadas a mejorar la calidad de vida de nuestros vecinos.",
    slug: "/noticias/nuevo-espacio-bienestar-social",
  },
  {
    id: "firma-focom-nuevas-obras",
    titulo: "Importante avance en infraestructura: firma del FOCOM para nuevas obras en la localidad",
    fecha: "2024-08-22",
    fechaDisplay: "22 de agosto de 2024",
    imagen: "/images/firma-focom-1.webp",
    descripcion:
      "El Intendente Municipal Emiliano Torres firmó en la ciudad de Córdoba un convenio del Fondo de Compensación Municipal (FOCOM) junto al ministro de Gobierno de Córdoba, Manuel Calvo.",
    slug: "/noticias/firma-focom-nuevas-obras",
  },
  {
    id: "nueva-maquinaria-vial",
    titulo: "Villa del Dique suma nueva maquinaria para el mantenimiento vial",
    fecha: "2025-07-27",
    fechaDisplay: "27 de julio de 2025",
    imagen: "/images/incoporacion-maquinaria.webp",
    descripcion:
      "La Municipalidad incorporó una moderna motoniveladora a su parque automotor para mejorar los servicios públicos y optimizar los trabajos de mantenimiento vial.",
    slug: "/noticias/nueva-maquinaria-vial",
  },
  {
    id: "controles-de-transito",
    titulo: "Controles de Tránsito: Circular en regla, una tarea de todos",
    fecha: "2025-07-21",
    fechaDisplay: "21 de julio de 2025",
    imagen: "/images/joenada-transito.webp",
    descripcion:
      "La Municipalidad de Villa del Dique, junto a la Policía de la Provincia de Córdoba, continúa fortaleciendo su compromiso con la seguridad...",
    slug: "/noticias/controles-de-transito",
  },
  {
    id: "villa-del-dique-no-para",
    titulo: "Villa del Dique No Para: Avances de Obras Públicas Durante el Receso Invernal",
    fecha: "2025-07-08",
    fechaDisplay: "8 de julio de 2025",
    imagen: "/images/villa-del-dique-no-para.webp",
    descripcion:
      "El Municipio continúa ejecutando importantes obras en distintos puntos de la localidad durante el receso invernal.",
    slug: "/noticias/villa-del-dique-no-para",
  },
  {
    id: "nuevas-medidas-seguridad-instituciones-educativas",
    titulo: "Nuevas medidas de seguridad en instituciones educativas de Villa del Dique",
    fecha: "2024-07-13",
    fechaDisplay: "13 de julio de 2024",
    imagen: "/nuevas-medidas-seguridad.jpg",
    descripcion:
      "La Municipalidad ha implementado nuevas medidas de seguridad en nuestras instituciones educativas con el objetivo de proteger a los alumnos, docentes y personal...",
    slug: "/noticias/nuevas-medidas-seguridad-instituciones-educativas",
  },
  {
    id: "jornada-limpieza-nuestras-costas",
    titulo: "Jornada de Limpieza en Nuestras Costas",
    fecha: "2024-06-13",
    fechaDisplay: "13 de junio de 2024",
    imagen: "/limpieza-nuestras-costas.webp",
    descripcion:
      "Hemos dado un paso importante en la preservación de nuestro entorno con una jornada de limpieza en las costas, llevada adelante por nuestros empleados municipales...",
    slug: "/noticias/jornada-limpieza-nuestras-costas",
  },
  {
    id: "homenaje-teniente-mario-victor-nivoli",
    titulo: "Homenaje al Teniente Mario Víctor Nivoli",
    fecha: "2024-05-13",
    fechaDisplay: "13 de mayo de 2024",
    imagen: "/homenaje-teniente-mario-victor-nivoli.webp",
    descripcion:
      "Rendimos homenaje a la memoria del Teniente Mario Víctor Nivoli, cuyo coraje y sacrificio en las Islas Malvinas continúan inspirándonos como comunidad...",
    slug: "/noticias/homenaje-teniente-mario-victor-nivoli",
  },
  {
    id: "acto-malvinas-argentinas",
    titulo: "Acto en conmemoración del Día del Veterano y de los Caídos en la Guerra de Malvinas",
    fecha: "2024-04-02",
    fechaDisplay: "2 de abril de 2024",
    imagen: "/acto-malvinas-argentinas.webp",
    descripcion:
      "En la Plazoleta de los Fundadores se realizó un emotivo acto en homenaje a los Veteranos y a los Caídos en la Guerra de Malvinas...",
    slug: "/noticias/acto-malvinas-argentinas",
  },
  {
    id: "adoquinado-plaza-estudiante",
    titulo: "Avanza el adoquinado de la Plaza del Estudiante",
    fecha: "2024-03-25",
    fechaDisplay: "25 de marzo de 2024",
    imagen: "/avanza-adoquinado.webp",
    descripcion:
      "La Municipalidad informa que se encuentra en plena ejecución la obra de adoquinado en la Plaza del Estudiante, mejorando la circulación peatonal y vial...",
    slug: "/noticias/adoquinado-plaza-estudiante",
  },
  {
    id: "avanzando-juntos",
    titulo: "Avanzando juntos hacia un futuro mejor en Villa del Dique",
    fecha: "2024-03-16",
    fechaDisplay: "16 de marzo de 2024",
    imagen: "/avanzando-juntos.webp",
    descripcion:
      "La gestión municipal informa los avances logrados en el marco del plan de obras públicas, incluyendo infraestructura educativa, espacios verdes y seguridad ciudadana...",
    slug: "/noticias/avanzando-juntos",
  },
  {
    id: "casa-estudiantes-cordoba",
    titulo: "Villa del Dique ya cuenta con su Casa de Estudiantes en Córdoba Capital",
    fecha: "2024-02-07",
    fechaDisplay: "7 de febrero de 2024",
    imagen: "/casa-de-estudiantes-villa-del-dique-en-c-rdoba-cap.png",
    descripcion:
      "La Municipalidad anuncia con gran satisfacción la concreción de la Casa de Estudiantes en Córdoba Capital, un espacio destinado a brindar apoyo a los jóvenes...",
    slug: "/noticias/casa-estudiantes-cordoba",
  },
]

export default function NoticiasPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [paginaActual, setPaginaActual] = useState(1)
  const noticiasPorPagina = 6

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const noticiasOrdenadas = [...todasLasNoticias].sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime(),
  )

  const noticiaDestacada = noticiasOrdenadas[0]

  const noticiasRestantes = noticiasOrdenadas.slice(1)

  const totalPaginas = Math.ceil(noticiasRestantes.length / noticiasPorPagina)
  const indiceInicio = (paginaActual - 1) * noticiasPorPagina
  const indiceFin = indiceInicio + noticiasPorPagina
  const noticiasPaginaActual = noticiasRestantes.slice(indiceInicio, indiceFin)

  const irAPagina = (pagina: number) => {
    setPaginaActual(pagina)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const paginaAnterior = () => {
    if (paginaActual > 1) {
      irAPagina(paginaActual - 1)
    }
  }

  const paginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      irAPagina(paginaActual + 1)
    }
  }

  const obtenerPaginasVisibles = () => {
    const paginas = []
    const maxPaginasVisibles = 5

    if (totalPaginas <= maxPaginasVisibles) {
      for (let i = 1; i <= totalPaginas; i++) {
        paginas.push(i)
      }
    } else {
      if (paginaActual <= 3) {
        for (let i = 1; i <= 4; i++) {
          paginas.push(i)
        }
        paginas.push("ellipsis")
        paginas.push(totalPaginas)
      } else if (paginaActual >= totalPaginas - 2) {
        paginas.push(1)
        paginas.push("ellipsis")
        for (let i = totalPaginas - 3; i <= totalPaginas; i++) {
          paginas.push(i)
        }
      } else {
        paginas.push(1)
        paginas.push("ellipsis")
        for (let i = paginaActual - 1; i <= paginaActual + 1; i++) {
          paginas.push(i)
        }
        paginas.push("ellipsis")
        paginas.push(totalPaginas)
      }
    }

    return paginas
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

      <main className="flex-grow container mx-auto py-8 px-4 sm:py-12 md:py-16 lg:py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">Noticias</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente informado sobre las últimas novedades y acontecimientos de Villa del Dique
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Noticia Destacada</h2>
          <Link href={noticiaDestacada.slug} className="group">
            <article className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 sm:h-80 lg:h-96">
                  <Image
                    src={noticiaDestacada.imagen || "/placeholder.svg"}
                    alt={noticiaDestacada.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex items-center space-x-2 text-[#16b5d0] mb-4">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{noticiaDestacada.fechaDisplay}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-[#16b5d0] transition-colors duration-200">
                    {noticiaDestacada.titulo}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{noticiaDestacada.descripcion}</p>
                  <div className="flex items-center text-[#16b5d0] font-semibold group-hover:text-[#0ea5e9] transition-colors duration-200">
                    <span>Leer más</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Más Noticias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticiasPaginaActual.map((noticia) => (
              <Link key={noticia.id} href={noticia.slug} className="group">
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-48">
                    <Image
                      src={noticia.imagen || "/placeholder.svg"}
                      alt={noticia.titulo}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-2 text-[#16b5d0] mb-3">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{noticia.fechaDisplay}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#16b5d0] transition-colors duration-200">
                      {noticia.titulo}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{noticia.descripcion}</p>
                    <div className="flex items-center text-[#16b5d0] font-semibold text-sm group-hover:text-[#0ea5e9] transition-colors duration-200">
                      <span>Leer más</span>
                      <ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {totalPaginas > 1 && (
            <div className="flex justify-center items-center space-x-2 mt-12">
              <button
                onClick={paginaAnterior}
                disabled={paginaActual === 1}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Anterior
              </button>

              <div className="flex space-x-1">
                {obtenerPaginasVisibles().map((pagina, index) =>
                  pagina === "ellipsis" ? (
                    <span key={`ellipsis-${index}`} className="px-3 py-2 text-sm text-gray-500">
                      ...
                    </span>
                  ) : (
                    <button
                      key={pagina}
                      onClick={() => irAPagina(pagina as number)}
                      className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                        paginaActual === pagina
                          ? "bg-[#16b5d0] text-white"
                          : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      {pagina}
                    </button>
                  ),
                )}
              </div>

              <button
                onClick={paginaSiguiente}
                disabled={paginaActual === totalPaginas}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                Siguiente
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          )}

          <div className="text-center mt-6 text-sm text-gray-600">
            Mostrando {indiceInicio + 1} - {Math.min(indiceFin, noticiasRestantes.length)} de {noticiasRestantes.length}{" "}
            noticias (Página {paginaActual} de {totalPaginas})
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
