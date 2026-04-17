"use client";

import Link from "next/link";
import { Mail, ArrowRight, X } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-navy text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <img
                src="/images/logo-dark.png"
                alt="Radar Logo"
                className="h-8 w-auto object-contain transition-transform group-hover:scale-105 mix-blend-screen"
              />
            </Link>
            <p className="text-white/50 mb-8 max-w-xs">
              Stay ahead of the curve with curated insights and expert knowledge.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white transition-all duration-300 group/icon">
                <FaXTwitter className="w-4 h-4 transition-all group-hover/icon:scale-110 text-white group-hover/icon:text-navy" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white transition-all duration-300 group/icon">
                <FaFacebookF className="w-4 h-4 transition-all group-hover/icon:scale-110 text-white group-hover/icon:text-navy" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white transition-all duration-300 group/icon">
                <FaInstagram className="w-4 h-4 transition-all group-hover/icon:scale-110 text-white group-hover/icon:text-navy" />
              </a>
            </div>
          </div>

          {/* Links 1 */}
          <div>
            <h4 className="font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><Link href="#features" className="text-white/50 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#pricing" className="text-white/50 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="text-white/50 hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/home" className="text-white/50 hover:text-white transition-colors">Dashboard</Link></li>
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-white/50 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/terms" className="text-white/50 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-white/50 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="mailto:hello@tryradar.com" className="text-white/50 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-white/50 mb-6 text-sm leading-relaxed">
              Get the latest updates and articles directly in your inbox.
            </p>
            <form className="relative group">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-white/5 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:ring-1 focus:ring-teal transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white rounded-lg hover:bg-white/90 transition-all group/btn">
                <ArrowRight className="w-4 h-4 text-navy" />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col items-center justify-center gap-6">
          <p className="text-white/40 text-xs uppercase tracking-widest font-black text-center">
            © 2026 Radar Made with ❤️ for professional growth.
          </p>
        </div>
      </div>
    </footer>
  );
}
