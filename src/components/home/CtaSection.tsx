"use client";

import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-16 md:py-32 relative overflow-hidden bg-navy">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal blur-[200px] rounded-full"></div>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-black text-white mb-8">Ready to Level Up?</h2>
        <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12">
          Join the waitlist today and get 6 months of Pro for free when we launch.
        </p>
        <Link
          href="/"
          className="inline-flex px-12 py-6 rounded-2xl bg-white text-navy font-black text-xl hover:scale-105 transition-all shadow-2xl hover:bg-white/90"
        >
          Join the Waitlist
        </Link>
      </div>
    </section>
  );
}
