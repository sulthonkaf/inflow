"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { AppNavbar } from "@/components/app-navbar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Team wellness report available",
      description: "Your weekly team wellness report is ready to view",
      time: "Just now",
      read: false,
    },
    {
      id: 2,
      title: "New mindfulness exercise added",
      description: "Try our new guided meditation for stress relief",
      time: "2 hours ago",
      read: false,
    },
    {
      id: 3,
      title: "Weekly progress summary",
      description: "Your wellbeing score improved by 5% this week",
      time: "Yesterday",
      read: true,
    },
  ])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const markNotificationAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    )
  }

  // Check for dark mode preference on initial load
  useEffect(() => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    setIsDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <div className={`min-h-screen bg-background ${isDarkMode ? "dark" : ""}`}>
      <div className="flex">
        <AppNavbar
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          notifications={notifications}
          markNotificationAsRead={markNotificationAsRead}
        />
        <main className="flex-1 lg:ml-0 pt-16 lg:pt-0 bg-background">{children}</main>
      </div>
    </div>
  )
}

