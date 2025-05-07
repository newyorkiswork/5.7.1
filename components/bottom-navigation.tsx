"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Search, Tag, Heart, User, ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navItems = [
  {
    name: "Home",
    href: "/",
    icon: Home,
  },
  {
    name: "Search",
    href: "/search",
    icon: Search,
  },
  {
    name: "Categories",
    href: "/categories",
    icon: Tag,
  },
  {
    name: "Wishlist",
    href: "/wishlist",
    icon: Heart,
  },
  {
    name: "Account",
    href: "/account",
    icon: User,
  },
]

export default function BottomNavigation() {
  const pathname = usePathname()
  const [cartCount, setCartCount] = useState(3) // Example cart count

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full text-xs relative",
                isActive ? "text-primary" : "text-gray-500",
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute top-0 w-12 h-1 bg-primary rounded-b-full"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <item.icon className={cn("h-5 w-5 mb-1", isActive ? "text-primary" : "text-gray-500")} />
              <span>{item.name}</span>
            </Link>
          )
        })}
        <Link href="/cart" className="flex flex-col items-center justify-center w-full h-full text-xs text-gray-500">
          <div className="relative">
            <ShoppingBag className="h-5 w-5 mb-1" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>
          <span>Cart</span>
        </Link>
      </div>
    </div>
  )
}
