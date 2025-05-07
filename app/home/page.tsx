import HeroSection from "@/components/hero-section"
import CategorySection from "@/components/category-section"
import FeaturedProducts from "@/components/featured-products"
import NewArrivals from "@/components/new-arrivals"
import SpecialOffers from "@/components/special-offers"
import Testimonials from "@/components/testimonials"
import Newsletter from "@/components/newsletter"
import BrandsSection from "@/components/brands-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <SpecialOffers />
      <NewArrivals />
      <BrandsSection />
      <Testimonials />
      <Newsletter />
    </div>
  )
}
