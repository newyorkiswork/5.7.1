import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"

const listings = [
  {
    id: 1,
    title: "2018 Honda Civic EX",
    category: "Vehicles",
    price: "$18,500",
    location: "New York, NY",
    image: "/urban-civic.png",
    featured: true,
    rating: 4.8,
  },
  {
    id: 2,
    title: "Modern Apartment for Rent",
    category: "Real Estate",
    price: "$2,200/mo",
    location: "Los Angeles, CA",
    image: "/minimalist-loft.png",
    featured: true,
    rating: 4.6,
  },
  {
    id: 3,
    title: "iPhone 13 Pro Max - 256GB",
    category: "Electronics",
    price: "$899",
    location: "Chicago, IL",
    image: "/iphone-13-pro-max-display.png",
    featured: false,
    rating: 4.9,
  },
  {
    id: 4,
    title: "Web Developer - Remote",
    category: "Jobs",
    price: "$85,000/yr",
    location: "Remote",
    image: "/coding-workspace.png",
    featured: false,
    rating: 4.7,
  },
  {
    id: 5,
    title: "Leather Sectional Sofa",
    category: "Furniture",
    price: "$1,299",
    location: "Houston, TX",
    image: "/placeholder.svg?height=600&width=800&query=leather%20sectional%20sofa",
    featured: true,
    rating: 4.5,
  },
  {
    id: 6,
    title: "Professional Photography Services",
    category: "Services",
    price: "$150/hr",
    location: "Miami, FL",
    image: "/placeholder.svg?height=600&width=800&query=professional%20photographer%20camera",
    featured: false,
    rating: 4.8,
  },
]

export default function FeaturedListings() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Listings</h2>
            <p className="text-muted-foreground">Browse our top-rated listings from verified sellers</p>
          </div>
          <Link href="/listings" className="text-primary font-medium hover:underline hidden md:block">
            View All Listings
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <Card key={listing.id} className="overflow-hidden group">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={listing.image || "/placeholder.svg"}
                  alt={listing.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {listing.featured && <Badge className="absolute top-3 left-3 bg-primary">Featured</Badge>}
                <Badge variant="outline" className="absolute top-3 right-3 bg-white">
                  {listing.category}
                </Badge>
              </div>

              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-lg line-clamp-1">{listing.title}</h3>
                  <span className="font-bold text-primary">{listing.price}</span>
                </div>

                <div className="flex items-center text-muted-foreground text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{listing.location}</span>
                </div>

                <div className="flex items-center">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm">{listing.rating}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0 flex justify-between">
                <Link href={`/listings/${listing.id}`} className="text-primary text-sm font-medium hover:underline">
                  View Details
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link href="/listings" className="text-primary font-medium hover:underline">
            View All Listings
          </Link>
        </div>
      </div>
    </section>
  )
}
