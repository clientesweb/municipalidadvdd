import { MapPin, Phone, Mail } from "lucide-react"

export default function Soldadores() {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🔧</span>
        Soldadores
      </h3>
      <div className="grid md:grid-cols-2 gap-6 pl-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">SA Servicio Técnico en Refrigeración</h4>
          <p className="text-sm text-gray-600 mb-2">Responsable: Santiago Arce</p>
          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#16b5d0]" />
              <span>Suecia y Esoovaquia</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#16b5d0]" />
              <a href="tel:3586010635" className="hover:text-[#16b5d0]">
                3586010635
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-[#16b5d0]" />
              <a href="mailto:arcesanty01@gmail.com" className="hover:text-[#16b5d0]">
                arcesanty01@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">HIERRO CRIOLLO</h4>
          <p className="text-sm text-gray-600 mb-2">Responsable: Marcos Fantoni</p>
          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#16b5d0]" />
              <span>Los Algarrobos s/n</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#16b5d0]" />
              <a href="tel:3532402028" className="hover:text-[#16b5d0]">
                3532402028
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
