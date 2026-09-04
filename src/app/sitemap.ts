import type { MetadataRoute } from "next";

const SITE_URL = "https://tailwindcss.imatlas.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/condensed", "/privacy", "/terms"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/condensed" ? "weekly" : "yearly",
  }));
}
