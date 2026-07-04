import Link from "next/link";
import Reveal from "@/components/layout/Reveal";
import PlaceholderPanel from "./PlaceholderPanel";

// The last "chapter" — a full-bleed, quiet close to the presentation,
// rather than a bolted-on contact block.
export default function JourneyFinalCTA() {
  return (
    <section className="relative flex h-[100svh] w-full items-center justify-center overflow-hidden bg-ink">
      <div className="absolute inset-0 opacity-70">
        <PlaceholderPanel icon="exterior" tone="void" />
      </div>
      <div className="absolute inset-0 bg-ink/60" />

      <div className="relative z-10 mx-auto max-w-2xl px-6 text-center">
        <Reveal variant="blur">
          <span className="eyebrow text-clay">Blanc Design — Erbil</span>
        </Reveal>
        <Reveal delay={140}>
          <h2 className="mt-6 font-journeyDisplay text-4xl italic leading-[1.1] text-cloud md:text-6xl">
            Ready to Build Your
            <br />
            Dream Space?
          </h2>
        </Reveal>
        <Reveal delay={280}>
          <p className="mx-auto mt-6 max-w-md font-journeyBody text-sm leading-relaxed text-cloud/70 md:text-base">
            From first sketch to finished joinery — one studio, one standard,
            start to finish.
          </p>
        </Reveal>
        <Reveal delay={400}>
          <Link
            href="/contact"
            data-cursor
            className="mt-10 inline-block rounded-full bg-cloud px-10 py-4 text-sm font-medium text-ink transition-transform duration-300 ease-signature hover:scale-105"
          >
            Contact Us
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
