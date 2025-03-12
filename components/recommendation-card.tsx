import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface RecommendationCardProps {
  title: string
  description: string
  icon: ReactNode
  priority?: "high" | "medium" | "low"
}

export function RecommendationCard({ title, description, icon, priority = "medium" }: RecommendationCardProps) {
  const getPriorityColor = () => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400"
      case "medium":
        return "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400"
      case "low":
        return "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
      default:
        return "bg-teal-100 text-teal-600 dark:bg-teal-900/30 dark:text-teal-400"
    }
  }

  return (
    <Card className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-4">
        <div className="flex items-start">
          <div className={`h-10 w-10 rounded-full flex items-center justify-center mr-4 mt-1 ${getPriorityColor()}`}>
            {icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-medium">{title}</h3>
              {priority === "high" && (
                <span className="text-xs font-medium bg-red-100 text-red-600 px-2 py-0.5 rounded-full dark:bg-red-900/30 dark:text-red-400">
                  Recommended
                </span>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-2">{description}</p>
            <Button
              variant="link"
              className="p-0 h-auto text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
            >
              Try now <ArrowRight className="ml-1 h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

