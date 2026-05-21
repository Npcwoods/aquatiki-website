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
        <h1 className="display text-4xl text-navy mb-8">Passenger Liability Waiver</h1>
        <div className="prose prose-navy max-w-none text-[15px] leading-relaxed">
          <p>
            <em>Please review the following waiver before boarding the Aqua Tiki.</em>
          </p>
          <p>
            By boarding the Aqua Tiki vessel, you agree to the following terms and release of liability.
          </p>
          <h2 className="text-xl font-bold mt-8 mb-4">Assumption of Risk</h2>
          <p>
            I am aware that boating and water activities involve inherent risks, including but not limited to weather changes, water conditions, and the actions of other boaters. I voluntarily assume all such risks.
          </p>
          <div className="mt-12 p-6 bg-palm/10 rounded-2xl border border-palm/20">
            <p className="text-sm">
              <strong>Note:</strong> This is a placeholder. For a legal liability waiver, consult with your insurance provider or an attorney. You can also link directly to a digital signing platform (like DocuSign or FareHarbor) from this page.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <StickyMobileBar />
    </main>
  );
}
