import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BookingForm } from "@/components/BookingForm";
import { RevealText } from "@/components/ui/RevealText";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { Icon } from "@/components/ui/Icon";

export default function PrivateParty() {
  return (
    <>
      <Nav />
      <main className="bg-cream pt-32 pb-16 min-h-screen">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="eyebrow flex items-center gap-2">
              <Icon name="sparkle" className="h-4 w-4 text-hibiscus" />
              Private Party
            </div>
            <RevealText
              as="h1"
              className="display text-[50px] md:text-7xl lg:text-8xl text-navy mt-6 leading-none"
            >
              The whole boat is yours.
            </RevealText>
            <p className="mt-8 text-[18px] text-ink/75 leading-relaxed max-w-2xl">
              Birthdays, anniversaries, bachelorettes, or just a Tuesday. Rent the entire tiki boat for your crew. You bring the decorations and the drinks, we'll provide the floating venue.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-navy/[0.06] shadow-sm">
              <Icon name="sun" className="h-6 w-6 text-teal-d mb-4" />
              <h3 className="mono text-[11px] uppercase tracking-[0.2em] text-navy font-bold">Duration</h3>
              <p className="mt-2 text-[15px] text-ink/75">3 hours on the water. Plenty of time to cruise, anchor, and celebrate.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-navy/[0.06] shadow-sm">
              <Icon name="drink" className="h-6 w-6 text-teal-d mb-4" />
              <h3 className="mono text-[11px] uppercase tracking-[0.2em] text-navy font-bold">BYOB & Food</h3>
              <p className="mt-2 text-[15px] text-ink/75">Bring your own beer, wine, and snacks. We provide a large cooler with fresh ice.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-navy/[0.06] shadow-sm">
              <Icon name="boat" className="h-6 w-6 text-teal-d mb-4" />
              <h3 className="mono text-[11px] uppercase tracking-[0.2em] text-navy font-bold">Pricing</h3>
              <p className="mt-2 text-[15px] text-ink/75">$450 total for up to 6 guests. No hidden fees or fuel surcharges.</p>
            </div>
          </div>
        </div>
      </main>
      <BookingForm />
      <Footer />
      <StickyMobileBar />
    </>
  );
}
