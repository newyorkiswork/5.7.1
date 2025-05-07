"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import NameScreen from "./name-screen"
import PhoneScreen from "./phone-screen"
import AddressScreen from "./address-screen"
import PasscodeScreen from "./passcode-screen"
import PrivacyScreen from "./privacy-screen"
import NotificationsScreen from "./notifications-screen"
import PlanScreen from "./plan-screen"
import BenefitsScreen from "./benefits-screen"
import TrialInfoScreen from "./trial-info-screen"
import TrialStartedScreen from "./trial-started-screen"
import FinalWelcomeScreen from "./final-welcome-screen"

interface OnboardingContainerProps {
  onComplete: () => void
}

export type OnboardingData = {
  fullName: string
  phoneNumber: string
  countryCode: string
  address: {
    country: string
    street: string
    apartment: string
    state: string
    postalCode: string
  }
  passcode: string
  privacyAccepted: boolean
  termsAccepted: boolean
  notificationsEnabled: boolean
  selectedPlan: "free" | "plus"
}

export default function OnboardingContainer({ onComplete }: OnboardingContainerProps) {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [onboardingData, setOnboardingData] = useState<OnboardingData>({
    fullName: "",
    phoneNumber: "",
    countryCode: "+44",
    address: {
      country: "United Kingdom",
      street: "",
      apartment: "",
      state: "",
      postalCode: "",
    },
    passcode: "",
    privacyAccepted: false,
    termsAccepted: false,
    notificationsEnabled: false,
    selectedPlan: "free",
  })

  const updateData = (data: Partial<OnboardingData>) => {
    setOnboardingData((prev) => ({ ...prev, ...data }))
  }

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1)
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(0, prev - 1))
  }

  const handleComplete = () => {
    // Save onboarding data to localStorage or send to API
    localStorage.setItem("onboardingData", JSON.stringify(onboardingData))
    localStorage.setItem("onboardingComplete", "true")
    onComplete()
  }

  const steps = [
    <NameScreen key="name" onNext={nextStep} onboardingData={onboardingData} updateData={updateData} />,
    <PhoneScreen
      key="phone"
      onNext={nextStep}
      onPrev={prevStep}
      onboardingData={onboardingData}
      updateData={updateData}
    />,
    <AddressScreen
      key="address"
      onNext={nextStep}
      onPrev={prevStep}
      onboardingData={onboardingData}
      updateData={updateData}
    />,
    <PasscodeScreen
      key="passcode"
      onNext={nextStep}
      onPrev={prevStep}
      onboardingData={onboardingData}
      updateData={updateData}
    />,
    <PrivacyScreen
      key="privacy"
      onNext={nextStep}
      onPrev={prevStep}
      onboardingData={onboardingData}
      updateData={updateData}
    />,
    <NotificationsScreen
      key="notifications"
      onNext={nextStep}
      onPrev={prevStep}
      onboardingData={onboardingData}
      updateData={updateData}
    />,
    <PlanScreen
      key="plan"
      onNext={nextStep}
      onPrev={prevStep}
      onboardingData={onboardingData}
      updateData={updateData}
    />,
    <BenefitsScreen
      key="benefits"
      onNext={nextStep}
      onPrev={prevStep}
      onboardingData={onboardingData}
      updateData={updateData}
    />,
    <TrialInfoScreen
      key="trial-info"
      onNext={nextStep}
      onPrev={prevStep}
      onboardingData={onboardingData}
      updateData={updateData}
    />,
    <TrialStartedScreen
      key="trial-started"
      onNext={nextStep}
      onPrev={prevStep}
      onboardingData={onboardingData}
      updateData={updateData}
    />,
    <FinalWelcomeScreen key="final-welcome" onComplete={handleComplete} />,
  ]

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto h-full flex flex-col">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="flex-1 flex flex-col w-full"
          >
            {steps[currentStep]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
