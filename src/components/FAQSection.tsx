"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What exactly is Radar?",
    answer: "Radar is an advanced intelligence layer for high-performers. We aggregate insights from expert sources, industry leaders, and specialized researchers into a personalized, high-signal feed.",
  },
  {
    question: "What is Radar's 'Scan Mode'?",
    answer: "Scan Mode is an immersive reading experience that distills long-form content into key highlights and actionable insights. It's designed to help you consume high-density information 10x faster.",
  },
  {
    question: "How do the Smart Quizzes work?",
    answer: "To ensure you're actually retaining the information you read, Radar generates personalized quizzes based on your feed. This helps you transition from passive consumption to active mastery of your field.",
  },
  {
    question: "Is there a mobile app?",
    answer: "Yes! Radar is available as a native mobile app for both iOS and Android, offering the full 'Scan Mode' experience and real-time intelligence alerts on the go.",
  },
  {
    question: "Is joining the waitlist free?",
    answer: "Yes, joining the waitlist is 100% free. As an early adopter, you'll receive 6 months of Radar Pro for free when we officially launch.",
  },
  {
    question: "How often will I receive digests?",
    answer: "You have full control over your frequency. You can choose to receive daily highlights, weekly deep-dives, or bi-weekly summaries based on your preferred schedule.",
  },
];

export default function FAQSection() {
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase()) ||
    faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="faq" className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-black text-navy mb-12 text-center">Frequently Asked Questions</h2>
        
        {/* Search */}
        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/30 w-5 h-5" />
          <input
            type="text"
            placeholder="Search questions..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-6 py-4 rounded-2xl bg-navy/5 focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all font-medium"
          />
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          <AnimatePresence>
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-navy/5 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-6 flex justify-between items-center text-left hover:bg-navy/5 transition-colors group"
                  >
                    <span className="text-lg font-bold text-navy group-hover:text-teal transition-colors">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-teal" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-navy/30" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-navy/60 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 text-navy/40 italic">
                No questions found matching your search.
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
