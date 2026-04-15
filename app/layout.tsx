import type { Metadata } from "next";
import { Chakra_Petch, Outfit } from "next/font/google";
import "./globals.css";

const chakra = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lobsmash.com"),
  title: "LobSmash — Padel leagues, sessions & standings",
  description:
    "The home for your padel league: create or join with a simple code, run sessions on multiple courts, and let standings and a global skill rating update automatically—plus friends and a profile that show how you play.",
  keywords: [
    "padel league",
    "padel app",
    "padel standings",
    "Americano padel",
    "Summit padel",
    "padel club software",
    "padel skill rating",
    "lobsmash",
  ],
  authors: [{ name: "LobSmash" }],
  openGraph: {
    title: "LobSmash — Padel leagues, sessions & standings",
    description:
      "Run your padel league in one place: join codes, format-aware leaderboards, sessions on multiple courts, and a skill rating that travels with you.",
    url: "https://lobsmash.com",
    siteName: "LobSmash",
    images: [
      {
        url: "/lobsmash-logo.png",
        width: 1200,
        height: 630,
        alt: "LobSmash",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LobSmash — Padel leagues, sessions & standings",
    description:
      "Join codes, sessions, standings, and a global skill rating—built for padel doubles.",
    images: ["/lobsmash-logo.png"],
  },
  icons: {
    icon: "/lobsmash-logo.png",
    apple: "/lobsmash-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chakra.variable} ${outfit.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
