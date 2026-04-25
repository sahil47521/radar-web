"use client";

import { motion } from "framer-motion";
import Phone3D from "@/components/Phone3D";
import WaitlistForm from "@/components/WaitlistForm";
import Link from "next/link";
import { Radar, Star } from "lucide-react";

export default function WaitlistPage() {
  return (
    <main className="relative min-h-[100dvh] lg:h-screen w-full lg:overflow-hidden text-navy flex flex-col">
      <div className="relative z-10 container mx-auto px-6 flex flex-col flex-1 lg:max-h-screen">
        {/* Navigation - More Compact */}
        <header className="flex justify-between items-center py-6">
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="/images/logo-light.png"
              alt="Radar Logo"
              className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>
          <div className="flex items-center gap-6">
            <Link
              href="/home"
              className="px-6 py-2.5 rounded-full bg-navy text-white transition-all text-sm font-bold shadow-lg shadow-navy/20 hover:scale-105"
            >
              Explore
            </Link>
          </div>
        </header>

        {/* Hero Section - Aligned with Home Screen */}
        <div className="flex-1 flex items-center py-4 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left Column */}
            <div className="flex flex-col gap-6 max-w-xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tight text-navy mb-4">
                  Level Up & <br />
                  <span className="text-teal">Stay Ahead.</span>
                </h1>
                <p className="text-lg md:text-xl text-navy/50 leading-relaxed font-medium">
                  The intelligence layer for high-performers. Join the waitlist for curated feeds and expert insights.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <WaitlistForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-4"
              >
                <div className="flex -space-x-2">
                  {[11, 12, 13, 14].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-zinc-200 overflow-hidden shadow-sm">
                      <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-2.5 h-2.5 fill-teal text-teal" />)}
                  </div>
                  <p className="text-navy font-black text-xs">Join 2,400+ leaders</p>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Constrained Height */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[300px] md:h-[600px] flex items-center justify-center lg:justify-end"
            >
              <div className="relative w-full h-full max-w-[500px] flex items-center justify-center">
                <Phone3D />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer - Integrated and Small */}
        <footer className="pt-4 pb-0 md:py-6 border-t border-navy/5 flex justify-between items-center mt-auto">
          <p className="text-navy/30 text-[10px] font-bold tracking-widest uppercase">© {new Date().getFullYear()} RADAR</p>
          <div className="flex gap-6 items-center">
            <Link href="/privacy" className="text-navy/30 hover:text-navy transition-colors text-[10px] font-bold uppercase tracking-widest">Privacy</Link>
            <Link href="/terms" className="text-navy/30 hover:text-navy transition-colors text-[10px] font-bold uppercase tracking-widest">Terms</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
