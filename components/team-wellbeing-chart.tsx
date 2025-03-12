"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertTriangle, TrendingDown, TrendingUp } from "lucide-react"

export function TeamWellbeingChart() {
  const [timeRange, setTimeRange] = useState("week")
  const [department, setDepartment] = useState("all")

  // Mock data for team wellbeing
  const teamData = {
    overall: 76,
    trend: "+4%",
    positive: true,
    stressLevels: {
      low: 45,
      medium: 35,
      high: 20,
    },
    riskAreas: [
      { name: "Work-Life Balance", score: 65, change: -5 },
      { name: "Workload", score: 58, change: -8 },
      { name: "Team Communication", score: 82, change: +3 },
    ],
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <Tabs defaultValue="overview" className="w-full md:w-auto">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="stress">Stress Levels</TabsTrigger>
            <TabsTrigger value="risks">Risk Areas</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex gap-4">
          <Select value={department} onValueChange={setDepartment}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Departments</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="marketing">Marketing</SelectItem>
              <SelectItem value="sales">Sales</SelectItem>
              <SelectItem value="hr">Human Resources</SelectItem>
            </SelectContent>
          </Select>

          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Last Week</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="quarter">Last Quarter</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <h3 className="text-lg font-medium mb-4">Team Wellbeing Score</h3>
                  <div className="relative h-32 w-32">
                    <svg className="h-full w-full" viewBox="0 0 100 100">
                      <circle
                        className="text-muted stroke-current"
                        strokeWidth="10"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                      />
                      <circle
                        className="text-teal-500 stroke-current"
                        strokeWidth="10"
                        strokeLinecap="round"
                        cx="50"
                        cy="50"
                        r="40"
                        fill="transparent"
                        strokeDasharray={2 * Math.PI * 40}
                        strokeDashoffset={2 * Math.PI * 40 * (1 - teamData.overall / 100)}
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-3xl font-bold">{teamData.overall}%</div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    {teamData.positive ? (
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
                    )}
                    <span className={teamData.positive ? "text-green-500" : "text-red-500"}>
                      {teamData.trend} from last {timeRange}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Stress Levels</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Low Stress</span>
                      <span>{teamData.stressLevels.low}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-green-500 rounded-full"
                        style={{ width: `${teamData.stressLevels.low}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>Medium Stress</span>
                      <span>{teamData.stressLevels.medium}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-500 rounded-full"
                        style={{ width: `${teamData.stressLevels.medium}%` }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1 text-sm">
                      <span>High Stress</span>
                      <span>{teamData.stressLevels.high}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-500 rounded-full"
                        style={{ width: `${teamData.stressLevels.high}%` }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-medium mb-4">Risk Areas</h3>
                <div className="space-y-4">
                  {teamData.riskAreas.map((area, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>{area.name}</span>
                        <span className="flex items-center">
                          {area.score}%
                          {area.change > 0 ? (
                            <TrendingUp className="h-3 w-3 text-green-500 ml-1" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-red-500 ml-1" />
                          )}
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            area.score > 75 ? "bg-green-500" : area.score > 50 ? "bg-amber-500" : "bg-red-500"
                          }`}
                          style={{ width: `${area.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-amber-100 text-amber-800 rounded-full dark:bg-amber-900 dark:text-amber-100">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Attention Required</h3>
                  <p className="text-muted-foreground mb-4">
                    Our AI has detected potential burnout risk in the{" "}
                    {department === "all" ? "Engineering" : department} department. Consider scheduling team check-ins
                    and reviewing workload distribution.
                  </p>
                  <div className="flex space-x-2">
                    <button className="text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
                      View Detailed Report
                    </button>
                    <span className="text-muted-foreground">•</span>
                    <button className="text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300">
                      Schedule Team Check-in
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stress">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-6">Team Stress Level Distribution</h3>
              <div className="h-64 flex items-end justify-around">
                <div className="flex flex-col items-center w-1/3">
                  <div
                    className="bg-green-500 w-16 rounded-t-md"
                    style={{ height: `${teamData.stressLevels.low}%` }}
                  ></div>
                  <div className="mt-2 flex flex-col items-center">
                    <span className="text-sm font-medium">Low</span>
                    <span className="text-sm text-muted-foreground">{teamData.stressLevels.low}%</span>
                  </div>
                </div>

                <div className="flex flex-col items-center w-1/3">
                  <div
                    className="bg-amber-500 w-16 rounded-t-md"
                    style={{ height: `${teamData.stressLevels.medium}%` }}
                  ></div>
                  <div className="mt-2 flex flex-col items-center">
                    <span className="text-sm font-medium">Medium</span>
                    <span className="text-sm text-muted-foreground">{teamData.stressLevels.medium}%</span>
                  </div>
                </div>

                <div className="flex flex-col items-center w-1/3">
                  <div
                    className="bg-red-500 w-16 rounded-t-md"
                    style={{ height: `${teamData.stressLevels.high}%` }}
                  ></div>
                  <div className="mt-2 flex flex-col items-center">
                    <span className="text-sm font-medium">High</span>
                    <span className="text-sm text-muted-foreground">{teamData.stressLevels.high}%</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="risks">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-medium mb-6">Risk Area Analysis</h3>
              <div className="space-y-8">
                {teamData.riskAreas.map((area, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <h4 className="font-medium">{area.name}</h4>
                      <div className="flex items-center">
                        <span className="font-medium">{area.score}%</span>
                        <span className="ml-2 text-sm text-muted-foreground flex items-center">
                          {area.change > 0 ? "+" : ""}
                          {area.change}%
                          {area.change > 0 ? (
                            <TrendingUp className="h-3 w-3 text-green-500 ml-1" />
                          ) : (
                            <TrendingDown className="h-3 w-3 text-red-500 ml-1" />
                          )}
                        </span>
                      </div>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          area.score > 75 ? "bg-green-500" : area.score > 50 ? "bg-amber-500" : "bg-red-500"
                        }`}
                        style={{ width: `${area.score}%` }}
                      />
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {area.name === "Work-Life Balance" &&
                        "Team members are reporting challenges maintaining healthy boundaries between work and personal life."}
                      {area.name === "Workload" &&
                        "Current workload is causing stress for some team members. Consider redistributing tasks."}
                      {area.name === "Team Communication" &&
                        "Communication is generally good, but there's room for improvement in cross-department collaboration."}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="text-center text-sm text-muted-foreground">
        <p>Data is anonymized and updated daily. Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  )
}

