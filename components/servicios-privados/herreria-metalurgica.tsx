import { MapPin, Phone, Mail } from "lucide-react"

export default function HerreriaMetalurgica() {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🔧</span>
        Herrería / Metalúrgica
      </h3>
      <div className="pl-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Techos Calamuchita</h4>
          <p className="text-sm text-gray-600 mb-2">
            Servicio: Herrería, rejas, portones, tinglados, trailer, trabajos en acero inoxidable
          </p>
          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <span className="font-medium">• Julio Santillán</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#16b5d0]" />
              <span>Mendoza 51</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#16b5d0]" />
              <a href="tel:3546454714" className="hover:text-[#16b5d0]">
                3546454714
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-[#16b5d0]" />
              <a href="mailto:Santillan.julio@gmail.com" className="hover:text-[#16b5d0]">
                Santillan.julio@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
