"use client";

import { Icon } from "./ui/Icon";

export function Footer() {
  return (
    <footer className="relative bg-navy text-cream overflow-hidden">
      {/* Animated wave separator on top */}
      <div className="relative h-20 md:h-28 -mt-1 overflow-hidden bg-cream">
        <svg
          viewBox="0 0 1440 120"
          className="absolute inset-x-0 top-0 w-[200%] h-full"
          preserveAspectRatio="none"
          aria-hidden
          style={{ animation: "wave-shift 18s linear infinite" }}
        >
          <path
            d="M0,80 C240,40 480,120 720,80 C960,40 1200,120 1440,80 L1440,120 L0,120 Z"
            fill="#0E2A45"
            opacity="0.95"
          />
          <path
            d="M0,90 C200,50 460,130 720,90 C980,50 1240,130 1440,90 L1440,120 L0,120 Z"
            fill="#15375A"
            opacity="0.85"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 pt-16 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <a href="/#top" className="display text-5xl md:text-6xl leading-none">
              <em style={{ color: "#3CB6CB" }}>aqua</em>
              <span style={{ color: "#F5C24A" }}> tiki</span>
            </a>
            <p className="mt-6 text-cream/70 max-w-sm text-[15px] leading-relaxed">
              Tiki pontoon cruises on Lake Chatuge in Hayesville, NC. Sunsets,
              parties, and good vibes &mdash; April through November. Run by Lisa
              &amp; Chasady out of Margarita Jack&rsquo;s Marina.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="h-10 w-10 rounded-full border border-cream/25 flex items-center justify-center hover:bg-cream hover:text-navy transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="h-10 w-10 rounded-full border border-cream/25 flex items-center justify-center hover:bg-cream hover:text-navy transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 22V12h3l1-4h-4V5.5c0-1.1.5-2 2-2h2V0h-3.5C10 0 9 2 9 4v4H6v4h3v10h4Z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Google"
                className="h-10 w-10 rounded-full border border-cream/25 flex items-center justify-center hover:bg-cream hover:text-navy transition-colors"
              >
                <Icon name="star" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <Col title="Cruises">
            <Link href="/sunset-cruise">Sunset Cruise</Link>
            <Link href="/private-party">Private Party</Link>
            <Link href="/#cruises">Date Night Float</Link>
            <Link href="/#cruises">Bachelorette</Link>
            <Link href="/#cruises">Custom Charter</Link>
          </Col>

          <Col title="Plan">
            <Link href="/gallery">Gallery</Link>
            <Link href="/#lake">The Lake</Link>
            <Link href="/#captain">Captain</Link>
            <Link href="/#reviews">Reviews</Link>
            <Link href="/#book">Book</Link>
          </Col>

          <Col title="Contact">
            <Link href="mailto:Chasadynicole@gmail.com">Chasadynicole@gmail.com</Link>
            <Link href="tel:+18453047516">(845) 304-7516</Link>
            <Link href="#">Margarita Jack&rsquo;s Marina · Hayesville, NC</Link>
          </Col>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[12px] text-cream/55">
          <div className="mono uppercase tracking-[0.22em]">
            © {new Date().getFullYear()} Lakeside Ventures LLC · USCG Licensed · Hayesville, NC
          </div>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="link-underline">Privacy</a>
            <a href="/terms" className="link-underline">Terms</a>
            <a href="/waiver" className="link-underline">Waiver</a>
          </div>
        </div>
      </div>

      {/* Easter-egg hint */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pb-6 text-center">
        <span className="mono text-[10px] uppercase tracking-[0.3em] text-cream/30">
          press T-I-K-I anywhere on the page
        </span>
      </div>
    </footer>
  );
}

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="lg:col-span-2 lg:col-start-auto">
      <div className="mono text-[10.5px] uppercase tracking-[0.22em] text-gold/85 mb-4">
        {title}
      </div>
      <ul className="space-y-2.5 text-[14px] text-cream/80">{children}</ul>
    </div>
  );
}

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <a href={href} className="link-underline">
        {children}
      </a>
    </li>
  );
}
