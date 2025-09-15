import { MapPin, Phone, Mail } from "lucide-react"

export default function InmobiliariasYBienesRaices() {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🏠</span>
        Inmobiliarias / Bienes Raíces
      </h3>
      <div className="grid md:grid-cols-2 gap-6 pl-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Jose Martino Inmobiliaria</h4>
          <p className="text-sm text-gray-600 mb-2">Servicio: Servicios inmobiliarios</p>
          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <span className="font-medium">• Fabián Martino</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#16b5d0]" />
              <span>San Martín esquina San Casimiro</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#16b5d0]" />
              <a href="tel:3546478441" className="hover:text-[#16b5d0]">
                3546478441
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-[#16b5d0]" />
              <a href="mailto:fabianmmartino@gmail.com" className="hover:text-[#16b5d0]">
                fabianmmartino@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Inmobiliaria Bosio</h4>
          <p className="text-sm text-gray-600 mb-2">Servicio: Inmobiliarios</p>
          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <span className="font-medium">• Bosio Esteban Daniel</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#16b5d0]" />
              <span>Hipólito Irigoyen 250</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#16b5d0]" />
              <a href="tel:3546-439282" className="hover:text-[#16b5d0]">
                3546-439282
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-[#16b5d0]" />
              <a href="mailto:bosioinmobiliaria@gmail.com" className="hover:text-[#16b5d0]">
                bosioinmobiliaria@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
