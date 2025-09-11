import Image from "next/image"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "OPTIMA 155/180",
    brand: "ORSI",
    image: "/images/products/orsi-optima.jpeg",
    description: "Trituradora fija con martillos para césped, poda y ramas hasta 4cm. Rango: 25-40 HP",
    slug: "orsi-optima-155",
    category: "Trituradoras Fijas",
  },
  {
    id: 2,
    name: "WPG",
    brand: "ORSI",
    image: "/images/products/orsi-wpg.jpeg",
    description: "Trituradora fija con rotor balanceado electrónicamente. Rango: 65-130 HP",
    slug: "orsi-wpg",
    category: "Trituradoras Fijas",
  },
  {
    id: 3,
    name: "WLC",
    brand: "ORSI",
    image: "/images/products/orsi-wlc.jpeg",
    description: "Trituradora fija con martillos para viñedos y frutales. Rango: 25-70 HP",
    slug: "orsi-wlc",
    category: "Trituradoras Fijas",
  },
  {
    id: 4,
    name: "VULCANIC",
    brand: "ORSI",
    image: "/images/products/orsi-vulcanic.jpeg",
    description: "Trituradora lateral para limpieza de cunetas y taludes. Rango: 40-80 HP",
    slug: "orsi-vulcanic",
    category: "Trituradoras Laterales",
  },
  {
    id: 5,
    name: "KING EXTRA",
    brand: "ORSI",
    image: "/images/products/orsi-king-extra.jpeg",
    description: "Trituradora fija con rotor balanceado para trabajos intensivos. Rango: 50-120 HP",
    slug: "orsi-king-extra",
    category: "Trituradoras Fijas",
  },
  {
    id: 6,
    name: "COMPETITION GS",
    brand: "ORSI",
    image: "/images/products/orsi-competition-gs.jpeg",
    description:
      "Trituradora lateral con gran alcance para limpieza de muelles, zanjas y terraplenes. Rango: 60-100 HP",
    slug: "orsi-competition-gs",
    category: "Trituradoras Laterales",
  },
  {
    id: 7,
    name: "S1 Desbrotadora",
    brand: "VBC",
    image: "/images/products/vbc-s1-spollonatrice.png",
    description:
      "Desbrotadora VBC con sistema de cables para eliminar brotes no deseados. Favorece plantas más saludables.",
    slug: "vbc-s1-desbrotadora",
    category: "Equipos Vitícolas",
  },
  {
    id: 8,
    name: "DK1 Deshojadora",
    brand: "VBC",
    image: "/images/products/vbc-dk1-deshojadora.jpeg",
    description: "Deshojadora VBC con rodillos y aspiración. Mejora ventilación y calidad de la uva.",
    slug: "vbc-dk1-deshojadora",
    category: "Equipos Vitícolas",
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-display font-bold text-gray-900 mb-4">
            Productos <span className="text-[#D2691E]">Destacados</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4 font-sans">
            Descubrí nuestra línea completa de trituradoras ORSI y equipos vitícolas VBC para todas tus necesidades
            agrícolas
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4">
                  <span className="bg-[#D2691E] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium font-sans">
                    {product.brand}
                  </span>
                </div>
                <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                  <span className="bg-[#ffdd02] text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium font-sans">
                    {product.category}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-display font-bold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3 font-sans">{product.description}</p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <Link
                    href={`/productos/${product.slug}`}
                    className="inline-flex items-center text-[#D2691E] hover:text-[#B8541A] font-medium transition-colors text-sm sm:text-base font-sans"
                  >
                    Ver detalles
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>

                  <a
                    href={`https://wa.me/2622522760?text=Hola%20Merkat%20Agri,%20me%20interesa%20obtener%20más%20información%20sobre%20${encodeURIComponent(product.name)}%20de%20${encodeURIComponent(product.brand)}.%20¿Podrían%20brindarme%20detalles%20sobre%20disponibilidad,%20precio%20y%20especificaciones%20técnicas?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#ffdd02] hover:bg-[#D2691E] hover:text-white text-black px-3 sm:px-4 py-2 rounded-lg font-medium transition-colors text-sm sm:text-base w-full sm:w-auto font-sans text-center"
                  >
                    Consultar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <Link
            href="/productos"
            className="inline-flex items-center bg-[#D2691E] hover:bg-[#B8541A] text-white px-6 sm:px-8 py-3 rounded-lg font-medium transition-colors text-sm sm:text-base font-display"
          >
            Ver todos los productos
            <svg className="ml-2 w-4 sm:w-5 h-4 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
