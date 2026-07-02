import Reveal from "@/components/layout/Reveal";

export default function Testimonials() {
  return (
    <section className="bg-void px-6 py-28 text-cloud md:px-12 md:py-40">
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="font-display text-3xl leading-snug tracking-tightest md:text-4xl">
            &quot;Blanc treated our home like a piece of furniture — every
            joint considered, nothing left generic.&quot;
          </p>
        </Reveal>
        <Reveal delay={150}>
          <p className="eyebrow mt-8 text-cloud/50">
            Client, Erbil Residence
          </p>
        </Reveal>
      </div>
    </section>
  );
}
