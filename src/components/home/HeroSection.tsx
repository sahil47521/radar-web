"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Phone3D from "@/components/Phone3D";

export default function HeroSection() {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-black text-navy leading-[0.95] mb-8">
                Know <br /> <span className="text-teal">Everything</span> <br /> In Less Time.
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-navy/60 max-w-xl leading-relaxed mb-12"
            >
              Radar filters the noise and brings you the signal. Join thousands of high-performers who stay informed without the burn-out.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/"
                className="px-10 py-5 rounded-2xl bg-navy text-white font-black text-lg hover:bg-navy/90 transition-all flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(37,60,105,0.2)]"
              >
                Start for Free <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#features"
                className="px-10 py-5 rounded-2xl bg-white border border-navy/10 text-navy font-black text-lg hover:bg-zinc-50 transition-all flex items-center justify-center"
              >
                Watch Demo
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[400px] md:h-[600px] flex items-center justify-center lg:justify-end"
          >
            <div className="absolute inset-0 bg-teal/5 blur-[120px] rounded-full scale-150"></div>
            <div className="relative w-full h-full max-w-[500px] flex items-center justify-center">
              <Phone3D />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
