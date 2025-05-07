"use client"

import { useRouter } from "next/navigation"
import WelcomeScreen from "@/components/welcome-screen"

export default function WelcomePage() {
  const router = useRouter()

  const handleComplete = () => {
    sessionStorage.setItem("hasCompletedWelcome", "true")
    router.push("/auth")
  }

  return <WelcomeScreen onComplete={handleComplete} />
}
