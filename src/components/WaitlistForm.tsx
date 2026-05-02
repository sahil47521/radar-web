"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import Confetti from "react-confetti";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (value.length > 0) {
      setIsEmailInvalid(!validateEmail(value));
    } else {
      setIsEmailInvalid(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsEmailInvalid(true);
      return;
    }

    setStatus("loading");

    const formData = new URLSearchParams();
    formData.append("email", email);
    formData.append("userGroup", "WaitList");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setStatus("success");
        setEmail("");
        setIsEmailInvalid(false);
        // Reset status after 5 seconds to hide toast and confetti
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="relative w-full max-w-md">
      <AnimatePresence>
        {status === "success" && (
          <>
            <Confetti
              width={windowSize.width}
              height={windowSize.height}
              recycle={false}
              numberOfPieces={200}
              gravity={0.1}
              style={{ position: 'fixed', top: 0, left: 0, zIndex: 100, pointerEvents: 'none' }}
            />
            <motion.div
              initial={{ opacity: 0, y: -50, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: -20, x: "-50%" }}
              className="fixed top-10 left-1/2 z-[200] flex items-center gap-3 px-6 py-4 rounded-2xl bg-navy text-white shadow-2xl shadow-navy/20 border border-white/10 min-w-[320px]"
            >
              <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-bold text-sm">Successfully joined!</p>
                <p className="text-white/60 text-xs">We'll notify you via email as soon as we launch.</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <form onSubmit={handleSubmit} className="relative flex flex-col gap-4">
          <div className="relative group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email Address"
              required
              className={`w-full px-5 py-4 rounded-xl bg-white border-2 text-navy placeholder:text-navy/30 focus:outline-none focus:ring-4 transition-all font-semibold text-sm ${isEmailInvalid
                  ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                  : "border-navy/10 focus:border-navy focus:ring-navy/5"
                }`}
            />
          </div>

          <input type="hidden" name="userGroup" value="WaitList" />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-8 py-4 rounded-xl bg-navy text-white font-black flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-95 disabled:opacity-80 disabled:cursor-not-allowed shadow-xl shadow-navy/20 group relative overflow-hidden"
          >
            <AnimatePresence mode="wait">
              {status === "loading" ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                />
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center gap-2"
                >
                  Join the Waitlist <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </form>
      </motion.div>
    </div>
  );
}
