"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from "./ui/Icon";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    // Check if they've already seen it this session
    if (sessionStorage.getItem("exit_intent_shown") === "true") {
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // If mouse moves up towards the address bar (clientY <= 5)
      if (e.clientY <= 5 && !show) {
        setShow(true);
        sessionStorage.setItem("exit_intent_shown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [show]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey || accessKey === "YOUR_ACCESS_KEY_HERE") {
      setError("VIP signup is not connected yet. Email aquatikicruise@outlook.com and we will get you on the list.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", accessKey);
    formData.append("subject", "New VIP List Signup from Aqua Tiki");
    formData.append("from_name", "Aqua Tiki Website");
    formData.append("replyto", String(formData.get("email") || ""));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setSubmitted(true);
        // Automatically close after 3 seconds on success
        setTimeout(() => setShow(false), 3000);
      } else {
        setError("That did not send. Email aquatikicruise@outlook.com and we will get you on the list.");
      }
    } catch (err) {
      console.error(err);
      setError("We could not reach the signup service. Email aquatikicruise@outlook.com and we will get you on the list.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-navy/60 backdrop-blur-sm"
            onClick={() => setShow(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-cream shadow-2xl border border-navy/5"
          >
            <button
              onClick={() => setShow(false)}
              className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-navy/5 text-navy hover:bg-navy/10 transition-colors"
              aria-label="Close"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M2 2L10 10M10 2L2 10" />
              </svg>
            </button>

            <div className="p-8 md:p-10 text-center">
              <Icon name="wave" className="h-8 w-8 mx-auto text-teal-d mb-4" />
              
              {!submitted ? (
                <>
                  <h3 className="display text-3xl md:text-4xl text-navy">
                    Not ready to book?
                  </h3>
                  <p className="mt-4 text-[15px] text-ink/70 leading-relaxed mb-8">
                    Join our VIP list. We&rsquo;ll send you a <strong>$25 off code</strong> for your first cruise and notify you about last-minute cancellation openings.
                  </p>
                  
                  <form onSubmit={onSubmit} className="flex flex-col gap-3">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your email..."
                      className="w-full rounded-full border border-navy/10 bg-white px-5 py-3.5 text-[15px] text-navy placeholder-navy/40 focus:outline-none focus:border-hibiscus focus:ring-4 focus:ring-hibiscus/15 transition-all text-center"
                    />
                    <input type="hidden" name="intent" value="VIP List Signup" />
                    <button type="submit" disabled={isSubmitting} className="btn-coral w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed">
                      {isSubmitting ? "Saving..." : "Send me my $25 off"}
                    </button>
                    {error && (
                      <p className="rounded-2xl border border-hibiscus/25 bg-hibiscus/10 px-4 py-3 text-[13px] text-hib-d">
                        {error}
                      </p>
                    )}
                  </form>
                  <button onClick={() => setShow(false)} className="mt-5 text-[12px] text-ink/50 underline hover:text-ink/80 transition-colors">
                    No thanks, I&rsquo;ll pay full price.
                  </button>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-6"
                >
                  <h3 className="display text-3xl text-palm mb-3">You&rsquo;re on the list!</h3>
                  <p className="text-[15px] text-ink/70">
                    Check your inbox shortly for your $25 off code. See you on the water!
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
