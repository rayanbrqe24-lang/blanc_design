import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#434834",     // primary — deep olive
        ember: "#767A60",   // accent — muted moss (replaces prior orange accent role)
        paper: "#E9E2D2",   // light ground — warm sand
        void: "#363B2B",    // dark sections — darkened olive for depth vs. ink
        graphite: "#2A2E22",// body text on light (darker than ink for contrast)
        cloud: "#E9E2D2",   // text/surfaces on dark
        sage: "#A5AA89",    // supporting mid-tone
        clay: "#C9BEA5",    // supporting warm neutral
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.32em",
      },
      transitionTimingFunction: {
        signature: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
