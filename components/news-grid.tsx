import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Calendar, Handshake } from "lucide-react"

const newsArticles = [
  {
    id: "feria-forestal-2025",
    title: "PARTICIPACIÓN FERIA FORESTAL 2025",
    excerpt:
      "La 17ma FERIA FORESTAL ARGENTINA edición NEA – ENTRE RÍOS tiene previsto su realización del 06 al 09 de noviembre del 2025 en el predio de la Estación Experimental Agropecuaria del INTA CONCORDIA, ubicada sobre la Ruta Nacional 14 km 259 en la Ciudad de Concordia, Provincia de Entre Ríos, ARGENTINA.",
    image: "/images/news/feria-forestal-banner.webp",
    date: "Noviembre 2025",
    category: "Eventos",
    featured: true,
    icon: <Calendar className="h-5 w-5" />,
    content: `
      <p>Merkat Agri participará en la 17ma Feria Forestal Argentina, el evento más importante del sector forestal en el país.</p>
      
      <h3>Detalles del evento:</h3>
      <ul>
        <li><strong>Fechas:</strong> 06 al 09 de noviembre de 2025</li>
        <li><strong>Ubicación:</strong> Estación Experimental Agropecuaria del INTA CONCORDIA</li>
        <li><strong>Dirección:</strong> Ruta Nacional 14 km 259, Concordia, Entre Ríos</li>
        <li><strong>Enfoque:</strong> Tecnología forestal y maquinaria especializada</li>
      </ul>
      
      <p>Estaremos presentando nuestra línea completa de equipos ORSI especializados para el sector forestal, incluyendo trituradoras forestales y brazos desbrozadores.</p>
    `,
  },
  {
    id: "visita-director-orsi",
    title: "Visita del Director Comercial de ORSI Group a General San Martín, San Juan",
    excerpt:
      "Visitamos con el Director Comercial de Orsi Group el señor Alessandro Carini al municipio de General San Martín, en la provincia de San Juan, fuimos recibidos por las autoridades municipales, que adquirieron un brazo desbrozador ORSI.",
    image: "/images/news/visita-director-orsi-7.jpeg",
    date: "Junio 2025",
    category: "Eventos",
    featured: false,
    icon: <Handshake className="h-5 w-5" />,
    content: `
      <p>Una visita histórica que refuerza nuestra alianza estratégica con ORSI Group y nuestro compromiso con el mercado argentino.</p>
      
      <h3>Actividades realizadas:</h3>
      <ul>
        <li><strong>Reunión con autoridades:</strong> Recibimiento oficial en el municipio de General San Martín</li>
        <li><strong>Demostración de equipos:</strong> Presentación del brazo desbrozador ORSI adquirido</li>
        <li><strong>Recorrido de campos:</strong> Evaluación de equipos en condiciones reales de trabajo</li>
        <li><strong>Reuniones técnicas:</strong> Con ingenieros y productores de la región</li>
        <li><strong>Planificación estratégica:</strong> Expansión en el mercado de San Juan</li>
      </ul>
      
      <div class="image-gallery">
        <img src="/images/news/visita-director-orsi-1.jpeg" alt="Grupo con Director Comercial ORSI" />
        <img src="/images/news/visita-director-orsi-2.jpeg" alt="Demostración de equipos en campo" />
        <img src="/images/news/visita-director-orsi-3.jpeg" alt="Brazo desbrozador ORSI en funcionamiento" />
        <img src="/images/news/visita-director-orsi-4.jpeg" alt="Equipo trabajando en viñedos" />
        <img src="/images/news/visita-director-orsi-5.jpeg" alt="Tractor con implemento ORSI" />
        <img src="/images/news/visita-director-orsi-6.jpeg" alt="Presentación técnica a productores" />
      </div>
    `,
  },
  {
    id: "orsi-innovacion-italiana",
    title: "ORSI: Innovación Italiana en Maquinaria Agrícola",
    excerpt:
      "Descubre la excelencia de las trituradoras ORSI, fabricadas en Italia con más de 40 años de experiencia en tecnología agrícola. Conoce por qué somos el distribuidor oficial en Argentina.",
    image: "/images/products/orsi-fruit-extra.jpeg",
    date: "Noviembre 2024",
    category: "Productos",
    featured: false,
    icon: <Award className="h-5 w-5" />,
    content: `
      <p>Merkat Agri se enorgullece de ser el distribuidor oficial de ORSI en Argentina, trayendo la mejor tecnología italiana en trituradoras agrícolas.</p>
      
      <h3>¿Por qué elegir ORSI?</h3>
      <ul>
        <li><strong>Tradición italiana:</strong> Más de 40 años fabricando maquinaria de calidad superior</li>
        <li><strong>Tecnología avanzada:</strong> Rotores balanceados electrónicamente y sistemas hidráulicos de precisión</li>
        <li><strong>Versatilidad:</strong> Equipos para viñedos, frutales, campos y mantenimiento de espacios verdes</li>
        <li><strong>Durabilidad:</strong> Construcción robusta con materiales de primera calidad</li>
      </ul>
      
      <p>Desde las series OPTIMA hasta los modelos KING EXTRA, cada trituradora ORSI representa la perfecta combinación entre tradición artesanal italiana y tecnología moderna.</p>
    `,
  },
]

