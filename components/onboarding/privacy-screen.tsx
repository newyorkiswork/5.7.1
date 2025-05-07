"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowRight, Shield } from "lucide-react"
import { Label } from "@/components/ui/label"
import type { OnboardingData } from "./onboarding-container"

interface PrivacyScreenProps {
  onNext: () => void
  onPrev: () => void
  onboardingData: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}

export default function PrivacyScreen({ onNext, onPrev, onboardingData, updateData }: PrivacyScreenProps) {
  const [privacyAccepted, setPrivacyAccepted] = useState(onboardingData.privacyAccepted)
  const [termsAccepted, setTermsAccepted] = useState(onboardingData.termsAccepted)
  const [error, setError] = useState("")

  const handleContinue = () => {
    if (!privacyAccepted || !termsAccepted) {
      setError("Please accept both the Privacy Policy and Terms & Conditions to continue")
      return
    }
    updateData({ privacyAccepted, termsAccepted })
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
            <Shield className="h-8 w-8 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-semibold mb-6"
        >
          Lastly, please agree to our privacy policy
        </motion.h1>

        <div className="mb-8 flex justify-center">
          <div className="bg-gray-100 p-8 rounded-lg">
            <Shield className="h-24 w-24 text-violet-600 mx-auto" />
            <div className="mt-4 text-center text-gray-600">Privacy Protected</div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="privacy"
              checked={privacyAccepted}
              onCheckedChange={(checked) => {
                setPrivacyAccepted(checked === true)
                setError("")
              }}
              className="h-5 w-5 rounded-full data-[state=checked]:bg-violet-600"
            />
            <Label htmlFor="privacy" className="text-sm">
              I agree to Privacy Policy
            </Label>
          </div>

          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={(checked) => {
                setTermsAccepted(checked === true)
                setError("")
              }}
              className="h-5 w-5 rounded-full data-[state=checked]:bg-violet-600"
            />
            <Label htmlFor="terms" className="text-sm">
              I agree to Terms & Conditions
            </Label>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
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
