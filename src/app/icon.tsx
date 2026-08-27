import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "#1E1E1E",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#F7F6F4",
          fontWeight: 700,
          borderRadius: 8,
          border: "1.5px solid rgba(128, 41, 56, 0.6)",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <span>A</span>
        <div
          style={{
            position: "absolute",
            bottom: 3,
            right: 3,
            width: 5,
            height: 5,
            borderRadius: "50%",
            backgroundColor: "#802938",
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
