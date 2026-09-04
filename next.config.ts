import type { NextConfig } from "next";

/**
 * Mengo, written from an agency's chair.
 *
 * A separate property from the Mengo end-user site: its own routes, its own
 * content and its own positioning. Nothing here is shared with, or deployed
 * over, mengoengine.com.
 */
const nextConfig: NextConfig = {
  /**
   * QA builds into a directory of its own.
   *
   * `next dev` and `next build` cannot share one: dev rewrites the output as it
   * recompiles, which leaves a production server serving a half-written build.
   * Setting NEXT_DIST_DIR lets the audits run while a dev server is up instead
   * of requiring that nobody has one open.
   */
  distDir: process.env.NEXT_DIST_DIR || ".next",

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
    /* The stage slugs were renamed when the audience stopped being a keyword:
       "solo-agency" became "solo", and so on. These keep the old shapes alive
       rather than breaking any link that was already written down. */
    const STAGES = [
      ["start-an-agency", "starting"],
      ["solo-agency", "solo"],
      ["small-agency", "small-team"],
      ["growing-agency", "growing"],
      ["large-agency", "established"],
    ];

    return [
      // Shorthands people type, and the labels used in outbound campaigns.
      { source: "/agencies", destination: "/solutions/", permanent: true },
      { source: "/pricing", destination: "/get-started/", permanent: true },
      { source: "/start", destination: "/get-started/", permanent: true },
      { source: "/about", destination: "/company/about/", permanent: true },
      { source: "/founder", destination: "/company/founder/", permanent: true },
      { source: "/contact-us", destination: "/company/contact/", permanent: true },
      { source: "/directory", destination: "/explore/", permanent: false },

      // The section rename: /for-agencies/ and /use-cases/ moved under /solutions/.
      ...STAGES.map(([from, to]) => ({
        source: `/for-agencies/${from}`,
        destination: `/solutions/stages/${to}/`,
        permanent: true,
      })),
      { source: "/for-agencies", destination: "/solutions/stages/", permanent: true },
      { source: "/for-agencies/:stage", destination: "/solutions/stages/:stage/", permanent: true },
      { source: "/use-cases", destination: "/solutions/use-cases/", permanent: true },
      { source: "/use-cases/start-an-agency", destination: "/solutions/use-cases/starting/", permanent: true },
      { source: "/use-cases/:useCase", destination: "/solutions/use-cases/:useCase/", permanent: true },

      // The section was briefly published as /solutions/goals/.
      { source: "/solutions/goals", destination: "/solutions/use-cases/", permanent: true },
      { source: "/solutions/goals/:useCase", destination: "/solutions/use-cases/:useCase/", permanent: true },
    ];
  },
};

export default nextConfig;
