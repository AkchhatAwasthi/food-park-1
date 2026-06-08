"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, Sparkles, MapPin, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";
import MarqueeTicker from "@/components/MarqueeTicker";
import StatCounter from "@/components/StatCounter";
import SectionTag from "@/components/SectionTag";
import { brandLogos } from "../brandLogos";

export default function HomeClient() {
  const allBrands = [
    {
      name: "Zauqeen",
      tagline: "Where Every Bite Has a History.",
      cuisine: "Mughlai Cuisine",
      desc: "Slow-cooked, heavily spiced Nawabi korma and perfectly sealed dum biryani.",
      image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&h=800&q=80",
    },
    {
      name: "Beijing Bites",
      tagline: "Street Food That Speaks in Umami.",
      cuisine: "Chinese",
      desc: "Bold wok energy, deep umami notes, and perfectly charred delivery-friendly noodles.",
      image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&h=800&q=80",
    },
    {
      name: "Biryani Xchange",
      tagline: "Trade the Ordinary. Taste the Extraordinary.",
      cuisine: "Biryani",
      desc: "Authentic regional biryanis: Hyderabadi, Lucknowi, and Kolkata styles cooked to perfection.",
      image: "https://res.cloudinary.com/dmj0smemf/image/upload/v1780899980/9615d1db6143c9642f6d585616b97e26_isgcag.jpg",
    },
    {
      name: "Chai Station",
      tagline: "Ek Cup, Hazaar Yaaden.",
      cuisine: "Beverages",
      desc: "Freshly brewed masala, elaichi, and ginger chai served in traditional clay kulhads.",
      image: "https://res.cloudinary.com/dmj0smemf/image/upload/v1780899980/d16586a319164842e439353fcf7516ae_dgpcom.jpg",
    },
    {
      name: "Salad Story",
      tagline: "Eat Fresh. Feel Best. Repeat.",
      cuisine: "Healthy",
      desc: "Delicious health bowls, salads, and meals calibrated for macros, portion control, and taste.",
      image: "https://res.cloudinary.com/dmj0smemf/image/upload/v1780899980/4f3f37076824c511a357c434b63e24a4_n8dv5b.jpg",
    },
    {
      name: "The Indian Plate",
      tagline: "Ghar Jaisa Khana. Ghar Se Behtar Delivery.",
      cuisine: "Pure Veg Indian",
      desc: "Homestyle vegetarian comfort meals: dal tadka, rajma chawal, and fresh flatbreads.",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=600&h=800&q=80",
    },
    {
      name: "Sambhar Sutra",
      tagline: "Straight from the South. Delivered to Your Door.",
      cuisine: "South Indian",
      desc: "Crispy masala dosas, soft idlis, and hot sambhar crafted from authentic fermented batter.",
      image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&h=800&q=80",
    },
    {
      name: "Chaat Bazaar",
      tagline: "Taste the Tradition. Own the Craving.",
      cuisine: "Street Food",
      desc: "Crispy golgappas, tikki chaat, and local street treats packaged to stay perfectly fresh.",
      image: "https://res.cloudinary.com/dmj0smemf/image/upload/v1780910804/4341312ac0b006b1dfeab30e0a4ba9db_k4jjwl.jpg",
    },
    {
      name: "Pizza Street",
      tagline: "Slice Into Something Better.",
      cuisine: "Pizza",
      desc: "Generous, cheese-filled, hot oven pizzas infused with local fusion street flavors.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&h=800&q=80",
    },
    {
      name: "Toast Mafia",
      tagline: "Toast It. Love It. Repeat.",
      cuisine: "Sandwiches",
      desc: "Gourmet grilled sandwiches with rich cheese pulls and perfectly toasted bread sides.",
      image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&h=800&q=80",
    },
  ];

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

  return (
    <div className="w-full bg-richblack select-none overflow-x-hidden">
      {/* SECTION 1 — HERO */}
      <section className="relative min-h-screen lg:h-svh w-full flex flex-col justify-between overflow-hidden pt-28 pb-12 lg:py-20 px-5 md:px-8 lg:px-16">
        <div className="grain-overlay z-10" />

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

        <div className="absolute inset-0 bg-gradient-to-t from-richblack via-richblack/65 to-richblack/40 pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-forest/15 blur-[100px] md:blur-[150px] pointer-events-none -translate-x-1/4 translate-y-1/4 z-0" />

        <div className="max-w-[1280px] mx-auto w-full flex-grow flex flex-col lg:flex-row items-center justify-between gap-12 relative z-20 pt-8 lg:pt-0">
          <div className="w-full lg:w-[55%] space-y-6">
            <ScrollReveal delay={0.1}>
              <span className="font-syne text-xs md:text-sm uppercase tracking-tag bg-forest/60 border border-forest px-4 py-1.5 rounded-full text-lime font-semibold">
                Foodpark India
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="font-syne text-3xl md:text-5xl lg:text-6xl font-extrabold text-cream leading-[1.1] tracking-editorial">
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

            <ScrollReveal delay={0.3}>
              <p className="font-syne text-sm md:text-base text-gray max-w-xl leading-relaxed uppercase tracking-wider font-semibold">
                Best Cloud Kitchen in Lucknow — Multi-Brand Delivery Powerhouse
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.35}>
              <p className="font-dmsans text-sm text-gray/80 max-w-xl leading-relaxed">
                We run 10 distinct food brands out of a single optimized kitchen. Mughlai. Chinese. Biryani. South Indian. Street food. Chai. Salads. Sandwiches. You invest once — we handle every single thing from kitchen to customer.
              </p>
            </ScrollReveal>

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

        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none z-20">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="text-lime"
          >
            <ChevronDown size={24} />
          </motion.div>
        </div>

        <div className="w-full">
          <MarqueeTicker />
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 2 — BRAND CARDS STRIP [REPLACE EXISTING TICKER / COLLAGE] */}
      <section className="py-16 px-5 md:py-24 md:px-8 lg:px-16 max-w-[1280px] mx-auto relative z-10 overflow-hidden">
        <ScrollReveal className="space-y-8">
          <div>
            <SectionTag text="Our Brands" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              Order Online From Our Kitchens
            </h2>
            <p className="font-dmsans text-sm md:text-base text-gray mt-2">
              Delicious multi-cuisine options delivered straight to your doorstep via Zomato or Swiggy.
            </p>
          </div>

          {/* Horizontally scrollable strip */}
          <div className="no-scrollbar flex overflow-x-auto gap-6 snap-x snap-mandatory py-4 scroll-smooth">
            {allBrands.map((brand) => (
              <ScrollRevealItem
                key={brand.name}
                className="w-[230px] sm:w-[260px] md:w-[280px] lg:w-[280px] h-[347px] md:h-[400px] flex-shrink-0 snap-start rounded-2xl relative overflow-hidden group shadow-lg border border-forest/20"
              >
                {/* Full food image background */}
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Subtle dark gradient overlay from bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />

                {/* Overlay content at bottom */}
                <div className="absolute inset-0 p-4 flex flex-col justify-end">
                  {/* Brand Logo & Name */}
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-white p-1 flex-shrink-0 overflow-hidden flex items-center justify-center shadow-md">
                      <img
                        src={brandLogos[brand.name]}
                        alt={brand.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="ml-3">
                      <span className="font-spacegrotesk text-[8px] uppercase tracking-wider text-lime block font-bold">
                        {brand.cuisine}
                      </span>
                      <h3 className="font-syne text-base font-bold text-white leading-tight">
                        {brand.name}
                      </h3>
                    </div>
                  </div>

                  {/* Zomato & Swiggy Buttons (Min 48px tap height) */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href="#"
                      className="h-12 flex items-center justify-center bg-[#E23744] text-white font-syne text-xs font-bold rounded-full hover:bg-[#cb323d] active:bg-[#b52d37] transition-colors"
                    >
                      Zomato
                    </a>
                    <a
                      href="#"
                      className="h-12 flex items-center justify-center bg-[#FC8019] text-white font-syne text-xs font-bold rounded-full hover:bg-[#e37317] active:bg-[#ca6615] transition-colors"
                    >
                      Swiggy
                    </a>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 3 — WHY FOODPARK */}
      <section className="py-16 px-5 md:py-24 md:px-8 lg:px-16 max-w-[1280px] mx-auto relative z-10">
        <ScrollReveal staggerChildren className="space-y-12">
          {/* Header */}
          <div className="max-w-2xl">
            <SectionTag text="Why Foodpark" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              This Isn&apos;t Just a Cloud Kitchen. This Is a Food Business System.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Real Kitchen Image */}
           <div className="lg:col-span-5 w-full h-[400px] sm:h-[500px] lg:h-[650px] rounded-3xl overflow-hidden border border-forest/30 shadow-lg">
  <img
    src="https://res.cloudinary.com/dmj0smemf/image/upload/v1780911017/WhatsApp_Image_2026-06-08_at_2.59.56_PM_wnbib2.jpg"
    alt="Cloud Kitchen Cooking"
    className="w-full h-full object-cover object-left"
  />
</div>

            {/* Feature Points */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              {/* Point 1 */}
              <ScrollRevealItem className="flex gap-4 p-5 rounded-2xl border border-forest/20 bg-[#1A1A18]/45 hover:border-lime/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-forest/40 border border-lime/20 flex items-center justify-center text-lime flex-shrink-0">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h3 className="font-syne text-lg font-bold text-cream">
                    10+ Food Brands Under One Roof
                  </h3>
                  <p className="font-dmsans text-sm text-gray mt-1 leading-relaxed">
                    Why settle for one cuisine when you can rule them all? Foodpark operates 10 distinct food brands from a single kitchen.
                  </p>
                </div>
              </ScrollRevealItem>

              {/* Point 2 */}
              <ScrollRevealItem className="flex gap-4 p-5 rounded-2xl border border-forest/20 bg-[#1A1A18]/45 hover:border-lime/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-forest/40 border border-lime/20 flex items-center justify-center text-lime flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-syne text-lg font-bold text-cream">
                    Pan-India Expansion, Rooted in Lucknow
                  </h3>
                  <p className="font-dmsans text-sm text-gray mt-1 leading-relaxed">
                    Born in Lucknow, scaling to Delhi NCR, Mumbai, Bengaluru, and beyond. Lucknow is our base, but India is our playground.
                  </p>
                </div>
              </ScrollRevealItem>

              {/* Point 3 */}
              <ScrollRevealItem className="flex gap-4 p-5 rounded-2xl border border-forest/20 bg-[#1A1A18]/45 hover:border-lime/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-forest/40 border border-lime/20 flex items-center justify-center text-lime flex-shrink-0">
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h3 className="font-syne text-lg font-bold text-cream">
                    The FICO Model: You Own It. We Run It.
                  </h3>
                  <p className="font-dmsans text-sm text-gray mt-1 leading-relaxed">
                    Franchise Invested, Company Operated. You make a one-time investment, and we manage every aspect of the operations.
                  </p>
                </div>
              </ScrollRevealItem>
            </div>
          </div>
        </ScrollReveal>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 4 — OUR STORY */}
      <section className="py-16 px-5 md:py-24 md:px-8 lg:px-16 bg-[#161614] relative z-10">
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
                  We started with one kitchen, one city, and one stubborn belief: that the best food businesses of this decade won&apos;t be built in marble-floored restaurants — they&apos;ll be built in smart, lean, technology-driven kitchens. Lucknow had incredible food, but lacked a scalable way to deliver it to people wherever they were. Foodpark was built to solve exactly that.
                </p>
              </div>

              {/* Mobile Images insertion point */}
              <div className="block lg:hidden space-y-4 my-6">
                <div className="w-full h-[200px] rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="https://res.cloudinary.com/dmj0smemf/image/upload/v1780911739/4e31c084f48e2d67d0bdccca7432a1df_pcz6ku.jpg"
                    alt="Chef Cooking"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-full h-[200px] rounded-2xl overflow-hidden shadow-md">
                  <img
                    src="https://res.cloudinary.com/dmj0smemf/image/upload/v1780911739/a8ded342ac92b01130c954832b0a7a84_dreosv.jpg"
                    alt="Delivery Packaging"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-forest/20">
                <h3 className="font-syne text-xl font-bold text-cream">
                  Our Vision
                </h3>
                <p className="font-dmsans text-sm text-gray/80 leading-relaxed">
                  To make great food accessible everywhere — and great food business accessible to everyone.
                </p>
              </div>
            </div>

            {/* Desktop Stacked Images Column */}
            <div className="hidden lg:flex lg:col-span-5 flex-col gap-6">
              <div className="w-full h-[220px] rounded-3xl overflow-hidden border border-forest/20 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Chef Cooking"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full h-[220px] rounded-3xl overflow-hidden border border-forest/20 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1584269600464-37b1b58a9fe7?auto=format&fit=crop&w=600&h=400&q=80"
                  alt="Delivery Packaging"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 5 — STATS COUNTER */}
      <section className="bg-forest py-16 px-5 md:py-20 md:px-8 lg:px-16 relative z-10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal staggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-4 lg:gap-8">
            <ScrollRevealItem className="flex flex-col justify-center items-center text-center lg:border-r last:border-r-0 border-lime/30 lg:px-6">
              <StatCounter value={350000} prefix="₹" isCurrency />
              <p className="font-dmsans text-xs md:text-sm text-cream uppercase tracking-wider font-semibold mt-1">
                One-Time Investment
              </p>
            </ScrollRevealItem>

            <ScrollRevealItem className="flex flex-col justify-center items-center text-center lg:border-r last:border-r-0 border-lime/30 lg:px-6">
              <StatCounter value={15000} prefix="₹" suffix="/mo" isCurrency />
              <p className="font-dmsans text-xs md:text-sm text-cream uppercase tracking-wider font-semibold mt-1">
                Fixed Monthly Returns
              </p>
            </ScrollRevealItem>

            <ScrollRevealItem className="flex flex-col justify-center items-center text-center lg:border-r last:border-r-0 border-lime/30 lg:px-6">
              <StatCounter value={20} prefix="~" suffix=" Months" />
              <p className="font-dmsans text-xs md:text-sm text-cream uppercase tracking-wider font-semibold mt-1">
                Payback Period
              </p>
            </ScrollRevealItem>

            <ScrollRevealItem className="flex flex-col justify-center items-center text-center lg:px-6">
              <StatCounter value={205} suffix="%" />
              <p className="font-dmsans text-xs md:text-sm text-cream uppercase tracking-wider font-semibold mt-1">
                4-Year Growth
              </p>
            </ScrollRevealItem>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 6 — 10 BRANDS 10 CRAVINGS [REDESIGNED GRID] */}
      <section className="py-16 px-5 md:py-24 md:px-8 lg:px-16 max-w-[1280px] mx-auto relative z-10">
        <ScrollReveal staggerChildren className="space-y-12">
          {/* Header */}
          <div className="max-w-2xl">
            <SectionTag text="Brand Portfolio" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              10 Brands. 10 Cravings. One Unstoppable Kitchen Network.
            </h2>
            <p className="font-dmsans text-sm md:text-base text-gray mt-4">
              Every brand in the Foodpark family was built with a specific hunger in mind — a specific audience, a specific moment in the day, a specific craving that deserves its own identity.
            </p>
          </div>

          {/* Redesigned Card Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBrands.map((brand) => (
              <ScrollRevealItem key={brand.name}>
                <div className="bg-[#1C1C1A] border border-forest/20 rounded-3xl p-6 text-center hover:border-lime/40 hover:shadow-[0_4px_20px_rgba(212,223,0,0.08)] transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    {/* Centered Brand Logo */}
                    <div className="w-28 h-28 rounded-full border-2 border-forest/30 bg-[#1A1A18] flex items-center justify-center mx-auto mb-4 overflow-hidden shadow-lg p-0">
                      <img
                        src={brandLogos[brand.name]}
                        alt={brand.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    {/* Brand Name */}
                    <h3 className="font-syne text-xl font-bold text-cream mb-2 group-hover:text-white transition-colors duration-350">
                      {brand.name}
                    </h3>

                    {/* Cuisine pill badge */}
                    <span className="inline-block bg-lime/10 border border-lime/25 text-lime font-spacegrotesk text-[10px] uppercase font-bold px-3 py-1 rounded-full mb-4">
                      {brand.cuisine}
                    </span>

                    {/* Description (trimmed to 2 lines) */}
                    <p className="font-dmsans text-sm text-gray/80 leading-relaxed max-w-xs mx-auto">
                      {brand.desc}
                    </p>
                  </div>
                </div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 7 — CTA BAND */}
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
