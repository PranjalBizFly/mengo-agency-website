import type { NextConfig } from "next";

/**
 * Mengo for Agencies.
 *
 * A separate property from the Mengo end-user site: its own routes, its own
 * content and its own positioning. Nothing here is shared with, or deployed
 * over, mengoengine.com.
 */
const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,

  images: {
    formats: ["image/avif", "image/webp"],
    // Every photograph on the site is a licensed Unsplash asset served from
    // their CDN and recorded, with attribution, in src/lib/photo-registry.json.
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },

  async redirects() {
    return [
      // Shorthands people type, and the labels used in outbound campaigns.
      { source: "/agencies", destination: "/for-agencies/", permanent: true },
      { source: "/pricing", destination: "/get-started/", permanent: true },
      { source: "/start", destination: "/get-started/", permanent: true },
      { source: "/about", destination: "/company/about/", permanent: true },
      { source: "/founder", destination: "/company/founder/", permanent: true },
      { source: "/contact-us", destination: "/company/contact/", permanent: true },
    ];
  },
};

export default nextConfig;
