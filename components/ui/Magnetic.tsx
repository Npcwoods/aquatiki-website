"use client";

import { useRef, useEffect, ReactNode } from "react";

interface MagneticProps {
  children: ReactNode;
  className?: string;
  strength?: number; // 0..1
  radius?: number; // px
}

export function Magnetic({ children, className = "", strength = 0.35, radius = 110 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    function loop() {
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (el) {
        el.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0)`;
      }
      raf = requestAnimationFrame(loop);
    }

    function onMove(e: MouseEvent) {
      const rect = el!.getBoundingClientRect();
      const ex = e.clientX - (rect.left + rect.width / 2);
      const ey = e.clientY - (rect.top + rect.height / 2);
      const dist = Math.hypot(ex, ey);
      if (dist < radius) {
        const k = (1 - dist / radius) * strength;
        tx = ex * k;
        ty = ey * k;
      } else {
        tx = 0;
        ty = 0;
      }
    }
    function onLeave() {
      tx = 0;
      ty = 0;
    }

    raf = requestAnimationFrame(loop);
    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, radius]);

  return (
    <div ref={ref} className={`inline-flex will-change-transform ${className}`}>
      {children}
    </div>
  );
}
