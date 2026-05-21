import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Lake } from "@/components/Lake";
import { CruiseBento } from "@/components/CruiseBento";
import { Captain } from "@/components/Captain";
import { Reviews } from "@/components/Reviews";
import { VibeQuiz } from "@/components/VibeQuiz";
import { Faq } from "@/components/Faq";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { StickyMobileBar } from "@/components/StickyMobileBar";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Lake />
        <CruiseBento />
        <Captain />
        <Reviews />
        <VibeQuiz />
        <Faq />
        <BookingForm />
      </main>
      <Footer />
      <StickyMobileBar />
    </>
  );
}
