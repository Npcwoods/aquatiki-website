import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { MasonryGallery } from "@/components/MasonryGallery";
import { RevealText } from "@/components/ui/RevealText";
import { Icon } from "@/components/ui/Icon";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export const metadata = {
  title: "Gallery | Aqua Tiki Cruises",
  description: "See the vibes aboard the Aqua Tiki on Lake Chatuge.",
};

export default function GalleryPage() {
  return (
    <main className="bg-navy min-h-[100svh] flex flex-col">
      <Nav />
      <div className="flex-1 pt-32 pb-24 mx-auto max-w-[1400px] w-full px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="eyebrow eyebrow-light justify-center">Gallery</div>
          <RevealText as="h1" className="display text-4xl md:text-6xl text-cream mt-5">
            The Aqua Tiki Experience
          </RevealText>
          <p className="mt-6 text-cream/70 text-[17px]">
            Good tunes, cold drinks, and golden hours. Take a look at what two hours of lake therapy looks like.
          </p>
        </div>
        
        <MasonryGallery />

        <div className="mt-32 text-center">
          <h2 className="display text-3xl md:text-4xl text-cream">Ready to join us?</h2>
          <div className="mt-8">
            <a href="/#book" className="btn-coral">
              Book a cruise <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
      <StickyMobileBar />
    </main>
  );
}
