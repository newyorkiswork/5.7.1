"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Heart, ChevronLeft, ChevronRight, ShoppingCart, Tag } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface WelcomeScreenProps {
  onComplete: () => void
}

export default function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    // Set window width for responsive adjustments
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const screens = [
    {
      icon: <ShoppingBag className="h-12 w-12 text-primary" />,
      title: "Welcome to ShopEase",
      description:
        "Your one-stop destination for all your shopping needs with personalized recommendations and easy navigation.",
      image: "/modern-shopping-app.png",
      color: "bg-blue-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-500",
    },
    {
      icon: <Tag className="h-12 w-12 text-primary" />,
      title: "Discover Amazing Deals",
      description: "Find the best deals and discounts on thousands of products from top brands and local sellers.",
      image: "/discount-deals-app.png",
      color: "bg-green-50",
      iconBg: "bg-green-100",
      iconColor: "text-green-500",
    },
    {
      icon: <Heart className="h-12 w-12 text-primary" />,
      title: "Create Your Wishlist",
      description: "Save your favorite items and get notified when they go on sale or come back in stock.",
      image: "/modern-wishlist-interface.png",
      color: "bg-pink-50",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-500",
    },
    {
      icon: <ShoppingCart className="h-12 w-12 text-primary" />,
      title: "Easy Shopping Experience",
      description: "Enjoy a seamless shopping experience with secure checkout and multiple payment options.",
      image: "/mobile-checkout-flow.png",
      color: "bg-purple-50",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-500",
    },
  ]

  const nextScreen = () => {
    if (currentScreen < screens.length - 1) {
      setCurrentScreen(currentScreen + 1)
    } else {
      onComplete()
    }
  }

  const prevScreen = () => {
    if (currentScreen > 0) {
      setCurrentScreen(currentScreen - 1)
    }
  }

  const skipToEnd = () => {
    onComplete()
  }

  const goToScreen = (index: number) => {
    setCurrentScreen(index)
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center p-4 md:p-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ duration: 1 }}
          className={`absolute top-0 right-0 w-full h-full ${screens[currentScreen].color} opacity-70`}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: -100 }}
          animate={{ opacity: 0.3, scale: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/10"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 0.2, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-primary/10"
        />
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col h-full justify-between py-4 md:py-8 relative z-10">
        {/* Skip/Back and Next buttons */}
        <div className="flex justify-between items-center w-full mb-4 md:mb-8 px-4">
          {currentScreen > 0 ? (
            <Button
              variant="ghost"
              onClick={prevScreen}
              className="flex items-center text-gray-600 hover:text-gray-900 hover:bg-white/50"
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back
            </Button>
          ) : (
            <Button variant="ghost" onClick={skipToEnd} className="text-gray-500 hover:text-gray-700 hover:bg-white/50">
              Skip
            </Button>
          )}

          <Button
            onClick={nextScreen}
            className="flex items-center bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all"
          >
            {currentScreen === screens.length - 1 ? "Get Started" : "Next"}
            {currentScreen !== screens.length - 1 && <ChevronRight className="h-4 w-4 ml-1" />}
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${currentScreen}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center md:items-start md:w-1/2 text-center md:text-left"
            >
              <div className={`${screens[currentScreen].iconBg} p-5 rounded-full mb-6 md:mb-8`}>
                <motion.div
                  initial={{ rotate: -10, scale: 0.9 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {screens[currentScreen].icon}
                </motion.div>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl md:text-3xl font-bold mb-4 text-gray-900"
              >
                {screens[currentScreen].title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-600 mb-8 max-w-md"
              >
                {screens[currentScreen].description}
              </motion.p>
            </motion.div>

            <motion.div
              key={`image-${currentScreen}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="md:w-1/2 flex justify-center"
            >
              <div className="relative h-64 md:h-80 w-full max-w-xs rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={screens[currentScreen].image || "/placeholder.svg"}
                  alt="Feature preview"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center space-x-2 mt-8 md:mt-12">
          {screens.map((_, index) => (
            <button
              key={index}
              onClick={() => goToScreen(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentScreen === index ? "bg-primary w-10" : "bg-gray-300 w-2.5"
              }`}
              aria-label={`Go to screen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
