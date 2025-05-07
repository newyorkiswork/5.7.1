"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface WelcomeScreenProps {
  onComplete: () => void
}

export default function WelcomeScreen({ onNext }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-between h-full py-12 px-6">
      <div className="w-full flex flex-col items-center">
        {/* Status bar mockup */}
        <div className="w-full flex justify-between items-center mb-12">
          <div className="text-sm">9:41</div>
          <div className="flex items-center gap-1">
            <div className="h-3 w-3 rounded-full bg-black"></div>
            <div className="h-3 w-3 rounded-full bg-black"></div>
            <div className="h-3 w-3 rounded-full bg-black"></div>
          </div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="bg-violet-600 p-4 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
              <path d="M12 10L12 14"></path>
              <path d="M10 14L14 14"></path>
            </svg>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-semibold text-center mb-4"
        >
          Hey! I'm carti AI, and I'm here to assist you with your account setup experience. Let's Go!
        </motion.h1>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="w-full"
      >
        <Button onClick={onNext} className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full py-6">
          Let's Start <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.div>

      {/* Home indicator mockup */}
      <div className="w-16 h-1 bg-black rounded-full mt-8"></div>
    </div>
  )
}
