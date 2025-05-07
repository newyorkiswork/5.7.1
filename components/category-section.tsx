import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Shirt, Laptop, Home, Utensils, Gift, Baby, Dumbbell, Watch } from "lucide-react"

const categories = [
  {
    name: "Fashion",
    icon: Shirt,
    count: "1,234 products",
    color: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    name: "Electronics",
    icon: Laptop,
    count: "943 products",
    color: "bg-green-100",
    iconColor: "text-green-500",
  },
  {
    name: "Home & Kitchen",
    icon: Home,
    count: "578 products",
    color: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    name: "Food & Grocery",
    icon: Utensils,
    count: "1,567 products",
    color: "bg-orange-100",
    iconColor: "text-orange-500",
  },
  {
    name: "Gifts & Crafts",
    icon: Gift,
    count: "437 products",
    color: "bg-red-100",
    iconColor: "text-red-500",
  },
  {
    name: "Baby & Kids",
    icon: Baby,
    count: "853 products",
    color: "bg-pink-100",
    iconColor: "text-pink-500",
  },
  {
    name: "Sports & Fitness",
    icon: Dumbbell,
    count: "327 products",
    color: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    name: "Watches & Accessories",
    icon: Watch,
    count: "692 products",
    color: "bg-teal-100",
    iconColor: "text-teal-500",
  },
]

export default function CategorySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our wide selection of products across popular categories
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link href={`/category/${category.name.toLowerCase().replace(/\s+/g, "-")}`} key={category.name}>
              <Card className="transition-all duration-200 hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`${category.color} p-4 rounded-full mb-4`}>
                    <category.icon className={`h-6 w-6 ${category.iconColor}`} />
                  </div>
                  <h3 className="font-semibold mb-1">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/categories" className="text-primary font-medium hover:underline">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}
