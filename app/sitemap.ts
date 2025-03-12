import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://inflow-wellness.com"

  // Main pages
  const routes = [
    "",
    "/about",
    "/pricing",
    "/features",
    "/contact",
    "/blog",
    "/login",
    "/signup",
    "/dashboard",
    "/individuals",
    "/organizations",
    "/providers",
    "/assessment",
    "/mindfulness",
    "/therapy",
    "/team-wellbeing",
    "/leadership",
    "/analytics",
    "/enterprise",
    "/research",
    "/case-studies",
    "/webinars",
    "/docs",
    "/terms",
    "/privacy",
    "/security",
    "/accessibility",
    "/emergency",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  })) as MetadataRoute.Sitemap

  return routes
}

