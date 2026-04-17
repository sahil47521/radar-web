"use client";

import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface StatsCounterProps {
  end: number;
  suffix?: string;
  label: string;
}

export default function StatsCounter({ end, suffix = "", label }: StatsCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-black text-navy mb-2">
        {isInView ? <CountUp end={end} duration={2.5} /> : "0"}
        {suffix}
      </div>
      <div className="text-navy/50 font-medium uppercase tracking-widest text-xs">
        {label}
      </div>
    </div>
  );
}
