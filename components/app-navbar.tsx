"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart,
  Bell,
  Brain,
  Calendar,
  ChevronDown,
  Compass,
  HelpCircle,
  Lightbulb,
  LogOut,
  Menu,
  Moon,
  Search,
  Settings,
  Smile,
  Sun,
  User,
  Users,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
  badge?: string
  badgeVariant?: "default" | "outline" | "secondary"
}

interface AppNavbarProps {
  isDarkMode: boolean
  toggleDarkMode: () => void
  notifications: {
    id: number
    title: string
    read: boolean
    time?: string
    description?: string
  }[]
  markNotificationAsRead: (id: number) => void
}

export function AppNavbar({ isDarkMode, toggleDarkMode, notifications, markNotificationAsRead }: AppNavbarProps) {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = React.useState(false)
  const [searchQuery, setSearchQuery] = React.useState("")
  const searchInputRef = React.useRef<HTMLInputElement>(null)

  const mainNavItems: NavItem[] = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: BarChart,
    },
    {
      title: "Emotion Recognition",
      href: "/dashboard/emotion",
      icon: Smile,
    },
    {
      title: "Mindfulness",
      href: "/dashboard/mindfulness",
      icon: Brain,
    },
    {
      title: "Self-Discovery",
      href: "/dashboard/journey",
      icon: Compass,
    },
    {
      title: "Team Wellbeing",
      href: "/dashboard/team",
      icon: Users,
      badge: "New",
      badgeVariant: "default",
    },
    {
      title: "Calendar",
      href: "/dashboard/calendar",
      icon: Calendar,
    },
  ]

  const insightNavItems: NavItem[] = [
    {
      title: "Reports",
      href: "/dashboard/reports",
      icon: BarChart,
    },
    {
      title: "Analytics",
      href: "/dashboard/analytics",
      icon: Lightbulb,
      badge: "Beta",
      badgeVariant: "secondary",
    },
  ]

  const utilityNavItems: NavItem[] = [
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
    {
      title: "Help & Support",
      href: "/dashboard/help",
      icon: HelpCircle,
    },
  ]

  const unreadNotificationsCount = notifications.filter((n) => !n.read).length

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

  // Render nav item for sidebar
  const renderNavItem = (item: NavItem, index: number) => {
    const isActive = pathname === item.href

    return (
      <SidebarMenuItem key={index}>
        <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
          <Link href={item.href} className="flex items-center w-full">
            <item.icon className="h-5 w-5" />
            <span className="ml-3">{item.title}</span>
            {item.badge && (
              <Badge variant={item.badgeVariant || "default"} className="ml-auto text-xs h-5 px-1.5">
                {item.badge}
              </Badge>
            )}
          </Link>
        </SidebarMenuButton>
      </SidebarMenuItem>
    )
  }

  return (
    <SidebarProvider>
      {/* Desktop Sidebar */}
      <Sidebar className="hidden lg:flex" collapsible="icon">
        <SidebarHeader className="flex h-16 items-center px-4 border-b">
          <div className="flex items-center">
            <div className="relative h-8 w-8 mr-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md"></div>
              <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-[4px] flex items-center justify-center">
                <span className="font-bold text-teal-600 dark:text-teal-400">IN</span>
              </div>
            </div>
            <span className="font-bold text-xl text-teal-600 dark:text-teal-400">INFLOW</span>
          </div>
          <Badge variant="outline" className="ml-auto bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100">
            Pro
          </Badge>
          <SidebarTrigger className="ml-2" />
        </SidebarHeader>

        <SidebarContent>
          <div className="px-4 py-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full bg-background pl-8 text-sm"
                onClick={toggleSearch}
              />
              <kbd className="pointer-events-none absolute right-2 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>

          <SidebarMenu>{mainNavItems.map(renderNavItem)}</SidebarMenu>

          <SidebarSeparator />

          <div className="px-4 py-2">
            <h3 className="px-2 text-xs font-medium text-muted-foreground">INSIGHTS</h3>
          </div>

          <SidebarMenu>{insightNavItems.map(renderNavItem)}</SidebarMenu>

          <SidebarSeparator />

          <SidebarMenu>{utilityNavItems.map(renderNavItem)}</SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="border-t p-4">
          <div className="flex items-center justify-between px-2 py-2 mb-2">
            <span className="text-sm font-medium">Dark Mode</span>
            <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-full justify-start px-2">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start text-left">
                  <span className="text-sm font-medium">John Doe</span>
                  <span className="text-xs text-muted-foreground">john.doe@example.com</span>
                </div>
                <ChevronDown className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </SidebarFooter>
      </Sidebar>

      {/* Mobile Header */}
      <header className="sticky top-0 z-40 flex h-16 items-center gap-4 border-b bg-background px-4 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0">
            <SheetHeader className="border-b p-4">
              <SheetTitle className="flex items-center">
                <div className="relative h-8 w-8 mr-2 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md"></div>
                  <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-[4px] flex items-center justify-center">
                    <span className="font-bold text-teal-600 dark:text-teal-400">IN</span>
                  </div>
                </div>
                <span className="font-bold text-xl text-teal-600 dark:text-teal-400">INFLOW</span>
                <Badge
                  variant="outline"
                  className="ml-auto bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-100"
                >
                  Pro
                </Badge>
              </SheetTitle>
            </SheetHeader>
            <div className="p-4">
              <div className="relative mb-4">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search..." className="w-full bg-background pl-8 text-sm" />
              </div>
              <nav className="space-y-1">
                {mainNavItems.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <SheetClose asChild key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                          isActive
                            ? "bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400"
                            : "hover:bg-muted",
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                        {item.badge && (
                          <Badge variant={item.badgeVariant || "default"} className="ml-auto text-xs h-5 px-1.5">
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    </SheetClose>
                  )
                })}
                <div className="h-px my-3 bg-border" />
                <h3 className="px-3 text-xs font-medium text-muted-foreground mb-2">INSIGHTS</h3>
                {insightNavItems.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <SheetClose asChild key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                          isActive
                            ? "bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400"
                            : "hover:bg-muted",
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                        {item.badge && (
                          <Badge variant={item.badgeVariant || "default"} className="ml-auto text-xs h-5 px-1.5">
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    </SheetClose>
                  )
                })}
                <div className="h-px my-3 bg-border" />
                {utilityNavItems.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <SheetClose asChild key={index}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                          isActive
                            ? "bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400"
                            : "hover:bg-muted",
                        )}
                      >
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </Link>
                    </SheetClose>
                  )
                })}
                <div className="h-px my-3 bg-border" />
                <SheetClose asChild>
                  <Link
                    href="/logout"
                    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-red-500 hover:bg-muted transition-colors"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Log Out</span>
                  </Link>
                </SheetClose>
              </nav>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Dark Mode</span>
                <Switch checked={isDarkMode} onCheckedChange={toggleDarkMode} />
              </div>
              <div className="flex items-center">
                <Avatar className="h-9 w-9 mr-3">
                  <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">Professional Plan</p>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center">
          <div className="relative h-8 w-8 mr-2 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-md"></div>
            <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-[4px] flex items-center justify-center">
              <span className="font-bold text-teal-600 dark:text-teal-400">IN</span>
            </div>
          </div>
          <span className="font-bold text-xl text-teal-600 dark:text-teal-400">INFLOW</span>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          <Button variant="ghost" size="icon" onClick={toggleSearch} className="relative">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                {unreadNotificationsCount > 0 && (
                  <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
                )}
                <span className="sr-only">Notifications</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-80">
              <DropdownMenuLabel className="flex items-center justify-between">
                <span>Notifications</span>
                {unreadNotificationsCount > 0 && (
                  <Badge variant="secondary" className="ml-auto">
                    {unreadNotificationsCount} new
                  </Badge>
                )}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <div className="max-h-80 overflow-y-auto">
                {notifications.length > 0 ? (
                  notifications.map((notification) => (
                    <DropdownMenuItem
                      key={notification.id}
                      className={cn(
                        "flex flex-col items-start py-3 cursor-pointer",
                        !notification.read && "bg-muted/50",
                      )}
                      onClick={() => markNotificationAsRead(notification.id)}
                    >
                      <div className="flex w-full">
                        <div
                          className={cn(
                            "h-2 w-2 rounded-full mt-1.5 mr-3 flex-shrink-0",
                            !notification.read ? "bg-teal-500" : "bg-transparent",
                          )}
                        />
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">{notification.title}</p>
                          {notification.description && (
                            <p className="text-xs text-muted-foreground">{notification.description}</p>
                          )}
                          {notification.time && <p className="text-xs text-muted-foreground">{notification.time}</p>}
                        </div>
                      </div>
                    </DropdownMenuItem>
                  ))
                ) : (
                  <div className="py-6 text-center text-muted-foreground">
                    <p className="text-sm">No notifications yet</p>
                  </div>
                )}
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="justify-center text-center cursor-pointer">
                <Link href="/dashboard/notifications" className="text-sm text-muted-foreground">
                  View all notifications
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">john.doe@example.com</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-500">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
                  placeholder="Search for anything..."
                  className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(false)}>
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>
              <div className="p-4 max-h-96 overflow-y-auto">
                {searchQuery ? (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Pages</h3>
                      <div className="space-y-1">
                        {mainNavItems
                          .filter((item) => item.title.toLowerCase().includes(searchQuery.toLowerCase()))
                          .map((item, index) => (
                            <Link
                              key={index}
                              href={item.href}
                              className="flex items-center rounded-md p-2 hover:bg-muted"
                              onClick={() => setIsSearchOpen(false)}
                            >
                              <item.icon className="h-4 w-4 mr-2 text-muted-foreground" />
                              <span>{item.title}</span>
                            </Link>
                          ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">Quick Actions</h3>
                      <div className="space-y-1">
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm px-2 py-1.5 h-auto"
                          onClick={() => {
                            setIsSearchOpen(false)
                            // Add action here
                          }}
                        >
                          <Brain className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Start Mindfulness Session</span>
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm px-2 py-1.5 h-auto"
                          onClick={() => {
                            setIsSearchOpen(false)
                            // Add action here
                          }}
                        >
                          <Smile className="h-4 w-4 mr-2 text-muted-foreground" />
                          <span>Record Mood</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">Recent Searches</h3>
                      <div className="space-y-1">
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm px-2 py-1.5 h-auto"
                          onClick={() => setSearchQuery("mindfulness")}
                        >
                          <span>mindfulness exercises</span>
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start text-sm px-2 py-1.5 h-auto"
                          onClick={() => setSearchQuery("team")}
                        >
                          <span>team analytics</span>
                        </Button>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-2">Suggested</h3>
                      <div className="space-y-1">
                        {mainNavItems.slice(0, 4).map((item, index) => (
                          <Link
                            key={index}
                            href={item.href}
                            className="flex items-center rounded-md p-2 hover:bg-muted"
                            onClick={() => setIsSearchOpen(false)}
                          >
                            <item.icon className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span>{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
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
    </SidebarProvider>
  )
}

