import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * The favicon, built from the approved mark.
 *
 * The asset is 201×230, so dropping it in as the icon would letterbox it into
 * a square and leave uneven clear space on two sides. Instead it is placed,
 * unaltered and at its own aspect ratio, on the brand's forest ground: lime on
 * #022018 is the highest-contrast pairing the guideline has, and a tab strip is
 * exactly the place a transparent mark disappears.
 *
 * The mark is never scaled non-uniformly, rotated, outlined or effected. The
 * only thing added is the ground behind it and the clear space around it.
 */
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const mark = readFileSync(join(process.cwd(), "public", "brand", "mengo-mark.png"));
  const src = `data:image/png;base64,${mark.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#022018",
        }}
      >
        {/* 201×230 kept exactly: 40×46 is the same ratio. */}
        <img src={src} width={40} height={46} alt="" />
      </div>
    ),
    size,
  );
}
