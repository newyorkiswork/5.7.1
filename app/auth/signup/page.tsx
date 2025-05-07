"use client"

import { useRouter } from "next/navigation"
import OnboardingContainer from "@/components/onboarding/onboarding-container"

export default function SignupPage() {
  const router = useRouter()

  const handleComplete = () => {
    // User has completed onboarding/signup, mark as authenticated and go to home
    sessionStorage.setItem("isAuthenticated", "true")
    router.push("/home")
  }

  return <OnboardingContainer onComplete={handleComplete} />
}
