"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";
import MarqueeTicker from "@/components/MarqueeTicker";
import StatCounter from "@/components/StatCounter";
import SectionTag from "@/components/SectionTag";

export default function HomeClient() {
  const brandTeasers = [
    {
      name: "Zauqeen",
      tagline: "Royal Taste. Mughal Heritage.",
      cuisine: "Mughlai Cuisine",
      desc: "Bringing the royal kitchens of the Mughals to your doorstep. Crafted with traditional spices, slow-cooked tender meats, and signature aromatic gravies.",
    },
    {
      name: "Beijing Bites",
      tagline: "Chinese Street Food & Classic Beijing dishes.",
      cuisine: "Chinese",
      desc: "Fast, sizzling, and highly addictive street food classics from the alleys of Beijing. Mastered for rapid delivery while retaining crispy textures.",
    },
    {
      name: "Biryani Xchange",
      tagline: "A celebration of biryani in all its glory.",
      cuisine: "Biryani",
      desc: "From Dum Biryani to spicy Hyderabadi layers, Biryani Xchange celebrates India's favorite meal with premium basmati and signature spice blends.",
    },
    {
      name: "Chai Station",
      tagline: "Your neighborhood tea destination from ₹20.",
      cuisine: "Beverages",
      desc: "Your daily tea escape. Freshly brewed ginger tea, cutting chai, and hot snacks priced for everyday comfort.",
    },
    {
      name: "Salad Story",
      tagline: "Fresh, vibrant, nutritious wholesome salad bowls.",
      cuisine: "Healthy",
      desc: "Reimagining fast food with nutrient-packed wholesome bowls, organic greens, and low-calorie home dressings designed for active lifestyles.",
    },
  ];

  const [activeBrandIdx, setActiveBrandIdx] = useState(0);

  const getCardStyles = (index: number) => {
    const diff = (index - activeBrandIdx + 5) % 5;
    if (diff === 0) {
      return {
        zIndex: 20,
        y: 0,
        scale: 1,
        rotate: 0,
        opacity: 1,
        pointerEvents: "auto" as const,
      };
    }
    return {
      zIndex: 20 - diff,
      y: diff * 12,
      scale: 1 - diff * 0.04,
      rotate: diff % 2 === 0 ? diff * 1.5 : -diff * 1.5,
      opacity: Math.max(0, 1 - diff * 0.25),
      pointerEvents: "none" as const,
    };
  };

  return (
    <div className="w-full bg-richblack select-none">
      {/* SECTION 1 — HERO */}
      <section className="relative h-svh w-full flex flex-col justify-between overflow-hidden pt-20">
        {/* CSS grain texture overlay */}
        <div className="grain-overlay z-10" />

        {/* Chef tossing vegetables in a wok video background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-0"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-chef-tossing-vegetables-in-a-wok-40249-large.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-richblack via-richblack/65 to-richblack/40 pointer-events-none z-0" />

        {/* Subtle radial green bloom */}
        <div className="absolute bottom-0 left-0 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-forest/15 blur-[100px] md:blur-[150px] pointer-events-none -translate-x-1/4 translate-y-1/4 z-0" />

        {/* Hero Content Container */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 w-full flex-grow flex flex-col justify-center relative z-20">
          <div className="max-w-4xl space-y-6">
            {/* Tagline */}
            <ScrollReveal delay={0.1}>
              <span className="font-syne text-xs md:text-sm uppercase tracking-tag bg-forest/60 border border-forest px-4 py-1.5 rounded-full text-lime font-semibold">
                Foodpark India
              </span>
            </ScrollReveal>

            {/* H1 Heading (Slightly Smaller for Video BG) */}
            <ScrollReveal delay={0.2}>
              <h1 className="font-syne text-[30px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream leading-[1.1] tracking-editorial">
                <span className="font-normal block text-white">
                  Elevating Tastes,
                </span>
                <span className="italic font-bold text-cream">Empowering</span>{" "}
                <br className="hidden sm:inline" />
                <span>
                  Entrepreneurs
                  <span className="text-lime inline-block relative">
                    .
                    <span className="absolute bottom-1 md:bottom-2 left-0 w-full h-[3px] md:h-[5px] bg-lime/30 rounded" />
                  </span>
                </span>
              </h1>
            </ScrollReveal>

            {/* Subheading */}
            <ScrollReveal delay={0.3}>
              <p className="font-syne text-sm md:text-base text-gray max-w-xl leading-relaxed uppercase tracking-wider font-semibold">
                Multi-Brand Cloud Kitchen
              </p>
            </ScrollReveal>

            {/* Buttons with pop-up motions */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Link
                    href="/franchise"
                    className="inline-flex items-center justify-center bg-lime text-richblack font-syne font-semibold px-8 py-3.5 rounded-full text-base shadow-[0_4px_20px_rgba(212,223,0,0.15)] hover:shadow-[0_4px_25px_rgba(212,223,0,0.3)] transition-shadow duration-300 w-full sm:w-auto"
                  >
                    Explore Models
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  <Link
                    href="/brands"
                    className="inline-flex items-center justify-center border border-lime text-lime font-syne font-semibold px-8 py-3.5 rounded-full text-base hover:bg-lime hover:text-richblack transition-colors duration-300 w-full sm:w-auto"
                  >
                    Our Brands
                  </Link>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-lime"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>

        {/* Hero Bottom Ticker */}
        <div className="w-full">
          <MarqueeTicker />
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 2 — WHY FOODPARK (Vertical Staggered Layout) */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto relative z-10">
        <ScrollReveal staggerChildren className="space-y-16">
          {/* Header */}
          <div className="max-w-2xl">
            <SectionTag text="Why Foodpark" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              A New Era of Food Business
            </h2>
            <p className="font-dmsans text-sm md:text-base text-gray mt-4 leading-relaxed">
              We combine logistics, technology, and culinary expertise to run highly profitable kitchens under a completely hands-off model.
            </p>
          </div>

          {/* Staggered Vertical Alternating Sections */}
          <div className="flex flex-col space-y-12">
            {/* Staggered Item 1 */}
            <ScrollRevealItem className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-forest/20 pb-12 last:border-0 last:pb-0">
              <div className="space-y-4">
                <span className="font-spacegrotesk text-5xl md:text-6xl font-extrabold text-lime block leading-none">
                  01
                </span>
                <h3 className="font-syne text-2xl font-bold text-cream">
                  10+ Food Brands
                </h3>
                <p className="font-dmsans text-sm text-gray leading-relaxed max-w-lg">
                  Multiple cuisines under one roof, targeting different customer demographies and meal times to maximize daily orders.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="bg-forest/10 border border-forest/30 p-8 rounded-2xl text-center hidden md:block"
              >
                <span className="font-spacegrotesk text-xs uppercase text-lime tracking-widest block mb-2 font-bold">
                  Cuisine Diversity
                </span>
                <p className="font-dmsans text-xs text-gray/80">
                  Mughlai • Chinese • South Indian • Healthy Bowls • Beverages
                </p>
              </motion.div>
            </ScrollRevealItem>

            {/* Staggered Item 2 (Alternating visual placement) */}
            <ScrollRevealItem className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-forest/20 pb-12 last:border-0 last:pb-0">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="bg-forest/10 border border-forest/30 p-8 rounded-2xl text-center hidden md:block order-2 md:order-1"
              >
                <span className="font-spacegrotesk text-xs uppercase text-lime tracking-widest block mb-2 font-bold">
                  Regional Focus
                </span>
                <p className="font-dmsans text-xs text-gray/80">
                  Lucknow Central Kitchen Hub • local supply chains
                </p>
              </motion.div>
              <div className="space-y-4 order-1 md:order-2">
                <span className="font-spacegrotesk text-5xl md:text-6xl font-extrabold text-lime block leading-none">
                  02
                </span>
                <h3 className="font-syne text-2xl font-bold text-cream">
                  Lucknow Roots & Scaling
                </h3>
                <p className="font-dmsans text-sm text-gray leading-relaxed max-w-lg">
                  Starting locally to perfect supply chains and recipes, and now expanding actively into regional key sectors.
                </p>
              </div>
            </ScrollRevealItem>

            {/* Staggered Item 3 */}
            <ScrollRevealItem className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-forest/20 pb-12 last:border-0 last:pb-0">
              <div className="space-y-4">
                <span className="font-spacegrotesk text-5xl md:text-6xl font-extrabold text-lime block leading-none">
                  03
                </span>
                <h3 className="font-syne text-2xl font-bold text-cream">
                  FICO Model
                </h3>
                <p className="font-dmsans text-sm text-gray leading-relaxed max-w-lg">
                  Franchise Invested, Company Operated. You invest in the assets. We manage the kitchen, HR, delivery platforms, and recipes.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="bg-forest/10 border border-forest/30 p-8 rounded-2xl text-center hidden md:block"
              >
                <span className="font-spacegrotesk text-xs uppercase text-lime tracking-widest block mb-2 font-bold">
                  Passive Ownership
                </span>
                <p className="font-dmsans text-xs text-gray/80">
                  Zero daily operational hassle • Structured monthly earnings
                </p>
              </motion.div>
            </ScrollRevealItem>
          </div>
        </ScrollReveal>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 3 — RELOCATED OUR STORY & VISION */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 bg-[#161614] relative z-10">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6">
              <SectionTag text="Our Story" />
              <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
                A Pioneering Force in the Culinary Landscape
              </h2>
              <div className="font-dmsans text-gray text-base leading-relaxed space-y-4">
                <p>
                  We believe that the future of dining is digital, hyper-efficient, and multi-cuisine. Traditional restaurants spend massive capital on seating space, waiters, and prime real estate. Foodpark bypasses these inefficiencies entirely.
                </p>
                <p>
                  By building centralized, delivery-first cloud kitchens that house 10 distinct food brands under one roof, we optimize kitchen real estate, minimize waste, and capture every segment of food demand — from Mughlai feasts and street food to health bowls and tea.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-forest/20">
                <h3 className="font-syne text-xl font-bold text-cream">
                  Our Vision
                </h3>
                <p className="font-dmsans text-sm text-gray/80 leading-relaxed">
                  Disrupting traditional food business entry barriers by offering an investment-first, operations-zero cloud kitchen model.
                </p>
              </div>
            </div>

            {/* Right quote card */}
            <div className="lg:col-span-5 relative bg-forest/20 border border-forest/35 p-8 md:p-12 rounded-3xl overflow-hidden min-h-[300px] flex flex-col justify-center">
              <div className="absolute top-4 left-6 text-lime/10">
                <Quote size={100} className="stroke-[1.5]" />
              </div>
              <p className="font-syne italic text-lg md:text-2xl text-cream relative z-10 leading-relaxed">
                &ldquo;Today, Foodpark is not just a business idea, it&apos;s a vision to create opportunities, to empower dreams, and to redefine the way India experiences food.&rdquo;
              </p>
              <span className="block font-spacegrotesk text-xs uppercase tracking-widest text-lime font-bold mt-4 relative z-10">
                — Foodpark Ventures India
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 4 — ANIMATED STATS */}
      <section className="bg-forest py-16 md:py-20 relative z-10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8">
          <ScrollReveal staggerChildren className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-0">
            {/* Stat 1 */}
            <ScrollRevealItem className="flex flex-col justify-center items-center text-center lg:border-r last:border-r-0 border-lime/30 lg:px-4">
              <StatCounter value={350000} prefix="₹" isCurrency />
              <p className="font-dmsans text-xs md:text-sm text-cream uppercase tracking-wider font-semibold">
                Investment Setup
              </p>
            </ScrollRevealItem>

            {/* Stat 2 */}
            <ScrollRevealItem className="flex flex-col justify-center items-center text-center lg:border-r last:border-r-0 border-lime/30 lg:px-4">
              <StatCounter value={15000} prefix="₹" suffix="/mo" isCurrency />
              <p className="font-dmsans text-xs md:text-sm text-cream uppercase tracking-wider font-semibold">
                Fixed Monthly Returns
              </p>
            </ScrollRevealItem>

            {/* Stat 3 */}
            <ScrollRevealItem className="flex flex-col justify-center items-center text-center lg:border-r last:border-r-0 border-lime/30 lg:px-4">
              <StatCounter value={20} prefix="~" suffix=" Months" />
              <p className="font-dmsans text-xs md:text-sm text-cream uppercase tracking-wider font-semibold">
                Payback Period
              </p>
            </ScrollRevealItem>

            {/* Stat 4 */}
            <ScrollRevealItem className="flex flex-col justify-center items-center text-center lg:px-4">
              <StatCounter value={370} suffix="%" />
              <p className="font-dmsans text-xs md:text-sm text-cream uppercase tracking-wider font-semibold">
                4-Year Growth
              </p>
            </ScrollRevealItem>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 5 — BRAND PREVIEW */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto relative z-10">
        <ScrollReveal staggerChildren className="space-y-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <SectionTag text="Brand Preview" />
              <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
                Diverse Brand Portfolio
              </h2>
              <p className="font-dmsans text-sm md:text-base text-gray mt-4">
                Each sub-brand crafted to fulfill specific consumer cravings across India.
              </p>
            </div>
            <Link
              href="/brands"
              className="inline-flex items-center text-lime font-syne font-bold text-sm hover:text-white hover:translate-x-1 transition-all duration-300 md:mb-1 group"
            >
              View All Brands{" "}
              <ArrowRight
                size={16}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          {/* Interactive Card Stack Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Nav column (Horizontal scrollable tabs on mobile, vertical list on desktop) */}
            <div className="lg:col-span-5 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-3 lg:gap-4 no-scrollbar pb-4 lg:pb-0 w-full">
              {brandTeasers.map((brand, index) => {
                const isActive = index === activeBrandIdx;
                return (
                  <button
                    key={brand.name}
                    onClick={() => setActiveBrandIdx(index)}
                    className={`flex-shrink-0 text-left px-5 py-4 rounded-xl border transition-all duration-300 flex items-center justify-between w-[220px] sm:w-[260px] lg:w-full ${
                      isActive
                        ? "bg-forest/20 border-lime text-lime shadow-[0_4px_20px_rgba(212,223,0,0.05)] lg:translate-x-1"
                        : "bg-[#1A1A18]/60 border-forest/20 text-gray hover:border-lime/30 hover:text-white"
                    }`}
                  >
                    <div className="space-y-1">
                      <span className="font-spacegrotesk text-[10px] uppercase tracking-widest text-lime/75 font-semibold block">
                        {brand.cuisine}
                      </span>
                      <span className="font-syne text-lg md:text-xl font-bold block">
                        {brand.name}
                      </span>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 -rotate-90 hidden lg:block ${
                        isActive ? "text-lime translate-x-1" : "text-gray/40"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Card Deck column */}
            <div className="lg:col-span-7 relative h-[380px] sm:h-[400px] w-full max-w-[500px] mx-auto mt-6 lg:mt-0">
              {brandTeasers.map((brand, index) => (
                <motion.div
                  key={brand.name}
                  style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                  }}
                  animate={getCardStyles(index)}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                  }}
                  className="origin-bottom"
                >
                  <div className="w-full h-full bg-[#1A1A18] border-2 border-forest rounded-3xl p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
                    {/* Big background letter watermark */}
                    <div className="absolute -top-12 -right-8 text-lime/5 font-spacegrotesk text-[180px] font-black select-none pointer-events-none">
                      {brand.name.charAt(0)}
                    </div>

                    <div className="space-y-6 relative z-10">
                      <div className="flex items-center justify-between">
                        <span className="bg-lime/10 border border-lime/25 text-lime font-spacegrotesk text-[10px] uppercase font-bold px-3 py-1 rounded-full">
                          {brand.cuisine}
                        </span>
                        <span className="font-spacegrotesk text-xs uppercase tracking-widest text-gray/40 font-bold">
                          Brand Preview
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="font-syne text-3xl font-extrabold text-cream leading-none">
                          {brand.name}
                        </h3>
                        <p className="font-dmsans italic text-sm text-lime/80">
                          &ldquo;{brand.tagline}&rdquo;
                        </p>
                      </div>

                      <p className="font-dmsans text-sm text-gray/80 leading-relaxed">
                        {brand.desc}
                      </p>
                    </div>

                    <div className="relative z-10 pt-4 border-t border-forest/20 flex items-center justify-between">
                      <Link
                        href="/brands"
                        className="inline-flex items-center text-lime font-syne font-bold text-sm hover:text-white transition-colors duration-200 group"
                      >
                        Explore Menu{" "}
                        <ArrowRight
                          size={16}
                          className="ml-2 group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 6 — CTA BAND */}
      <section className="bg-lime py-16 md:py-24 relative z-10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col items-center justify-center text-center gap-8 text-richblack">
          <div className="max-w-2xl space-y-4 flex flex-col items-center text-center">
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold leading-tight tracking-editorial">
              Ready to Own a Restaurant Without Running It?
            </h2>
            <p className="font-dmsans text-sm md:text-base opacity-90 leading-relaxed max-w-xl">
              Join Foodpark&apos;s FICO model partnership with ₹3,50,000 and let us handle everything.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Link
              href="/franchise"
              className="inline-flex items-center justify-center bg-richblack text-lime font-syne font-bold px-8 py-4 rounded-full text-base shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.25)] transition-shadow duration-300 w-full sm:w-auto"
            >
              View Membership Model
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
