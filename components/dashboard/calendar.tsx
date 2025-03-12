"use client"

import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

interface CalendarEvent {
  date: Date
  title: string
  type: "meditation" | "therapy" | "exercise" | "check-in" | "other"
}

export function DashboardCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Sample calendar events
  const events: CalendarEvent[] = [
    {
      date: new Date(),
      title: "Morning Meditation",
      type: "meditation",
    },
    {
      date: new Date(),
      title: "Therapy Session",
      type: "therapy",
    },
    {
      date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
      title: "Yoga Class",
      type: "exercise",
    },
    {
      date: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      title: "Weekly Check-in",
      type: "check-in",
    },
    {
      date: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),
      title: "Team Wellness Workshop",
      type: "other",
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

  // Get color for event type
  const getEventTypeColor = (type: CalendarEvent["type"]) => {
    switch (type) {
      case "meditation":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "therapy":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      case "exercise":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "check-in":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
      case "other":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-300"
    }
  }

  return (
    <div>
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
                  className={cn(
                    "h-8 w-8 p-0 font-normal aria-selected:opacity-100",
                    props.selected && "bg-teal-100 text-teal-900 dark:bg-teal-900/50 dark:text-teal-100",
                  )}
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

      {date && (
        <div className="mt-4">
          <h3 className="font-medium mb-2">
            Events for {date.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </h3>
          <div className="space-y-2">
            {getEventsForDate(date).length > 0 ? (
              getEventsForDate(date).map((event, index) => (
                <div key={index} className="flex items-center justify-between p-2 rounded-md border">
                  <span>{event.title}</span>
                  <Badge variant="outline" className={getEventTypeColor(event.type)}>
                    {event.type}
                  </Badge>
                </div>
              ))
            ) : (
              <p className="text-sm text-muted-foreground">No events scheduled for this day.</p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

