import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * The home-screen icon.
 *
 * Same treatment as the favicon at the size iOS asks for. It carries more clear
 * space than the tab icon because the platform rounds the corners, and a mark
 * that runs close to the edge loses its geometry to the mask.
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
        {/* The 201×230 ratio, unchanged. */}
        <img src={src} width={96} height={110} alt="" />
      </div>
    ),
    size,
  );
}
