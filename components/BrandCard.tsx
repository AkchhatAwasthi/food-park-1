"use client";

import React from "react";
import { motion } from "framer-motion";

interface BrandCardProps {
  name: string;
  tagline: string;
  cuisine: string;
}

export default function BrandCard({ name, tagline, cuisine }: BrandCardProps) {
  const initial = name.charAt(0);

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="group relative bg-[#1A1A18] border border-forest/40 p-8 rounded-2xl flex flex-col justify-between overflow-hidden min-h-[220px] cursor-pointer hover:border-lime hover:shadow-[0_12px_35px_-12px_rgba(212,223,0,0.3)] transition-colors duration-300"
    >
      {/* Background Decorative Initial */}
      <div className="absolute top-2 right-4 font-spacegrotesk text-[80px] font-black text-lime/5 leading-none select-none group-hover:text-lime/15 transition-colors duration-300">
        {initial}
      </div>

      <div className="relative z-10">
        <h3 className="font-syne text-xl font-bold text-cream mb-2 group-hover:text-white transition-colors duration-300">
          {name}
        </h3>
        <p className="font-dmsans italic text-sm text-gray/80 mb-6 leading-relaxed">
          {tagline}
        </p>
      </div>

      <div className="relative z-10 flex">
        <span className="font-spacegrotesk text-xs uppercase tracking-wider bg-forest/80 px-3 py-1 rounded-full text-lime font-semibold border border-lime/10">
          {cuisine}
        </span>
      </div>
    </motion.div>
  );
}
