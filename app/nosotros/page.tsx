import Image from "next/image"
import { CheckCircle, Award, Globe, Users, Wrench, Leaf } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NosotrosPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] overflow-hidden">
          <Image
            src="/images/nosotros-banner-principal.jpeg"
            alt="ORSI - Wild to Survive - Tecnología italiana para el campo argentino"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-white mb-6 leading-tight">
                  Nosotros
                </h1>
                <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-sans leading-relaxed">
                  Tecnología italiana de vanguardia para revolucionar la agricultura argentina
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 leading-tight">
                  Tecnología <span className="text-[#eeb010]">italiana</span> para el{" "}
                  <span className="text-[#dc2626]">campo argentino</span>
                </h2>

                <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Merkat Agri ha nacido para ofrecer al agricultor argentino los equipos agrícolas de la más avanzada
                    tecnología y la mayor calidad, que le permitan tener mayor productividad en su actividad agrícola.
                  </p>

                  <p>
                    Estamos especializados en equipos de trituración y laboreo del suelo, además de tener una amplia
                    gama de desmenuzadoras de brazos para mantenimientos de carretera, canales y árboles.
                  </p>

                  <p>
                    Nuestros equipos se distinguen por su alta calidad y probada funcionalidad en los campos de
                    Argentina y en América donde ORSI tiene su almacén de máquinas y repuestos.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/3]">
                  <Image
                    src="/images/nosotros-1.jpeg"
                    alt="Tractor ORSI trabajando en campo verde - Tecnología italiana"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#eeb010] rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#dc2626] rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                Nuestros Valores
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprometidos con la excelencia, la innovación y el desarrollo sostenible del sector agrícola
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#eeb010]/20 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-[#eeb010]" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">Calidad Superior</h3>
                <p className="text-gray-600 leading-relaxed">
                  Equipos fabricados con los más altos estándares de calidad italiana, garantizando durabilidad y
                  rendimiento excepcional.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#dc2626]/20 rounded-full flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8 text-[#dc2626]" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">Experiencia Global</h3>
                <p className="text-gray-600 leading-relaxed">
                  Más de 40 años de experiencia en el mercado internacional, adaptando tecnología europea a las
                  necesidades argentinas.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mb-6">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">Sostenibilidad</h3>
                <p className="text-gray-600 leading-relaxed">
                  Comprometidos con prácticas agrícolas sostenibles que respetan el medio ambiente y optimizan recursos.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#eeb010]/20 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-[#eeb010]" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">Servicio Personalizado</h3>
                <p className="text-gray-600 leading-relaxed">
                  Atención especializada y soporte técnico continuo para garantizar el máximo aprovechamiento de
                  nuestros equipos.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-[#dc2626]/20 rounded-full flex items-center justify-center mb-6">
                  <Wrench className="w-8 h-8 text-[#dc2626]" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">Innovación Constante</h3>
                <p className="text-gray-600 leading-relaxed">
                  Investigación y desarrollo continuo para ofrecer las soluciones más avanzadas del mercado agrícola.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-display font-bold text-gray-900 mb-4">Confiabilidad</h3>
                <p className="text-gray-600 leading-relaxed">
                  Equipos probados en condiciones extremas, respaldados por garantía y red de servicio en toda América.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Showcase */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
                Tecnología en Acción
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nuestros equipos ORSI trabajando en diferentes condiciones y aplicaciones
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image 1 */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                  <Image
                    src="/images/nosotros-2.jpeg"
                    alt="Excavadora con equipo ORSI trabajando en vegetación"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">Mantenimiento Forestal</h3>
                    <p className="text-white/90">
                      Equipos especializados para limpieza y mantenimiento de áreas forestales y vegetación densa.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image 2 */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/3]">
                  <Image
                    src="/images/nosotros-3.jpeg"
                    alt="Maquinaria ORSI triturando material en campo"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-display font-bold text-white mb-2">Trituración Profesional</h3>
                    <p className="text-white/90">
                      Potencia y precisión para trabajos de trituración intensiva en cualquier terreno.
                    </p>
                  </div>
                </div>
              </div>

              {/* Image 3 - Full width */}
              <div className="lg:col-span-2 relative group">
                <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[16/9]">
                  <Image
                    src="/images/nosotros-4.jpeg"
                    alt="Tractor ORSI con brazo articulado para mantenimiento de carreteras"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 flex items-center">
                    <div className="max-w-2xl ml-8 sm:ml-12 lg:ml-16">
                      <h3 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                        Mantenimiento Vial
                      </h3>
                      <p className="text-xl text-white/90 leading-relaxed">
                        Soluciones especializadas para el mantenimiento de carreteras, cunetas y espacios públicos con
                        la máxima eficiencia y seguridad.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight">
                  Alianza Estratégica con <span className="text-[#eeb010]">ORSI</span>
                </h2>

                <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                  <p>
                    Desde 1979, ORSI ha sido pionero en el desarrollo de maquinaria agrícola italiana de alta calidad.
                    Como distribuidores oficiales en Argentina, llevamos esta tradición de excelencia a los campos
                    argentinos.
                  </p>

                  <p>
                    La filosofía "Wild to Survive" de ORSI refleja la resistencia y adaptabilidad que caracterizan tanto
                    a sus equipos como a los agricultores que los utilizan día a día.
                  </p>

                  <p>
                    Con almacenes estratégicos en América, garantizamos disponibilidad inmediata de repuestos y soporte
                    técnico especializado para maximizar la productividad de nuestros clientes.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-[#eeb010]">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Distribuidor Oficial</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#eeb010]">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Soporte 24/7</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#eeb010]">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Repuestos Originales</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/nosotros-banner-principal.jpeg"
                    alt="ORSI - Wild to Survive - Maquinaria italiana de calidad"
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#eeb010] rounded-full opacity-30 blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#dc2626] rounded-full opacity-30 blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#eeb010]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
              ¿Listo para revolucionar tu campo?
            </h2>
            <p className="text-xl text-gray-800 mb-8 max-w-3xl mx-auto">
              Descubre cómo nuestros equipos ORSI pueden transformar tu productividad agrícola
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/productos"
                className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-display font-bold rounded-lg hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Ver Productos
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-gray-900 text-gray-900 font-display font-bold rounded-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Contactar Ahora
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
