import Image from "next/image"

export default function PromotionalBanner() {
  return (
    <section className="w-full py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full overflow-hidden rounded-lg">
          <Image
            src="/images/banner-promocional-merkat-agri.webp"
            alt="Tradicionalmente un paso adelante - Merkat Agri ha alcanzado una posición de liderazgo en el mercado de maquinaria agrícola"
            width={1200}
            height={400}
            className="w-full h-auto object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            priority={false}
          />
        </div>
      </div>
    </section>
  )
}
