"use client";

import { motion } from "framer-motion";
import { Icon } from "./ui/Icon";
import { RevealText } from "./ui/RevealText";

const GUEST_NOTES = [
  {
    note:
      "Birthdays, anniversaries, and bachelorettes feel effortless when the whole boat is yours.",
    label: "Private parties",
    detail: "Decor, music, cooler, and lake time",
    accent: "#F5C24A",
  },
  {
    note:
      "Sunset cruises are built around golden-hour views, relaxed pacing, and that first deep exhale on the water.",
    label: "Golden hour",
    detail: "Two-hour signature cruise",
    accent: "#E84B5C",
  },
  {
    note:
      "Small groups get the same full-boat experience: playlist on, drinks cold, and the crew handling the route.",
    label: "Date-night floats",
    detail: "Easy, private, and scenic",
    accent: "#3CB6CB",
  },
  {
    note:
      "Family cruises keep the vibe calm and comfortable with shade, life jackets, and plenty of mountain-lake views.",
    label: "Family days",
    detail: "Kid-friendly lake memories",
    accent: "#1F6B3C",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative bg-cream py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow">Guest notes</div>
            <RevealText
              as="h2"
              className="display text-[44px] md:text-6xl lg:text-7xl text-navy mt-5"
            >
              {"What your cruise can feel like."}
            </RevealText>
          </div>
          <div className="text-[14px] text-ink/70 max-w-sm md:text-right">
            Real review links will go here after the first public ratings are live.
          </div>
        </div>
      </div>

      {/* horizontal scroll deck */}
      <div className="relative">
        <div
          className="flex gap-5 md:gap-7 overflow-x-auto px-6 md:px-10 lg:px-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))] pb-8 snap-x snap-mandatory scroll-px-6"
          style={{ scrollbarWidth: "thin" }}
        >
          {GUEST_NOTES.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.3 }}
              className="snap-start shrink-0 w-[85vw] sm:w-[460px] md:w-[520px] rounded-[28px] p-8 md:p-10 flex flex-col justify-between min-h-[360px] border border-navy/[0.08]"
              style={{
                background: i === 0
                  ? "linear-gradient(160deg, #15375A, #0E2A45)"
                  : "#FFFFFF",
                color: i === 0 ? "#FAF5E8" : "#15171A",
                boxShadow: "0 30px 70px -30px rgba(14,42,69,0.3)",
              }}
            >
              <div>
                <svg width="40" height="32" viewBox="0 0 40 32" fill="none" aria-hidden>
                  <path
                    d="M0 32V20.8C0 14.4 1.6 9.3 4.8 5.4C8 1.6 12.8 0 19.2 0V8C16 8 13.6 8.8 12 10.4C10.4 12 9.6 14.1 9.6 16.8H16V32H0ZM23.2 32V20.8C23.2 14.4 24.8 9.3 28 5.4C31.2 1.6 36 0 42.4 0V8C39.2 8 36.8 8.8 35.2 10.4C33.6 12 32.8 14.1 32.8 16.8H39.2V32H23.2Z"
                    fill={r.accent}
                    opacity="0.85"
                  />
                </svg>
                <blockquote
                  className="display italic text-[22px] md:text-[26px] leading-[1.25] mt-6"
                  dangerouslySetInnerHTML={{ __html: r.note }}
                />
              </div>
              <figcaption className="mt-8 flex items-center justify-between">
                <div>
                  <div className="font-medium text-[15px]">{r.label}</div>
                  <div
                    className="mono text-[11px] uppercase tracking-[0.22em] mt-1"
                    style={{ color: i === 0 ? "rgba(250,245,232,0.55)" : "#6B6F76" }}
                  >
                    {r.detail}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
          <div className="snap-start shrink-0 w-[60vw] sm:w-[300px] flex items-center justify-center pr-6">
            <a
              href="#book"
              className="group flex flex-col items-center text-center text-navy"
            >
              <div className="h-20 w-20 rounded-full border border-navy/20 flex items-center justify-center group-hover:bg-navy group-hover:text-cream transition-all duration-500">
                <Icon name="arrow-right" className="h-6 w-6" />
              </div>
              <div className="mt-4 display text-xl">Plan your cruise</div>
              <div className="mono text-[11px] uppercase tracking-[0.22em] text-muted mt-1">
                request a time
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
