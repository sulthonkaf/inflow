import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Award, Heart, Shield, Brain, Smile } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            At INFLOW, we're dedicated to transforming workplace wellbeing through the power of AI and evidence-based
            mental health practices.
          </p>
          <div className="flex justify-center">
            <div className="relative h-16 w-16 overflow-hidden">
              <div className="absolute inset-0 bg-white/20 rounded-full"></div>
              <div className="absolute inset-[3px] bg-white rounded-full flex items-center justify-center">
                <span className="font-bold text-2xl text-teal-600">IN</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4">Our Story</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Mental Wellness</h2>
              <p className="text-xl text-muted-foreground">
                INFLOW was founded in 2020 with a simple but powerful vision: to make mental wellness accessible,
                personalized, and effective for everyone.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="mb-4">
                  Our journey began when our founders, Dr. Sarah Chen and Michael Rodriguez, recognized a critical gap
                  in workplace wellness programs. Despite growing awareness of mental health issues, most solutions were
                  generic, difficult to measure, and failed to address individual needs.
                </p>
                <p className="mb-4">
                  Drawing on Dr. Chen's background in neuroscience and Rodriguez's expertise in AI, they developed a
                  platform that could analyze emotional patterns, provide personalized interventions, and measure
                  outcomes with scientific precision.
                </p>
                <p>
                  Today, INFLOW serves over 500 organizations worldwide, from startups to Fortune 500 companies, helping
                  them build healthier, more productive workplaces through data-driven mental wellness solutions.
                </p>
              </div>
              <div className="relative h-80 bg-muted rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/placeholder.svg?height=320&width=480"
                    alt="INFLOW founders"
                    width={480}
                    height={320}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our core values guide everything we do, from product development to customer support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-0 shadow-sm">
              <CardContent className="pt-8 pb-8">
                <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Heart className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Compassion First</h3>
                <p className="text-center text-muted-foreground">
                  We approach mental wellness with empathy, understanding, and respect for each individual's unique
                  journey.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="pt-8 pb-8">
                <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Brain className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Evidence-Based</h3>
                <p className="text-center text-muted-foreground">
                  Our solutions are grounded in scientific research, validated methodologies, and continuous measurement
                  of outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardContent className="pt-8 pb-8">
                <div className="h-12 w-12 bg-teal-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">Privacy & Trust</h3>
                <p className="text-center text-muted-foreground">
                  We maintain the highest standards of data security and privacy, ensuring users feel safe and
                  protected.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Minds Behind INFLOW</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our diverse team of scientists, engineers, and wellness experts are united by a common mission.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. Sarah Chen",
                role: "Co-Founder & CEO",
                bio: "Neuroscientist with 15+ years of research experience in emotional intelligence and mental health.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Michael Rodriguez",
                role: "Co-Founder & CTO",
                bio: "AI specialist with previous leadership roles at Google and mental health startups.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "Dr. Emily Johnson",
                role: "Chief Science Officer",
                bio: "Clinical psychologist specializing in workplace wellness and organizational psychology.",
                image: "/placeholder.svg?height=300&width=300",
              },
              {
                name: "David Kim",
                role: "Chief Product Officer",
                bio: "Product leader with experience building wellness platforms used by millions.",
                image: "/placeholder.svg?height=300&width=300",
              },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative h-48 w-48 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-teal-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <Link href="/careers">
                Join Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-white/10 text-white border-white/20 mb-4">
              Our Impact
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Making a Difference</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We measure our success by the positive change we create in people's lives.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <p className="text-white/80">Organizations using INFLOW</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">1.2M+</div>
              <p className="text-white/80">Individual users</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">32%</div>
              <p className="text-white/80">Average reduction in burnout</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">27%</div>
              <p className="text-white/80">Increase in team productivity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Recognition</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Awards & Certifications</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Best Wellness Platform",
                org: "HR Tech Awards 2023",
                icon: <Award className="h-8 w-8 text-amber-500" />,
              },
              {
                title: "HIPAA Compliant",
                org: "Healthcare Compliance Association",
                icon: <Shield className="h-8 w-8 text-teal-600" />,
              },
              {
                title: "Mental Health Innovation",
                org: "Global Wellness Summit",
                icon: <Brain className="h-8 w-8 text-purple-600" />,
              },
              {
                title: "Top AI Wellness Solution",
                org: "AI Breakthrough Awards",
                icon: <Smile className="h-8 w-8 text-blue-600" />,
              },
            ].map((award, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{award.icon}</div>
                <h3 className="font-semibold mb-1">{award.title}</h3>
                <p className="text-sm text-muted-foreground">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
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

