"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BarChart,
  Brain,
  Clock,
  Frown,
  Laugh,
  Meh,
  Mic,
  Smile,
  ArrowUpRight,
  RefreshCw,
  Download,
  Filter,
  Settings,
  ChevronDown,
  Zap,
  TrendingUp,
  AlertTriangle,
} from "lucide-react"
import { MoodTracker } from "@/components/mood-tracker"
import { MindfulnessExercises } from "@/components/mindfulness-exercises"
import { RecommendationCard } from "@/components/recommendation-card"
import { TeamWellbeingChart } from "@/components/team-wellbeing-chart"
import { Progress } from "@/components/ui/progress"
import { DashboardWelcomeCard } from "@/components/dashboard/welcome-card"
import { AutomatedInsightsCard } from "@/components/dashboard/automated-insights"
import { WellnessScoreGauge } from "@/components/dashboard/wellness-score-gauge"
import { DashboardCalendar } from "@/components/dashboard/calendar"
import { NotificationsPopover } from "@/components/dashboard/notifications-popover"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import { Skeleton } from "@/components/ui/skeleton"
import { useToast } from "@/components/ui/use-toast"
import { DateRangePicker } from "@/components/dashboard/date-range-picker"
import { AutomatedTasksList } from "@/components/dashboard/automated-tasks-list"
import { GoalProgressChart } from "@/components/dashboard/goal-progress-chart"
import { EmotionTrendsChart } from "@/components/dashboard/emotion-trends-chart"
import { SleepQualityChart } from "@/components/dashboard/sleep-quality-chart"
import { StressLevelChart } from "@/components/dashboard/stress-level-chart"
import { ActivitySummary } from "@/components/dashboard/activity-summary"
import { useMediaQuery } from "@/hooks/use-media-query"
import AIWellnessAssistant from "@/components/ai-wellness-assistant"

