import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { LenisProvider } from "@/components/LenisProvider";
import { TikiEasterEgg } from "@/components/TikiEasterEgg";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aqua Tiki — Tiki Boat Cruises on Lake Chatuge | Hayesville, NC",
  description:
    "Sunset cruises, private parties, and good vibes on Lake Chatuge. The Blue Ridge mountains' only USCG-licensed tiki boat. Relax. Cruise. Make Memories.",
  metadataBase: new URL("https://aquatiki.net"),
  openGraph: {
    title: "Aqua Tiki — Tiki Boat Cruises on Lake Chatuge",
    description: "Sunset cruises and private parties on Lake Chatuge. Two hours of laid-back lake therapy.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#0E2A45",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${caveat.variable} ${jetbrains.variable}`}
    >
      <body>
        <LenisProvider>{children}</LenisProvider>
        <TikiEasterEgg />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
