"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import Link from "next/link"

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true and can't be changed
    functional: true,
    analytics: true,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem("cookie-consent")
    if (!consentGiven) {
      // Show the consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const acceptAll = () => {
    setPreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    })
    savePreferences({
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
    })
  }

  const acceptSelected = () => {
    savePreferences(preferences)
  }

  const savePreferences = (prefs: typeof preferences) => {
    localStorage.setItem("cookie-consent", "true")
    localStorage.setItem("cookie-preferences", JSON.stringify(prefs))
    setShowConsent(false)

    // Here you would typically initialize analytics and other tools
    // based on the user's preferences
  }

  if (!showConsent) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:p-6">
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setShowDetails(false)} />
      <div
        className={`relative w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg dark:bg-gray-900 transition-all duration-300 ${showDetails ? "h-[80vh] overflow-auto" : ""}`}
      >
        {!showDetails ? (
          <>
            <div className="mb-4">
              <h2 className="text-xl font-semibold">Cookie Consent</h2>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic.
                By clicking "Accept All", you consent to our use of cookies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-end gap-2">
              <Button variant="outline" onClick={() => setShowDetails(true)}>
                Customize
              </Button>
              <Button variant="outline" onClick={() => acceptSelected()}>
                Accept Necessary
              </Button>
              <Button onClick={acceptAll} className="bg-teal-600 hover:bg-teal-700">
                Accept All
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Cookie Preferences</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowDetails(false)}>
                  Back
                </Button>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Manage your cookie preferences. Necessary cookies are always enabled as they are essential for the
                website to function properly.
              </p>
            </div>

            <Tabs defaultValue="preferences">
              <TabsList className="mb-4">
                <TabsTrigger value="preferences">Preferences</TabsTrigger>
                <TabsTrigger value="information">Information</TabsTrigger>
              </TabsList>

              <TabsContent value="preferences" className="space-y-4">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Necessary Cookies</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        These cookies are essential for the website to function properly.
                      </p>
                    </div>
                    <Switch checked={preferences.necessary} disabled />
                  </div>
                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Functional Cookies</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        These cookies enable personalized features and functionality.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.functional}
                      onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, functional: checked }))}
                      id="functional-cookies"
                    />
                  </div>
                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Analytics Cookies</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        These cookies help us understand how visitors interact with the website.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.analytics}
                      onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, analytics: checked }))}
                      id="analytics-cookies"
                    />
                  </div>
                  <Separator />

                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Marketing Cookies</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        These cookies are used to track visitors across websites to display relevant advertisements.
                      </p>
                    </div>
                    <Switch
                      checked={preferences.marketing}
                      onCheckedChange={(checked) => setPreferences((prev) => ({ ...prev, marketing: checked }))}
                      id="marketing-cookies"
                    />
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="information">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">What are cookies?</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      Cookies are small text files that are stored on your device when you visit a website. They are
                      widely used to make websites work more efficiently and provide information to the website owners.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">How we use cookies</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      We use cookies for various purposes including:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 mt-1 ml-4">
                      <li>Ensuring the website functions properly</li>
                      <li>Remembering your preferences and settings</li>
                      <li>Understanding how you use our website</li>
                      <li>Improving our services based on your behavior</li>
                      <li>Providing personalized content and advertisements</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium">Your choices</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but
                      you can usually modify your browser settings to decline cookies if you prefer.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium">More information</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                      For more detailed information about cookies and how we use them, please visit our{" "}
                      <Link href="/privacy" className="text-teal-600 hover:underline dark:text-teal-400">
                        Privacy Policy
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-end gap-2">
              <Button variant="outline" onClick={() => acceptSelected()}>
                Save Preferences
              </Button>
              <Button onClick={acceptAll} className="bg-teal-600 hover:bg-teal-700">
                Accept All
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

