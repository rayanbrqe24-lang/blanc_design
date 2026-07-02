import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/layout/Reveal";
import ProjectTimeline from "@/components/sections/ProjectTimeline";
import Awards from "@/components/sections/Awards";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "The story of Blanc Design — an Erbil architecture and interior design studio built from a furniture workshop founded in 2012.",
};

const VALUES = [
  { title: "Material first", copy: "Design decisions start with what a thing is made of, not how it photographs." },
  { title: "One team", copy: "Design and construction stay under one roof, start to finish — no handoffs, no diluted intent." },
  { title: "Nothing off the shelf", copy: "Furniture, fittings, and finishes are made for the room they sit in, not selected from a catalogue." },
];

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative flex h-[70vh] items-end overflow-hidden bg-void">
        <div className="absolute inset-0">
          <Image
            src="/images/project-1/closet-01.jpg"
            alt="Blanc Design studio craftsmanship, Erbil"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-void/50" />
        <div className="relative z-10 px-6 pb-20 md:px-12">
          <Reveal>
            <p className="eyebrow text-clay">Studio</p>
            <h1 className="mt-6 max-w-3xl font-display text-5xl tracking-tightest text-cloud md:text-7xl">
              Twelve years of making, four of building.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-ink/60">Our Story</p>
            <h2 className="mt-6 font-display text-3xl tracking-tightest text-ink md:text-4xl">
              A workshop before it was a studio.
            </h2>
          </Reveal>
          <Reveal delay={150}>
            <p className="text-lg leading-relaxed text-graphite/70">
              Blanc Design opened as a joinery workshop in Erbil in 2012,
              producing custom furniture for homes across the city long
              before it took on its first building. In 2020, that hands-on
              foundation became an architecture and interior design
              practice — one that still designs the way it once built
              furniture: considering the material, the joint, and the
              finish before the form.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-graphite/70">
              The studio now works across residential, hospitality, and
              commercial projects throughout Iraq, managing construction
              and manufacturing in-house so nothing is lost between the
              drawing and the finished room.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-void px-6 py-28 text-cloud md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-[1fr_1.4fr] md:items-center">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/project-1/bedroom.jpg"
                alt="Founder's residential work, Erbil"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <p className="eyebrow text-clay">Founder</p>
            <h2 className="mt-6 font-display text-3xl tracking-tightest md:text-4xl">
              Started at a workbench, still thinks like one.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cloud/60">
              Blanc Design was founded by a craftsman who moved from making
              furniture to designing the rooms it sits in — carrying a
              maker&apos;s instinct for material and proportion into every
              scale of project the studio now takes on.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow text-ink/60">Vision, Mission, Values</p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl tracking-tightest text-ink md:text-5xl">
              What doesn&apos;t change from project to project.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <h3 className="font-display text-2xl text-ink">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite/60">{v.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProjectTimeline />
      <Awards />

      {/* Office gallery */}
      <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow text-ink/60">The Workshop</p>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
            {[
              { src: "/images/project-1/kitchen-02.jpg", alt: "Workshop detail" },
              { src: "/images/project-1/closet-02.jpg", alt: "Materials island" },
              { src: "/images/project-1/kitchen-03.jpg", alt: "Fabrication detail" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 100}>
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="33vw" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
