"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Bell, Check } from "lucide-react"
import type { OnboardingData } from "./onboarding-container"

interface NotificationsScreenProps {
  onNext: () => void
  onPrev: () => void
  onboardingData: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}

export default function NotificationsScreen({ onNext, onPrev, onboardingData, updateData }: NotificationsScreenProps) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(onboardingData.notificationsEnabled)

  const handleEnableNotifications = () => {
    setNotificationsEnabled(true)
    updateData({ notificationsEnabled: true })
    onNext()
  }

  const handleSkip = () => {
    updateData({ notificationsEnabled: false })
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

      <div className="flex-1 flex flex-col items-center justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-semibold mb-4 text-center"
        >
          Enable Notifications
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center text-gray-500 mb-8"
        >
          Enable push notifications to stay on top of your finances with updates on balances and goals made for you.
        </motion.p>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <div className="bg-amber-100 rounded-full p-6">
            <Bell className="h-12 w-12 text-amber-500" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mb-8 flex items-center"
        >
          <div className="bg-violet-100 p-2 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-violet-600"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16v-4"></path>
              <path d="M12 8h.01"></path>
            </svg>
          </div>
          <span className="text-sm text-gray-500 ml-2">cognicart</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-xs text-gray-400 mb-4 text-center"
        >
          You can change the settings at anytime.
        </motion.p>
      </div>

      <div className="space-y-4">
        <Button
          onClick={handleEnableNotifications}
          className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full py-6"
        >
          Enable Notifications <Check className="ml-2 h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          onClick={handleSkip}
          className="w-full text-gray-500 hover:text-gray-700 rounded-full py-6"
        >
          Nope, maybe later
        </Button>
      </div>

      {/* Home indicator mockup */}
      <div className="w-16 h-1 bg-black rounded-full mx-auto mt-8"></div>
    </div>
  )
}
