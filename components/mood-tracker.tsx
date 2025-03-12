"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Frown, Meh, Smile } from "lucide-react"

interface MoodHistoryItem {
  date: Date
  mood: string
}

interface MoodTrackerProps {
  moodHistory: MoodHistoryItem[]
}

export function MoodTracker({ moodHistory }: MoodTrackerProps) {
  const [timeRange, setTimeRange] = useState("week")

  // Get mood counts for visualization
  const getMoodCounts = () => {
    const counts = {
      happy: 0,
      neutral: 0,
      sad: 0,
    }

    moodHistory.forEach((item) => {
      if (item.mood in counts) {
        counts[item.mood as keyof typeof counts]++
      }
    })

    return counts
  }

  const moodCounts = getMoodCounts()
  const totalMoods = moodHistory.length

  // Calculate percentages for the chart
  const getPercentage = (count: number) => {
    return totalMoods > 0 ? Math.round((count / totalMoods) * 100) : 0
  }

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })
  }

  // Get mood icon
  const getMoodIcon = (mood: string) => {
    switch (mood) {
      case "happy":
        return <Smile className="h-6 w-6 text-green-500" />
      case "neutral":
        return <Meh className="h-6 w-6 text-amber-500" />
      case "sad":
        return <Frown className="h-6 w-6 text-blue-500" />
      default:
        return <Smile className="h-6 w-6 text-gray-400" />
    }
  }

  return (
    <div>
      <Tabs defaultValue="chart" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="chart">Chart</TabsTrigger>
          <TabsTrigger value="history">History</TabsTrigger>
        </TabsList>

        <TabsContent value="chart">
          <div className="space-y-6">
            <div className="flex justify-center space-x-4 mb-4">
              <button
                className={`px-4 py-2 rounded-md ${timeRange === "week" ? "bg-teal-100 text-teal-700" : "bg-gray-100 text-gray-700"}`}
                onClick={() => setTimeRange("week")}
              >
                Week
              </button>
              <button
                className={`px-4 py-2 rounded-md ${timeRange === "month" ? "bg-teal-100 text-teal-700" : "bg-gray-100 text-gray-700"}`}
                onClick={() => setTimeRange("month")}
              >
                Month
              </button>
              <button
                className={`px-4 py-2 rounded-md ${timeRange === "year" ? "bg-teal-100 text-teal-700" : "bg-gray-100 text-gray-700"}`}
                onClick={() => setTimeRange("year")}
              >
                Year
              </button>
            </div>

            <div className="flex justify-between items-end h-64 border-b border-l border-gray-200 relative">
              <div className="absolute inset-0 flex items-end justify-around">
                <div className="flex flex-col items-center w-1/3">
                  <div
                    className="bg-green-500 w-16 rounded-t-md"
                    style={{ height: `${getPercentage(moodCounts.happy)}%` }}
                  ></div>
                  <div className="mt-2 flex flex-col items-center">
                    <Smile className="h-6 w-6 text-green-500" />
                    <span className="text-sm font-medium">{getPercentage(moodCounts.happy)}%</span>
                  </div>
                </div>

                <div className="flex flex-col items-center w-1/3">
                  <div
                    className="bg-amber-500 w-16 rounded-t-md"
                    style={{ height: `${getPercentage(moodCounts.neutral)}%` }}
                  ></div>
                  <div className="mt-2 flex flex-col items-center">
                    <Meh className="h-6 w-6 text-amber-500" />
                    <span className="text-sm font-medium">{getPercentage(moodCounts.neutral)}%</span>
                  </div>
                </div>

                <div className="flex flex-col items-center w-1/3">
                  <div
                    className="bg-blue-500 w-16 rounded-t-md"
                    style={{ height: `${getPercentage(moodCounts.sad)}%` }}
                  ></div>
                  <div className="mt-2 flex flex-col items-center">
                    <Frown className="h-6 w-6 text-blue-500" />
                    <span className="text-sm font-medium">{getPercentage(moodCounts.sad)}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center text-sm text-gray-500 mt-4">
              Based on {totalMoods} mood entries in the past {timeRange}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="history">
          <div className="space-y-4">
            {moodHistory.length > 0 ? (
              [...moodHistory]
                .sort((a, b) => b.date.getTime() - a.date.getTime())
                .map((item, index) => (
                  <Card key={index} className="p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      {getMoodIcon(item.mood)}
                      <span className="ml-3 font-medium capitalize">{item.mood}</span>
                    </div>
                    <span className="text-gray-500">{formatDate(item.date)}</span>
                  </Card>
                ))
            ) : (
              <div className="text-center py-8 text-gray-500">No mood entries yet. Start tracking your mood!</div>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

