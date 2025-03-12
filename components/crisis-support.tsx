"use client"

import { useState, useEffect } from "react"
import { Phone, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CrisisSupport() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  // Show the crisis support widget after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 transition-all duration-300 ease-in-out ${
        isMinimized ? "w-12 h-12" : "w-80 sm:w-96"
      }`}
    >
      {isMinimized ? (
        <Button
          className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white shadow-lg"
          onClick={() => setIsMinimized(false)}
          aria-label="Open crisis support"
        >
          <Phone className="h-5 w-5" />
        </Button>
      ) : (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-red-200 dark:border-red-900">
          <div className="bg-red-600 text-white p-3 flex items-center justify-between">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <h3 className="font-semibold">Crisis Support</h3>
            </div>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 rounded-full hover:bg-red-700 text-white"
                onClick={() => setIsMinimized(true)}
                aria-label="Minimize"
              >
                <span className="sr-only">Minimize</span>
                <span className="h-1 w-4 bg-white rounded-full block"></span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-7 w-7 rounded-full hover:bg-red-700 text-white"
                onClick={() => setIsVisible(false)}
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="p-4">
            <p className="text-sm mb-3">
              If you're experiencing a mental health crisis or having thoughts of suicide, please reach out for
              immediate help:
            </p>
            <div className="space-y-2 mb-4">
              <div className="flex items-center p-2 bg-red-50 dark:bg-red-900/30 rounded-md">
                <Phone className="h-4 w-4 text-red-600 dark:text-red-400 mr-2 flex-shrink-0" />
                <a
                  href="tel:+18001234567"
                  className="text-sm font-medium text-red-600 dark:text-red-400 hover:underline"
                >
                  24/7 Crisis Helpline: 1-800-123-4567
                </a>
              </div>
              <div className="flex items-center p-2 bg-red-50 dark:bg-red-900/30 rounded-md">
                <Phone className="h-4 w-4 text-red-600 dark:text-red-400 mr-2 flex-shrink-0" />
                <a
                  href="sms:+18001234567"
                  className="text-sm font-medium text-red-600 dark:text-red-400 hover:underline"
                >
                  Text "HELP" to 988
                </a>
              </div>
            </div>
            <div className="flex justify-between">
              <Button asChild variant="outline" size="sm" className="text-xs">
                <Link href="/emergency">More Resources</Link>
              </Button>
              <Button asChild size="sm" className="text-xs bg-red-600 hover:bg-red-700">
                <Link href="/therapy">Connect with Therapist</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

