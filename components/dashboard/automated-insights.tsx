"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Lightbulb, ChevronRight, ChevronLeft, Sparkles } from "lucide-react"

interface AutomatedInsightsCardProps {
  insights: string[]
  className?: string
}

export function AutomatedInsightsCard({ insights, className }: AutomatedInsightsCardProps) {
  const [currentInsightIndex, setCurrentInsightIndex] = useState(0)

  const nextInsight = () => {
    setCurrentInsightIndex((prev) => (prev + 1) % insights.length)
  }

  const prevInsight = () => {
    setCurrentInsightIndex((prev) => (prev - 1 + insights.length) % insights.length)
  }

  if (!insights.length) return null

  return (
    <Card className={className}>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sparkles className="h-5 w-5 text-teal-500 mr-2" />
            <div>
              <CardTitle>AI-Generated Insights</CardTitle>
              <CardDescription>Personalized analysis based on your data</CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevInsight}
              disabled={insights.length <= 1}
              className="h-8 w-8"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous insight</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextInsight}
              disabled={insights.length <= 1}
              className="h-8 w-8"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next insight</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-start p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
          <Lightbulb className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-teal-800 dark:text-teal-200">{insights[currentInsightIndex]}</p>
            <div className="mt-2 text-xs text-teal-600/70 dark:text-teal-400/70">
              Insight {currentInsightIndex + 1} of {insights.length}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

