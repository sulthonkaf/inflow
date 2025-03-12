import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  LineChart,
  Shield,
  Smile,
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  Lightbulb,
  BarChart,
  Sparkles,
} from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Powerful Features for Mental Wellness</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Discover how INFLOW's comprehensive platform can transform workplace wellbeing through AI-powered insights
            and personalized interventions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-gray-100">
              <Link href="/signup">Start Free Trial</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/demo">Request Demo</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="individual" className="w-full">
            <div className="text-center mb-12">
              <TabsList className="inline-flex">
                <TabsTrigger value="individual">For Individuals</TabsTrigger>
                <TabsTrigger value="teams">For Teams</TabsTrigger>
                <TabsTrigger value="organizations">For Organizations</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="individual">
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                      <Smile className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle>AI Emotion Recognition</CardTitle>
                    <CardDescription>Understand your emotional patterns with advanced AI analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Facial expression analysis with 94% accuracy</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Voice tone pattern recognition</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Personalized emotional insights dashboard</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Trend analysis and pattern detection</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/features/emotion-recognition">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                      <Brain className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle>Personalized Mindfulness</CardTitle>
                    <CardDescription>Evidence-based exercises tailored to your emotional state</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>200+ guided meditation and breathing exercises</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>AI-recommended practices based on your needs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Progress tracking and streak maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Integration with calendar for scheduled practice</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/features/mindfulness">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                      <Lightbulb className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle>Self-Discovery Journey</CardTitle>
                    <CardDescription>Guided programs to develop emotional intelligence</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Personalized growth path based on assessments</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Interactive modules on emotional intelligence</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Reflective journaling with AI-guided prompts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Achievement tracking and skill development</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/features/self-discovery">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="teams">
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle>Team Wellness Analytics</CardTitle>
                    <CardDescription>Anonymized insights into team mental health trends</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Aggregated team wellness scores and trends</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Early burnout risk detection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Privacy-first design with anonymized data</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Actionable recommendations for team leaders</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/features/team-analytics">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                      <Zap className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle>Team Challenges</CardTitle>
                    <CardDescription>Collaborative wellness activities to build team cohesion</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Customizable wellness challenges for teams</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Progress tracking and friendly competition</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Team-building activities with wellness focus</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Celebration of collective achievements</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/features/team-challenges">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                      <BarChart className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle>Team Performance Correlation</CardTitle>
                    <CardDescription>Connect wellness metrics with business outcomes</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Correlation analysis between wellness and KPIs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>ROI calculation for wellness initiatives</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Productivity impact assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Custom reporting for leadership teams</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/features/performance-correlation">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="organizations">
              <div className="grid md:grid-cols-3 gap-8">
                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                      <LineChart className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle>Enterprise Analytics</CardTitle>
                    <CardDescription>Organization-wide wellness insights for leadership</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Cross-department wellness comparison</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Organizational culture assessment</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Turnover risk prediction</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Executive dashboards with key metrics</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/features/enterprise-analytics">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                      <Shield className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle>Enterprise Security</CardTitle>
                    <CardDescription>Advanced security and compliance features</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>HIPAA and GDPR compliance</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>SOC 2 Type II certification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Single Sign-On (SSO) integration</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Role-based access controls</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/features/enterprise-security">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                      <Sparkles className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle>Custom Implementation</CardTitle>
                    <CardDescription>Tailored solutions for your organization's needs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Dedicated implementation team</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Custom branding and white-labeling</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>API access for custom integrations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>Tailored onboarding and training</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/features/custom-implementation">
                        Learn More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Featured Technology</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">AI Emotion Recognition</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our proprietary algorithms analyze facial expressions and voice patterns to understand emotional states
              with 94% accuracy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="relative h-80 bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* This would be a video or interactive demo in a real implementation */}
                <div className="text-center">
                  <Smile className="h-16 w-16 text-teal-500 mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive Demo</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">How It Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-teal-600">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Capture</h4>
                    <p className="text-muted-foreground">
                      Our AI analyzes facial micro-expressions through your device's camera or voice patterns during
                      check-ins.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-teal-600">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Analyze</h4>
                    <p className="text-muted-foreground">
                      Advanced neural networks trained on millions of data points identify emotional states and
                      intensity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-teal-600">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Personalize</h4>
                    <p className="text-muted-foreground">
                      Based on your emotional state, we recommend personalized interventions and exercises.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center mr-4 mt-1">
                    <span className="font-bold text-teal-600">4</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Track</h4>
                    <p className="text-muted-foreground">
                      Monitor emotional patterns over time to identify triggers and measure improvement.
                    </p>
                  </div>
                </div>
              </div>

              <Button asChild className="mt-6 bg-teal-600 hover:bg-teal-700">
                <Link href="/features/emotion-recognition">Try Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Seamless Integration</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Works With Your Existing Tools</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              INFLOW integrates with the tools your team already uses, making implementation simple and adoption
              seamless.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* These would be actual partner logos in a real implementation */}
            {["Slack", "Microsoft Teams", "Google Workspace", "Zoom", "Salesforce", "Workday", "Asana", "Jira"].map(
              (partner, index) => (
                <div key={index} className="flex items-center justify-center h-24 bg-muted/50 rounded-lg">
                  <span className="text-xl font-semibold text-muted-foreground">{partner}</span>
                </div>
              ),
            )}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/integrations">
                View All Integrations <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-4">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Workplaces</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              See how organizations are using INFLOW to improve employee wellbeing and productivity.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white/10 rounded-xl p-8 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="h-24 w-24 rounded-full bg-white/20 mx-auto"></div>
              </div>
              <div className="md:w-2/3">
                <blockquote className="text-xl italic mb-4">
                  "INFLOW has transformed our approach to employee wellbeing. We've seen a 40% reduction in
                  stress-related leave and significantly improved team morale."
                </blockquote>
                <div className="font-semibold">Sarah Johnson</div>
                <div className="text-white/80">Chief People Officer, Acme Technologies</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-10 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to transform workplace wellbeing?</h2>
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
      </section>
    </div>
  )
}

