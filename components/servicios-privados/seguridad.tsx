import { MapPin, Phone, Mail } from "lucide-react"

export default function Seguridad() {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">📹</span>
        Seguridad
      </h3>
      <div className="grid md:grid-cols-2 gap-6 pl-6">
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">SM Seguridad</h4>
            <p className="text-sm text-gray-600 mb-2">Servicio: Alarmas, cámaras y monitoreo</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <span className="font-medium">• Thiago Moscetta</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>San Martín s/n</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3546525631" className="hover:text-[#16b5d0]">
                  3546525631
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#16b5d0]" />
                <a href="mailto:thiagomoscetta123@gmail.com" className="hover:text-[#16b5d0]">
                  thiagomoscetta123@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Clan Seguridad</h4>
            <p className="text-sm text-gray-600 mb-2">
              Servicio: Cámaras, alarmas, distribución de wifi, instalaciones de antenas Starlink, servicio técnico
            </p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <span className="font-medium">• Claudio – 351572169</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">• Gustavo – 3546405796</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">• Agustín – 3512273169</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">MAC MONITOREO</h4>
            <p className="text-sm text-gray-600 mb-2">Servicio: Sistema de seguridad y monitoreo</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <span className="font-medium">• Lorena Pizzio</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Arturo Illia 189</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3546514464" className="hover:text-[#16b5d0]">
                  3546514464
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#16b5d0]" />
                <a href="mailto:Macmonitoreo@gmail.com" className="hover:text-[#16b5d0]">
                  Macmonitoreo@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
