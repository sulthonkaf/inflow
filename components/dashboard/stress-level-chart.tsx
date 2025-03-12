"use client"

import { useEffect, useState } from "react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"

interface StressData {
  time: string
  level: number
}

export function StressLevelChart() {
  const [data, setData] = useState<StressData[]>([])

  useEffect(() => {
    // In a real app, this would come from your API
    const mockData: StressData[] = [
      { time: "8 AM", level: 30 },
      { time: "10 AM", level: 45 },
      { time: "12 PM", level: 60 },
      { time: "2 PM", level: 75 },
      { time: "4 PM", level: 65 },
      { time: "6 PM", level: 40 },
      { time: "8 PM", level: 25 },
    ]

    setData(mockData)
  }, [])

  // Function to determine color based on stress level
  const getStressColor = (level: number) => {
    if (level < 30) return "#10b981" // Low stress - green
    if (level < 60) return "#f59e0b" // Medium stress - amber
    return "#ef4444" // High stress - red
  }

  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: -20,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorStress" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="time" tick={{ fontSize: 12 }} />
          <YAxis
            tick={{ fontSize: 12 }}
            domain={[0, 100]}
            ticks={[0, 25, 50, 75, 100]}
            tickFormatter={(value) => {
              if (value === 0) return "Low"
              if (value === 50) return "Med"
              if (value === 100) return "High"
              return ""
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
              fontSize: "12px",
              borderRadius: "6px",
            }}
            formatter={(value: number) => {
              let label = "Low stress"
              if (value >= 30 && value < 60) label = "Medium stress"
              if (value >= 60) label = "High stress"
              return [`${value} - ${label}`, "Stress Level"]
            }}
          />
          <ReferenceLine y={30} stroke="#10b981" strokeDasharray="3 3" />
          <ReferenceLine y={60} stroke="#ef4444" strokeDasharray="3 3" />
          <Area type="monotone" dataKey="level" stroke="#ef4444" fillOpacity={1} fill="url(#colorStress)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

