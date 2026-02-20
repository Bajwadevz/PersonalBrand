import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Bajwaa Dev - AI. Education. Vibe Coding.";
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
                    background: "linear-gradient(to bottom right, #fdf2f8, #f3e8ff, #e0f2fe)", // Pink to purple to blue pastel gradient
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: "120px",
                }}
            >
                <div
                    style={{
                        fontSize: 96,
                        fontWeight: 800,
                        letterSpacing: "-0.05em",
                        color: "#0f172a", // slate-900 
                        marginBottom: "24px",
                        lineHeight: 1,
                        fontFamily: "system-ui, sans-serif"
                    }}
                >
                    Bajwaa Dev
                </div>
                <div
                    style={{
                        fontSize: 48,
                        fontWeight: 500,
                        color: "#475569", // slate-600
                        letterSpacing: "-0.02em",
                        fontFamily: "system-ui, sans-serif"
                    }}
                >
                    AI. Education. Vibe Coding.
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
