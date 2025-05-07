"use client"

import { useRouter } from "next/navigation"
import AuthContainer from "@/components/auth/auth-container"

export default function AuthPage() {
  const router = useRouter()

  const handleSignInComplete = () => {
    // User is authenticated, go directly to home
    sessionStorage.setItem("isAuthenticated", "true")
    router.push("/home")
  }

  const handleCreateAccount = () => {
    // User wants to create account, go to onboarding/signup
    router.push("/auth/signup")
  }

  return <AuthContainer onSignInComplete={handleSignInComplete} onCreateAccount={handleCreateAccount} />
}
