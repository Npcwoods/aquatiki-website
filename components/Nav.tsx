"use client";

import { useEffect, useState } from "react";
import { Magnetic } from "./ui/Magnetic";
import { Icon } from "./ui/Icon";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#cruises", label: "Cruises" },
    { href: "#lake", label: "The Lake" },
    { href: "#captain", label: "Captain" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
    { href: "#book", label: "Book" },
  ];

  return (
    <nav
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 backdrop-blur-xl bg-cream/85 border-b border-navy/[0.08]"
          : "py-5 bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 flex items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-2 group">
          <span
            className="display text-[26px] leading-none transition-colors duration-500"
            style={{ color: scrolled ? "#0E2A45" : "#FAF5E8" }}
          >
            <em style={{ color: "#3CB6CB" }}>aqua</em>
            <span style={{ color: "#F5C24A", marginLeft: 2 }}>tiki</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium link-underline transition-colors"
              style={{ color: scrolled ? "#0E2A45" : "rgba(250,245,232,0.92)" }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex">
          <Magnetic>
            <a href="#book" className="btn-coral text-[13px]">
              Book a cruise
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </Magnetic>
        </div>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden h-10 w-10 rounded-full flex items-center justify-center"
          style={{
            background: scrolled ? "rgba(14,42,69,0.08)" : "rgba(250,245,232,0.18)",
            color: scrolled ? "#0E2A45" : "#FAF5E8",
            backdropFilter: "blur(12px)",
          }}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden>
            {open ? (
              <>
                <path d="M1 1L17 13M17 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            ) : (
              <>
                <path d="M1 1H17M1 7H17M1 13H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={[
          "md:hidden overflow-hidden transition-all duration-500",
          open ? "max-h-[420px] mt-4" : "max-h-0 mt-0",
        ].join(" ")}
      >
        <div className="mx-6 rounded-3xl bg-cream/95 backdrop-blur-xl border border-navy/10 p-6 shadow-[0_30px_80px_-20px_rgba(14,42,69,0.25)]">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="display text-3xl text-navy"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="btn-coral mt-2 self-start"
            >
              Book a cruise <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
