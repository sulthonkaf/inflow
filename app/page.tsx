import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, CheckCircle, Heart, LineChart, Shield, Smile, Users } from "lucide-react"
import { TestimonialCard } from "@/components/testimonial-card"
import { PricingCard } from "@/components/pricing-card"
import { FeatureCard } from "@/components/feature-card"
import AIWellnessAssistant from "@/components/ai-wellness-assistant"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              Trusted by 500+ organizations worldwide
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">AI-Powered Mental Wellness for Teams</h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              INFLOW helps organizations improve employee wellbeing, reduce burnout, and boost productivity through
              AI-driven insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-600 hover:bg-gray-100">
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
            <div className="mt-8 text-sm text-white/80">
              No credit card required • 14-day free trial • Cancel anytime
            </div>
          </div>
        </div>

        {/* Trusted by logos */}
        <div className="bg-white/10 py-6">
          <div className="container mx-auto px-4">
            <div className="text-center text-white/60 text-sm mb-4">TRUSTED BY LEADING COMPANIES</div>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {/* These would be actual logos in a real implementation */}
              <div className="text-white/80 font-semibold text-lg">Microsoft</div>
              <div className="text-white/80 font-semibold text-lg">Deloitte</div>
              <div className="text-white/80 font-semibold text-lg">Accenture</div>
              <div className="text-white/80 font-semibold text-lg">Salesforce</div>
              <div className="text-white/80 font-semibold text-lg">Adobe</div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-teal-600 font-medium mb-2">POWERFUL FEATURES</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Workplace Wellbeing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our comprehensive platform combines AI-powered emotion recognition, personalized mindfulness practices,
              and actionable analytics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <FeatureCard
              icon={<Smile className="h-8 w-8 text-teal-600" />}
              title="AI Emotion Recognition"
              description="Our proprietary algorithms analyze facial expressions and voice patterns to understand emotional states with 94% accuracy."
            />

            <FeatureCard
              icon={<Heart className="h-8 w-8 text-teal-600" />}
              title="Personalized Mindfulness"
              description="Evidence-based mindfulness exercises tailored to each individual's emotional state and preferences."
            />

            <FeatureCard
              icon={<Brain className="h-8 w-8 text-teal-600" />}
              title="Self-Discovery Journey"
              description="Guided programs to help users develop emotional intelligence and resilience over time."
            />

            <FeatureCard
              icon={<LineChart className="h-8 w-8 text-teal-600" />}
              title="Team Analytics"
              description="Anonymized team-level insights to help leaders identify burnout risks and improve workplace wellbeing."
            />

            <FeatureCard
              icon={<Users className="h-8 w-8 text-teal-600" />}
              title="Enterprise Management"
              description="Comprehensive admin tools for user management, department organization, and custom reporting."
            />

            <FeatureCard
              icon={<Shield className="h-8 w-8 text-teal-600" />}
              title="Privacy-First Design"
              description="GDPR and HIPAA compliant with end-to-end encryption and granular privacy controls."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="text-teal-600 font-medium mb-2">HOW IT WORKS</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The INFLOW Process</h2>
              <p className="text-gray-600">
                Our scientifically-validated approach combines technology and psychology to create lasting positive
                change.
              </p>
            </div>

            <div className="space-y-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="h-20 w-20 bg-teal-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-teal-600">1</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">Assess & Understand</h3>
                  <p className="text-gray-600">
                    Our AI analyzes emotional patterns through facial expressions, voice tone, and self-reporting to
                    create a personalized baseline.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="h-20 w-20 bg-emerald-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-emerald-600">2</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">Personalize & Practice</h3>
                  <p className="text-gray-600">
                    Users receive tailored mindfulness exercises, cognitive behavioral techniques, and productivity
                    tools based on their unique needs.
                  </p>
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3 flex justify-center">
                  <div className="h-20 w-20 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-green-600">3</span>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-semibold mb-2">Measure & Improve</h3>
                  <p className="text-gray-600">
                    Comprehensive analytics track progress over time, while our AI continuously refines recommendations
                    for optimal results.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
                <Link href="/features">
                  Explore All Features <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-teal-600 font-medium mb-2">SUCCESS STORIES</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Organizations using INFLOW report a 32% reduction in burnout and a 27% increase in team productivity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="INFLOW has transformed our approach to employee wellbeing. We've seen a 40% reduction in stress-related leave and significantly improved team morale."
              author="Sarah Johnson"
              role="Chief People Officer"
              company="Acme Technologies"
            />

            <TestimonialCard
              quote="The team analytics provide invaluable insights that help us proactively address burnout before it becomes a problem. A game-changer for our remote workforce."
              author="Michael Chen"
              role="Head of Wellbeing"
              company="Global Finance Inc."
            />

            <TestimonialCard
              quote="The ROI has been clear - reduced turnover, higher engagement scores, and a healthier, more productive team. The enterprise features make it easy to manage at scale."
              author="Jessica Williams"
              role="VP of Human Resources"
              company="Innovate Solutions"
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/case-studies"
              className="text-teal-600 font-medium hover:text-teal-700 flex items-center justify-center"
            >
              Read our case studies <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Impact of Workplace Wellbeing</h2>
              <p className="text-white/90 max-w-2xl mx-auto">
                Organizations that prioritize mental wellness see measurable improvements in key business metrics.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">76%</div>
                <p className="text-white/80">of employees experience burnout at some point</p>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">$550B</div>
                <p className="text-white/80">annual cost of workplace stress to US economy</p>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">35%</div>
                <p className="text-white/80">increase in productivity with wellbeing programs</p>
              </div>

              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">3.5x</div>
                <p className="text-white/80">ROI on mental wellness investments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="text-teal-600 font-medium mb-2">PRICING</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the plan that works best for your organization's size and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title="Starter"
              price="$8"
              period="per user/month"
              description="Perfect for small teams getting started with wellbeing initiatives"
              features={[
                "AI Emotion Recognition",
                "Basic Mindfulness Exercises",
                "Personal Analytics Dashboard",
                "Email Support",
                "Up to 25 users",
              ]}
              buttonText="Start Free Trial"
              buttonLink="/signup?plan=starter"
              highlighted={false}
            />

            <PricingCard
              title="Professional"
              price="$15"
              period="per user/month"
              description="Comprehensive solution for growing organizations"
              features={[
                "Everything in Starter",
                "Team Analytics Dashboard",
                "Advanced Mindfulness Library",
                "Custom Integrations",
                "Priority Support",
                "Up to 100 users",
              ]}
              buttonText="Start Free Trial"
              buttonLink="/signup?plan=professional"
              highlighted={true}
            />

            <PricingCard
              title="Enterprise"
              price="Custom"
              period="tailored pricing"
              description="Advanced features and support for large organizations"
              features={[
                "Everything in Professional",
                "Dedicated Account Manager",
                "Custom Reporting",
                "API Access",
                "SSO Integration",
                "Unlimited users",
              ]}
              buttonText="Contact Sales"
              buttonLink="/contact"
              highlighted={false}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need a custom solution for your organization?</p>
            <Button asChild variant="outline">
              <Link href="/contact">Contact our sales team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
            <div className="col-span-2">
              <h2 className="text-2xl font-bold mb-4">INFLOW</h2>
              <p className="text-gray-400 mb-4 max-w-xs">
                AI-powered mental wellness platform helping organizations improve employee wellbeing and productivity.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/features" className="text-gray-400 hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-gray-400 hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/integrations" className="text-gray-400 hover:text-white">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/roadmap" className="text-gray-400 hover:text-white">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="text-gray-400 hover:text-white">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/webinars" className="text-gray-400 hover:text-white">
                    Webinars
                  </Link>
                </li>
                <li>
                  <Link href="/documentation" className="text-gray-400 hover:text-white">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-gray-400 hover:text-white">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} INFLOW Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link href="/security" className="text-gray-400 hover:text-white text-sm">
                Security
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* AI Wellness Assistant */}
      <AIWellnessAssistant />
    </div>
  )
}

