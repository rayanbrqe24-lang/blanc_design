import Reveal from "@/components/layout/Reveal";

const PRINCIPLES = [
  { title: "Material first", copy: "Design decisions start with what a thing is made of." },
  { title: "One team", copy: "Design and construction stay under one roof, start to finish." },
  { title: "Nothing off the shelf", copy: "Furniture, fittings, and finishes are made for the room they sit in." },
];

export default function Philosophy() {
  return (
    <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow text-ember">Design Philosophy</p>
        </Reveal>
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.title} delay={i * 100} variant="blur">
              <h3 className="font-display text-2xl text-ink">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-graphite/60">{p.copy}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
