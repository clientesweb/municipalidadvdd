import Header from "@/components/header"
import VideoBanner from "@/components/video-banner"
import AboutSection from "@/components/about-section"
import BrandsCarousel from "@/components/brands-carousel"
import FeaturedProducts from "@/components/featured-products"
import PromotionalBanner from "@/components/promotional-banner"
import NewsSection from "@/components/news-section"
import WhatsAppFloat from "@/components/whatsapp-float"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <VideoBanner />
      <AboutSection />
      <BrandsCarousel />
      <div id="productos">
        <FeaturedProducts />
      </div>
      <PromotionalBanner />
      <NewsSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
