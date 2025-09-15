import { MapPin, Phone, Mail } from "lucide-react"

export default function MotosVentaConsignacion() {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🏍</span>
        Motos / Venta y Consignación
      </h3>
      <div className="pl-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">Bailone Motos</h4>
          <p className="text-sm text-gray-600 mb-2">Servicio: Venta y consignación de motos, cuatriciclos y UTV</p>
          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <span className="font-medium">• Bailone Jonathan</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#16b5d0]" />
              <span>Ruta 5 km 106</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#16b5d0]" />
              <a href="tel:0353154243474" className="hover:text-[#16b5d0]">
                0353/154243474 – 0353/155690594
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-[#16b5d0]" />
              <a href="mailto:jonibailone@hotmail.com" className="hover:text-[#16b5d0]">
                jonibailone@hotmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
