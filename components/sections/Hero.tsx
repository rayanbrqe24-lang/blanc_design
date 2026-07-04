"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import gsap from "gsap";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const scrollProgress = useRef(0);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);
  const veilRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Theatrical entrance: dark veil pulls back, headline scales + blurs in,
    // subhead and CTA follow staggered — a full staged sequence rather than
    // a single fade.
    const tl = gsap.timeline({ delay: 0.3, defaults: { ease: "power3.out" } });
    tl.fromTo(veilRef.current, { opacity: 1 }, { opacity: 0, duration: 1.4, ease: "power2.inOut" })
      .fromTo(
        headlineRef.current,
        { opacity: 0, scale: 1.15, filter: "blur(14px)", y: 20 },
        { opacity: 1, scale: 1, filter: "blur(0px)", y: 0, duration: 1.3 },
        "-=1.1"
      )
      .fromTo(subRef.current, { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.7")
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 14, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.6)" },
        "-=0.5"
      )
      .fromTo(cueRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.3");

    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / (rect.height * 0.9)));
      scrollProgress.current = progress;
      gsap.to(cueRef.current, { opacity: 1 - progress * 3, duration: 0.2 });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      tl.kill();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[160vh] bg-void">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <HeroScene scrollProgress={scrollProgress} />
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/10 to-void/70" />

        <div ref={veilRef} className="pointer-events-none absolute inset-0 z-20 bg-void" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center md:px-12">
          <h1
            ref={headlineRef}
            className="max-w-4xl font-journeyDisplay text-5xl italic leading-[1.05] tracking-tight text-cloud md:text-7xl"
          >
            Designing
            <br />
            Timeless Living
          </h1>

          <p ref={subRef} className="mt-8 max-w-xl font-journeyBody text-base leading-relaxed text-cloud/75 md:text-lg">
            Elevate your space with architecture and interiors built to a
            luxury standard — designed, managed, and manufactured by one
            studio in Erbil, from first sketch to finished joinery.
          </p>

          <div ref={ctaRef} className="mt-10">
            <Link
              href="#exterior"
              data-cursor
              className="inline-block rounded-full bg-cloud px-8 py-4 text-sm font-medium text-ink transition-transform duration-300 ease-signature hover:scale-105"
            >
              Explore Projects
            </Link>
          </div>
        </div>

        <div ref={cueRef} className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cloud/60">
          <span className="eyebrow">Scroll</span>
        </div>
      </div>
    </section>
  );
}
