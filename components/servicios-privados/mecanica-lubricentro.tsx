import { MapPin, Phone, Mail } from "lucide-react"

export default function MecanicaLubricentro() {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🛠</span>
        Mecánica / Lubricentro
      </h3>
      <div className="grid md:grid-cols-2 gap-6 pl-6">
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Mecánica Hinsch</h4>
            <p className="text-sm text-gray-600 mb-2">
              Servicio: Mecánica Vial, mecánica especializada Diesel y Naftero, mecánica automotriz, servicio de
              diagnóstico computarizado, lubricentro, armado de motores, reparación de sistemas hidráulicos y neumáticos
              de equipos, embragues
            </p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <span className="font-medium">• Dario David Hinsch</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Ruta 5 KMS 104</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3546524893" className="hover:text-[#16b5d0]">
                  3546524893
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#16b5d0]" />
                <a href="mailto:tallerhinsch@hotmail.com.ar" className="hover:text-[#16b5d0]">
                  tallerhinsch@hotmail.com.ar
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Lubricentro Barra</h4>
            <p className="text-sm text-gray-600 mb-2">
              Servicio: Aceites, filtros, escapes, repuestos de electricidad del automotor
            </p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <span className="font-medium">• Martinez Viviana Elizabeth</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>San Martín 635, Villa del Dique</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3571322356" className="hover:text-[#16b5d0]">
                  3571322356
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#16b5d0]" />
                <a href="mailto:florenciabarra98@outlook.es" className="hover:text-[#16b5d0]">
                  florenciabarra98@outlook.es
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
