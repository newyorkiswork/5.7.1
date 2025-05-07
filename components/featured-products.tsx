"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart, Heart } from "lucide-react"

const products = [
  {
    id: 1,
    title: "Wireless Noise Cancelling Headphones",
    category: "Electronics",
    price: 249.99,
    oldPrice: 299.99,
    location: "Free Shipping",
    image: "/diverse-music-lovers.png",
    featured: true,
    rating: 4.8,
    inStock: true,
  },
  {
    id: 2,
    title: "Premium Cotton T-Shirt",
    category: "Fashion",
    price: 29.99,
    oldPrice: null,
    location: "Free Shipping",
    image: "/classic-plain-tee.png",
    featured: true,
    rating: 4.6,
    inStock: true,
  },
  {
    id: 3,
    title: "Smart Watch Series 5",
    category: "Electronics",
    price: 199.99,
    oldPrice: 249.99,
    location: "Free Shipping",
    image: "/modern-smartwatch-display.png",
    featured: false,
    rating: 4.9,
    inStock: true,
  },
  {
    id: 4,
    title: "Ergonomic Office Chair",
    category: "Home & Office",
    price: 189.99,
    oldPrice: 229.99,
    location: "Free Shipping",
    image: "/placeholder.svg?height=400&width=400&query=office%20chair",
    featured: false,
    rating: 4.7,
    inStock: false,
  },
  {
    id: 5,
    title: "Stainless Steel Water Bottle",
    category: "Sports & Outdoors",
    price: 24.99,
    oldPrice: 34.99,
    location: "Free Shipping",
    image: "/placeholder.svg?height=400&width=400&query=water%20bottle",
    featured: true,
    rating: 4.5,
    inStock: true,
  },
  {
    id: 6,
    title: "Organic Skincare Set",
    category: "Beauty",
    price: 79.99,
    oldPrice: 99.99,
    location: "Free Shipping",
    image: "/placeholder.svg?height=400&width=400&query=skincare%20set",
    featured: false,
    rating: 4.8,
    inStock: true,
  },
]

export default function FeaturedProducts() {
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
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-muted-foreground">Discover our most popular items loved by customers</p>
          </div>
          <Link href="/products" className="text-primary font-medium hover:underline hidden md:block">
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden group">
              <div className="relative h-64 w-full overflow-hidden bg-gray-100">
                <Image
                  src={product.image || "/placeholder.svg?height=400&width=400&query=product"}
                  alt={product.title}
                  fill
                  className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
                {product.oldPrice && (
                  <Badge className="absolute top-3 left-3 bg-red-500">
                    {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
                  </Badge>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className={`absolute top-3 right-3 bg-white rounded-full ${
                    wishlist.includes(product.id) ? "text-red-500" : "text-gray-400"
                  }`}
                  onClick={() => toggleWishlist(product.id)}
                >
                  <Heart className={wishlist.includes(product.id) ? "fill-red-500" : ""} />
                </Button>
              </div>

              <CardContent className="p-4">
                <div className="mb-2">
                  <span className="text-sm text-muted-foreground">{product.category}</span>
                </div>
                <Link href={`/product/${product.id}`}>
                  <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors line-clamp-1">
                    {product.title}
                  </h3>
                </Link>

                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-1 text-sm text-muted-foreground">{product.rating}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
                    {product.oldPrice && (
                      <span className="text-muted-foreground line-through text-sm">${product.oldPrice.toFixed(2)}</span>
                    )}
                  </div>
                  <span className="text-xs text-green-600">{product.location}</span>
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button
                  className="w-full"
                  disabled={!product.inStock || cart.includes(product.id)}
                  onClick={() => addToCart(product.id)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  {!product.inStock ? "Out of Stock" : cart.includes(product.id) ? "Added to Cart" : "Add to Cart"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10 md:hidden">
          <Link href="/products" className="text-primary font-medium hover:underline">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
