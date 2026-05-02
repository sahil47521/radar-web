"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Select Your Focus",
    desc: "Choose from specialized domains like Artificial Intelligence, UX Design, or Venture Capital. Radar connects you to the most authoritative sources in your industry.",
    num: "01"
  },
  {
    title: "Intelligent Personalization",
    desc: "Your feed is unique to you. Radar's AI analyzes your reading habits and interests to surface high-signal insights while filtering out the noise.",
    num: "02"
  },
  {
    title: "Tailored Notifications",
    desc: "Never miss a critical update. Customize how and when you receive alerts—choose between instant push notifications, daily digests, or comprehensive weekly summaries.",
    num: "03"
  },
  {
    title: "Continuous Learning",
    desc: "Master your field with ease. Track your progress through smart quizzes and weekly performance metrics, ensuring you're always growing and staying ahead.",
    num: "04"
  }
];

export default function HowItWorksSection() {
  return (
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
            Radar simplifies the way you consume professional knowledge. <br />
            From discovery to mastery, here's how we help you stay ahead.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
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
  );
}
