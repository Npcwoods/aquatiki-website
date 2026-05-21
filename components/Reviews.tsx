"use client";

import { motion } from "framer-motion";
import { Icon } from "./ui/Icon";
import { RevealText } from "./ui/RevealText";

// TODO(chris): replace with real Google reviews once you have 3-5
const REVIEWS = [
  {
    quote:
      "Best birthday I&rsquo;ve ever had. Captain knew exactly where to anchor for sunset and the drinks kept coming. We&rsquo;re already planning the next one.",
    name: "Megan R.",
    detail: "Birthday cruise · Hayesville",
    accent: "#F5C24A",
  },
  {
    quote:
      "Felt like a real vacation in two hours. Crystal-clear water, mountains everywhere, and Jimmy Buffett on the speakers. Cannot recommend enough.",
    name: "Daniel L.",
    detail: "Sunset cruise · 4 guests",
    accent: "#E84B5C",
  },
  {
    quote:
      "We rented for our 10-year anniversary. The captain had a chilled bottle waiting and gave us total privacy. Tearing up just thinking about it.",
    name: "Sarah K.",
    detail: "Date-night float · 2 guests",
    accent: "#3CB6CB",
  },
  {
    quote:
      "The bachelorette of the decade. They decorated, played our playlist, and made sure everyone was safe. Lake Chatuge is gorgeous.",
    name: "Aubrey P.",
    detail: "Bachelorette · 10 guests",
    accent: "#1F6B3C",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative bg-cream py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow">Reviews</div>
            <RevealText
              as="h2"
              className="display text-[44px] md:text-6xl lg:text-7xl text-navy mt-5"
            >
              {"What guests say when they get home."}
            </RevealText>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Icon key={i} name="star" className="h-5 w-5 text-gold" />
              ))}
            </div>
            <div className="text-[14px] text-ink/70">
              5.0 · <span className="mono uppercase tracking-wider text-[11px]">verified google</span>
            </div>
          </div>
        </div>
      </div>

      {/* horizontal scroll deck */}
      <div className="relative">
        <div
          className="flex gap-5 md:gap-7 overflow-x-auto px-6 md:px-10 lg:px-[max(2.5rem,calc((100vw-1400px)/2+2.5rem))] pb-8 snap-x snap-mandatory scroll-px-6"
          style={{ scrollbarWidth: "thin" }}
        >
          {REVIEWS.map((r, i) => (
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
                  dangerouslySetInnerHTML={{ __html: r.quote }}
                />
              </div>
              <figcaption className="mt-8 flex items-center justify-between">
                <div>
                  <div className="font-medium text-[15px]">{r.name}</div>
                  <div
                    className="mono text-[11px] uppercase tracking-[0.22em] mt-1"
                    style={{ color: i === 0 ? "rgba(250,245,232,0.55)" : "#6B6F76" }}
                  >
                    {r.detail}
                  </div>
                </div>
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((j) => (
                    <Icon key={j} name="star" className="h-3.5 w-3.5" />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
          <div className="snap-start shrink-0 w-[60vw] sm:w-[300px] flex items-center justify-center pr-6">
            <a
              href="https://www.google.com/maps/search/aqua+tiki+lake+chatuge"
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col items-center text-center text-navy"
            >
              <div className="h-20 w-20 rounded-full border border-navy/20 flex items-center justify-center group-hover:bg-navy group-hover:text-cream transition-all duration-500">
                <Icon name="arrow-right" className="h-6 w-6" />
              </div>
              <div className="mt-4 display text-xl">Read all reviews</div>
              <div className="mono text-[11px] uppercase tracking-[0.22em] text-muted mt-1">
                on google
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
