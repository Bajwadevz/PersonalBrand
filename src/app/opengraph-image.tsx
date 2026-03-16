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
                    background: "#0D1B2A", // Dark navy ink color
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: "120px",
                }}
            >
                <div style={{ display: "flex", alignItems: "center", marginBottom: "24px" }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        fill="none"
                        width="100"
                        height="100"
                        style={{ marginRight: "32px", display: "flex" }}
                    >
                        <path d="M 10 75 L 90 75 C 75 70 65 60 60 45 C 55 30 65 20 65 20 C 65 20 45 15 30 35 C 15 55 10 75 10 75 Z" fill="#2D6A8F" />
                        <path d="M 10 55 C 20 35 40 15 65 20 C 70 21 75 25 75 30 C 75 35 70 37 65 35 C 60 33 55 38 58 42 C 61 46 65 47 70 45 C 61 60 45 60 35 50 C 25 40 15 50 10 55 Z" fill="#E8F1F8" stroke="#2D6A8F" strokeWidth="2.5" strokeLinejoin="round" />
                        <path d="M 35 32 C 45 25 55 25 60 30" stroke="#2D6A8F" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M 30 50 C 35 60 45 70 55 70" stroke="#E8F1F8" strokeWidth="2.5" strokeLinecap="round" />
                        <path d="M 20 65 C 25 70 30 72 35 72" stroke="#E8F1F8" strokeWidth="2.5" strokeLinecap="round" />
                        <circle cx="50" cy="10" r="2.5" fill="#2D6A8F" />
                        <circle cx="65" cy="5" r="2" fill="#2D6A8F" />
                        <circle cx="80" cy="15" r="3" fill="#2D6A8F" />
                        <circle cx="75" cy="38" r="1.5" fill="#2D6A8F" />
                        <circle cx="45" cy="38" r="1.5" fill="#E8F1F8" />
                    </svg>
                    <div
                        style={{
                            fontSize: 96,
                            fontWeight: 800,
                            letterSpacing: "-0.05em",
                            color: "#FFFFFF",
                            lineHeight: 1,
                            fontFamily: "system-ui, sans-serif"
                        }}
                    >
                        Bajwaa Dev
                    </div>
                </div>
                <div
                    style={{
                        fontSize: 48,
                        fontWeight: 500,
                        color: "#E8F1F8",
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
