import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const displayFont = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export const viewport: Viewport = {
  themeColor: "#2C2C2C",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Aarush — Developer · AI & Data Science Student · Builder",
  description:
    "Portfolio of Aarush, a B.Tech Artificial Intelligence and Data Science student at CGC University. Building practical projects, exploring machine learning, and participating in hackathons.",
  keywords: [
    "Aarush",
    "Aarush Portfolio",
    "AI & Data Science",
    "CGC University",
    "Machine Learning",
    "Full-Stack Developer",
    "Next.js",
    "Python",
    "HackNWin",
    "Cypherverse",
    "aarush0008"
  ],
  authors: [{ name: "Aarush", url: "https://github.com/aarush0008" }],
  creator: "Aarush",
  openGraph: {
    title: "Aarush — Developer · AI & Data Science Student",
    description:
      "B.Tech AI & Data Science student at CGC University. Building intelligent systems and refined web software.",
    type: "website",
    locale: "en_US",
    siteName: "Aarush Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarush — Developer · AI & Data Science Student",
    description: "B.Tech AI & Data Science student at CGC University.",
    creator: "@aarush0008",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${displayFont.variable} ${monoFont.variable} scroll-smooth antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <body className="bg-[#2C2C2C] text-[#F7F6F4] font-sans min-h-screen selection:bg-[#802938] selection:text-[#F7F6F4] relative">
        <div className="noise-overlay" aria-hidden="true" />
        <div className="min-h-screen flex flex-col relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
