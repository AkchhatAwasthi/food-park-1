"use client";

import React from "react";
import { Check, Building2, ShieldCheck, MapPin, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";

export default function AboutClient() {
  const pillars = [
    {
      num: "01",
      title: "Reduced Operational Hassles",
      desc: "Complete end-to-end management of kitchen staff, procurement, supply chain, and delivery channels handled by our central team.",
    },
    {
      num: "02",
      title: "Brand Recognition",
      desc: "Instant access to a diverse portfolio of 10 established and highly targeted food brands that consumers already love and order from.",
    },
    {
      num: "03",
      title: "Streamlined Processes",
      desc: "Optimized preparation times, standardized recipes, and state-of-the-art kitchen automation systems to drive maximum unit efficiency.",
    },
    {
      num: "04",
      title: "Long-Term Partnership",
      desc: "A collaborative partnership growth network built on transparency, offering guaranteed fixed payouts or high-upside revenue shares.",
    },
  ];

  return (
    <div className="w-full bg-richblack select-none">
      {/* SECTION 1 — PAGE HERO (Centered Layout) */}
      <section className="relative bg-forest pt-32 pb-24 md:py-[120px] px-6 md:px-8 border-b border-lime/10 overflow-hidden">
        <div className="grain-overlay" />
        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center text-center justify-center">
          <ScrollReveal className="max-w-3xl space-y-6 flex flex-col items-center text-center mx-auto">
            <SectionTag text="About Foodpark" />
            <h1 className="font-syne text-[36px] sm:text-5xl md:text-7xl font-extrabold text-cream leading-tight tracking-editorial">
              Redefining the Food Operations Blueprint
            </h1>
            <p className="font-dmsans text-base md:text-lg text-gray max-w-2xl leading-relaxed">
              The mechanics behind India&apos;s premier multi-brand delivery-first network, built on optimized assets and passive investor earnings.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 2 — FICO MODEL EXPLAINER (Vertical Staggered Format) */}
      <section className="bg-forest py-20 md:py-[120px] px-6 md:px-8 overflow-hidden relative z-10">
        <div className="max-w-[1280px] mx-auto space-y-12">
          {/* Header */}
          <div className="max-w-2xl">
            <SectionTag text="The FICO Model" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              Franchise Invested. Company Operated.
            </h2>
            <p className="font-dmsans text-sm md:text-base text-cream/80 mt-4">
              The ultimate passive income vehicle in the food industry. You finance the setup; we take full ownership of the day-to-day operations and payouts.
            </p>
          </div>

          {/* Vertical alternating stack */}
          <ScrollReveal className="flex flex-col space-y-8 max-w-4xl mx-auto">
            {/* You Own It */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-richblack border border-lime p-8 md:p-10 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl"
            >
              <div className="space-y-4 max-w-xl">
                <span className="font-spacegrotesk text-xs uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded-full border border-lime/20 inline-block font-semibold">
                  You Own It
                </span>
                <h3 className="font-syne text-2xl font-bold text-cream">
                  The Asset Investor
                </h3>
                <p className="font-dmsans text-sm text-gray leading-relaxed">
                  Provide the initial ₹3,50,000 investment setup fee. You gain fractional franchise ownership of a state-of-the-art multi-brand cloud kitchen workspace, securing high value commercial kitchen assets.
                </p>
              </div>
              <div className="text-lime bg-forest/20 p-4 rounded-full border border-lime/10 hidden md:block">
                <Building2 size={40} />
              </div>
            </motion.div>

            {/* We Run It */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-lime text-richblack p-8 md:p-10 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl"
            >
              <div className="space-y-4 max-w-xl">
                <span className="font-spacegrotesk text-xs uppercase tracking-widest text-richblack bg-richblack/10 px-3 py-1 rounded-full border border-richblack/20 inline-block font-bold">
                  We Run It
                </span>
                <h3 className="font-syne text-2xl font-bold text-richblack">
                  The Operations Engine
                </h3>
                <p className="font-dmsans text-sm text-richblack/80 leading-relaxed font-medium">
                  We handle staff hiring, training, ingredient sourcing, recipe consistency, delivery listings (Swiggy/Zomato), local marketing, utilities, bookkeeping, and payout distributions.
                </p>
              </div>
              <div className="text-richblack bg-richblack/10 p-4 rounded-full border border-richblack/15 hidden md:block">
                <ShieldCheck size={40} />
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Checklist Points */}
          <div className="max-w-md mx-auto pt-8">
            <h4 className="font-syne text-lg font-bold text-cream mb-6 text-center">
              FICO Model Benefits
            </h4>
            <div className="flex flex-col space-y-4 relative pl-8 border-l border-lime/30">
              {[
                "No staff hiring or HR management issues",
                "No expensive commercial equipment sourcing needed",
                "Zero recurring monthly utility or kitchen expenses",
                "Full corporate brand growth & advertising support",
              ].map((point, index) => (
                <ScrollReveal
                  key={point}
                  delay={index * 0.1}
                  className="relative space-y-1"
                >
                  <div className="absolute -left-[41px] top-1 w-6 h-6 rounded-full bg-richblack border-2 border-lime flex items-center justify-center text-lime">
                    <Check size={12} className="stroke-[3]" />
                  </div>
                  <p className="font-dmsans text-sm font-medium text-cream">
                    {point}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 3 — FOUR PILLARS (Vertical Columns Format) */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto relative z-10">
        <ScrollReveal staggerChildren className="space-y-12">
          {/* Header */}
          <div className="max-w-2xl">
            <SectionTag text="Core Strengths" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              Four Pillars of Success
            </h2>
            <p className="font-dmsans text-sm md:text-base text-gray mt-4">
              Our cloud kitchen blueprint is built on four core assets that ensure stable returns and high scalability.
            </p>
          </div>

          {/* Re-laid out 4 Pillars in a clean vertical timeline/stack */}
          <div className="relative max-w-3xl mx-auto pl-8 border-l border-dashed border-lime/30 space-y-10">
            {pillars.map((pillar) => (
              <ScrollRevealItem key={pillar.num} className="relative group">
                {/* Pillar Number Dot */}
                <div className="absolute -left-[49px] top-1.5 w-8 h-8 rounded-full bg-richblack border-2 border-lime flex items-center justify-center text-lime font-spacegrotesk text-sm font-bold group-hover:bg-lime group-hover:text-richblack transition-colors duration-300 shadow-[0_0_12px_rgba(212,223,0,0.1)]">
                  {pillar.num}
                </div>

                {/* Content Box */}
                <motion.div
                  whileHover={{ x: 8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="bg-[#1A1A18] border border-forest/30 p-8 rounded-2xl relative overflow-hidden cursor-pointer"
                >
                  <h3 className="font-syne text-xl font-bold text-cream group-hover:text-white transition-colors duration-200 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-dmsans text-sm text-gray/80 leading-relaxed">
                    {pillar.desc}
                  </p>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-lime w-0 group-hover:w-full transition-all duration-500" />
                </motion.div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 4 — LUCKNOW HQ FOCUS */}
      <section className="bg-forest py-20 md:py-[120px] px-6 md:px-8 overflow-hidden relative z-10">
        <div className="max-w-[1280px] mx-auto space-y-12">
          {/* Header */}
          <div className="max-w-2xl">
            <SectionTag text="Our Flagship Base" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              Lucknow Central Operations
            </h2>
            <p className="font-dmsans text-sm md:text-base text-cream/80 mt-4">
              Proudly rooted in Lucknow. Our central flagship facility serves as the testing ground for recipe standards and national scale-ups.
            </p>
          </div>

          {/* Premium Lucknow HQ Card */}
          <ScrollReveal className="max-w-2xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-richblack border border-lime p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-lime/10">
                <MapPin size={120} className="stroke-[1]" />
              </div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center space-x-3">
                  <span className="bg-lime text-richblack font-spacegrotesk text-xs uppercase font-extrabold px-4 py-1.5 rounded-full border border-lime/25">
                    Lucknow (Flagship HQ)
                  </span>
                </div>

                <h3 className="font-syne text-2xl md:text-3xl font-bold text-cream">
                  Flagship Central Kitchen
                </h3>

                <p className="font-dmsans text-sm text-gray leading-relaxed">
                  Foodpark operates its flagship central cloud kitchen exclusively out of Lucknow, Uttar Pradesh. By concentrating our technical machinery, supply chains, and master culinary staff in a single focused hub, we guarantee 100% quality consistency across our 10 sub-brands.
                </p>

                {/* Operations Stats List */}
                <div className="flex flex-col space-y-4 pt-4 border-t border-forest/20 font-spacegrotesk text-sm text-cream">
                  <div className="flex items-center space-x-3">
                    <Zap size={16} className="text-lime" />
                    <span>Capacity: 2,500+ Daily Orders</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap size={16} className="text-lime" />
                    <span>Active Brands: 10 Culinary Concepts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap size={16} className="text-lime" />
                    <span>Area Covered: Pan-Lucknow Delivery</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
