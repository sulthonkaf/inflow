"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EmotionRecognition } from "@/components/emotion-recognition"
import { ArrowLeft, Camera, Mic } from "lucide-react"
import Link from "next/link"

export default function EmotionPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/dashboard" className="flex items-center text-teal-600 hover:text-teal-700 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-6">Emotion Recognition</h1>

        <Tabs defaultValue="camera">
          <TabsList className="mb-6">
            <TabsTrigger value="camera">
              <Camera className="mr-2 h-4 w-4" />
              Face Analysis
            </TabsTrigger>
            <TabsTrigger value="voice">
              <Mic className="mr-2 h-4 w-4" />
              Voice Analysis
            </TabsTrigger>
          </TabsList>

          <TabsContent value="camera">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Facial Emotion Recognition</CardTitle>
                    <CardDescription>Our AI analyzes your facial expressions to detect emotions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <EmotionRecognition />
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>How It Works</CardTitle>
                    <CardDescription>Understanding the technology behind emotion recognition</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-medium mb-1">AI-Powered Analysis</h3>
                      <p className="text-sm text-gray-600">
                        Our deep learning model analyzes facial features to detect emotions with high accuracy.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-1">Privacy First</h3>
                      <p className="text-sm text-gray-600">
                        All processing happens on your device. We don't store your images or videos.
                      </p>
                    </div>

                    <div>
                      <h3 className="font-medium mb-1">Personalized Insights</h3>
                      <p className="text-sm text-gray-600">
                        Track your emotional patterns over time to gain valuable insights.
                      </p>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 mt-4">Learn More</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="voice">
            <Card>
              <CardHeader>
                <CardTitle>Voice Emotion Recognition</CardTitle>
                <CardDescription>Analyze your voice to detect emotional patterns</CardDescription>
              </CardHeader>
              <CardContent className="py-10 text-center">
                <div className="max-w-md mx-auto">
                  <div className="mb-6">
                    <Mic className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">
                      Voice emotion recognition is coming soon! This feature will analyze tone, pitch, and speech
                      patterns to detect emotions.
                    </p>
                  </div>

                  <Button disabled className="bg-gray-300 text-gray-600 cursor-not-allowed">
                    Coming Soon
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

