"use client"

import { useEffect, useState } from "react"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from "recharts"

interface GoalData {
  name: string
  progress: number
  fill: string
}

export function GoalProgressChart() {
  const [data, setData] = useState<GoalData[]>([])

  useEffect(() => {
    // In a real app, this would come from your API
    const mockData: GoalData[] = [
      {
        name: "Mindfulness",
        progress: 85,
        fill: "#10b981",
      },
      {
        name: "Exercise",
        progress: 65,
        fill: "#3b82f6",
      },
      {
        name: "Sleep",
        progress: 72,
        fill: "#8b5cf6",
      },
      {
        name: "Nutrition",
        progress: 45,
        fill: "#f59e0b",
      },
    ]

    setData(mockData)
  }, [])

  return (
    <div className="h-[150px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="20%"
          outerRadius="90%"
          barSize={10}
          data={data}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
          <RadialBar
            background
            dataKey="progress"
            angleAxisId={0}
            label={{
              position: "insideStart",
              fill: "#fff",
              fontSize: 10,
              formatter: (value: number) => `${value}%`,
            }}
          />
          <Legend
            iconSize={10}
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{ fontSize: "12px" }}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

