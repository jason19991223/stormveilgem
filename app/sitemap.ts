import type { MetadataRoute } from "next";
import { getPostSlugs } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/blog", "/story", "/jewelry", "/contact"].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date()
  }));

  const posts = getPostSlugs().map((slug) => ({
    url: `${siteConfig.url}/blog/${slug}`,
    lastModified: new Date()
  }));

  return [...routes, ...posts];
}
