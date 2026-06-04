"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";

export default function BrandsClient() {
  const brands = [
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
    {
      name: "The Indian Plate",
      tagline: "Comforting home-style pure veg Indian meals.",
      cuisine: "Indian",
      desc: "Pure vegetarian, home-style comfort meals. Simple, nostalgic dal-roti-chawal platters prepared under strict hygienic conditions.",
    },
    {
      name: "Sambhar Sutra",
      tagline: "Authentic South Indian dosas, idlis, and sambhar.",
      cuisine: "South Indian",
      desc: "Crisp golden dosas, pillowy soft idlis, and tangy signature sambhar brewed with traditional lentils and southern spices.",
    },
    {
      name: "Chaat Bazaar",
      tagline: "Tangy, crunchy, nostalgic Indian street food.",
      cuisine: "Street Food",
      desc: "Nostalgic street flavors, spicy golgappe, crunchy papdi, and sweet yogurt tikkis recreated in a sanitary, modern kitchen setup.",
    },
    {
      name: "Pizza Street",
      tagline: "Street-food-inspired pizzas slicing into happiness.",
      cuisine: "Pizza",
      desc: "Thin crusts, loaded toppings, and locally inspired flavors sliced to perfection and baked in high-temp ovens.",
    },
    {
      name: "Toast Mafia",
      tagline: "Creative gourmet toasted sandwiches.",
      cuisine: "Sandwiches",
      desc: "Gourmet toasted sandwiches loaded with cheese, creative sauces, and fresh fillings, toasted golden-brown for the ultimate snack craving.",
    },
  ];

  return (
    <div className="w-full bg-richblack select-none">
      {/* SECTION 1 — PAGE HERO */}
      <section className="relative bg-richblack pt-32 pb-20 md:py-[120px] px-6 md:px-8 overflow-hidden">
        <div className="grain-overlay" />
        <div className="absolute top-0 right-0 w-[60vw] h-[60vw] rounded-full bg-forest/10 blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center text-center justify-center">
          <ScrollReveal className="max-w-3xl space-y-6 flex flex-col items-center text-center mx-auto">
            <SectionTag text="Our Concepts" />
            <h1 className="font-syne text-[36px] sm:text-5xl md:text-7xl font-extrabold text-cream leading-tight tracking-editorial">
              Diverse Brand Portfolio
            </h1>
            <p className="font-dmsans text-base md:text-lg text-gray max-w-xl leading-relaxed">
              10 strategically crafted sub-brands. One powerful cloud kitchen platform.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 2 — BRAND LIST (Vertical Alternating Timeline Layout) */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1000px] mx-auto relative z-10">
        <ScrollReveal staggerChildren className="flex flex-col space-y-16">
          {brands.map((brand, idx) => {
            const isEven = idx % 2 === 0;
            const initial = brand.name.charAt(0);

            return (
              <ScrollRevealItem
                key={brand.name}
                className="w-full border-b border-forest/20 pb-16 last:border-0 last:pb-0"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
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

                    <p className="font-dmsans italic text-sm text-gray">
                      &ldquo;{brand.tagline}&rdquo;
                    </p>

                    <p className="font-dmsans text-sm text-gray/80 leading-relaxed max-w-xl">
                      {brand.desc}
                    </p>
                  </div>

                  {/* Decorative Letter Box */}
                  <div
                    className={`md:col-span-4 bg-forest/10 border border-forest/30 rounded-2xl p-8 text-center flex items-center justify-center relative overflow-hidden min-h-[160px] ${
                      isEven ? "md:order-2" : "md:order-1"
                    }`}
                  >
                    <span className="font-spacegrotesk text-[80px] font-black text-lime/15 leading-none select-none">
                      {initial}
                    </span>
                    <span className="absolute bottom-3 font-spacegrotesk text-[10px] uppercase tracking-widest text-lime/60 font-semibold">
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
