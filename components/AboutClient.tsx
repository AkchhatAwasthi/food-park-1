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
      title: "Zero Operational Burden",
      desc: "The number one reason food businesses fail is operational chaos. Foodpark eliminates that variable entirely. When you join as a franchise partner, you hand the operational keys to a team that's been running commercial kitchens day in, day out. You never receive a distress call from a kitchen. Because you never need to.",
    },
    {
      num: "02",
      title: "Instant Brand Credibility",
      desc: "Building a food brand from zero to trusted takes years and costs lakhs in marketing. When you invest in a Foodpark franchise, you skip that entire painful chapter. Your chosen brand already has a menu, an identity, a rating on delivery apps, and a growing customer base. You inherit the trust we've spent time and money building — and you start earning from day one.",
    },
    {
      num: "03",
      title: "Airtight Systems & Supply Chains",
      desc: "Every Foodpark kitchen runs on the same playbook — standardized recipes, centralized procurement, defined quality benchmarks, and real-time performance tracking. Whether your kitchen is in Lucknow or Hyderabad, the biryani tastes the same, the packaging looks the same, and the delivery time is the same. Systems are what separate scalable businesses from chaotic ones. Ours are already built.",
    },
    {
      num: "04",
      title: "A Partnership That Grows With You",
      desc: "We don't sell you a franchise and disappear. Foodpark treats every investor as a long-term partner — with regular performance reporting, reinvestment options, multi-brand expansion opportunities, and a relationship built around shared success. When Foodpark grows, you grow. When we open in a new city, your network grows.",
    },
  ];

  const expansionCities = [
    { region: "North India", cities: "Lucknow (HQ), Delhi NCR, Chandigarh, Jaipur, Kanpur" },
    { region: "East India", cities: "Patna, Guwahati, Kolkata, Bhubaneswar" },
    { region: "Central & West India", cities: "Nagpur, Indore, Ahmedabad, Mumbai, Pune" },
    { region: "South India", cities: "Hyderabad, Bengaluru, Chennai, Kochi" },
  ];

  return (
    <div className="w-full bg-richblack select-none">
      {/* SECTION 1 — PAGE HERO */}
      <section className="relative bg-richblack pt-32 pb-24 md:py-[120px] px-6 md:px-8 border-b border-lime/10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1200&q=80"
            alt="Cloud Kitchen Setup"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-richblack via-richblack/60 to-richblack/40 pointer-events-none" />
        </div>

        <div className="grain-overlay" />
        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center text-center justify-center">
          <ScrollReveal className="max-w-3xl space-y-6 flex flex-col items-center text-center mx-auto">
            <SectionTag text="About Foodpark" />
            <h1 className="font-syne text-[36px] sm:text-5xl md:text-7xl font-extrabold text-cream leading-tight tracking-editorial">
              We Started With One Kitchen, One City, and One Stubborn Belief.
            </h1>
            <p className="font-dmsans text-base md:text-lg text-gray max-w-2xl leading-relaxed">
              That belief? That the best food businesses of this decade won&apos;t be built in marble-floored restaurants — they&apos;ll be built in smart, lean, technology-driven kitchens that live behind a screen and deliver to your door. Welcome to Foodpark — the best cloud kitchen in Lucknow, and the country&apos;s most ambitious multi-brand dark kitchen franchise network.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 2 — OUR STORY */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto relative z-10">
        <ScrollReveal className="space-y-8">
          <div className="max-w-2xl">
            <SectionTag text="Our Story" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              From a City That Knows Food, to a Country That Deserves Better.
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 font-dmsans text-gray text-base leading-relaxed space-y-5">
              <p>
                It started with a problem we couldn&apos;t stop thinking about. Lucknow — a city whose very air carries the aroma of slow-cooked dum biryani and simmering nihari — had no shortage of incredible food. What it lacked was a scalable, modern way to get that food to people where they were: at home, at their desks, on their phones, in the middle of a busy Tuesday afternoon.
              </p>
              <p>
                The traditional restaurant model was fundamentally broken for the delivery era. High rent. High overheads. A kitchen designed for dine-in but forced to serve as a delivery hub. Margins shrinking. Owners burning out. Great food dying quietly behind operational chaos.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                <div className="h-48 sm:h-60 rounded-2xl overflow-hidden border border-forest/30 shadow-lg relative group">
                  <img
                    src="https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=500&q=80"
                    alt="Authentic Chef Cooking"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-richblack/70 to-transparent flex items-end p-4">
                    <span className="font-syne text-xs text-cream font-bold">Standardized Premium Ingredients</span>
                  </div>
                </div>
                <div className="h-48 sm:h-60 rounded-2xl overflow-hidden border border-forest/30 shadow-lg relative group">
                  <img
                    src="https://res.cloudinary.com/dmj0smemf/image/upload/v1780900801/25cf1714495b27f96d0400f1330bb4c3_or5nay.jpg"
                    alt="Sleek Cloud Kitchen"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-richblack/70 to-transparent flex items-end p-4">
                    <span className="font-syne text-xs text-cream font-bold">Optimized Multi-Brand Operations</span>
                  </div>
                </div>
              </div>

              <p className="italic text-cream border-l-2 border-lime pl-4">
                &ldquo;We asked ourselves: what if you stripped the restaurant down to just what actually matters — the food, the systems, and the delivery?&rdquo;
              </p>
              <p>
                That question became Foodpark. We built our first cloud kitchen in Lucknow — not as an experiment, but as a declaration. We launched Zauqeen first — our Mughlai brand — because this city deserves a korma that tastes like it was made by someone&apos;s nani. The orders came. Then came Biryani Xchange, Chai Station, Beijing Bites. Every brand was born from a real craving, a real gap in the market, and a real obsession with getting it right.
              </p>
              <p className="italic text-cream border-l-2 border-lime pl-4">
                &ldquo;What if we let people own a Foodpark kitchen, and we ran it for them?&rdquo; That single idea gave birth to our FICO model — Franchise Invested, Company Operated. And it changed everything.
              </p>
              <p>
                Today, Foodpark isn&apos;t just a kitchen. It&apos;s a growing movement of smart entrepreneurs who&apos;ve realized that the best investment isn&apos;t always a plot of land or a stock portfolio — sometimes, it&apos;s a stake in the fastest-growing industry in the country, operated by people who have already figured out how to win.
              </p>
            </div>
            <div className="lg:col-span-5 bg-forest/20 border border-forest/35 p-8 rounded-3xl space-y-4">
              <span className="font-spacegrotesk text-xs uppercase tracking-widest text-lime font-bold block">Our Vision</span>
              <h3 className="font-syne text-xl font-bold text-cream">To make great food accessible everywhere — and great food business accessible to everyone.</h3>
              <p className="font-dmsans text-sm text-gray/80 leading-relaxed">
                Our delivery-first, multi-brand kitchen model removes the physical barriers between great food and hungry people. Our FICO franchise model removes the financial and operational barriers between aspiring entrepreneurs and a real, running, income-generating business.
              </p>
              <div className="pt-4 border-t border-forest/30">
                <span className="font-spacegrotesk text-xs uppercase tracking-widest text-lime font-bold block mb-2">Fractional Ownership</span>
                <p className="font-dmsans text-sm text-gray/80 leading-relaxed">
                  You don&apos;t need crores of rupees to own a real food business. Fractional ownership. Pooled infrastructure. Shared operational excellence. This is not a passive scheme — this is a genuine partnership where your capital meets our systems.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 3 — FICO MODEL */}
      <section className="bg-forest py-20 md:py-[120px] px-6 md:px-8 overflow-hidden relative z-10">
        <div className="max-w-[1280px] mx-auto space-y-12">
          <div className="max-w-2xl">
            <SectionTag text="The FICO Model" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              The Smartest Way to Own a Food Business in India Today.
            </h2>
            <p className="font-dmsans text-sm md:text-base text-cream/80 mt-4">
              FICO stands for Franchise Invested, Company Operated. You invest in a Foodpark cloud kitchen franchise. We do literally everything else.
            </p>
          </div>

          <ScrollReveal className="flex flex-col space-y-8 max-w-4xl mx-auto">
            {/* You Own It */}
            <motion.div
              whileHover={{ y: -6 }}
              className="bg-richblack border border-lime p-8 md:p-10 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-xl"
            >
              <div className="space-y-4 max-w-xl">
                <span className="font-spacegrotesk text-xs uppercase tracking-widest text-lime bg-lime/10 px-3 py-1 rounded-full border border-lime/20 inline-block font-semibold">
                  You Invest
                </span>
                <h3 className="font-syne text-2xl font-bold text-cream">
                  The Asset Investor
                </h3>
                <p className="font-dmsans text-sm text-gray leading-relaxed">
                  Make a one-time investment of ₹3,50,000. You gain fractional franchise ownership of a state-of-the-art multi-brand cloud kitchen. You never need to manage staff. You never worry about supply chains. You never respond to a 1-star review at midnight. You just own the business, and we run it.
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
                  We Operate
                </span>
                <h3 className="font-syne text-2xl font-bold text-richblack">
                  The Operations Engine
                </h3>
                <p className="font-dmsans text-sm text-richblack/80 leading-relaxed font-medium">
                  We design the kitchen layout, source the equipment, hire and train the staff, manage the supply chain, handle quality control, integrate with Zomato and Swiggy, run social media, respond to customer feedback, and dispatch thousands of orders every month.
                </p>
              </div>
              <div className="text-richblack bg-richblack/10 p-4 rounded-full border border-richblack/15 hidden md:block">
                <ShieldCheck size={40} />
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Checklist */}
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
                "People will always eat. Cloud kitchens are how they eat now.",
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

      {/* SECTION 4 — FOUR PILLARS */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto relative z-10">
        <ScrollReveal staggerChildren className="space-y-12">
          <div className="max-w-2xl">
            <SectionTag text="Core Strengths" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              Built on Four Pillars That Never Compromise.
            </h2>
            <p className="font-dmsans text-sm md:text-base text-gray mt-4">
              Our cloud kitchen blueprint is built on four core assets that ensure stable returns and high scalability.
            </p>
          </div>

          <div className="relative max-w-3xl mx-auto pl-8 border-l border-dashed border-lime/30 space-y-10">
            {pillars.map((pillar) => (
              <ScrollRevealItem key={pillar.num} className="relative group">
                <div className="absolute -left-[49px] top-1.5 w-8 h-8 rounded-full bg-richblack border-2 border-lime flex items-center justify-center text-lime font-spacegrotesk text-sm font-bold group-hover:bg-lime group-hover:text-richblack transition-colors duration-300 shadow-[0_0_12px_rgba(212,223,0,0.1)]">
                  {pillar.num}
                </div>
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

      {/* SECTION 5 — NATIONAL EXPANSION */}
      <section className="bg-forest py-20 md:py-[120px] px-6 md:px-8 overflow-hidden relative z-10">
        <div className="max-w-[1280px] mx-auto space-y-12">
          <div className="max-w-2xl">
            <SectionTag text="National Expansion" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              From Lucknow to Every Corner of India.
            </h2>
            <p className="font-dmsans text-sm md:text-base text-cream/80 mt-4">
              Lucknow is where Foodpark was born, refined, and proven. The city gave us our soul — a deep respect for authentic flavor, bold food culture, and the kind of warmth that goes into every dish. Now, we&apos;re taking that soul to every city in India. Our expansion map already covers 18+ cities.
            </p>
          </div>

          <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {expansionCities.map((region) => (
              <motion.div
                key={region.region}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="bg-richblack border border-lime p-6 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-lime/10">
                  <MapPin size={60} className="stroke-[1]" />
                </div>
                <div className="space-y-3 relative z-10">
                  <span className="bg-lime text-richblack font-spacegrotesk text-xs uppercase font-extrabold px-3 py-1 rounded-full">
                    {region.region}
                  </span>
                  <p className="font-dmsans text-sm text-gray leading-relaxed flex items-start gap-2">
                    <Zap size={14} className="text-lime mt-0.5 shrink-0" />
                    {region.cities}
                  </p>
                </div>
              </motion.div>
            ))}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
