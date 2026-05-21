"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Icon } from "./ui/Icon";
import { PhotoSlot } from "./ui/PhotoSlot";
import { RevealText } from "./ui/RevealText";
import { photos } from "@/lib/photos";

interface Cruise {
  id: string;
  name: string;
  blurb: string;
  duration: string;
  price: string;
  guests: string;
  icon: React.ComponentProps<typeof Icon>["name"];
  src: string;
  alt: string;
  variant: 0 | 1 | 2 | 3 | 4 | 5;
  span: string; // grid span classes
  accent: string;
  href: string;
}

// Pricing structure: $150/hr, 2 hr minimum, up to 6 guests aboard
// $50 deposit toward cruise · 10% off when paid in cash · BYOB welcome
const CRUISES: Cruise[] = [
  {
    id: "sunset",
    name: "Sunset Cruise",
    blurb: "Golden hour, your music, our cooler. The cruise that started it all.",
    duration: "2 hrs",
    price: "$300",
    guests: "up to 6",
    icon: "sun",
    src: photos.cruiseSunset.src,
    alt: photos.cruiseSunset.alt,
    variant: 0,
    span: "md:col-span-7 md:row-span-2",
    accent: "#F5C24A",
    href: "/sunset-cruise",
  },
  {
    id: "party",
    name: "Private Party",
    blurb: "Birthdays, anniversaries, just-because. BYOB, your playlist, the whole boat.",
    duration: "3 hrs",
    price: "$450",
    guests: "up to 6",
    icon: "sparkle",
    src: photos.cruiseParty.src,
    alt: photos.cruiseParty.alt,
    variant: 2,
    span: "md:col-span-5",
    accent: "#E84B5C",
    href: "/private-party",
  },
  {
    id: "date",
    name: "Date Night Float",
    blurb: "Two seats, one captain, zero distractions. The shortest vacation of your life.",
    duration: "2 hrs",
    price: "$300",
    guests: "up to 2",
    icon: "heart",
    src: photos.cruiseDate.src,
    alt: photos.cruiseDate.alt,
    variant: 5,
    span: "md:col-span-5",
    accent: "#E84B5C",
    href: "#book",
  },
  {
    id: "bach",
    name: "Bachelorette",
    blurb: "Sashes welcome. Crowns encouraged. Bring the lei flowers and the playlist.",
    duration: "3 hrs",
    price: "$450",
    guests: "up to 6",
    icon: "drink",
    src: photos.cruiseBachelorette.src,
    alt: photos.cruiseBachelorette.alt,
    variant: 2,
    span: "md:col-span-4",
    accent: "#E84B5C",
    href: "#book",
  },
  {
    id: "family",
    name: "Family Day",
    blurb: "Lake floats, beer &amp; wine cooler, dad-jokes optional. Christian-friendly.",
    duration: "2 hrs",
    price: "$300",
    guests: "up to 6",
    icon: "palm",
    src: photos.cruiseFamily.src,
    alt: photos.cruiseFamily.alt,
    variant: 1,
    span: "md:col-span-4",
    accent: "#1F6B3C",
    href: "#book",
  },
  {
    id: "custom",
    name: "Custom Charter",
    blurb: "Engagement, proposal, photoshoot, anniversary float &mdash; we&rsquo;ll plan it.",
    duration: "by request",
    price: "from $300",
    guests: "up to 6",
    icon: "compass",
    src: photos.cruiseCustom.src,
    alt: photos.cruiseCustom.alt,
    variant: 3,
    span: "md:col-span-4",
    accent: "#3CB6CB",
    href: "#book",
  },
];

function TiltCard({ cruise }: { cruise: Cruise }) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -6;
    const ry = (px - 0.5) * 6;
    el.style.transform = `perspective(1100px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateY(-2px)`;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
  }
  function onLeave() {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1100px) rotateX(0deg) rotateY(0deg)";
  }

  return (
    <motion.a
      ref={ref}
      href={cruise.href}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, amount: 0.25 }}
      className={`group relative ${cruise.span} block rounded-[28px] overflow-hidden bg-navy text-cream transition-[transform] duration-300 will-change-transform`}
      style={{
        transformStyle: "preserve-3d",
        boxShadow: "0 30px 80px -30px rgba(14,42,69,0.5)",
      }}
    >
      <div className="absolute inset-0">
        <PhotoSlot
          src={cruise.src}
          alt={cruise.alt}
          fallbackVariant={cruise.variant}
          fallbackLabel={cruise.name.toLowerCase()}
          className="h-full w-full transition-transform duration-[1200ms] group-hover:scale-[1.06]"
        />
      </div>
      {/* readability gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(14,42,69,0.25) 0%, rgba(14,42,69,0) 35%, rgba(14,42,69,0.85) 100%)",
        }}
      />
      {/* spotlight under cursor */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background:
            "radial-gradient(280px at var(--mx, 50%) var(--my, 50%), rgba(245,194,74,0.32), transparent 70%)",
          mixBlendMode: "screen",
        }}
      />

      <div className="relative z-10 p-7 md:p-9 h-full flex flex-col justify-between min-h-[280px] md:min-h-[340px]">
        <div className="flex items-start justify-between gap-4">
          <span
            className="inline-flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em]"
            style={{ color: cruise.accent }}
          >
            <Icon name={cruise.icon} className="h-4 w-4" />
            {cruise.duration} · {cruise.guests}
          </span>
          <span
            className="h-9 w-9 rounded-full flex items-center justify-center border border-cream/30 transition-all duration-500 group-hover:bg-cream group-hover:text-navy group-hover:border-cream"
          >
            <Icon name="arrow-right" className="h-4 w-4" />
          </span>
        </div>

        <div>
          <div className="display text-[34px] md:text-[44px] leading-[1] text-cream">
            {cruise.name}
          </div>
          <p
            className="mt-3 text-cream/80 text-[14.5px] leading-[1.55] max-w-[420px]"
            dangerouslySetInnerHTML={{ __html: cruise.blurb }}
          />
          <div className="mt-5 flex items-baseline gap-3">
            <span
              className="display text-2xl text-cream"
              dangerouslySetInnerHTML={{ __html: cruise.price }}
            />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

export function CruiseBento() {
  return (
    <section id="cruises" className="relative bg-cream-2 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-16">
          <div className="max-w-2xl">
            <div className="eyebrow">Cruises</div>
            <RevealText
              as="h2"
              className="display text-[44px] md:text-6xl lg:text-7xl text-navy mt-5"
            >
              {"Pick your version of perfect."}
            </RevealText>
          </div>
          <p className="text-[16px] text-ink/70 max-w-[400px]">
            $150/hr · 2 hour minimum · up to 6 guests. Every cruise comes with a
            USCG-licensed captain, the tiki bar cooler, your music on the aux,
            and BYOB welcome.
          </p>
        </div>

        <div className="grid md:grid-cols-12 grid-rows-[auto] gap-4 md:gap-5 auto-rows-[280px] md:auto-rows-[290px]">
          {CRUISES.map((c) => (
            <TiltCard key={c.id} cruise={c} />
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center">
          <a href="#book" className="btn-coral">
            Book your cruise <Icon name="arrow-right" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
