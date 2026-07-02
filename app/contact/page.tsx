"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/layout/Reveal";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire this up to your form endpoint (Resend, Formspree, or a Next.js API route).
    setSent(true);
  };

  return (
    <main className="pt-24">
      <section className="relative flex h-[50vh] items-end overflow-hidden bg-void">
        <div className="absolute inset-0">
          <Image
            src="/images/project-1/closet-03.jpg"
            alt="Blanc Design contact"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-void/50" />
        <div className="relative z-10 px-6 pb-16 md:px-12">
          <Reveal>
            <p className="eyebrow text-clay">Get in Touch</p>
            <h1 className="mt-6 font-display text-5xl tracking-tightest text-cloud md:text-6xl">
              Contact
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper px-6 py-28 md:px-12 md:py-40">
        <div className="mx-auto grid max-w-[1600px] gap-16 md:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-ink/60">Start a Project</p>
            <h2 className="mt-6 font-display text-3xl tracking-tightest text-ink md:text-4xl">
              Tell us what you&apos;re building.
            </h2>

            {sent ? (
              <p className="mt-10 text-lg text-graphite/70">
                Thanks — we&apos;ll be in touch shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div>
                  <label className="eyebrow text-ink/50" htmlFor="name">Name</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-lg text-ink outline-none transition-colors focus:border-ember"
                  />
                </div>
                <div>
                  <label className="eyebrow text-ink/50" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-lg text-ink outline-none transition-colors focus:border-ember"
                  />
                </div>
                <div>
                  <label className="eyebrow text-ink/50" htmlFor="message">Project</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-2 w-full resize-none border-b border-ink/20 bg-transparent py-3 text-lg text-ink outline-none transition-colors focus:border-ember"
                  />
                </div>
                <button
                  type="submit"
                  data-cursor
                  className="eyebrow border border-ink px-8 py-4 text-ink transition-colors duration-300 hover:border-ember hover:text-ember"
                >
                  Send message
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={150}>
            <div className="space-y-10">
              <div>
                <p className="eyebrow text-ink/50">Office</p>
                <p className="mt-2 text-lg text-graphite/70">Erbil, Iraq</p>
              </div>
              <div>
                <p className="eyebrow text-ink/50">Email</p>
                <p className="mt-2 text-lg text-graphite/70">hello@blancdesign.studio</p>
              </div>
              <div>
                <p className="eyebrow text-ink/50">Phone / WhatsApp</p>
                <p className="mt-2 text-lg text-graphite/70">+964 750 000 0000</p>
              </div>
              <div className="relative aspect-video w-full overflow-hidden bg-ink/10">
                {/* Swap for an embedded Google Map iframe with your office coordinates */}
                <div className="flex h-full items-center justify-center">
                  <span className="eyebrow text-ink/30">Map</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
