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
      tagline: "Where Every Bite Has a History.",
      cuisine: "Mughlai Cuisine",
      desc: "This is Mughlai cuisine the way the Nawabs intended it — slow-cooked, heavily spiced, absurdly aromatic, and completely uncompromising on flavor. From bubbling korma to perfectly sealed dum biryani, Zauqeen is a full sensory experience.",
    },
    {
      name: "Beijing Bites",
      tagline: "Street Food That Speaks in Umami.",
      cuisine: "Chinese",
      desc: "Bold wok energy, deep umami base notes, and the kind of char on a noodle that you only get when the flame is high and the cook is fast. Every dish calibrated to survive delivery — arriving hot, fragrant, and tasting exactly like it should.",
    },
    {
      name: "Biryani Xchange",
      tagline: "Trade the Ordinary. Taste the Extraordinary.",
      cuisine: "Biryani",
      desc: "India doesn't have one biryani — it has a hundred. Hyderabadi, Lucknowi, Kolkata, Ambur, Bombay. Biryani Xchange is where all those philosophies coexist, compete, and ultimately win.",
    },
    {
      name: "Chai Station",
      tagline: "Ek Cup, Hazaar Yaaden.",
      cuisine: "Beverages",
      desc: "India runs on chai. Starting at just ₹20, every cup at Chai Station is brewed with intention. Masala chai with a proper punch. Ilaichi chai that lingers. Kulhad chai because the clay adds something you can't bottle.",
    },
    {
      name: "Salad Story",
      tagline: "Eat Fresh. Feel Best. Repeat.",
      cuisine: "Healthy",
      desc: "Healthy food that's also genuinely delicious — every bowl calibrated for macros, portion control, and flavor. Because compromise is not on our menu.",
    },
  ];

  const [activeBrandIdx, setActiveBrandIdx] = useState(0);
  const [heroStack, setHeroStack] = useState([0, 1, 2, 3, 4]);

  const rotateHeroStack = () => {
    setHeroStack((prev) => {
      const [first, ...rest] = prev;
      return [...rest, first];
    });
  };

  const heroImages = [
    {
      src: "https://res.cloudinary.com/dmj0smemf/image/upload/v1780899980/9615d1db6143c9642f6d585616b97e26_isgcag.jpg",
      title: "Biryani Xchange",
      colorClass: "border-forest",
      textClass: "text-cream"
    },
    {
      src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80",
      title: "Pizza Street",
      colorClass: "border-forest",
      textClass: "text-cream"
    },
    {
      src: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80",
      title: "Beijing Bites",
      colorClass: "border-lime",
      textClass: "text-lime"
    },
    {
      src: "https://res.cloudinary.com/dmj0smemf/image/upload/v1780899980/d16586a319164842e439353fcf7516ae_dgpcom.jpg",
      title: "Chai Station",
      colorClass: "border-forest",
      textClass: "text-cream"
    },
    {
      src: "https://res.cloudinary.com/dmj0smemf/image/upload/v1780899980/4f3f37076824c511a357c434b63e24a4_n8dv5b.jpg",
      title: "Salad Story",
      colorClass: "border-lime",
      textClass: "text-lime"
    }
  ];

  const getHeroCardStyles = (idx: number) => {
    const orderIndex = heroStack.indexOf(idx);
    
    // Front card styles
    if (orderIndex === 0) {
      return {
        zIndex: 50,
        scale: 1.05,
        rotate: 0,
        x: 0,
        y: 0,
        opacity: 1,
        pointerEvents: "auto" as const,
      };
    }
    
    // Cards behind
    const offsetMultiplier = 15;
    const rotateMultiplier = 4;
    const isEven = orderIndex % 2 === 0;
    
    return {
      zIndex: 50 - orderIndex * 10,
      scale: 1 - orderIndex * 0.04,
      rotate: isEven ? orderIndex * rotateMultiplier : -orderIndex * rotateMultiplier,
      x: isEven ? orderIndex * offsetMultiplier : -orderIndex * offsetMultiplier,
      y: orderIndex * 18,
      opacity: Math.max(0, 1 - orderIndex * 0.15),
      pointerEvents: "none" as const,
    };
  };

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
      <section className="relative min-h-screen lg:h-svh w-full flex flex-col justify-between overflow-hidden pt-28 pb-12 lg:py-20">
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
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 w-full flex-grow flex flex-col lg:flex-row items-center justify-between gap-12 relative z-20 pt-8 lg:pt-0">
          {/* Left Column (Text & Buttons) */}
          <div className="w-full lg:w-[55%] space-y-6">
            {/* Tagline */}
            <ScrollReveal delay={0.1}>
              <span className="font-syne text-xs md:text-sm uppercase tracking-tag bg-forest/60 border border-forest px-4 py-1.5 rounded-full text-lime font-semibold">
                Foodpark India
              </span>
            </ScrollReveal>

            {/* H1 Heading */}
            <ScrollReveal delay={0.2}>
              <h1 className="font-syne text-[30px] sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream leading-[1.1] tracking-editorial">
                <span className="font-normal block text-white">
                  You Don&apos;t Have to Cook
                </span>
                <span className="italic font-bold text-cream">to Own</span>{" "}
                <br className="hidden sm:inline" />
                <span>
                  a Food Business
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
                Best Cloud Kitchen in Lucknow — Multi-Brand Delivery Powerhouse
              </p>
            </ScrollReveal>

            {/* Body copy */}
            <ScrollReveal delay={0.35}>
              <p className="font-dmsans text-sm text-gray/80 max-w-xl leading-relaxed">
                We run 10 distinct food brands out of a single optimized kitchen. Mughlai. Chinese. Biryani. South Indian. Street food. Chai. Salads. Sandwiches. You invest once — we handle every single thing from kitchen to customer.
              </p>
            </ScrollReveal>

            {/* Buttons */}
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
                    Explore Franchise Opportunity
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
                    See Our 10 Brands
                  </Link>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column (Floating Food Collage) */}
          <div className="w-full lg:w-[45%] flex justify-center items-center relative h-[360px] sm:h-[480px] lg:h-[550px] mt-12 lg:mt-0">
            <ScrollReveal delay={0.5} className="relative w-full h-full flex justify-center items-center">
              {heroImages.map((imgInfo, idx) => (
                <motion.div
                  key={idx}
                  style={{
                    position: "absolute",
                    transformOrigin: "bottom center",
                  }}
                  animate={getHeroCardStyles(idx)}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 22,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (heroStack.indexOf(idx) === 0) {
                      rotateHeroStack();
                    }
                  }}
                  className={`w-[180px] h-[240px] sm:w-[260px] sm:h-[350px] lg:w-[320px] lg:h-[420px] rounded-[2rem] border-2 ${imgInfo.colorClass} overflow-hidden shadow-2xl cursor-pointer select-none`}
                >
                  <img
                    src={imgInfo.src}
                    alt={imgInfo.title}
                    className="w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-richblack via-transparent to-transparent flex items-end p-6 pointer-events-none">
                    <span className={`font-syne font-bold text-sm sm:text-base lg:text-lg ${imgInfo.textClass}`}>
                      {imgInfo.title}
                    </span>
                  </div>
                </motion.div>
              ))}
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
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

      {/* SECTION 2 — WHY FOODPARK */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto relative z-10">
        <ScrollReveal staggerChildren className="space-y-16">
          {/* Header */}
          <div className="max-w-2xl">
            <SectionTag text="Why Foodpark" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              This Isn&apos;t Just a Cloud Kitchen. This Is a Food Business System.
            </h2>
            <p className="font-dmsans text-sm md:text-base text-gray mt-4 leading-relaxed">
              When most people think of starting a food business, they picture long hours, unpredictable staff, and sleepless nights watching margins bleed. Foodpark was built to completely flip that narrative.
            </p>
          </div>

          {/* Staggered Vertical Alternating Sections */}
          <div className="flex flex-col space-y-12">
            {/* Item 1 */}
            <ScrollRevealItem className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-forest/20 pb-12 last:border-0 last:pb-0">
              <div className="space-y-4">
                <span className="font-spacegrotesk text-5xl md:text-6xl font-extrabold text-lime block leading-none">
                  01
                </span>
                <h3 className="font-syne text-2xl font-bold text-cream">
                  10+ Food Brands Under One Roof
                </h3>
                <p className="font-dmsans text-sm text-gray leading-relaxed max-w-lg">
                  Why settle for one cuisine when you can rule them all? Foodpark operates 10 distinct food brands from a single kitchen — targeting every meal window from morning chai to late-night cravings. Biryani at lunch. Mughlai at dinner. Street food at snack time. Chai running all day.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative h-60 w-full rounded-2xl overflow-hidden border border-forest/30 hidden md:block shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
                  alt="Cuisine Spread"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-richblack via-richblack/60 to-transparent p-6 flex flex-col justify-end text-left">
                  <span className="font-spacegrotesk text-xs uppercase text-lime tracking-widest block mb-1 font-bold">
                    Cuisine Diversity
                  </span>
                  <p className="font-dmsans text-xs text-cream/90 leading-relaxed">
                    Mughlai • Chinese • South Indian • Healthy Bowls • Beverages • Street Food • Biryani • Pizza • Sandwiches • Tea
                  </p>
                </div>
              </motion.div>
            </ScrollRevealItem>

            {/* Item 2 */}
            <ScrollRevealItem className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-forest/20 pb-12 last:border-0 last:pb-0">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative h-60 w-full rounded-2xl overflow-hidden border border-forest/30 hidden md:block order-2 md:order-1 shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                  alt="Pan-India Expansion"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-richblack via-richblack/60 to-transparent p-6 flex flex-col justify-end text-left">
                  <span className="font-spacegrotesk text-xs uppercase text-lime tracking-widest block mb-1 font-bold">
                    National Expansion
                  </span>
                  <p className="font-dmsans text-xs text-cream/90 leading-relaxed">
                    Lucknow HQ → Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune & 13+ more cities
                  </p>
                </div>
              </motion.div>
              <div className="space-y-4 order-1 md:order-2">
                <span className="font-spacegrotesk text-5xl md:text-6xl font-extrabold text-lime block leading-none">
                  02
                </span>
                <h3 className="font-syne text-2xl font-bold text-cream">
                  Pan-India Expansion, Rooted in Lucknow
                </h3>
                <p className="font-dmsans text-sm text-gray leading-relaxed max-w-lg">
                  Born in the City of Nawabs. Built for the Nation. Lucknow is not just our headquarters — it is our identity. From this foundation, Foodpark is aggressively scaling into Delhi NCR, Mumbai, Bengaluru, Hyderabad, Pune, and every major metro in between.
                </p>
              </div>
            </ScrollRevealItem>

            {/* Item 3 */}
            <ScrollRevealItem className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-forest/20 pb-12 last:border-0 last:pb-0">
              <div className="space-y-4">
                <span className="font-spacegrotesk text-5xl md:text-6xl font-extrabold text-lime block leading-none">
                  03
                </span>
                <h3 className="font-syne text-2xl font-bold text-cream">
                  The FICO Model: You Own It. We Run It.
                </h3>
                <p className="font-dmsans text-sm text-gray leading-relaxed max-w-lg">
                  Franchise Invested, Company Operated. You make a one-time investment. We set up the kitchen, hire the team, manage quality, integrate with Zomato and Swiggy, and dispatch orders. You receive returns directly to your bank account — every single month. No drama. No logistics nightmares.
                </p>
              </div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="relative h-60 w-full rounded-2xl overflow-hidden border border-forest/30 hidden md:block shadow-lg"
              >
                <img
                  src="https://res.cloudinary.com/dmj0smemf/image/upload/v1780900313/cf0062012df4a23ade72aa4f9d12690b_mwk6or.jpg"
                  alt="Passive Ownership FICO"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-richblack via-richblack/60 to-transparent p-6 flex flex-col justify-end text-left">
                  <span className="font-spacegrotesk text-xs uppercase text-lime tracking-widest block mb-1 font-bold">
                    Passive Ownership
                  </span>
                  <p className="font-dmsans text-xs text-cream/90 leading-relaxed">
                    Zero daily operational hassle • Structured monthly earnings • India foodservice: USD 77.54B → USD 125.06B by 2029
                  </p>
                </div>
              </motion.div>
            </ScrollRevealItem>
          </div>
        </ScrollReveal>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 3 — OUR STORY & VISION */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 bg-[#161614] relative z-10">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left text column */}
            <div className="lg:col-span-7 space-y-6">
              <SectionTag text="Our Story" />
              <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
                We Started With One Kitchen, One City, and One Stubborn Belief.
              </h2>
              <div className="font-dmsans text-gray text-base leading-relaxed space-y-4">
                <p>
                  That belief? That the best food businesses of this decade won&apos;t be built in marble-floored restaurants — they&apos;ll be built in smart, lean, technology-driven kitchens that live behind a screen and deliver to your door.
                </p>
                <p>
                  Lucknow had no shortage of incredible food. What it lacked was a scalable, modern way to get that food to people where they were: at home, at their desks, on their phones, in the middle of a busy Tuesday afternoon. Foodpark was built to solve exactly that.
                </p>
              </div>

              <div className="space-y-3 pt-6 border-t border-forest/20">
                <h3 className="font-syne text-xl font-bold text-cream">
                  Our Vision
                </h3>
                <p className="font-dmsans text-sm text-gray/80 leading-relaxed">
                  To make great food accessible everywhere — and great food business accessible to everyone. We&apos;re not disrupting the food industry for disruption&apos;s sake. We&apos;re fixing what was always broken — and building something better in its place.
                </p>
              </div>
            </div>

            {/* Right quote card */}
            <div className="lg:col-span-5 relative bg-forest/20 border border-forest/35 p-8 md:p-12 rounded-3xl overflow-hidden min-h-[300px] flex flex-col justify-center">
              <div className="absolute top-4 left-6 text-lime/10">
                <Quote size={100} className="stroke-[1.5]" />
              </div>
              <p className="font-syne italic text-lg md:text-2xl text-cream relative z-10 leading-relaxed">
                &ldquo;Foodpark is not just a business idea — it&apos;s a vision to create opportunities, to empower dreams, and to redefine the way India experiences food. From one city to every corner of the world, this journey is just beginning.&rdquo;
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
            <ScrollRevealItem className="flex flex-col justify-center items-center text-center lg:border-r last:border-r-0 border-lime/30 lg:px-4">
              <StatCounter value={350000} prefix="₹" isCurrency />
              <p className="font-dmsans text-xs md:text-sm text-cream uppercase tracking-wider font-semibold">
                One-Time Investment
              </p>
            </ScrollRevealItem>

            <ScrollRevealItem className="flex flex-col justify-center items-center text-center lg:border-r last:border-r-0 border-lime/30 lg:px-4">
              <StatCounter value={15000} prefix="₹" suffix="/mo" isCurrency />
              <p className="font-dmsans text-xs md:text-sm text-cream uppercase tracking-wider font-semibold">
                Fixed Monthly Returns
              </p>
            </ScrollRevealItem>

            <ScrollRevealItem className="flex flex-col justify-center items-center text-center lg:border-r last:border-r-0 border-lime/30 lg:px-4">
              <StatCounter value={20} prefix="~" suffix=" Months" />
              <p className="font-dmsans text-xs md:text-sm text-cream uppercase tracking-wider font-semibold">
                Payback Period
              </p>
            </ScrollRevealItem>

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
                10 Brands. 10 Cravings. One Unstoppable Kitchen Network.
              </h2>
              <p className="font-dmsans text-sm md:text-base text-gray mt-4">
                Every brand in the Foodpark family was built with a specific hunger in mind — a specific audience, a specific moment in the day, a specific craving that deserves its own identity.
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
            {/* Left Nav column */}
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
              Ready to Own a Food Business Without Running It?
            </h2>
            <p className="font-dmsans text-sm md:text-base opacity-90 leading-relaxed max-w-xl">
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
              className="inline-flex items-center justify-center bg-richblack text-lime font-syne font-bold px-8 py-4 rounded-full text-base shadow-[0_4px_15px_rgba(0,0,0,0.15)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.25)] transition-shadow duration-300 w-full sm:w-auto"
            >
              Apply for Franchise Now — It Takes 2 Minutes
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
