"use client";

import React from "react";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, Phone, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";

export default function FranchiseClient() {
  const { openModal } = useModal();

  const steps = [
    { num: "01", label: "You Invest" },
    { num: "02", label: "We Operate" },
    { num: "03", label: "No Staff" },
    { num: "04", label: "You Earn" },
  ];

  const advantages = [
    {
      title: "Low Investment",
      desc: "Entry from ₹2.9 Lakh setup capital, with full kitchen infrastructure access.",
    },
    {
      title: "Zero Monthly Expenses",
      desc: "No recurring operations, utilities, or maintenance bills billed to you.",
    },
    {
      title: "No Equipment Needed",
      desc: "Industrial appliances and setups managed and installed by Foodpark.",
    },
    {
      title: "Staff-Free Operation",
      desc: "Kitchen HR, chefs, delivery runners, and managers hired & run by us.",
    },
    {
      title: "Side Business Potential",
      desc: "Completely passive earnings. Keep your full-time job while your kitchen earns.",
    },
    {
      title: "Full Brand Support",
      desc: "Corporate marketing campaigns, Swiggy/Zomato listings, and supply chain.",
    },
  ];

  const onboardingSteps = [
    {
      step: "Step 1",
      title: "Pay Asset Setup Fee",
      desc: "Secure your license and setup with a ₹3,50,000 one-time investment.",
    },
    {
      step: "Step 2",
      title: "Choose Your Brand",
      desc: "Pick from 10 Foodpark sub-brands targeting high-demand cuisines.",
    },
    {
      step: "Step 3",
      title: "We Set Up & Operate",
      desc: "All kitchen real estate, staffing, appliances, and apps handled by Foodpark.",
    },
    {
      step: "Step 4",
      title: "You Earn Returns",
      desc: "Monthly passive payouts directly credited to your registered bank account.",
    },
  ];

  return (
    <div className="w-full bg-richblack select-none">
      {/* SECTION 1 — PAGE HERO */}
      <section className="relative bg-forest pt-32 pb-24 md:py-[120px] px-6 md:px-8 border-b border-lime/10 overflow-hidden">
        <div className="grain-overlay" />
        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center text-center justify-center">
          <ScrollReveal className="max-w-4xl space-y-6 flex flex-col items-center text-center mx-auto">
            <h1 className="font-syne text-[40px] sm:text-6xl md:text-8xl font-extrabold text-cream leading-[1.05] tracking-editorial">
              <span className="block text-white">Own a Food Business.</span>
              <span className="italic font-bold text-lime">Let Us Run It.</span>
            </h1>
            <p className="font-dmsans text-base md:text-xl text-gray max-w-2xl leading-relaxed mx-auto">
              The Foodpark FICO Partnership Model — Low Investment. Zero Hassle. Real Returns.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              onClick={openModal}
              className="inline-flex items-center justify-center bg-lime text-richblack font-syne font-semibold px-8 py-4 rounded-full text-base shadow-[0_4px_20px_rgba(212,223,0,0.15)] hover:shadow-[0_4px_25px_rgba(212,223,0,0.3)] transition-shadow duration-300"
            >
              Apply for Partnership
            </motion.button>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 2 — FICO EXPLAINER STRIP */}
      <section className="bg-richblack py-12 px-6 md:px-8 relative z-10">
        <div className="max-w-[1280px] mx-auto">
          <ScrollReveal className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            {steps.map((step, idx) => (
              <React.Fragment key={step.num}>
                <div className="flex items-center space-x-4">
                  <span className="font-spacegrotesk text-2xl font-bold text-lime bg-forest/30 border border-lime/20 w-12 h-12 rounded-full flex items-center justify-center">
                    {step.num}
                  </span>
                  <span className="font-syne text-lg font-semibold text-cream">
                    {step.label}
                  </span>
                </div>
                {idx < steps.length - 1 && (
                  <ArrowRight
                    size={20}
                    className="hidden md:block text-lime/40"
                  />
                )}
              </React.Fragment>
            ))}
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 3 — ADVANTAGES GRID */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto relative z-10">
        <ScrollReveal staggerChildren className="space-y-12">
          {/* Header */}
          <div className="max-w-2xl">
            <SectionTag text="Why It Works" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              Partnership Advantages
            </h2>
            <p className="font-dmsans text-sm md:text-base text-gray mt-4">
              We eliminate traditional restaurant risk factors, transforming complex food service into a turnkey financial asset.
            </p>
          </div>

          {/* Advantages Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((adv) => (
              <ScrollRevealItem key={adv.title}>
                <motion.div
                  whileHover={{ scale: 1.04, y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="group relative bg-[#1A1A18] border border-forest/30 p-8 rounded-2xl flex flex-col justify-between overflow-hidden min-h-[200px] cursor-pointer"
                >
                  <div>
                    <h3 className="font-syne text-lg md:text-xl font-bold text-cream group-hover:text-white transition-colors duration-300 mb-3">
                      {adv.title}
                    </h3>
                    <p className="font-dmsans text-sm text-gray/80 leading-relaxed">
                      {adv.desc}
                    </p>
                  </div>
                  <div className="absolute bottom-0 left-0 h-[2px] bg-lime w-0 group-hover:w-full transition-all duration-500" />
                </motion.div>
              </ScrollRevealItem>
            ))}
          </div>
        </ScrollReveal>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 4 — TWO MODELS (PRICING CARDS) */}
      <section className="bg-forest py-20 md:py-[120px] px-6 md:px-8 relative z-10">
        <div className="max-w-[1280px] mx-auto space-y-12">
          {/* Header */}
          <div className="max-w-2xl">
            <SectionTag text="Financial Schemes" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              Two Ways to Earn
            </h2>
            <p className="font-dmsans text-sm md:text-base text-cream/80 mt-4">
              Pick the reward structure that fits your financial goals — stable monthly cash flows or high-upside sales commission shares.
            </p>
          </div>

          {/* Pricing Cards */}
          <ScrollReveal
            staggerChildren
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Left Card — Fix Revenue Model */}
            <ScrollRevealItem>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="bg-richblack border border-forest p-8 rounded-2xl flex flex-col justify-between min-h-[550px] shadow-xl"
              >
                <div className="space-y-6">
                  <div>
                    <span className="font-spacegrotesk text-xs uppercase tracking-widest bg-gray/10 border border-gray/30 text-gray px-3 py-1 rounded-full inline-block font-semibold mb-4">
                      Stable & Predictable
                    </span>
                    <h3 className="font-syne text-2xl font-bold text-cream">
                      Fix Revenue Model
                    </h3>
                  </div>

                  <div className="divide-y divide-forest/30 font-dmsans text-sm">
                    {[
                      { label: "One-time Investment", val: "₹3,50,000" },
                      { label: "Monthly Fixed Return", val: "₹15,000 (5%)" },
                      { label: "Contract Duration", val: "48 Months" },
                      { label: "Total Contract Earnings", val: "₹7,20,000" },
                      { label: "Total Growth (4 Years)", val: "~205%" },
                      { label: "Payback Period", val: "~20 Months" },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="py-3 flex justify-between items-center"
                      >
                        <span className="text-gray/80">{row.label}</span>
                        <span className="font-spacegrotesk font-semibold text-cream">
                          {row.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 pt-6">
                  <p className="font-dmsans text-xs text-gray/70 italic leading-relaxed">
                    Best For: Investors who prioritize guaranteed, predictable monthly cash flow.
                  </p>
                  <button
                    onClick={openModal}
                    className="w-full border border-gray/40 text-gray hover:border-lime hover:text-lime font-syne font-semibold py-3 px-6 rounded-lg text-sm transition-all duration-300"
                  >
                    Choose Fix Model
                  </button>
                </div>
              </motion.div>
            </ScrollRevealItem>

            {/* Right Card — Revenue Sharing Model */}
            <ScrollRevealItem>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="bg-lime text-richblack p-8 rounded-2xl flex flex-col justify-between min-h-[550px] shadow-2xl relative overflow-hidden border-2 border-lime"
              >
                {/* Highlight Tag */}
                <div className="absolute top-0 right-0 bg-richblack text-lime font-spacegrotesk text-[10px] uppercase font-bold py-1 px-4 rounded-bl-lg tracking-widest">
                  Featured
                </div>

                <div className="space-y-6">
                  <div>
                    <span className="font-spacegrotesk text-xs uppercase tracking-widest bg-richblack/10 border border-richblack/20 text-richblack px-3 py-1 rounded-full inline-block font-bold mb-4">
                      Higher Returns ⭐
                    </span>
                    <h3 className="font-syne text-2xl font-bold text-richblack">
                      Revenue Sharing Model
                    </h3>
                  </div>

                  <div className="divide-y divide-richblack/10 font-dmsans text-sm">
                    {[
                      { label: "One-time Investment", val: "₹3,50,000" },
                      { label: "Avg. Daily Sales", val: "₹5,000" },
                      { label: "Avg. Monthly Sales", val: "₹1,50,000" },
                      { label: "Monthly Royalty (18%)", val: "~₹27,000" },
                      { label: "Contract Duration", val: "48 Months" },
                      { label: "Total Earnings (ROI)", val: "₹12,96,000" },
                      { label: "Total Growth (4 Years)", val: "~370%" },
                      { label: "Payback Period", val: "~13 Months" },
                    ].map((row) => (
                      <div
                        key={row.label}
                        className="py-3 flex justify-between items-center border-richblack/10"
                      >
                        <span className="text-richblack/80">{row.label}</span>
                        <span className="font-spacegrotesk font-bold text-richblack">
                          {row.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6 pt-6">
                  <p className="font-dmsans text-xs text-richblack/70 italic leading-relaxed">
                    Best For: Investors who want to maximize returns and ride cloud kitchen growth.
                  </p>
                  <button
                    onClick={openModal}
                    className="w-full bg-richblack text-lime font-syne font-bold py-3 px-6 rounded-lg text-sm hover:scale-[1.02] hover:shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all duration-300"
                  >
                    Choose Revenue Share
                  </button>
                </div>
              </motion.div>
            </ScrollRevealItem>
          </ScrollReveal>
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 5 — COMPARISON TABLE */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto relative z-10">
        <ScrollReveal className="space-y-8">
          <div className="max-w-2xl">
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              Schemes Comparison
            </h2>
          </div>

          <div className="w-full overflow-x-auto rounded-xl border border-forest/30 shadow-xl">
            <table className="w-full text-left border-collapse min-w-[600px] font-dmsans text-sm">
              <thead>
                <tr className="bg-forest text-lime font-syne font-semibold border-b border-forest">
                  <th className="py-4 px-6">Feature</th>
                  <th className="py-4 px-6">Fix Model</th>
                  <th className="py-4 px-6 text-lime">Revenue Sharing Model</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest/20">
                <tr className="bg-[#1A1A18] hover:bg-forest/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-cream">Monthly Income</td>
                  <td className="py-4 px-6 text-gray">₹15,000 Fixed</td>
                  <td className="py-4 px-6 font-semibold text-lime">~₹27,000 Variable (18% Royalty)</td>
                </tr>
                <tr className="bg-[#161614] hover:bg-forest/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-cream">Payback Period</td>
                  <td className="py-4 px-6 text-gray">~20 Months</td>
                  <td className="py-4 px-6 font-semibold text-lime">~13 Months</td>
                </tr>
                <tr className="bg-[#1A1A18] hover:bg-forest/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-cream">Total 4-Year Return</td>
                  <td className="py-4 px-6 text-gray">₹7,20,000</td>
                  <td className="py-4 px-6 font-semibold text-lime">₹12,96,000 (at ₹5K avg. daily sales)</td>
                </tr>
                <tr className="bg-[#161614] hover:bg-forest/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-cream">Growth Percentage</td>
                  <td className="py-4 px-6 text-gray">~205% Total</td>
                  <td className="py-4 px-6 font-semibold text-lime">~370% Total</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 6 — HOW IT WORKS (Vertical Timeline Layout) */}
      <section className="bg-forest py-20 md:py-[120px] px-6 md:px-8 relative z-10 overflow-hidden">
        <div className="max-w-[1280px] mx-auto space-y-12">
          {/* Header */}
          <div className="max-w-2xl">
            <SectionTag text="Onboarding Process" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              How It Works
            </h2>
            <p className="font-dmsans text-sm md:text-base text-cream/80 mt-4">
              Get your cloud kitchen investment structured and generating returns in 4 simple stages.
            </p>
          </div>

          {/* Vertical Onboarding Timeline */}
          <div className="relative max-w-2xl mx-auto pl-8 border-l border-dashed border-lime/30 space-y-12">
            {onboardingSteps.map((step) => (
              <ScrollRevealItem
                key={step.step}
                className="relative group cursor-pointer"
              >
                {/* Timeline Bullet */}
                <div className="absolute -left-[49px] top-1.5 w-8 h-8 rounded-full bg-richblack border-2 border-lime flex items-center justify-center text-lime font-spacegrotesk text-sm font-bold group-hover:bg-lime group-hover:text-richblack transition-colors duration-300 shadow-[0_0_15px_rgba(212,223,0,0.1)] group-hover:shadow-[0_0_20px_rgba(212,223,0,0.4)]">
                  {step.step.replace("Step ", "")}
                </div>

                {/* Content Box with Spring hover popup */}
                <motion.div
                  whileHover={{ x: 8, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="bg-richblack/30 border border-forest/35 p-6 rounded-xl shadow-lg"
                >
                  <span className="font-spacegrotesk text-xs uppercase tracking-widest text-lime font-semibold block mb-1">
                    {step.step}
                  </span>
                  <h3 className="font-syne text-lg font-bold text-cream mb-2 group-hover:text-white transition-colors duration-200">
                    {step.title}
                  </h3>
                  <p className="font-dmsans text-sm text-gray/80 leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>
              </ScrollRevealItem>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 7 — MARKET STAT BAND */}
      <section className="bg-lime py-16 px-6 md:px-8 text-center relative z-10 text-richblack">
        <ScrollReveal className="max-w-4xl mx-auto space-y-4">
          <h2 className="font-spacegrotesk text-xl sm:text-2xl md:text-[38px] font-extrabold leading-snug tracking-tight">
            &ldquo;India Foodservice Market: USD 77.54B (2024) → USD 125.06B (2029) at 10.03% CAGR&rdquo;
          </h2>
          <p className="font-dmsans text-xs sm:text-sm uppercase tracking-widest font-bold opacity-80">
            The market is growing. Your opportunity is now.
          </p>
        </ScrollReveal>
      </section>

      <hr className="border-t-2 border-lime w-full opacity-100 relative z-10" />

      {/* SECTION 8 — CONTACT + FINAL CTA */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto relative z-10 text-center flex flex-col items-center justify-center space-y-12">
        <ScrollReveal className="max-w-2xl space-y-4">
          <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial">
            Start Your Foodpark Journey Today
          </h2>
          <p className="font-dmsans text-sm md:text-base text-gray max-w-lg mx-auto">
            Get in touch with our partnerships office directly or submit an application to reserve your slot.
          </p>
        </ScrollReveal>

        {/* Contact Info Pills */}
        <ScrollReveal
          delay={0.1}
          className="flex flex-col md:flex-row items-center justify-center gap-6 font-spacegrotesk text-sm font-semibold"
        >
          <a
            href="tel:05223350876"
            className="flex items-center space-x-3 bg-[#1A1A18] border border-forest/35 py-3 px-6 rounded-full text-cream hover:border-lime/50 transition-colors"
          >
            <Phone size={16} className="text-lime" />
            <span>0522-3350876</span>
          </a>
          <a
            href="mailto:foodparkventuresinfo@gmail.com"
            className="flex items-center space-x-3 bg-[#1A1A18] border border-forest/35 py-3 px-6 rounded-full text-cream hover:border-lime/50 transition-colors"
          >
            <Mail size={16} className="text-lime" />
            <span>foodparkventuresinfo@gmail.com</span>
          </a>
          <a
            href="https://www.foodparkindia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 bg-[#1A1A18] border border-forest/35 py-3 px-6 rounded-full text-cream hover:border-lime/50 transition-colors"
          >
            <Globe size={16} className="text-lime" />
            <span>www.foodparkindia.com</span>
          </a>
        </ScrollReveal>

        {/* Large button */}
        <ScrollReveal delay={0.2}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            onClick={openModal}
            className="inline-flex items-center justify-center bg-lime text-richblack font-syne font-bold px-12 py-5 rounded-full text-lg shadow-[0_4px_20px_rgba(212,223,0,0.15)] hover:scale-[1.03] hover:shadow-[0_4px_30px_rgba(212,223,0,0.35)] transition-all duration-300 active:scale-95"
          >
            Apply Now
          </motion.button>
        </ScrollReveal>
      </section>
    </div>
  );
}
