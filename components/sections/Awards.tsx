import Reveal from "@/components/layout/Reveal";

const AWARDS = [
  { year: "2024", name: "Iraq Architecture Prize", category: "Residential" },
  { year: "2023", name: "MEA Design Awards", category: "Hospitality Interior" },
  { year: "2022", name: "Kurdistan Design Forum", category: "Emerging Studio" },
];

export default function Awards() {
  return (
    <section className="bg-ink px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow text-ember">Recognition</p>
        </Reveal>
        <div className="mt-12 divide-y divide-cloud/10 border-t border-cloud/10">
          {AWARDS.map((a, i) => (
            <Reveal key={a.name} delay={i * 80}>
              <div className="flex flex-col justify-between gap-2 py-6 text-cloud md:flex-row md:items-center">
                <span className="font-display text-xl md:text-2xl">{a.name}</span>
                <span className="text-sm text-cloud/50">{a.category}</span>
                <span className="text-sm text-cloud/50">{a.year}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
