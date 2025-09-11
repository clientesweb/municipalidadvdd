"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WifiOff, RefreshCw, Home } from "lucide-react"
import Link from "next/link"

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center">
        <CardHeader className="pb-4">
          <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">
            <WifiOff className="h-8 w-8 text-blue-600" />
          </div>
          <CardTitle className="text-xl text-gray-800">Sin conexión a internet</CardTitle>
          <CardDescription className="text-gray-600">
            No se puede conectar al servidor. Verifica tu conexión e intenta nuevamente.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="text-sm text-gray-500 bg-gray-50 p-3 rounded-lg">
            <p className="font-medium mb-1">Mientras tanto puedes:</p>
            <ul className="text-left space-y-1">
              <li>• Ver páginas visitadas anteriormente</li>
              <li>• Revisar información en caché</li>
              <li>• Intentar reconectar</li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button onClick={() => window.location.reload()} className="flex-1 bg-blue-600 hover:bg-blue-700">
              <RefreshCw className="h-4 w-4 mr-2" />
              Reintentar
            </Button>

            <Button asChild variant="outline" className="flex-1 bg-transparent">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Ir al inicio
              </Link>
            </Button>
          </div>

          <p className="text-xs text-gray-400 mt-4">Municipalidad de Villa del Dique - PWA</p>
        </CardContent>
      </Card>
    </div>
  )
}
