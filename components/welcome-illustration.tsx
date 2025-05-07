"use client"

import { motion } from "framer-motion"

export default function WelcomeIllustration() {
  return (
    <div className="absolute top-0 right-0 w-full h-full overflow-hidden -z-10 opacity-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-10 right-10 w-32 h-32 rounded-full bg-blue-100"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-40 right-40 w-16 h-16 rounded-full bg-purple-100"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-20 left-10 w-24 h-24 rounded-full bg-green-100"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-40 left-40 w-12 h-12 rounded-full bg-yellow-100"
      />
    </div>
  )
}
