"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import BlogIllustration from "@/components/BlogIllustration";

import { posts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-24 px-6 min-h-screen">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Text */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-navy mb-6">
                RADAR <br className="hidden lg:block" />
                <span className="text-teal">Journal</span>
              </h1>
              <p className="text-xl md:text-2xl text-navy/60 font-medium">
                Watch this space for <br />
                <span className="text-navy">Feature & Product Updates</span>
              </p>
              
              <div className="mt-12">
                <Link 
                  href="/"
                  className="inline-flex items-center text-teal font-bold hover:gap-2 transition-all group"
                >
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                  <span className="ml-2">Back to Waitlist</span>
                </Link>
              </div>
            </div>

            {/* Right Column - SVG Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2"
            >
              <BlogIllustration />
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
