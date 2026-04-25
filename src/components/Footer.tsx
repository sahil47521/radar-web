"use client";

import Link from "next/link";
import { Mail, ArrowRight, X, Heart } from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/home";

  return (
    <footer className="bg-navy text-white pt-24 pb-12 relative overflow-hidden">
      {/* Decorative Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-teal/50 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Section */}
          <div className="md:col-span-5 lg:col-span-4">
            <Link href="/" className="inline-block mb-8 group">
              <img
                src="/images/logo-dark.png"
                alt="Radar Logo"
                className="h-9 w-auto object-contain transition-all group-hover:scale-105 brightness-110 mix-blend-screen"
              />
            </Link>
            <p className="text-white/50 mb-8 max-w-sm leading-relaxed text-sm font-medium">
              Elevating human intelligence with curated, high-signal feeds. Join the revolution of high-performers staying ahead of the curve.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <FaXTwitter />, href: "#" },
                { icon: <FaFacebookF />, href: "#" },
                { icon: <FaInstagram />, href: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-teal hover:border-teal transition-all duration-300 group/icon"
                >
                  <span className="text-white transition-all group-hover/icon:scale-110">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="sm:col-start-2">
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8">Product</h4>
              <ul className="space-y-4">
                {['Features', 'Pricing', 'waitlist'].map((link) => (
                  <li key={link}>
                    <Link
                      href={link === 'waitlist' ? '/' : `#${link.toLowerCase()}`}
                      className="text-sm font-bold text-white/50 hover:text-white transition-all flex items-center group/link"
                    >
                      <span className="w-0 group-hover/link:w-3 h-[1px] bg-white mr-0 group-hover/link:mr-2 transition-all"></span>
                      {link === 'waitlist' ? 'Waitlist' : link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.2em] text-white mb-8">Company</h4>
              <ul className="space-y-4">
                {[
                  // { name: 'About Us', href: '/about' },
                  { name: 'Terms of Service', href: '/terms' },
                  { name: 'Privacy Policy', href: '/privacy' },
                  { name: 'Contact', href: 'mailto:hello@tryradar.com' },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-bold text-white/50 hover:text-white transition-all flex items-center group/link"
                    >
                      <span className="w-0 group-hover/link:w-3 h-[1px] bg-white mr-0 group-hover/link:mr-2 transition-all"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 text-white/30 text-[10px] font-bold uppercase tracking-widest">
            <span>© {new Date().getFullYear()} RADAR</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500/50" /> for growth
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
