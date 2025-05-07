"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Phone, Mail, ChevronRight } from "lucide-react"

interface ForgotPasswordProps {
  onSubmit: (phone: string) => void
  onBack: () => void
}

export default function ForgotPassword({ onSubmit, onBack }: ForgotPasswordProps) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
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
      <div className="flex items-center mb-8">
        <button type="button" onClick={onBack} className="p-2 rounded-full hover:bg-gray-100">
          <ArrowLeft className="h-5 w-5" />
        </button>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-semibold">Forgot Password</h1>
        <p className="text-gray-500 mt-2">Enter your phone number and recovery email to reset your PIN</p>
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
          <Label htmlFor="email">Recovery Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your recovery email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              required
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90 text-white rounded-full"
          disabled={isLoading}
        >
          {isLoading ? "Sending Reset Link..." : "Reset PIN"}
          {!isLoading && <ChevronRight className="ml-2 h-4 w-4" />}
        </Button>
      </form>
    </div>
  )
}
