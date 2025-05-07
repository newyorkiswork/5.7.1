"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ShoppingBag, Mail, Lock, ChevronRight } from "lucide-react"

interface EmailSignInProps {
  onSubmit: (email: string) => void
  onUsePhone: () => void
  onCreateAccount: () => void
}

export default function EmailSignIn({ onSubmit, onUsePhone, onCreateAccount }: EmailSignInProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      onSubmit(email)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center mb-8">
        <div className="bg-primary/10 p-4 rounded-full mb-4">
          <ShoppingBag className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-semibold text-center">Sign In with Email</h1>
        <p className="text-gray-500 text-center mt-2">Enter your email and password to continue</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
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
          <div className="flex justify-between">
            <Label htmlFor="password">Password</Label>
            <button type="button" className="text-sm text-primary hover:underline">
              Forgot Password?
            </button>
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
          {isLoading ? "Signing in..." : "Sign In"}
          {!isLoading && <ChevronRight className="ml-2 h-4 w-4" />}
        </Button>
      </form>

      <div className="text-center space-y-4">
        <div className="flex items-center justify-center">
          <div className="border-t border-gray-200 flex-grow"></div>
          <span className="px-4 text-sm text-gray-500">or</span>
          <div className="border-t border-gray-200 flex-grow"></div>
        </div>

        <Button type="button" variant="outline" className="w-full" onClick={onUsePhone}>
          Sign in with Phone
        </Button>

        <div className="text-sm text-gray-500">
          Don't have an account?{" "}
          <button type="button" onClick={onCreateAccount} className="text-primary hover:underline font-medium">
            Create New Account
          </button>
        </div>
      </div>
    </div>
  )
}
