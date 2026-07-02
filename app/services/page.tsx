import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/layout/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Architecture, interior design, landscape design, construction management, and custom furniture — Blanc Design's full studio capability, Erbil, Iraq.",
};

const SERVICES = [
  { n: "01", title: "Architecture Design", copy: "Residential, hospitality, and commercial buildings designed from site and brief, not template." },
  { n: "02", title: "Interior Design", copy: "Spatial and material planning carried through from architecture into every finished room." },
  { n: "03", title: "Landscape Design", copy: "Outdoor spaces considered as part of the building, not an afterthought around it." },
  { n: "04", title: "Villa Design", copy: "Private residences designed around how a specific family actually lives." },
  { n: "05", title: "Commercial Design", copy: "Retail, office, and mixed-use spaces built to perform as well as they look." },
  { n: "06", title: "Hospitality", copy: "Guest-facing spaces — hotels, restaurants, lounges — designed for atmosphere and durability." },
  { n: "07", title: "Construction Management", copy: "Our own team manages the build, keeping design intent intact through every phase." },
  { n: "08", title: "Furniture Design", copy: "Bespoke pieces manufactured in-house, matched to the room they're designed for." },
  { n: "09", title: "Visualization", copy: "Photoreal renders and walkthroughs used to test decisions before they're built." },
  { n: "10", title: "3D Rendering", copy: "Detailed material and lighting studies produced for every major design decision." },
  { n: "11", title: "Master Planning", copy: "Multi-building and site-scale planning for larger residential and commercial developments." },
  { n: "12", title: "Consultation", copy: "Early-stage advice on feasibility, budget, and design direction before a project is committed." },
];

export default function ServicesPage() {
  return (
    <main className="pt-24">
      <section className="relative flex h-[60vh] items-end overflow-hidden bg-void">
        <div className="absolute inset-0">
          <Image
            src="/images/project-1/kitchen-03.jpg"
            alt="Blanc Design service capability, Erbil kitchen"
            fill
            priority
            className="object-cover opacity-70"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-void/50" />
        <div className="relative z-10 px-6 pb-16 md:px-12">
          <Reveal>
            <p className="eyebrow text-clay">What We Do</p>
            <h1 className="mt-6 max-w-2xl font-display text-5xl tracking-tightest text-cloud md:text-6xl">
              Services
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-x-12 gap-y-16 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Reveal key={s.n} delay={(i % 3) * 100} variant="scale">
                <span className="font-display text-sm text-ember">{s.n}</span>
                <h3 className="mt-4 font-display text-2xl text-ink">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-graphite/60">{s.copy}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-24 text-center text-cloud md:px-12 md:py-32">
        <Reveal>
          <p className="eyebrow text-clay">Not sure where to start?</p>
          <h2 className="mt-6 font-display text-3xl tracking-tightest md:text-5xl">
            Book a consultation.
          </h2>
          <Link
            href="/contact"
            data-cursor
            className="eyebrow mt-8 inline-block border border-cloud/30 px-8 py-4 text-cloud transition-colors duration-300 hover:border-clay hover:text-clay"
          >
            Get in touch
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
