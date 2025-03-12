"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Clock, Bell, Brain, BarChart, Plus, Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"

interface AutomatedTask {
  id: string
  title: string
  description: string
  schedule: string
  enabled: boolean
  icon: React.ReactNode
  type: "notification" | "report" | "action" | "reminder"
}

export function AutomatedTasksList() {
  const { toast } = useToast()
  const [tasks, setTasks] = useState<AutomatedTask[]>([
    {
      id: "task-1",
      title: "Daily Mood Check-in",
      description: "Automated reminder to record your mood",
      schedule: "Daily at 9:00 AM, 2:00 PM, and 7:00 PM",
      enabled: true,
      icon: <Bell className="h-5 w-5" />,
      type: "notification",
    },
    {
      id: "task-2",
      title: "Mindfulness Reminder",
      description: "Scheduled mindfulness exercise suggestion",
      schedule: "Weekdays at 10:30 AM and 3:30 PM",
      enabled: true,
      icon: <Brain className="h-5 w-5" />,
      type: "reminder",
    },
    {
      id: "task-3",
      title: "Weekly Wellness Report",
      description: "Automated analysis of your weekly wellness data",
      schedule: "Every Sunday at 9:00 AM",
      enabled: true,
      icon: <BarChart className="h-5 w-5" />,
      type: "report",
    },
    {
      id: "task-4",
      title: "Sleep Schedule Optimization",
      description: "Suggests optimal bedtime based on your sleep data",
      schedule: "Daily at 8:00 PM",
      enabled: false,
      icon: <Clock className="h-5 w-5" />,
      type: "action",
    },
    {
      id: "task-5",
      title: "Calendar Integration",
      description: "Automatically blocks time for wellness activities",
      schedule: "Weekly on Monday at 8:00 AM",
      enabled: true,
      icon: <Calendar className="h-5 w-5" />,
      type: "action",
    },
  ])

  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, enabled: !task.enabled } : task)))

    const task = tasks.find((t) => t.id === id)
    if (task) {
      toast({
        title: task.enabled ? "Automation disabled" : "Automation enabled",
        description: `${task.title} has been ${task.enabled ? "disabled" : "enabled"}.`,
      })
    }
  }

  const getTypeColor = (type: AutomatedTask["type"]) => {
    switch (type) {
      case "notification":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
      case "report":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
      case "action":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      case "reminder":
        return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
    }
  }

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        {tasks.map((task, index) => (
          <div key={task.id}>
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-3">
                <div
                  className={`p-2 rounded-md ${task.enabled ? "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300" : "bg-muted text-muted-foreground"}`}
                >
                  {task.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{task.title}</h3>
                    <Badge variant="outline" className={getTypeColor(task.type)}>
                      {task.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{task.description}</p>
                  <p className="text-xs text-muted-foreground mt-1">{task.schedule}</p>
                </div>
              </div>
              <Switch checked={task.enabled} onCheckedChange={() => toggleTask(task.id)} className="ml-2" />
            </div>
            {index < tasks.length - 1 && <Separator className="my-4" />}
          </div>
        ))}
      </div>

      <Button variant="outline" className="w-full mt-4">
        <Plus className="h-4 w-4 mr-2" />
        Add New Automation
      </Button>
    </div>
  )
}

