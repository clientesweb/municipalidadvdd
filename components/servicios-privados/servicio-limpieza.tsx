import { MapPin, Phone, Mail } from "lucide-react"

export default function ServicioDeLimpieza() {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🧹</span>
        Servicio de Limpieza
      </h3>
      <div className="grid md:grid-cols-2 gap-6 pl-6">
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Yazmin</h4>
            <p className="text-sm text-gray-600 mb-2">Verónica Orbes - Personal de limpieza</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Barrio IPV</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3546490348" className="hover:text-[#16b5d0]">
                  3546490348
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#16b5d0]" />
                <a href="mailto:orbesvero44@gmail.com" className="hover:text-[#16b5d0]">
                  orbesvero44@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Vanesa Segura</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Tanti 238</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3546539266" className="hover:text-[#16b5d0]">
                  3546 539266
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Micaela Luján</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Calle Río Tercero s/n</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3546455050" className="hover:text-[#16b5d0]">
                  3546 455050
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Luciana Olmos</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Río Cuarto 368, Villa del Dique</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3512416142" className="hover:text-[#16b5d0]">
                  3512 416142
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Rocío Ledesma</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Alicia Peñalba</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3546525539" className="hover:text-[#16b5d0]">
                  3546 525539
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Milagros Tarquini</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Córdoba 25</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3546544231" className="hover:text-[#16b5d0]">
                  3546 544231
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Marina Soto Limpieza</h4>
            <p className="text-sm text-gray-600 mb-2">Responsable: Marina Soto</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Santiago del Estero 141</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3416154898" className="hover:text-[#16b5d0]">
                  3416 154898
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
