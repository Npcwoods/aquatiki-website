"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./ui/Icon";

/**
 * Sticky Book / Text / Call floating bar — mobile only.
 * Appears once the user scrolls past the hero so it doesn't compete with the
 * hero CTAs. Hidden on md+ since the desktop nav already has Book CTA.
 */
export function StickyMobileBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const past = window.scrollY > 520;
      // Hide when we're in the booking section itself — no point duplicating
      const bookEl = document.getElementById("book");
      const inBook = bookEl
        ? bookEl.getBoundingClientRect().top < window.innerHeight - 100
        : false;
      setVisible(past && !inBook);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden fixed inset-x-0 bottom-0 z-50 pointer-events-none"
          style={{
            paddingBottom: "calc(env(safe-area-inset-bottom, 0px) + 10px)",
          }}
        >
          <div className="mx-3 pointer-events-auto">
            <div
              className="flex items-stretch gap-2 p-2 rounded-full bg-navy/95 backdrop-blur-xl border border-cream/15"
              style={{
                boxShadow:
                  "0 20px 60px -10px rgba(14,42,69,0.55), 0 1px 0 rgba(255,255,255,0.06) inset",
              }}
            >
              <a
                href="tel:+18453047516"
                className="flex-1 flex items-center justify-center gap-2 rounded-full text-cream/90 hover:text-cream py-3 transition-colors"
                aria-label="Call Aqua Tiki"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                <span className="text-[13px] font-medium">Call</span>
              </a>

              <span className="w-px self-stretch bg-cream/15" aria-hidden />

              <a
                href="sms:+18453047516"
                className="flex-1 flex items-center justify-center gap-2 rounded-full text-cream/90 hover:text-cream py-3 transition-colors"
                aria-label="Text Aqua Tiki"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5Z" />
                </svg>
                <span className="text-[13px] font-medium">Text</span>
              </a>

              <a
                href="#book"
                className="flex-[1.4] flex items-center justify-center gap-1.5 rounded-full bg-hibiscus text-cream py-3 font-semibold text-[13px] hover:bg-hib-d transition-colors shadow-[0_8px_24px_-6px_rgba(232,75,92,0.65)]"
              >
                Book a cruise
                <Icon name="arrow-right" className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
