import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const logoBuffer = readFileSync(join(process.cwd(), "public", "Logo.webp"));
  const logoBase64 = `data:image/webp;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#E9F3EB",
          fontFamily: "sans-serif",
        }}
      >
        <img
          src={logoBase64}
          width={220}
          height={220}
          style={{ borderRadius: "50%", border: "6px solid #DB2777" }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            marginTop: 36,
            fontSize: 64,
            fontWeight: 800,
            color: "#102018",
          }}
        >
          Aires
          <span style={{ color: "#7A9B8A", fontSize: 36, marginLeft: 8 }}>
            .skills
          </span>
        </div>
        <div
          style={{
            marginTop: 16,
            fontSize: 28,
            color: "#4A6558",
          }}
        >
          98 skills · 23 categories
        </div>
      </div>
    ),
    { ...size }
  );
}
