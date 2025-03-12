import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { NewsletterForm } from "@/components/newsletter-form"
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  Globe,
  Phone,
  Mail,
  MapPin,
  Shield,
  CheckCircle,
  Award,
  Heart,
} from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Crisis Support Banner */}
      <div className="bg-red-900/80 py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-red-300" />
              <span className="font-medium">Mental Health Crisis? Get immediate support:</span>
            </div>
            <div className="flex flex-wrap gap-4 text-sm">
              <a href="tel:+18001234567" className="flex items-center hover:underline text-red-200 hover:text-white">
                <span className="font-bold">24/7 Helpline: 1-800-123-4567</span>
              </a>
              <Separator orientation="vertical" className="h-5 bg-red-700/50" />
              <Link href="/emergency" className="hover:underline text-red-200 hover:text-white">
                Crisis Resources
              </Link>
              <Separator orientation="vertical" className="h-5 bg-red-700/50 hidden sm:block" />
              <Link href="/providers" className="hover:underline text-red-200 hover:text-white hidden sm:block">
                Find a Therapist
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-8 w-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md"></div>
                <div className="absolute inset-[2px] bg-gray-900 rounded-[4px] flex items-center justify-center">
                  <span className="font-bold text-teal-400">IN</span>
                </div>
              </div>
              <span className="font-bold text-xl">INFLOW</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-xs">
              AI-powered mental wellness platform helping organizations and individuals improve wellbeing through
              evidence-based approaches.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  123 Wellness Street, Suite 500
                  <br />
                  San Francisco, CA 94103
                </span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <a
                  href="mailto:contact@inflow-wellness.com"
                  className="text-gray-400 hover:text-teal-400 transition-colors"
                >
                  contact@inflow-wellness.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                <a href="tel:+14155551234" className="text-gray-400 hover:text-teal-400 transition-colors">
                  (415) 555-1234
                </a>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-9 w-9 rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Solutions */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/individuals" className="text-gray-400 hover:text-teal-400 transition-colors">
                  For Individuals
                </Link>
              </li>
              <li>
                <Link href="/organizations" className="text-gray-400 hover:text-teal-400 transition-colors">
                  For Organizations
                </Link>
              </li>
              <li>
                <Link href="/providers" className="text-gray-400 hover:text-teal-400 transition-colors">
                  For Providers
                </Link>
              </li>
              <li>
                <Link href="/assessment" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Mental Health Assessment
                </Link>
              </li>
              <li>
                <Link href="/mindfulness" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Mindfulness Practices
                </Link>
              </li>
              <li>
                <Link href="/therapy" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Therapy Connect
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/webinars" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Webinars
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/help" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter & Trust */}
          <div className="md:col-span-4 lg:col-span-3">
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4">Get the latest mental wellness insights and product updates.</p>

            <NewsletterForm className="mb-6" />

            {/* Trust Badges */}
            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-300">Trusted By</h4>
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center bg-gray-800 rounded-md px-3 py-1.5">
                  <Shield className="h-4 w-4 text-teal-400 mr-2" />
                  <span className="text-xs text-gray-300">HIPAA Compliant</span>
                </div>
                <div className="flex items-center bg-gray-800 rounded-md px-3 py-1.5">
                  <CheckCircle className="h-4 w-4 text-teal-400 mr-2" />
                  <span className="text-xs text-gray-300">GDPR Compliant</span>
                </div>
                <div className="flex items-center bg-gray-800 rounded-md px-3 py-1.5">
                  <Award className="h-4 w-4 text-teal-400 mr-2" />
                  <span className="text-xs text-gray-300">SOC 2 Certified</span>
                </div>
                <div className="flex items-center bg-gray-800 rounded-md px-3 py-1.5">
                  <Heart className="h-4 w-4 text-teal-400 mr-2" />
                  <span className="text-xs text-gray-300">APA Recognized</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} INFLOW Inc. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <Link href="/terms" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/security" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Security
                </Link>
                <Link href="/accessibility" className="text-gray-400 hover:text-teal-400 transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-gray-400" />
              <select className="bg-gray-800 border-gray-700 rounded text-sm text-gray-400 py-1 px-2 focus:outline-none focus:ring-1 focus:ring-teal-500">
                <option value="en">English</option>
                <option value="es">Español</option>
                <option value="fr">Français</option>
                <option value="de">Deutsch</option>
                <option value="zh">中文</option>
                <option value="ja">日本語</option>
              </select>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 text-xs text-gray-500 max-w-4xl">
            <p>
              <strong>Disclaimer:</strong> INFLOW is not a substitute for professional medical advice, diagnosis, or
              treatment. Always seek the advice of your physician or other qualified health provider with any questions
              you may have regarding a medical condition. If you think you may have a medical emergency, call your
              doctor or emergency services immediately.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

