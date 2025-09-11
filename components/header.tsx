"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProductsOpen, setIsProductsOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen)
  }

  const menuItems = [
    { name: "Nosotros", href: "/nosotros", hasSubmenu: false },
    { name: "Productos", href: "/productos", hasSubmenu: true },
    { name: "Novedades", href: "/novedades", hasSubmenu: false },
    { name: "Contacto", href: "/contacto", hasSubmenu: false },
  ]

  const leftMenuItems = menuItems.slice(0, 2) // Nosotros, Productos
  const rightMenuItems = menuItems.slice(2) // Novedades, Contacto

  const productBrands = [
    {
      name: "ORSI",
      description: "Italia - Maquinaria agrícola desde 1979",
      href: "/productos/orsi-king-forrest-200",
    },
  ]

  return (
    <header className="relative z-50">
      <div className="bg-[#eeb010] text-[#1e1d1c] py-2">
        <div className="container mx-auto px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between">
            {/* Desktop left navigation */}
            <div className="flex items-center space-x-4">
              <span className="text-sm font-bold tracking-wide font-display"></span>
            </div>
            {/* Desktop right navigation */}
            <div className="flex items-center space-x-3">
              <a
                href="https://www.facebook.com/merkatagri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e1d1c] hover:text-[#581f0b] transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@merkatagri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e1d1c] hover:text-[#581f0b] transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@merkatagri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1e1d1c] hover:text-[#581f0b] transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#1e1d1c] shadow-md">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 xl:px-8">
          <div className="flex items-center justify-between xl:justify-start h-18 sm:h-20 lg:h-24 xl:h-28">
            {/* Desktop left navigation */}
            <nav className="hidden xl:flex space-x-4 2xl:space-x-8 flex-1 justify-end pr-4 2xl:pr-8">
              {leftMenuItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasSubmenu ? (
                    <div className="relative">
                      <button
                        onClick={toggleProducts}
                        className="font-display font-bold text-sm xl:text-base text-white hover:text-[#eeb010] transition-colors duration-200 flex items-center gap-1"
                      >
                        {item.name}
                        <ChevronDown className="h-3 xl:h-4 w-3 xl:w-4" />
                      </button>

                      {isProductsOpen && (
                        <div className="absolute top-full left-0 mt-2 w-72 xl:w-80 bg-white rounded-lg shadow-lg border py-2 z-50">
                          {productBrands.map((brand) => (
                            <a
                              key={brand.name}
                              href="/productos"
                              className="block px-3 xl:px-4 py-2 xl:py-3 hover:bg-gray-50 transition-colors duration-200"
                              onClick={() => setIsProductsOpen(false)}
                            >
                              <div className="font-bold text-[#1e1d1c] text-sm xl:text-base font-display">
                                {brand.name}
                              </div>
                              {brand.description && (
                                <div className="text-xs xl:text-sm text-gray-600 mt-1 font-sans">
                                  {brand.description}
                                </div>
                              )}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="font-display font-bold text-sm xl:text-base text-white hover:text-[#eeb010] transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>

            {/* Logo - centrado en móviles, centrado en desktop */}
            <div className="flex-1 xl:flex-shrink-0 flex justify-center xl:justify-center">
              <a href="/" className="block">
                <Image
                  src="/images/merkat-agri-logo-new.webp"
                  alt="Merkat Agri - Distribuidor Oficial ORSI Argentina"
                  width={400}
                  height={120}
                  className="h-20 sm:h-24 lg:h-28 xl:h-32 2xl:h-36 w-auto"
                  priority
                />
              </a>
            </div>

            {/* Desktop right navigation */}
            <nav className="hidden xl:flex space-x-4 2xl:space-x-8 flex-1 pl-4 2xl:pl-8">
              {rightMenuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-display font-bold text-sm xl:text-base text-white hover:text-[#eeb010] transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Mobile menu button - posición absoluta para no afectar centrado */}
            <div className="xl:hidden absolute right-2 sm:right-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMenu}
                className="text-white hover:bg-white/10 h-8 w-8 sm:h-10 sm:w-10"
              >
                {isMenuOpen ? (
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6">
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 rotate-45 transition-all duration-300"></span>
                    <span className="absolute top-1/2 left-0 w-full h-0.5 bg-white transform -translate-y-1/2 -rotate-45 transition-all duration-300"></span>
                  </div>
                ) : (
                  <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center space-y-1">
                    <span className="w-full h-0.5 bg-white transition-all duration-300"></span>
                    <span className="w-full h-0.5 bg-white transition-all duration-300"></span>
                    <span className="w-full h-0.5 bg-white transition-all duration-300"></span>
                  </div>
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <>
              {/* Backdrop overlay */}
              <div
                className="xl:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-in fade-in duration-300"
                onClick={() => setIsMenuOpen(false)}
              />

              <div className="xl:hidden fixed top-18 sm:top-20 lg:top-24 xl:top-28 left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-50 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-4rem)] overflow-y-auto">
                <nav className="px-4 sm:px-6 py-6 sm:py-8 space-y-2">
                  {menuItems.map((item, index) => (
                    <div
                      key={item.name}
                      className="animate-in slide-in-from-left duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {item.hasSubmenu ? (
                        <div>
                          <button
                            onClick={toggleProducts}
                            className="flex items-center justify-between w-full font-display font-bold text-[#1e1d1c] hover:text-[#eeb010] transition-all duration-300 py-4 sm:py-5 px-4 sm:px-6 rounded-2xl hover:bg-gradient-to-r hover:from-[#eeb010]/10 hover:to-[#eeb010]/5 group border border-transparent hover:border-[#eeb010]/20"
                          >
                            <span className="text-lg sm:text-xl">{item.name}</span>
                            <ChevronDown
                              className={`h-5 sm:h-6 w-5 sm:w-6 transition-all duration-300 ${
                                isProductsOpen ? "rotate-180 text-[#eeb010]" : "text-gray-400"
                              }`}
                            />
                          </button>

                          {isProductsOpen && (
                            <div className="ml-4 sm:ml-6 mt-3 space-y-2 animate-in slide-in-from-top duration-200">
                              {productBrands.map((brand, brandIndex) => (
                                <a
                                  key={brand.name}
                                  href="/productos"
                                  className="block py-3 sm:py-4 px-4 sm:px-6 rounded-xl hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 transition-all duration-200 animate-in slide-in-from-left border border-transparent hover:border-gray-200"
                                  style={{ animationDelay: `${brandIndex * 50}ms` }}
                                  onClick={() => {
                                    setIsMenuOpen(false)
                                    setIsProductsOpen(false)
                                  }}
                                >
                                  <div className="font-bold text-[#1e1d1c] text-base sm:text-lg font-display">
                                    {brand.name}
                                  </div>
                                  {brand.description && (
                                    <div className="text-sm sm:text-base text-gray-600 mt-1 font-sans">
                                      {brand.description}
                                    </div>
                                  )}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          href={item.href}
                          className="flex items-center justify-between w-full font-display font-bold text-[#1e1d1c] hover:text-[#eeb010] transition-all duration-300 py-4 sm:py-5 px-4 sm:px-6 rounded-2xl hover:bg-gradient-to-r hover:from-[#eeb010]/10 hover:to-[#eeb010]/5 group border border-transparent hover:border-[#eeb010]/20"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-lg sm:text-xl">{item.name}</span>
                          <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-[#eeb010] transition-colors duration-300"></div>
                        </a>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="px-4 sm:px-6 py-4 sm:py-6 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex items-center justify-center space-x-6">
                    <a
                      href="https://www.facebook.com/merkatagri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#eeb010] transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.youtube.com/@merkatagri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#eeb010] transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93-.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    </a>
                    <a
                      href="https://www.tiktok.com/@merkatagri"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-[#eeb010] transition-all duration-300 hover:scale-110"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
