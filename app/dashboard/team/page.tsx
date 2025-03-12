"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  ArrowLeft,
  Users,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  BarChart,
  Download,
  Calendar,
  Brain,
  Heart,
  Smile,
  Frown,
  Meh,
  Info,
  HelpCircle,
} from "lucide-react"
import { TeamWellbeingChart } from "@/components/team-wellbeing-chart"

export default function TeamPage() {
  const [timeRange, setTimeRange] = useState("week")
  const [department, setDepartment] = useState("all")
  const [view, setView] = useState("overview")

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-6">
          <Link href="/dashboard" className="flex items-center text-teal-600 hover:text-teal-700 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">Team Wellbeing</h1>
            <p className="text-muted-foreground">Anonymized insights into your team's mental wellness</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
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

            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <Tabs defaultValue="overview" onValueChange={setView} className="w-full">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="stress">Stress Levels</TabsTrigger>
              <TabsTrigger value="emotions">Emotional Trends</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="risks">Risk Areas</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Team Wellbeing Overview */}
        {view === "overview" && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Team Wellbeing Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold mb-2">76%</div>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500">+4% from last {timeRange}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Average Stress Level</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold mb-2">42%</div>
                    <div className="flex items-center text-sm">
                      <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500">-7% from last {timeRange}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Team Engagement</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold mb-2">68%</div>
                    <div className="flex items-center text-sm">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500">+2% from last {timeRange}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base font-medium">Burnout Risk</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <div className="text-4xl font-bold mb-2">18%</div>
                    <div className="flex items-center text-sm">
                      <TrendingDown className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-green-500">-5% from last {timeRange}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mb-8">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle>Team Wellbeing Trends</CardTitle>
                      <CardDescription>Anonymized team wellness metrics over time</CardDescription>
                    </div>
                    <Badge
                      variant="outline"
                      className="bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300"
                    >
                      AI Analysis
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <TeamWellbeingChart />
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Department Comparison</CardTitle>
                  <CardDescription>Wellbeing scores across different departments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Engineering (12 members)</span>
                        <span>82%</span>
                      </div>
                      <Progress value={82} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Marketing (8 members)</span>
                        <span>78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Sales (15 members)</span>
                        <span>71%</span>
                      </div>
                      <Progress value={71} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Human Resources (5 members)</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1 text-sm">
                        <span>Product (10 members)</span>
                        <span>74%</span>
                      </div>
                      <Progress value={74} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emotional Distribution</CardTitle>
                  <CardDescription>Team emotional state breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-2 rounded-full bg-green-100 mr-3">
                          <Smile className="h-5 w-5 text-green-600" />
                        </div>
                        <span>Positive</span>
                      </div>
                      <span className="font-medium">45%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-2 rounded-full bg-amber-100 mr-3">
                          <Meh className="h-5 w-5 text-amber-600" />
                        </div>
                        <span>Neutral</span>
                      </div>
                      <span className="font-medium">35%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="p-2 rounded-full bg-blue-100 mr-3">
                          <Frown className="h-5 w-5 text-blue-600" />
                        </div>
                        <span>Negative</span>
                      </div>
                      <span className="font-medium">20%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <div className="flex items-start space-x-4">
                  <div className="p-2 bg-amber-100 text-amber-800 rounded-full dark:bg-amber-900/30 dark:text-amber-300">
                    <AlertTriangle className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>Attention Required</CardTitle>
                    <CardDescription>
                      Our AI has detected potential burnout risk in the{" "}
                      {department === "all" ? "Engineering" : department} department. Consider scheduling team check-ins
                      and reviewing workload distribution.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-4">
                  <Button className="bg-teal-600 hover:bg-teal-700">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule Team Check-in
                  </Button>
                  <Button variant="outline">
                    <BarChart className="mr-2 h-4 w-4" />
                    View Detailed Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Team Activities</CardTitle>
                  <CardDescription>Scheduled wellness events for your team</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-muted p-2 rounded mr-3 text-center min-w-[50px]">
                        <div className="text-sm font-bold">Jun</div>
                        <div className="text-lg font-bold">15</div>
                      </div>
                      <div>
                        <h3 className="font-medium">Team Mindfulness Session</h3>
                        <div className="text-sm text-muted-foreground mb-1">10:00 AM - 11:00 AM</div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-1" />
                          <span>12 participants registered</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-muted p-2 rounded mr-3 text-center min-w-[50px]">
                        <div className="text-sm font-bold">Jun</div>
                        <div className="text-lg font-bold">22</div>
                      </div>
                      <div>
                        <h3 className="font-medium">Stress Management Workshop</h3>
                        <div className="text-sm text-muted-foreground mb-1">2:00 PM - 3:30 PM</div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-1" />
                          <span>8 participants registered</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="bg-muted p-2 rounded mr-3 text-center min-w-[50px]">
                        <div className="text-sm font-bold">Jul</div>
                        <div className="text-lg font-bold">5</div>
                      </div>
                      <div>
                        <h3 className="font-medium">Team Building Activity</h3>
                        <div className="text-sm text-muted-foreground mb-1">1:00 PM - 4:00 PM</div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Users className="h-4 w-4 mr-1" />
                          <span>15 participants registered</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule New Activity
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recommended Actions</CardTitle>
                  <CardDescription>AI-generated suggestions to improve team wellbeing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-teal-100 mr-3">
                        <Brain className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Schedule Regular Check-ins</h3>
                        <p className="text-sm text-muted-foreground">
                          Consider implementing weekly 15-minute check-ins with team members to monitor workload and
                          stress levels.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-teal-100 mr-3">
                        <Heart className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Promote Mindfulness Breaks</h3>
                        <p className="text-sm text-muted-foreground">
                          Encourage team members to take short mindfulness breaks throughout the day to reduce stress
                          and improve focus.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="p-2 rounded-full bg-teal-100 mr-3">
                        <Users className="h-5 w-5 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="font-medium">Review Workload Distribution</h3>
                        <p className="text-sm text-muted-foreground">
                          Data suggests uneven workload distribution in the Engineering team. Consider reviewing task
                          allocation to prevent burnout.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Get Personalized Recommendations
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </>
        )}

        {/* Other views would be implemented here */}
        {view !== "overview" && (
          <div className="flex items-center justify-center h-64 bg-muted/30 rounded-lg">
            <div className="text-center">
              <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-medium mb-2">Coming Soon</h3>
              <p className="text-muted-foreground">
                The {view} view is currently under development and will be available soon.
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>Data is anonymized and updated daily. Last updated: {new Date().toLocaleDateString()}</p>
          <p className="mt-1">
            <HelpCircle className="h-4 w-4 inline mr-1" />
            Need help interpreting this data?{" "}
            <Link href="/dashboard/help" className="text-teal-600 hover:underline">
              Contact our wellness experts
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

