import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

// Configure Body Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Configure Heading Font
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growthmaster.agency"),
  title: {
    default: "Growth Master | Premium Digital Agency",
    template: "%s | Growth Master",
  },
  description:
    "We are a high-end digital agency specializing in website design, SEO, branding, and AI automation. We engineer business growth.",
  keywords: [
    "Premium Digital Agency",
    "Enterprise Web Design",
    "Technical SEO",
    "AI Automation Solutions",
    "High-Performance Web Development",
    "Growth Master",
  ],
  authors: [{ name: "Growth Master" }],
  creator: "Growth Master",
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
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://growthmaster.agency",
    title: "Growth Master | Premium Digital Agency",
    description: "Premium web design, development, and AI automation solutions.",
    siteName: "Growth Master",
    images: [
      {
        url: "/images/og-image.jpg", // Placeholder for actual OG image
        width: 1200,
        height: 630,
        alt: "Growth Master Agency Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growth Master | Premium Digital Agency",
    description: "Premium web design, development, and AI automation solutions.",
    creator: "@growthmaster",
    images: ["/images/twitter-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-sans bg-[#0B0B0F] text-white antialiased selection:bg-[#7C3AED] selection:text-white flex min-h-screen flex-col`}
      >
        {children}
      </body>
    </html>
  );
}