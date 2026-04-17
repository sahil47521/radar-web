"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function StaticLayout({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-40 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black text-navy mb-12">{title}</h1>
          <div className="prose prose-lg prose-navy max-w-none text-navy/70 leading-relaxed">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
