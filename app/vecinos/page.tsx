"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, Megaphone, Trash2 } from "lucide-react"

export default function VecinosPage() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Vecinos de Villa del Dique
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Información y servicios esenciales para la comunidad de Villa del Dique.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Servicios</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Guía de Trámites y Servicios
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Accede a información detallada sobre los trámites municipales y los servicios disponibles para los
                vecinos de Villa del Dique.
              </p>
              <Link
                href="/vecinos/guia-de-tramites"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Ver Guía de Trámites
              </Link>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              width="600"
              height="400"
              alt="Municipal Building"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <Image
              src="/placeholder.svg?height=400&width=600"
              width="600"
              height="400"
              alt="Town Hall"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-gray-900 px-3 py-1 text-sm text-gray-50 dark:bg-gray-50 dark:text-gray-900">
                Gobierno
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Honorable Concejo Deliberante
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Conoce la labor de nuestros representantes y las ordenanzas que rigen la vida de Villa del Dique.
              </p>
              <Link
                href="/vecinos/honorable-concejo-deliberante"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Más Información
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Comunidad</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Conoce Nuestro Pueblo</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Descubre la historia, cultura y los atractivos de Villa del Dique, tu hogar.
              </p>
              <Link
                href="/vecinos/el-pueblo"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                prefetch={false}
              >
                Explorar
              </Link>
            </div>
            <Image
              src="/placeholder.svg?height=400&width=600"
              width="600"
              height="400"
              alt="Villa del Dique Landscape"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Servicios Destacados
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Recolección de Residuos</CardTitle>
                  <Trash2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">Horarios y Recorridos</p>
                  <p className="text-xs text-muted-foreground">
                    Consulta los días y horarios de recolección en tu barrio.
                  </p>
                  <Button asChild className="mt-4 w-full">
                    <Link href="/vecinos/servicios">Ver Horarios</Link>
                  </Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pago de Tasas Municipales</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-xl font-bold">
                        ¿Querés ponerte al día con tus tasas municipales?
                      </AccordionTrigger>
                      <AccordionContent>
                        <p className="text-sm text-muted-foreground mb-4">Paga tus tasas de forma rápida y segura.</p>
                        <div className="space-y-2">
                          <p className="text-sm">1. Ingresa a la plataforma de pago online.</p>
                          <p className="text-sm">2. Selecciona el tipo de tasa y tu número de cuenta.</p>
                          <p className="text-sm">3. Elige tu método de pago y confirma la operación.</p>
                        </div>
                        <Button asChild className="mt-4 w-full">
                          <Link href="https://villadeldique.gob.ar/pagos" target="_blank" rel="noopener noreferrer">
                            Pagar Tasas Online
                          </Link>
                        </Button>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Guía de Trámites</CardTitle>
                  <Megaphone className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">Documentación y Requisitos</p>
                  <p className="text-xs text-muted-foreground">
                    Encuentra toda la información necesaria para realizar tus trámites.
                  </p>
                  <Button asChild className="mt-4 w-full">
                    <Link href="/vecinos/guia-de-tramites">Ver Guía</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Reclamos Button */}
      <Link
        href="/vecinos/reclamos"
        className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center space-x-2 hover:bg-red-700 transition-colors z-50"
        prefetch={false}
      >
        <Megaphone className="h-6 w-6" />
        <span className="hidden md:inline-block text-lg font-semibold">Reclamos</span>
      </Link>
    </div>
  )
}
