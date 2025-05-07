"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, Smartphone } from "lucide-react"
import type { OnboardingData } from "./onboarding-container"

interface TrialInfoScreenProps {
  onNext: () => void
  onPrev: () => void
  onboardingData: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}

export default function TrialInfoScreen({ onNext, onPrev, onboardingData, updateData }: TrialInfoScreenProps) {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)

  const toggleFaq = (id: string) => {
    if (expandedFaq === id) {
      setExpandedFaq(null)
    } else {
      setExpandedFaq(id)
    }
  }

  return (
    <div className="flex flex-col h-full py-12 px-6 bg-violet-50">
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
          className="text-2xl font-semibold mb-8 text-center"
        >
          Here's How your free trial works!
        </motion.h1>

        <div className="space-y-6 mb-8">
          <div className="flex">
            <div className="bg-violet-600 rounded-full h-8 w-8 flex items-center justify-center text-white mr-4">
              <Smartphone className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-medium">Get The App & Sign Up</h3>
              <p className="text-sm text-gray-600">Download the app and complete your profile setup</p>
            </div>
          </div>

          <div className="flex">
            <div className="bg-violet-600 rounded-full h-8 w-8 flex items-center justify-center text-white mr-4">
              <Check className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-medium">Get Full Access To All Features</h3>
              <p className="text-sm text-gray-600">Get access to all premium e-commerce and shopping features</p>
            </div>
          </div>

          <div className="flex">
            <div className="bg-violet-600 rounded-full h-8 w-8 flex items-center justify-center text-white mr-4">
              <Check className="h-4 w-4" />
            </div>
            <div>
              <h3 className="font-medium">Trial Reminder in 5d</h3>
              <p className="text-sm text-gray-600">We will inform you about the reminder 5 days from now</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-600 mb-2">7 days free, then $7.99/year (25% off)</p>
          <p className="text-xs text-gray-500">That's only $1.99/week, billed annually!</p>
        </div>

        <div className="flex justify-center mb-6">
          <div className="flex flex-col items-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-1">4.8 on App Store</p>
            <p className="text-xs text-gray-400">(275k User Reviews)</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-2">
            <button className="flex justify-between items-center w-full text-left" onClick={() => toggleFaq("cancel")}>
              <span className="text-sm font-medium">How do I cancel subscriptions?</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${expandedFaq === "cancel" ? "transform rotate-180" : ""}`}
              />
            </button>
            {expandedFaq === "cancel" && (
              <p className="text-xs text-gray-500 mt-2 pb-2">
                You can cancel your subscription anytime from your account settings. Your benefits will continue until
                the end of your billing period.
              </p>
            )}
          </div>

          <div className="border-b border-gray-200 pb-2">
            <button className="flex justify-between items-center w-full text-left" onClick={() => toggleFaq("data")}>
              <span className="text-sm font-medium">Will my data disappear</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${expandedFaq === "data" ? "transform rotate-180" : ""}`}
              />
            </button>
            {expandedFaq === "data" && (
              <p className="text-xs text-gray-500 mt-2 pb-2">
                No, your data will not disappear. It's completely and perfectly safe.
              </p>
            )}
          </div>

          <div className="border-b border-gray-200 pb-2">
            <button className="flex justify-between items-center w-full text-left" onClick={() => toggleFaq("stop")}>
              <span className="text-sm font-medium">How I stop subscribing?</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform ${expandedFaq === "stop" ? "transform rotate-180" : ""}`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <Button onClick={onNext} className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full py-6">
          Start Free Trial
        </Button>
      </div>

      {/* Home indicator mockup */}
      <div className="w-16 h-1 bg-black rounded-full mx-auto mt-8"></div>
    </div>
  )
}
