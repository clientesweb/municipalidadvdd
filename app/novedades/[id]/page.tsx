import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, MapPin } from "lucide-react"

// Datos de las noticias
const newsArticles = {
  "visita-director-orsi": {
    id: "visita-director-orsi",
    title: "Visita del Director Comercial de ORSI Group a San Juan",
    date: "Junio 2025",
    location: "General San Martín, San Juan",
    excerpt:
      "Recibimos la visita del Director Comercial de Orsi Group, el señor Alessandro Carini, visitamos campos y nos reunimos con autoridades municipales.",
    content: `
      <div class="space-y-6">
        <p class="text-lg leading-relaxed">
          En el mes de junio de 2025, tuvimos el honor de recibir la visita del Director Comercial de ORSI Group, 
          el señor <strong>Alessandro Carini</strong>, en una jornada que marcó un hito importante para el 
          fortalecimiento de nuestra alianza estratégica en Argentina.
        </p>
        
        <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">Visita al Municipio de General San Martín</h3>
        <p class="leading-relaxed">
          Visitamos junto al Director Comercial de ORSI Group el municipio de <strong>General San Martín</strong>, 
          en la provincia de San Juan, donde fuimos recibidos cordialmente por las autoridades municipales. 
          Durante esta visita oficial, las autoridades locales adquirieron un brazo desbrozador ORSI, 
          demostrando su confianza en la calidad y eficiencia de nuestros equipos.
        </p>
        
        <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">Demostración en Campo</h3>
        <p class="leading-relaxed">
          La jornada incluyó una completa demostración en campo de los equipos ORSI, donde pudimos mostrar 
          las capacidades y ventajas técnicas de nuestros brazos desbrozadores. Los asistentes, incluyendo 
          ingenieros agrónomos y productores locales, pudieron observar de primera mano el rendimiento 
          excepcional de la maquinaria en condiciones reales de trabajo.
        </p>
        
        <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">Reuniones Estratégicas</h3>
        <p class="leading-relaxed">
          Durante la visita, mantuvimos importantes reuniones con ingenieros y productores de la región, 
          intercambiando conocimientos técnicos y explorando nuevas oportunidades de colaboración. 
          Estas reuniones fortalecieron nuestros vínculos comerciales y nos permitieron conocer mejor 
          las necesidades específicas del mercado sanjuanino.
        </p>
        
        <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">Impacto y Proyecciones</h3>
        <p class="leading-relaxed">
          Esta visita representa un paso fundamental en la consolidación de MERKAT AGRI como distribuidor 
          oficial de ORSI Group en Argentina. La presencia del Director Comercial Alessandro Carini 
          refuerza nuestro compromiso con la excelencia y la innovación en el sector agrícola argentino.
        </p>
      </div>
    `,
    images: [
      {
        src: "/images/news/visita-director-orsi-7.jpeg",
        alt: "Reunión oficial con autoridades municipales de General San Martín",
        caption:
          "Reunión oficial en el municipio de General San Martín con la presencia del Director Comercial Alessandro Carini",
      },
      {
        src: "/images/news/visita-director-orsi-1.jpeg",
        alt: "Foto grupal en el campo con equipo ORSI",
        caption: "Equipo de MERKAT AGRI junto al Director Comercial de ORSI Group en demostración de campo",
      },
      {
        src: "/images/news/visita-director-orsi-2.jpeg",
        alt: "Demostración del brazo desbrozador ORSI",
        caption: "Demostración técnica del brazo desbrozador ORSI con asistencia de ingenieros y productores",
      },
      {
        src: "/images/news/visita-director-orsi-3.jpeg",
        alt: "Brazo desbrozador ORSI en funcionamiento",
        caption: "Brazo desbrozador ORSI montado en tractor durante la demostración práctica",
      },
      {
        src: "/images/news/visita-director-orsi-4.jpeg",
        alt: "Equipo ORSI trabajando en el campo",
        caption: "Equipo ORSI en pleno funcionamiento mostrando su eficiencia y robustez",
      },
      {
        src: "/images/news/visita-director-orsi-5.jpeg",
        alt: "Trabajo en viñedos con equipo ORSI",
        caption: "Demostración del equipo ORSI trabajando en viñedos con excelentes resultados",
      },
      {
        src: "/images/news/visita-director-orsi-6.jpeg",
        alt: "Grupo observando demostración",
        caption: "Ingenieros, productores y autoridades observando la demostración técnica",
      },
    ],
  },
  "feria-forestal-2025": {
    id: "feria-forestal-2025",
    title: "Participación en la Feria Forestal Argentina 2025",
    date: "6 al 9 de Noviembre 2025",
    location: "INTA Concordia, Entre Ríos",
    excerpt:
      "MERKAT AGRI participará en la 17ma Feria Forestal Argentina edición NEA – Entre Ríos, el evento más importante del sector forestal.",
    content: `
      <div class="space-y-6">
        <p class="text-lg leading-relaxed">
          <strong>MERKAT AGRI</strong> se complace en anunciar su participación en la 
          <strong>17ma Feria Forestal Argentina edición NEA – Entre Ríos</strong>, 
          el evento más importante del sector forestal en Argentina.
        </p>
        
        <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">Detalles del Evento</h3>
        <div class="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
          <ul class="space-y-2">
            <li><strong>Fechas:</strong> 6 al 9 de noviembre de 2025</li>
            <li><strong>Ubicación:</strong> Estación Experimental Agropecuaria del INTA CONCORDIA</li>
            <li><strong>Dirección:</strong> Ruta Nacional 14 km 259, Concordia, Entre Ríos</li>
            <li><strong>Edición:</strong> 17ma Feria Forestal Argentina</li>
          </ul>
        </div>
        
        <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">Nuestra Participación</h3>
        <p class="leading-relaxed">
          En esta importante feria, MERKAT AGRI presentará la línea completa de equipos forestales ORSI, 
          incluyendo trituradoras forestales, brazos desbrozadores y maquinaria especializada para el 
          sector forestal. Será una excelente oportunidad para conocer de cerca nuestros productos 
          y las últimas innovaciones en tecnología forestal.
        </p>
        
        <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">Equipos a Exhibir</h3>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-bold text-green-600 mb-2">Trituradoras Forestales</h4>
            <ul class="text-sm space-y-1">
              <li>• SS FORREST</li>
              <li>• BEARS FORREST</li>
              <li>• HULK FORREST</li>
              <li>• WILD FORREST DT</li>
            </ul>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h4 class="font-bold text-green-600 mb-2">Brazos Desbrozadores</h4>
            <ul class="text-sm space-y-1">
              <li>• RIVER COMPACT RIO</li>
              <li>• PERFORMANCE PARALELOGRAM</li>
              <li>• LEADER GP</li>
            </ul>
          </div>
        </div>
        
        <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">Importancia del Evento</h3>
        <p class="leading-relaxed">
          La Feria Forestal Argentina es el encuentro más relevante del sector forestal en el país, 
          reuniendo a productores, empresarios, técnicos y profesionales de toda la región. 
          Es el espacio ideal para conocer las últimas tendencias, tecnologías y establecer 
          contactos comerciales estratégicos.
        </p>
        
        <h3 class="text-2xl font-bold text-green-700 mt-8 mb-4">Te Esperamos</h3>
        <p class="leading-relaxed">
          Invitamos a todos los productores forestales, contratistas y profesionales del sector 
          a visitarnos en nuestro stand durante los cuatro días del evento. Nuestro equipo técnico 
          estará disponible para brindar asesoramiento personalizado y demostrar las capacidades 
          de nuestros equipos ORSI.
        </p>
      </div>
    `,
    images: [
      {
        src: "/images/news/feria-forestal-banner.webp",
        alt: "Banner oficial Feria Forestal Argentina 2025",
        caption: "17ma Feria Forestal Argentina - 6 al 9 de noviembre 2025",
      },
      {
        src: "/images/news/feria-forestal-header.png",
        alt: "Header Feria Forestal Argentina Entre Ríos",
        caption: "Feria Forestal Argentina - Edición AGRO Entre Ríos",
      },
      {
        src: "/images/news/feria-maquinaria.jpeg",
        alt: "Maquinaria forestal en exhibición",
        caption: "Maquinaria forestal de última generación en exhibición durante la feria",
      },
      {
        src: "/images/news/feria-forestal-2025.png",
        alt: "Logo Feria Forestal 2025",
        caption: "Logo oficial de la Feria Forestal Argentina 2025",
      },
    ],
  },
}

