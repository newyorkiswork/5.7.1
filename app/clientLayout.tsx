"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SplashScreen from "@/components/splash-screen"
import BottomNavigation from "@/components/bottom-navigation"
import { usePathname, useRouter } from "next/navigation"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap", // Add display swap for better font loading
})

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  // Check if the current path is part of the onboarding flow
  const isOnboardingRoute = pathname?.startsWith("/onboarding")
  const isAuthRoute = pathname?.startsWith("/auth")

  useEffect(() => {
    setMounted(true)

    // Check if user has already seen the splash and welcome screens
    const hasVisited = sessionStorage.getItem("hasVisited")
    const hasCompletedWelcome = sessionStorage.getItem("hasCompletedWelcome")
    const isUserAuthenticated = sessionStorage.getItem("isAuthenticated")

    if (hasVisited && hasCompletedWelcome && isUserAuthenticated) {
      // Skip all screens if user has completed the full flow
      setLoading(false)
      if (pathname === "/") {
        router.push("/home")
      }
    } else if (hasVisited && hasCompletedWelcome) {
      // Skip to auth if user has seen welcome
      setLoading(false)
      if (pathname === "/") {
        router.push("/auth")
      }
    } else if (hasVisited) {
      // Skip splash if user has seen it
      setLoading(false)
      if (pathname === "/") {
        router.push("/onboarding/welcome")
      }
    } else {
      // Show splash for new users
      setLoading(true)
      // After splash screen completes, it will redirect to welcome
    }

    // For development/testing, uncomment to always show splash screen
    // setLoading(true)
  }, [pathname, router])

  const handleFinishLoading = () => {
    setLoading(false)
    // Set session storage to remember user has seen splash screen
    sessionStorage.setItem("hasVisited", "true")
    router.push("/onboarding/welcome")
  }

  // Don't render anything until client-side hydration is complete
  if (!mounted) {
    return null
  }

  // Show splash screen
  if (loading && pathname === "/") {
    return (
      <ThemeProvider attribute="class" defaultTheme="light">
        <SplashScreen finishLoading={handleFinishLoading} />
      </ThemeProvider>
    )
  }

  // For onboarding and auth routes, don't show header/footer
  if (isOnboardingRoute || isAuthRoute) {
    return (
      <ThemeProvider attribute="class" defaultTheme="light">
        {children}
      </ThemeProvider>
    )
  }

  // Main app layout with header and footer
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Header />
      <main className="min-h-screen pb-16 md:pb-0">{children}</main>
      <Footer />
      <BottomNavigation />
    </ThemeProvider>
  )
}
