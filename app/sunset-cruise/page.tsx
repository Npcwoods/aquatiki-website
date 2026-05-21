import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BookingForm } from "@/components/BookingForm";
import { RevealText } from "@/components/ui/RevealText";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { Icon } from "@/components/ui/Icon";

export default function SunsetCruise() {
  return (
    <>
      <Nav />
      <main className="bg-cream pt-32 pb-16 min-h-screen">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="max-w-3xl">
            <div className="eyebrow flex items-center gap-2">
              <Icon name="sun" className="h-4 w-4 text-gold" />
              Sunset Cruise
            </div>
            <RevealText
              as="h1"
              className="display text-[50px] md:text-7xl lg:text-8xl text-navy mt-6 leading-none"
            >
              Golden hour on the water.
            </RevealText>
            <p className="mt-8 text-[18px] text-ink/75 leading-relaxed max-w-2xl">
              Our signature cruise. Two hours of laid-back lake therapy exactly as the sun dips below the Blue Ridge mountains. Bring your favorite drinks, pick the playlist, and let our captain handle the rest.
            </p>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-navy/[0.06] shadow-sm">
              <Icon name="sun" className="h-6 w-6 text-teal-d mb-4" />
              <h3 className="mono text-[11px] uppercase tracking-[0.2em] text-navy font-bold">Duration & Time</h3>
              <p className="mt-2 text-[15px] text-ink/75">2 hours. Departs approximately 1.5 hours before sunset. Times vary by season.</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-navy/[0.06] shadow-sm">
              <Icon name="boat" className="h-6 w-6 text-teal-d mb-4" />
              <h3 className="mono text-[11px] uppercase tracking-[0.2em] text-navy font-bold">Capacity & Price</h3>
              <p className="mt-2 text-[15px] text-ink/75">Up to 6 guests maximum. $300 total for the boat ($50/person if full).</p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-navy/[0.06] shadow-sm">
              <Icon name="sparkle" className="h-6 w-6 text-teal-d mb-4" />
              <h3 className="mono text-[11px] uppercase tracking-[0.2em] text-navy font-bold">What's Included</h3>
              <p className="mt-2 text-[15px] text-ink/75">USCG licensed captain, iced cooler, Bluetooth sound system, and life jackets.</p>
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
