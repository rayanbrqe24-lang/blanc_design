"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV = [
  { label: "Studio", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Journal", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        solid ? "bg-void/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-4 md:px-12">
        <Link href="/" data-cursor className="flex items-center gap-3">
          <Image
            src="/logo/blanc-icon.png"
            alt="Blanc Design"
            width={32}
            height={51}
            className="h-8 w-auto brightness-0 invert"
            priority
          />
          <span className="font-display text-sm tracking-widest2 text-cloud">
            BLANC
          </span>
        </Link>

        <nav className="hidden gap-10 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-cursor
              className="eyebrow text-cloud/70 transition-colors duration-300 hover:text-clay"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          data-cursor
          className="hidden rounded-full bg-cloud px-6 py-2.5 text-sm font-medium text-ink transition-transform duration-300 ease-signature hover:scale-105 md:block"
        >
          Book a Consultation
        </Link>

        <button
          data-cursor
          onClick={() => setOpen((v) => !v)}
          className="eyebrow text-cloud md:hidden"
          aria-label="Toggle menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-6 bg-void px-6 pb-10 pt-4 md:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display text-2xl text-cloud"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 inline-block w-fit rounded-full bg-cloud px-6 py-2.5 text-sm font-medium text-ink"
          >
            Book a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
