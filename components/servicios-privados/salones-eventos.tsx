import { MapPin, Phone, Mail } from "lucide-react"

export default function SalonesYEventos() {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🎉</span>
        Salones / Eventos
      </h3>
      <div className="pl-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Salon Zafiro Azul</h4>
          <p className="text-sm text-gray-600 mb-2">Servicio: Alquiler de salón para eventos</p>
          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <span className="font-medium">• Luciana Gonzalez</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#16b5d0]" />
              <span>Río Segundo s/n</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#16b5d0]" />
              <a href="tel:03546/15456224" className="hover:text-[#16b5d0]">
                03546/15456224
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-[#16b5d0]" />
              <a href="mailto:lucianagonzalez821@gmail.com" className="hover:text-[#16b5d0]">
                lucianagonzalez821@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
