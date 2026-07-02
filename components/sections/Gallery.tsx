import Image from "next/image";
import Reveal from "@/components/layout/Reveal";

const PHOTOS = [
  { src: "/images/project-1/living-room.jpg", alt: "Living room, Erbil residence", big: true },
  { src: "/images/project-1/kitchen-01.jpg", alt: "Kitchen, Erbil residence" },
  { src: "/images/project-1/bedroom.jpg", alt: "Bedroom, Erbil residence" },
  { src: "/images/project-1/closet-01.jpg", alt: "Walk-in closet, Erbil residence" },
  { src: "/images/project-1/kitchen-02.jpg", alt: "Kitchen detail, Erbil residence" },
  { src: "/images/project-1/closet-02.jpg", alt: "Jewelry island, Erbil residence" },
  { src: "/images/project-1/living-room-detail.jpg", alt: "Living room detail, Erbil residence" },
  { src: "/images/project-1/closet-03.jpg", alt: "Closet display, Erbil residence" },
];

export default function Gallery() {
  return (
    <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="eyebrow text-ink/60">Gallery</p>
          <h2 className="mt-4 font-display text-3xl tracking-tightest text-ink md:text-5xl">
            Erbil Residence — full walkthrough
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {PHOTOS.map((p, i) => (
            <Reveal
              key={p.src}
              delay={i * 60}
              className={p.big ? "col-span-2 row-span-2" : ""}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  p.big ? "aspect-square" : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-signature hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
