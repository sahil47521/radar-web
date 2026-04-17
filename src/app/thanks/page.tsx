"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

export default function ThanksPage() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-navy p-6 overflow-hidden">
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        recycle={false}
        numberOfPieces={200}
        colors={["#00768f", "#005061", "#FFFFFF"]}
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-dark p-12 md:p-20 rounded-[40px] text-center max-w-2xl border-white/10"
      >
        <div className="w-24 h-24 bg-teal rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-[0_0_50px_rgba(0,118,143,0.5)]">
          <CheckCircle2 className="w-12 h-12 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
          You're on the list!
        </h1>
        
        <p className="text-white/60 text-lg md:text-xl leading-relaxed mb-12">
          Thank you for joining the RADAR waitlist. We'll notify you as soon as we're ready to level up your feed.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/home"
            className="block w-full py-5 bg-white text-navy font-black rounded-2xl hover:bg-zinc-100 transition-colors"
          >
            Explore the Roadmap
          </Link>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-white/40 hover:text-white transition-colors text-sm font-bold"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
