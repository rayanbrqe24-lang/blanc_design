import { Fraunces, Inter } from "next/font/google";

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
