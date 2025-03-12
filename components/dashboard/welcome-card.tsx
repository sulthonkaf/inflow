"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, Sun, Cloud, CloudRain, Zap } from "lucide-react"

interface DashboardWelcomeCardProps {
  className?: string
}

export function DashboardWelcomeCard({ className }: DashboardWelcomeCardProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [greeting, setGreeting] = useState("")
  const [weatherIcon, setWeatherIcon] = useState<React.ReactNode>(null)
  const [weatherDescription, setWeatherDescription] = useState("")
  const [quote, setQuote] = useState("")

  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours()
    if (hour < 12) {
      setGreeting("Good morning")
      setWeatherIcon(<Sun className="h-6 w-6 text-yellow-500" />)
    } else if (hour < 18) {
      setGreeting("Good afternoon")
      setWeatherIcon(<Cloud className="h-6 w-6 text-blue-400" />)
    } else {
      setGreeting("Good evening")
      setWeatherIcon(<CloudRain className="h-6 w-6 text-blue-600" />)
    }

    // Set weather description (in a real app, this would come from a weather API)
    setWeatherDescription("Partly cloudy, 72°F")

    // Set random inspirational quote
    const quotes = [
      "Mental health is not a destination, but a process. It's about how you drive, not where you're going.",
      "Self-care is how you take your power back.",
      "You don't have to be positive all the time. It's perfectly okay to feel sad, angry, annoyed, frustrated, scared, or anxious.",
      "Your mental health is a priority. Your happiness is essential. Your self-care is a necessity.",
      "Recovery is not one and done. It is a lifelong journey that takes place one day, one step at a time.",
    ]
    setQuote(quotes[Math.floor(Math.random() * quotes.length)])

    // Check if the card has been dismissed today
    const lastDismissed = localStorage.getItem("welcomeCardDismissed")
    if (lastDismissed) {
      const dismissDate = new Date(lastDismissed)
      const today = new Date()
      if (dismissDate.toDateString() === today.toDateString()) {
        setIsVisible(false)
      }
    }
  }, [])

  const dismissCard = () => {
    setIsVisible(false)
    localStorage.setItem("welcomeCardDismissed", new Date().toISOString())
  }

  if (!isVisible) return null

  return (
    <Card className={className}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <h2 className="text-2xl font-bold">{greeting}, John!</h2>
              <div className="flex items-center ml-4 px-2 py-1 bg-muted rounded-full">
                {weatherIcon}
                <span className="ml-1 text-xs">{weatherDescription}</span>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">
              Today is {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}. You
              have 3 wellness activities scheduled.
            </p>

            <div className="flex items-center p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg mb-4">
              <Zap className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-2 flex-shrink-0" />
              <p className="text-sm text-teal-800 dark:text-teal-200 italic">"{quote}"</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                Start Meditation
              </Button>
              <Button variant="outline" size="sm">
                View Today's Tasks
              </Button>
              <Button variant="outline" size="sm">
                Record Mood
              </Button>
            </div>
          </div>

          <Button variant="ghost" size="icon" onClick={dismissCard} className="ml-2">
            <X className="h-4 w-4" />
            <span className="sr-only">Dismiss</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

