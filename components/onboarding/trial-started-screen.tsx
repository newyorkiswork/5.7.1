"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Star, Percent, Sparkles } from "lucide-react"
import type { OnboardingData } from "./onboarding-container"

interface TrialStartedScreenProps {
  onNext: () => void
  onPrev: () => void
  onboardingData: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}

export default function TrialStartedScreen({ onNext, onPrev, onboardingData, updateData }: TrialStartedScreenProps) {
  return (
    <div className="flex flex-col h-full py-12 px-6">
      {/* Status bar mockup */}
      <div className="w-full flex justify-between items-center mb-8">
        <div className="text-sm">9:41</div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-black"></div>
          <div className="h-3 w-3 rounded-full bg-black"></div>
          <div className="h-3 w-3 rounded-full bg-black"></div>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="relative h-40 w-40 mb-8 flex items-center justify-center">
          <div className="absolute">
            <div className="bg-violet-600 rounded-full p-6">
              <Sparkles className="h-12 w-12 text-white" />
            </div>
          </div>
          <div className="absolute -top-4 -right-4">
            <div className="bg-amber-400 rounded-full p-3">
              <Star className="h-6 w-6 text-white" />
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4">
            <div className="bg-green-500 rounded-full p-3">
              <Percent className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-semibold mb-4 text-center"
        >
          Your 7 day plus trial has officially begin!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-gray-500 mb-8"
        >
          You can cancel or change your plan at any time. We'll send you a reminder in 5d.
        </motion.p>
      </div>

      <div className="mt-auto">
        <Button onClick={onNext} className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full py-6">
          Awesome, thanks! <Check className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Home indicator mockup */}
      <div className="w-16 h-1 bg-black rounded-full mx-auto mt-8"></div>
    </div>
  )
}
