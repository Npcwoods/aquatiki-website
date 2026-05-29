import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export const metadata = {
  title: "Privacy Policy | Aqua Tiki Cruises",
};

export default function PrivacyPage() {
  return (
    <main className="bg-cream min-h-screen flex flex-col">
      <div className="bg-navy">
        <Nav />
      </div>
      <div className="flex-1 max-w-3xl mx-auto w-full px-6 pt-32 pb-24 text-ink">
        <h1 className="display text-4xl text-navy mb-8">Privacy Policy</h1>
        <div className="space-y-6 text-[15px] leading-relaxed text-ink/80">
          <p>
            <em>Last updated: May 2026</em>
          </p>
          <p>
            Aqua Tiki Cruises collects the information you choose to send us when
            you request a cruise, join our VIP list, call, text, or email us.
            This may include your name, email address, phone number, requested
            cruise date, group size, and notes about your trip.
          </p>

          <h2 className="text-xl font-bold text-navy pt-4">How we use information</h2>
          <p>
            We use your information to respond to requests, coordinate bookings,
            send cruise details, manage weather-related changes, and improve the
            website. We do not sell your personal information.
          </p>

          <h2 className="text-xl font-bold text-navy pt-4">Service providers</h2>
          <p>
            We may use trusted providers for website hosting, form delivery,
            email, analytics, payment, or booking support. Those providers only
            receive the information needed to perform their services.
          </p>

          <h2 className="text-xl font-bold text-navy pt-4">Your choices</h2>
          <p>
            You can ask us to update or delete your contact information, or stop
            receiving non-essential messages, by emailing{" "}
            <a className="link-underline text-hib-d font-medium" href="mailto:aquatikicruise@outlook.com">
              aquatikicruise@outlook.com
            </a>
            . Transactional messages about an active cruise request may still be
            sent when needed.
          </p>

          <h2 className="text-xl font-bold text-navy pt-4">Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
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
