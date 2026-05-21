"use client";

import { motion } from "framer-motion";
import { Icon } from "./ui/Icon";
import { PhotoSlot } from "./ui/PhotoSlot";
import { RevealText } from "./ui/RevealText";
import { photos } from "@/lib/photos";

export function Captain() {
  return (
    <section id="captain" className="relative bg-navy text-cream py-24 md:py-36 overflow-hidden grain">
      {/* subtle topographic SVG backdrop */}
      <svg
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="topo" width="160" height="160" patternUnits="userSpaceOnUse">
            <path d="M0 80 Q40 40 80 80 T160 80" stroke="#F5C24A" strokeWidth="0.8" fill="none" />
            <path d="M0 120 Q40 80 80 120 T160 120" stroke="#F5C24A" strokeWidth="0.6" fill="none" />
            <path d="M0 40 Q40 0 80 40 T160 40" stroke="#F5C24A" strokeWidth="0.6" fill="none" />
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#topo)" />
      </svg>

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="eyebrow eyebrow-light">Your captain</div>
          <RevealText
            as="h2"
            className="display text-[44px] md:text-6xl lg:text-7xl text-cream mt-5"
          >
            {"Meet Captain Jonathan."}
          </RevealText>

          <p className="mt-6 text-[17px] leading-[1.6] text-cream/75 max-w-[500px]">
            Aqua Tiki is run by Lisa &amp; Chasady out of Margarita Jack&rsquo;s
            Marina, with USCG-licensed Captain Jonathan at the helm. You bring
            the people; we handle the rest &mdash; safety brief, a cooler stocked
            with beer &amp; wine, the perfect anchor spot for sunset, and your
            playlist on the aux. BYOB welcome.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-y-6 gap-x-8 max-w-md">
            <div className="flex items-start gap-3">
              <Icon name="anchor" className="h-5 w-5 text-gold mt-1" />
              <div>
                <div className="mono text-[11px] uppercase tracking-[0.22em] text-cream/55">
                  Fleet
                </div>
                <div className="text-[15px] mt-1">Two Suntracker pontoons</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="heart" className="h-5 w-5 text-hibiscus mt-1" />
              <div>
                <div className="mono text-[11px] uppercase tracking-[0.22em] text-cream/55">
                  Home port
                </div>
                <div className="text-[15px] mt-1">Margarita Jack&rsquo;s</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="sparkle" className="h-5 w-5 text-teal mt-1" />
              <div>
                <div className="mono text-[11px] uppercase tracking-[0.22em] text-cream/55">
                  Safety
                </div>
                <div className="text-[15px] mt-1">USCG licensed · 6 max</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Icon name="drink" className="h-5 w-5 text-gold mt-1" />
              <div>
                <div className="mono text-[11px] uppercase tracking-[0.22em] text-cream/55">
                  Aboard
                </div>
                <div className="text-[15px] mt-1">Beer &amp; wine cooler · BYOB</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <a href="#book" className="btn-coral">
              Book with Jonathan <Icon name="arrow-right" className="h-4 w-4" />
            </a>
            <a href="#cruises" className="text-cream/80 link-underline text-[14px]">
              See cruises
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[5/6] max-w-[520px] mx-auto rounded-[28px] overflow-hidden shadow-[0_50px_120px_-20px_rgba(0,0,0,0.5)]"
          >
            <PhotoSlot
              src={photos.captain.src}
              alt={photos.captain.alt}
              fallbackVariant={3}
              fallbackLabel="captain · hayesville"
              className="absolute inset-0"
            />
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="absolute -top-6 -left-2 md:left-4 bg-gold text-navy rounded-full px-5 py-3 flex items-center gap-2 shadow-[0_20px_40px_-10px_rgba(245,194,74,0.6)]"
          >
            <Icon name="star" className="h-4 w-4" />
            <span className="mono text-[11px] uppercase tracking-[0.18em] font-semibold">
              5.0 on Google
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
