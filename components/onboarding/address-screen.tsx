"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, MapPin, Building, ChevronDown, Pencil } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { OnboardingData } from "./onboarding-container"

interface AddressScreenProps {
  onNext: () => void
  onPrev: () => void
  onboardingData: OnboardingData
  updateData: (data: Partial<OnboardingData>) => void
}

export default function AddressScreen({ onNext, onPrev, onboardingData, updateData }: AddressScreenProps) {
  const [address, setAddress] = useState(onboardingData.address)
  const [error, setError] = useState("")
  const [showStateDialog, setShowStateDialog] = useState(false)
  const [showMapDialog, setShowMapDialog] = useState(false)

  const handleContinue = () => {
    if (!address.street.trim()) {
      setError("Please enter your street address")
      return
    }
    if (!address.postalCode.trim()) {
      setError("Please enter your postal code")
      return
    }
    updateData({ address })
    onNext()
  }

  const states = [
    "Aberdeen City",
    "Aberdeenshire",
    "Anglesey",
    "Antrim",
    "Armagh",
    "London",
    "Manchester",
    "Birmingham",
    "Liverpool",
    "Edinburgh",
  ]

  return (
    <div className="flex flex-col h-full py-12 px-6 bg-white">
      {/* Status bar mockup */}
      <div className="w-full flex justify-between items-center mb-8">
        <div className="text-sm">9:41</div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-full bg-black"></div>
          <div className="h-3 w-3 rounded-full bg-black"></div>
          <div className="h-3 w-3 rounded-full bg-black"></div>
        </div>
      </div>

      <div className="flex-1">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="bg-violet-600 p-4 rounded-full">
            <MapPin className="h-8 w-8 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl font-semibold mb-8"
        >
          What's your main address?
        </motion.h1>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="country" className="text-sm font-medium">
              Country
            </label>
            <Select value={address.country} onValueChange={(value) => setAddress({ ...address, country: value })}>
              <SelectTrigger className="rounded-full">
                <div className="flex items-center">
                  <span className="mr-1">🇬🇧</span>
                  <SelectValue>{address.country}</SelectValue>
                </div>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="United Kingdom">
                  <div className="flex items-center">
                    <span className="mr-1">🇬🇧</span>
                    <span>United Kingdom</span>
                  </div>
                </SelectItem>
                <SelectItem value="United States">
                  <div className="flex items-center">
                    <span className="mr-1">🇺🇸</span>
                    <span>United States</span>
                  </div>
                </SelectItem>
                <SelectItem value="France">
                  <div className="flex items-center">
                    <span className="mr-1">🇫🇷</span>
                    <span>France</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label htmlFor="street" className="text-sm font-medium">
              Street Address
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="street"
                type="text"
                value={address.street}
                onChange={(e) => {
                  setAddress({ ...address, street: e.target.value })
                  setError("")
                }}
                placeholder="Enter your street address"
                className="pl-10 py-6 rounded-full"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setShowMapDialog(true)}
              >
                <Pencil className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="apartment" className="text-sm font-medium">
              Apartment/Suite
            </label>
            <div className="relative">
              <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                id="apartment"
                type="text"
                value={address.apartment}
                onChange={(e) => setAddress({ ...address, apartment: e.target.value })}
                placeholder="Apartment, suite, unit, etc. (optional)"
                className="pl-10 py-6 rounded-full"
              />
              <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                <Pencil className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="state" className="text-sm font-medium">
                State/Province
              </label>
              <Button
                variant="outline"
                className="w-full justify-start rounded-full"
                onClick={() => setShowStateDialog(true)}
              >
                <span className="truncate">{address.state || "Select"}</span>
                <ChevronDown className="ml-auto h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <label htmlFor="postalCode" className="text-sm font-medium">
                Post Code
              </label>
              <Input
                id="postalCode"
                type="text"
                value={address.postalCode}
                onChange={(e) => {
                  setAddress({ ...address, postalCode: e.target.value })
                  setError("")
                }}
                placeholder="Enter post code"
                className="rounded-full"
              />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
      </div>

      <div className="mt-auto">
        <Button
          onClick={handleContinue}
          className="w-full bg-violet-600 hover:bg-violet-700 text-white rounded-full py-6"
        >
          Continue <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      {/* Home indicator mockup */}
      <div className="w-16 h-1 bg-black rounded-full mx-auto mt-8"></div>

      {/* State Selection Dialog */}
      <Dialog open={showStateDialog} onOpenChange={setShowStateDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Select State/Province</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground mb-4">Please select your state/province.</p>
            <div className="space-y-2 max-h-[300px] overflow-y-auto">
              {states.map((state) => (
                <Button
                  key={state}
                  variant={address.state === state ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => {
                    setAddress({ ...address, state })
                    setShowStateDialog(false)
                  }}
                >
                  {state}
                </Button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Map Dialog */}
      <Dialog open={showMapDialog} onOpenChange={setShowMapDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Edit Address</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <div className="relative h-[300px] w-full bg-gray-100 rounded-lg mb-4">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">Map View</p>
              </div>
              <div className="absolute bottom-4 right-4">
                <Button size="icon" className="rounded-full bg-white text-black">
                  <MapPin className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Input
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                placeholder="Search for address"
                className="rounded-full"
              />
              <div className="space-y-2 max-h-[150px] overflow-y-auto">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    setAddress({ ...address, street: "E7158 Whitechapel High St" })
                    setShowMapDialog(false)
                  }}
                >
                  E7158 Whitechapel High St
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    setAddress({ ...address, street: "E7157 Whitechapel High St" })
                    setShowMapDialog(false)
                  }}
                >
                  E7157 Whitechapel High St
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    setAddress({ ...address, street: "E7156 Whitechapel Low St" })
                    setShowMapDialog(false)
                  }}
                >
                  E7156 Whitechapel Low St
                </Button>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
