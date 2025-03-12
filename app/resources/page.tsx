import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  FileText,
  Video,
  Download,
  Search,
  Filter,
  Clock,
  Calendar,
  Users,
  Brain,
  ArrowRight,
} from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Mental Wellness Resources</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Evidence-based articles, guides, and tools to support your mental wellness journey.
          </p>

          <div className="mt-8 max-w-2xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search for resources..."
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 h-12 focus:bg-white/20"
            />
            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white text-teal-600 hover:bg-white/90">
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <TabsList>
              <TabsTrigger value="all">All Resources</TabsTrigger>
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="guides">Guides</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-9">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm" className="h-9">
                <Clock className="h-4 w-4 mr-2" />
                Latest
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-6">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-teal-50 to-emerald-50 border-teal-100 dark:from-teal-900/20 dark:to-emerald-900/20 dark:border-teal-800/30">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-teal-100 text-teal-800 hover:bg-teal-200 dark:bg-teal-900 dark:text-teal-100">
                    Guide
                  </Badge>
                  <CardTitle>The Science of Mindfulness</CardTitle>
                  <CardDescription>A comprehensive guide to how mindfulness changes your brain</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Explore the neuroscience behind mindfulness practices and how regular meditation can physically
                    change brain structure and function.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full">
                    Read Guide
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100 dark:from-blue-900/20 dark:to-indigo-900/20 dark:border-blue-800/30">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900 dark:text-blue-100">
                    Video Series
                  </Badge>
                  <CardTitle>Stress Management Masterclass</CardTitle>
                  <CardDescription>5-part video series with Dr. Sarah Johnson</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Learn practical techniques to manage workplace stress, prevent burnout, and build resilience from a
                    leading psychologist.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full">
                    Watch Series
                  </Button>
                </CardFooter>
              </Card>

              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100 dark:from-purple-900/20 dark:to-pink-900/20 dark:border-purple-800/30">
                <CardHeader>
                  <Badge className="w-fit mb-2 bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-100">
                    Interactive Tool
                  </Badge>
                  <CardTitle>Wellness Assessment</CardTitle>
                  <CardDescription>Personalized mental health evaluation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Take our comprehensive assessment to receive a personalized wellness profile and tailored
                    recommendations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="default" className="w-full">
                    Start Assessment
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Article Cards */}
              <ResourceCard
                type="Article"
                icon={<BookOpen className="h-5 w-5" />}
                title="Understanding Workplace Burnout"
                description="Learn to identify the early signs of burnout and effective prevention strategies."
                meta="10 min read • May 15, 2023"
              />

              <ResourceCard
                type="Article"
                icon={<BookOpen className="h-5 w-5" />}
                title="The Connection Between Sleep and Mental Health"
                description="How quality sleep impacts your cognitive function, emotional regulation, and overall wellbeing."
                meta="8 min read • June 3, 2023"
              />

              <ResourceCard
                type="Guide"
                icon={<FileText className="h-5 w-5" />}
                title="Team Wellness Implementation Guide"
                description="Step-by-step instructions for HR leaders to implement effective wellness programs."
                meta="25 pages • Downloadable PDF"
              />

              <ResourceCard
                type="Video"
                icon={<Video className="h-5 w-5" />}
                title="Mindful Leadership Practices"
                description="How mindfulness can transform your leadership style and team dynamics."
                meta="22 min • With Dr. Michael Chen"
              />

              <ResourceCard
                type="Tool"
                icon={<Download className="h-5 w-5" />}
                title="Stress Tracking Template"
                description="A downloadable template to identify stress triggers and patterns."
                meta="Excel & PDF formats • Free download"
              />

              <ResourceCard
                type="Article"
                icon={<BookOpen className="h-5 w-5" />}
                title="Building Psychological Safety in Teams"
                description="Research-backed strategies to create an environment where team members feel safe to take risks."
                meta="12 min read • April 28, 2023"
              />

              <ResourceCard
                type="Guide"
                icon={<FileText className="h-5 w-5" />}
                title="Remote Work Wellness Guide"
                description="Maintaining mental health and work-life balance in distributed teams."
                meta="18 pages • Downloadable PDF"
              />

              <ResourceCard
                type="Video"
                icon={<Video className="h-5 w-5" />}
                title="5-Minute Desk Meditation"
                description="A quick mindfulness practice you can do at your desk to reset and refocus."
                meta="5 min • Guided meditation"
              />

              <ResourceCard
                type="Tool"
                icon={<Download className="h-5 w-5" />}
                title="Wellness Goal Setting Worksheet"
                description="Define and track your mental wellness goals with this structured template."
                meta="Interactive PDF • Free download"
              />
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="px-8">
                Load More Resources
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="articles" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ResourceCard
                type="Article"
                icon={<BookOpen className="h-5 w-5" />}
                title="Understanding Workplace Burnout"
                description="Learn to identify the early signs of burnout and effective prevention strategies."
                meta="10 min read • May 15, 2023"
              />

              <ResourceCard
                type="Article"
                icon={<BookOpen className="h-5 w-5" />}
                title="The Connection Between Sleep and Mental Health"
                description="How quality sleep impacts your cognitive function, emotional regulation, and overall wellbeing."
                meta="8 min read • June 3, 2023"
              />

              <ResourceCard
                type="Article"
                icon={<BookOpen className="h-5 w-5" />}
                title="Building Psychological Safety in Teams"
                description="Research-backed strategies to create an environment where team members feel safe to take risks."
                meta="12 min read • April 28, 2023"
              />

              {/* More article cards would go here */}
            </div>
          </TabsContent>

          {/* Other tab contents would follow the same pattern */}
          <TabsContent value="guides" className="mt-0">
            {/* Guide content */}
          </TabsContent>

          <TabsContent value="videos" className="mt-0">
            {/* Video content */}
          </TabsContent>

          <TabsContent value="tools" className="mt-0">
            {/* Tools content */}
          </TabsContent>
        </Tabs>

        <section className="mt-16 bg-muted rounded-xl p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-2/3">
              <h2 className="text-2xl font-bold mb-4">Subscribe to Our Wellness Newsletter</h2>
              <p className="text-muted-foreground mb-6">
                Get the latest mental wellness research, tips, and resources delivered to your inbox monthly. Our
                newsletter is designed for busy professionals who want evidence-based wellness content.
              </p>

              <div className="flex gap-2">
                <Input placeholder="Your email address" className="max-w-md" />
                <Button>Subscribe</Button>
              </div>
            </div>

            <div className="md:w-1/3 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center">
                <Brain className="h-16 w-16 text-white" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Upcoming Wellness Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <EventCard
              date="June 15"
              title="Mindfulness at Work Webinar"
              description="Learn practical mindfulness techniques specifically designed for busy professionals."
              time="1:00 PM - 2:00 PM EST"
              speaker="Dr. Lisa Chen, Mindfulness Expert"
            />

            <EventCard
              date="June 22"
              title="Team Wellness Workshop"
              description="Interactive workshop for managers on fostering team mental health."
              time="11:00 AM - 1:00 PM EST"
              speaker="Mark Johnson, Organizational Psychologist"
            />

            <EventCard
              date="July 5"
              title="Stress & Resilience Panel Discussion"
              description="Industry leaders share strategies for building organizational resilience."
              time="2:00 PM - 3:30 PM EST"
              speaker="Panel of 4 Wellness Leaders"
            />
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="px-8">
              View All Events
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

interface ResourceCardProps {
  type: string
  icon: React.ReactNode
  title: string
  description: string
  meta: string
}

function ResourceCard({ type, icon, title, description, meta }: ResourceCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge variant="outline" className="bg-muted">
            <div className="flex items-center gap-1">
              {icon}
              <span>{type}</span>
            </div>
          </Badge>
        </div>
        <CardTitle className="mt-2">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        <p className="text-xs text-muted-foreground flex items-center">
          <Clock className="h-3 w-3 mr-1" />
          {meta}
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" className="w-full justify-start p-0 h-auto hover:bg-transparent hover:underline">
          <span>Read More</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

interface EventCardProps {
  date: string
  title: string
  description: string
  time: string
  speaker: string
}

function EventCard({ date, title, description, time, speaker }: EventCardProps) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 text-primary rounded p-2 text-center min-w-[60px]">
            <div className="text-sm font-bold">{date.split(" ")[0]}</div>
            <div className="text-xs">{date.split(" ")[1]}</div>
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="space-y-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Calendar className="h-3 w-3 mr-1" />
            <span>{time}</span>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <Users className="h-3 w-3 mr-1" />
            <span>{speaker}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Register Now</Button>
      </CardFooter>
    </Card>
  )
}

