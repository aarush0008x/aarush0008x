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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aarush0008x.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Aarush Singh — Developer · AI & Data Science Student · Builder",
  description:
    "Portfolio of Aarush Singh, a B.Tech Artificial Intelligence and Data Science student at CGC University. Building practical edge AI systems, full-stack web platforms, and hackathon prototypes.",
  keywords: [
    "Aarush Singh",
    "Aarush Singh Portfolio",
    "AI & Data Science",
    "CGC University",
    "nimoCode",
    "RockinRoll",
    "EvidenceLedger",
    "BodhAI",
    "SmartDrobe",
    "Full-Stack Developer",
    "Next.js",
    "React",
    "Python",
    "CypherVerse Hackathon",
    "HackNWin 3.0",
    "aarush0008x"
  ],
  authors: [{ name: "Aarush Singh", url: "https://github.com/aarush0008x" }],
  creator: "Aarush Singh",
  publisher: "Aarush Singh",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aarush Singh — Developer · AI & Data Science Student",
    description:
      "B.Tech AI & Data Science student at CGC University. Building intelligent edge systems, scalable web applications, and developer tooling.",
    url: siteUrl,
    type: "website",
    locale: "en_US",
    siteName: "Aarush Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarush Singh — Developer & AI/DS Builder",
    description: "B.Tech AI & Data Science student at CGC University. Building full-stack and edge AI solutions.",
    creator: "@aarush0008x",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Aarush Singh",
    url: siteUrl,
    jobTitle: "AI & Full-Stack Developer",
    affiliation: {
      "@type": "Organization",
      name: "CGC University",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "CGC University",
    },
    knowsAbout: [
      "Artificial Intelligence",
      "Data Science",
      "Python",
      "Next.js",
      "React",
      "Cloudflare Workers",
      "Full-Stack Web Development",
      "Digital Forensics"
    ],
    sameAs: [
      "https://github.com/aarush0008x",
      "https://www.linkedin.com/in/aarush-singh-4b3a20358/"
    ],
  };

  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${displayFont.variable} ${monoFont.variable} scroll-smooth antialiased`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#2C2C2C] text-[#F7F6F4] font-sans min-h-screen selection:bg-[#802938] selection:text-[#F7F6F4] relative">
        <div className="noise-overlay" aria-hidden="true" />
        <div className="min-h-screen flex flex-col relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
