# Blanc Design — Full Site

Next.js 15 (App Router) + React 19 + TypeScript + Tailwind CSS. GSAP for
reveals, Lenis for smooth scroll, your real logo and project photography
throughout, olive/sage brand palette.

**Verified build** — `npm install`, `tsc --noEmit`, and `next build` all
pass clean, 8 static pages generated. Not a mockup.

## Pages

- `/` — homepage (hero, about, stats, clients, featured projects, process,
  interiors, construction/furniture, timeline, video, gallery,
  testimonials, awards, philosophy, articles, instagram, contact CTA)
- `/about` — studio story, founder, values, timeline, awards, workshop gallery
- `/services` — all 12 service capabilities
- `/portfolio` — project grid
- `/portfolio/erbil-residence` — full project detail page with your real photos
- `/blog` — journal listing
- `/contact` — working form (client-side only — see below), office info

## What's real vs. placeholder

**Real:**
- Your logo (`public/logo/`) — extracted into icon-only, wordmark-only, and
  full lockup versions, used in header, footer, and preloader.
- Your 10 uploaded photos (`public/images/project-1/`), compressed for web
  (were 5–16MB each, now ~250–700KB), used as the actual hero image, About
  section, homepage gallery, Instagram strip, journal thumbnails, and the
  full Erbil Residence project page.
- Brand colors — Tailwind tokens in `tailwind.config.ts` now map to your
  five hex values (`#434834`, `#767A60`, `#A5AA89`, `#C9BEA5`, `#E9E2D2`).

**Still placeholder:**
- Nokan/Sami/Rezan portfolio cards — no photos for these yet, so they show
  as "Coming soon" placeholders. Send photos and I'll build their pages the
  same way as Erbil Residence.
- Contact form only sets local state (`setSent(true)`) — it doesn't send
  anywhere yet. Wire it to a Next.js API route + Resend, or a service like
  Formspree.
- Map on `/contact` is an empty placeholder — swap for a Google Maps embed
  with your office coordinates.
- Awards, timeline milestones, and testimonial copy are still placeholder
  text in the studio's voice, not verified real data.

## Design system

| Token | Hex | Role |
|---|---|---|
| `ink` | `#434834` | primary / structural, light-section headings |
| `ember` | `#767A60` | accent (kept the name, recolored to moss) |
| `void` | `#363B2B` | dark section backgrounds |
| `paper` | `#E9E2D2` | light section background |
| `sage` | `#A5AA89` | supporting mid-tone |
| `clay` | `#C9BEA5` | supporting warm neutral, used for accent text on dark |
| `cloud` | `#E9E2D2` | text on dark backgrounds |

The original abstract 3D hero (offset stacked slabs, React Three Fiber) is
still in the codebase at `components/sections/HeroScene.tsx`, recolored to
match — just not wired into the homepage anymore, since your real
photography is stronger than primitive-geometry 3D. Happy to bring it back
as an accent somewhere (e.g. a "design process" section) if you want it.

## Run it

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
```

## Deploy

```bash
npm i -g vercel
vercel
```

Or connect the GitHub repo at vercel.com/new — auto-detects Next.js, zero config.

## Next steps

1. Send photos for the other 3 portfolio projects (Nokan, Sami, Rezan) so
   they get real detail pages instead of "Coming soon."
2. Wire the contact form to actually send (API route + Resend is the
   simplest path given you already use Resend on UniQo).
3. Add the Google Maps embed for the office location.
4. Replace placeholder awards/testimonial copy with real data.
5. Custom domain once you're ready to move off the `.vercel.app` URL.
