import { MapPin, Phone } from "lucide-react"

export default function ServiciosDeSalud() {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">👩‍👧</span>
        Servicios de Salud
      </h3>
      <div className="grid md:grid-cols-2 gap-6 pl-6">
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Vanina López</h4>
            <p className="text-sm text-gray-600 mb-2">Servicio: Ayudante terapéutico</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>La Falda 441</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3516521470" className="hover:text-[#16b5d0]">
                  351 6521470
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Leticia Ficalora</h4>
            <p className="text-sm text-gray-600 mb-2">Servicio: Ayudante terapéutico</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Santa Fe 230</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:2972431256" className="hover:text-[#16b5d0]">
                  2972 431256
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Sentir Salud Audiología</h4>
          <p className="text-sm text-gray-600 mb-2">Responsable: Marina Farrando - Servicio: Fonoaudiología</p>
          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#16b5d0]" />
              <span>Neuquén 49</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#16b5d0]" />
              <a href="tel:3571536738" className="hover:text-[#16b5d0]">
                3571 536738
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
