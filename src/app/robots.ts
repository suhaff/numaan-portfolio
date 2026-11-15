import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: "https://numaan-portfolio-numaan-suhaffs-projects.vercel.app/sitemap.xml",
    host: "https://numaan-portfolio-numaan-suhaffs-projects.vercel.app",
  };
}
