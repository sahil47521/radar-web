"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StatsCounter from "@/components/StatsCounter";
import TiltCard from "@/components/TiltCard";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import {
  Zap,
  Search,
  Layers,
  Cpu,
  TrendingUp,
  Star,
  MessageSquare,
  ShieldCheck,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

import Phone3D from "@/components/Phone3D";

const features = [
  {
    title: "Curated Feeds",
    desc: "AI-powered filtering that surfaces only the most relevant content for your field.",
    icon: <Layers className="w-8 h-8 text-teal" />,
    color: "bg-teal/10",
  },
  {
    title: "Weekly Digests",
    desc: "A high-level summary of the week's most critical developments, delivered to your inbox.",
    icon: <Cpu className="w-8 h-8 text-teal" />,
    color: "bg-teal/10",
  },
  {
    title: "Expert Sources",
    desc: "Get insights directly from industry leaders and verified subject matter experts.",
    icon: <Star className="w-8 h-8 text-navy" />,
    color: "bg-navy/10",
  },
  {
    title: "Smart Quizzes",
    desc: "Reinforce your knowledge with interactive quizzes tailored to your interests.",
    icon: <TrendingUp className="w-8 h-8 text-teal" />,
    color: "bg-teal/10",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
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


        {/* How The App Works Section */}
        <section className="py-16 md:py-32 bg-white overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="text-center mb-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-black text-navy mb-8"
              >
                How The App Works
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-navy/50 max-w-3xl mx-auto text-lg md:text-xl font-medium"
              >
                Reiciendis et rerum ut voluptate. Omnis molestiae nemo est. <br />
                Ut quis enim rerum quia assumenda repudiandae non cumque qui.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                {
                  title: "Select Domains Of Interest",
                  desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                  num: "01"
                },
                {
                  title: "Personalize your Feed",
                  desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                  num: "02"
                },
                {
                  title: "Customize Alerts/ Notifications",
                  desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                  num: "03"
                },
                {
                  title: "Stay up-to-date",
                  desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
                  num: "04"
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col gap-6 relative"
                >
                  <div className="text-6xl font-black text-navy/5 select-none absolute -top-10 -left-4">
                    {step.num}
                  </div>
                  <h3 className="text-2xl font-black text-navy relative z-10 leading-tight">
                    {step.title}
                  </h3>
                  <div className="w-12 h-1 bg-teal rounded-full"></div>
                  <p className="text-navy/60 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-16 md:py-32 bg-zinc-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">Built for the Curious</h2>
              <p className="text-navy/60 max-w-2xl mx-auto text-lg leading-relaxed">
                Everything you need to master your field and stay ahead of the competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((f, i) => (
                <TiltCard key={i}>
                  <div className="h-full p-10 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-navy/5">
                    <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8", f.color)}>
                      {f.icon}
                    </div>
                    <h3 className="text-2xl font-black text-navy mb-4">{f.title}</h3>
                    <p className="text-navy/60 leading-relaxed">{f.desc}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <PricingSection />

        {/* FAQ */}
        <FAQSection />

        {/* Final CTA */}
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
      </main>

      <Footer />
    </div>
  );
}
