"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface WelcomeScreenCardProps {
  icon: ReactNode
  title: string
  description: string
  image?: string
  isActive: boolean
}

export default function WelcomeScreenCard({ icon, title, description, image, isActive }: WelcomeScreenCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{
        opacity: isActive ? 1 : 0.5,
        scale: isActive ? 1 : 0.9,
        y: isActive ? 0 : 20,
      }}
      transition={{ duration: 0.4 }}
      className={`bg-white rounded-2xl shadow-sm border border-gray-100 p-8 w-full max-w-md mx-auto ${isActive ? "z-10" : "z-0"}`}
    >
      <div className="flex justify-center mb-8">
        <div className="bg-primary/5 p-5 rounded-full">{icon}</div>
      </div>

      <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">{title}</h2>

      <p className="text-center text-gray-500 mb-8 max-w-xs mx-auto">{description}</p>

      {image && (
        <div className="relative h-56 w-full rounded-xl overflow-hidden shadow-sm mx-auto max-w-xs">
          <Image src={image || "/placeholder.svg"} alt="Feature preview" fill className="object-cover" />
        </div>
      )}
    </motion.div>
  )
}
