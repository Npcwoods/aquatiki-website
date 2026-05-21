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
        <div className="prose prose-navy max-w-none text-[15px] leading-relaxed">
          <p>
            <em>Last Updated: [Insert Date]</em>
          </p>
          <p>
            Welcome to Aqua Tiki Cruises. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or book a cruise with us.
          </p>
          <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
          <p>
            We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, fill out a booking form, and in connection with other activities, services, features, or resources we make available.
          </p>
          {/* Add more legal boilerplate as needed */}
          <div className="mt-12 p-6 bg-palm/10 rounded-2xl border border-palm/20">
            <p className="text-sm">
              <strong>Note:</strong> Please replace this placeholder text with your official legal Privacy Policy before operating at scale.
            </p>
          </div>
        </div>
      </div>
      <Footer />
      <StickyMobileBar />
    </main>
  );
}
