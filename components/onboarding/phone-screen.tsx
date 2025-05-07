"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, ChevronDown, Lock, Phone } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { OnboardingData } from "./onboarding-container"

interface PhoneScreenProps {
  onNext: () => void
  onPrev: () => void
  onboardingData: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}

export default function PhoneScreen({ onNext, onPrev, onboardingData, updateData }: PhoneScreenProps) {
  const [phoneNumber, setPhoneNumber] = useState(onboardingData.phoneNumber)
  const [countryCode, setCountryCode] = useState(onboardingData.countryCode)
  const [error, setError] = useState("")

  const handleContinue = () => {
    if (!phoneNumber.trim()) {
      setError("Please enter your phone number")
      return
    }
    updateData({ phoneNumber, countryCode })
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
            <Phone className="h-8 w-8 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-semibold mb-16"
        >
          What's your phone number?
        </motion.h1>

        <div className="space-y-2">
          <label htmlFor="phoneNumber" className="text-sm font-medium">
            Telephone Number
          </label>
          <div className="flex gap-2">
            <Select value={countryCode} onValueChange={setCountryCode}>
              <SelectTrigger className="w-24 rounded-full">
                <SelectValue>
                  <div className="flex items-center">
                    <span className="mr-1">🇬🇧</span>
                    <span>{countryCode}</span>
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="+44">
                  <div className="flex items-center">
                    <span className="mr-1">🇬🇧</span>
                    <span>+44</span>
                  </div>
                </SelectItem>
                <SelectItem value="+1">
                  <div className="flex items-center">
                    <span className="mr-1">🇺🇸</span>
                    <span>+1</span>
                  </div>
                </SelectItem>
                <SelectItem value="+33">
                  <div className="flex items-center">
                    <span className="mr-1">🇫🇷</span>
                    <span>+33</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            <div className="relative flex-1">
              <Input
                id="phoneNumber"
                type="tel"
                value={phoneNumber}
                onChange={(e) => {
                  setPhoneNumber(e.target.value)
                  setError("")
                }}
                placeholder="(123) 456-7890"
                className="pl-4 py-6 rounded-full"
              />
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>

        <div className="mt-4 flex items-center justify-center">
          <div className="bg-gray-100 p-2 rounded-full">
            <Lock className="h-5 w-5 text-gray-500" />
          </div>
        </div>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Your phone number will be kept private and we don't share to anyone.
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
