"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Crear mensaje predefinido para WhatsApp
    const whatsappMessage = `¡Hola! Me contacto desde la web de Merkat Agri.

*Datos de contacto:*
• Nombre: ${formData.name}
• Email: ${formData.email}
• Teléfono: ${formData.phone}
• Asunto: ${formData.subject}

*Mensaje:*
${formData.message}

¡Espero su respuesta!`

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(whatsappMessage)

    // Abrir WhatsApp con el mensaje predefinido
    const whatsappUrl = `https://wa.me/2622522760?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-gray-900 mb-6">
            <span className="text-[#ffdd02]">CONTACTANOS</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Estamos aquí para ayudarte con todas tus necesidades de maquinaria agrícola. Contáctanos y descubre cómo
            podemos impulsar tu producción.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Información de contacto */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-8">
                Información de <span className="text-[#D2691E]">Contacto</span>
              </h2>
            </div>

            <div className="space-y-6">
              {/* Ubicación */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ffdd02] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 mb-1">Ubicación</h3>
                  <p className="text-gray-600 font-sans">Cornelio Saavedra 44</p>
                  <p className="text-gray-600 font-sans">La Consulta, Mendoza</p>
                  <p className="text-gray-500 text-sm font-sans mt-1">Argentina</p>
                </div>
              </div>

              {/* Teléfono */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D2691E] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 mb-1">Teléfono</h3>
                  <a href="tel:262252270" className="text-gray-600 hover:text-[#D2691E] transition-colors font-sans">
                    262252270
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#ffdd02] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 mb-1">Email</h3>
                  <a
                    href="mailto:gsosa@merkatagri.com"
                    className="text-gray-600 hover:text-[#D2691E] transition-colors font-sans"
                  >
                    gsosa@merkatagri.com
                  </a>
                </div>
              </div>

              {/* Horarios */}
              <div className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D2691E] rounded-lg flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-gray-900 mb-1">Horarios</h3>
                  <p className="text-gray-600 font-sans">Lunes a Viernes: 8:00 - 18:00</p>
                  <p className="text-gray-600 font-sans">Sábados: 8:00 - 13:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-8">
              Envíanos un <span className="text-[#D2691E]">Mensaje</span>
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2 font-sans">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdd02] focus:border-transparent transition-colors font-sans"
                  placeholder="Tu nombre completo"
                />
              </div>

              {/* Email y Teléfono */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2 font-sans">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdd02] focus:border-transparent transition-colors font-sans"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2 font-sans">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdd02] focus:border-transparent transition-colors font-sans"
                    placeholder="+52 1 55 ..."
                  />
                </div>
              </div>

              {/* Asunto */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2 font-sans">
                  Asunto *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdd02] focus:border-transparent transition-colors font-sans"
                >
                  <option value="">Selecciona un asunto</option>
                  <option value="Consulta sobre trituradoras ORSI">Consulta sobre trituradoras ORSI</option>
                  <option value="Implementos agrícolas">Implementos agrícolas</option>
                  <option value="Servicio técnico">Servicio técnico</option>
                  <option value="Repuestos ORSI">Repuestos ORSI</option>
                  <option value="Financiación">Financiación</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2 font-sans">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ffdd02] focus:border-transparent transition-colors resize-none font-sans"
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                />
              </div>

              {/* Botón de envío */}
              <button
                type="submit"
                className="w-full bg-[#ffdd02] hover:bg-[#e6c402] text-black font-bold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2 font-display"
              >
                <Send className="w-5 h-5" />
                <span>Enviar por WhatsApp</span>
              </button>

              <p className="text-sm text-gray-500 text-center font-sans">
                Al enviar este formulario, serás redirigido a WhatsApp con tu mensaje prellenado.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
