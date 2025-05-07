"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import type { OnboardingData } from "./onboarding-container"

interface PlanScreenProps {
  onNext: () => void
  onPrev: () => void
  onboardingData: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}

export default function PlanScreen({ onNext, onPrev, onboardingData, updateData }: PlanScreenProps) {
  const [selectedPlan, setSelectedPlan] = useState<"free" | "plus">(onboardingData.selectedPlan)

  const handleContinue = () => {
    updateData({ selectedPlan })
    onNext()
  }

  const handleFreeTrial = () => {
    updateData({ selectedPlan: "plus" })
    onNext()
  }

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
          className="text-2xl font-semibold mb-2 text-center"
        >
          Choose your plan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-gray-500 mb-8"
        >
          Cancel anytime and it's flexible.
        </motion.p>

        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant={selectedPlan === "free" ? "default" : "outline"}
              className={`rounded-full ${selectedPlan === "free" ? "bg-violet-600" : ""}`}
              onClick={() => setSelectedPlan("free")}
            >
              Monthly
            </Button>
            <Button
              variant={selectedPlan === "plus" ? "default" : "outline"}
              className={`rounded-full ${selectedPlan === "plus" ? "bg-violet-600" : ""}`}
              onClick={() => setSelectedPlan("plus")}
            >
              Yearly
            </Button>
          </div>
        </div>

        <RadioGroup value={selectedPlan} onValueChange={(value) => setSelectedPlan(value as "free" | "plus")}>
          <div className="space-y-4">
            <div
              className={`border rounded-xl p-6 ${
                selectedPlan === "free" ? "border-violet-600 bg-violet-50" : "border-gray-200"
              }`}
            >
              <div className="flex items-start">
                <RadioGroupItem value="free" id="free" className="mt-1" />
                <div className="ml-3 flex-1">
                  <Label htmlFor="free" className="text-lg font-medium">
                    FREE PLAN
                  </Label>
                  <div className="mt-1 flex items-baseline">
                    <span className="text-2xl font-bold">$0 USD</span>
                    <span className="ml-1 text-gray-500">/mo</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">Limited features and functionality.</p>
                  <a href="#" className="mt-1 text-sm text-violet-600 font-medium">
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`border rounded-xl p-6 ${
                selectedPlan === "plus" ? "border-violet-600 bg-violet-50" : "border-gray-200"
              }`}
            >
              <div className="flex items-start">
                <RadioGroupItem value="plus" id="plus" className="mt-1" />
                <div className="ml-3 flex-1">
                  <Label htmlFor="plus" className="text-lg font-medium">
                    PLUS PLAN
                  </Label>
                  <div className="mt-1 flex items-baseline">
                    <span className="text-2xl font-bold">$9.99 USD</span>
                    <span className="ml-1 text-gray-500">/mo</span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">All AI E-Commerce Features</p>
                  <a href="#" className="mt-1 text-sm text-violet-600 font-medium">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-4">
        <Button
          onClick={handleFreeTrial}
          variant="outline"
          className="w-full border-violet-600 text-violet-600 hover:bg-violet-50 rounded-full py-6"
        >
          Start Free Trial
        </Button>
        <Button
          onClick={handleContinue}
          className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full py-6"
        >
          Choose this plan
        </Button>
      </div>

      {/* Home indicator mockup */}
      <div className="w-16 h-1 bg-black rounded-full mx-auto mt-8"></div>
    </div>
  )
}
