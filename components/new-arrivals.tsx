"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Heart } from "lucide-react"

const products = [
  {
    id: 101,
    title: "Minimalist Desk Lamp",
    price: 49.99,
    image: "/placeholder.svg?height=300&width=300&query=desk%20lamp",
  },
  {
    id: 102,
    title: "Organic Cotton Hoodie",
    price: 59.99,
    image: "/placeholder.svg?height=300&width=300&query=hoodie",
  },
  {
    id: 103,
    title: "Wireless Earbuds",
    price: 89.99,
    image: "/placeholder.svg?height=300&width=300&query=earbuds",
  },
  {
    id: 104,
    title: "Ceramic Coffee Mug",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=300&query=coffee%20mug",
  },
]

export default function NewArrivals() {
  const [wishlist, setWishlist] = useState<number[]>([])
  const [cart, setCart] = useState<number[]>([])

  const toggleWishlist = (id: number) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter((itemId) => itemId !== id))
    } else {
      setWishlist([...wishlist, id])
    }
  }

  const addToCart = (id: number) => {
    if (!cart.includes(id)) {
      setCart([...cart, id])
    }
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out our latest products that just hit the shelves
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg?height=300&width=300&query=product"}
                  alt={product.title}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-3 right-3 bg-white rounded-full ${
                    wishlist.includes(product.id) ? "text-red-500" : "text-gray-400"
                  }`}
                  onClick={() => toggleWishlist(product.id)}
                >
                  <Heart className={wishlist.includes(product.id) ? "fill-red-500" : ""} size={18} />
                </Button>
              </div>

              <CardContent className="p-4">
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-medium text-sm mb-2 hover:text-primary transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                </Link>

                <div className="flex items-center justify-between">
                  <span className="font-bold">${product.price.toFixed(2)}</span>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 rounded-full hover:bg-primary hover:text-white"
                    onClick={() => addToCart(product.id)}
                    disabled={cart.includes(product.id)}
                  >
                    <ShoppingCart size={16} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/new-arrivals">
            <Button>View All New Arrivals</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
