import Link from "next/link";
import Reveal from "@/components/layout/Reveal";

export default function ContactCTA() {
  return (
    <section className="bg-ink px-6 py-32 text-center text-cloud md:px-12 md:py-44">
      <div className="mx-auto max-w-3xl">
        <Reveal variant="scale">
          <p className="eyebrow text-ember">Start a Project</p>
          <h2 className="mt-6 font-display text-4xl tracking-tightest md:text-6xl">
            Tell us what you&apos;re building.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <Link
            href="/contact"
            data-cursor
            className="eyebrow mt-10 inline-block border border-cloud/30 px-8 py-4 text-cloud transition-colors duration-300 hover:border-ember hover:text-ember"
          >
            Book a consultation
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
