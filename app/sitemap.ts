import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/portfolio", "/portfolio/erbil-residence", "/blog", "/contact"];
  return routes.map((route) => ({
    url: `https://blancdesign.studio${route}`,
    lastModified: new Date(),
  }));
}
