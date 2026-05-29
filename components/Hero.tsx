"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Magnetic } from "./ui/Magnetic";
import { Icon } from "./ui/Icon";
import { PhotoSlot } from "./ui/PhotoSlot";
import { RevealText } from "./ui/RevealText";
import { photos } from "@/lib/photos";

const HeroShader = dynamic(() => import("./HeroShader").then((m) => m.HeroShader), {
  ssr: false,
});

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-navy">
      {/* Real sunset photo as the hero background */}
      <div className="absolute inset-0">
        <img
          src={photos.heroBoat.src}
          alt={photos.heroBoat.alt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ animation: "drift 24s ease-in-out infinite" }}
        />
      </div>

      {/* WebGL sunset shader layered on top with screen blend for extra glow */}
      <div className="absolute inset-0 mix-blend-soft-light opacity-50 pointer-events-none">
        <HeroShader />
      </div>

      {/* gradient scrim for legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,42,69,0.55) 0%, rgba(14,42,69,0.15) 30%, rgba(14,42,69,0) 60%, rgba(14,42,69,0.4) 100%), linear-gradient(90deg, rgba(14,42,69,0.45) 0%, rgba(14,42,69,0.1) 50%, rgba(14,42,69,0) 100%)",
        }}
        aria-hidden
      />

      {/* content */}
      <div className="relative z-10 min-h-[100svh] flex flex-col">
        <div className="flex-1 mx-auto max-w-[1400px] w-full px-6 md:px-10 pt-28 md:pt-36 pb-16 grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 xl:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow eyebrow-light"
            >
              Lake Chatuge · Hayesville, NC
            </motion.div>

            <RevealText
              as="h1"
              className="display text-[44px] sm:text-[60px] md:text-[76px] lg:text-[88px] xl:text-[104px] text-cream mt-5"
              by="word"
              stagger={0.08}
              immediate
            >
              {"Sunset on the lake, served daily."}
            </RevealText>

            {/* italic accent overlay rendered separately for proper italic on "Sunset" */}
            {/* (Achieved via styled span below — keep heading text plain) */}

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-[520px] text-[17px] md:text-[19px] text-cream/85 leading-[1.55]"
            >
              Two tiki pontoons. USCG-approved captains. $150 an hour, up to
              six guests, BYOB welcome. Two hours of laid-back lake therapy
              &mdash; golden hour included.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Magnetic>
                <a href="#book" className="btn-coral">
                  Book a cruise
                  <Icon name="arrow-right" className="h-4 w-4" />
                </a>
              </Magnetic>
              <Magnetic strength={0.25}>
                <a href="#cruises" className="btn-ghost text-cream">
                  See cruises
                  <Icon name="play" className="h-3.5 w-3.5" />
                </a>
              </Magnetic>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.1 }}
              className="mt-14 flex items-center gap-6 text-cream/70"
            >
              <div className="flex items-center gap-2">
                <Icon name="anchor" className="h-4 w-4 text-gold" />
                <span className="mono text-[11px] uppercase tracking-[0.22em]">USCG Licensed</span>
              </div>
              <div className="h-3 w-px bg-cream/30" />
              <div className="flex items-center gap-2">
                <Icon name="star" className="h-3 w-3 text-gold" />
                <span className="mono text-[11px] uppercase tracking-[0.22em]">Guest Ready</span>
              </div>
              <div className="hidden sm:block h-3 w-px bg-cream/30" />
              <div className="hidden sm:flex items-center gap-2">
                <Icon name="sun" className="h-4 w-4 text-gold" />
                <span className="mono text-[11px] uppercase tracking-[0.22em]">April–November</span>
              </div>
            </motion.div>
          </div>

          {/* Photo pair on the right — two clean layered photos */}
          <div className="lg:col-span-5 xl:col-span-5 relative hidden lg:block">
            <div className="relative h-[560px]">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-0 top-0 w-[72%] aspect-[4/5] rounded-[28px] overflow-hidden shadow-[0_50px_120px_-25px_rgba(14,42,69,0.65)] float-slow"
                style={{ animationDelay: "1.2s" }}
              >
                <PhotoSlot
                  src={photos.heroGuests.src}
                  alt={photos.heroGuests.alt}
                  fallbackVariant={0}
                  fallbackLabel="guests · aqua tiki"
                  className="h-full w-full"
                  priority
                />
                <div
                  className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(14,42,69,0) 0%, rgba(14,42,69,0.5) 100%)",
                  }}
                />
                <span className="absolute left-5 bottom-4 mono text-[10px] uppercase tracking-[0.22em] text-cream/85">
                  ◐ Lake Chatuge · Hayesville
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: -4 }}
                transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 bottom-2 w-[52%] aspect-[5/4] rounded-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(14,42,69,0.6)] ring-4 ring-cream/15 float-slow"
                style={{ animationDelay: "0.4s" }}
              >
                <PhotoSlot
                  src={photos.heroDeck.src}
                  alt={photos.heroDeck.alt}
                  fallbackVariant={4}
                  fallbackLabel="bamboo · brass · light"
                  className="h-full w-full"
                  priority
                />
              </motion.div>

              {/* Small handwritten flourish */}
              <motion.div
                initial={{ opacity: 0, rotate: -12, scale: 0.9 }}
                animate={{ opacity: 1, rotate: -8, scale: 1 }}
                transition={{ delay: 1.4, duration: 0.9 }}
                className="absolute right-2 top-[58%] flex items-center gap-2 text-gold z-20"
              >
                <span className="script text-3xl leading-none">yes please</span>
                <svg width="42" height="22" viewBox="0 0 42 22" fill="none" aria-hidden>
                  <path
                    d="M1 11 C 9 1, 22 21, 41 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom hairline meta */}
        <div className="relative z-10 border-t border-cream/15 backdrop-blur-[2px]">
          <div className="mx-auto max-w-[1400px] px-6 md:px-10 py-5 flex items-center justify-between gap-3 text-cream/80 text-[12px] tracking-wide">
            <div className="mono uppercase tracking-[0.18em] sm:tracking-[0.22em] text-[10px] sm:text-[12px]">EST. 2024 · Hayesville, NC</div>
            <div className="hidden md:flex items-center gap-2">
              <Icon name="wave" className="h-4 w-4 text-teal" />
              <span>7,050 acres of Smoky Mountain lake</span>
            </div>
            <a href="#cruises" className="shrink-0 flex items-center gap-2 group">
              <span className="hidden sm:inline mono uppercase tracking-[0.22em] text-[11px]">Scroll</span>
              <span
                className="inline-block h-9 w-9 rounded-full border border-cream/30 flex items-center justify-center transition-transform group-hover:translate-y-1"
              >
                <svg width="12" height="14" viewBox="0 0 12 14" fill="none" aria-hidden>
                  <path d="M6 1V13M1 8L6 13L11 8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
