"use client";

import React, { useState } from "react";
import { useModal } from "@/context/ModalContext";
import { ArrowRight, Phone, Mail, Globe } from "lucide-react";
import { motion } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ScrollReveal";
import SectionTag from "@/components/SectionTag";

export default function FranchiseClient() {
  const { openModal } = useModal();
  const [dailySales, setDailySales] = useState(5000);
  const [selectedModel, setSelectedModel] = useState<"fix" | "revenue" | null>(null);

  const steps = [
    { num: "01", label: "You Invest" },
    { num: "02", label: "We Operate" },
    { num: "03", label: "Zero Hassle" },
    { num: "04", label: "You Earn" },
  ];

  const advantages = [
    {
      title: "Genuinely Low Entry Point",
      desc: "Most food businesses demand 10–50 lakh rupees just to open doors. Foodpark's franchise entry starts at ₹2.9 lakh — an investment level designed to be realistic, achievable, and accessible for salaried professionals, small business owners, and first-time investors.",
    },
    {
      title: "Zero Monthly Overhead — Seriously, Zero",
      desc: "No monthly rent contribution. No staff salary liability. No supply cost reconciliation. No electricity bill surprises. Foodpark absorbs all recurring operational costs entirely. Every rupee of your return is net of all the costs we carry.",
    },
    {
      title: "No Equipment. No Kitchen Setup.",
      desc: "Commercial kitchen equipment — industrial ovens, refrigeration units, exhaust systems, POS hardware — runs to lakhs. Foodpark's existing kitchen infrastructure means you never spend a paisa on this. You don't buy a kitchen — you buy into a system.",
    },
    {
      title: "No Staff Management — Ever",
      desc: "Managing kitchen staff is genuinely one of the hardest things in the food business. Foodpark owns that problem completely. We hire, train, retain, and manage every kitchen team member across all locations. You never receive an HR call about a kitchen situation.",
    },
    {
      title: "The Perfect Side Business",
      desc: "Foodpark was specifically designed to function as a fully passive investment. Whether you're a doctor, a software engineer, a government employee, or a stay-at-home parent — your cloud kitchen franchise runs 7 days a week without requiring a single minute of your time.",
    },
    {
      title: "Full Corporate Brand Support",
      desc: "Foodpark provides corporate-level digital marketing, Zomato/Swiggy optimization, social media support, customer acquisition campaigns, and ongoing operational guidance. From the day your kitchen goes live, you have a full team in your corner maximizing every order and every rating.",
    },
  ];

  const onboardingSteps = [
    {
      step: "Step 1",
      title: "Apply & Connect (Day 1)",
      desc: "Fill out the franchise enquiry form or call us directly. Our team will schedule a detailed consultation call where we walk you through every aspect of the FICO model, answer every question you have, and help you decide which financial scheme fits your goals. No pressure. No hard sell. Just honest conversations.",
    },
    {
      step: "Step 2",
      title: "Choose Your Brand & Finalize (Week 1)",
      desc: "Once you're ready to proceed, you select your preferred Foodpark brand — or multiple brands, depending on your investment tier. We present the franchise agreement, review the terms together transparently, and complete the onboarding documentation. Everything is clear, structured, and signed with full legal compliance.",
    },
    {
      step: "Step 3",
      title: "We Set Up, Staff, and Launch (Weeks 2–4)",
      desc: "Foodpark's operations team takes over completely. We integrate your brand into our existing kitchen infrastructure, configure all delivery app listings, complete the local marketing launch, and run quality checks. You receive a full setup briefing and launch report when your kitchen goes live. You don't lift a finger — except to sign the agreement.",
    },
    {
      step: "Step 4",
      title: "Receive Monthly Returns (Month 1 Onward)",
      desc: "From month one, your returns begin flowing. If you're on the Fix Model, ₹15,000 arrives every month without fail. If you're on the Revenue Sharing Model, your royalty is calculated from verified monthly sales and deposited within the agreed timeline. Full transparency, full documentation, every single cycle.",
    },
  ];

  return (
    <div className="w-full bg-richblack select-none">
      {/* SECTION 1 — PAGE HERO */}
      <section className="relative bg-richblack pt-32 pb-24 md:py-[120px] px-6 md:px-8 border-b border-lime/10 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
            alt="Business Operations Chart"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-richblack via-richblack/60 to-richblack/40 pointer-events-none" />
        </div>

        <div className="grain-overlay" />
        <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center text-center justify-center">
          <ScrollReveal className="max-w-4xl space-y-6 flex flex-col items-center text-center mx-auto">
            <h1 className="font-syne text-[40px] sm:text-6xl md:text-8xl font-extrabold text-cream leading-[1.05] tracking-editorial">
              <span className="block text-white">You Put In the Money.</span>
              <span className="block text-white">We Put In the Work.</span>
              <span className="italic font-bold text-lime">We Both Profit.</span>
            </h1>
            <p className="font-dmsans text-base md:text-xl text-gray max-w-2xl leading-relaxed mx-auto">
              This is the Foodpark FICO franchise — the most hands-free, transparent, and financially compelling cloud kitchen franchise opportunity in Lucknow and across India right now. Low entry cost. Zero operational involvement. Fixed or performance-linked returns. 48-month partnership. Real results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              onClick={openModal}
              className="inline-flex items-center justify-center bg-lime text-richblack font-syne font-semibold px-8 py-4 rounded-full text-base shadow-[0_4px_20px_rgba(212,223,0,0.15)] hover:shadow-[0_4px_25px_rgba(212,223,0,0.3)] transition-shadow duration-300"
            >
              Apply for Franchise — Takes Less Than 2 Minutes
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
              Six Reasons This Is the Smartest Investment in the Room.
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
          {/* Header — centered */}
          <div className="text-center mx-auto max-w-2xl">
            <SectionTag text="Financial Schemes" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight mt-3">
              Two Ways to Earn.<br />
              <span className="text-lime italic">Both Profitable.</span> Your Call.
            </h2>
            <p className="font-dmsans text-sm md:text-base text-cream/80 mt-4">
              We&apos;ve structured two franchise models to match different investor profiles. Whether you want the certainty of a fixed monthly return or the higher upside of a performance-linked revenue share, there&apos;s a Foodpark model built for you.
            </p>
          </div>

          {/* Pricing Cards — equal size, equal base color, lime on hover */}
          <ScrollReveal
            staggerChildren
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Left Card — Fix Revenue Model */}
            <ScrollRevealItem>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="group bg-richblack border border-forest/40 hover:bg-lime hover:border-lime p-8 rounded-2xl flex flex-col justify-between min-h-[580px] shadow-xl transition-colors duration-300 cursor-pointer"
              >
                <div className="space-y-6">
                  <div>
                    <span className="font-spacegrotesk text-xs uppercase tracking-widest bg-forest/40 group-hover:bg-richblack/15 border border-lime/20 text-lime group-hover:text-richblack px-3 py-1 rounded-full inline-block font-semibold mb-4 transition-colors duration-300">
                      Stable &amp; Predictable
                    </span>
                    <h3 className="font-syne text-2xl font-bold text-cream group-hover:text-richblack transition-colors duration-300">
                      Fix Revenue Model
                    </h3>
                  </div>

                  <div className="divide-y divide-forest/30 group-hover:divide-richblack/15 font-dmsans text-sm transition-colors duration-300">
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
                        <span className="text-gray/80 group-hover:text-richblack/70 transition-colors duration-300">{row.label}</span>
                        <span className="font-spacegrotesk font-semibold text-cream group-hover:text-richblack transition-colors duration-300">
                          {row.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <p className="font-dmsans text-xs text-gray/70 group-hover:text-richblack/60 italic leading-relaxed transition-colors duration-300">
                    Best For: Investors who value guaranteed, predictable monthly income — salaried professionals, retirees, or first-time investors who want to start conservatively.
                  </p>
                  <button
                    onClick={openModal}
                    className="w-full border border-lime/40 group-hover:border-richblack text-lime group-hover:bg-richblack group-hover:text-lime font-syne font-semibold py-3 px-6 rounded-lg text-sm transition-all duration-300"
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
                className="group bg-richblack border border-forest/40 hover:bg-lime hover:border-lime p-8 rounded-2xl flex flex-col justify-between min-h-[580px] shadow-xl transition-colors duration-300 cursor-pointer"
              >
                <div className="space-y-6">
                  <div>
                    <span className="font-spacegrotesk text-xs uppercase tracking-widest bg-forest/40 group-hover:bg-richblack/15 border border-lime/20 text-lime group-hover:text-richblack px-3 py-1 rounded-full inline-block font-semibold mb-4 transition-colors duration-300">
                      Higher Returns ⭐
                    </span>
                    <h3 className="font-syne text-2xl font-bold text-cream group-hover:text-richblack transition-colors duration-300">
                      Revenue Sharing Model
                    </h3>
                  </div>

                  <div className="divide-y divide-forest/30 group-hover:divide-richblack/15 font-dmsans text-sm transition-colors duration-300">
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
                        className="py-3 flex justify-between items-center"
                      >
                        <span className="text-gray/80 group-hover:text-richblack/70 transition-colors duration-300">{row.label}</span>
                        <span className="font-spacegrotesk font-semibold text-cream group-hover:text-richblack transition-colors duration-300">
                          {row.val}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <p className="font-dmsans text-xs text-gray/70 group-hover:text-richblack/60 italic leading-relaxed transition-colors duration-300">
                    Best For: Growth-focused investors who want maximum returns and are comfortable with performance-based income. Potentially 80% more earnings vs the Fix Model over 4 years.
                  </p>
                  <button
                    onClick={openModal}
                    className="w-full border border-lime/40 group-hover:border-richblack text-lime group-hover:bg-richblack group-hover:text-lime font-syne font-semibold py-3 px-6 rounded-lg text-sm transition-all duration-300"
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

      {/* SECTION 4.5 — INTERACTIVE ROI CALCULATOR */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto relative z-10">
        <ScrollReveal className="space-y-12">
          <div className="max-w-2xl">
            <SectionTag text="ROI Simulator" />
            <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial leading-tight">
              Interactive ROI Simulator
            </h2>
            <p className="font-dmsans text-sm md:text-base text-gray mt-4">
              Slide to adjust the estimated average daily sales of your cloud kitchen brand and compare how the Fix Model and Revenue Sharing Model scale.
            </p>
          </div>

          <div className="bg-[#1A1A18] border border-forest/30 p-6 md:p-10 rounded-[2rem] max-w-4xl mx-auto space-y-8 shadow-2xl">
            {/* Slider control */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <span className="font-syne text-lg font-semibold text-cream">
                  Estimated Average Daily Sales
                </span>
                <span className="font-spacegrotesk text-3xl font-extrabold text-lime bg-forest/20 border border-lime/10 px-4 py-1.5 rounded-2xl">
                  ₹{dailySales.toLocaleString("en-IN")}
                </span>
              </div>
              <input
                type="range"
                min="2000"
                max="15000"
                step="500"
                value={dailySales}
                onChange={(e) => setDailySales(Number(e.target.value))}
                className="w-full h-2 bg-forest/30 rounded-lg appearance-none cursor-pointer accent-lime focus:outline-none"
              />
              <div className="flex justify-between text-xs text-gray/50 font-spacegrotesk">
                <span>₹2,000 / day</span>
                <span>₹5,000 (Conservative)</span>
                <span>₹10,000 (Healthy)</span>
                <span>₹15,000 / day</span>
              </div>
            </div>

            {/* Estimated Monthly Sales Banner */}
            <div className="bg-forest/10 border border-forest/20 p-4 rounded-xl flex justify-between items-center text-sm md:text-base font-dmsans">
              <span className="text-gray/80">Estimated Monthly Kitchen Sales:</span>
              <span className="font-spacegrotesk font-bold text-cream">
                ₹{(dailySales * 30).toLocaleString("en-IN")}
              </span>
            </div>

            {/* Side-by-side comparison — click to select */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
              {/* Fix Model Card */}
              <div
                onClick={() => setSelectedModel(selectedModel === "fix" ? null : "fix")}
                className={`group border p-6 md:p-8 rounded-2xl space-y-6 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  selectedModel === "fix"
                    ? "bg-lime border-lime shadow-[0_0_30px_rgba(212,223,0,0.2)]"
                    : "bg-richblack/40 border-forest/20 hover:border-lime/50 hover:bg-richblack/60"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className={`font-syne text-xl font-bold transition-colors duration-300 ${selectedModel === "fix" ? "text-richblack" : "text-cream"}`}>Fix Model</span>
                    <span className={`font-spacegrotesk text-xs uppercase px-2.5 py-0.5 rounded-full border transition-colors duration-300 ${
                      selectedModel === "fix" ? "bg-richblack/10 border-richblack/20 text-richblack" : "bg-gray/10 border-gray/20 text-gray"
                    }`}>
                      Guaranteed
                    </span>
                  </div>
                  <p className={`font-dmsans text-xs transition-colors duration-300 ${selectedModel === "fix" ? "text-richblack/60" : "text-gray/60"}`}>
                    A fixed return scheme independent of actual daily kitchen performance.
                  </p>
                  <div className={`divide-y font-dmsans text-sm transition-colors duration-300 ${selectedModel === "fix" ? "divide-richblack/15" : "divide-forest/10"}`}>
                    {[
                      { label: "Monthly Income", val: "₹15,000" },
                      { label: "Payback Period", val: "~20 Months" },
                      { label: "4-Year Total Earnings", val: "₹7,20,000" },
                      { label: "Total ROI", val: "205.7%" },
                    ].map((row) => (
                      <div key={row.label} className="py-2 flex justify-between">
                        <span className={`transition-colors duration-300 ${selectedModel === "fix" ? "text-richblack/70" : "text-gray/80"}`}>{row.label}</span>
                        <span className={`font-spacegrotesk font-semibold transition-colors duration-300 ${selectedModel === "fix" ? "text-richblack" : "text-cream"}`}>{row.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); openModal(); }}
                  className={`w-full font-syne font-semibold py-2.5 rounded-xl text-sm transition-all duration-300 mt-4 ${
                    selectedModel === "fix"
                      ? "bg-richblack text-lime hover:bg-richblack/80"
                      : "border border-forest/30 text-cream hover:border-lime hover:text-lime"
                  }`}
                >
                  Choose Fix Model
                </button>
              </div>

              {/* Revenue Sharing Model Card */}
              <div
                onClick={() => setSelectedModel(selectedModel === "revenue" ? null : "revenue")}
                className={`group border p-6 md:p-8 rounded-2xl space-y-6 flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  selectedModel === "revenue"
                    ? "bg-lime border-lime shadow-[0_0_30px_rgba(212,223,0,0.2)]"
                    : "bg-richblack/40 border-forest/20 hover:border-lime/50 hover:bg-richblack/60"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className={`font-syne text-xl font-bold transition-colors duration-300 ${selectedModel === "revenue" ? "text-richblack" : "text-cream"}`}>Revenue Share</span>
                    <span className={`font-spacegrotesk text-xs uppercase px-2.5 py-0.5 rounded-full border transition-colors duration-300 ${
                      selectedModel === "revenue" ? "bg-richblack/10 border-richblack/20 text-richblack" : "bg-gray/10 border-gray/20 text-gray"
                    }`}>
                      18% Royalty
                    </span>
                  </div>
                  <p className={`font-dmsans text-xs transition-colors duration-300 ${selectedModel === "revenue" ? "text-richblack/60" : "text-gray/60"}`}>
                    Returns scale dynamically based on the monthly sales of your selected brand.
                  </p>
                  <div className={`divide-y font-dmsans text-sm transition-colors duration-300 ${selectedModel === "revenue" ? "divide-richblack/15" : "divide-forest/10"}`}>
                    {[
                      { label: "Monthly Income", val: `₹${Math.round(dailySales * 30 * 0.18).toLocaleString("en-IN")}` },
                      { label: "Payback Period", val: `~${(350000 / (dailySales * 30 * 0.18)).toFixed(1)} Months` },
                      { label: "4-Year Total Earnings", val: `₹${Math.round(dailySales * 30 * 0.18 * 48).toLocaleString("en-IN")}` },
                      { label: "Total ROI", val: `${Math.round(((dailySales * 30 * 0.18 * 48) / 350000) * 100)}%` },
                    ].map((row) => (
                      <div key={row.label} className="py-2 flex justify-between">
                        <span className={`transition-colors duration-300 ${selectedModel === "revenue" ? "text-richblack/70" : "text-gray/80"}`}>{row.label}</span>
                        <span className={`font-spacegrotesk font-semibold transition-colors duration-300 ${selectedModel === "revenue" ? "text-richblack" : "text-cream"}`}>{row.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); openModal(); }}
                  className={`w-full font-syne font-semibold py-2.5 rounded-xl text-sm transition-all duration-300 mt-4 ${
                    selectedModel === "revenue"
                      ? "bg-richblack text-lime hover:bg-richblack/80"
                      : "border border-forest/30 text-cream hover:border-lime hover:text-lime"
                  }`}
                >
                  Choose Revenue Share
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
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
              From First Enquiry to First Return: How the Process Works.
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

      {/* SECTION 8 — CONTACT + FINAL CTA */}
      <section className="py-20 md:py-[120px] px-6 md:px-8 max-w-[1280px] mx-auto relative z-10 text-center flex flex-col items-center justify-center space-y-12">
        <ScrollReveal className="max-w-2xl space-y-4">
          <h2 className="font-syne text-3xl md:text-5xl font-bold text-white tracking-editorial">
            Start Your Foodpark Journey Today.
          </h2>
          <p className="font-dmsans text-sm md:text-base text-gray max-w-lg mx-auto">
            The cloud kitchen franchise opportunity in Lucknow — and across India — is not going to be this accessible forever. As Foodpark expands, franchise slots in premium delivery zones will become increasingly limited. Talk to our franchise team. Ask every question you have. We&apos;re ready.
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
