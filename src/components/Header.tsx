"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Radar, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const headerBg = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.8)"]
  );

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <motion.header
      style={{ backgroundColor: headerBg }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b",
        isScrolled ? "py-3 border-navy/10" : "py-4 md:py-6 border-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/home" className="flex items-center gap-2 group">
          <img 
            src="/images/logo-light.png" 
            alt="Radar Logo" 
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-navy/70 hover:text-navy font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/"
            className="px-6 py-2.5 rounded-full bg-navy text-white font-bold hover:bg-navy/90 transition-all transform hover:scale-105 active:scale-95"
          >
            Get Started
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-navy"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      </motion.header>

      {/* Mobile Sidebar & Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-navy/20 backdrop-blur-sm z-[90] md:hidden"
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: "100%", opacity: 1 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 1 }}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
              className="fixed inset-0 bg-white z-[100] md:hidden p-8 flex flex-col overflow-y-auto"
            >
            <div className="flex justify-between items-center mb-10">
              <img src="/images/logo-light.png" alt="Logo" className="h-8 w-auto" />
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-navy">
                <X className="w-8 h-8" />
              </button>
            </div>

            <nav className="flex flex-col items-start gap-4 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-xl font-bold text-navy hover:text-teal transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto">
              <Link
                href="/"
                className="w-full max-w-xs py-5 rounded-2xl bg-navy text-white font-bold text-xl text-center shadow-lg shadow-navy/20 block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
