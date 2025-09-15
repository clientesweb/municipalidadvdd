import { MapPin, Phone, Mail } from "lucide-react"

export default function AlquilerBanosSanitarios() {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🚽</span>
        Alquiler de Baños / Sanitarios
      </h3>
      <div className="pl-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Baños Químicos Calamuchita</h4>
          <p className="text-sm text-gray-600 mb-2">
            Servicio: Alquiler de baños químicos para obras y eventos, obradores, desagote de cámara séptica
          </p>
          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <span className="font-medium">• Vanina K. Lopez</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#16b5d0]" />
              <span>La Falda 441, Villa del Dique</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#16b5d0]" />
              <a href="tel:+5493516786671" className="hover:text-[#16b5d0]">
                +54 9 351 678-6671
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-[#16b5d0]" />
              <a href="mailto:bqcalamuchita@hotmail.com" className="hover:text-[#16b5d0]">
                bqcalamuchita@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
