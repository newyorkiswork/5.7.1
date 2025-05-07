import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function DownloadApp() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Download Our Mobile App</h2>
            <p className="mb-6 text-white/90">
              Get the full experience on the go. Browse listings, post ads, and connect with buyers and sellers from
              anywhere with our mobile app.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 border-none">
                <Image
                  src="/placeholder.svg?height=40&width=40&query=apple%20logo"
                  alt="App Store"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                App Store
              </Button>
              <Button variant="outline" className="bg-white text-primary hover:bg-gray-100 border-none">
                <Image
                  src="/placeholder.svg?height=40&width=40&query=google%20play%20logo"
                  alt="Google Play"
                  width={24}
                  height={24}
                  className="mr-2"
                />
                Google Play
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] hidden md:block">
            <Image
              src="/placeholder.svg?height=800&width=400&query=smartphone%20with%20classified%20app%20mockup"
              alt="Mobile App"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
