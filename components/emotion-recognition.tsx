"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Camera, Loader2, RefreshCw, Smile } from "lucide-react"

export function EmotionRecognition() {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [result, setResult] = useState<null | {
    emotion: string
    confidence: number
  }>(null)
  const [cameraActive, setCameraActive] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Start camera
  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
      })

      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setCameraActive(true)
      }
    } catch (err) {
      console.error("Error accessing camera:", err)
      alert("Could not access camera. Please check permissions.")
    }
  }

  // Stop camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      const tracks = stream.getTracks()

      tracks.forEach((track) => track.stop())
      videoRef.current.srcObject = null
      setCameraActive(false)
    }
  }

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopCamera()
    }
  }, [])

  // Capture and analyze
  const captureAndAnalyze = () => {
    if (!cameraActive || !videoRef.current || !canvasRef.current) return

    const video = videoRef.current
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")

    if (!context) return

    // Set canvas dimensions to match video
    canvas.width = video.videoWidth
    canvas.height = video.videoHeight

    // Draw video frame to canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height)

    // Start analysis
    setIsAnalyzing(true)

    // Simulate AI analysis (in a real app, you would send the image to your AI model)
    setTimeout(() => {
      // Mock result - in a real app this would come from your AI model
      const emotions = ["happy", "neutral", "sad", "surprised", "angry"]
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)]
      const randomConfidence = Math.round(Math.random() * 30 + 70) // 70-100%

      setResult({
        emotion: randomEmotion,
        confidence: randomConfidence,
      })

      setIsAnalyzing(false)
    }, 2000)
  }

  // Reset analysis
  const resetAnalysis = () => {
    setResult(null)
  }

  // Get emotion color
  const getEmotionColor = (emotion: string) => {
    switch (emotion) {
      case "happy":
        return "text-green-500"
      case "sad":
        return "text-blue-500"
      case "angry":
        return "text-red-500"
      case "surprised":
        return "text-purple-500"
      default:
        return "text-amber-500"
    }
  }

  return (
    <div className="space-y-6">
      <div className="relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
        {!cameraActive ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <Smile className="h-16 w-16 text-gray-400 mb-4" />
            <Button onClick={startCamera}>
              <Camera className="mr-2 h-4 w-4" />
              Start Camera
            </Button>
          </div>
        ) : (
          <>
            <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
            <canvas ref={canvasRef} className="hidden" />

            {result && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <Card className="w-64">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-2">Detected Emotion</h3>
                      <p className={`text-2xl font-bold capitalize ${getEmotionColor(result.emotion)}`}>
                        {result.emotion}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">Confidence: {result.confidence}%</p>
                      <Button variant="outline" className="mt-4" onClick={resetAnalysis}>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Try Again
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            <div className="absolute bottom-4 left-0 right-0 flex justify-center">
              {!isAnalyzing && !result && (
                <Button onClick={captureAndAnalyze}>
                  <Camera className="mr-2 h-4 w-4" />
                  Analyze Emotion
                </Button>
              )}

              {isAnalyzing && (
                <Button disabled>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </Button>
              )}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 bg-white bg-opacity-80"
              onClick={stopCamera}
            >
              <Camera className="h-4 w-4 text-red-500" />
            </Button>
          </>
        )}
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>Our AI analyzes facial expressions to detect emotions.</p>
        <p>For best results, ensure good lighting and face the camera directly.</p>
      </div>
    </div>
  )
}

