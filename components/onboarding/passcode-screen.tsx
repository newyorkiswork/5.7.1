"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { OnboardingData } from "./onboarding-container"

interface PasscodeScreenProps {
  onNext: () => void
  onPrev: () => void
  onboardingData: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}

export default function PasscodeScreen({ onNext, onPrev, onboardingData, updateData }: PasscodeScreenProps) {
  const [passcode, setPasscode] = useState("")
  const [error, setError] = useState("")

  const handleDigitClick = (digit: string) => {
    if (passcode.length < 6) {
      const newPasscode = passcode + digit
      setPasscode(newPasscode)
      setError("")

      if (newPasscode.length === 6) {
        // Auto-submit after 6 digits
        setTimeout(() => {
          updateData({ passcode: newPasscode })
          onNext()
        }, 500)
      }
    }
  }

  const handleBackspace = () => {
    setPasscode(passcode.slice(0, -1))
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-semibold mb-16 text-center"
        >
          Let's quickly set up a passcode.
        </motion.h1>

        <div className="flex justify-center mb-12">
          <div className="flex gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full border-2 ${
                  i < passcode.length ? "bg-violet-600 border-violet-600" : "border-violet-300"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}

        <div className="grid grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((digit) => (
            <Button
              key={digit}
              variant="ghost"
              className="h-16 w-16 rounded-full text-2xl font-medium mx-auto"
              onClick={() => handleDigitClick(digit.toString())}
            >
              {digit}
            </Button>
          ))}
          <div className="h-16 w-16"></div>
          <Button
            variant="ghost"
            className="h-16 w-16 rounded-full text-2xl font-medium mx-auto"
            onClick={() => handleDigitClick("0")}
          >
            0
          </Button>
          <Button
            variant="ghost"
            className="h-16 w-16 rounded-full text-xl font-medium mx-auto"
            onClick={handleBackspace}
          >
            ⌫
          </Button>
        </div>
      </div>

      {/* Home indicator mockup */}
      <div className="w-16 h-1 bg-black rounded-full mx-auto mt-8"></div>
    </div>
  )
}
