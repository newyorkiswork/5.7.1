"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // This page acts as a router to direct users to the appropriate starting point
    const hasVisited = sessionStorage.getItem("hasVisited")
    const hasCompletedWelcome = sessionStorage.getItem("hasCompletedWelcome")
    const isUserAuthenticated = sessionStorage.getItem("isAuthenticated")

    if (hasVisited && hasCompletedWelcome && isUserAuthenticated) {
      router.push("/home")
    } else if (hasVisited && hasCompletedWelcome) {
      router.push("/auth")
    } else if (hasVisited) {
      router.push("/onboarding/welcome")
    }
    // If none of these conditions are met, the splash screen will be shown
    // and then redirect to /onboarding/welcome
  }, [router])

  return null // This page doesn't render anything, it just redirects
}
