"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";
import { brandLogos } from "../brandLogos";

export default function AboutClient() {
  const featuredBrands = [
    {
      name: "Zauqeen",
      tagline: "Mughlai cuisine the way the Nawabs intended it.",
      image: "https://res.cloudinary.com/dmj0smemf/image/upload/v1780912330/e92872fcfde7e1a0541f1f5835a4cb38_uvrkc9.jpg",
    },
    {
      name: "Biryani Xchange",
      tagline: "Every biryani style. One kitchen.",
      image: "https://res.cloudinary.com/dmj0smemf/image/upload/v1780899980/9615d1db6143c9642f6d585616b97e26_isgcag.jpg",
    },
    {
      name: "Beijing Bites",
      tagline: "Wok fire. Umami. Zero compromise.",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=1200&h=360&q=80",
    },
    {
      name: "Chaat Bazaar",
      tagline: "Street food that survives the delivery journey.",
      image: "https://res.cloudinary.com/dmj0smemf/image/upload/v1780910804/4341312ac0b006b1dfeab30e0a4ba9db_k4jjwl.jpg",
    },
    {
      name: "Chai Station",
      tagline: "India runs on chai. We take that seriously.",
      image: "https://res.cloudinary.com/dmj0smemf/image/upload/v1780899980/d16586a319164842e439353fcf7516ae_dgpcom.jpg",
    },
  ];

  const regions = [
    {
      name: "North India",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&h=280&q=80",
      cities: "Lucknow, Delhi NCR, Chandigarh, Jaipur, Kanpur",
    },
    {
      name: "East India",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&h=280&q=80",
      cities: "Patna, Guwahati, Kolkata, Bhubaneswar",
    },
    {
      name: "Central & West",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&h=280&q=80",
      cities: "Nagpur, Indore, Ahmedabad, Mumbai, Pune",
    },
    {
      name: "South India",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&h=280&q=80",
      cities: "Hyderabad, Bengaluru, Chennai, Kochi",
    },
  ];

  return (
    <div className="w-full bg-richblack select-none overflow-x-hidden">
      {/* SECTION 1 — HERO (Split layout) */}
      <section className="relative min-h-[50vh] lg:min-h-[70vh] flex flex-col lg:flex-row items-stretch overflow-hidden z-10 border-b border-lime/10">
        <div className="grain-overlay pointer-events-none z-10" />
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-1/2 bg-richblack flex flex-col justify-center py-16 px-5 md:py-24 md:px-8 lg:px-16 z-20">
          <div className="space-y-6 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <SectionTag text="Our Story" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-syne text-3xl md:text-5xl lg:text-[52px] font-extrabold text-cream leading-[1.15] tracking-editorial"
            >
              We Started With One Kitchen, One City, and One Stubborn Belief.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-dmsans text-base md:text-lg text-lime tracking-wide font-medium uppercase mt-2"
            >
              Born in Lucknow. Built for India.
            </motion.p>
          </div>
        </div>

        {/* Right Column: Full-Height Image (On mobile: top full-width, text below) */}
        <div className="w-full lg:w-1/2 min-h-[280px] lg:min-h-full relative overflow-hidden order-first lg:order-last">
          <img
            src="https://res.cloudinary.com/dmj0smemf/image/upload/v1780912133/a7541867871b9a64312ed41133ef6d0b_j7bbj1.jpg"
            alt="Lucknow Nawabi Biryani Food"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-richblack/60 to-transparent lg:from-richblack via-transparent lg:via-richblack/20 lg:to-transparent pointer-events-none" />
        </div>
      </section>

      {/* SECTION 2 — OUR STORY (Three simplified blocks) */}
      <section className="py-16 px-5 md:py-24 md:px-8 lg:px-16 max-w-[1280px] mx-auto relative z-10 space-y-20">
        {/* Block A — Text left, Image right */}
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <SectionTag text="The Beginning" />
            <h2 className="font-syne text-2xl md:text-4xl font-bold text-cream">
              Lucknow Has Incredible Food, But Lacked Delivery Scale
            </h2>
            <p className="font-dmsans text-sm md:text-base text-gray leading-relaxed max-w-xl">
              It started with a problem we couldn&apos;t stop thinking about. Lucknow — a city whose very air carries the aroma of slow-cooked dum biryani and simmering nihari — had no shortage of incredible food. What it lacked was a scalable, modern way to get that food to people where they were.
            </p>
          </div>
          <div className="lg:col-span-5 h-[240px] sm:h-[300px] rounded-2xl overflow-hidden border border-forest/30 shadow-md">
            <img
              src="https://res.cloudinary.com/dmj0smemf/image/upload/v1780911739/4e31c084f48e2d67d0bdccca7432a1df_pcz6ku.jpg"
              alt="Professional Indian Chef Cooking"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>

        {/* Block B — Centered Pull Quote */}
        <ScrollReveal className="w-full bg-[#1A1A18]/50 border border-forest/20 py-12 px-6 sm:px-12 rounded-3xl text-center max-w-4xl mx-auto shadow-inner">
          <p className="font-syne italic text-lg sm:text-2xl lg:text-[26px] text-lime leading-relaxed max-w-3xl mx-auto">
            &ldquo;We asked ourselves — what if you stripped the restaurant down to just what actually matters? The food, the systems, and the delivery.&rdquo;
          </p>
        </ScrollReveal>

        {/* Block C — Text left, Image right */}
        <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <SectionTag text="The Declaration" />
            <h2 className="font-syne text-2xl md:text-4xl font-bold text-cream">
              Built on Pure Craving and Airtight Systems
            </h2>
            <p className="font-dmsans text-sm md:text-base text-gray leading-relaxed max-w-xl">
              We built our first cloud kitchen in Lucknow — not as an experiment, but as a declaration. Every brand that followed was born from a real craving and a real obsession with getting it right.
            </p>
          </div>
          <div className="lg:col-span-5 h-[240px] sm:h-[300px] rounded-2xl overflow-hidden border border-forest/30 shadow-md">
            <img
              src="https://res.cloudinary.com/dmj0smemf/image/upload/v1780911739/a8ded342ac92b01130c954832b0a7a84_dreosv.jpg"
              alt="Food Delivery Packaging Modern Branded"
              className="w-full h-full object-cover"
            />
          </div>
        </ScrollReveal>
      </section>

      {/* SECTION 3 — NEW: KITCHEN IN ACTION PHOTO STRIP */}
      <section className="w-full z-10 relative overflow-hidden bg-richblack border-y border-lime/10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          <div className="h-[200px] lg:h-[300px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=500&h=300&q=80"
              alt="Commercial kitchen fire wok cooking"
              className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
            />
          </div>
          <div className="h-[200px] lg:h-[300px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&w=500&h=300&q=80"
              alt="Chef plating food close up"
              className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
            />
          </div>
          <div className="h-[200px] lg:h-[300px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&w=500&h=300&q=80"
              alt="Food packaging delivery box"
              className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
            />
          </div>
          <div className="h-[200px] lg:h-[300px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=500&h=300&q=80"
              alt="Indian food preparation spices"
              className="w-full h-full object-cover filter brightness-75 hover:brightness-100 transition-all duration-300"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4 — VISION STATEMENT */}
      <section className="bg-richblack py-16 px-5 md:py-24 md:px-8 lg:px-16 relative z-10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto text-center space-y-4">
          <span className="font-spacegrotesk text-xs uppercase tracking-widest text-lime font-bold block">
            Our Vision
          </span>
          <h2 className="font-syne text-2xl md:text-[38px] lg:text-[44px] font-extrabold text-cream leading-snug max-w-4xl mx-auto tracking-editorial">
            To make great food accessible everywhere — and great food business accessible to everyone.
          </h2>
        </div>
      </section>

      <hr className="border-t border-forest/20 w-full relative z-10" />

      {/* SECTION 5 — NEW: FEATURED BRANDS */}
      <section className="py-16 px-5 md:py-24 md:px-8 lg:px-16 max-w-[1280px] mx-auto relative z-10 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <SectionTag text="Featured Brands" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              10 Brands. Every Craving.
            </h2>
          </div>
          <Link
            href="/brands"
            className="inline-flex items-center text-lime font-syne font-bold text-sm hover:text-white transition-colors group mb-1 shrink-0"
          >
            See All Brands{" "}
            <ArrowRight
              size={16}
              className="ml-2 group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>

        {/* Stacked Vertical Featured Brand Rows */}
        <div className="flex flex-col gap-6">
          {featuredBrands.map((brand) => (
            <ScrollRevealItem
              key={brand.name}
              className="w-full h-[240px] md:h-[360px] rounded-3xl overflow-hidden relative border border-forest/20 group shadow-lg"
            >
              {/* Full-width image background */}
              <img
                src={brand.image}
                alt={brand.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Dark gradient overlay bottom 60% */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent pointer-events-none" />

              {/* Logo top-left corner */}
              <div className="absolute top-6 left-6 w-14 h-14 md:w-20 md:h-20 rounded-full border border-forest/30 bg-[#1A1A18] p-1 flex items-center justify-center overflow-hidden shadow-md z-20">
                <img
                  src={brandLogos[brand.name]}
                  alt={brand.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Brand details bottom-left */}
              <div className="absolute bottom-6 left-6 right-6 text-left z-20 space-y-1">
                <h3 className="font-syne text-xl md:text-3xl font-extrabold text-white">
                  {brand.name}
                </h3>
                <p className="font-dmsans text-xs md:text-sm text-lime font-medium">
                  {brand.tagline}
                </p>
              </div>
            </ScrollRevealItem>
          ))}
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 6 — NATIONAL EXPANSION */}
      <section className="bg-[#161614] py-16 px-5 md:py-24 md:px-8 lg:px-16 overflow-hidden relative z-10">
        <div className="max-w-[1280px] mx-auto space-y-12">
          <div className="max-w-2xl">
            <SectionTag text="National Expansion" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              From Lucknow to Every Corner of India.
            </h2>
            <p className="font-dmsans text-sm md:text-base text-gray mt-4 max-w-xl">
              Lucknow is where Foodpark was born, refined, and proven. Now, we&apos;re taking that soul to every city in India. Our expansion map already covers 18+ cities.
            </p>
          </div>

          {/* Region Cards 2x2 grid (desktop) / 1 column (mobile) */}
          <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regions.map((region) => (
              <motion.div
                key={region.name}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="w-full h-[280px] rounded-3xl overflow-hidden relative border border-forest/20 group shadow-lg cursor-pointer"
              >
                {/* Food image background */}
                <img
                  src={region.image}
                  alt={region.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" />

                {/* Region name & city list on overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-left z-20">
                  <span className="bg-lime text-richblack font-spacegrotesk text-xs uppercase font-extrabold px-3 py-1 rounded-full w-max mb-3 shadow">
                    {region.name}
                  </span>
                  <p className="font-dmsans text-xs md:text-sm text-gray leading-relaxed flex items-start gap-2">
                    <Zap size={14} className="text-lime mt-0.5 shrink-0" />
                    {region.cities}
                  </p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 7 — CTA */}
      <section className="bg-forest py-16 md:py-24 relative z-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-lime/10 blur-[120px]" />
        </div>

        <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex flex-col items-center justify-center text-center gap-8 relative z-10">
          <div className="max-w-2xl space-y-4 flex flex-col items-center text-center">
            <h2 className="font-syne text-3xl md:text-5xl font-extrabold leading-tight tracking-editorial text-cream">
              Ready to Own a Food Business Without Running It?
            </h2>
            <p className="font-dmsans text-sm md:text-base text-gray leading-relaxed max-w-xl">
              Investing in a cloud kitchen franchise in Lucknow has never been this straightforward. Start with ₹3,50,000. Pick your brand. Let Foodpark handle the kitchen setup, the staff, the orders, the packaging, and the daily grind — while the returns land in your account every month.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <Link
              href="/franchise"
              className="inline-flex items-center justify-center bg-lime text-richblack font-syne font-bold px-8 py-4 rounded-full text-base shadow-[0_4px_30px_rgba(212,223,0,0.25)] hover:shadow-[0_4px_40px_rgba(212,223,0,0.45)] transition-shadow duration-300 w-full sm:w-auto"
            >
              Apply for Franchise Now — It Takes 2 Minutes
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
