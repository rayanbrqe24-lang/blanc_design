import Image from "next/image";
import Reveal from "@/components/layout/Reveal";

export default function About() {
  return (
    <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow text-ink/60">The Studio</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-tight tracking-tightest text-ink md:text-6xl">
            Founded in Erbil in 2020, built on twelve years of making things
            by hand.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal delay={150} className="order-2 md:order-1">
            <p className="text-lg leading-relaxed text-graphite/70">
              Blanc Design began as a furniture workshop in 2012, shaping
              wood and joinery long before it drew its first elevation. That
              order — material first, form second — still shapes how the
              studio designs today. Every building is considered from what
              it&apos;s made of, not just what it looks like.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-graphite/70">
              Today the practice spans architecture, interiors, and
              construction management across Iraq — villas, hospitality,
              and commercial work carried by the same in-house team from
              concept to the last cabinet hinge.
            </p>
          </Reveal>
          <Reveal delay={250} className="order-1 md:order-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/project-1/kitchen-01.jpg"
                alt="Blanc Design kitchen interior, Erbil"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
