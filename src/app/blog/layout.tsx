import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal | RADAR",
  description: "Read the latest updates, productivity hacks, and product features from the RADAR team.",
  openGraph: {
    title: "RADAR Journal - Product & Feature Updates",
    description: "Stay up to date with RADAR's mission to elevate human intelligence.",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
