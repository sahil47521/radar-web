import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore RADAR | The Intelligence Layer",
  description: "Discover how RADAR helps high-performers stay ahead with curated feeds, expert insights, and AI-powered signal detection.",
  openGraph: {
    title: "Explore RADAR - Level Up Your Intelligence",
    description: "AI-powered filtering, expert sources, and personalized feeds to keep you informed without the burnout.",
  },
};

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
