"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Brain, Clock, Pause, Play, SkipBack } from "lucide-react"

export function MindfulnessExercises() {
  const [activeExercise, setActiveExercise] = useState<string | null>(null)
  const [timer, setTimer] = useState(0)
  const [maxTime, setMaxTime] = useState(300) // 5 minutes in seconds
  const [isPlaying, setIsPlaying] = useState(false)
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null)

  const exercises = [
    {
      id: "breathing",
      title: "Deep Breathing",
      description: "A simple breathing exercise to calm your mind and reduce stress.",
      duration: "5 minutes",
      icon: <Brain className="h-5 w-5" />,
      instructions: [
        "Find a comfortable position and close your eyes",
        "Breathe in deeply through your nose for 4 seconds",
        "Hold your breath for 2 seconds",
        "Exhale slowly through your mouth for 6 seconds",
        "Repeat the cycle",
      ],
    },
    {
      id: "body-scan",
      title: "Body Scan Meditation",
      description: "Increase awareness of your body and release tension.",
      duration: "10 minutes",
      icon: <Brain className="h-5 w-5" />,
      instructions: [
        "Lie down in a comfortable position",
        "Focus your attention on different parts of your body",
        "Start from your toes and move up to your head",
        "Notice any sensations without judgment",
        "Release tension as you move through each body part",
      ],
    },
    {
      id: "mindful-listening",
      title: "Mindful Listening",
      description: "Enhance your focus by practicing mindful listening.",
      duration: "3 minutes",
      icon: <Brain className="h-5 w-5" />,
      instructions: [
        "Sit in a comfortable position",
        "Close your eyes and focus on the sounds around you",
        "Notice sounds without labeling or judging them",
        "If your mind wanders, gently bring it back to the sounds",
        "Notice how sounds arise and fade away",
      ],
    },
  ]

  const startExercise = (id: string) => {
    const exercise = exercises.find((ex) => ex.id === id)
    if (!exercise) return

    setActiveExercise(id)

    // Set timer based on exercise duration
    let seconds = 300 // Default 5 minutes
    if (exercise.duration.includes("3")) seconds = 180
    if (exercise.duration.includes("10")) seconds = 600

    setMaxTime(seconds)
    setTimer(0)
    setIsPlaying(true)

    // Start timer
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev >= seconds) {
          clearInterval(interval)
          setIsPlaying(false)
          return seconds
        }
        return prev + 1
      })
    }, 1000)

    setIntervalId(interval)
  }

  const togglePlayPause = () => {
    if (isPlaying) {
      // Pause
      if (intervalId) clearInterval(intervalId)
      setIsPlaying(false)
    } else {
      // Resume
      const interval = setInterval(() => {
        setTimer((prev) => {
          if (prev >= maxTime) {
            clearInterval(interval)
            setIsPlaying(false)
            return maxTime
          }
          return prev + 1
        })
      }, 1000)

      setIntervalId(interval)
      setIsPlaying(true)
    }
  }

  const resetExercise = () => {
    if (intervalId) clearInterval(intervalId)
    setTimer(0)
    setIsPlaying(false)
  }

  const exitExercise = () => {
    if (intervalId) clearInterval(intervalId)
    setActiveExercise(null)
    setTimer(0)
    setIsPlaying(false)
  }

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Get progress percentage
  const getProgress = () => {
    return (timer / maxTime) * 100
  }

  // Get active exercise data
  const getActiveExercise = () => {
    return exercises.find((ex) => ex.id === activeExercise)
  }

  return (
    <div>
      {!activeExercise ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {exercises.map((exercise) => (
            <Card key={exercise.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{exercise.title}</CardTitle>
                  <div className="h-10 w-10 bg-teal-100 rounded-full flex items-center justify-center">
                    {exercise.icon}
                  </div>
                </div>
                <CardDescription>{exercise.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">Duration: {exercise.duration}</p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-gradient-to-r from-teal-500 to-emerald-500"
                  onClick={() => startExercise(exercise.id)}
                >
                  Start Exercise
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>{getActiveExercise()?.title}</CardTitle>
              <CardDescription>{getActiveExercise()?.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">
                  {formatTime(timer)} / {formatTime(maxTime)}
                </div>
                <Progress value={getProgress()} className="h-2" />
              </div>

              <div className="space-y-2">
                <h3 className="font-medium">Instructions:</h3>
                <ul className="space-y-1">
                  {getActiveExercise()?.instructions.map((instruction, index) => (
                    <li key={index} className="text-sm flex items-start">
                      <span className="inline-block h-5 w-5 rounded-full bg-teal-100 text-teal-600 text-xs flex items-center justify-center mr-2 mt-0.5">
                        {index + 1}
                      </span>
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon" onClick={resetExercise}>
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500"
                  onClick={togglePlayPause}
                >
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
                </Button>
                <Button variant="outline" size="icon" onClick={() => {}}>
                  <Clock className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" onClick={exitExercise}>
                Exit Exercise
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  )
}

