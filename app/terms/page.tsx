import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export const metadata = {
  title: "Terms of Service | Aqua Tiki Cruises",
};

export default function TermsPage() {
  return (
    <main className="bg-cream min-h-screen flex flex-col">
      <div className="bg-navy">
        <Nav />
      </div>
      <div className="flex-1 max-w-3xl mx-auto w-full px-6 pt-32 pb-24 text-ink">
        <h1 className="display text-4xl text-navy mb-8">Terms of Service</h1>
        <div className="prose prose-navy max-w-none text-[15px] leading-relaxed">
          <p>
            <em>Last Updated: [Insert Date]</em>
          </p>
          <p>
            Please read these terms and conditions carefully before booking a cruise with Aqua Tiki Cruises.
          </p>
          <h2 className="text-xl font-bold mt-8 mb-4">1. Booking and Cancellation</h2>
          <p>
            A deposit is required to secure your booking. Cancellations made within 48 hours of the scheduled cruise may forfeit the deposit. In the event of severe weather, we offer a 100% weather guarantee and will reschedule or refund your cruise.
          </p>
          <div className="mt-12 p-6 bg-palm/10 rounded-2xl border border-palm/20">
            <p className="text-sm">
              <strong>Note:</strong> Please replace this placeholder text with your official legal Terms of Service before operating at scale.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <StickyMobileBar />
    </main>
  );
}
