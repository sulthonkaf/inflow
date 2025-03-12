"use client"

import { useEffect, useState } from "react"
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

interface ActivityData {
  day: string
  steps: number
  activeMinutes: number
  mindfulMinutes: number
  stressScore: number
}

export function ActivitySummary() {
  const [data, setData] = useState<ActivityData[]>([])

  useEffect(() => {
    // In a real app, this would come from your API
    const mockData: ActivityData[] = [
      { day: "Mon", steps: 5200, activeMinutes: 35, mindfulMinutes: 10, stressScore: 65 },
      { day: "Tue", steps: 7800, activeMinutes: 45, mindfulMinutes: 15, stressScore: 55 },
      { day: "Wed", steps: 9200, activeMinutes: 60, mindfulMinutes: 20, stressScore: 45 },
      { day: "Thu", steps: 6500, activeMinutes: 40, mindfulMinutes: 10, stressScore: 60 },
      { day: "Fri", steps: 8100, activeMinutes: 50, mindfulMinutes: 15, stressScore: 50 },
      { day: "Sat", steps: 10500, activeMinutes: 75, mindfulMinutes: 25, stressScore: 35 },
      { day: "Sun", steps: 4200, activeMinutes: 30, mindfulMinutes: 30, stressScore: 30 },
    ]

    setData(mockData)
  }, [])

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" opacity={0.2} />
          <XAxis dataKey="day" scale="band" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" domain={[0, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
              fontSize: "12px",
              borderRadius: "6px",
            }}
          />
          <Legend wrapperStyle={{ fontSize: "12px" }} />
          <Bar yAxisId="left" dataKey="steps" barSize={20} fill="#3b82f6" name="Steps (x100)" />
          <Bar yAxisId="left" dataKey="activeMinutes" barSize={20} fill="#10b981" name="Active Minutes" />
          <Bar yAxisId="left" dataKey="mindfulMinutes" barSize={20} fill="#8b5cf6" name="Mindful Minutes" />
          <Line yAxisId="right" type="monotone" dataKey="stressScore" stroke="#ef4444" name="Stress Score" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