export default function NewsGrid() {
  const featuredArticle = newsArticles.find((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            <span className="text-[#B8860B]">ÚLTIMAS</span> NOVEDADES
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Mantente al día con las últimas noticias, eventos y desarrollos de Merkat Agri. Descubre cómo seguimos
            innovando con la tecnología ORSI para el campo argentino.
          </p>
        </div>

        {/* Featured Article */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 lg:h-96 overflow-hidden">
                  <Image
                    src={featuredArticle.image || "/placeholder.svg"}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#ffdd02] text-black px-3 py-1 rounded-full text-sm font-bold font-display">
                      DESTACADO
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-2 text-[#D2691E] mb-4">
                    {featuredArticle.icon}
                    <span className="text-sm font-semibold font-sans">{featuredArticle.category}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-sm text-gray-600 font-sans">{featuredArticle.date}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-gray-900 mb-4 leading-tight">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-gray-600 mb-8 font-sans leading-relaxed text-lg">{featuredArticle.excerpt}</p>

                  <Button
                    asChild
                    className="bg-[#ffdd02] hover:bg-[#e6c402] text-black font-bold px-8 py-3 rounded-lg transition-all duration-300 group/btn w-fit font-display"
                  >
                    <Link href={`/novedades/${featuredArticle.id}`} className="flex items-center gap-2">
                      Leer artículo completo
                      <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {regularArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-[#D2691E] mb-3">
                  {article.icon}
                  <span className="text-sm font-semibold font-sans">{article.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600 font-sans">{article.date}</span>
                </div>

                <h3 className="text-xl font-display font-bold text-gray-900 mb-3 leading-tight">{article.title}</h3>

                <p className="text-gray-600 mb-4 font-sans leading-relaxed">{article.excerpt}</p>

                <Button
                  asChild
                  variant="outline"
                  className="border-[#ffdd02] text-[#D2691E] hover:bg-[#ffdd02] hover:text-black transition-all duration-300 font-display font-semibold bg-transparent"
                >
                  <Link href={`/novedades/${article.id}`} className="flex items-center gap-2">
                    Leer más
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-4">
              ¿Quieres estar al día con nuestras <span className="text-[#D2691E]">novedades</span>?
            </h3>
            <p className="text-lg text-gray-600 mb-8 font-sans">
              Síguenos en nuestras redes sociales y no te pierdas ninguna novedad del mundo agrícola.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-[#ffdd02] hover:bg-[#e6c402] text-black font-bold px-8 py-3 rounded-lg transition-all duration-300 font-display"
              >
                <Link href="/contacto">Contáctanos</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#D2691E] text-[#D2691E] hover:bg-[#D2691E] hover:text-white transition-all duration-300 font-display font-semibold bg-transparent"
              >
                <a
                  href="https://wa.me/2622522760?text=¡Hola! Me interesa recibir novedades de Merkat Agri sobre equipos ORSI."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
