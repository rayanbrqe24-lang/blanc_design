import Reveal from "@/components/layout/Reveal";

const PROJECTS = [
  { title: "Erbil Residence", type: "Residential", year: "2024", loc: "Erbil", href: "/portfolio/erbil-residence" },
  { title: "Nokan Hospitality House", type: "Hospitality", year: "2023", loc: "Duhok", href: "/portfolio" },
  { title: "Sami Commercial Tower", type: "Commercial", year: "2024", loc: "Erbil", href: "/portfolio" },
  { title: "Rezan Residence", type: "Residential", year: "2022", loc: "Erbil", href: "/portfolio" },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <p className="eyebrow text-ember">Selected Work</p>
            <h2 className="mt-6 max-w-2xl font-display text-4xl tracking-tightest text-ink md:text-6xl">
              Featured Projects
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <a href="/portfolio" data-cursor className="eyebrow border-b border-ink pb-1 text-ink">
              View all work
            </a>
          </Reveal>
        </div>

        <div className="mt-20 divide-y divide-ink/10 border-t border-ink/10">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <a
                href={p.href}
                data-cursor
                className="group grid grid-cols-[auto_1fr_auto_auto] items-center gap-6 py-8 md:py-10"
              >
                <span className="font-display text-sm text-ink/40">0{i + 1}</span>
                <span className="font-display text-2xl text-ink transition-transform duration-500 ease-signature group-hover:translate-x-3 md:text-4xl">
                  {p.title}
                </span>
                <span className="hidden text-sm text-ink/50 md:block">{p.type}</span>
                <span className="text-sm text-ink/50">{p.loc} — {p.year}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
