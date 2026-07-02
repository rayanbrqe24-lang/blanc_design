import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Cursor from "@/components/layout/Cursor";
import Preloader from "@/components/layout/Preloader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const siteUrl = "https://blancdesign.studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Blanc Design — Architecture & Interior Design Studio, Erbil",
    template: "%s — Blanc Design",
  },
  description:
    "Blanc Design is an Erbil-based architecture and interior design studio crafting luxury villas, hospitality, and commercial spaces across Iraq, manufacturing custom furniture since 2012.",
  keywords: [
    "Architecture Erbil",
    "Architecture Iraq",
    "Interior Design Erbil",
    "Interior Design Iraq",
    "Luxury Villa Design",
    "Commercial Architecture",
    "Residential Architecture",
    "Modern Architecture",
    "Custom Furniture Erbil",
    "Architecture Studio",
    "Luxury Interior Design",
    "Blanc Design",
  ],
  openGraph: {
    title: "Blanc Design — Architecture & Interior Design Studio, Erbil",
    description:
      "Luxury architecture, interior design, and custom furniture — designed and manufactured in Erbil, Iraq since 2012.",
    url: siteUrl,
    siteName: "Blanc Design",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blanc Design — Architecture & Interior Design Studio, Erbil",
    description:
      "Luxury architecture, interior design, and custom furniture — designed and manufactured in Erbil, Iraq since 2012.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ArchitectureFirm",
  name: "Blanc Design",
  foundingDate: "2020",
  url: siteUrl,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Erbil",
    addressCountry: "IQ",
  },
  description:
    "Luxury architecture and interior design studio based in Erbil, Iraq, manufacturing custom furniture since 2012.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-paper text-graphite font-body">
        <Preloader />
        <div className="noise" aria-hidden="true" />
        <Cursor />
        <SmoothScroll>
          <Header />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
