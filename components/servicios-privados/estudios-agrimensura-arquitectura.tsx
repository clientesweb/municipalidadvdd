import { MapPin, Phone, Mail } from "lucide-react"

export default function EstudiosAgrimensuraArquitectura() {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">📐</span>
        Estudios / Agrimensura y Arquitectura
      </h3>
      <div className="pl-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Estudio Carnevale & Asoc.</h4>
          <p className="text-sm text-gray-600 mb-2">Servicio: Agrimensura y arquitectura</p>
          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <span className="font-medium">• Ing. Alejandro Carnevale – MP 2899</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#16b5d0]" />
              <span>Buenos Aires 16, Local 7</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#16b5d0]" />
              <a href="tel:3546659946" className="hover:text-[#16b5d0]">
                3546 659946 – 3546 488592
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-[#16b5d0]" />
              <a href="mailto:estudiocarnevale@live.com.ar" className="hover:text-[#16b5d0]">
                estudiocarnevale@live.com.ar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
