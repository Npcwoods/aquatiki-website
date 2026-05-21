"use client";

import { useEffect, useRef } from "react";
import { HibiscusOrnament } from "./ui/Icon";

const PHRASES = [
  "Fun",
  "Unique",
  "Unforgettable",
  "Relax",
  "Cruise",
  "Make Memories",
  "Sunset Therapy",
  "Lake Chatuge",
  "BYOB Welcome",
  "USCG Licensed",
];

export function Marquee() {
  const innerRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const lastYRef = useRef(0);
  const velRef = useRef(0);

  useEffect(() => {
    let rafId = 0;
    function tick() {
      const dy = window.scrollY - lastYRef.current;
      lastYRef.current = window.scrollY;
      // base drift + scroll velocity boost
      const base = 0.35;
      const boost = dy * 0.6;
      velRef.current = velRef.current * 0.86 + boost * 0.14;
      offsetRef.current -= base + velRef.current;
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
        if (Math.abs(offsetRef.current) >= innerRef.current.scrollWidth / 2) {
          offsetRef.current = 0;
        }
      }
      rafId = requestAnimationFrame(tick);
    }
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const items = [...PHRASES, ...PHRASES, ...PHRASES];

  return (
    <section className="relative bg-navy text-cream py-8 md:py-10 border-y border-cream/10 overflow-hidden">
      <div ref={innerRef} className="flex whitespace-nowrap will-change-transform">
        {items.map((p, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className="display text-5xl md:text-7xl px-8 md:px-12"
              style={{ color: i % 3 === 0 ? "#F5C24A" : i % 3 === 1 ? "#FAF5E8" : "#3CB6CB" }}
            >
              <em>{p}</em>
            </span>
            <HibiscusOrnament className="h-5 w-5 text-hibiscus shrink-0" />
          </span>
        ))}
      </div>
    </section>
  );
}
