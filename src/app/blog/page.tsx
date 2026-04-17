"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";

import { posts } from "@/lib/blog-data";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-40 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h1 className="text-5xl md:text-7xl font-black text-navy mb-8">RADAR <span className="text-teal">Journal</span></h1>
            <p className="text-xl text-navy/60 leading-relaxed">
              Insights, updates, and expert opinions on the future of knowledge work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="h-full p-8 rounded-[30px] bg-zinc-50 border border-navy/5 flex flex-col hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all">
                    <div className="inline-flex px-3 py-1 rounded-full bg-teal/10 text-teal text-[10px] font-black uppercase tracking-tighter mb-6 self-start">
                      {post.category}
                    </div>
                    <h2 className="text-2xl font-black text-navy mb-4 group-hover:text-teal transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-navy/60 mb-8 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-navy/5">
                      <div className="flex items-center gap-2 text-xs font-bold text-navy/40">
                        <Calendar className="w-4 h-4" /> {post.date}
                      </div>
                      <div className="p-2 bg-navy rounded-lg text-white group-hover:bg-teal transition-colors">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
