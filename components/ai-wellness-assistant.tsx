"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Send, Sparkles, Mic, Image, Paperclip, X, Maximize2, Minimize2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export function AIWellnessAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI wellness assistant. How can I support your mental wellbeing today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Sample wellness suggestions
  const suggestions = [
    "I'm feeling stressed today",
    "Help me with a quick meditation",
    "How can I improve my sleep?",
    "I need help with work-life balance",
  ]

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response (in a real app, this would call your AI API)
    setTimeout(() => {
      const responses = [
        "I understand that can be challenging. Have you tried practicing mindfulness for a few minutes today?",
        "It sounds like you might benefit from a short breathing exercise. Would you like me to guide you through one?",
        "I hear you. Remember that your feelings are valid, and it's okay to take time for yourself.",
        "Based on what you've shared, I'd recommend taking a short break to reset. Even 5 minutes can make a difference.",
        "Have you considered journaling about this? Writing down your thoughts can often provide clarity.",
      ]

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: responses[Math.floor(Math.random() * responses.length)],
        role: "assistant",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion)
  }

  return (
    <Card
      className={cn(
        "fixed bottom-4 right-4 z-50 shadow-lg transition-all duration-300 ease-in-out",
        isExpanded ? "w-[90vw] h-[80vh] md:w-[600px] md:h-[600px]" : "w-[350px] h-[500px]",
      )}
    >
      <CardHeader className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-t-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Avatar className="h-8 w-8 mr-2 bg-white/20">
              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
              <AvatarFallback className="bg-teal-700 text-white">AI</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-base">INFLOW AI Assistant</CardTitle>
              <CardDescription className="text-white/80 text-xs">Your personal wellness guide</CardDescription>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full hover:bg-white/20 text-white"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-7 w-7 rounded-full hover:bg-white/20 text-white"
              onClick={() => {
                // In a real app, this would minimize the assistant
                // For now, we'll just hide it with CSS
                const element = document.getElementById("ai-wellness-assistant")
                if (element) element.style.display = "none"
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 flex flex-col h-[calc(100%-130px)]">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[80%] rounded-lg p-3",
                    message.role === "user" ? "bg-teal-600 text-white" : "bg-muted",
                  )}
                >
                  <p className="text-sm">{message.content}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                  <div className="flex space-x-2 items-center">
                    <div
                      className="h-2 w-2 rounded-full bg-teal-600 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="h-2 w-2 rounded-full bg-teal-600 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                    <div
                      className="h-2 w-2 rounded-full bg-teal-600 animate-bounce"
                      style={{ animationDelay: "600ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Suggestions */}
        <div className="px-4 py-2 border-t">
          <p className="text-xs text-muted-foreground mb-2">Suggested topics:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="h-auto py-1 px-2 text-xs"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t p-3">
        <div className="flex items-center w-full gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
            <Paperclip className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
            <Image className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
            <Mic className="h-4 w-4" />
          </Button>
          <Textarea
            placeholder="Type a message..."
            className="min-h-9 resize-none"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            size="icon"
            className="h-8 w-8 shrink-0 bg-teal-600 hover:bg-teal-700"
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
          >
            {isLoading ? <Sparkles className="h-4 w-4 animate-pulse" /> : <Send className="h-4 w-4" />}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default AIWellnessAssistant

