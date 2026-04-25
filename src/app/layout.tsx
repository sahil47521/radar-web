import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    template: "%s | RADAR",
    default: "Waitlist | RADAR - The Intelligence Layer for High-Performers",
  },
  description: "Join the waitlist for RADAR. Advanced curated feeds, weekly digests, and expert insights to help you level up and stay ahead.",
  openGraph: {
    title: "RADAR",
    description: "Level Up & Stay Up to Date with RADAR",
    url: "https://tryradar.com",
    siteName: "RADAR",
    images: [
      {
        url: "https://tryradar.com/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RADAR",
    description: "Level Up & Stay Up to Date with RADAR",
    images: ["https://tryradar.com/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TryRadar",
    "url": "https://tryradar.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tryradar.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" className={`${outfit.variable} font-sans`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-navy flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
