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
        <div className="space-y-6 text-[15px] leading-relaxed text-ink/80">
          <p>
            <em>Last updated: May 2026</em>
          </p>
          <p>
            These terms cover cruise requests, reservations, and website use for
            Aqua Tiki Cruises on Lake Chatuge in Hayesville, NC. By booking or
            boarding, you agree to follow crew instructions and all safety rules.
          </p>

          <h2 className="text-xl font-bold text-navy pt-4">Bookings and payment</h2>
          <p>
            A cruise request is not confirmed until Aqua Tiki accepts the date
            and time and any required deposit is received. The balance is due
            before departure unless other arrangements are confirmed in writing.
            Prices, routes, and availability may change before confirmation.
          </p>

          <h2 className="text-xl font-bold text-navy pt-4">Weather and safety</h2>
          <p>
            Cruises may be delayed, shortened, rescheduled, or cancelled for
            weather, lake conditions, mechanical issues, safety concerns, or
            crew judgment. Safety decisions are final. Guests must follow all
            instructions, including life jacket and capacity rules.
          </p>

          <h2 className="text-xl font-bold text-navy pt-4">Guest conduct</h2>
          <p>
            Guests are responsible for respectful behavior, legal alcohol use,
            and damage caused by their party. Aqua Tiki may refuse boarding or
            end a cruise early for unsafe, disruptive, or unlawful behavior.
          </p>

          <h2 className="text-xl font-bold text-navy pt-4">Cancellations</h2>
          <p>
            If weather or safety conditions prevent a cruise, we will work with
            you to reschedule. Guest cancellation timing, deposit handling, and
            refunds are handled case by case unless a separate written booking
            policy applies.
          </p>

          <h2 className="text-xl font-bold text-navy pt-4">Contact</h2>
          <p>
            Questions can be sent to{" "}
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
