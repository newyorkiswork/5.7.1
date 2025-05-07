"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingBag, Phone, Mail, Lock, ChevronRight } from "lucide-react"

interface PhoneSignUpProps {
  onSubmit: (phone: string) => void
  onSignIn: () => void
}

export default function PhoneSignUp({ onSubmit, onSignIn }: PhoneSignUpProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [pin, setPin] = useState("")
  const [confirmPin, setConfirmPin] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onSubmit(phoneNumber)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-primary/10 p-4 rounded-full mb-4">
          <ShoppingBag className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-semibold text-center">Create New Account</h1>
        <p className="text-gray-500 text-center mt-2">Sign up to start shopping</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number</Label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email (for recovery)</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pin">Create PIN</Label>
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
          <Label htmlFor="confirmPin">Confirm PIN</Label>
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
          {isLoading ? "Creating Account..." : "Create New Account"}
          {!isLoading && <ChevronRight className="ml-2 h-4 w-4" />}
        </Button>
      </form>

      <div className="text-center">
        <div className="text-sm text-gray-500">
          Already have an account?{" "}
          <button type="button" onClick={onSignIn} className="text-primary hover:underline font-medium">
            Sign In
          </button>
        </div>
      </div>
    </div>
  )
}
