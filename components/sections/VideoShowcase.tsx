"use client";

import { useRef, useState } from "react";
import Reveal from "@/components/layout/Reveal";

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (playing) {
      v.pause();
    } else {
      v.play();
    }
    setPlaying(!playing);
  };

  return (
    <section className="relative h-[70vh] w-full overflow-hidden bg-void md:h-[90vh]">
      {/* Replace src with a real studio reel export */}
      <video
        ref={videoRef}
        className="h-full w-full object-cover opacity-60"
        muted
        loop
        playsInline
        poster=""
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 bg-void/30">
        <Reveal>
          <p className="eyebrow text-cloud/70">Studio Reel</p>
        </Reveal>
        <Reveal delay={100}>
          <button
            onClick={toggle}
            data-cursor
            className="flex h-20 w-20 items-center justify-center rounded-full border border-cloud/40 text-cloud transition-colors duration-300 hover:border-ember hover:text-ember"
            aria-label={playing ? "Pause reel" : "Play reel"}
          >
            {playing ? "Pause" : "Play"}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
