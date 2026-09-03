import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";

/**
 * Social cards, rendered on demand.
 *
 * One endpoint gives every page on the site a distinct card without committing
 * a hundred image files to the repository. The design is the site's own — the
 * forest ground, the lime rule, the wordmark with its dot — rather than a
 * screenshot, because a card is read at thumbnail size in a feed and a
 * screenshot is illegible there.
 *
 * Fonts are deliberately not loaded. Fetching a font file on every card render
 * is a request in the critical path of someone else's link preview, and the
 * system stack at this size is indistinguishable in a timeline.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = (searchParams.get("t") ?? site.name).slice(0, 120);
  const kicker = (searchParams.get("k") ?? "For agencies").slice(0, 40);

  // Long titles need to step down or they overflow the card.
  const fontSize = title.length > 78 ? 52 : title.length > 46 ? 62 : 74;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#022018",
          padding: "72px 80px",
          fontFamily:
            "ui-sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ width: 56, height: 3, background: "#a3e625" }} />
            <div
              style={{
                fontSize: 22,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "#a3b6a9",
                fontWeight: 600,
              }}
            >
              {kicker}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize,
            lineHeight: 1.05,
            letterSpacing: -2.5,
            color: "#ffffff",
            fontWeight: 600,
            maxWidth: 980,
          }}
        >
          {title}
        </div>

        <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
          <div style={{ fontSize: 30, fontWeight: 600, color: "#ffffff", letterSpacing: -1 }}>
            Mengo
          </div>
          <div style={{ fontSize: 30, fontWeight: 600, color: "#a3e625" }}>.</div>
          <div style={{ fontSize: 22, color: "#a3b6a9", marginLeft: 6 }}>for Agencies</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
