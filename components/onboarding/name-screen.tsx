"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { User } from "lucide-react"
import type { OnboardingData } from "./onboarding-container"

interface NameScreenProps {
  onNext: () => void
  onboardingData: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}

export default function NameScreen({ onNext, onboardingData, updateData }: NameScreenProps) {
  const [fullName, setFullName] = useState(onboardingData.fullName)
  const [error, setError] = useState("")

  const handleContinue = () => {
    if (!fullName.trim()) {
      setError("Please enter your full name")
      return
    }
    updateData({ fullName })
    onNext()
  }

  return (
    <div className="flex flex-col h-full py-12 px-6 bg-white">
      {/* Status bar mockup */}
      <div className="w-full flex justify-between items-center mb-8">
        <div className="text-sm">9:41</div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-black"></div>
          <div className="h-3 w-3 rounded-full bg-black"></div>
          <div className="h-3 w-3 rounded-full bg-black"></div>
        </div>
      </div>

      <div className="flex-1">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="bg-violet-600 p-4 rounded-full">
            <User className="h-8 w-8 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-semibold mb-16"
        >
          What's your full name?
        </motion.h1>

        <div className="space-y-2">
          <label htmlFor="fullName" className="text-sm font-medium">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value)
                setError("")
              }}
              placeholder="Enter your full name"
              className="pl-10 py-6 rounded-full"
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <div className="mt-4 flex items-center justify-center">
          <div className="bg-gray-100 p-2 rounded-full">
            <User className="h-5 w-5 text-gray-500" />
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Your identification is only used to verify payment and nothing else - it's completely safe
        </p>
      </div>

      <div className="mt-auto">
        <Button
          onClick={handleContinue}
          className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full py-6"
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Home indicator mockup */}
      <div className="w-16 h-1 bg-black rounded-full mx-auto mt-8"></div>
    </div>
  )
}
