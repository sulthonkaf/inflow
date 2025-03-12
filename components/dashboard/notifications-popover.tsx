"use client"

import { useState } from "react"
import { Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

interface Notification {
  id: number
  title: string
  description?: string
  time: string
  read: boolean
  type?: "info" | "warning" | "success" | "error"
}

export function NotificationsPopover() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      title: "New mindfulness exercise available",
      description: "Try our new guided meditation for stress relief",
      time: "Just now",
      read: false,
      type: "info",
    },
    {
      id: 2,
      title: "Wellness score updated",
      description: "Your weekly wellness score has improved by 5%",
      time: "2 hours ago",
      read: false,
      type: "success",
    },
    {
      id: 3,
      title: "Mood pattern detected",
      description: "We've noticed a pattern in your mood entries",
      time: "Yesterday",
      read: true,
      type: "warning",
    },
    {
      id: 4,
      title: "Team wellness report available",
      time: "2 days ago",
      read: true,
      type: "info",
    },
  ])

  const [open, setOpen] = useState(false)

  const unreadCount = notifications.filter((n) => !n.read).length

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((notification) => ({ ...notification, read: true })))
  }

  const getTypeIcon = (type?: "info" | "warning" | "success" | "error") => {
    switch (type) {
      case "warning":
        return <div className="h-2 w-2 rounded-full bg-amber-500" />
      case "success":
        return <div className="h-2 w-2 rounded-full bg-green-500" />
      case "error":
        return <div className="h-2 w-2 rounded-full bg-red-500" />
      case "info":
      default:
        return <div className="h-2 w-2 rounded-full bg-blue-500" />
    }
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
              {unreadCount}
            </span>
          )}
          <span className="sr-only">Notifications</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="end">
        <div className="flex items-center justify-between p-4">
          <h4 className="font-medium">Notifications</h4>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" className="h-auto px-2 py-1 text-xs" onClick={markAllAsRead}>
              Mark all as read
            </Button>
          )}
        </div>
        <Separator />
        <div className="max-h-80 overflow-y-auto">
          {notifications.length > 0 ? (
            <div className="flex flex-col">
              {notifications.map((notification) => (
                <button
                  key={notification.id}
                  className={cn(
                    "flex items-start gap-3 p-4 text-left hover:bg-muted/50 transition-colors",
                    !notification.read && "bg-muted/30",
                  )}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-muted">
                    {getTypeIcon(notification.type)}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className={cn("text-sm", !notification.read && "font-medium")}>{notification.title}</p>
                    {notification.description && (
                      <p className="text-xs text-muted-foreground line-clamp-2">{notification.description}</p>
                    )}
                    <p className="text-xs text-muted-foreground">{notification.time}</p>
                  </div>
                  {!notification.read && <div className="h-2 w-2 rounded-full bg-blue-500" />}
                </button>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <Bell className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm text-muted-foreground">No notifications yet</p>
            </div>
          )}
        </div>
        <Separator />
        <div className="p-4">
          <Button variant="outline" size="sm" className="w-full">
            View all notifications
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

