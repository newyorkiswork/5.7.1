"use client"

import { useState } from "react"
import PhoneSignIn from "./phone-sign-in"
import VerifyPin from "./verify-pin"
import ForgotPassword from "./forgot-password"
import ResetPassword from "./reset-password"
import EmailSignIn from "./email-sign-in"

type AuthView = "phone-sign-in" | "verify-pin" | "forgot-password" | "reset-password" | "email-sign-in"

interface AuthContainerProps {
  onSignInComplete: () => void
  onCreateAccount: () => void
}

export default function AuthContainer({ onSignInComplete, onCreateAccount }: AuthContainerProps) {
  const [view, setView] = useState<AuthView>("phone-sign-in")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")

  const handleViewChange = (newView: AuthView) => {
    setView(newView)
  }

  const handlePhoneSubmit = (phone: string) => {
    setPhoneNumber(phone)
    setView("verify-pin")
  }

  const handleEmailSubmit = (emailAddress: string) => {
    setEmail(emailAddress)
    setView("verify-pin")
  }

  const handleVerifyComplete = () => {
    onSignInComplete()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        {view === "phone-sign-in" && (
          <PhoneSignIn
            onSubmit={handlePhoneSubmit}
            onForgotPassword={() => handleViewChange("forgot-password")}
            onCreateAccount={onCreateAccount}
            onUseEmail={() => handleViewChange("email-sign-in")}
          />
        )}

        {view === "verify-pin" && (
          <VerifyPin
            phoneNumber={phoneNumber}
            onComplete={handleVerifyComplete}
            onBack={() => handleViewChange(email ? "email-sign-in" : "phone-sign-in")}
          />
        )}

        {view === "forgot-password" && (
          <ForgotPassword
            onSubmit={(phone) => {
              setPhoneNumber(phone)
              handleViewChange("reset-password")
            }}
            onBack={() => handleViewChange("phone-sign-in")}
          />
        )}

        {view === "reset-password" && (
          <ResetPassword
            phoneNumber={phoneNumber}
            onComplete={() => handleViewChange("phone-sign-in")}
            onBack={() => handleViewChange("forgot-password")}
          />
        )}

        {view === "email-sign-in" && (
          <EmailSignIn
            onSubmit={handleEmailSubmit}
            onUsePhone={() => handleViewChange("phone-sign-in")}
            onCreateAccount={onCreateAccount}
          />
        )}
      </div>
    </div>
  )
}
