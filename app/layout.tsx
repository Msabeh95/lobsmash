import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lobsmash.com"),
  title: "LobSmash — World-Class AI Padel Coach & Performance Analytics",
  description: "Master your game with LobSmash, the elite AI-powered padel coach. Get professional technical analysis, shot tracking, and strategic mastery in your pocket.",
  keywords: ["padel ai coach", "ai padel analysis", "padel performance analytics", "padel shot tracking", "padel strategy academy", "improve padel game", "lobsmash"],
  authors: [{ name: "LobSmash Academy" }],
  openGraph: {
    title: "LobSmash — World-Class AI Padel Coach",
    description: "The future of padel training. Get elite AI technical analysis and pro analytics anytime, anywhere.",
    url: "https://lobsmash.com",
    siteName: "LobSmash",
    images: [
      {
        url: "/padel-player-analysis.png",
        width: 1200,
        height: 630,
        alt: "LobSmash AI Padel Analysis",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LobSmash — World-Class AI Padel Coach",
    description: "Elite AI technical analysis & pro analytics in your pocket.",
    images: ["/padel-player-analysis.png"],
  },
  icons: {
    icon: "/favicon-ls.png",
    apple: "/favicon-ls.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${outfit.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

