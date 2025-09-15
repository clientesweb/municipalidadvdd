"use client"
import { X } from "lucide-react"

interface LicenseModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LicenseModal({ isOpen, onClose }: LicenseModalProps) {
  if (!isOpen) return null

  const handleOfficialLicense = () => {
    window.open("https://creativecommons.org/licenses/by-nc-nd/4.0/", "_blank")
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">Common Creator - Licencia Restrictiva</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Español */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">LICENCIA RESTRICTIVA DE USO - ESPAÑOL</h3>
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">© 2024 Common Creator - Duality Domain. Todos los derechos reservados.</p>

              <div>
                <h4 className="font-semibold mb-2">TÉRMINOS Y CONDICIONES:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Este diseño y desarrollo está protegido por derechos de autor y es propiedad exclusiva de Common
                    Creator - Duality Domain.
                  </li>
                  <li>
                    <strong>PROHIBIDO:</strong> Copiar, modificar, distribuir, vender o usar este diseño sin
                    autorización expresa por escrito.
                  </li>
                  <li>
                    <strong>PROHIBIDO:</strong> Ingeniería inversa, descompilación o extracción de código fuente.
                  </li>
                  <li>
                    <strong>PROHIBIDO:</strong> Uso comercial o redistribución bajo cualquier forma.
                  </li>
                  <li>Cualquier violación de estos términos resultará en acciones legales inmediatas.</li>
                  <li>
                    Esta licencia es intransferible y no otorga ningún derecho de propiedad intelectual al usuario.
                  </li>
                </ul>
              </div>

              <p className="text-sm italic">Para solicitar permisos especiales, contacte: legal@dualitydomain.com</p>
            </div>
          </div>

          {/* English */}
          <div className="border-t pt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">RESTRICTIVE USE LICENSE - ENGLISH</h3>
            <div className="space-y-4 text-gray-700">
              <p className="font-semibold">© 2024 Common Creator - Duality Domain. All rights reserved.</p>

              <div>
                <h4 className="font-semibold mb-2">TERMS AND CONDITIONS:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    This design and development is protected by copyright and is the exclusive property of Common
                    Creator - Duality Domain.
                  </li>
                  <li>
                    <strong>PROHIBITED:</strong> Copying, modifying, distributing, selling, or using this design without
                    express written authorization.
                  </li>
                  <li>
                    <strong>PROHIBITED:</strong> Reverse engineering, decompilation, or source code extraction.
                  </li>
                  <li>
                    <strong>PROHIBITED:</strong> Commercial use or redistribution in any form.
                  </li>
                  <li>Any violation of these terms will result in immediate legal action.</li>
                  <li>
                    This license is non-transferable and does not grant any intellectual property rights to the user.
                  </li>
                </ul>
              </div>

              <p className="text-sm italic">To request special permissions, contact: legal@dualitydomain.com</p>
            </div>
          </div>

          <div className="border-t pt-6 text-center">
            <button
              onClick={handleOfficialLicense}
              className="bg-[#16b5d0] text-white px-6 py-3 rounded-lg hover:bg-[#14a3bd] transition-colors font-semibold"
            >
              Ver Licencia Oficial / View Official License
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
