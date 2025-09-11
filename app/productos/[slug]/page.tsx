import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"

const products = [
  // Trituradoras Fijas
  {
    id: 1,
    name: "WLC",
    brand: "ORSI",
    image: "/images/products/orsi-wlc.jpeg",
    slug: "orsi-wlc",
    category: "Trituradoras Fijas",
    shortDescription:
      "Trituradora trasera con martillos. Ideal para tractores 25-70 HP. Doble contra cuchillas y rueda libre.",
    fullDescription:
      "La WLC es una trituradora trasera con martillos recomendada para la trituración de césped, poda y ramas de hasta 4-5 cm de diámetro. Máquina ideal para trabajar con tractores de 25 HP hasta 70 HP.",
    tractorRange: "25 a 70 HP",
    specifications: [
      "Máquina con púas de retención",
      "Rueda libre en los engranajes",
      "Doble contra cuchillas",
      "Bastidor con lado externo biselado",
      "Rodamiento de dos hileras de esferas",
      "Desplazamiento hidráulico con tubos de acero cromado",
      "Medidas disponibles: 85, 120, 160, 200 cm",
    ],
    applications: [
      "Trituración de césped",
      "Poda y mantenimiento",
      "Trituración de ramas hasta 4-5 cm",
      "Trabajos en espacios verdes",
    ],
    benefits: [
      "Bastidor con lado externo biselado",
      "Rueda libre en el grupo",
      "Rodamientos oscilantes con rueda de doble bola",
      "Rodillo de limpieza automático",
    ],
    downloads: [
      { name: "Ficha Técnica WLC", file: "/downloads/orsi-wlc-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Operación", file: "/downloads/orsi-wlc-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 2,
    name: "WPG",
    brand: "ORSI",
    image: "/images/products/orsi-wpg.jpeg",
    slug: "orsi-wpg",
    category: "Trituradoras Fijas",
    shortDescription: "Trituradora trasera con rotor equilibrado. Para ramas hasta 8 cm. Doble bastidor de 6mm.",
    fullDescription:
      "La WPG es una trituradora trasera con rotor equilibrado electrónicamente, disponible con martillos. Recomendada para la trituración de césped, podas y ramas de hasta 8 cm de diámetro. Cuenta con doble bastidor y desplazamiento hidráulico.",
    tractorRange: "65 a 130 HP",
    specifications: [
      "Doble bastidor de 6 mm",
      "Desplazamiento hidráulico con tubos de acero cromado",
      "Transmisión lateral de 58 cm de altura",
      "Rueda libre en los engranajes",
      "Rodillo trasero autolimpiante Ø 194 mm",
      "Doble contra cuchillas",
      "Medidas disponibles: 180, 200, 250, 280, 300, 320 cm",
    ],
    applications: [
      "Trituración de césped y podas",
      "Ramas hasta 8 cm de diámetro",
      "Trabajo cerca de plantas sin dañarlas",
      "Mantenimiento forestal",
    ],
    benefits: [
      "Doble fila de contra cuchillas",
      "Soporte externo del rotor en acero prensado",
      "Doble brida en rotor",
      "Rodillo de limpieza automático",
    ],
    downloads: [
      { name: "Ficha Técnica WPG", file: "/downloads/orsi-wpg-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual Técnico", file: "/downloads/orsi-wpg-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 3,
    name: "DINAMIC",
    brand: "ORSI",
    image: "/images/products/orsi-dinamic-new.jpeg",
    slug: "orsi-dinamic",
    category: "Trituradoras Fijas",
    shortDescription:
      "Desbrozadora compacta diseñada para espacios reducidos. Potencia requerida: 50-100 HP. Ancho de trabajo: 1,50 m. Cuchillas fijas y motor hidráulico para trituración de restos de poda.",
    fullDescription:
      "La DINAMIC es una desbrozadora compacta especialmente diseñada para trabajar en espacios reducidos como viñedos y huertos. Su diseño permite una maniobrabilidad excepcional manteniendo la potencia y eficiencia características de ORSI.",
    tractorRange: "50 a 100 HP",
    specifications: [
      "Ancho de trabajo: 1,50 m",
      "Cuchillas fijas de alta resistencia",
      "Motor hidráulico integrado",
      "Estructura compacta y robusta",
      "Sistema de seguridad anti-shock",
      "Regulación hidráulica de altura",
      "Enganche de tres puntos reforzado",
    ],
    applications: [
      "Trituración en viñedos",
      "Mantenimiento de huertos",
      "Trabajos en espacios reducidos",
      "Trituración de restos de poda",
    ],
    benefits: [
      "Diseño compacto para espacios reducidos",
      "Motor hidráulico para mayor eficiencia",
      "Cuchillas fijas de larga duración",
      "Maniobrabilidad excepcional",
    ],
    downloads: [
      { name: "Ficha Técnica DINAMIC", file: "/downloads/orsi-dinamic-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Operación", file: "/downloads/orsi-dinamic-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 4,
    name: "KING EXTRA",
    brand: "ORSI",
    image: "/images/products/orsi-king-extra.jpeg",
    slug: "orsi-king-extra",
    category: "Trituradoras Fijas",
    shortDescription: "Trituradora trasera con rotor equilibrado. Para ramas hasta 12 cm. Doble bastidor Hardox.",
    fullDescription:
      "La KING EXTRA es una trituradora trasera con rotor equilibrado electrónicamente, disponible con martillos. Recomendada para la trituración de césped, podas y ramas de hasta 12 cm de diámetro. Doble bastidor en Hardox para máxima resistencia.",
    tractorRange: "50 a 120 HP",
    specifications: [
      "Doble bastidor en Hardox",
      "Desplazamiento hidráulico",
      "Rodamiento rotor de dos hileras de rodillos a rótula",
      "Rueda libre en los engranajes",
      "Caja redondeada en el lado externo",
      "Aletas de protección 6 mm en Hardox",
      "Medidas disponibles: 160, 180, 200, 250, 280, 300, 320 cm",
    ],
    applications: [
      "Trituración de césped y podas",
      "Ramas hasta 12 cm de diámetro",
      "Trabajos forestales intensivos",
      "Mantenimiento de grandes superficies",
    ],
    benefits: [
      "Tres filas de contra cuchillas",
      "Soporte externo del rotor en acero prensado",
      "Doble brida en rotor",
      "Tensor de correas automático",
    ],
    downloads: [
      { name: "Ficha Técnica KING EXTRA", file: "/downloads/orsi-king-extra-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Mantenimiento", file: "/downloads/orsi-king-extra-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 5,
    name: "KING FORREST",
    brand: "ORSI",
    image: "/images/products/orsi-king-forrest-new.jpeg",
    slug: "orsi-king-forrest",
    category: "Trituradoras Fijas",
    shortDescription:
      "Desbrozadora de alta gama para trabajos intensivos en terrenos difíciles. Potencia requerida: 100-200 HP. Ancho de trabajo: 2,50 m. Rotor de alta resistencia con cuchillas fijas.",
    fullDescription:
      "La KING FORREST es una desbrozadora de alta gama diseñada para trabajos intensivos en terrenos difíciles y aplicaciones forestales. Su construcción robusta y potente motor la convierten en la elección ideal para profesionales.",
    tractorRange: "100 a 200 HP",
    specifications: [
      "Ancho de trabajo: 2,50 m",
      "Rotor de alta resistencia",
      "Cuchillas fijas profesionales",
      "Estructura reforzada para uso intensivo",
      "Sistema hidráulico de alta presión",
      "Protecciones integrales de seguridad",
      "Enganche Cat II/III",
    ],
    applications: [
      "Trabajos forestales intensivos",
      "Desbroce en terrenos difíciles",
      "Mantenimiento de grandes áreas",
      "Aplicaciones profesionales",
    ],
    benefits: [
      "Construcción de alta gama",
      "Resistencia excepcional",
      "Rendimiento superior en terrenos difíciles",
      "Durabilidad profesional",
    ],
    downloads: [
      { name: "Ficha Técnica KING FORREST", file: "/downloads/orsi-king-forrest-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual Profesional", file: "/downloads/orsi-king-forrest-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 6,
    name: "FRUIT EXTRA",
    brand: "ORSI",
    image: "/images/products/orsi-fruit-extra.jpeg",
    slug: "orsi-fruit-extra",
    category: "Trituradoras Fijas",
    shortDescription:
      "Trituradora trasera con rotor equilibrado. Para ramas hasta 13 cm. Bastidor monocasco Hardox 6mm.",
    fullDescription:
      "La FRUIT EXTRA es una trituradora trasera con rotor equilibrado electrónicamente, disponible con martillos. Recomendada para la trituración de césped, podas y ramas de hasta 13 cm de diámetro. Bastidor monocasco en Hardox de 6mm para máxima durabilidad.",
    tractorRange: "60 a 150 HP",
    specifications: [
      "Bastidor con espesor de 6 mm totalmente en Hardox",
      "Desplazamiento hidráulico en hierro fundido",
      "Tubos de acero templado y cromado",
      "Rodamiento rotor de dos hileras de rodillos a rótula",
      "Rueda libre en los engranajes",
      "Aletas de protectores 6 mm en Hardox",
      "Medidas: 200, 230, 250, 280, 300, 320 cm",
    ],
    applications: [
      "Trituración en frutales",
      "Podas intensivas hasta 13 cm",
      "Trabajos forestales profesionales",
      "Mantenimiento de plantaciones",
    ],
    benefits: [
      "Estructura monocasco en Hardox 6 mm",
      "Rotor 'ventilador' equilibrado electrónicamente",
      "4 barras de contra cuchillas",
      "Cojinetes oscilantes con doble corona de rodillos",
    ],
    downloads: [
      { name: "Ficha Técnica FRUIT EXTRA", file: "/downloads/orsi-fruit-extra-ficha-tecnica.pdf", type: "PDF" },
      { name: "Guía de Instalación", file: "/downloads/orsi-fruit-extra-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 7,
    name: "VIRGIN L",
    brand: "ORSI",
    image: "/images/products/orsi-virgin-l-new.jpeg",
    slug: "orsi-virgin-l",
    category: "Trituradoras Fijas",
    shortDescription:
      "Trituradora reversible de alta resistencia con doble pick-up hidráulico. Potencia requerida: 80-120 HP. Ancho de trabajo: 1,80 m. Ideal para viñedos, huertos y olivares intensivos.",
    fullDescription:
      "La VIRGIN L es una trituradora reversible de alta resistencia equipada con doble pick-up hidráulico. Diseñada específicamente para viñedos, huertos y olivares intensivos, ofrece versatilidad y eficiencia excepcionales.",
    tractorRange: "80 a 120 HP",
    specifications: [
      "Ancho de trabajo: 1,80 m",
      "Doble pick-up hidráulico",
      "Sistema reversible",
      "Estructura de alta resistencia",
      "Cuchillas fijas profesionales",
      "Control hidráulico completo",
      "Enganche reforzado",
    ],
    applications: ["Viñedos intensivos", "Huertos frutales", "Olivares comerciales", "Cultivos en hileras"],
    benefits: [
      "Sistema reversible para mayor versatilidad",
      "Doble pick-up para eficiencia máxima",
      "Diseño específico para cultivos intensivos",
      "Control hidráulico preciso",
    ],
    downloads: [
      { name: "Ficha Técnica VIRGIN L", file: "/downloads/orsi-virgin-l-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Cultivos Intensivos", file: "/downloads/orsi-virgin-l-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 8,
    name: "VIRGIN XL",
    brand: "ORSI",
    image: "/images/products/orsi-virgin-xl.jpeg",
    slug: "orsi-virgin-xl",
    category: "Trituradoras Fijas",
    shortDescription:
      "Versión más robusta de la serie Virgin para tractores de mayor potencia. Potencia requerida: 110-180 HP. Ancho de trabajo: 1,80 m. Doble pick-up hidráulico y cuchillas fijas.",
    fullDescription:
      "La VIRGIN XL es la versión más robusta de la serie Virgin, diseñada para tractores de mayor potencia. Mantiene todas las características de la serie Virgin pero con construcción reforzada para trabajos más intensivos.",
    tractorRange: "110 a 180 HP",
    specifications: [
      "Ancho de trabajo: 1,80 m",
      "Doble pick-up hidráulico reforzado",
      "Construcción robusta para alta potencia",
      "Cuchillas fijas de carburo",
      "Sistema hidráulico de alta presión",
      "Estructura reforzada",
      "Enganche Cat II/III",
    ],
    applications: [
      "Trabajos intensivos en viñedos grandes",
      "Huertos comerciales de gran escala",
      "Olivares extensivos",
      "Aplicaciones profesionales de alta demanda",
    ],
    benefits: [
      "Construcción reforzada para alta potencia",
      "Rendimiento superior en trabajos intensivos",
      "Durabilidad excepcional",
      "Eficiencia máxima en grandes superficies",
    ],
    downloads: [
      { name: "Ficha Técnica VIRGIN XL", file: "/downloads/orsi-virgin-xl-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Alta Potencia", file: "/downloads/orsi-virgin-xl-manual.pdf", type: "PDF" },
    ],
  },

  // Trituradoras Laterales
  {
    id: 9,
    name: "VULCANIC",
    brand: "ORSI",
    image: "/images/products/orsi-vulcanic.jpeg",
    slug: "orsi-vulcanic",
    category: "Trituradoras Laterales",
    shortDescription:
      "Trituradora lateral con inclinación hidráulica hasta 90°. Para limpieza de zanjas y terraplenes.",
    fullDescription:
      "La VULCANIC es una trituradora lateral adecuada para la limpieza de muelles, zanjas, terraplenes, jardines y áreas verdes. Equipada con inclinación hidráulica hasta 90° para poda y trituración de setos. Sistema de seguridad Anti shock de serie.",
    tractorRange: "40 a 80 HP",
    specifications: [
      "Posición de la caja de engranajes interior",
      "Cardán 5 x 2000 1'3/8 Z6+1'3/8 Z6",
      "Inclinación hidráulica hasta 90°",
      "Desplazamiento lateral hidráulico",
      "Bastidor monocasco con espesor de 4 mm",
      "Sistema de seguridad Anti shock",
      "Medidas disponibles: 135, 165, 200 cm",
    ],
    applications: [
      "Limpieza de muelles y zanjas",
      "Mantenimiento de terraplenes",
      "Poda de setos hasta 90°",
      "Trituración de ramas hasta 4-5 cm",
    ],
    benefits: [
      "Rodillo de limpieza automática",
      "Dos contra cuchillas",
      "Rueda libre en el grupo",
      "Rodamiento oscilante con rueda de doble bola",
    ],
    downloads: [
      { name: "Ficha Técnica VULCANIC", file: "/downloads/orsi-vulcanic-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Seguridad", file: "/downloads/orsi-vulcanic-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 10,
    name: "COMPETITION GS",
    brand: "ORSI",
    image: "/images/products/orsi-competition-gs.jpeg",
    slug: "orsi-competition-gs",
    category: "Trituradoras Laterales",
    shortDescription:
      "Trituradora lateral con gran alcance para limpieza de muelles, zanjas y terraplenes. Rango: 60-100 HP",
    fullDescription:
      "La COMPETITION GS es una trituradora lateral de gran alcance diseñada para trabajos profesionales de limpieza y mantenimiento. Su construcción robusta y sistema hidráulico avanzado la hacen ideal para aplicaciones exigentes.",
    tractorRange: "60 a 100 HP",
    specifications: [
      "Gran alcance lateral",
      "Sistema hidráulico avanzado",
      "Construcción robusta",
      "Cuchillas de alta resistencia",
      "Protecciones de seguridad completas",
      "Enganche reforzado",
      "Control desde cabina",
    ],
    applications: [
      "Limpieza de muelles",
      "Mantenimiento de zanjas",
      "Trabajos en terraplenes",
      "Aplicaciones profesionales",
    ],
    benefits: [
      "Gran alcance para trabajos difíciles",
      "Construcción profesional",
      "Sistema hidráulico avanzado",
      "Seguridad integral",
    ],
    downloads: [
      { name: "Ficha Técnica COMPETITION GS", file: "/downloads/orsi-competition-gs-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual Profesional", file: "/downloads/orsi-competition-gs-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 11,
    name: "PRIMATIST GS",
    brand: "ORSI",
    image: "/images/products/orsi-primatist-gs.jpeg",
    slug: "orsi-primatist-gs",
    category: "Trituradoras Laterales",
    shortDescription:
      "Trituradora de uso profesional para desbroce en terrenos difíciles. Potencia requerida: 80-150 HP. Ancho de trabajo: 2,00 m. Rotor de alta resistencia con cuchillas fijas.",
    fullDescription:
      "La PRIMATIST GS es una trituradora de uso profesional especialmente diseñada para desbroce en terrenos difíciles. Su rotor de alta resistencia y construcción robusta la convierten en la elección ideal para trabajos exigentes.",
    tractorRange: "80 a 150 HP",
    specifications: [
      "Ancho de trabajo: 2,00 m",
      "Rotor de alta resistencia",
      "Cuchillas fijas profesionales",
      "Construcción para terrenos difíciles",
      "Sistema hidráulico robusto",
      "Protecciones reforzadas",
      "Enganche profesional",
    ],
    applications: [
      "Desbroce en terrenos difíciles",
      "Trabajos forestales",
      "Mantenimiento de grandes áreas",
      "Aplicaciones profesionales intensivas",
    ],
    benefits: [
      "Diseño para terrenos difíciles",
      "Rotor de alta resistencia",
      "Construcción profesional",
      "Rendimiento superior",
    ],
    downloads: [
      { name: "Ficha Técnica PRIMATIST GS", file: "/downloads/orsi-primatist-gs-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Terrenos Difíciles", file: "/downloads/orsi-primatist-gs-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 12,
    name: "MAGNUN GS",
    brand: "ORSI",
    image: "/images/products/orsi-magnun-gs-new.jpeg",
    slug: "orsi-magnun-gs",
    category: "Trituradoras Laterales",
    shortDescription:
      "Trituradora de alta gama para trabajos intensivos en viñedos y huertos. Potencia requerida: 100-180 HP. Ancho de trabajo: 2,20 m. Rotor de alta resistencia con cuchillas fijas.",
    fullDescription:
      "La MAGNUN GS es una trituradora de alta gama diseñada específicamente para trabajos intensivos en viñedos y huertos. Su construcción premium y tecnología avanzada garantizan resultados excepcionales.",
    tractorRange: "100 a 180 HP",
    specifications: [
      "Ancho de trabajo: 2,20 m",
      "Rotor de alta resistencia premium",
      "Cuchillas fijas de carburo",
      "Construcción de alta gama",
      "Sistema hidráulico avanzado",
      "Tecnología de precisión",
      "Enganche profesional reforzado",
    ],
    applications: [
      "Trabajos intensivos en viñedos",
      "Huertos de alta producción",
      "Mantenimiento profesional",
      "Aplicaciones de alta gama",
    ],
    benefits: [
      "Tecnología de alta gama",
      "Precisión excepcional",
      "Construcción premium",
      "Rendimiento superior en cultivos intensivos",
    ],
    downloads: [
      { name: "Ficha Técnica MAGNUN GS", file: "/downloads/orsi-magnun-gs-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Alta Gama", file: "/downloads/orsi-magnun-gs-manual.pdf", type: "PDF" },
    ],
  },

  // Brazos Desbrozadores
  {
    id: 13,
    name: "RIVER COMPACT RIO",
    brand: "ORSI",
    image: "/images/products/orsi-river-compact-rio.jpeg",
    slug: "orsi-river-compact-rio",
    category: "Brazos Desbrozadores",
    shortDescription:
      "Trituradora compacta para trabajos en viñedos y huertos con espacios reducidos. Potencia requerida: 70-120 HP. Ancho de trabajo: 1,60 m. Rotor de alta resistencia con cuchillas fijas.",
    fullDescription:
      "La RIVER COMPACT RIO es una trituradora compacta especialmente diseñada para trabajos en viñedos y huertos con espacios reducidos. Su diseño compacto no compromete la potencia ni la eficiencia.",
    tractorRange: "70 a 120 HP",
    specifications: [
      "Ancho de trabajo: 1,60 m",
      "Diseño compacto optimizado",
      "Rotor de alta resistencia",
      "Cuchillas fijas profesionales",
      "Sistema hidráulico eficiente",
      "Construcción robusta",
      "Maniobrabilidad excepcional",
    ],
    applications: [
      "Viñedos con espacios reducidos",
      "Huertos compactos",
      "Trabajos de precisión",
      "Mantenimiento en espacios limitados",
    ],
    benefits: [
      "Diseño compacto sin comprometer potencia",
      "Maniobrabilidad excepcional",
      "Eficiencia en espacios reducidos",
      "Construcción robusta",
    ],
    downloads: [
      {
        name: "Ficha Técnica RIVER COMPACT RIO",
        file: "/downloads/orsi-river-compact-rio-ficha-tecnica.pdf",
        type: "PDF",
      },
      { name: "Manual de Espacios Reducidos", file: "/downloads/orsi-river-compact-rio-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 14,
    name: "PERFORMANCE PARALLELOGRAM",
    brand: "ORSI",
    image: "/images/products/orsi-performance-parallelogram.jpeg",
    slug: "orsi-performance-paralelogram",
    category: "Brazos Desbrozadores",
    shortDescription:
      "Desbrozadora hidráulica con brazo articulado tipo paralelogramo para mantenimiento de cunetas, setos y árboles. Potencia requerida: 45-100 HP. Movimiento hidráulico con rotación y válvula de seguridad.",
    fullDescription:
      "La PERFORMANCE PARALLELOGRAM es una desbrozadora hidráulica con brazo articulado tipo paralelogramo, diseñada para mantenimiento profesional de cunetas, setos y árboles. Su sistema de paralelogramo garantiza movimientos precisos y estables.",
    tractorRange: "45 a 100 HP",
    specifications: [
      "Brazo articulado tipo paralelogramo",
      "Movimiento hidráulico completo",
      "Sistema de rotación integrado",
      "Válvula de seguridad",
      "Control desde cabina",
      "Construcción robusta",
      "Alcance optimizado",
    ],
    applications: ["Mantenimiento de cunetas", "Poda de setos", "Trabajos en árboles", "Mantenimiento vial"],
    benefits: [
      "Sistema de paralelogramo para precisión",
      "Movimientos estables y controlados",
      "Seguridad integral",
      "Versatilidad excepcional",
    ],
    downloads: [
      {
        name: "Ficha Técnica PERFORMANCE PARALLELOGRAM",
        file: "/downloads/orsi-performance-parallelogram-ficha-tecnica.pdf",
        type: "PDF",
      },
      {
        name: "Manual de Mantenimiento Vial",
        file: "/downloads/orsi-performance-parallelogram-manual.pdf",
        type: "PDF",
      },
    ],
  },
  {
    id: 15,
    name: "LEADER GP",
    brand: "ORSI",
    image: "/images/products/orsi-leader-gp-new.jpeg",
    slug: "orsi-leader-gp",
    category: "Brazos Desbrozadores",
    shortDescription:
      "Desbrozadora hidráulica con brazo articulado para mantenimiento de viñedos y huertos. Potencia requerida: 60-120 HP. Movimiento hidráulico con rotación y válvula de seguridad.",
    fullDescription:
      "La LEADER GP es una desbrozadora hidráulica con brazo articulado especialmente diseñada para mantenimiento de viñedos y huertos. Su sistema hidráulico avanzado permite trabajos de precisión en cultivos delicados.",
    tractorRange: "60 a 120 HP",
    specifications: [
      "Brazo articulado especializado",
      "Sistema hidráulico de precisión",
      "Movimiento con rotación completa",
      "Válvula de seguridad integrada",
      "Control ergonómico",
      "Diseño para cultivos",
      "Alcance optimizado para viñedos",
    ],
    applications: [
      "Mantenimiento de viñedos",
      "Trabajos en huertos",
      "Poda de precisión",
      "Mantenimiento de cultivos delicados",
    ],
    benefits: [
      "Diseño específico para cultivos",
      "Precisión en trabajos delicados",
      "Sistema hidráulico avanzado",
      "Seguridad y control",
    ],
    downloads: [
      { name: "Ficha Técnica LEADER GP", file: "/downloads/orsi-leader-gp-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Cultivos Delicados", file: "/downloads/orsi-leader-gp-manual.pdf", type: "PDF" },
    ],
  },

  // Equipos Vitícolas VBC
  {
    id: 16,
    name: "S1 Desbrotadora",
    brand: "VBC",
    image: "/images/products/vbc-s1-spollonatrice.png",
    slug: "vbc-s1-desbrotadora",
    category: "Equipos Vitícolas",
    shortDescription:
      "Desbrotadora VBC con sistema de cables de goma que arranca brotes suavemente. Reduce herbicidas y trabajo manual.",
    fullDescription:
      "La S1 Desbrotadora VBC elimina los brotes no deseados en la base del tronco (chupones), favoreciendo que la energía de la planta se concentre en la producción de racimos. Su sistema de cables de goma trabaja de forma suave y eficiente.",
    tractorRange: "40 a 80 HP",
    specifications: [
      "Sistema de cables de goma resistentes",
      "Regulación adaptable a diferentes tipos de viñedo",
      "Estructura robusta en acero tratado",
      "Enganche de tres puntos estándar",
      "Ajuste hidráulico de altura y presión",
      "Protecciones laterales de seguridad",
      "Mantenimiento mínimo requerido",
    ],
    applications: [
      "Eliminación de chupones en viñedos",
      "Desbrote en frutales",
      "Mantenimiento de plantas jóvenes",
      "Trabajos de precisión en hileras",
    ],
    benefits: [
      "Reduce el uso de herbicidas",
      "Disminuye el trabajo manual",
      "Favorece plantas más ordenadas y saludables",
      "Mejora la concentración de energía en racimos",
    ],
    downloads: [
      { name: "Ficha Técnica S1 Desbrotadora", file: "/downloads/vbc-s1-desbrotadora-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Operación", file: "/downloads/vbc-s1-desbrotadora-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 17,
    name: "PJ Podadora 5 Discos",
    brand: "VBC",
    image: "/images/products/vbc-pj-potatrice-5-dischi.png",
    slug: "vbc-pj-podadora-5-discos",
    category: "Equipos Vitícolas",
    shortDescription:
      "Podadora de 5 discos VBC para cortes rápidos y precisos en ramas y sarmientos. Regulación hidráulica de altura.",
    fullDescription:
      "La PJ Podadora de 5 Discos VBC permite realizar cortes rápidos y precisos en ramas y sarmientos, tanto en viñedos como en huertas frutales. Su sistema de múltiples discos garantiza un trabajo eficiente y uniforme.",
    tractorRange: "50 a 100 HP",
    specifications: [
      "5 discos de corte de alta resistencia",
      "Regulación hidráulica de altura y ancho",
      "Estructura en acero tratado anticorrosión",
      "Sistema de seguridad anti-shock",
      "Enganche de tres puntos reforzado",
      "Protecciones laterales completas",
      "Cuchillas intercambiables de fácil acceso",
    ],
    applications: [
      "Poda de viñedos en producción",
      "Corte de sarmientos",
      "Mantenimiento de frutales",
      "Trabajos de poda invernal",
    ],
    benefits: [
      "Cortes limpios y precisos",
      "Reducción significativa del tiempo de trabajo",
      "Construcción duradera y bajo mantenimiento",
      "Adaptable a diferentes alturas de trabajo",
    ],
    downloads: [
      { name: "Ficha Técnica PJ Podadora", file: "/downloads/vbc-pj-podadora-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Mantenimiento", file: "/downloads/vbc-pj-podadora-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 18,
    name: "P0 Podadora 8 Discos",
    brand: "VBC",
    image: "/images/products/vbc-p0-potatrice-8-dischi.jpeg",
    slug: "vbc-p0-podadora-8-discos",
    category: "Equipos Vitícolas",
    shortDescription:
      "Podadora en seco de 8 discos VBC para trabajos intensivos. Múltiples discos de corte para máxima eficiencia.",
    fullDescription:
      "La P0 Podadora de 8 Discos VBC está diseñada para trabajos intensivos de poda en seco. Su configuración de 8 discos permite una cobertura completa y eficiente, ideal para grandes superficies de viñedos y frutales.",
    tractorRange: "60 a 120 HP",
    specifications: [
      "8 discos de corte profesionales",
      "Sistema hidráulico de regulación completa",
      "Bastidor reforzado para trabajos intensivos",
      "Protecciones de seguridad integrales",
      "Cuchillas de carburo de tungsteno",
      "Sistema anti-vibración",
      "Enganche Cat II/III",
    ],
    applications: [
      "Poda intensiva de viñedos grandes",
      "Trabajos en frutales de gran porte",
      "Corte de madera seca y sarmientos gruesos",
      "Mantenimiento de plantaciones comerciales",
    ],
    benefits: [
      "Máxima eficiencia en grandes superficies",
      "Cortes uniformes y profesionales",
      "Estructura robusta para uso intensivo",
      "Reducción drástica de tiempos de trabajo",
    ],
    downloads: [
      { name: "Ficha Técnica P0 Podadora", file: "/downloads/vbc-p0-podadora-ficha-tecnica.pdf", type: "PDF" },
      { name: "Guía de Operación Profesional", file: "/downloads/vbc-p0-podadora-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 19,
    name: "C0 Prepodadora",
    brand: "VBC",
    image: "/images/products/vbc-c0-prepodadora.jpeg",
    slug: "vbc-c0-prepodadora",
    category: "Equipos Vitícolas",
    shortDescription:
      "Prepodadora VBC para poda de invierno. Cuchillas robustas para madera seca, preparando el viñedo para poda manual.",
    fullDescription:
      "La C0 Prepodadora VBC está diseñada para la poda de invierno, cortando madera seca de forma rápida y segura. Prepara el viñedo para la poda manual fina posterior, optimizando significativamente los tiempos de trabajo.",
    tractorRange: "45 a 90 HP",
    specifications: [
      "Cuchillas robustas para madera seca",
      "Brazo hidráulico articulado",
      "Sistema de corte de alta precisión",
      "Estructura resistente y de bajo mantenimiento",
      "Regulación hidráulica de posición",
      "Protecciones de seguridad completas",
      "Enganche universal de tres puntos",
    ],
    applications: [
      "Poda de invierno en viñedos",
      "Preparación para poda manual fina",
      "Corte de madera seca y sarmientos gruesos",
      "Mantenimiento invernal de frutales",
    ],
    benefits: [
      "Ahorro significativo de tiempo en poda manual",
      "Cortes precisos y uniformes",
      "Estructura de bajo mantenimiento",
      "Mejora la eficiencia del trabajo posterior",
    ],
    downloads: [
      { name: "Ficha Técnica C0 Prepodadora", file: "/downloads/vbc-c0-prepodadora-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Poda Invernal", file: "/downloads/vbc-c0-prepodadora-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 20,
    name: "R1 Barredor de Poda",
    brand: "VBC",
    image: "/images/products/vbc-r1-barredor.jpeg",
    slug: "vbc-r1-barredor-poda",
    category: "Equipos Vitícolas",
    shortDescription:
      "Barredor de poda VBC para limpiar entrehilado del viñedo. Cepillos resistentes con regulación hidráulica.",
    fullDescription:
      "El R1 Barredor de Poda VBC está diseñado para limpiar el entrehilado del viñedo, retirando restos de poda y hojas. Mejora la sanidad del viñedo y facilita las labores posteriores de mantenimiento.",
    tractorRange: "35 a 70 HP",
    specifications: [
      "Cepillos resistentes de alta durabilidad",
      "Regulación hidráulica en altura y lateral",
      "Motores hidráulicos de alta potencia",
      "Compatible con joystick de control",
      "Construcción robusta para grandes superficies",
      "Sistema de recolección opcional",
      "Enganche estándar de tres puntos",
    ],
    applications: [
      "Limpieza de entrehilado en viñedos",
      "Recolección de restos de poda",
      "Limpieza de hojas caídas",
      "Mantenimiento sanitario del viñedo",
    ],
    benefits: [
      "Mejora la sanidad del viñedo",
      "Facilita labores posteriores de mantenimiento",
      "Construcción robusta para uso intensivo",
      "Regulación precisa para diferentes condiciones",
    ],
    downloads: [
      { name: "Ficha Técnica R1 Barredor", file: "/downloads/vbc-r1-barredor-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Limpieza de Viñedos", file: "/downloads/vbc-r1-barredor-manual.pdf", type: "PDF" },
    ],
  },
  {
    id: 21,
    name: "DK1 Deshojadora",
    brand: "VBC",
    image: "/images/products/vbc-dk1-deshojadora.jpeg",
    slug: "vbc-dk1-deshojadora",
    category: "Equipos Vitícolas",
    shortDescription:
      "Deshojadora VBC con sistema de rodillos y aspiración. Mejora ventilación y exposición al sol de los racimos.",
    fullDescription:
      "La DK1 Deshojadora VBC retira hojas de la zona de racimos para mejorar la ventilación, la exposición al sol y reducir el riesgo de enfermedades. Su sistema de rodillos trabaja de forma precisa y controlada con aspiración integrada.",
    tractorRange: "40 a 80 HP",
    specifications: [
      "Sistema de rodillos de precisión",
      "Unidad de aspiración integrada",
      "Ajuste hidráulico para diferentes estados de vid",
      "Regulación de intensidad de trabajo",
      "Estructura en acero inoxidable",
      "Sistema de filtrado de aire",
      "Controles ergonómicos desde cabina",
    ],
    applications: [
      "Deshojado en zona de racimos",
      "Mejora de ventilación en viñedos",
      "Preparación para tratamientos fitosanitarios",
      "Optimización de maduración de uva",
    ],
    benefits: [
      "Mejora la maduración y calidad de la uva",
      "Reduce el riesgo de enfermedades",
      "Facilita aplicación de tratamientos",
      "Trabajo preciso y controlado",
    ],
    downloads: [
      { name: "Ficha Técnica DK1 Deshojadora", file: "/downloads/vbc-dk1-deshojadora-ficha-tecnica.pdf", type: "PDF" },
      { name: "Manual de Deshojado Profesional", file: "/downloads/vbc-dk1-deshojadora-manual.pdf", type: "PDF" },
    ],
  },
]

interface ProductPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    return {
      title: "Producto no encontrado - Balboa Agromaquinas",
    }
  }

  return {
    title: `${product.name} - ${product.brand} | Balboa Agromaquinas`,
    description: product.shortDescription,
    keywords: `${product.name}, ${product.brand}, ${product.category}, maquinaria agrícola, Balboa Agromaquinas`,
    openGraph: {
      title: `${product.name} - ${product.brand}`,
      description: product.shortDescription,
      images: [product.image],
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />

      {/* Breadcrumb */}
      <nav className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm font-sans">
            <Link href="/" className="text-gray-500 hover:text-[#D2691E] transition-colors">
              Inicio
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/productos" className="text-gray-500 hover:text-[#D2691E] transition-colors">
              Productos
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </nav>

      {/* Product Details */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              {products.findIndex((p) => p.slug === product.slug) > 0 && (
                <Link
                  href={`/productos/${products[products.findIndex((p) => p.slug === product.slug) - 1].slug}`}
                  className="inline-flex items-center text-[#D2691E] hover:text-[#B8541A] font-medium transition-colors font-sans"
                >
                  <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Producto anterior
                </Link>
              )}
            </div>
            <div>
              {products.findIndex((p) => p.slug === product.slug) < products.length - 1 && (
                <Link
                  href={`/productos/${products[products.findIndex((p) => p.slug === product.slug) + 1].slug}`}
                  className="inline-flex items-center text-[#D2691E] hover:text-[#B8541A] font-medium transition-colors font-sans"
                >
                  Siguiente producto
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {/* Product Image */}
            <div className="relative h-96 sm:h-[500px] lg:h-[600px] bg-white rounded-xl shadow-lg overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#D2691E] text-white px-3 py-1 rounded-full text-sm font-medium font-sans">
                    {product.brand}
                  </span>
                  <span className="bg-[#ffdd02] text-black px-3 py-1 rounded-full text-sm font-medium font-sans">
                    {product.category}
                  </span>
                  {product.tractorRange && (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium font-sans">
                      {product.tractorRange}
                    </span>
                  )}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-4">
                  {product.name}
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 font-sans leading-relaxed">{product.fullDescription}</p>
              </div>

              {/* Downloads Section */}
              {product.downloads && product.downloads.length > 0 && (
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-4">Descargas Disponibles</h3>
                  <div className="space-y-3">
                    {product.downloads.map((download, index) => (
                      <a
                        key={index}
                        href={download.file}
                        download
                        className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-[#D2691E] hover:bg-[#D2691E] hover:text-white transition-colors group"
                      >
                        <svg
                          className="w-5 h-5 text-red-500 group-hover:text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <div className="flex-1">
                          <p className="font-medium font-sans">{download.name}</p>
                          <p className="text-sm text-gray-500 group-hover:text-gray-200">{download.type}</p>
                        </div>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/5492612210039?text=Hola%20Balboa%20Agromaquinas,%20me%20interesa%20obtener%20información%20detallada%20sobre%20${encodeURIComponent(product.name)}%20de%20${encodeURIComponent(product.brand)}.%20¿Podrían%20brindarme%20especificaciones%20técnicas,%20disponibilidad%20y%20cotización?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#ffdd02] hover:bg-[#D2691E] hover:text-white text-black px-8 py-4 rounded-lg font-medium transition-colors text-center font-display text-lg"
                >
                  Solicitar Cotización
                </a>
                <Link
                  href="/contacto"
                  className="border-2 border-[#D2691E] text-[#D2691E] hover:bg-[#D2691E] hover:text-white px-8 py-4 rounded-lg font-medium transition-colors text-center font-display text-lg"
                >
                  Contactar Asesor
                </Link>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-6">
                Especificaciones Técnicas
              </h2>
              <ul className="space-y-3">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="flex items-start gap-3 font-sans">
                    <svg
                      className="w-5 h-5 text-[#D2691E] mt-0.5 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              {/* Applications */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-6">Aplicaciones</h2>
                <ul className="space-y-3">
                  {product.applications.map((app, index) => (
                    <li key={index} className="flex items-start gap-3 font-sans">
                      <svg
                        className="w-5 h-5 text-[#ffdd02] mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-6">Beneficios</h2>
                <ul className="space-y-3">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 font-sans">
                      <svg
                        className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-gray-900 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-white mb-4">Otros Productos</h2>
            <p className="text-lg sm:text-xl text-gray-300 font-sans">
              Explorá nuestra gama completa de maquinaria agrícola
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 4)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/productos/${relatedProduct.slug}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={relatedProduct.image || "/placeholder.svg"}
                      alt={relatedProduct.name}
                      fill
                      className="object-contain p-4"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display font-bold text-gray-900 mb-2 line-clamp-2">{relatedProduct.name}</h3>
                    <p className="text-sm text-gray-600 font-sans">{relatedProduct.brand}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }))
}
