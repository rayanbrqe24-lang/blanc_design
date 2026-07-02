import Image from "next/image";
import Reveal from "@/components/layout/Reveal";

const POSTS = [
  { title: "Designing for Erbil's climate", tag: "Process", time: "6 min", image: "/images/project-1/living-room.jpg" },
  { title: "Inside our joinery workshop", tag: "Craft", time: "4 min", image: "/images/project-1/closet-02.jpg" },
  { title: "Erbil Residence: a walkthrough", tag: "Project", time: "5 min", image: "/images/project-1/bedroom.jpg" },
];

export default function Articles() {
  return (
    <section className="bg-void px-6 py-28 text-cloud md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow text-clay">Journal</p>
          <h2 className="mt-6 font-display text-4xl tracking-tightest md:text-5xl">
            Latest Articles
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-10 md:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image src={p.image} alt={p.title} fill className="object-cover" sizes="33vw" />
              </div>
              <p className="eyebrow mt-4 text-clay">{p.tag} — {p.time}</p>
              <h3 className="mt-2 font-display text-xl">{p.title}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
