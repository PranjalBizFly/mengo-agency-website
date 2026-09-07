import type { Metadata, Viewport } from "next";
import { Montserrat, Poppins, Instrument_Serif } from "next/font/google";
import "./globals.css";

import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Motion } from "@/components/ui/Motion";
import { SearchProvider } from "@/components/search/Search";
import { allPaths } from "@/lib/registry";
import { JsonLd } from "@/components/ui/primitives";
import { organizationSchema, websiteSchema } from "@/seo/schema";
import { REVEAL_INIT_SCRIPT, THEME_INIT_SCRIPT } from "@/lib/reveal-init";
import { site } from "@/lib/site";

/**
 * The brand's two families, plus the one this site already reserved for
 * editorial emphasis.
 *
 * Montserrat sets the logo and every display heading; Poppins carries body and
 * interface. Both are the brand guideline's, and they replace Sora and
 * Instrument Sans — which is a deliberate divergence from the product site,
 * because a brand guideline outranks a sibling implementation.
 *
 * Instrument Serif italic stays: the guideline names two families and says
 * nothing about the editorial accent, so it is preserved rather than guessed
 * at. Weights are pinned to exactly what the design system uses, so nothing is
 * downloaded that never renders.
 */
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.tagline}`,
    template: "%s",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: false },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#022018",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${poppins.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Both run before first paint, and both have to. A deferred theme
            script flashes the wrong theme; a deferred reveal script paints the
            page visible and leaves the controller unable to animate it in
            without blinking content the reader is already looking at. */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <script dangerouslySetInnerHTML={{ __html: REVEAL_INIT_SCRIPT }} />
      </head>
      <body>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {/* Reading progress, painted by the same rAF loop as the image drift
            and hidden entirely under reduced motion. */}
        <div data-scroll-progress className="scroll-progress" aria-hidden />
        {/* The provider owns the "/" and ⌘K shortcuts and the dialog, and it
            wraps header, page and footer because all three offer a way in.

            The page count is read from the route registry here, on the server,
            rather than from the search index in the browser: the registry is
            what decides which pages exist, so the number the dialog states is
            the source rather than a copy of it — and it is present before the
            index has finished loading. */}
        <SearchProvider totalPages={allPaths().length}>
          <Header />
          <main id="main" tabIndex={-1} className="outline-none">
            {children}
          </main>
          <Footer />
        </SearchProvider>
        <Motion />
      </body>
    </html>
  );
}
