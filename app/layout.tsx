import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { MainNav } from "@/components/main-nav"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieConsent } from "@/components/cookie-consent"
import { Suspense } from "react"
import { LoadingIndicator } from "@/components/loading-indicator"
import { CrisisSupport } from "@/components/crisis-support"
import { AIWellnessAssistant } from "@/components/ai-wellness-assistant"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: "INFLOW - AI-Powered Mental Wellness",
    template: "%s | INFLOW",
  },
  description: "Transform workplace wellbeing with AI-driven insights and personalized mindfulness practices.",
  keywords: [
    "mental wellness",
    "AI",
    "mindfulness",
    "workplace wellbeing",
    "employee wellness",
    "mental health",
    "therapy",
    "emotional intelligence",
    "stress management",
    "burnout prevention",
  ],
  authors: [{ name: "INFLOW Team" }],
  creator: "INFLOW Inc.",
  publisher: "INFLOW Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://inflow-wellness.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "es-ES": "/es-ES",
      "fr-FR": "/fr-FR",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inflow-wellness.com",
    title: "INFLOW - AI-Powered Mental Wellness",
    description: "Transform workplace wellbeing with AI-driven insights and personalized mindfulness practices.",
    siteName: "INFLOW",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "INFLOW - AI-Powered Mental Wellness Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INFLOW - AI-Powered Mental Wellness",
    description: "Transform workplace wellbeing with AI-driven insights and personalized mindfulness practices.",
    creator: "@inflowwellness",
    images: ["/twitter-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/shortcut-icon.png"],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "google-site-verification=your_verification_code",
    yandex: "yandex-verification=your_verification_code",
  },
  category: "Health & Wellness",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#0D9488" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <CrisisSupport />
            <MainNav />
            <Suspense fallback={<LoadingIndicator />}>
              <main className="flex-1">{children}</main>
            </Suspense>
            <Footer />
          </div>
          <Toaster />
          <CookieConsent />
          <Analytics />
          <AIWellnessAssistant />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'