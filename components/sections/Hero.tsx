"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.4, defaults: { ease: "power3.out" } });
    tl.fromTo(headlineRef.current, { opacity: 0, y: 28 }, { opacity: 1, y: 0, duration: 1.1 })
      .fromTo(subRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.6")
      .fromTo(ctaRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
      .fromTo(cueRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, "-=0.3");

    // Slow ambient Ken Burns drift on the hero image.
    gsap.fromTo(
      imgWrapRef.current,
      { scale: 1.15 },
      { scale: 1, duration: 10, ease: "power1.out" }
    );

    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, -rect.top / (rect.height * 0.9)));
      gsap.to(imgWrapRef.current, {
        yPercent: progress * 16,
        scale: 1 + progress * 0.06,
        duration: 0.2,
        overwrite: true,
      });
      gsap.to(cueRef.current, { opacity: 1 - progress * 3, duration: 0.2 });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      tl.kill();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative h-[150vh] bg-void">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div ref={imgWrapRef} className="absolute inset-0">
          <Image
            src="/images/project-1/living-room.jpg"
            alt="Blanc Design — living room interior, Erbil"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* Warm dark vignette — top-heavy, matching a cinematic interior-photo hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-void/80 via-void/20 to-void/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-void/60 via-transparent to-transparent" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center md:px-12">
          <h1
            ref={headlineRef}
            className="max-w-4xl font-body text-5xl font-semibold leading-[1.05] tracking-tight text-cloud md:text-7xl"
          >
            We are experts
            <br />
            shaping how you live
          </h1>

          <p ref={subRef} className="mt-8 max-w-xl text-base leading-relaxed text-cloud/75 md:text-lg">
            Elevate your space with architecture and interiors built to a
            luxury standard — designed, managed, and manufactured by one
            studio in Erbil, from first sketch to finished joinery.
          </p>

          <div ref={ctaRef} className="mt-10">
            <Link
              href="/contact"
              data-cursor
              className="inline-block rounded-full bg-cloud px-8 py-4 text-sm font-medium text-ink transition-transform duration-300 ease-signature hover:scale-105"
            >
              Book a Consultation
            </Link>
          </div>
        </div>

        <div
          ref={cueRef}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-cloud/60"
        >
          <span className="eyebrow">Scroll</span>
        </div>
      </div>
    </section>
  );
}
