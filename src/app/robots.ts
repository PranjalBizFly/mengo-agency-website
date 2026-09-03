import type { MetadataRoute } from "next";
import { absolute, site } from "@/lib/site";

/**
 * robots.txt.
 *
 * The OG image endpoint is disallowed: it renders an image per page and has no
 * business being crawled as a URL. Everything else is open — there is nothing
 * on this site that should not be indexed.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: absolute("/sitemap.xml"),
    host: site.url,
  };
}
