import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Check } from "lucide-react"

interface PricingCardProps {
  title: string
  price: string
  period: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
  highlighted?: boolean
}

export function PricingCard({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false,
}: PricingCardProps) {
  return (
    <Card className={`border-0 ${highlighted ? "shadow-xl ring-2 ring-teal-500 relative" : "shadow-sm"}`}>
      {highlighted && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}
      <CardHeader className={`pb-0 pt-8 ${highlighted ? "bg-teal-50 rounded-t-lg" : ""}`}>
        <div className="text-center">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <div className="flex items-baseline justify-center">
            <span className="text-4xl font-bold">{price}</span>
            <span className="ml-1 text-gray-500">{period}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className={`pt-6 ${highlighted ? "bg-teal-50" : ""}`}>
        <p className="text-center text-gray-600 mb-6">{description}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className={`h-5 w-5 mr-2 flex-shrink-0 ${highlighted ? "text-teal-500" : "text-gray-400"}`} />
              <span className="text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className={`pt-6 pb-8 ${highlighted ? "bg-teal-50 rounded-b-lg" : ""}`}>
        <Button
          asChild
          className={`w-full ${highlighted ? "bg-teal-600 hover:bg-teal-700" : ""}`}
          variant={highlighted ? "default" : "outline"}
        >
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

