# Aqua Tiki — Lake Chatuge Tiki Boat Cruises

Awwwards-tier marketing site for Aqua Tiki, a USCG-licensed tiki boat on Lake Chatuge in Hayesville, NC.

**Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4 · GSAP · Lenis · Three.js / R3F · Framer Motion

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Drop in real photos

The site reads from `public/photos/`. Drop JPEGs with these exact names — the rest is automatic:

| Filename                       | Where it shows                                |
| ------------------------------ | --------------------------------------------- |
| `hero-boat-sunset.jpg`         | Hero background (full bleed) + cruise tiles   |
| `hero-deck-detail.jpg`         | Hero collage (bottom left card)               |
| `hero-guests.jpg`              | Hero collage (top right card)                 |
| `lake-chatuge-wide.jpg`        | The Lake section                              |
| `cruise-sunset.jpg`            | Sunset Cruise bento tile                      |
| `cruise-party.jpg`             | Private Party bento tile                      |
| `cruise-date.jpg`              | Date Night Float bento tile                   |
| `cruise-bachelorette.jpg`      | Bachelorette bento tile                       |
| `cruise-family.jpg`            | Family Day bento tile                         |
| `cruise-custom.jpg`            | Custom Charter bento tile                     |
| `captain.jpg`                  | Captain section portrait                      |

Suggested sizes: hero ~2400×1600, others ~1600×1200, < 400KB each. If a photo is missing, the slot renders a brand-color gradient mesh — no broken layout.

## Open TODOs

Search the codebase for `TODO(chris):` to find what needs real info:

- Confirm final pricing per cruise tier
- Add real public review links once ratings are live
- Set `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel and attach it to `aquatikicruise@outlook.com`
- Replace request forms with FareHarbor / Peek Pro / etc. if the owner adopts a booking platform
- Marina slip address and phone number

## Easter egg

Press `T-I-K-I` anywhere on the page.

## Deploy

```bash
vercel --prod
```

Point `aquatiki.net` at the Vercel deployment when DNS is ready.

## Component map

```
app/
  layout.tsx        — fonts, metadata, Lenis provider, TIKI easter egg
  page.tsx          — section composition
  globals.css       — Tailwind v4 + brand tokens + animations

components/
  Nav.tsx           — fixed, scroll-aware, magnetic CTA
  Hero.tsx          — full-bleed sunset photo + WebGL overlay + 2-photo collage
  HeroShader.tsx    — R3F sunset shader (soft-light blended)
  Marquee.tsx       — scroll-velocity strip
  Lake.tsx          — sticky stats + parallax photo
  CruiseBento.tsx   — 6 asymmetric tiles, 3D tilt on hover
  Captain.tsx       — crew/safety pocket + topographic backdrop
  Reviews.tsx       — horizontal-scroll deck
  VibeQuiz.tsx      — 3-step interactive recommendation
  BookingForm.tsx   — form + stylized marina map
  Footer.tsx        — animated wave separator
  TikiEasterEgg.tsx — keypress hibiscus burst
  ui/
    Icon.tsx        — custom SVG icon set (no emoji)
    PhotoSlot.tsx   — img with gradient-mesh fallback
    RevealText.tsx  — word-by-word entrance
    Magnetic.tsx    — cursor-attracted hover

lib/
  photos.ts         — photo manifest
```
