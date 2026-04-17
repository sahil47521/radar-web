"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamMember from "@/components/TeamMember";
import { motion } from "framer-motion";

export default function AboutPage() {
  const team = [
    { name: "Alex Rivera", role: "Founder & CEO", image: "" },
    { name: "Sarah Chen", role: "Head of Curation", image: "" },
    { name: "Marcus Thorne", role: "CTO", image: "" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto mb-24 text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black text-navy mb-8"
            >
              Making Sense of the <span className="text-teal">Digital Chaos.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-navy/60 leading-relaxed"
            >
              Founded in 2024, RADAR was built on a simple premise: the internet is too loud. 
              We're here to help you find the signals that matter, so you can focus on building the future.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
             <div className="rounded-[40px] bg-zinc-100 aspect-square overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal/20 to-teal/20"></div>
                <div className="p-12 h-full flex flex-col justify-end text-navy">
                    <h2 className="text-3xl font-black mb-4">Our Mission</h2>
                    <p className="font-medium text-navy/70 leading-relaxed">
                        To empower every professional with curated, high-impact knowledge that accelerates growth and eliminates information fatigue.
                    </p>
                </div>
             </div>
             <div>
                <h2 className="text-4xl font-black text-navy mb-8">How we started</h2>
                <div className="space-y-6 text-navy/60 leading-relaxed text-lg">
                    <p>
                        It started as a small internal newsletter for a group of engineers and researchers who were tired of scrolling through social feeds to find actual insights.
                    </p>
                    <p>
                        We realized that the best information isn't always the most popular. It's often buried in whitepapers, specialized blogs, and expert discussions.
                    </p>
                    <p>
                        RADAR scales that curation process using sophisticated algorithms and a network of verified experts, delivering the signal directly to you.
                    </p>
                </div>
             </div>
          </div>

          <div className="mb-24">
            <h2 className="text-4xl font-black text-navy text-center mb-16">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member) => (
                <TeamMember key={member.name} {...member} />
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
