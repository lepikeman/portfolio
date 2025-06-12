import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1f2937 0%, #111827 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui",
        }}
      >
        <div
          style={{
            background: "linear-gradient(45deg, #3b82f6, #1d4ed8)",
            borderRadius: "50%",
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 48,
            fontWeight: "bold",
            marginBottom: 40,
          }}
        >
          AX
        </div>
        <h1
          style={{
            fontSize: 60,
            fontWeight: "bold",
            color: "white",
            margin: 0,
            textAlign: "center",
          }}
        >
          Xhaflaire Axel
        </h1>
        <p
          style={{
            fontSize: 32,
            color: "#9ca3af",
            margin: "20px 0 0 0",
            textAlign: "center",
          }}
        >
          Développeur Full Stack
        </p>
        <p
          style={{
            fontSize: 24,
            color: "#6b7280",
            margin: "10px 0 0 0",
            textAlign: "center",
          }}
        >
          React • Next.js • Node.js • Mobile
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
