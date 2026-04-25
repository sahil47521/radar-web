"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PricingSection() {
  const plans = [
    {
      name: "Free Plan",
      price: "0",
      period: "/ forever",
      description: "Perfect for starting out.",
      features: [
        "5 Domains",
        "Limited Search",
        "BYOemail",
        "Basic Feeds",
        "Community Access"
      ],
      cta: "Join Waitlist",
      href: "/",
      highlight: false,
    },
    {
      name: "Pro(Coming Soon)",
      price: "10",
      period: "/ per month",
      description: "For high-performers.",
      features: [
        "Unlimited Domains",
        "Full Semantic Search",
        "Custom RADAR email",
        "BYOSources",
        "Pro Content – Guides, Tracks"
      ],
      cta: "Coming Soon",
      href: "#",
      highlight: true,
    },
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 bg-zinc-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">Simple Pricing</h2>
          <p className="text-navy/50 max-w-2xl mx-auto text-lg font-medium">
            Start free and upgrade as you grow. No hidden costs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 max-w-4xl mx-auto">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "flex-1 p-8 md:p-10 rounded-[32px] transition-all duration-500 flex flex-col items-center text-center",
                plan.highlight 
                  ? "bg-navy text-white shadow-2xl shadow-navy/20 relative overflow-hidden" 
                  : "bg-white border border-navy/5 shadow-sm"
              )}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 w-24 h-24 bg-teal/10 blur-[40px] rounded-full -mr-12 -mt-12"></div>
              )}
              
              <h3 className="text-2xl font-black mb-6">{plan.name}</h3>
              
              <div className="mb-8 flex items-baseline gap-1">
                <span className="text-xl font-black align-top mt-1">$</span>
                <span className="text-6xl font-black tracking-tight">{plan.price}</span>
                <span className={cn("text-xs font-bold opacity-60", plan.highlight ? "text-white" : "text-navy")}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-4 mb-10 flex-1 w-full max-w-[280px]">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-3">
                    <span className={cn("text-sm font-medium", plan.highlight ? "text-white/80" : "text-navy/70")}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.cta === "Coming Soon" ? (
                <button
                  disabled
                  className={cn(
                    "w-full py-4 rounded-xl font-black text-base transition-all transform opacity-50 cursor-not-allowed",
                    plan.highlight
                      ? "bg-white text-navy"
                      : "bg-teal text-white"
                  )}
                >
                  {plan.cta}
                </button>
              ) : (
                <Link
                  href={plan.href}
                  className={cn(
                    "w-full py-4 rounded-xl font-black text-base transition-all transform hover:scale-[1.02] active:scale-95 text-center flex items-center justify-center",
                    plan.highlight
                      ? "bg-white text-navy hover:bg-zinc-100"
                      : "bg-teal text-white shadow-xl shadow-teal/20"
                  )}
                >
                  {plan.cta}
                </Link>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
