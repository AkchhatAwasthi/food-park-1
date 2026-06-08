"use client";

import React from "react";
import { motion } from "framer-motion";

const logoMap: Record<string, string> = {
  "The Indian Plate": "https://res.cloudinary.com/dmj0smemf/image/upload/v1780859697/the_indian_plate_hylqcs.png",
  "Toast Mafia": "https://res.cloudinary.com/dmj0smemf/image/upload/v1780859697/toast_mafia_novo2u.png",
  "Zauqeen": "https://res.cloudinary.com/dmj0smemf/image/upload/v1780859697/zauqeen_zgx73i.png",
  "Sambhar Sutra": "https://res.cloudinary.com/dmj0smemf/image/upload/v1780859696/sambhar_sutra_omtbx5.png",
  "Pizza Street": "https://res.cloudinary.com/dmj0smemf/image/upload/v1780859696/pizza_street_h7g1t0.png",
  "Salad Story": "https://res.cloudinary.com/dmj0smemf/image/upload/v1780859696/salad_story_gvglu4.png",
  "Chat Bazar": "https://res.cloudinary.com/dmj0smemf/image/upload/v1780859696/chat_bazar_sxlxxk.png",
  "Chai Station": "https://res.cloudinary.com/dmj0smemf/image/upload/v1780859696/chai_station_aesc2t.png",
  "Beijing Bites": "https://res.cloudinary.com/dmj0smemf/image/upload/v1780859696/beiging_Bikes_y0ioyn.png",
  "Biryani Exchange": "https://res.cloudinary.com/dmj0smemf/image/upload/v1780859695/biryani_exchange_qrwmk4.png",
};

interface BrandCardProps {
  name: string;
  tagline: string;
  cuisine: string;
}

export default function BrandCard({ name, tagline, cuisine }: BrandCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="group relative bg-[#1A1A18] border border-forest/40 p-8 rounded-2xl flex flex-col justify-between overflow-hidden min-h-[220px] cursor-pointer hover:border-lime hover:shadow-[0_12px_35px_-12px_rgba(212,223,0,0.3)] transition-colors duration-300"
    >
      {/* Brand Info with Circular Logo */}
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6">
        {/* Circular Logo */}
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-gray-300/30 bg-gray-800/30 shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300">
            <img
              src={logoMap[name] ?? `/brands/${name.toLowerCase()}.png`}
              alt={`${name} logo`}
              className="max-w-full max-h-full object-contain rounded-full"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </div>

        {/* Text Info */}
        <div className="relative z-10 flex flex-col">
          <h3 className="font-syne text-xl font-bold text-cream mb-2 group-hover:text-white transition-colors duration-300">
            {name}
          </h3>
          <p className="font-dmsans italic text-sm text-gray/80 mb-6 leading-relaxed">
            {tagline}
          </p>
          <span className="font-spacegrotesk text-xs uppercase tracking-wider bg-forest/80 px-3 py-1 rounded-full text-lime font-semibold border border-lime/10">
            {cuisine}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
