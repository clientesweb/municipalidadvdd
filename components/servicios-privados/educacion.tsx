import { MapPin, Phone } from "lucide-react"

export default function Educacion() {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">📚</span>
        Educación
      </h3>
      <div className="pl-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Belen Boschi</h4>
          <p className="text-sm text-gray-600 mb-2">Servicio: Enseñanza e interpretación de Inglés-Español</p>
          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#16b5d0]" />
              <span>Hipólito Irigoyen 450</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#16b5d0]" />
              <a href="tel:3546431486" className="hover:text-[#16b5d0]">
                3546 431486
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
