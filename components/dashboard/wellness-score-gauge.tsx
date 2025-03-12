"use client"

import { useState, useEffect } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"

interface WellnessScoreGaugeProps {
  score: number
  previousScore?: number
}

export function WellnessScoreGauge({ score, previousScore }: WellnessScoreGaugeProps) {
  const [animatedScore, setAnimatedScore] = useState(0)

  // Animate the score on mount
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedScore((prev) => {
        if (prev >= score) {
          clearInterval(interval)
          return score
        }
        return prev + 1
      })
    }, 20)

    return () => clearInterval(interval)
  }, [score])

  // Calculate score change
  const scoreChange = previousScore ? score - previousScore : 0
  const scoreChangePercent = previousScore ? Math.round((scoreChange / previousScore) * 100) : 0

  return (
    <div className="flex flex-col items-center">
      <div className="relative h-32 w-32">
        <svg className="h-full w-full" viewBox="0 0 100 100">
          <circle className="text-muted stroke-current" strokeWidth="10" cx="50" cy="50" r="40" fill="transparent" />
          <circle
            className="text-teal-500 stroke-current"
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDasharray={2 * Math.PI * 40}
            strokeDashoffset={2 * Math.PI * 40 * (1 - animatedScore / 100)}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-3xl font-bold">{animatedScore}%</div>
        </div>
      </div>

      <div className="mt-4 text-center">
        {scoreChange !== 0 && (
          <div className={`flex items-center justify-center ${scoreChange > 0 ? "text-green-500" : "text-red-500"}`}>
            {scoreChange > 0 ? <TrendingUp className="h-4 w-4 mr-1" /> : <TrendingDown className="h-4 w-4 mr-1" />}
            <span className="text-sm font-medium">
              {scoreChange > 0 ? "+" : ""}
              {scoreChange}% ({scoreChangePercent}%)
            </span>
          </div>
        )}
        <p className="text-sm text-muted-foreground mt-1">
          {scoreChange > 0
            ? "Great progress! Keep up the good work."
            : scoreChange < 0
              ? "Slight decrease. Consider adding more mindfulness."
              : "Maintaining a healthy score."}
        </p>
      </div>
    </div>
  )
}

