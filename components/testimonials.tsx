import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Verified Buyer",
    content:
      "I absolutely love the quality of products from this store. The shipping was fast and everything arrived in perfect condition. Will definitely shop here again!",
    rating: 5,
    avatar: "/placeholder.svg?height=200&width=200&query=woman%20portrait",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Verified Buyer",
    content:
      "Great customer service and amazing products. I had an issue with my order and they resolved it immediately. The quality exceeded my expectations.",
    rating: 5,
    avatar: "/placeholder.svg?height=200&width=200&query=man%20portrait",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Verified Buyer",
    content:
      "This is my go-to online store now. The prices are reasonable and the quality is outstanding. I've recommended it to all my friends and family.",
    rating: 4,
    avatar: "/placeholder.svg?height=200&width=200&query=woman%20portrait%20smiling",
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See what our customers have to say about their shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-muted-foreground flex-grow">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
