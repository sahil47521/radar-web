"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Terminal, Briefcase } from "lucide-react";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
}

export default function TeamMember({ name, role, image }: TeamMemberProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-[400px] w-full cursor-pointer perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-full h-full transform-style-3d shadow-xl rounded-[30px]"
      >
        {/* Front Card */}
        <div className="absolute inset-0 backface-hidden rounded-[30px] overflow-hidden bg-white border border-navy/5">
          <div className="h-2/3 bg-zinc-100 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent z-10"></div>
             {/* Simple colorful placeholder since no images yet */}
             <div className={`w-full h-full bg-gradient-to-br ${name.length % 2 === 0 ? 'from-teal to-teal' : 'from-navy to-teal'}`}></div>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-black text-navy mb-1">{name}</h3>
            <p className="text-navy/50 text-sm font-bold uppercase tracking-wider">{role}</p>
          </div>
        </div>

        {/* Back Card */}
        <div 
          className="absolute inset-0 backface-hidden rounded-[30px] bg-navy p-8 flex flex-col items-center justify-center text-center transform-rotate-y-180"
        >
          <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mb-6">
            <Image
                src="/next.svg"
                alt="logo"
                width={24}
                height={24}
                className="invert"
            />
          </div>
          <p className="text-white/60 text-sm mb-8 italic">
            "Passionate about building the future of curated knowledge and expert insights."
          </p>
          <div className="flex gap-4">
            <Terminal className="w-5 h-5 text-white/40 hover:text-teal transition-colors" />
            <Briefcase className="w-5 h-5 text-white/40 hover:text-teal transition-colors" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
