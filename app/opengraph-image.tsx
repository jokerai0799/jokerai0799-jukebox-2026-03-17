import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "linear-gradient(135deg, #030014 0%, #12032f 45%, #031b27 100%)",
          color: "white",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 15% 20%, rgba(247,37,133,0.35), transparent 30%), radial-gradient(circle at 85% 20%, rgba(0,245,255,0.28), transparent 25%), radial-gradient(circle at 50% 85%, rgba(172,107,255,0.28), transparent 35%)",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "64px",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 26,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 999,
                background: "#f72585",
                boxShadow: "0 0 24px rgba(247,37,133,0.7)",
              }}
            />
            Discord music bot
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 18, maxWidth: 860 }}>
            <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1 }}>Neonix</div>
            <div style={{ fontSize: 38, lineHeight: 1.2, color: "rgba(255,255,255,0.88)" }}>
              Simple playback, smooth queues, and clean Discord music sessions.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: 18,
              fontSize: 24,
              color: "rgba(255,255,255,0.82)",
            }}
          >
            <div style={{ display: "flex", padding: "14px 20px", borderRadius: 999, background: "rgba(255,255,255,0.08)" }}>
              Invite the bot
            </div>
            <div style={{ display: "flex", padding: "14px 20px", borderRadius: 999, background: "rgba(255,255,255,0.08)" }}>
              Support the project
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
