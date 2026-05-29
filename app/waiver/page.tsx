import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export const metadata = {
  title: "Passenger Waiver | Aqua Tiki Cruises",
};

export default function WaiverPage() {
  return (
    <main className="bg-cream min-h-screen flex flex-col">
      <div className="bg-navy">
        <Nav />
      </div>
      <div className="flex-1 max-w-3xl mx-auto w-full px-6 pt-32 pb-24 text-ink">
        <h1 className="display text-4xl text-navy mb-8">Passenger Waiver</h1>
        <div className="space-y-6 text-[15px] leading-relaxed text-ink/80">
          <p>
            This page summarizes the safety expectations for Aqua Tiki guests.
            A separate signed waiver or booking platform agreement may be
            required before boarding.
          </p>

          <h2 className="text-xl font-bold text-navy pt-4">Assumption of risk</h2>
          <p>
            Boating involves inherent risks, including changing weather, waves,
            slips, falls, docks, other vessels, and guest behavior. By boarding,
            guests acknowledge those risks and agree to act responsibly.
          </p>

          <h2 className="text-xl font-bold text-navy pt-4">Safety rules</h2>
          <p>
            Guests must follow crew instructions at all times, stay within
            posted capacity limits, use life jackets when directed, avoid unsafe
            movement while underway, and keep hands and feet inside the vessel.
          </p>

          <h2 className="text-xl font-bold text-navy pt-4">Alcohol and conduct</h2>
          <p>
            BYOB is welcome for guests of legal drinking age, but unsafe or
            disruptive behavior is not. The crew may refuse boarding, return to
            dock, or end a cruise early if guest conduct creates a safety issue.
          </p>

          <h2 className="text-xl font-bold text-navy pt-4">Questions</h2>
          <p>
            For waiver or safety questions before your cruise, email{" "}
            <a className="link-underline text-hib-d font-medium" href="mailto:aquatikicruise@outlook.com">
              aquatikicruise@outlook.com
            </a>
            .
          </p>
        </div>
      </div>
      <Footer />
      <StickyMobileBar />
    </main>
  );
}
