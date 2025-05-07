import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const cities = [
  {
    name: "New York",
    count: 1245,
    image: "/placeholder.svg?height=600&width=800&query=new%20york%20city%20skyline",
  },
  {
    name: "Los Angeles",
    count: 932,
    image: "/placeholder.svg?height=600&width=800&query=los%20angeles%20city%20skyline",
  },
  {
    name: "Chicago",
    count: 745,
    image: "/placeholder.svg?height=600&width=800&query=chicago%20city%20skyline",
  },
  {
    name: "Houston",
    count: 647,
    image: "/placeholder.svg?height=600&width=800&query=houston%20city%20skyline",
  },
]

export default function PopularCities() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Popular Cities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore listings in these popular cities with the most active marketplaces
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Link href={`/city/${city.name.toLowerCase()}`} key={city.name}>
              <Card className="overflow-hidden h-64 group relative">
                <div className="absolute inset-0">
                  <Image
                    src={city.image || "/placeholder.svg"}
                    alt={city.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                </div>

                <CardContent className="p-6 absolute bottom-0 left-0 right-0 text-white">
                  <h3 className="font-bold text-xl mb-1">{city.name}</h3>
                  <p className="text-white/80">{city.count} listings</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/cities" className="text-primary font-medium hover:underline">
            View All Cities
          </Link>
        </div>
      </div>
    </section>
  )
}
