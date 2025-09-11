"use client"

const keywords = ["TECNOLOGÍA", "INNOVACIÓN", "CALIDAD", "COMPROMISO"]

export default function BrandsCarousel() {
  const duplicatedKeywords = [...keywords, ...keywords]

  return (
    <section className="py-6 sm:py-8 lg:py-10 bg-gray-50 overflow-hidden">
      <div className="relative">
        <div className="flex w-fit animate-[scroll_12s_linear_infinite]">
          {duplicatedKeywords.map((keyword, index) => (
            <div
              key={`${keyword}-${index}`}
              className="flex-shrink-0 w-48 h-16 xs:w-52 xs:h-18 sm:w-56 sm:h-20 md:w-60 md:h-22 lg:w-64 lg:h-24 xl:w-68 xl:h-26 2xl:w-72 2xl:h-28 mx-4 xs:mx-5 sm:mx-6 md:mx-7 lg:mx-8 xl:mx-9 2xl:mx-10 flex items-center justify-center group"
            >
              <span className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-600 group-hover:text-[#b8860b] transition-colors duration-300 tracking-wider">
                {keyword}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  )
}
