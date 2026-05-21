"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RevealText } from "./ui/RevealText";
import { Icon } from "./ui/Icon";

interface QA {
  q: string;
  a: string;
}

// Answers reflect the owner questionnaire — keep facts accurate.
const FAQS: QA[] = [
  {
    q: "Where do we meet, and where do I park?",
    a: "All cruises launch from Margarita Jack's Marina in Hayesville, NC. There's free parking right at the marina — we'll text you the exact slip and a pin the morning of your cruise. Plan to arrive 10 minutes early so we can do the safety brief and push off on time.",
  },
  {
    q: "How many people fit on each boat?",
    a: "Up to 6 guests per cruise — that's the USCG limit on both of our Suntracker pontoons. We have two boats in the fleet, so larger groups can sometimes split across both. Ask about it when you book.",
  },
  {
    q: "What if it rains?",
    a: "Mother Nature calls an audible, we reschedule on us — no deposit lost, no fees, no questions. We watch the forecast all morning and reach out by 9 AM if we need to move your time. Light cloud cover is actually our favorite weather for a cruise.",
  },
  {
    q: "Can we bring our own beer, wine, food, or decorations?",
    a: "Yes, BYOB welcome — beer and wine especially. We also keep a stocked cooler aboard so you don't have to lug anything. Snacks are encouraged. Decorations (banners, leis, party hats) are welcome for celebrations — bring 'em and we'll help hang them.",
  },
  {
    q: "Is it family-friendly? Christian-friendly?",
    a: "Both, absolutely. Kids ride free on the Family Day cruise, and the whole vibe is laid-back Southern hospitality — Margaritaville energy, not bro-y. We've hosted grandparents with grandkids and bachelorette parties on back-to-back cruises.",
  },
  {
    q: "Can we play our own music?",
    a: "Please do. Aux cord and Bluetooth both work — bring your sunset playlist or your bachelorette anthem, and we'll set the vibe. Captain Jonathan has a backup playlist ready if you forget yours.",
  },
  {
    q: "How far in advance should I book?",
    a: "Weekends in peak season (June–August) book out 2–3 weeks ahead. Weekdays and the shoulder season (April–May, September–November) you can often grab a slot a few days out. Sunset cruises go fastest — book those first.",
  },
  {
    q: "What should we bring and wear?",
    a: "Sunglasses, sunscreen, soft-soled shoes (no heels — they ding the deck), a light layer for after sunset, and your drinks. We've got shade onboard and a cooler ready. Cameras encouraged — golden hour on Lake Chatuge is unreal.",
  },
  {
    q: "Do you do bachelorettes, birthdays, anniversaries, proposals?",
    a: "Constantly — it's most of what we do. Bachelorettes, milestone birthdays, anniversaries, even a few engagements aboard. The Private Party cruise is built for celebrations (3 hours, $450, up to 6 guests). Want a custom touch? Pick Custom Charter and we'll plan it with you.",
  },
  {
    q: "How does payment work? Are tips expected?",
    a: "$50 deposit secures your date (goes toward the cruise), with the balance due before we leave the dock. 10% off when you pay in cash. Tips for Captain Jonathan are always appreciated — never required.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  // Schema.org FAQPage JSON-LD for SEO rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section
      id="faq"
      className="relative bg-cream-2 py-24 md:py-32 overflow-hidden"
    >
      {/* JSON-LD for Google rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow">FAQ</div>
            <RevealText
              as="h2"
              className="display text-[44px] md:text-6xl lg:text-7xl text-navy mt-5"
            >
              {"Questions, answered."}
            </RevealText>
          </div>
          <p className="text-[16px] text-ink/70 max-w-[400px]">
            The stuff everyone wants to know before booking. Got a question we
            haven&rsquo;t covered?{" "}
            <a
              href="sms:+18453047516"
              className="link-underline text-hib-d font-medium"
            >
              Text us at 845-304-7516
            </a>{" "}
            — we answer same-day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4 md:gap-x-6">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, amount: 0.3 }}
                className={`rounded-3xl border transition-colors duration-300 ${
                  isOpen
                    ? "bg-white border-navy/[0.12]"
                    : "bg-white/60 border-navy/[0.07] hover:bg-white hover:border-navy/[0.12]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left p-5 md:p-6 flex items-start gap-4 group"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="flex-1 display text-[20px] md:text-[22px] leading-[1.25] text-navy">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 mt-1 h-8 w-8 rounded-full border flex items-center justify-center transition-all duration-400 ${
                      isOpen
                        ? "bg-hibiscus border-hibiscus text-cream rotate-45"
                        : "border-navy/20 text-navy/60 group-hover:border-navy/40"
                    }`}
                    aria-hidden
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M6 1V11M1 6H11"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.3, delay: isOpen ? 0.06 : 0 },
                      }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-5 pb-6 md:px-6 md:pb-7 -mt-2 pr-12">
                        <p className="text-[15px] md:text-[16px] leading-[1.6] text-ink/75">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 px-6 py-5 rounded-full bg-white border border-navy/[0.08] shadow-[0_20px_60px_-20px_rgba(14,42,69,0.18)]">
            <Icon name="anchor" className="h-5 w-5 text-gold" />
            <span className="display text-[20px] md:text-[22px] text-navy">
              Still got questions?
            </span>
            <span className="text-ink/70 text-[14.5px]">
              Captain Jonathan is one tap away.
            </span>
            <a
              href="sms:+18453047516"
              className="btn-coral text-[13px] !py-2.5 !px-5"
            >
              Text us <Icon name="arrow-right" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
