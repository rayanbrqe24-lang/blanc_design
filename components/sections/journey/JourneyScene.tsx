"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/components/layout/Reveal";
import PlaceholderPanel from "./PlaceholderPanel";
import { RoomIconName } from "./RoomIcon";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export type Room = {
  index: number;
  id: string;
  label: string;
  title: string;
  description: string;
  detail?: string;
  image?: string;
  icon: RoomIconName;
  align: "left" | "right";
  tone?: "ink" | "void" | "ember";
};

export default function JourneyScene({ room }: { room: Room }) {
  const sectionRef = useRef<HTMLElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const imgWrap = imgWrapRef.current;
    if (!section || !imgWrap) return;

    // Slow Ken-Burns drift tied to scroll — the image creeps in a touch
    // as the room enters and settles as it leaves, standing in for a
    // slow camera move through the space.
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgWrap,
        { scale: 1.18, yPercent: -6 },
        {
          scale: 1.02,
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const isRight = room.align === "right";

  return (
    <section
      ref={sectionRef}
      id={room.id}
      data-journey-scene
      data-room={room.id}
      className="relative h-[100svh] w-full overflow-hidden bg-void"
    >
      <div ref={imgWrapRef} className="absolute inset-0 will-change-transform">
        {room.image ? (
          <Image
            src={room.image}
            alt={room.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority={room.index <= 1}
          />
        ) : (
          <PlaceholderPanel icon={room.icon} tone={room.tone} />
        )}
      </div>

      {/* Scrim: darker at the text edge, lighter opposite, dark base for legibility */}
      <div
        className={`absolute inset-0 ${
          isRight
            ? "bg-gradient-to-l from-void/85 via-void/25 to-void/10"
            : "bg-gradient-to-r from-void/85 via-void/25 to-void/10"
        }`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-void/20" />

      <div
        className={`relative z-10 flex h-full w-full flex-col justify-end px-6 pb-20 md:justify-center md:px-16 md:pb-0 ${
          isRight ? "items-start md:items-end md:text-right" : "items-start"
        }`}
      >
        <div className={`max-w-xl ${isRight ? "md:ml-auto" : ""}`}>
          <Reveal variant="blur">
            <span className="eyebrow text-clay">
              {String(room.index).padStart(2, "0")} — {room.label}
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="mt-4 font-journeyDisplay text-4xl italic leading-[1.05] tracking-tight text-cloud md:text-6xl">
              {room.title}
            </h2>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-6 max-w-md font-journeyBody text-sm leading-relaxed text-cloud/75 md:text-base">
              {room.description}
            </p>
          </Reveal>

          {room.detail && (
            <Reveal delay={380}>
              <p className="mt-5 font-journeyBody text-xs uppercase tracking-widest2 text-cloud/45">
                {room.detail}
              </p>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
