"use client";

import { cn } from "@/lib/utils";
import TiltCard from "@/components/TiltCard";
import { Layers, Cpu, Star, TrendingUp } from "lucide-react";

const features = [
  {
    title: "Multi-Domain Intelligence",
    desc: "Access deep insights across specialized domains including AI, Venture Capital, and UX Design. Radar connects the dots between industries.",
    icon: <Layers className="w-8 h-8 text-teal" />,
    color: "bg-teal/10",
  },
  {
    title: "Expert-Verified Sources",
    desc: "Skip the noise. Our platform exclusively aggregates content from industry leaders, researchers, and verified subject matter experts.",
    icon: <Star className="w-8 h-8 text-navy" />,
    color: "bg-navy/10",
  },
  {
    title: "Immersive Scan Mode",
    desc: "Consume high-density information faster. Our immersive 'Scan Mode' distills long-form content into actionable highlights and key takeaways.",
    icon: <Cpu className="w-8 h-8 text-teal" />,
    color: "bg-teal/10",
  },
  {
    title: "Interactive Mastery",
    desc: "Reinforce what you learn. Interactive quizzes and weekly performance tracking help you transition from passive reading to active mastery.",
    icon: <TrendingUp className="w-8 h-8 text-navy" />,
    color: "bg-navy/10",
  },
];

export default function FeaturesSection() {
  return (
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
  );
}
