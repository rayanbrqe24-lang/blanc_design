import Reveal from "@/components/layout/Reveal";

const MILESTONES = [
  { year: "2012", copy: "Joinery workshop opens in Erbil." },
  { year: "2020", copy: "Blanc Design founded as an architecture practice." },
  { year: "2022", copy: "First hospitality project completed in Duhok." },
  { year: "2024", copy: "120+ projects delivered across Iraq." },
];

export default function ProjectTimeline() {
  return (
    <section className="bg-ink px-6 py-28 text-cloud md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow text-ember">Timeline</p>
        </Reveal>
        <div className="mt-16 grid gap-10 border-t border-cloud/10 pt-10 md:grid-cols-4">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.year} delay={i * 100}>
              <span className="font-display text-2xl text-ember">{m.year}</span>
              <p className="mt-3 text-sm leading-relaxed text-cloud/60">{m.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
