import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 7,
          background: "linear-gradient(135deg, #22d3ee 0%, #6366f1 100%)",
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: -1,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        tw
      </div>
    ),
    { ...size },
  );
}