export default function Dashboard() {
  const [currentMood, setCurrentMood] = useState<string | null>(null)
  const [moodHistory, setMoodHistory] = useState<Array<{ date: Date; mood: string }>>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isRefreshing, setIsRefreshing] = useState(false)
  const [dashboardView, setDashboardView] = useState("personal") // personal, team, or organization
  const [dateRange, setDateRange] = useState({ from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), to: new Date() })
  const [automatedInsights, setAutomatedInsights] = useState<string[]>([])
  const [showAssistant, setShowAssistant] = useState(false)
  const { toast } = useToast()
  const isMobile = useMediaQuery("(max-width: 768px)")

  // Simulate loading mood history data
  useEffect(() => {
    // In a real app, this would come from your backend
    const fetchData = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        const mockMoodHistory = [
          { date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000), mood: "happy" },
          { date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), mood: "neutral" },
          { date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), mood: "sad" },
          { date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), mood: "neutral" },
          { date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), mood: "happy" },
          { date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), mood: "happy" },
        ]

        setMoodHistory(mockMoodHistory)

        // Generate automated insights based on mood data
        const insights = generateAutomatedInsights(mockMoodHistory)
        setAutomatedInsights(insights)

        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        toast({
          title: "Error loading dashboard data",
          description: "Please try refreshing the page",
          variant: "destructive",
        })
        setIsLoading(false)
      }
    }

    fetchData()
  }, [toast])

  // Generate automated insights based on mood data
  const generateAutomatedInsights = (moodData: Array<{ date: Date; mood: string }>) => {
    // Count occurrences of each mood
    const moodCounts = moodData.reduce(
      (acc, { mood }) => {
        acc[mood] = (acc[mood] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    // Generate insights based on patterns
    const insights = []

    // Most frequent mood
    const mostFrequentMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0]
    if (mostFrequentMood) {
      insights.push(`Your most frequent mood this week was "${mostFrequentMood[0]}" (${mostFrequentMood[1]} days).`)
    }

    // Check for mood improvements
    const recentMoods = moodData.slice().sort((a, b) => b.date.getTime() - a.date.getTime())
    if (recentMoods.length >= 2) {
      const latestMood = recentMoods[0].mood
      const previousMood = recentMoods[1].mood

      if (latestMood === "happy" && previousMood !== "happy") {
        insights.push("Your mood has improved recently. Great job!")
      } else if (latestMood === "sad" && previousMood !== "sad") {
        insights.push("Your mood has declined recently. Consider trying a mindfulness exercise.")
      }
    }

    // Check for consistent patterns
    if (moodData.length >= 3) {
      const lastThreeMoods = recentMoods.slice(0, 3).map((item) => item.mood)
      if (lastThreeMoods.every((mood) => mood === lastThreeMoods[0])) {
        insights.push(`You've maintained a consistent "${lastThreeMoods[0]}" mood for the past 3 days.`)
      }
    }

    // Add general wellness recommendations
    insights.push("Based on your activity patterns, morning meditation may improve your daily focus.")
    insights.push("Your sleep data suggests trying to go to bed 30 minutes earlier could improve your mood stability.")

    return insights
  }

  const handleMoodSelection = (mood: string) => {
    setCurrentMood(mood)
    const newMoodEntry = { date: new Date(), mood }
    setMoodHistory((prev) => [...prev, newMoodEntry])

    // Update insights based on new mood data
    const updatedInsights = generateAutomatedInsights([...moodHistory, newMoodEntry])
    setAutomatedInsights(updatedInsights)

    toast({
      title: "Mood recorded",
      description: `Your current mood has been recorded as "${mood}".`,
    })
  }

  const refreshDashboard = async () => {
    setIsRefreshing(true)

    try {
      // Simulate API call to refresh data
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Update insights with new data
      const updatedInsights = generateAutomatedInsights(moodHistory)
      setAutomatedInsights(updatedInsights)

      toast({
        title: "Dashboard refreshed",
        description: "All data has been updated with the latest information.",
      })
    } catch (error) {
      toast({
        title: "Refresh failed",
        description: "Unable to refresh dashboard data. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsRefreshing(false)
    }
  }

  const exportDashboardData = () => {
    // In a real app, this would generate and download a report
    toast({
      title: "Exporting data",
      description: "Your dashboard data is being prepared for download.",
    })

    // Simulate download delay
    setTimeout(() => {
      toast({
        title: "Export complete",
        description: "Your dashboard data has been exported successfully.",
      })
    }, 1500)
  }

  const toggleAssistant = () => {
    setShowAssistant(!showAssistant)
  }

  return (
    <div className="p-4 md:p-6">
      {/* Dashboard Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-2xl font-bold">Welcome back, John</h1>
          <p className="text-muted-foreground">Here's your wellness summary for today</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex items-center gap-2">
            <DateRangePicker dateRange={dateRange} onDateRangeChange={setDateRange} />

            <NotificationsPopover />

            <Button variant="outline" size="icon" onClick={refreshDashboard} disabled={isRefreshing}>
              <RefreshCw className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`} />
              <span className="sr-only">Refresh dashboard</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Settings className="h-4 w-4" />
                  <span className="sr-only">Dashboard settings</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setDashboardView("personal")}>Personal Dashboard</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDashboardView("team")}>Team Dashboard</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setDashboardView("organization")}>
                  Organization Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={exportDashboardData}>
                  <Download className="mr-2 h-4 w-4" />
                  Export Dashboard Data
                </DropdownMenuItem>
                <DropdownMenuItem onClick={toggleAssistant}>
                  <Brain className="mr-2 h-4 w-4" />
                  {showAssistant ? "Hide AI Assistant" : "Show AI Assistant"}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                <Filter className="mr-2 h-4 w-4" />
                Filter
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Data</DropdownMenuItem>
              <DropdownMenuItem>Mood Only</DropdownMenuItem>
              <DropdownMenuItem>Sleep Only</DropdownMenuItem>
              <DropdownMenuItem>Activity Only</DropdownMenuItem>
              <DropdownMenuItem>Stress Only</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Welcome Card - Only shown on first login of the day */}
      <DashboardWelcomeCard className="mb-6" />

      {/* Main Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Wellness Score */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Wellness Score</CardTitle>
            <CardDescription>Your overall mental wellness</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex flex-col items-center">
                <Skeleton className="h-32 w-32 rounded-full" />
                <Skeleton className="h-4 w-24 mt-4" />
              </div>
            ) : (
              <WellnessScoreGauge score={78} previousScore={73} />
            )}
          </CardContent>
        </Card>

        {/* Current Mood */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Current Mood</CardTitle>
                <CardDescription>How are you feeling today?</CardDescription>
              </div>
              <Badge variant="outline" className="bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
                Auto-tracked
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="flex justify-between items-center pt-4">
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
                <Skeleton className="h-10 w-24" />
              </div>
            ) : (
              <div className="flex justify-between items-center pt-4">
                <Button
                  variant={currentMood === "happy" ? "default" : "outline"}
                  className={currentMood === "happy" ? "bg-green-500 hover:bg-green-600 text-white" : ""}
                  onClick={() => handleMoodSelection("happy")}
                >
                  <Smile className="mr-2 h-5 w-5" />
                  Happy
                </Button>
                <Button
                  variant={currentMood === "neutral" ? "default" : "outline"}
                  className={currentMood === "neutral" ? "bg-amber-500 hover:bg-amber-600 text-white" : ""}
                  onClick={() => handleMoodSelection("neutral")}
                >
                  <Meh className="mr-2 h-5 w-5" />
                  Neutral
                </Button>
                <Button
                  variant={currentMood === "sad" ? "default" : "outline"}
                  className={currentMood === "sad" ? "bg-blue-500 hover:bg-blue-600 text-white" : ""}
                  onClick={() => handleMoodSelection("sad")}
                >
                  <Frown className="mr-2 h-5 w-5" />
                  Sad
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Daily Goals */}
        <Card>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Daily Goals</CardTitle>
                <CardDescription>Your wellness objectives</CardDescription>
              </div>
              <Button variant="ghost" size="sm" className="h-8 gap-1">
                <Zap className="h-4 w-4 text-teal-500" />
                <span className="text-xs font-normal">Auto-suggested</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-8 w-full" />
              </div>
            ) : (
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Mindfulness Practice</span>
                    <span>1/2 sessions</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Emotion Check-ins</span>
                    <span>3/3 times</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Self-Discovery Journey</span>
                    <span>0/1 modules</span>
                  </div>
                  <Progress value={0} className="h-2" />
                </div>
              </div>
            )}
          </CardContent>
          <CardFooter className="pt-0">
            <Button variant="ghost" size="sm" className="text-teal-600 dark:text-teal-400 p-0 h-auto">
              View all goals
              <ArrowUpRight className="ml-1 h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>
      </div>

      {/* Automated Insights Card */}
      {!isLoading && <AutomatedInsightsCard insights={automatedInsights} className="mb-8" />}

      {/* Main Dashboard Tabs */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="mood">Mood Tracking</TabsTrigger>
          <TabsTrigger value="mindfulness">Mindfulness</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="team">Team Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Mood History</CardTitle>
                    <CardDescription>Your emotional journey over time</CardDescription>
                  </div>
                  <Badge variant="outline" className="bg-teal-50 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300">
                    AI Analysis
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                {isLoading ? <Skeleton className="h-[300px] w-full" /> : <MoodTracker moodHistory={moodHistory} />}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Personalized Recommendations</CardTitle>
                <CardDescription>AI-generated for your wellbeing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {isLoading ? (
                  <>
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-24 w-full" />
                    <Skeleton className="h-24 w-full" />
                  </>
                ) : (
                  <>
                    <RecommendationCard
                      title="Deep Breathing Exercise"
                      description="A 3-minute breathing technique to reduce stress"
                      icon={<Brain className="h-5 w-5" />}
                      priority="high"
                    />
                    <RecommendationCard
                      title="Gratitude Journal"
                      description="Write down 3 things you're grateful for today"
                      icon={<Laugh className="h-5 w-5" />}
                      priority="medium"
                    />
                    <RecommendationCard
                      title="Focus Timer"
                      description="25-minute focused work session"
                      icon={<Clock className="h-5 w-5" />}
                      priority="low"
                    />
                  </>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Wellness Activities</CardTitle>
                <CardDescription>Scheduled sessions and reminders</CardDescription>
              </CardHeader>
              <CardContent>{isLoading ? <Skeleton className="h-[300px] w-full" /> : <DashboardCalendar />}</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Automated Tasks</CardTitle>
                <CardDescription>Your wellness automation schedule</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? <Skeleton className="h-[300px] w-full" /> : <AutomatedTasksList />}
              </CardContent>
            </Card>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Tools to improve your wellbeing</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 space-y-2">
                    <Smile className="h-6 w-6 text-teal-500" />
                    <span>Emotion Scan</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 space-y-2">
                    <Brain className="h-6 w-6 text-teal-500" />
                    <span>Quick Meditation</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 space-y-2">
                    <Mic className="h-6 w-6 text-teal-500" />
                    <span>Voice Journal</span>
                  </Button>
                  <Button variant="outline" className="h-auto flex flex-col items-center justify-center p-4 space-y-2">
                    <BarChart className="h-6 w-6 text-teal-500" />
                    <span>View Reports</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="mood">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Mood Tracking</CardTitle>
                <CardDescription>Track and analyze your emotional patterns</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? <Skeleton className="h-[400px] w-full" /> : <MoodTracker moodHistory={moodHistory} />}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Emotion Trends</CardTitle>
                  <CardDescription>Your emotional patterns over time</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? <Skeleton className="h-[200px] w-full" /> : <EmotionTrendsChart />}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mood Triggers</CardTitle>
                  <CardDescription>AI-identified factors affecting your mood</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <Skeleton className="h-[150px] w-full" />
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                          <span>Work stress</span>
                        </div>
                        <span className="text-sm text-muted-foreground">42%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
                          <span>Sleep quality</span>
                        </div>
                        <span className="text-sm text-muted-foreground">27%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                          <span>Social interactions</span>
                        </div>
                        <span className="text-sm text-muted-foreground">18%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                          <span>Physical activity</span>
                        </div>
                        <span className="text-sm text-muted-foreground">13%</span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Automated Mood Insights</CardTitle>
                <CardDescription>AI-generated analysis of your emotional patterns</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-[150px] w-full" />
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Positive Trend Detected</h4>
                        <p className="text-sm text-muted-foreground">
                          Your mood has been trending upward over the past 7 days. Continue your current wellness
                          practices.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Potential Mood Trigger</h4>
                        <p className="text-sm text-muted-foreground">
                          We've noticed your mood tends to dip on Mondays. Consider scheduling a mindfulness session to
                          start your week.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <Brain className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Correlation Detected</h4>
                        <p className="text-sm text-muted-foreground">
                          Days with morning meditation show a 32% improvement in afternoon mood scores. Consider making
                          this a daily habit.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="mindfulness">
          <Card>
            <CardHeader>
              <CardTitle>Mindfulness Exercises</CardTitle>
              <CardDescription>Practices to help you stay present and focused</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? <Skeleton className="h-[400px] w-full" /> : <MindfulnessExercises />}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sleep">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Sleep Quality</CardTitle>
                <CardDescription>Your sleep patterns and quality metrics</CardDescription>
              </CardHeader>
              <CardContent>{isLoading ? <Skeleton className="h-[400px] w-full" /> : <SleepQualityChart />}</CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sleep Insights</CardTitle>
                <CardDescription>AI-generated sleep recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <Skeleton className="h-[300px] w-full" />
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <Clock className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Optimal Sleep Schedule</h4>
                        <p className="text-sm text-muted-foreground">
                          Based on your data, your optimal sleep window is 10:30 PM to 6:30 AM. Maintaining this
                          schedule could improve your overall wellbeing.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Screen Time Impact</h4>
                        <p className="text-sm text-muted-foreground">
                          Screen usage within 1 hour of bedtime correlates with a 27% decrease in your sleep quality.
                          Consider a digital sunset routine.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                      <TrendingUp className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium">Improvement Detected</h4>
                        <p className="text-sm text-muted-foreground">
                          Your sleep consistency has improved by 18% this week. Consistent sleep schedules are linked to
                          better mental health outcomes.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="activity">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Activity Summary</CardTitle>
                <CardDescription>Your physical and mental activity patterns</CardDescription>
              </CardHeader>
              <CardContent>{isLoading ? <Skeleton className="h-[400px] w-full" /> : <ActivitySummary />}</CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Stress Levels</CardTitle>
                  <CardDescription>Measured throughout your day</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? <Skeleton className="h-[200px] w-full" /> : <StressLevelChart />}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Goal Progress</CardTitle>
                  <CardDescription>Tracking your wellness objectives</CardDescription>
                </CardHeader>
                <CardContent>
                  {isLoading ? <Skeleton className="h-[150px] w-full" /> : <GoalProgressChart />}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="team">
          <Card>
            <CardHeader>
              <CardTitle>Team Wellbeing</CardTitle>
              <CardDescription>Anonymized insights about your team's mental wellness</CardDescription>
            </CardHeader>
            <CardContent>{isLoading ? <Skeleton className="h-[400px] w-full" /> : <TeamWellbeingChart />}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* AI Wellness Assistant */}
      {showAssistant && <AIWellnessAssistant />}
    </div>
  )
}

