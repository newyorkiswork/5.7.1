import { Search, FileText, CheckCircle } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Find What You Want",
    description: "Browse thousands of listings across various categories to find exactly what you're looking for.",
    color: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    icon: FileText,
    title: "Post Your Ad",
    description:
      "Create your own listing in minutes with our easy-to-use form and reach thousands of potential buyers.",
    color: "bg-green-100",
    iconColor: "text-green-500",
  },
  {
    icon: CheckCircle,
    title: "Make a Deal",
    description: "Connect with buyers or sellers, negotiate the best price, and complete your transaction safely.",
    color: "bg-purple-100",
    iconColor: "text-purple-500",
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our platform makes buying and selling simple with just a few easy steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div className="relative mb-6 mx-auto">
                <div className={`${step.color} p-5 rounded-full inline-flex`}>
                  <step.icon className={`h-8 w-8 ${step.iconColor}`} />
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gray-200 -translate-y-1/2"></div>
                )}
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
