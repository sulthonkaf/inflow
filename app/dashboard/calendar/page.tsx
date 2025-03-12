"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  CalendarIcon,
  Plus,
  Brain,
  Heart,
  Smile,
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function CalendarPage() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [view, setView] = useState("month")
  const [calendarType, setCalendarType] = useState("all")

  // Sample calendar events
  const events = [
    {
      id: 1,
      title: "Team Mindfulness Session",
      date: new Date(),
      startTime: "10:00 AM",
      endTime: "11:00 AM",
      type: "team",
      category: "mindfulness",
    },
    {
      id: 2,
      title: "1:1 Wellness Check-in",
      date: new Date(),
      startTime: "2:00 PM",
      endTime: "2:30 PM",
      type: "personal",
      category: "check-in",
    },
    {
      id: 3,
      title: "Stress Management Workshop",
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      startTime: "11:00 AM",
      endTime: "12:30 PM",
      type: "team",
      category: "workshop",
    },
    {
      id: 4,
      title: "Guided Meditation",
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      startTime: "9:00 AM",
      endTime: "9:15 AM",
      type: "personal",
      category: "mindfulness",
    },
    {
      id: 5,
      title: "Team Building Activity",
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      startTime: "1:00 PM",
      endTime: "4:00 PM",
      type: "team",
      category: "team-building",
    },
  ]

  // Function to check if a date has events
  const hasEvents = (day: Date) => {
    return events.some(
      (event) =>
        event.date.getDate() === day.getDate() &&
        event.date.getMonth() === day.getMonth() &&
        event.date.getFullYear() === day.getFullYear(),
    )
  }

  // Function to get events for a specific date
  const getEventsForDate = (day: Date) => {
    return events.filter(
      (event) =>
        event.date.getDate() === day.getDate() &&
        event.date.getMonth() === day.getMonth() &&
        event.date.getFullYear() === day.getFullYear(),
    )
  }

  // Get color for event category
  const getEventCategoryColor = (category: string) => {
    switch (category) {
      case "mindfulness":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "check-in":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      case "workshop":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "team-building":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  // Get events for the selected date
  const selectedDateEvents = date ? getEventsForDate(date) : []

  // Format date for display
  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    })
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
            <h1 className="text-3xl font-bold">Wellness Calendar</h1>
            <p className="text-muted-foreground">Schedule and manage your wellness activities</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Tabs defaultValue="month" onValueChange={setView} className="w-full">
              <TabsList>
                <TabsTrigger value="month">Month</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="agenda">Agenda</TabsTrigger>
              </TabsList>
            </Tabs>

            <Select value={calendarType} onValueChange={setCalendarType}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Calendar Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Activities</SelectItem>
                <SelectItem value="personal">Personal Only</SelectItem>
                <SelectItem value="team">Team Only</SelectItem>
              </SelectContent>
            </Select>

            <Button className="bg-teal-600 hover:bg-teal-700">
              <Plus className="mr-2 h-4 w-4" />
              Add Activity
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>
                    {view === "month" ? "Monthly View" : view === "week" ? "Weekly View" : "Daily View"}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="icon">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                  modifiers={{
                    hasEvent: (date) => hasEvents(date),
                  }}
                  modifiersStyles={{
                    hasEvent: {
                      fontWeight: "bold",
                      textDecoration: "underline",
                      textDecorationColor: "var(--teal-500)",
                      textDecorationThickness: "2px",
                      textUnderlineOffset: "4px",
                    },
                  }}
                  components={{
                    DayContent: (props) => {
                      const events = getEventsForDate(props.date)
                      return (
                        <div className="relative h-full w-full p-2">
                          <div
                            className={`h-8 w-8 p-0 font-normal aria-selected:opacity-100 ${
                              props.selected ? "bg-teal-100 text-teal-900 dark:bg-teal-900/50 dark:text-teal-100" : ""
                            }`}
                          >
                            {props.date.getDate()}
                          </div>
                          {events.length > 0 && (
                            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-0.5">
                              {events.length <= 3 ? (
                                events.map((_, i) => <div key={i} className="h-1 w-1 rounded-full bg-teal-500" />)
                              ) : (
                                <>
                                  <div className="h-1 w-1 rounded-full bg-teal-500" />
                                  <div className="h-1 w-1 rounded-full bg-teal-500" />
                                  <div className="h-1 w-1 rounded-full bg-teal-500" />
                                </>
                              )}
                            </div>
                          )}
                        </div>
                      )
                    },
                  }}
                />
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>{date ? formatDate(date) : "Select a date"}</CardTitle>
                <CardDescription>{selectedDateEvents.length} activities scheduled</CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDateEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedDateEvents.map((event) => (
                      <div key={event.id} className="flex items-start">
                        <div className="bg-muted p-2 rounded mr-3 text-center min-w-[60px]">
                          <div className="text-xs text-muted-foreground">{event.startTime}</div>
                          <div className="text-xs text-muted-foreground">{event.endTime}</div>
                        </div>
                        <div>
                          <h3 className="font-medium">{event.title}</h3>
                          <div className="flex items-center mt-1 space-x-2">
                            <Badge variant="outline" className={getEventCategoryColor(event.category)}>
                              {event.category}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
                            >
                              {event.type}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <CalendarIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No Activities Scheduled</h3>
                    <p className="text-muted-foreground mb-4">
                      There are no wellness activities scheduled for this date.
                    </p>
                    <Button className="bg-teal-600 hover:bg-teal-700">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Activity
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Upcoming Activities</CardTitle>
                <CardDescription>Your next scheduled wellness events</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events
                    .filter((event) => event.date >= new Date())
                    .sort((a, b) => a.date.getTime() - b.date.getTime())
                    .slice(0, 3)
                    .map((event) => (
                      <div key={event.id} className="flex items-start">
                        <div className="bg-muted p-2 rounded mr-3 text-center min-w-[50px]">
                          <div className="text-xs font-medium">
                            {event.date.toLocaleDateString("en-US", { month: "short" })}
                          </div>
                          <div className="text-lg font-bold">{event.date.getDate()}</div>
                        </div>
                        <div>
                          <h3 className="font-medium">{event.title}</h3>
                          <div className="text-sm text-muted-foreground mb-1">
                            {event.startTime} - {event.endTime}
                          </div>
                          <Badge variant="outline" className={getEventCategoryColor(event.category)}>
                            {event.category}
                          </Badge>
                        </div>
                      </div>
                    ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Upcoming Activities
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Wellness Activities</CardTitle>
              <CardDescription>Personalized suggestions based on your wellness profile</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-start p-4 bg-muted/30 rounded-lg">
                  <div className="p-2 rounded-full bg-teal-100 mr-3">
                    <Brain className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Morning Meditation</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      15-minute guided meditation to start your day with clarity and focus.
                    </p>
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-3 w-3" />
                      Add to Calendar
                    </Button>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-muted/30 rounded-lg">
                  <div className="p-2 rounded-full bg-teal-100 mr-3">
                    <Heart className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Team Wellness Check-in</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      30-minute weekly session to connect with your team and discuss wellbeing.
                    </p>
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-3 w-3" />
                      Add to Calendar
                    </Button>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-muted/30 rounded-lg">
                  <div className="p-2 rounded-full bg-teal-100 mr-3">
                    <Smile className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Stress Relief Break</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      10-minute breathing exercise to reduce stress during your workday.
                    </p>
                    <Button variant="outline" size="sm">
                      <Plus className="mr-2 h-3 w-3" />
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            <AlertTriangle className="h-4 w-4 inline mr-1" />
            Calendar events are synced with your work calendar. You can manage integrations in{" "}
            <Link href="/dashboard/settings" className="text-teal-600 hover:underline">
              Settings
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

