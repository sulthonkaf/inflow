"use client"

import { useEffect, useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

interface EmotionData {
  date: string
  happiness: number
  anxiety: number
  energy: number
}

export function EmotionTrendsChart() {
  const [data, setData] = useState<EmotionData[]>([])

  useEffect(() => {
    // In a real app, this would come from your API
    const mockData: EmotionData[] = [
      { date: "Mon", happiness: 65, anxiety: 35, energy: 70 },
      { date: "Tue", happiness: 60, anxiety: 45, energy: 65 },
      { date: "Wed", happiness: 50, anxiety: 60, energy: 55 },
      { date: "Thu", happiness: 45, anxiety: 70, energy: 40 },
      { date: "Fri", happiness: 55, anxiety: 50, energy: 60 },
      { date: "Sat", happiness: 75, anxiety: 30, energy: 80 },
      { date: "Sun", happiness: 80, anxiety: 25, energy: 85 },
    ]

    setData(mockData)
  }, [])

  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: -20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
              fontSize: "12px",
              borderRadius: "6px",
            }}
          />
          <Legend wrapperStyle={{ fontSize: "12px" }} />
          <Line
            type="monotone"
            dataKey="happiness"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="Happiness"
          />
          <Line
            type="monotone"
            dataKey="anxiety"
            stroke="#f59e0b"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="Anxiety"
          />
          <Line
            type="monotone"
            dataKey="energy"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ r: 3 }}
            activeDot={{ r: 5 }}
            name="Energy"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

