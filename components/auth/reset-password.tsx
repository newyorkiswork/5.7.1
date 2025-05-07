"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Lock, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"

interface ResetPasswordProps {
  phoneNumber: string
  onComplete: () => void
  onBack: () => void
}

export default function ResetPassword({ phoneNumber, onComplete, onBack }: ResetPasswordProps) {
  const [pin, setPin] = useState("")
  const [confirmPin, setConfirmPin] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isReset, setIsReset] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsReset(true)

      // Redirect after showing success animation
      setTimeout(() => {
        onComplete()
      }, 1500)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center mb-8">
        <button type="button" onClick={onBack} className="p-2 rounded-full hover:bg-gray-100">
          <ArrowLeft className="h-5 w-5" />
        </button>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">Reset PIN</h1>
        <p className="text-gray-500 mt-2">Create a new PIN for your account</p>
      </div>

      {isReset ? (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="flex flex-col items-center justify-center py-8"
        >
          <div className="bg-green-100 p-4 rounded-full mb-4">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <h2 className="text-xl font-medium text-center">PIN Reset Successful</h2>
          <p className="text-gray-500 text-center mt-2">You can now sign in with your new PIN</p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="pin">New PIN</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="pin"
                type="password"
                placeholder="Create a 4-digit PIN"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="pl-10"
                maxLength={4}
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPin">Confirm New PIN</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="confirmPin"
                type="password"
                placeholder="Confirm your PIN"
                value={confirmPin}
                onChange={(e) => setConfirmPin(e.target.value)}
                className="pl-10"
                maxLength={4}
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
            disabled={isLoading}
          >
            {isLoading ? "Resetting PIN..." : "Reset PIN"}
          </Button>
        </form>
      )}
    </div>
  )
}
