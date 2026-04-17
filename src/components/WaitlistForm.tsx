"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate Formspree submission
    // Real endpoint would be: https://formspree.io/f/your_id
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setTimeout(() => {
        router.push("/thanks");
      }, 1000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="w-full max-w-md"
    >
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex flex-col md:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className="flex-1 px-6 py-4 rounded-xl bg-white border-2 border-navy text-navy placeholder:text-navy/40 focus:outline-none focus:ring-2 focus:ring-teal/20 transition-all"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-4 rounded-xl bg-navy border-2 border-navy hover:bg-white hover:text-navy text-white font-black flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-navy/20 group"
          >
            {status === "loading" ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : status === "success" ? (
              <CheckCircle2 className="w-5 h-5" />
            ) : (
              <>
                Join <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </form>
      <p className="mt-4 text-navy/40 text-[10px] font-bold uppercase tracking-widest text-center md:text-left ml-2">
        Zero spam. Cancel anytime.
      </p>
    </motion.div>
  );
}
