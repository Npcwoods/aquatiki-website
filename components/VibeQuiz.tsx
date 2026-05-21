"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "./ui/Icon";
import { RevealText } from "./ui/RevealText";

interface Option {
  label: string;
  value: string;
  icon: React.ComponentProps<typeof Icon>["name"];
}

const STEPS: Array<{
  question: string;
  field: "mood" | "group" | "vibe";
  options: Option[];
}> = [
  {
    question: "What&rsquo;s the mood?",
    field: "mood",
    options: [
      { label: "Just us", value: "couple", icon: "heart" },
      { label: "Friends", value: "friends", icon: "drink" },
      { label: "Family", value: "family", icon: "palm" },
      { label: "Celebrating", value: "celebrate", icon: "sparkle" },
    ],
  },
  {
    question: "How many of you?",
    field: "group",
    options: [
      { label: "2", value: "2", icon: "heart" },
      { label: "3–5", value: "small", icon: "sparkle" },
      { label: "6–9", value: "medium", icon: "compass" },
      { label: "10–12", value: "big", icon: "drink" },
    ],
  },
  {
    question: "Which feels right?",
    field: "vibe",
    options: [
      { label: "Pure sunset", value: "sunset", icon: "sun" },
      { label: "Big party", value: "party", icon: "sparkle" },
      { label: "Slow float", value: "float", icon: "wave" },
      { label: "Photo day", value: "photo", icon: "compass" },
    ],
  },
];

interface Recommendation {
  cruise: string;
  blurb: string;
  href: string;
}

function recommend(answers: Record<string, string>): Recommendation {
  const { mood, group, vibe } = answers;
  if (mood === "celebrate" && (vibe === "party" || group === "big")) {
    return {
      cruise: "Private Party Cruise",
      blurb: "Three hours, your playlist, the whole boat. Bring the cake.",
      href: "#cruises",
    };
  }
  if (mood === "couple" && (vibe === "sunset" || vibe === "float")) {
    return {
      cruise: "Date Night Float",
      blurb: "Two seats, one captain, zero distractions.",
      href: "#cruises",
    };
  }
  if (mood === "family") {
    return {
      cruise: "Family Day Cruise",
      blurb: "Lake floats included. Kids ride free.",
      href: "#cruises",
    };
  }
  if (vibe === "party" || group === "big") {
    return {
      cruise: "Private Party Cruise",
      blurb: "Up to 12 guests. We&rsquo;ll handle the rest.",
      href: "#cruises",
    };
  }
  return {
    cruise: "Sunset Cruise",
    blurb: "Our signature. Two hours of golden hour, every time.",
    href: "#cruises",
  };
}

export function VibeQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const done = step >= STEPS.length;
  const current = STEPS[step];

  function pick(value: string) {
    if (!current) return;
    const next = { ...answers, [current.field]: value };
    setAnswers(next);
    setStep((s) => s + 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
  }

  const rec = done ? recommend(answers) : null;

  return (
    <section id="quiz" className="relative bg-gradient-to-b from-cream-2 to-cream py-24 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="eyebrow justify-center">Vibe quiz</div>
          <RevealText
            as="h2"
            className="display text-[40px] md:text-5xl lg:text-6xl text-navy mt-5"
          >
            {"Not sure which cruise? Three taps."}
          </RevealText>
        </div>

        <div className="relative max-w-3xl mx-auto rounded-[32px] border border-navy/[0.08] bg-cream/80 backdrop-blur-xl p-8 md:p-12 shadow-[0_50px_120px_-30px_rgba(14,42,69,0.25)]">
          {/* progress dots */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {STEPS.map((_, i) => (
              <span
                key={i}
                className="h-1.5 rounded-full transition-all duration-500"
                style={{
                  width: i === step ? 28 : 8,
                  background: i < step || done ? "#E84B5C" : i === step ? "#0E2A45" : "rgba(14,42,69,0.18)",
                }}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <h3
                  className="display text-3xl md:text-4xl text-navy text-center mb-8"
                  dangerouslySetInnerHTML={{ __html: current.question }}
                />
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {current.options.map((o) => (
                    <button
                      key={o.value}
                      onClick={() => pick(o.value)}
                      className="group rounded-2xl border border-navy/[0.1] bg-cream hover:border-hibiscus hover:bg-white p-5 transition-all duration-300 text-left"
                    >
                      <Icon
                        name={o.icon}
                        className="h-6 w-6 text-navy/60 group-hover:text-hibiscus transition-colors"
                      />
                      <div className="display text-2xl text-navy mt-3">{o.label}</div>
                    </button>
                  ))}
                </div>
                {step > 0 && (
                  <button
                    onClick={() => setStep((s) => s - 1)}
                    className="mt-6 mono text-[11px] uppercase tracking-[0.22em] text-muted hover:text-navy transition-colors"
                  >
                    ← back
                  </button>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="done"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <div className="mono text-[11px] uppercase tracking-[0.22em] text-hibiscus">
                  Your match
                </div>
                <div className="display text-4xl md:text-5xl text-navy mt-3">
                  {rec!.cruise}
                </div>
                <p
                  className="mt-4 text-[16px] text-ink/70 max-w-md mx-auto"
                  dangerouslySetInnerHTML={{ __html: rec!.blurb }}
                />
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <a href={rec!.href} className="btn-coral">
                    See this cruise <Icon name="arrow-right" className="h-4 w-4" />
                  </a>
                  <button
                    onClick={reset}
                    className="text-navy/70 link-underline text-[14px]"
                  >
                    Try again
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
