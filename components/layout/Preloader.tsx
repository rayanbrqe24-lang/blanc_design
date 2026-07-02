"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const wordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setDone(true),
    });

    tl.set(wordRef.current, { opacity: 0, y: 24 })
      .to(wordRef.current, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" })
      .to(barRef.current, { scaleX: 1, duration: 1.1, ease: "power2.inOut" }, "-=0.3")
      .to(wordRef.current, { opacity: 0, y: -16, duration: 0.5, ease: "power2.in" }, "+=0.15")
      .to(
        wrapRef.current,
        {
          yPercent: -100,
          duration: 0.9,
          ease: "cubic-bezier(0.76, 0, 0.24, 1)",
        },
        "-=0.1"
      );

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={wrapRef}
      className="fixed inset-0 z-[90] flex flex-col items-center justify-center bg-void text-cloud"
      aria-hidden="true"
    >
      <div ref={wordRef} className="flex flex-col items-center gap-4">
        <Image
          src="/logo/blanc-icon.png"
          alt=""
          width={40}
          height={64}
          className="h-10 w-auto brightness-0 invert"
        />
        <span className="font-display text-sm tracking-widest2">Blanc Design</span>
      </div>
      <div className="mt-6 h-px w-40 bg-cloud/15 overflow-hidden">
        <div
          ref={barRef}
          className="h-full w-full origin-left scale-x-0 bg-ember"
        />
      </div>
    </div>
  );
}
