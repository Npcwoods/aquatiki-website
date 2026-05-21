"use client";

import { useState } from "react";

interface PhotoSlotProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** brand-color gradient palette index for the fallback */
  fallbackVariant?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Optional overlay caption rendered in the bottom-left of the fallback */
  fallbackLabel?: string;
  /** Set to true for above-the-fold photos to load eagerly */
  priority?: boolean;
}

const VARIANTS: Array<{ a: string; b: string; c: string }> = [
  { a: "#0E2A45", b: "#E84B5C", c: "#F5C24A" }, // navy → coral → gold sunset
  { a: "#1A7A8C", b: "#3CB6CB", c: "#F5C24A" }, // teal lake → gold
  { a: "#B83040", b: "#F5C24A", c: "#FAF5E8" }, // hibiscus → gold → cream
  { a: "#0E2A45", b: "#1F6B3C", c: "#3CB6CB" }, // navy → palm → teal
  { a: "#B98750", b: "#F5C24A", c: "#FAF5E8" }, // bamboo → gold → cream
  { a: "#15375A", b: "#3CB6CB", c: "#FAF5E8" }, // deep teal → cream
];

export function PhotoSlot({
  src,
  alt,
  className = "",
  imgClassName = "",
  fallbackVariant = 0,
  fallbackLabel,
  priority = false,
}: PhotoSlotProps) {
  const [failed, setFailed] = useState(false);
  const v = VARIANTS[fallbackVariant];

  return (
    <div className={className}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          borderRadius: "inherit",
        }}
      >
        {!failed && (
          <img
            src={src}
            alt={alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            onError={() => setFailed(true)}
            className={imgClassName}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
        {failed && (
          <>
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                background: `
                  radial-gradient(70% 60% at 78% 28%, ${v.c}cc 0%, transparent 60%),
                  radial-gradient(80% 60% at 20% 75%, ${v.b}aa 0%, transparent 65%),
                  linear-gradient(180deg, ${v.a} 0%, ${v.a} 35%, ${v.b}55 70%, ${v.c}66 100%)
                `,
                animation: "drift 18s ease-in-out infinite",
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: "62%",
                height: 1,
                background: `linear-gradient(90deg, transparent, ${v.c}, transparent)`,
                opacity: 0.55,
              }}
            />
            <div
              aria-hidden
              style={{
                position: "absolute",
                inset: 0,
                opacity: 0.08,
                mixBlendMode: "overlay",
                pointerEvents: "none",
                backgroundImage:
                  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
              }}
            />
            {fallbackLabel && (
              <div style={{ position: "absolute", left: 16, bottom: 16, zIndex: 10 }}>
                <span
                  className="mono"
                  style={{
                    color: v.c,
                    opacity: 0.88,
                    fontSize: 10,
                    textTransform: "uppercase",
                    letterSpacing: "0.22em",
                  }}
                >
                  ◐ {fallbackLabel}
                </span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