interface PageProps {
  params: {
    id: string
  }
}

export async function generateStaticParams() {
  return Object.keys(newsArticles).map((id) => ({
    id: id,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = newsArticles[params.id as keyof typeof newsArticles]

  if (!article) {
    return {
      title: "Noticia no encontrada - MERKAT AGRI",
    }
  }

  return {
    title: `${article.title} - MERKAT AGRI`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.images.length > 0 ? [article.images[0].src] : [],
    },
  }
}

export default function NewsArticlePage({ params }: PageProps) {
  const article = newsArticles[params.id as keyof typeof newsArticles]

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href="/novedades" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a Novedades
          </Link>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">{article.title}</h1>

            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {article.date}
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {article.location}
              </div>
            </div>

            <p className="text-lg text-gray-700 leading-relaxed">{article.excerpt}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Image */}
          {article.images.length > 0 && (
            <div className="mb-8">
              <Image
                src={article.images[0].src || "/placeholder.svg"}
                alt={article.images[0].alt}
                width={800}
                height={400}
                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-2 text-center italic">{article.images[0].caption}</p>
            </div>
          )}

          {/* Article Content */}
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-8">
            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Image Gallery */}
          {article.images.length > 1 && (
            <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Galería de Imágenes</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {article.images.slice(1).map((image, index) => (
                  <div key={index} className="space-y-2">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 italic">{image.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Back to News */}
          <div className="text-center mt-8">
            <Link
              href="/novedades"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Ver Todas las Novedades
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
