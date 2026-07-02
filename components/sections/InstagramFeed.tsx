import Image from "next/image";
import Reveal from "@/components/layout/Reveal";

const SHOTS = [
  "/images/project-1/living-room.jpg",
  "/images/project-1/kitchen-01.jpg",
  "/images/project-1/bedroom.jpg",
  "/images/project-1/closet-01.jpg",
  "/images/project-1/kitchen-02.jpg",
  "/images/project-1/closet-03.jpg",
];

export default function InstagramFeed() {
  return (
    <section className="bg-paper px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow text-ink/60">@blancdesign.studio</p>
        </Reveal>
        <div className="mt-8 grid grid-cols-3 gap-3 md:grid-cols-6">
          {SHOTS.map((src, i) => (
            <Reveal key={src} delay={i * 50}>
              <div className="relative aspect-square w-full overflow-hidden">
                <Image src={src} alt="Blanc Design on Instagram" fill className="object-cover" sizes="16vw" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
