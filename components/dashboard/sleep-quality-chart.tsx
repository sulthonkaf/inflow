"use client"

import { useEffect, useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from "recharts"

interface SleepData {
  date: string
  duration: number
  quality: number
  deepSleep: number
  remSleep: number
  lightSleep: number
}

export function SleepQualityChart() {
  const [data, setData] = useState<SleepData[]>([])

  useEffect(() => {
    // In a real app, this would come from your API
    const mockData: SleepData[] = [
      { date: "Mon", duration: 7.2, quality: 75, deepSleep: 1.8, remSleep: 1.5, lightSleep: 3.9 },
      { date: "Tue", duration: 6.8, quality: 65, deepSleep: 1.5, remSleep: 1.3, lightSleep: 4.0 },
      { date: "Wed", duration: 7.5, quality: 80, deepSleep: 2.0, remSleep: 1.7, lightSleep: 3.8 },
      { date: "Thu", duration: 6.5, quality: 60, deepSleep: 1.3, remSleep: 1.2, lightSleep: 4.0 },
      { date: "Fri", duration: 7.0, quality: 70, deepSleep: 1.7, remSleep: 1.5, lightSleep: 3.8 },
      { date: "Sat", duration: 8.2, quality: 85, deepSleep: 2.2, remSleep: 1.8, lightSleep: 4.2 },
      { date: "Sun", duration: 8.0, quality: 82, deepSleep: 2.1, remSleep: 1.7, lightSleep: 4.2 },
    ]

    setData(mockData)
  }, [])

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis yAxisId="left" orientation="left" tick={{ fontSize: 12 }} />
          <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} domain={[0, 100]} />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--background)",
              borderColor: "var(--border)",
              fontSize: "12px",
              borderRadius: "6px",
            }}
            formatter={(value, name) => {
              if (name === "quality") return [`${value}%`, "Sleep Quality"]
              return [name === "duration" ? `${value} hrs` : `${value} hrs`, name]
            }}
          />
          <Legend wrapperStyle={{ fontSize: "12px" }} />
          <ReferenceLine
            yAxisId="left"
            y={8}
            stroke="#10b981"
            strokeDasharray="3 3"
            label={{ value: "Target", position: "insideTopRight", fontSize: 12 }}
          />
          <Bar yAxisId="left" dataKey="duration" fill="#3b82f6" name="Total Sleep" />
          <Bar yAxisId="left" dataKey="deepSleep" stackId="sleep" fill="#10b981" name="Deep Sleep" />
          <Bar yAxisId="left" dataKey="remSleep" stackId="sleep" fill="#8b5cf6" name="REM Sleep" />
          <Bar yAxisId="left" dataKey="lightSleep" stackId="sleep" fill="#60a5fa" name="Light Sleep" />
          <Bar yAxisId="right" dataKey="quality" fill="#f59e0b" name="Sleep Quality" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

