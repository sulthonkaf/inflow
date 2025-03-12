import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, CheckCircle, HelpCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Transparent Pricing for Every Organization</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Choose the plan that works best for your team's size and needs.
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="monthly" className="w-full mb-12">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                <TabsTrigger value="annual">Annual Billing (Save 20%)</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="monthly">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$8</span>
                      <span className="text-muted-foreground ml-1">per user/month</span>
                    </div>
                    <CardDescription className="mt-2">
                      Perfect for small teams getting started with wellbeing initiatives
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>AI Emotion Recognition</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Basic Mindfulness Exercises</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Personal Analytics Dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Email Support</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Up to 25 users</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/signup?plan=starter">Start Free Trial</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-0 shadow-xl ring-2 ring-teal-500 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Professional</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$15</span>
                      <span className="text-muted-foreground ml-1">per user/month</span>
                    </div>
                    <CardDescription className="mt-2">Comprehensive solution for growing organizations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Everything in Starter</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Team Analytics Dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Advanced Mindfulness Library</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Custom Integrations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Priority Support</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Up to 100 users</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                      <Link href="/signup?plan=professional">Start Free Trial</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">Custom</span>
                      <span className="text-muted-foreground ml-1">tailored pricing</span>
                    </div>
                    <CardDescription className="mt-2">
                      Advanced features and support for large organizations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Everything in Professional</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Dedicated Account Manager</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Custom Reporting</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>API Access</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>SSO Integration</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Unlimited users</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Contact Sales</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="annual">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle>Starter</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$6.40</span>
                      <span className="text-muted-foreground ml-1">per user/month</span>
                    </div>
                    <CardDescription className="mt-2">
                      Perfect for small teams getting started with wellbeing initiatives
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>AI Emotion Recognition</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Basic Mindfulness Exercises</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Personal Analytics Dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Email Support</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Up to 25 users</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/signup?plan=starter-annual">Start Free Trial</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-0 shadow-xl ring-2 ring-teal-500 relative">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                  <CardHeader>
                    <CardTitle>Professional</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">$12</span>
                      <span className="text-muted-foreground ml-1">per user/month</span>
                    </div>
                    <CardDescription className="mt-2">Comprehensive solution for growing organizations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Everything in Starter</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Team Analytics Dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Advanced Mindfulness Library</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Custom Integrations</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Priority Support</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Up to 100 users</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                      <Link href="/signup?plan=professional-annual">Start Free Trial</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle>Enterprise</CardTitle>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">Custom</span>
                      <span className="text-muted-foreground ml-1">tailored pricing</span>
                    </div>
                    <CardDescription className="mt-2">
                      Advanced features and support for large organizations
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Everything in Professional</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Dedicated Account Manager</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Custom Reporting</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>API Access</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>SSO Integration</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                        <span>Unlimited users</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/contact">Contact Sales</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start">
                    <HelpCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                    How does the free trial work?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our 14-day free trial gives you full access to all features of your selected plan. No credit card is
                    required to start, and you can cancel anytime before the trial ends.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start">
                    <HelpCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                    Can I change plans later?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the
                    remainder of your billing cycle. When downgrading, changes will take effect at the start of your
                    next billing cycle.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start">
                    <HelpCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                    How is user count calculated?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We count active users who have logged into the platform at least once during the billing period.
                    You're only charged for active users, not for invited users who haven't yet activated their
                    accounts.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-start">
                    <HelpCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                    Is my data secure?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Absolutely. We take data security and privacy seriously. INFLOW is GDPR and HIPAA compliant, with
                    end-to-end encryption and regular security audits. We never share or sell your data to third
                    parties.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-10 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform workplace wellbeing?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join 500+ organizations already using INFLOW to improve employee mental health and productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
                <Link href="/signup">Start Free Trial</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="/demo">Schedule Demo</Link>
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center text-white/80 text-sm">
              <CheckCircle className="h-4 w-4 mr-2" />
              No credit card required for trial
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

