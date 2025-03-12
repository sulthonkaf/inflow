import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Phone, MessageSquare, Globe, MapPin, Clock, AlertTriangle, Info, Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Crisis Support & Emergency Resources",
  description: "Immediate mental health crisis resources and support options for those in need of urgent help.",
}

export default function EmergencyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Emergency Alert Banner */}
        <div className="bg-red-600 text-white p-4 rounded-lg mb-8 flex items-start">
          <AlertTriangle className="h-6 w-6 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h2 className="text-xl font-bold mb-2">
              If you are in immediate danger, call 911 or go to your nearest emergency room.
            </h2>
            <p>
              This page provides resources for mental health crises, but is not a substitute for emergency services.
            </p>
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-4">Crisis Support Resources</h1>
        <p className="text-xl text-muted-foreground mb-8">
          If you or someone you know is experiencing a mental health crisis, help is available 24/7.
        </p>

        <Tabs defaultValue="hotlines" className="mb-12">
          <TabsList className="mb-6">
            <TabsTrigger value="hotlines">Crisis Hotlines</TabsTrigger>
            <TabsTrigger value="text">Text Support</TabsTrigger>
            <TabsTrigger value="online">Online Resources</TabsTrigger>
            <TabsTrigger value="local">Local Services</TabsTrigger>
          </TabsList>

          <TabsContent value="hotlines">
            <div className="grid gap-6">
              <Card className="border-red-200 dark:border-red-900">
                <CardHeader className="bg-red-50 dark:bg-red-900/20 rounded-t-lg">
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-red-600 dark:text-red-400" />
                    National Suicide Prevention Lifeline
                  </CardTitle>
                  <CardDescription>24/7 support for people in distress</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-2xl font-bold text-red-600 dark:text-red-400">1-800-273-8255</p>
                      <p className="text-sm text-muted-foreground">Available 24 hours a day, 7 days a week</p>
                    </div>
                    <Button asChild className="bg-red-600 hover:bg-red-700">
                      <a href="tel:+18002738255">Call Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                    Crisis Text Line
                  </CardTitle>
                  <CardDescription>Text-based crisis support</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-2xl font-bold">Text HOME to 741741</p>
                      <p className="text-sm text-muted-foreground">Available 24 hours a day, 7 days a week</p>
                    </div>
                    <Button asChild variant="outline">
                      <a href="sms:741741?body=HOME">Text Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                    Veterans Crisis Line
                  </CardTitle>
                  <CardDescription>Support for veterans and their loved ones</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-2xl font-bold">1-800-273-8255 (Press 1)</p>
                      <p className="text-sm text-muted-foreground">Available 24 hours a day, 7 days a week</p>
                    </div>
                    <Button asChild variant="outline">
                      <a href="tel:+18002738255,1">Call Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="text">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                    Crisis Text Line
                  </CardTitle>
                  <CardDescription>Text-based mental health support</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-2xl font-bold">Text HOME to 741741</p>
                      <p className="text-sm text-muted-foreground">Connect with a trained crisis counselor</p>
                    </div>
                    <Button asChild>
                      <a href="sms:741741?body=HOME">Text Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                    Trevor Project Text Line
                  </CardTitle>
                  <CardDescription>Support for LGBTQ+ young people</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-2xl font-bold">Text START to 678678</p>
                      <p className="text-sm text-muted-foreground">Available 24/7 for LGBTQ+ youth in crisis</p>
                    </div>
                    <Button asChild>
                      <a href="sms:678678?body=START">Text Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                    SAMHSA's Disaster Distress Helpline
                  </CardTitle>
                  <CardDescription>
                    Support for people experiencing emotional distress related to disasters
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <p className="text-2xl font-bold">Text TALKWITHUS to 66746</p>
                      <p className="text-sm text-muted-foreground">Available 24/7, 365 days a year</p>
                    </div>
                    <Button asChild>
                      <a href="sms:66746?body=TALKWITHUS">Text Now</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="online">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                    National Suicide Prevention Lifeline Chat
                  </CardTitle>
                  <CardDescription>Online chat support for people in distress</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    Connect with a counselor through an online chat service for emotional support and other services.
                  </p>
                  <Button asChild>
                    <a href="https://suicidepreventionlifeline.org/chat/" target="_blank" rel="noopener noreferrer">
                      Start Chat
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                    INFLOW Crisis Support
                  </CardTitle>
                  <CardDescription>Connect with a mental health professional through our platform</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    INFLOW offers immediate support through our online platform, connecting you with licensed
                    therapists.
                  </p>
                  <Button asChild>
                    <Link href="/therapy">Connect Now</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />7 Cups
                  </CardTitle>
                  <CardDescription>Free emotional support through online chat</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    Connect with trained volunteer listeners for emotional support through an online chat platform.
                  </p>
                  <Button asChild variant="outline">
                    <a href="https://www.7cups.com/" target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="local">
            <div className="space-y-6">
              <div className="bg-muted/50 p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-2 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                  Find Local Mental Health Services
                </h3>
                <p className="mb-4">
                  Enter your location to find mental health services near you, including crisis centers, hospitals, and
                  community resources.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input type="text" placeholder="Enter your ZIP code" className="px-3 py-2 border rounded-md flex-1" />
                  <Button>Search</Button>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                    SAMHSA's Treatment Locator
                  </CardTitle>
                  <CardDescription>Find treatment facilities confidentially and anonymously</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    The Substance Abuse and Mental Health Services Administration (SAMHSA) provides a searchable
                    database of treatment facilities.
                  </p>
                  <Button asChild variant="outline">
                    <a href="https://findtreatment.samhsa.gov/" target="_blank" rel="noopener noreferrer">
                      Find Treatment
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                    Emergency Rooms & Urgent Care
                  </CardTitle>
                  <CardDescription>For immediate in-person assistance</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="mb-4">
                    If you or someone you know is in immediate danger, go to your nearest emergency room or call 911.
                  </p>
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <a href="tel:911">Call 911</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Additional Resources */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                  Self-Care Resources
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/mindfulness" className="text-teal-600 hover:underline dark:text-teal-400">
                      Guided Mindfulness Exercises
                    </Link>
                  </li>
                  <li>
                    <Link href="/assessment" className="text-teal-600 hover:underline dark:text-teal-400">
                      Mental Health Self-Assessment
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/coping-strategies" className="text-teal-600 hover:underline dark:text-teal-400">
                      Coping Strategies for Difficult Times
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/safety-plan" className="text-teal-600 hover:underline dark:text-teal-400">
                      Create a Personal Safety Plan
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Info className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                  For Friends & Family
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/resources/supporting-others"
                      className="text-teal-600 hover:underline dark:text-teal-400"
                    >
                      How to Support Someone in Crisis
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/warning-signs" className="text-teal-600 hover:underline dark:text-teal-400">
                      Recognizing Warning Signs
                    </Link>
                  </li>
                  <li>
                    <Link href="/resources/after-crisis" className="text-teal-600 hover:underline dark:text-teal-400">
                      Supporting Recovery After a Crisis
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources/caregiver-support"
                      className="text-teal-600 hover:underline dark:text-teal-400"
                    >
                      Caregiver Support Resources
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-muted/30 p-6 rounded-lg border border-muted">
          <h3 className="text-lg font-medium mb-2">Important Disclaimer</h3>
          <p className="text-sm text-muted-foreground">
            The resources provided on this page are for informational purposes only and are not a substitute for
            professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other
            qualified health provider with any questions you may have regarding a medical condition. If you think you
            may have a medical emergency, call your doctor or emergency services immediately.
          </p>
        </div>
      </div>
    </div>
  )
}

