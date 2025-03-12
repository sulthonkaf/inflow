"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { Loader2 } from "lucide-react"

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [consent, setConsent] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset error state
    setError(null)

    // Validate email
    if (!email) {
      setError("Please enter your email address")
      return
    }

    // Validate consent
    if (!consent) {
      setError("Please consent to receive emails")
      return
    }

    setIsLoading(true)

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, consent }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to subscribe to newsletter")
      }

      // Clear form on success
      setEmail("")
      setName("")

      // Show success toast
      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
        variant: "default",
      })
    } catch (err) {
      console.error("Newsletter subscription error:", err)
      setError(err instanceof Error ? err.message : "An unexpected error occurred")

      toast({
        title: "Subscription failed",
        description: err instanceof Error ? err.message : "Please try again later",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="space-y-4">
        <div>
          <Input
            type="text"
            placeholder="Your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-teal-500"
          />
        </div>
        <div>
          <Input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus-visible:ring-teal-500"
          />
        </div>
        <div className="flex items-start space-x-2">
          <Checkbox
            id="newsletter-consent"
            checked={consent}
            onCheckedChange={(checked) => setConsent(checked as boolean)}
            className="mt-1 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
          />
          <Label htmlFor="newsletter-consent" className="text-xs text-gray-400 font-normal leading-tight">
            I agree to receive emails about mental wellness tips, product updates, and promotional offers. You can
            unsubscribe at any time.
          </Label>
        </div>

        {error && <p className="text-red-500 text-xs">{error}</p>}

        <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Subscribing...
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </div>
    </form>
  )
}

