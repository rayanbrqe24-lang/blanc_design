import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-void px-6 pt-24 pb-10 text-cloud md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-16 border-b border-cloud/10 pb-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo/blanc-wordmark.png"
              alt="Blanc Design"
              width={220}
              height={51}
              className="mb-8 h-8 w-auto brightness-0 invert opacity-90"
            />
            <p className="font-display text-3xl tracking-tightest md:text-4xl">
              Let&apos;s design
              <br />
              what lasts.
            </p>
            <Link
              href="/contact"
              data-cursor
              className="eyebrow mt-8 inline-block border-b border-clay pb-1 text-clay"
            >
              Start a project
            </Link>
          </div>

          <div>
            <p className="eyebrow text-white/40">Studio</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Erbil, Iraq</li>
              <li>Founded 2020</li>
              <li>Manufacturing since 2012</li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/40">Sitemap</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li><Link href="/about">Studio</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/blog">Journal</Link></li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-white/40">Connect</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>hello@blancdesign.studio</li>
              <li>+964 750 000 0000</li>
              <li>Instagram</li>
              <li>WhatsApp</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-8 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Blanc Design. All rights reserved.</p>
          <p>Architecture &amp; Interior Design — Erbil, Iraq</p>
        </div>
      </div>
    </footer>
  );
}
