"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MindfulnessExercises } from "@/components/mindfulness-exercises"
import { ArrowLeft, Brain, Calendar } from "lucide-react"
import Link from "next/link"

export default function MindfulnessPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/dashboard" className="flex items-center text-teal-600 hover:text-teal-700 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-6">Mindfulness Practices</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-gradient-to-br from-teal-500 to-emerald-500 text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Daily Practice</CardTitle>
                <div className="h-10 w-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
              </div>
              <CardDescription className="text-teal-50">Consistency is key to mindfulness</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-1">5 min</div>
              <p className="text-teal-50">Recommended daily practice</p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-emerald-500 to-green-500 text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Benefits</CardTitle>
                <div className="h-10 w-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
              </div>
              <CardDescription className="text-emerald-50">Why mindfulness matters</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-1 text-emerald-50">
                <li>• Reduced stress and anxiety</li>
                <li>• Improved focus and productivity</li>
                <li>• Better emotional regulation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-500 to-teal-500 text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-white">Progress</CardTitle>
                <div className="h-10 w-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
              </div>
              <CardDescription className="text-green-50">Your mindfulness journey</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-1">3 days</div>
              <p className="text-green-50">Current streak</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Mindfulness Exercises</CardTitle>
            <CardDescription>Choose an exercise to begin your practice</CardDescription>
          </CardHeader>
          <CardContent>
            <MindfulnessExercises />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

