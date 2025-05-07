"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

interface VerifyPinProps {
  phoneNumber: string
  onComplete: () => void
  onBack: () => void
}

export default function VerifyPin({ phoneNumber, onComplete, onBack }: VerifyPinProps) {
  const [pin, setPin] = useState(["", "", "", ""])
  const [isLoading, setIsLoading] = useState(false)
  const [isVerified, setIsVerified] = useState(false)
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  const handlePinChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.slice(0, 1)
    }

    const newPin = [...pin]
    newPin[index] = value
    setPin(newPin)

    // Auto-focus next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !pin[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const handleVerify = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsVerified(true)

      // Redirect after showing success animation
      setTimeout(() => {
        onComplete()
      }, 1500)
    }, 1000)
  }

  const isPinComplete = pin.every((digit) => digit !== "")

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-8">
        <button type="button" onClick={onBack} className="p-2 rounded-full hover:bg-gray-100">
          <ArrowLeft className="h-5 w-5" />
        </button>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">Verify PIN</h1>
        <p className="text-gray-500 mt-2">Enter the 4-digit PIN {phoneNumber ? `sent to ${phoneNumber}` : ""}</p>
      </div>

      {isVerified ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center justify-center py-8"
        >
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <h2 className="text-xl font-medium text-center">Verification Successful</h2>
          <p className="text-gray-500 text-center mt-2">Redirecting to your account...</p>
        </motion.div>
      ) : (
        <>
          <div className="flex justify-center space-x-4 mb-8">
            {pin.map((digit, index) => (
              <Input
                key={index}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={digit}
                onChange={(e) => handlePinChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => {
                  inputRefs.current[index] = el
                }}
                className="w-12 h-12 text-center text-xl"
              />
            ))}
          </div>

          <Button
            type="button"
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
            disabled={!isPinComplete || isLoading}
            onClick={handleVerify}
          >
            {isLoading ? "Verifying..." : "Verify"}
          </Button>

          <div className="text-center mt-4">
            <button type="button" className="text-primary hover:underline text-sm">
              Resend PIN
            </button>
          </div>
        </>
      )}
    </div>
  )
}
