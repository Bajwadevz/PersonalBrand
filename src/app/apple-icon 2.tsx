import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderRadius: "40px",
                }}
            >
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0f172a",
                    borderRadius: "24px",
                    width: "140px",
                    height: "140px",
                    color: "white"
                }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        width="80"
                        height="80"
                    >
                        <path d="M2 13c2-1.5 3.5-2 5.5-1.5 2.5.5 3.5 1 5 0 1.5-1 3-3.5 5-4.5" />
                        <path d="M7 11.5c1.5-3 4-5.5 7-6 2-.5 4.5.5 6 2" />
                        <path d="M3 18c2-1.5 4-2 6-1.5 2.5.5 4.5 2 7 2 2.5 0 4-1.5 5-2.5" />
                        <circle cx="18" cy="4" r="1.5" fill="currentColor" stroke="none" />
                        <circle cx="14" cy="3" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                </div>
            </div>
        ),
        { ...size }
    );
}
