import { MapPin, Phone, Mail } from "lucide-react"

export default function Matafuegos() {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🔥</span>
        Matafuegos
      </h3>
      <div className="pl-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">MATAFUEGOS LA VILLA</h4>
          <p className="text-sm text-gray-600 mb-2">Ramon Cuello - Mantenimiento, venta de matafuegos</p>
          <div className="space-y-1 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4 text-[#16b5d0]" />
              <span>Rio Quinto 380</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-[#16b5d0]" />
              <a href="tel:3546502274" className="hover:text-[#16b5d0]">
                3546502274
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-[#16b5d0]" />
              <a href="mailto:candelaalemi24@gmail.com" className="hover:text-[#16b5d0]">
                candelaalemi24@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
