import { Fraunces, Inter, Cormorant_Garamond, Manrope } from "next/font/google";

// Fraunces — an elegant, editorial display serif with real optical-size
// variation, self-hosted at build time (no runtime CDN call, so it renders
// correctly regardless of network conditions).
export const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Inter — a clean, highly legible professional sans for body text and UI.
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

// Cormorant Garamond — the room-journey headings on the new cinematic Home
// page use this instead of Fraunces, per the brand's presentation-style spec.
export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-journey-display",
  display: "swap",
});

// Manrope — body copy for the room-journey scenes.
export const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-journey-body",
  display: "swap",
});
