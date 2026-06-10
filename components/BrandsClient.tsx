"use client";

import { brandLogos } from "../brandLogos";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";

export default function BrandsClient() {
  const brands = [
    {
      name: "Zauqeen",
      tagline: "Where Every Bite Has a History.",
      cuisine: "Mughlai Cuisine",
      desc: "This is Mughlai cuisine the way the Nawabs intended it — slow-cooked, heavily spiced, absurdly aromatic, and completely uncompromising on flavor. From the first bloom of cardamom in a bubbling korma to the moment a perfectly sealed dum biryani releases steam, Zauqeen is a full sensory experience. Menu highlights: Dum Biryani, Mutton Korma, Shahi Paneer, Nihari, Seekh Kebab, Roomali Roti.",
    },
    {
      name: "Beijing Bites",
      tagline: "Street Food That Speaks in Umami.",
      cuisine: "Chinese",
      desc: "Bold wok energy, deep umami base notes, and the kind of char on a noodle that you only get when the flame is high and the cook is fast. Every dish calibrated to survive the delivery journey — arriving hot, fragrant, and tasting exactly like it should. Menu highlights: Chili Garlic Noodles, Hakka Fried Rice, Crispy Honey Chili Potatoes, Manchow Soup, Kung Pao, Schezwan Dumplings.",
    },
    {
      name: "Biryani Xchange",
      tagline: "Trade the Ordinary. Taste the Extraordinary.",
      cuisine: "Biryani",
      desc: "India doesn't have one biryani — it has a hundred. Biryani Xchange celebrates regional biryani diversity and refuses to flatten everything into one generic masala mix. This is the brand for the biryani obsessive. Menu highlights: Lucknowi Dum Biryani, Hyderabadi Biryani, Kolkata Chicken Biryani, Vegetable Biryani, Egg Biryani with Mirchi Ka Salan and Burhani Raita.",
    },
    {
      name: "Chai Station",
      tagline: "Ek Cup, Hazaar Yaaden.",
      cuisine: "Beverages",
      desc: "India runs on chai. Starting at just ₹20, every cup at Chai Station is brewed with intention. A neighborhood tea destination that takes chai as seriously as a fine-dining restaurant takes its wine. Menu highlights: Classic Masala Chai, Elaichi Chai, Adrak Chai, Kulhad Chai, Green Tea, Lemongrass Tea, Cold Brews (seasonal).",
    },
    {
      name: "Salad Story",
      tagline: "Eat Fresh. Feel Best. Repeat.",
      cuisine: "Healthy",
      desc: "Healthy food in India used to mean boring food. Salad Story was created to kill that cliché permanently. Every bowl is calibrated for macros, portion control, and flavor — because compromise is not on our menu. Menu highlights: Mediterranean Quinoa Bowl, Asian Sesame Chicken Bowl, Pesto Pasta Salad, Detox Greens Bowl, Protein Power Bowl.",
    },
    {
      name: "The Indian Plate",
      tagline: "Ghar Jaisa Khana. Ghar Se Behtar Delivery.",
      cuisine: "Pure Veg Indian",
      desc: "Pure vegetarian, home-style comfort meals — a love letter to traditional Indian home-style vegetarian cooking. Built from standardized recipes that respect regional variations, use no artificial shortcuts, and treat simplicity as a form of sophistication. Menu highlights: Dal Tadka, Rajma Chawal, Jeera Aloo, Mixed Veg Curry, Paneer Butter Masala, Chapati, Paratha.",
    },
    {
      name: "Sambhar Sutra",
      tagline: "Straight from the South. Delivered to Your Door.",
      cuisine: "South Indian",
      desc: "Our tribute to South Indian cuisine where authenticity is non-negotiable: the sambhar needs that particular sourness from tamarind, the dosa batter needs proper fermentation, and the coconut chutney needs to be ground fresh. Menu highlights: Masala Dosa, Idli Sambar, Medu Vada, Rava Uttapam, Filter Coffee, Pongal, Rasam, Chettinad Curry.",
    },
    {
      name: "Chaat Bazaar",
      tagline: "Taste the Tradition. Own the Craving.",
      cuisine: "Street Food",
      desc: "We've cracked the packaging puzzle that street food poses for delivery — so your golgappa arrives with the pani separate, your chaat arrives crispy, and your evening snack feels exactly like it should: a little messy, completely delicious, and deeply satisfying. Menu highlights: Golgappa, Bhelpuri, Dahi Puri, Aloo Tikki Chaat, Papdi Chaat, Raj Kachori, Sevpuri.",
    },
    {
      name: "Pizza Street",
      tagline: "Slice Into Something Better.",
      cuisine: "Pizza",
      desc: "Pizza that's fun, generous, unapologetically loaded, and built for sharing. From classic margaritas for the purist to our street-food special topped with tandoori chicken tikka and a generous drizzle of mint chutney. Menu highlights: Margherita, BBQ Chicken, Tandoori Chicken Special, Paneer Tikka Pizza, Mexican Fiesta, Cheese Burst.",
    },
    {
      name: "Toast Mafia",
      tagline: "Toast It. Love It. Repeat.",
      cuisine: "Sandwiches",
      desc: "Gooey cheese pulls. Caramelized onions. Perfectly smashed avocado. Herb-marinated grilled chicken. Every combination has been tested, refined, and tested again — because we know that a great sandwich is a precise thing, even if it looks effortless on the plate. Menu highlights: Classic Club Sandwich, Pesto Chicken Toast, Egg & Cheese Breakfast Toast, Paneer Tikka Grilled Sandwich.",
    },
  ];

  return (
    <div className="w-full bg-richblack select-none">
      {/* SECTION 1 — PAGE HERO */}
      <section className="relative bg-richblack pt-32 pb-20 md:py-[120px] px-6 md:px-8 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80"
            alt="Gourmet Dining Table Spread"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-richblack via-richblack/60 to-richblack/40 pointer-events-none" />
        </div>

        <div className="grain-overlay" />
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full bg-forest/10 blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center text-center justify-center">
          <ScrollReveal className="max-w-3xl space-y-6 flex flex-col items-center text-center mx-auto">
            <SectionTag text="Our Concepts" />
            <h1 className="font-syne text-[36px] sm:text-5xl md:text-7xl font-extrabold text-cream leading-tight tracking-editorial">
              10 Brands. 10 Different Hungers. One Kitchen Built to Satisfy All of Them.
            </h1>
            <p className="font-dmsans text-base md:text-lg text-gray max-w-xl leading-relaxed">
              Most food businesses pick a lane. Foodpark refused to choose. We built 10 distinct, standalone food brands — each with its own personality, menu, and customer — all running out of one precision-engineered cloud kitchen. The best multi-brand cloud kitchen in Lucknow.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 2 — BRAND LIST */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1000px] mx-auto relative z-10">
        <ScrollReveal staggerChildren className="flex flex-col space-y-10">
          {brands.map((brand, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <ScrollRevealItem
                key={brand.name}
                className="w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#1A1A18]/30 border border-forest/15 p-6 md:p-10 rounded-[2rem] transition-all duration-300 hover:border-lime/40 hover:shadow-[0_12px_40px_rgba(212,223,0,0.06)] hover:bg-[#1A1A18]/60 cursor-pointer"
                >
                  {/* Brand Details */}
                  <div
                    className={`md:col-span-8 space-y-4 ${
                      isEven ? "md:order-1" : "md:order-2"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-spacegrotesk text-xs uppercase tracking-wider bg-forest/80 px-3 py-1 rounded-full text-lime font-semibold border border-lime/10">
                        {brand.cuisine}
                      </span>
                    </div>

                    <h3 className="font-syne text-2xl md:text-3xl font-bold text-cream">
                      {brand.name}
                    </h3>

                    <p className="font-dmsans italic text-sm text-lime/80">
                      &ldquo;{brand.tagline}&rdquo;
                    </p>

                    <p className="font-dmsans text-sm text-gray/80 leading-relaxed max-w-xl">
                      {brand.desc}
                    </p>
                  </div>

                  {/* Brand Logo */}
                  <div className={`flex flex-col items-center md:items-center md:col-span-4 mt-4 md:mt-0 ${isEven ? "md:order-2" : "md:order-1"}`}>
                    <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-gray-300/30 bg-gray-800/30 shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={brandLogos[brand.name] || `/brands/${brand.name.toLowerCase()}.png`}
                        alt={`${brand.name} logo`}
                        className="max-w-full max-h-full object-contain rounded-full"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = "none";
                        }}
                      />
                    </div>
                    <span className="font-spacegrotesk text-[10px] uppercase tracking-widest text-lime/60 font-semibold mt-2">
                      Authentic Recipe
                    </span>
                  </div>
                </motion.div>
              </ScrollRevealItem>
            );
          })}
        </ScrollReveal>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 3 — BOTTOM CTA */}
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
