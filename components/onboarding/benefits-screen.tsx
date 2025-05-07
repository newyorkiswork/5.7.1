"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tag, ShoppingBag, Headphones } from "lucide-react"
import type { OnboardingData } from "./onboarding-container"

interface BenefitsScreenProps {
  onNext: () => void
  onPrev: () => void
  onboardingData: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}

export default function BenefitsScreen({ onNext, onPrev, onboardingData, updateData }: BenefitsScreenProps) {
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

      <div className="flex-1">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-semibold mb-2"
        >
          Explore Plus Benefits
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-gray-500 mb-6"
        >
          Cancel anytime and it's flexible.
        </motion.p>

        <div className="relative h-48 rounded-xl overflow-hidden mb-6 bg-violet-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center space-x-4">
              <div className="bg-white p-3 rounded-full shadow-md">
                <ShoppingBag className="h-8 w-8 text-violet-600" />
              </div>
              <div className="bg-white p-3 rounded-full shadow-md">
                <Tag className="h-8 w-8 text-violet-600" />
              </div>
              <div className="bg-white p-3 rounded-full shadow-md">
                <Headphones className="h-8 w-8 text-violet-600" />
              </div>
            </div>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-gray-700 mb-8"
        >
          With Cognicart Plus, shopping becomes more convenient, faster, and packed with value. Join now to start
          enjoying these benefits and elevate your shopping experience!
        </motion.p>

        <div className="space-y-4">
          <div className="flex items-start">
            <div className="bg-violet-100 p-2 rounded-full mr-3">
              <Tag className="h-5 w-5 text-violet-600" />
            </div>
            <div>
              <h3 className="font-medium">Enjoy Members-Only Discounts</h3>
              <p className="text-sm text-gray-500">
                Access special prices on top brands and items across all categories.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-violet-100 p-2 rounded-full mr-3">
              <ShoppingBag className="h-5 w-5 text-violet-600" />
            </div>
            <div>
              <h3 className="font-medium">Personalized Shopping & AI Features</h3>
              <p className="text-sm text-gray-500">
                Enjoy a curated shopping experience with AI-driven recommendations, tailored just for you.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-violet-100 p-2 rounded-full mr-3">
              <Headphones className="h-5 w-5 text-violet-600" />
            </div>
            <div>
              <h3 className="font-medium">Exclusive Customer Support & Concierge</h3>
              <p className="text-sm text-gray-500">
                Access priority support and a dedicated customer service team ready to assist.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Button onClick={onNext} className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full py-6">
          Choose this plan
        </Button>
      </div>

      {/* Home indicator mockup */}
      <div className="w-16 h-1 bg-black rounded-full mx-auto mt-8"></div>
    </div>
  )
}
