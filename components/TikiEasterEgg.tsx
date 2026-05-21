"use client";

import { useEffect } from "react";

const SEQUENCE = ["t", "i", "k", "i"];

export function TikiEasterEgg() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let buf: string[] = [];
    function onKey(e: KeyboardEvent) {
      if (!/^[a-zA-Z]$/.test(e.key)) return;
      if (document.activeElement && /(input|textarea|select)/i.test(document.activeElement.tagName)) return;
      buf.push(e.key.toLowerCase());
      if (buf.length > SEQUENCE.length) buf.shift();
      if (buf.join("") === SEQUENCE.join("")) {
        burst();
        buf = [];
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return null;
}

function burst() {
  const layer = document.createElement("div");
  layer.style.cssText = `
    position: fixed; inset: 0; pointer-events: none; z-index: 9999;
    overflow: hidden;
  `;
  document.body.appendChild(layer);

  const count = 36;
  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    const size = 18 + Math.random() * 28;
    const cx = 50 + (Math.random() - 0.5) * 80;
    const cy = 50 + (Math.random() - 0.5) * 80;
    const dur = 1200 + Math.random() * 1400;
    const rot = (Math.random() - 0.5) * 360;
    const colors = ["#E84B5C", "#F5C24A", "#3CB6CB", "#FAF5E8"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    span.innerHTML = `
      <svg viewBox="0 0 24 24" width="${size}" height="${size}" aria-hidden>
        <path d="M12 2c2 3 5 4 8 4-3 1-5 4-5 7s2 6 5 7c-3 0-6 1-8 4-2-3-5-4-8-4 3-1 5-4 5-7s-2-6-5-7c3 0 6-1 8-4Z" fill="${color}"/>
        <circle cx="12" cy="12" r="1.6" fill="#0E2A45"/>
      </svg>
    `;
    span.style.cssText = `
      position: absolute; left: ${cx}vw; top: ${cy}vh;
      transform: translate(-50%, -50%) scale(0) rotate(0deg);
      animation: hibiscus-bloom ${dur}ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
      animation-delay: ${i * 30}ms;
      filter: drop-shadow(0 6px 16px rgba(0,0,0,0.18));
      --rot: ${rot}deg;
    `;
    layer.appendChild(span);
  }

  setTimeout(() => layer.remove(), 3500);
}
