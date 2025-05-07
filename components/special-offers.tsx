import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SpecialOffers() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800&query=summer%20sale%20fashion"
              alt="Summer Sale"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex flex-col justify-center p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Summer Sale</h3>
              <p className="text-white/90 mb-4 max-w-xs">Get up to 50% off on our summer collection</p>
              <Button variant="outline" className="bg-white text-primary hover:bg-white/90 w-fit">
                Shop Now
              </Button>
            </div>
          </div>

          <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=600&width=800&query=new%20arrivals%20fashion"
              alt="New Arrivals"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center p-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">New Arrivals</h3>
              <p className="text-white/90 mb-4 max-w-xs">Check out our latest products just for you</p>
              <Button variant="outline" className="bg-white text-black hover:bg-white/90 w-fit">
                Discover
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
