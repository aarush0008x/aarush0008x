import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aarush Singh — Developer, AI & Data Science Student · Builder";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#242424",
          backgroundImage: "radial-gradient(circle at 80% 20%, rgba(128, 41, 56, 0.25) 0%, transparent 60%)",
          padding: "64px 80px",
          fontFamily: "sans-serif",
          color: "#F7F6F4",
          border: "12px solid #1E1E1E",
        }}
      >
        {/* Top Header / Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              padding: "8px 20px",
              borderRadius: "999px",
              backgroundColor: "rgba(128, 41, 56, 0.2)",
              border: "1px solid rgba(128, 41, 56, 0.5)",
              color: "#F7F6F4",
              fontSize: "18px",
              fontWeight: 600,
              letterSpacing: "0.5px",
            }}
          >
            🎓 B.Tech AI &amp; DS · CGC University
          </div>
          <div
            style={{
              padding: "8px 16px",
              borderRadius: "999px",
              backgroundColor: "#1E1E1E",
              border: "1px solid rgba(247, 246, 244, 0.15)",
              color: "#9E9A93",
              fontSize: "16px",
            }}
          >
            Available for Opportunities
          </div>
        </div>

        {/* Center Main Title */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 800,
              letterSpacing: "-2px",
              lineHeight: 1,
              color: "#F7F6F4",
              display: "flex",
              alignItems: "center",
            }}
          >
            Aarush Singh
            <span style={{ color: "#802938" }}>.</span>
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#D6D2CB",
              fontWeight: 500,
              letterSpacing: "-0.5px",
            }}
          >
            Developer · AI &amp; Data Science Student · Builder
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#9E9A93",
              maxWidth: "850px",
              lineHeight: 1.4,
              marginTop: "8px",
            }}
          >
            Building intelligent edge systems, full-stack web applications, and participating in national 24-hour hackathons.
          </div>
        </div>

        {/* Bottom Bar: Projects & Socials */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid rgba(247, 246, 244, 0.12)",
            paddingTop: "28px",
          }}
        >
          {/* Projects highlight pills */}
          <div style={{ display: "flex", gap: "12px" }}>
            {["nimoCode", "RockinRoll", "EvidenceLedger", "BodhAI", "SmartDrobe"].map(
              (p) => (
                <div
                  key={p}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "8px",
                    backgroundColor: "#1E1E1E",
                    border: "1px solid rgba(247, 246, 244, 0.1)",
                    color: "#D6D2CB",
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  {p}
                </div>
              )
            )}
          </div>

          {/* GitHub username handle */}
          <div
            style={{
              fontSize: "18px",
              color: "#802938",
              fontWeight: 600,
              fontFamily: "monospace",
            }}
          >
            github.com/aarush0008x
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
