import Reveal from "@/components/layout/Reveal";

export default function InteriorDesign() {
  return (
    <section className="bg-void px-6 py-28 text-cloud md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-12 md:grid-cols-2 md:items-center">
        <Reveal>
          <p className="eyebrow text-ember">Interiors</p>
          <h2 className="mt-6 font-display text-4xl tracking-tightest md:text-5xl">
            Interiors built by the same hands that build the shell.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-lg leading-relaxed text-cloud/60">
            Because Blanc manufactures its own furniture and joinery, interior
            design isn&apos;t an add-on — it&apos;s planned alongside the
            architecture from day one. Material palettes, lighting, and
            custom pieces are resolved together, not stitched on afterward.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
