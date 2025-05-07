"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ShoppingBag, ShoppingCart, Tag, Heart, User } from "lucide-react"

interface SplashScreenProps {
  finishLoading: () => void
}

export default function SplashScreen({ finishLoading }: SplashScreenProps) {
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("")
  const [loadingState, setLoadingState] = useState<"initial" | "progress" | "finalizing">("initial")

  useEffect(() => {
    // Initial delay before starting the animation
    const initialDelay = setTimeout(() => {
      setLoadingState("progress")

      // Start incrementing the progress
      const interval = setInterval(() => {
        setLoadingProgress((prev) => {
          const newProgress = prev + Math.random() * 2.5

          if (newProgress >= 100) {
            clearInterval(interval)
            setLoadingState("finalizing")
            setLoadingText("Preparing your shopping experience")

            // Final delay before finishing
            setTimeout(() => {
              finishLoading()
            }, 1500)
            return 100
          }

          // Update loading text based on progress
          if (newProgress > 15 && newProgress < 35) {
            setLoadingText("Loading product catalog")
          } else if (newProgress >= 35 && newProgress < 55) {
            setLoadingText("Preparing inventory")
          } else if (newProgress >= 55 && newProgress < 75) {
            setLoadingText("Setting up your personalized experience")
          } else if (newProgress >= 75) {
            setLoadingText("Almost ready")
          }

          return newProgress
        })
      }, 100)

      return () => clearInterval(interval)
    }, 800)

    return () => clearTimeout(initialDelay)
  }, [finishLoading])

  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
      },
    }),
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-primary to-primary/80"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full max-w-md flex flex-col items-center justify-center px-4">
          {loadingState === "initial" && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white mb-8"
            >
              <ShoppingBag size={80} className="mx-auto" />
              <motion.h1
                className="text-4xl font-bold mt-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                ShopEase
              </motion.h1>
            </motion.div>
          )}

          {loadingState === "progress" && (
            <>
              <div className="flex justify-center space-x-6 mb-10">
                {[ShoppingBag, Tag, ShoppingCart, Heart, User].map((Icon, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={iconVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-white/90"
                  >
                    <Icon size={i === 0 ? 40 : 30} />
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ width: "100%", opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                className="w-full max-w-xs mb-6"
              >
                <div className="w-full bg-white/20 rounded-full h-3 mb-4 overflow-hidden">
                  <motion.div
                    className="bg-white h-3 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${loadingProgress}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div className="flex justify-between text-white/90 text-sm">
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                    {loadingProgress.toFixed(0)}%
                  </motion.p>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-right"
                  >
                    {loadingText}
                  </motion.p>
                </div>
              </motion.div>
            </>
          )}

          {loadingState === "finalizing" && (
            <>
              <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} className="text-white mb-8">
                <ShoppingBag size={60} className="mx-auto" />
              </motion.div>

              <motion.p
                className="text-white/90 text-center max-w-xs mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {loadingText}
              </motion.p>

              <div>
                <motion.div
                  className="w-10 h-10 border-4 border-white/30 border-t-white rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
              </div>
            </>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
