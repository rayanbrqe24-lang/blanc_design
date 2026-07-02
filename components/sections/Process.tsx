import Reveal from "@/components/layout/Reveal";

const STEPS = [
  { n: "01", title: "Brief & Site", copy: "Reading the site, the client, and the constraints before drawing anything." },
  { n: "02", title: "Concept", copy: "Massing studies and material direction, tested against light and context." },
  { n: "03", title: "Design Development", copy: "Drawings resolved to buildable detail, in step with our own workshop." },
  { n: "04", title: "Construction", copy: "Managed in-house, from groundwork through the final fit-out." },
];

export default function Process() {
  return (
    <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow text-ember">How We Work</p>
          <h2 className="mt-6 max-w-2xl font-display text-4xl tracking-tightest text-ink md:text-6xl">
            Architecture Process
          </h2>
        </Reveal>

        <div className="mt-20 grid gap-10 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <span className="font-display text-sm text-ember">{s.n}</span>
              <h3 className="mt-4 font-display text-xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite/60">{s.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
