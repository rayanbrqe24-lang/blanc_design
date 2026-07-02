import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/layout/Reveal";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected architecture and interior design projects by Blanc Design — villas, hospitality, and commercial work across Iraq.",
};

const PROJECTS = [
  {
    slug: "erbil-residence",
    title: "Erbil Residence",
    type: "Residential Interior",
    year: "2024",
    loc: "Erbil",
    image: "/images/project-1/living-room.jpg",
    live: true,
  },
  { slug: "", title: "Nokan Hospitality House", type: "Hospitality", year: "2023", loc: "Duhok", image: null, live: false },
  { slug: "", title: "Sami Commercial Tower", type: "Commercial", year: "2024", loc: "Erbil", image: null, live: false },
  { slug: "", title: "Rezan Residence", type: "Residential", year: "2022", loc: "Erbil", image: null, live: false },
];

export default function PortfolioPage() {
  return (
    <main className="pt-24">
      <section className="bg-paper px-6 pt-16 pb-12 md:px-12 md:pt-24 md:pb-16">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow text-ink/60">Selected Work</p>
            <h1 className="mt-6 max-w-2xl font-display text-5xl tracking-tightest text-ink md:text-6xl">
              Portfolio
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper px-6 pb-28 md:px-12 md:pb-40">
        <div className="mx-auto grid max-w-[1600px] gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => {
            const card = (
              <div className="group relative aspect-[4/3] w-full overflow-hidden bg-ink/10">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-signature group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="eyebrow text-ink/30">Coming soon</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-cloud md:p-8">
                  <p className="eyebrow text-clay">{p.type} — {p.loc}, {p.year}</p>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">{p.title}</h3>
                </div>
              </div>
            );
            return (
              <Reveal key={p.title} delay={(i % 2) * 100}>
                {p.live ? (
                  <Link href={`/portfolio/${p.slug}`} data-cursor>
                    {card}
                  </Link>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
