"use client";

import { useState } from "react";
import { Icon } from "./ui/Icon";
import { RevealText } from "./ui/RevealText";

const CRUISE_TYPES = [
  "Sunset Cruise",
  "Private Party",
  "Date Night Float",
  "Bachelorette",
  "Family Day",
  "Custom Charter",
];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      setError("Online requests are not connected yet. Please email aquatikicruise@outlook.com or call/text us.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", accessKey);
    formData.append("subject", "New Cruise Booking Request from Aqua Tiki");
    formData.append("from_name", "Aqua Tiki Website");
    formData.append("replyto", String(formData.get("email") || ""));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        console.error("Form submission failed");
        setError("Something went sideways sending the request. Please email aquatikicruise@outlook.com or call/text us.");
      }
    } catch (err) {
      console.error(err);
      setError("We could not reach the booking form service. Please email aquatikicruise@outlook.com or call/text us.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="book" className="relative bg-cream py-24 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-hibiscus/10 border border-hibiscus/20 text-hibiscus text-[12px] font-bold tracking-wide uppercase mb-6 animate-pulse">
            <Icon name="sun" className="h-3.5 w-3.5" />
            Saturdays in June & July are booking out 3 weeks in advance
          </div>
          <div className="eyebrow">Book a cruise</div>
          <RevealText
            as="h2"
            className="display text-[44px] md:text-6xl lg:text-7xl text-navy mt-5"
          >
            {"Two hours of vacation, on us."}
          </RevealText>
          <p className="mt-6 text-[17px] text-ink/70 leading-[1.6] max-w-[480px]">
            Send a request &mdash; we&rsquo;ll confirm the date, walk you through
            the cruise, and get you on the water. $50 deposit toward your cruise,
            10% off when paid in cash, weather-flexible rescheduling.
          </p>

          <div className="mt-6 flex items-start gap-3 p-4 rounded-2xl bg-white border border-navy/[0.06] shadow-sm max-w-[480px]">
            <div className="flex text-gold shrink-0 mt-0.5">
              {[...Array(5)].map((_, i) => <Icon key={i} name="star" className="h-3.5 w-3.5" />)}
            </div>
            <p className="text-[13.5px] text-ink/80 leading-snug italic">
              Fresh lake air, your playlist, a cooler ready to go, and a safe crew handling the dock-to-sunset details.
              <span className="block mt-1 font-semibold not-italic text-[12px] text-navy/60">Aqua Tiki cruise request</span>
            </p>
          </div>

          {!submitted ? (
            <form
              onSubmit={onSubmit}
              className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Date" name="date" type="date" required />
              <Field label="Group size (max 6)" name="group" type="number" min={1} max={6} required />
              <div className="sm:col-span-2">
                <Select label="Cruise type" name="cruise" options={CRUISE_TYPES} />
              </div>
              <div className="sm:col-span-2">
                <Textarea label="Anything we should know?" name="notes" />
              </div>
              <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-5 mt-2">
                <button type="submit" disabled={isSubmitting} className="btn-coral disabled:opacity-70 disabled:cursor-not-allowed">
                  {isSubmitting ? "Sending Request..." : (
                    <>
                      Request a cruise <Icon name="arrow-right" className="h-4 w-4" />
                    </>
                  )}
                </button>
                <div className="flex items-center gap-2 text-[13px] text-navy/70">
                  <Icon name="sun" className="h-4 w-4 text-teal-d" />
                  <span><strong>100% Weather Guarantee:</strong> Free reschedules if it storms.</span>
                </div>
              </div>
              {error && (
                <p className="sm:col-span-2 rounded-2xl border border-hibiscus/25 bg-hibiscus/10 px-4 py-3 text-[14px] text-hib-d">
                  {error}
                </p>
              )}
            </form>
          ) : (
            <div className="mt-10 rounded-3xl border border-palm/30 bg-palm/5 p-8">
              <div className="display text-3xl text-palm">
                You&rsquo;re on the books — almost.
              </div>
              <p className="mt-3 text-[16px] text-ink/75">
                We&rsquo;ll email you within the hour with the cruise details, the
                marina address, and what to bring. Aloha.
              </p>
            </div>
          )}
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-[28px] bg-navy text-cream overflow-hidden border border-navy">
            <div className="relative h-52 md:h-64">
              {/* stylized map plate */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(70% 60% at 70% 30%, #15375A 0%, #0E2A45 70%), linear-gradient(180deg, #0E2A45, #0A1F35)",
                }}
              />
              <svg
                viewBox="0 0 600 280"
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                aria-hidden
              >
                <defs>
                  <linearGradient id="lakeFill" x1="0" x2="1" y1="0" y2="1">
                    <stop offset="0" stopColor="#3CB6CB" stopOpacity="0.45" />
                    <stop offset="1" stopColor="#3CB6CB" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                {/* mountains */}
                <path
                  d="M0 200 L80 130 L150 175 L240 100 L330 170 L410 120 L500 180 L600 140 L600 280 L0 280 Z"
                  fill="#1F6B3C"
                  opacity="0.32"
                />
                {/* lake shape */}
                <path
                  d="M120 180 C 160 150, 210 145, 250 165 C 290 185, 320 200, 360 195 C 420 188, 460 220, 500 215 C 540 210, 560 230, 540 250 C 500 270, 420 268, 360 258 C 290 248, 230 245, 180 235 C 130 225, 100 200, 120 180 Z"
                  fill="url(#lakeFill)"
                  stroke="#3CB6CB"
                  strokeWidth="1.2"
                  strokeOpacity="0.6"
                />
                {/* marina dot */}
                <g transform="translate(310, 215)">
                  <circle r="14" fill="#E84B5C" fillOpacity="0.22" />
                  <circle r="6" fill="#E84B5C" />
                  <circle r="2.5" fill="#FAF5E8" />
                </g>
                <text x="330" y="220" fill="#F5C24A" className="mono" fontSize="10" letterSpacing="2">
                  MARGARITA JACK&apos;S MARINA
                </text>
              </svg>
            </div>

            <div className="p-7 md:p-8">
              <div className="display text-3xl">Find us</div>
              <div className="mt-5 space-y-4 text-[14.5px] text-cream/85">
                <Row
                  icon="anchor"
                  label="Marina"
                  value="Margarita Jack&rsquo;s Marina · Hayesville, NC"
                />
                <Row
                  icon="sun"
                  label="Season"
                  value="April – November · 10am to last cruise at 6pm"
                />
                <Row
                  icon="sparkle"
                  label="Bring"
                  value="Sunglasses, soft-soled shoes, your music & drinks"
                />
              </div>

              <div className="mt-7 pt-6 border-t border-cream/15 flex flex-col gap-2 text-[14px]">
                <a className="link-underline inline-flex items-center gap-2" href="mailto:aquatikicruise@outlook.com">
                  <span className="text-gold">✦</span> aquatikicruise@outlook.com
                </a>
                <a className="link-underline inline-flex items-center gap-2" href="tel:+18453047516">
                  <span className="text-gold">✦</span> (845) 304-7516
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-cream-2 p-6 border border-navy/[0.06]">
            <div className="flex items-center gap-3 mb-2">
              <Icon name="wave" className="h-5 w-5 text-teal-d" />
              <span className="mono text-[11px] uppercase tracking-[0.22em] text-navy">
                The fine print (in a good way)
              </span>
            </div>
            <ul className="text-[14px] text-ink/75 leading-relaxed space-y-1.5">
              <li>$50 deposit · goes toward your cruise</li>
              <li>10% off when you pay in cash</li>
              <li>BYOB welcome · cooler with beer &amp; wine aboard</li>
              <li>Weather calls an audible &mdash; we reschedule on us</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  min,
  max,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  min?: number;
  max?: number;
}) {
  return (
    <label className="block">
      <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-navy/55">
        {label}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        min={min}
        max={max}
        className="mt-2 w-full rounded-2xl border border-navy/[0.12] bg-white px-4 py-3.5 text-[15px] text-navy focus:outline-none focus:border-hibiscus focus:ring-4 focus:ring-hibiscus/15 transition-all"
      />
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-navy/55">
        {label}
      </span>
      <select
        name={name}
        className="mt-2 w-full rounded-2xl border border-navy/[0.12] bg-white px-4 py-3.5 text-[15px] text-navy focus:outline-none focus:border-hibiscus focus:ring-4 focus:ring-hibiscus/15 transition-all"
        defaultValue=""
      >
        <option value="" disabled>
          Choose a cruise…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}

function Textarea({ label, name }: { label: string; name: string }) {
  return (
    <label className="block">
      <span className="mono text-[10.5px] uppercase tracking-[0.22em] text-navy/55">
        {label}
      </span>
      <textarea
        name={name}
        rows={4}
        className="mt-2 w-full rounded-2xl border border-navy/[0.12] bg-white px-4 py-3.5 text-[15px] text-navy focus:outline-none focus:border-hibiscus focus:ring-4 focus:ring-hibiscus/15 transition-all"
      />
    </label>
  );
}

function Row({
  icon,
  label,
  value,
}: {
  icon: React.ComponentProps<typeof Icon>["name"];
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon name={icon} className="h-4.5 w-4.5 text-gold mt-0.5" />
      <div>
        <div className="mono text-[10.5px] uppercase tracking-[0.22em] text-cream/55">
          {label}
        </div>
        <div className="mt-0.5">{value}</div>
      </div>
    </div>
  );
}
