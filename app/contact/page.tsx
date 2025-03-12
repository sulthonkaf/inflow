import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the INFLOW team for questions, support, or partnership inquiries.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about INFLOW? We're here to help. Reach out to our team for support, partnership inquiries,
            or general information.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                Call Us
              </CardTitle>
              <CardDescription>Speak directly with our team</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">(415) 555-1234</p>
              <p className="text-sm text-muted-foreground mt-1">Monday-Friday, 9am-5pm PT</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                Email Us
              </CardTitle>
              <CardDescription>We'll respond within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">contact@inflow-wellness.com</p>
              <p className="text-sm text-muted-foreground mt-1">For general inquiries</p>
              <p className="font-medium mt-2">support@inflow-wellness.com</p>
              <p className="text-sm text-muted-foreground mt-1">For technical support</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-teal-600 dark:text-teal-400" />
                Live Chat
              </CardTitle>
              <CardDescription>Chat with our support team</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Available on our platform</p>
              <p className="text-sm text-muted-foreground mt-1">For quick questions and support</p>
              <p className="text-sm text-muted-foreground mt-2">Available 24/7 for urgent matters</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Visit Our Office</h2>
            <Card>
              <CardContent className="p-0">
                <div className="aspect-video w-full bg-muted relative overflow-hidden rounded-t-lg">
                  {/* This would be a real map in production */}
                  <div className="absolute inset-0 flex items-center justify-center bg-muted">
                    <MapPin className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">INFLOW Headquarters</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        123 Wellness Street, Suite 500
                        <br />
                        San Francisco, CA 94103
                        <br />
                        United States
                      </p>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-teal-600 dark:text-teal-400 mr-3 flex-shrink-0" />
                      <p className="text-muted-foreground">
                        Monday-Friday: 9:00 AM - 5:00 PM PT
                        <br />
                        Saturday-Sunday: Closed
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t">
                    <h4 className="font-medium mb-2">Getting Here:</h4>
                    <p className="text-sm text-muted-foreground">
                      We're conveniently located in downtown San Francisco, just two blocks from the Montgomery BART
                      station. Limited visitor parking is available in the building garage.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>How quickly will I receive a response?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We strive to respond to all inquiries within 24 business hours. For urgent matters, please use our
                  live chat feature or call our support line.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Do you offer partnership opportunities?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes! We collaborate with healthcare providers, employers, and wellness organizations. Please email
                  partnerships@inflow-wellness.com with details about your organization.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How can I get technical support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  For technical issues, please email support@inflow-wellness.com or use the in-app chat feature. Include
                  details about the problem and screenshots if possible.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Are you hiring?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We're always looking for talented individuals passionate about mental wellness. Visit our Careers page
                  to see current openings and application instructions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

