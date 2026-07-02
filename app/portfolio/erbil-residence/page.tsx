import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/layout/Reveal";

export const metadata: Metadata = {
  title: "Erbil Residence",
  description:
    "A full residential interior by Blanc Design in Erbil — living spaces, bedroom, kitchen, and a custom walk-in closet with display island.",
};

const GALLERY = [
  { src: "/images/project-1/kitchen-01.jpg", alt: "Kitchen and dining bar" },
  { src: "/images/project-1/kitchen-02.jpg", alt: "Kitchen cabinetry detail" },
  { src: "/images/project-1/kitchen-03.jpg", alt: "Kitchen sink and marble backsplash" },
  { src: "/images/project-1/bedroom.jpg", alt: "Primary bedroom" },
  { src: "/images/project-1/closet-01.jpg", alt: "Walk-in closet, shoe wall" },
  { src: "/images/project-1/closet-02.jpg", alt: "Closet island with jewelry display" },
  { src: "/images/project-1/closet-03.jpg", alt: "Closet display cabinetry" },
  { src: "/images/project-1/living-room-detail.jpg", alt: "Living room seating detail" },
];

const INFO = [
  { label: "Client", value: "Private residence" },
  { label: "Location", value: "Erbil, Iraq" },
  { label: "Scope", value: "Full interior design" },
  { label: "Year", value: "2024" },
];

export default function ErbilResidencePage() {
  return (
    <main className="pt-24">
      <section className="relative h-[85vh] w-full overflow-hidden bg-void">
        <Image
          src="/images/project-1/living-room.jpg"
          alt="Erbil Residence living room"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/10 to-void/40" />
        <div className="absolute bottom-0 left-0 w-full px-6 pb-16 md:px-12 md:pb-20">
          <Reveal>
            <p className="eyebrow text-clay">Residential Interior — Erbil</p>
            <h1 className="mt-6 font-display text-5xl tracking-tightest text-cloud md:text-7xl">
              Erbil Residence
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid gap-10 border-b border-ink/10 pb-16 md:grid-cols-4">
            {INFO.map((item, i) => (
              <Reveal key={item.label} delay={i * 80}>
                <p className="eyebrow text-ink/50">{item.label}</p>
                <p className="mt-2 font-display text-xl text-ink">{item.value}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <p className="mt-16 max-w-2xl text-lg leading-relaxed text-graphite/70">
              A full interior fit-out for a private residence in Erbil —
              warm, tactile living spaces built around a neutral palette of
              boucle, oak, and marble, a serene primary bedroom, a
              marble-backed kitchen, and a custom walk-in closet with a
              glass-topped display island for jewelry and accessories.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper px-6 pb-28 md:px-12 md:pb-40">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {GALLERY.map((img, i) => (
            <Reveal key={img.src} delay={(i % 6) * 70}>
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-signature hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-void px-6 py-20 text-cloud md:px-12 md:py-28">
        <div className="mx-auto max-w-[1600px]">
          <Reveal>
            <p className="eyebrow text-clay">Next Project</p>
            <Link
              href="/portfolio"
              data-cursor
              className="mt-4 block font-display text-3xl tracking-tightest transition-transform duration-500 ease-signature hover:translate-x-3 md:text-5xl"
            >
              View all work →
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
