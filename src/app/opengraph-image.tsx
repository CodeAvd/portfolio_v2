import { ImageResponse } from "next/og";

export const alt = "Grigorii portfolio cover image";
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
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px 58px",
          background:
            "linear-gradient(180deg, #fbf8f3 0%, #f4efe8 100%)",
          color: "#16171a",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 18% 18%, rgba(139, 183, 188, 0.24), transparent 24%), radial-gradient(circle at 84% 22%, rgba(214, 169, 141, 0.2), transparent 28%)",
          }}
        />

        <div
          style={{
            display: "flex",
            position: "relative",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#7e837f",
          }}
        >
          <span>Grigorii</span>
          <span>Hybrid operator / builder</span>
        </div>

        <div
          style={{
            display: "flex",
            position: "relative",
            maxWidth: 880,
            fontSize: 96,
            lineHeight: 0.95,
            fontWeight: 700,
            letterSpacing: "-0.07em",
          }}
        >
          Support signals become calmer systems and better product decisions.
        </div>

        <div
          style={{
            display: "flex",
            position: "relative",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              maxWidth: 700,
              fontSize: 32,
              lineHeight: 1.35,
              color: "#54585f",
            }}
          >
            Support systems, feedback intelligence, and product-facing execution
            packaged as public case studies.
          </div>

          <div
            style={{
              display: "flex",
              width: 210,
              height: 210,
              borderRadius: "999px",
              background:
                "radial-gradient(circle at 30% 30%, rgba(255, 249, 243, 0.92), rgba(255, 249, 243, 0.12) 34%, transparent 58%), linear-gradient(135deg, rgba(122, 187, 191, 0.95), rgba(255, 231, 207, 0.92), rgba(214, 169, 141, 0.92))",
              boxShadow:
                "0 0 80px rgba(122, 187, 191, 0.18), 0 0 120px rgba(226, 179, 147, 0.22)",
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
