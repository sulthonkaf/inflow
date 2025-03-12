"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Search,
  Menu,
  ChevronDown,
  LifeBuoy,
  Building2,
  Brain,
  BookOpen,
  FileText,
  Users,
  Headphones,
  Globe,
  Phone,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface NavItem {
  title: string
  href: string
  description?: string
  badge?: string
  badgeVariant?: "default" | "outline" | "secondary"
}

interface NavSection {
  title: string
  items: NavItem[]
}

export function MainNav() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  // Define navigation structure
  const individualSolutions: NavItem[] = [
    {
      title: "Personal Assessment",
      href: "/assessment",
      description: "Evaluate your mental wellbeing with our AI tools",
    },
    {
      title: "Mindfulness Practices",
      href: "/mindfulness",
      description: "Evidence-based exercises for stress reduction",
    },
    {
      title: "Therapy Connect",
      href: "/therapy",
      description: "Connect with licensed mental health professionals",
      badge: "New",
    },
    {
      title: "Self-Discovery Journey",
      href: "/journey",
      description: "Personalized growth path for emotional intelligence",
    },
  ]

  const organizationSolutions: NavItem[] = [
    {
      title: "Team Wellbeing",
      href: "/team-wellbeing",
      description: "Comprehensive wellness solutions for organizations",
    },
    {
      title: "Leadership Training",
      href: "/leadership",
      description: "Emotional intelligence training for leaders",
    },
    {
      title: "Analytics Dashboard",
      href: "/analytics",
      description: "Anonymized insights into team mental health",
    },
    {
      title: "Enterprise Solutions",
      href: "/enterprise",
      description: "Custom implementations for large organizations",
      badge: "Enterprise",
    },
  ]

  const resourceLinks: NavItem[] = [
    { title: "Blog", href: "/blog" },
    { title: "Research", href: "/research" },
    { title: "Case Studies", href: "/case-studies" },
    { title: "Webinars", href: "/webinars" },
    { title: "Documentation", href: "/docs" },
  ]

  const mainLinks: NavItem[] = [
    { title: "For Individuals", href: "/individuals" },
    { title: "For Organizations", href: "/organizations" },
    { title: "For Healthcare Providers", href: "/providers" },
    { title: "Pricing", href: "/pricing" },
  ]

  const languages = [
    { code: "en", name: "English" },
    { code: "es", name: "Español" },
    { code: "fr", name: "Français" },
    { code: "de", name: "Deutsch" },
    { code: "zh", name: "中文" },
    { code: "ja", name: "日本語" },
  ]

  // Toggle search and focus input
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      setTimeout(() => {
        searchInputRef.current?.focus()
      }, 100)
    }
  }

  // Handle keyboard shortcut for search
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        toggleSearch()
      }
      if (e.key === "Escape" && isSearchOpen) {
        setIsSearchOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isSearchOpen])

  return (
    <TooltipProvider>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        {/* Crisis Support Banner */}
        <div className="bg-teal-50 dark:bg-teal-900/30 py-1.5 text-center text-sm">
          <span className="text-teal-800 dark:text-teal-200">
            Need immediate support? Call our 24/7 helpline:
            <a
              href="tel:+18001234567"
              className="font-medium ml-1 underline hover:text-teal-600 dark:hover:text-teal-300"
            >
              1-800-123-4567
            </a>
          </span>
        </div>

        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            {/* Mobile Menu Trigger */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" aria-label="Menu">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <SheetHeader className="border-b p-4">
                  <SheetTitle className="flex items-center">
                    <div className="relative h-8 w-8 mr-2 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md"></div>
                      <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-[4px] flex items-center justify-center">
                        <span className="font-bold text-teal-600 dark:text-teal-400">IN</span>
                      </div>
                    </div>
                    <span className="font-bold text-xl">INFLOW</span>
                  </SheetTitle>
                </SheetHeader>
                <div className="py-4 overflow-y-auto max-h-[calc(100vh-10rem)]">
                  <div className="px-4 mb-2">
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <input
                        type="search"
                        placeholder="Search..."
                        className="w-full rounded-md border border-input bg-background py-2 pl-8 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </div>
                  </div>

                  <nav className="space-y-1 px-2">
                    {mainLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
                            pathname === link.href ? "font-medium text-foreground" : "text-muted-foreground",
                          )}
                        >
                          {link.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="px-4 py-2 mt-2">
                    <div className="h-px w-full bg-border"></div>
                  </div>

                  <div className="px-4 py-2">
                    <p className="text-xs font-medium text-muted-foreground">FOR INDIVIDUALS</p>
                  </div>
                  <nav className="space-y-1 px-2">
                    {individualSolutions.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
                            pathname === link.href ? "font-medium text-foreground" : "text-muted-foreground",
                          )}
                        >
                          <span>{link.title}</span>
                          {link.badge && (
                            <Badge variant="outline" className="ml-auto text-xs">
                              {link.badge}
                            </Badge>
                          )}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="px-4 py-2 mt-2">
                    <p className="text-xs font-medium text-muted-foreground">FOR ORGANIZATIONS</p>
                  </div>
                  <nav className="space-y-1 px-2">
                    {organizationSolutions.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className={cn(
                            "flex items-center justify-between rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted",
                            pathname === link.href ? "font-medium text-foreground" : "text-muted-foreground",
                          )}
                        >
                          <span>{link.title}</span>
                          {link.badge && (
                            <Badge variant="outline" className="ml-auto text-xs">
                              {link.badge}
                            </Badge>
                          )}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <div className="px-4 py-2 mt-2">
                    <p className="text-xs font-medium text-muted-foreground">RESOURCES</p>
                  </div>
                  <nav className="space-y-1 px-2">
                    {resourceLinks.map((link) => (
                      <SheetClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="flex items-center rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted"
                        >
                          {link.title}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </div>
                <SheetFooter className="border-t p-4 mt-auto">
                  <div className="flex flex-col space-y-3 w-full">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Language</span>
                      <select className="text-sm bg-transparent border rounded px-2 py-1">
                        {languages.map((lang) => (
                          <option key={lang.code} value={lang.code}>
                            {lang.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="flex gap-2">
                      <Button asChild variant="outline" className="w-full justify-center">
                        <Link href="/login">Sign in</Link>
                      </Button>
                      <Button asChild className="w-full justify-center bg-teal-600 hover:bg-teal-700">
                        <Link href="/signup">Register</Link>
                      </Button>
                    </div>
                    <Button asChild variant="link" className="w-full justify-center text-teal-600 dark:text-teal-400">
                      <Link href="/emergency" className="flex items-center">
                        <LifeBuoy className="mr-2 h-4 w-4" />
                        Crisis Resources
                      </Link>
                    </Button>
                  </div>
                </SheetFooter>
              </SheetContent>
            </Sheet>

            {/* Desktop Logo */}
            <Link href="/" className="hidden items-center space-x-2 lg:flex">
              <div className="relative h-8 w-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md"></div>
                <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-[4px] flex items-center justify-center">
                  <span className="font-bold text-teal-600 dark:text-teal-400">IN</span>
                </div>
              </div>
              <span className="hidden font-bold text-xl sm:inline-block">INFLOW</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 text-sm">
              {/* For Individuals Dropdown */}
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="px-3 py-2 h-auto text-base">
                        For Individuals <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs">
                    <p>Mental wellness solutions for personal growth</p>
                  </TooltipContent>
                </Tooltip>
                <DropdownMenuContent className="w-[450px] p-0" align="start">
                  <div className="grid grid-cols-6 gap-2 p-4">
                    <div className="col-span-6">
                      <DropdownMenuLabel className="text-base">Personal Wellness Solutions</DropdownMenuLabel>
                    </div>
                    <div className="col-span-6">
                      <div className="grid grid-cols-2 gap-4">
                        {individualSolutions.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex flex-col gap-1 rounded-md p-3 hover:bg-muted"
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{item.title}</span>
                              {item.badge && (
                                <Badge variant="secondary" className="ml-auto text-xs">
                                  {item.badge}
                                </Badge>
                              )}
                            </div>
                            {item.description && (
                              <span className="line-clamp-2 text-xs text-muted-foreground">{item.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 border-t">
                    <Link
                      href="/individuals"
                      className="flex items-center justify-between rounded-md p-2 text-sm hover:bg-muted"
                    >
                      <span className="font-medium">View all individual solutions</span>
                      <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* For Organizations Dropdown */}
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="px-3 py-2 h-auto text-base">
                        For Organizations <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs">
                    <p>Team wellness solutions for businesses and organizations</p>
                  </TooltipContent>
                </Tooltip>
                <DropdownMenuContent className="w-[450px] p-0" align="start">
                  <div className="grid grid-cols-6 gap-2 p-4">
                    <div className="col-span-6">
                      <DropdownMenuLabel className="text-base">Organizational Wellness Solutions</DropdownMenuLabel>
                    </div>
                    <div className="col-span-6">
                      <div className="grid grid-cols-2 gap-4">
                        {organizationSolutions.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="flex flex-col gap-1 rounded-md p-3 hover:bg-muted"
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{item.title}</span>
                              {item.badge && (
                                <Badge variant="secondary" className="ml-auto text-xs">
                                  {item.badge}
                                </Badge>
                              )}
                            </div>
                            {item.description && (
                              <span className="line-clamp-2 text-xs text-muted-foreground">{item.description}</span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="bg-muted/50 p-4 border-t">
                    <Link
                      href="/organizations"
                      className="flex items-center justify-between rounded-md p-2 text-sm hover:bg-muted"
                    >
                      <span className="font-medium">View all organization solutions</span>
                      <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                    </Link>
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Healthcare Providers Link */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/providers"
                    className={cn(
                      "px-3 py-2 text-base transition-colors hover:text-foreground/80",
                      pathname === "/providers" ? "text-foreground font-medium" : "text-foreground/70",
                    )}
                  >
                    For Providers
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-xs">
                  <p>Resources for mental health professionals</p>
                </TooltipContent>
              </Tooltip>

              {/* Pricing Link */}
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href="/pricing"
                    className={cn(
                      "px-3 py-2 text-base transition-colors hover:text-foreground/80",
                      pathname === "/pricing" ? "text-foreground font-medium" : "text-foreground/70",
                    )}
                  >
                    Pricing
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-xs">
                  <p>Transparent pricing for individuals and organizations</p>
                </TooltipContent>
              </Tooltip>

              {/* Resources Dropdown */}
              <DropdownMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="px-3 py-2 h-auto text-base">
                        Resources <ChevronDown className="ml-1 h-4 w-4 opacity-70" />
                      </Button>
                    </DropdownMenuTrigger>
                  </TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs">
                    <p>Educational content and research on mental wellness</p>
                  </TooltipContent>
                </Tooltip>
                <DropdownMenuContent align="start" className="w-56">
                  {resourceLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <Link href={link.href}>{link.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>

          {/* Center Logo for Mobile */}
          <Link href="/" className="lg:hidden flex items-center space-x-2">
            <div className="relative h-8 w-8 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md"></div>
              <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-[4px] flex items-center justify-center">
                <span className="font-bold text-teal-600 dark:text-teal-400">IN</span>
              </div>
            </div>
            <span className="font-bold text-xl">INFLOW</span>
          </Link>

          {/* Right Side Actions */}
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="hidden lg:flex" aria-label="Search" onClick={toggleSearch}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
              <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" onClick={toggleSearch}>
                  <Search className="h-5 w-5" />
                  <span className="sr-only">Search</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Search</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" asChild className="hidden sm:inline-flex">
                  <Link href="/login">Sign in</Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Access your account</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button asChild className="bg-teal-600 hover:bg-teal-700">
                  <Link href="/signup">Register now</Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">Create a free account</TooltipContent>
            </Tooltip>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="hidden lg:flex w-16">
                  <Globe className="h-4 w-4 mr-1" />
                  EN <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {languages.map((lang) => (
                  <DropdownMenuItem key={lang.code}>{lang.name}</DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="hidden lg:flex text-red-500 hover:text-red-600 hover:bg-red-50"
                  asChild
                >
                  <Link href="/emergency">
                    <Phone className="h-5 w-5" />
                    <span className="sr-only">Emergency Support</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p className="font-medium">Crisis Support</p>
                <p className="text-xs">24/7 helpline available</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </header>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed left-1/2 top-1/4 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-4">
            <div className="bg-background rounded-lg border shadow-lg">
              <div className="flex items-center border-b p-4">
                <Search className="h-5 w-5 text-muted-foreground mr-3" />
                <input
                  ref={searchInputRef}
                  type="search"
                  placeholder="Search for resources, exercises, or topics..."
                  className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                />
                <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(false)}>
                  <span className="sr-only">Close</span>
                  <kbd className="pointer-events-none h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100">
                    ESC
                  </kbd>
                </Button>
              </div>
              <div className="p-4 max-h-96 overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium mb-2">Popular Searches</h3>
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start text-sm px-2 py-1.5 h-auto">
                        <Brain className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Mindfulness exercises</span>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm px-2 py-1.5 h-auto">
                        <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Team wellness assessment</span>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm px-2 py-1.5 h-auto">
                        <Headphones className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Therapy options</span>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm px-2 py-1.5 h-auto">
                        <Building2 className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span>Corporate wellness programs</span>
                      </Button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium mb-2">Resources</h3>
                    <div className="space-y-1">
                      <Button variant="ghost" className="w-full justify-start text-sm px-2 py-1.5 h-auto" asChild>
                        <Link href="/blog">
                          <BookOpen className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Blog Articles</span>
                        </Link>
                      </Button>
                      <Button variant="ghost" className="w-full justify-start text-sm px-2 py-1.5 h-auto" asChild>
                        <Link href="/research">
                          <FileText className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Research Papers</span>
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t p-2 text-xs text-muted-foreground flex justify-between items-center">
                <span>Press ESC to close</span>
                <div className="flex space-x-2">
                  <kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold">↑</kbd>
                  <kbd className="rounded bg-muted px-1.5 py-0.5 text-[10px] font-semibold">↓</kbd>
                  <span>to navigate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </TooltipProvider>
  )
}

