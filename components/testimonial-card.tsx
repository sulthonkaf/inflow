import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  image?: string
}

export function TestimonialCard({ quote, author, role, company, image }: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-8">
        <Quote className="h-8 w-8 text-teal-100 mb-4" />
        <p className="text-gray-700 mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
          {image ? (
            <img src={image || "/placeholder.svg"} alt={author} className="h-12 w-12 rounded-full mr-4 object-cover" />
          ) : (
            <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center mr-4">
              <span className="text-teal-600 font-bold text-lg">{author.charAt(0)}</span>
            </div>
          )}
          <div>
            <div className="font-semibold">{author}</div>
            <div className="text-sm text-gray-600">
              {role}, {company}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

