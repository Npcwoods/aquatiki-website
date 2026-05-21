"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { PhotoSlot } from "./ui/PhotoSlot";
import { RevealText } from "./ui/RevealText";
import { Icon } from "./ui/Icon";
import { photos } from "@/lib/photos";

const STATS = [
  { label: "Acres", value: "7,050" },
  { label: "Miles of shoreline", value: "132" },
  { label: "Mountain peaks visible", value: "12" },
  { label: "Best sunset months", value: "Apr–Nov" },
];

const GALLERY = [
  { src: "/photos/lake-sunset-jon.jpg", alt: "Sunset over Lake Chatuge", label: "golden hour" },
  { src: "/photos/lake-sunburst.jpg", alt: "Mid-day sunburst on Lake Chatuge", label: "wide open" },
  { src: "/photos/lake-brasstown.jpg", alt: "Lake Chatuge toward Brasstown Bald", label: "brasstown bald" },
  { src: "/photos/lake-mountains.jpg", alt: "Blue Ridge mountains over Lake Chatuge", label: "blue ridge" },
];

export function Lake() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const photoY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <section
      id="lake"
      ref={ref}
      className="relative bg-cream py-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="eyebrow">The Lake</div>
          <RevealText
            as="h2"
            className="display text-[44px] md:text-6xl lg:text-7xl text-navy mt-5"
          >
            {"A 7,050 acre mountain lake, all to yourself."}
          </RevealText>

          <p className="mt-6 text-[17px] leading-[1.6] text-ink/70 max-w-[460px]">
            Lake Chatuge sits where North Carolina meets Georgia in the southern Blue
            Ridge — clear water, quiet coves, and the kind of golden hour that makes
            you forget what day it is. We&rsquo;ve got the only tiki boat on it.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
            {STATS.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <div className="display text-4xl md:text-5xl text-navy">
                  {s.value}
                </div>
                <div className="mono text-[11px] uppercase tracking-[0.22em] text-muted mt-2">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-3 text-navy/70">
            <Icon name="compass" className="h-5 w-5 text-teal-d" />
            <span className="mono text-[11px] uppercase tracking-[0.22em]">
              35.0410° N, 83.7732° W
            </span>
          </div>
        </div>

        <div className="lg:col-span-7 relative">
          <motion.div
            style={{ y: photoY, scale: photoScale }}
            className="relative aspect-[4/5] md:aspect-[16/11] rounded-[28px] overflow-hidden shadow-[0_50px_120px_-30px_rgba(14,42,69,0.45)]"
          >
            <PhotoSlot
              src={photos.lakeWide.src}
              alt={photos.lakeWide.alt}
              fallbackVariant={1}
              fallbackLabel="lake chatuge · evening"
              className="absolute inset-0"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(14,42,69,0) 0%, rgba(14,42,69,0.55) 100%)",
              }}
            />
            <span className="absolute left-6 bottom-5 mono text-[10px] uppercase tracking-[0.22em] text-cream/85">
              ◐ Chatuge Dam · NC/GA line
            </span>
          </motion.div>

          {/* 4-photo gallery strip below the hero photo */}
          <div className="mt-5 grid grid-cols-4 gap-3 md:gap-4">
            {GALLERY.map((p, i) => (
              <motion.figure
                key={p.src}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(14,42,69,0.35)] cursor-pointer"
              >
                <PhotoSlot
                  src={p.src}
                  alt={p.alt}
                  fallbackVariant={(i % 6) as 0 | 1 | 2 | 3 | 4 | 5}
                  fallbackLabel={p.label}
                  className="absolute inset-0"
                  imgClassName="transition-transform duration-[1200ms] group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(14,42,69,0) 50%, rgba(14,42,69,0.7) 100%)",
                  }}
                />
                <figcaption className="absolute left-3 bottom-2.5 mono text-[9px] uppercase tracking-[0.2em] text-cream/90">
                  {p.label}
                </figcaption>
              </motion.figure>
            ))}
          </div>

          {/* Floating caption pill */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="absolute -left-3 md:-left-6 top-[42%] max-w-[240px] bg-cream rounded-2xl p-5 shadow-[0_24px_60px_-15px_rgba(14,42,69,0.35)] border border-navy/[0.06] hidden md:block"
          >
            <div className="script text-3xl text-hibiscus leading-none">on the water</div>
            <p className="mt-2 text-[13px] text-ink/75 leading-relaxed">
              Sunrise glass, golden-hour glow, and Blue Ridge silhouettes &mdash;
              all from your seat at the tiki bar.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
