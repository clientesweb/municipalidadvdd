import { MapPin, Phone, Mail, Globe, Instagram } from "lucide-react"

export default function Electricistas() {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-xl font-nunito font-bold text-gray-900 mb-4 flex items-center">
        <span className="text-2xl mr-2">🔌</span>
        Electricistas
      </h3>
      <div className="grid md:grid-cols-2 gap-6 pl-6">
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Electricidad Villa del Dique</h4>
            <p className="text-sm text-gray-600 mb-2">Responsable: Guillermo Modesto</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Ruta 5 km 107</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:+5493546534000" className="hover:text-[#16b5d0]">
                  +54 9 3546 53-4000
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#16b5d0]" />
                <a href="mailto:Electrocidadvilladeldiqueok@gmail.com" className="hover:text-[#16b5d0]">
                  Electrocidadvilladeldiqueok@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4 text-[#16b5d0]" />
                <a
                  href="https://www.electricidadvilladeldique.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#16b5d0]"
                >
                  www.electricidadvilladeldique.com.ar
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Instagram className="h-4 w-4 text-[#16b5d0]" />
                <a
                  href="https://www.instagram.com/electricidadvilladeldiqueok?igsh=NXkwOWh0Nmt2bW1j"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#16b5d0]"
                >
                  @electricidadvilladeldiqueok
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Agustín Monsalve</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Barrio IPV Manzana G Casa 22</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3546557155" className="hover:text-[#16b5d0]">
                  3546 557155
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">HB Electricista</h4>
            <p className="text-sm text-gray-600 mb-2">Responsable: Hernán Barco</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Las Sierritas 347</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3546410950" className="hover:text-[#16b5d0]">
                  3546 410950
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Matías Rocci (Electricista matriculado)</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Intendente Hernández 45</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3537558386" className="hover:text-[#16b5d0]">
                  3537 558386
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">JF Servicios Eléctricos</h4>
            <p className="text-sm text-gray-600 mb-2">Servicio: Electricista</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <span className="font-medium">• Juan Fierro</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Estocolmo s/n</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3517506633" className="hover:text-[#16b5d0]">
                  3517506633
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#16b5d0]" />
                <a href="mailto:juancabj9822@gmail.com" className="hover:text-[#16b5d0]">
                  juancabj9822@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Perticarari Electricidad</h4>
            <p className="text-sm text-gray-600 mb-2">Servicio: Electricista</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <span className="font-medium">• Francisco Perticarari</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Calle pública s/n</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3546500069" className="hover:text-[#16b5d0]">
                  3546500069
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#16b5d0]" />
                <a href="mailto:admperticarari293@gmail.com" className="hover:text-[#16b5d0]">
                  admperticarari293@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Servicios del Valle</h4>
            <p className="text-sm text-gray-600 mb-2">Servicio: Electricista</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <span className="font-medium">• Marcos Hidalgo</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Salta 776</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3546405881" className="hover:text-[#16b5d0]">
                  3546405881
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#16b5d0]" />
                <a href="mailto:hidalgomarcosjulian@gmail.com" className="hover:text-[#16b5d0]">
                  hidalgomarcosjulian@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Lucas Ernesto Martínez</h4>
            <p className="text-sm text-gray-600 mb-2">Servicio: Electricista</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <span className="font-medium">• Lucas Ernesto Martínez</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Santa María 544, zona del valle</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3517458886" className="hover:text-[#16b5d0]">
                  3517458886
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#16b5d0]" />
                <a href="mailto:lucianamartinez1414@gmail.com" className="hover:text-[#16b5d0]">
                  lucianamartinez1414@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Braian Calderón</h4>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Tinty Nacuy s/n</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:03546565642" className="hover:text-[#16b5d0]">
                  03546 565642
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Diego Borquez Mantenimiento</h4>
            <p className="text-sm text-gray-600 mb-2">Responsable: Diego Borquez</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Av. Belgrano s/n</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3546490531" className="hover:text-[#16b5d0]">
                  3546 490531
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Electroman</h4>
            <p className="text-sm text-gray-600 mb-2">Ezequiel Lattuada</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>La Cumbre 50</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:3413457078" className="hover:text-[#16b5d0]">
                  3413457078
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#16b5d0]" />
                <a href="mailto:ezequiel.lattuada.2@gmail.com" className="hover:text-[#16b5d0]">
                  ezequiel.lattuada.2@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">Fran</h4>
            <p className="text-sm text-gray-600 mb-2">Franco Laurino</p>
            <div className="space-y-1 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-[#16b5d0]" />
                <span>Eslovaquia 958</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-[#16b5d0]" />
                <a href="tel:1133529482" className="hover:text-[#16b5d0]">
                  1133529482
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-[#16b5d0]" />
                <a href="mailto:francolaurino1990@gmail.com" className="hover:text-[#16b5d0]">
                  francolaurino1990@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
