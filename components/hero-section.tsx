"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const trendingItems = ["Summer Collection", "Smart Watches", "Sneakers", "Home Decor", "Organic"]

  return (
    <div className="relative bg-gradient-to-r from-primary/90 to-primary/70 py-16 md:py-24 lg:py-32">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-[url('/bustling-mall-interior.png')] bg-cover bg-center mix-blend-overlay opacity-20"></div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isVisible ? 0.1 : 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isVisible ? 0.1 : 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-white"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            className="text-left"
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
          >
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 leading-tight"
              variants={item}
            >
              Shop the Latest <br className="hidden md:block" /> Trends & Styles
            </motion.h1>

            <motion.p className="text-lg md:text-xl text-white/90 mb-8" variants={item}>
              Discover our curated collection of fashion, electronics, home goods and more with free shipping on orders
              over $50
            </motion.p>

            <motion.div variants={item}>
              <div className="flex w-full max-w-md rounded-full overflow-hidden shadow-lg">
                <Input
                  placeholder="Search for products..."
                  className="rounded-r-none border-r-0 bg-white/95 h-12 pl-5 text-base"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button className="rounded-l-none h-12 px-6">
                  <Search className="h-5 w-5 mr-2" />
                  Search
                </Button>
              </div>
            </motion.div>

            <motion.div className="mt-6 flex flex-wrap gap-3 text-white" variants={item}>
              <div className="flex items-center text-white/90 mr-1">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm">Trending:</span>
              </div>
              {trendingItems.map((item) => (
                <motion.a
                  key={item}
                  href="#"
                  className="text-sm bg-white/20 px-3 py-1 rounded-full hover:bg-white/30 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hidden md:block relative h-[400px] lg:h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative h-full w-full">
              <Image src="/colorful-shopping-haul.png" alt="Shopping" fill className="object-contain" priority />

              {/* Floating elements */}
              <motion.div
                className="absolute top-10 right-10 bg-white/90 rounded-lg p-3 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="bg-green-100 p-1 rounded-full mr-2">
                    <ArrowRight className="h-4 w-4 text-green-600" />
                  </div>
                  <span className="text-sm font-medium">Free Shipping</span>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-0 bg-white/90 rounded-lg p-3 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="bg-blue-100 p-1 rounded-full mr-2">
                    <ArrowRight className="h-4 w-4 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium">New Arrivals Daily</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
