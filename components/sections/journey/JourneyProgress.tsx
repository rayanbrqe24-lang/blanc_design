"use client";

import { useEffect, useState } from "react";
import { rooms } from "./roomsData";

// A quiet chapter-marker rail, fixed to the right edge — reinforces that
// this is one continuous presentation, not a stack of unrelated sections.
export default function JourneyProgress() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-journey-scene]"));
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-room");
            const idx = rooms.findIndex((r) => r.id === id);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 md:flex">
      {rooms.map((room, i) => (
        <div key={room.id} className="flex items-center gap-3">
          <span
            className={`font-journeyBody text-[10px] uppercase tracking-widest2 text-cloud transition-opacity duration-500 ${
              i === active ? "opacity-70" : "opacity-0"
            }`}
          >
            {room.label}
          </span>
          <span
            className={`block rounded-full transition-all duration-500 ${
              i === active ? "h-2 w-2 bg-clay" : "h-1 w-1 bg-cloud/40"
            }`}
          />
        </div>
      ))}
    </div>
  );
}
