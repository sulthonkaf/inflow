"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Brain,
  BookOpen,
  Compass,
  Heart,
  Award,
  Lock,
  CheckCircle,
  ArrowRight,
  Play,
  Clock,
  Star,
} from "lucide-react"

export default function JourneyPage() {
  const [activeJourney, setActiveJourney] = useState<string | null>(null)

  // Sample journey data
  const journeys = [
    {
      id: "emotional-intelligence",
      title: "Emotional Intelligence",
      description: "Develop your ability to understand and manage emotions",
      progress: 35,
      modules: 8,
      completedModules: 3,
      estimatedTime: "4 weeks",
      level: "Beginner",
      category: "personal-growth",
      locked: false,
    },
    {
      id: "stress-resilience",
      title: "Building Stress Resilience",
      description: "Learn techniques to manage stress and build resilience",
      progress: 60,
      modules: 6,
      completedModules: 4,
      estimatedTime: "3 weeks",
      level: "Intermediate",
      category: "stress-management",
      locked: false,
    },
    {
      id: "mindful-leadership",
      title: "Mindful Leadership",
      description: "Lead with awareness, compassion, and emotional intelligence",
      progress: 0,
      modules: 10,
      completedModules: 0,
      estimatedTime: "6 weeks",
      level: "Advanced",
      category: "leadership",
      locked: false,
    },
    {
      id: "work-life-harmony",
      title: "Work-Life Harmony",
      description: "Create balance and integration between work and personal life",
      progress: 0,
      modules: 5,
      completedModules: 0,
      estimatedTime: "2 weeks",
      level: "Beginner",
      category: "work-life-balance",
      locked: true,
    },
  ]

  // Sample module data for the Emotional Intelligence journey
  const emotionalIntelligenceModules = [
    {
      id: "ei-module-1",
      title: "Understanding Emotions",
      description: "Learn the science behind emotions and their purpose",
      completed: true,
      duration: "45 min",
      type: "lesson",
    },
    {
      id: "ei-module-2",
      title: "Emotional Self-Awareness",
      description: "Develop the ability to recognize and name your emotions",
      completed: true,
      duration: "60 min",
      type: "interactive",
    },
    {
      id: "ei-module-3",
      title: "Emotional Regulation",
      description: "Techniques to manage and regulate emotional responses",
      completed: true,
      duration: "50 min",
      type: "practice",
    },
    {
      id: "ei-module-4",
      title: "Empathy Development",
      description: "Strengthen your ability to understand others' emotions",
      completed: false,
      duration: "55 min",
      type: "interactive",
    },
    {
      id: "ei-module-5",
      title: "Social Awareness",
      description: "Recognize emotional dynamics in social situations",
      completed: false,
      duration: "40 min",
      type: "lesson",
    },
    {
      id: "ei-module-6",
      title: "Relationship Management",
      description: "Apply emotional intelligence to improve relationships",
      completed: false,
      duration: "65 min",
      type: "practice",
    },
    {
      id: "ei-module-7",
      title: "Emotional Intelligence at Work",
      description: "Practical applications in workplace scenarios",
      completed: false,
      duration: "50 min",
      type: "interactive",
    },
    {
      id: "ei-module-8",
      title: "Integration & Mastery",
      description: "Bringing it all together for lasting change",
      completed: false,
      duration: "70 min",
      type: "assessment",
    },
  ]

  // Get module type badge color
  const getModuleTypeColor = (type: string) => {
    switch (type) {
      case "lesson":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "interactive":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      case "practice":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "assessment":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

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
            <h1 className="text-3xl font-bold">Self-Discovery Journey</h1>
            <p className="text-muted-foreground">Personalized growth paths to develop emotional intelligence</p>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Compass className="mr-2 h-4 w-4" />
              Explore All Journeys
            </Button>
            <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
              <Brain className="mr-2 h-4 w-4" />
              Take Assessment
            </Button>
          </div>
        </div>

        {!activeJourney ? (
          <>
            <Tabs defaultValue="in-progress" className="mb-8">
              <TabsList>
                <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                <TabsTrigger value="recommended">Recommended</TabsTrigger>
                <TabsTrigger value="completed">Completed</TabsTrigger>
                <TabsTrigger value="all">All Journeys</TabsTrigger>
              </TabsList>

              <TabsContent value="in-progress" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {journeys
                    .filter((journey) => journey.progress > 0 && journey.progress < 100)
                    .map((journey) => (
                      <Card key={journey.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <Badge className="mb-2 bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
                              {journey.level}
                            </Badge>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                              <span className="text-xs text-muted-foreground">{journey.estimatedTime}</span>
                            </div>
                          </div>
                          <CardTitle>{journey.title}</CardTitle>
                          <CardDescription>{journey.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="mb-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>
                                {journey.completedModules}/{journey.modules} modules
                              </span>
                            </div>
                            <Progress value={journey.progress} className="h-2" />
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className="w-full bg-teal-600 hover:bg-teal-700"
                            onClick={() => setActiveJourney(journey.id)}
                          >
                            Continue Journey
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="recommended" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {journeys
                    .filter((journey) => journey.progress === 0 && !journey.locked)
                    .map((journey) => (
                      <Card key={journey.id} className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <Badge className="mb-2 bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
                              {journey.level}
                            </Badge>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                              <span className="text-xs text-muted-foreground">{journey.estimatedTime}</span>
                            </div>
                          </div>
                          <CardTitle>{journey.title}</CardTitle>
                          <CardDescription>{journey.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <BookOpen className="h-4 w-4 mr-2" />
                            <span>{journey.modules} modules • Recommended based on your assessment results</span>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className="w-full bg-teal-600 hover:bg-teal-700"
                            onClick={() => setActiveJourney(journey.id)}
                          >
                            Start Journey
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                </div>
              </TabsContent>

              <TabsContent value="completed" className="mt-6">
                <div className="text-center py-12">
                  <Award className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-medium mb-2">No Completed Journeys Yet</h3>
                  <p className="text-muted-foreground mb-6">
                    Continue working on your active journeys to see them here when completed.
                  </p>
                  <Button variant="outline">Explore Available Journeys</Button>
                </div>
              </TabsContent>

              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {journeys.map((journey) => (
                    <Card
                      key={journey.id}
                      className={`hover:shadow-md transition-shadow ${journey.locked ? "opacity-70" : ""}`}
                    >
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <Badge className="mb-2 bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
                            {journey.level}
                          </Badge>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                            <span className="text-xs text-muted-foreground">{journey.estimatedTime}</span>
                          </div>
                        </div>
                        <CardTitle className="flex items-center">
                          {journey.title}
                          {journey.locked && <Lock className="h-4 w-4 ml-2 text-muted-foreground" />}
                        </CardTitle>
                        <CardDescription>{journey.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        {journey.progress > 0 && (
                          <div className="mb-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>
                                {journey.completedModules}/{journey.modules} modules
                              </span>
                            </div>
                            <Progress value={journey.progress} className="h-2" />
                          </div>
                        )}
                        {journey.progress === 0 && (
                          <div className="flex items-center text-sm text-muted-foreground">
                            <BookOpen className="h-4 w-4 mr-2" />
                            <span>{journey.modules} modules</span>
                          </div>
                        )}
                      </CardContent>
                      <CardFooter>
                        {journey.locked ? (
                          <Button variant="outline" className="w-full" disabled>
                            <Lock className="mr-2 h-4 w-4" />
                            Unlock at Level 2
                          </Button>
                        ) : journey.progress > 0 ? (
                          <Button
                            className="w-full bg-teal-600 hover:bg-teal-700"
                            onClick={() => setActiveJourney(journey.id)}
                          >
                            Continue Journey
                          </Button>
                        ) : (
                          <Button
                            className="w-full bg-teal-600 hover:bg-teal-700"
                            onClick={() => setActiveJourney(journey.id)}
                          >
                            Start Journey
                          </Button>
                        )}
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-6">Your Journey Stats</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-600 mb-2">2</div>
                      <p className="text-sm text-muted-foreground">Active Journeys</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-600 mb-2">7</div>
                      <p className="text-sm text-muted-foreground">Modules Completed</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-600 mb-2">5.5</div>
                      <p className="text-sm text-muted-foreground">Hours of Learning</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-teal-600 mb-2">1</div>
                      <p className="text-sm text-muted-foreground">Skills Mastered</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6">Recommended Next Steps</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Complete Your Assessment</CardTitle>
                    <CardDescription>Get personalized journey recommendations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Take our comprehensive emotional intelligence assessment to receive tailored journey
                      recommendations based on your unique strengths and growth areas.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      <Brain className="mr-2 h-4 w-4" />
                      Start Assessment
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Continue Your Active Journey</CardTitle>
                    <CardDescription>Pick up where you left off</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      You're making great progress on your Emotional Intelligence journey. Continue to the next module
                      to keep building your skills.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-teal-600 hover:bg-teal-700"
                      onClick={() => setActiveJourney("emotional-intelligence")}
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Continue Journey
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </section>
          </>
        ) : (
          // Active Journey View
          <div>
            <div className="flex items-center mb-6">
              <Button variant="outline" onClick={() => setActiveJourney(null)} className="mr-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Journeys
              </Button>
              <h2 className="text-2xl font-bold">Emotional Intelligence Journey</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge className="mb-2 bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
                        Beginner
                      </Badge>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                        <span className="text-xs text-muted-foreground">4 weeks</span>
                      </div>
                    </div>
                    <CardTitle className="text-2xl">Emotional Intelligence</CardTitle>
                    <CardDescription className="text-base">
                      Develop your ability to understand and manage emotions effectively
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Journey Progress</span>
                        <span>3/8 modules completed • 35%</span>
                      </div>
                      <Progress value={35} className="h-2" />
                    </div>

                    <div className="space-y-2 mb-6">
                      <h3 className="font-medium">About This Journey</h3>
                      <p className="text-sm text-muted-foreground">
                        Emotional intelligence is the ability to understand, use, and manage your emotions in positive
                        ways to relieve stress, communicate effectively, empathize with others, overcome challenges, and
                        defuse conflict.
                      </p>
                      <p className="text-sm text-muted-foreground">
                        This journey will guide you through developing the four core components of emotional
                        intelligence: self-awareness, self-management, social awareness, and relationship management.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">What You'll Learn</h3>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                          <span>Identify and name your emotions with precision</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                          <span>Develop techniques to regulate emotional responses</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                          <span>Enhance empathy and understanding of others' emotions</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-teal-500 mr-2 mt-0.5" />
                          <span>Apply emotional intelligence to improve workplace relationships</span>
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-teal-600 hover:bg-teal-700">
                      <Play className="mr-2 h-4 w-4" />
                      Continue to Next Module
                    </Button>
                  </CardFooter>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Your Journey Stats</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Started</span>
                      <span className="text-sm font-medium">June 12, 2023</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Time Invested</span>
                      <span className="text-sm font-medium">2.5 hours</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Streak</span>
                      <span className="text-sm font-medium">4 days</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Avg. Rating</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                        <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                        <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                        <Star className="h-4 w-4 text-amber-500 fill-amber-500" />
                        <Star className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-6">
                  <CardHeader>
                    <CardTitle>Need Support?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Have questions about this journey or need personalized guidance? Our wellness coaches are here to
                      help.
                    </p>
                    <Button variant="outline" className="w-full">
                      <Heart className="mr-2 h-4 w-4" />
                      Connect with Coach
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-4">Journey Modules</h3>
            <div className="space-y-4 mb-8">
              {emotionalIntelligenceModules.map((module, index) => (
                <Card
                  key={module.id}
                  className={
                    module.completed ? "border-teal-200 bg-teal-50/50 dark:bg-teal-900/10 dark:border-teal-900/20" : ""
                  }
                >
                  <CardContent className="p-4 flex items-center">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center mr-4 flex-shrink-0">
                      {module.completed ? (
                        <CheckCircle className="h-5 w-5 text-teal-600" />
                      ) : (
                        <span className="font-medium">{index + 1}</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h4 className="font-medium">{module.title}</h4>
                          <p className="text-sm text-muted-foreground">{module.description}</p>
                        </div>
                        <div className="flex items-center mt-2 md:mt-0">
                          <Badge variant="outline" className={`mr-2 ${getModuleTypeColor(module.type)}`}>
                            {module.type}
                          </Badge>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {module.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    <Button
                      variant={module.completed ? "outline" : "default"}
                      size="sm"
                      className={`ml-4 flex-shrink-0 ${!module.completed && "bg-teal-600 hover:bg-teal-700"}`}
                    >
                      {module.completed ? "Review" : "Start"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-between">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous Journey
              </Button>
              <Button variant="outline">
                Next Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

