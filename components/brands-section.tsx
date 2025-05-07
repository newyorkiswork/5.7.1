import Image from "next/image"

const brands = [
  { name: "Nike", logo: "/placeholder.svg?height=100&width=200&query=nike%20logo" },
  { name: "Apple", logo: "/placeholder.svg?height=100&width=200&query=apple%20logo" },
  { name: "Samsung", logo: "/placeholder.svg?height=100&width=200&query=samsung%20logo" },
  { name: "Adidas", logo: "/placeholder.svg?height=100&width=200&query=adidas%20logo" },
  { name: "Sony", logo: "/placeholder.svg?height=100&width=200&query=sony%20logo" },
  { name: "Zara", logo: "/placeholder.svg?height=100&width=200&query=zara%20logo" },
]

export default function BrandsSection() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Brands</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Shop products from your favorite brands with exclusive deals
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-24 transition-all hover:shadow-md"
            >
              <div className="relative h-full w-full">
                <Image src={brand.logo || "/placeholder.svg"} alt={brand.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
