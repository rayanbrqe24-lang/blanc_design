import Reveal from "@/components/layout/Reveal";

export default function ConstructionServices() {
  return (
    <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-2">
        <Reveal>
          <p className="eyebrow text-ember">Construction Management</p>
          <h3 className="mt-6 font-display text-3xl tracking-tightest text-ink md:text-4xl">
            One team, start to finish.
          </h3>
          <p className="mt-5 text-base leading-relaxed text-graphite/60">
            Blanc manages construction directly rather than handing drawings
            to a third party — keeping design intent intact through every
            phase of build.
          </p>
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow text-ember">Custom Furniture</p>
          <h3 className="mt-6 font-display text-3xl tracking-tightest text-ink md:text-4xl">
            The workshop that started it all.
          </h3>
          <p className="mt-5 text-base leading-relaxed text-graphite/60">
            Since 2012, our joinery workshop has produced bespoke furniture
            for every project — matched to the space it was designed for,
            not selected from a catalogue.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
