"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useModal } from "@/context/ModalContext";
import { X, CheckCircle2 } from "lucide-react";

export default function FranchiseModal() {
  const { isOpen, closeModal } = useModal();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    model: "Fix Revenue",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setIsSubmitted(true);
  };

  const handleClose = () => {
    closeModal();
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        phone: "",
        email: "",
        city: "",
        model: "Fix Revenue",
        message: "",
      });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        >
          {/* Backdrop Click */}
          <div className="absolute inset-0" onClick={handleClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg bg-richblack border border-forest p-6 md:p-8 rounded-2xl shadow-2xl z-10 overflow-hidden"
          >
            {/* Close Cross Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray hover:text-lime transition-colors duration-200"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {!isSubmitted ? (
              <>
                <h2 className="font-syne text-2xl md:text-3xl font-bold text-cream mb-1">
                  Partner With Us
                </h2>
                <p className="font-dmsans text-sm text-gray mb-6">
                  Invest ₹3.5L under the FICO model and let us handle all operations.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 font-dmsans">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-wider text-gray mb-1"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Rahul Sharma"
                      className="w-full bg-[#161614] border border-forest/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors duration-200"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs uppercase tracking-wider text-gray mb-1"
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 9876543210"
                        className="w-full bg-[#161614] border border-forest/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs uppercase tracking-wider text-gray mb-1"
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@gmail.com"
                        className="w-full bg-[#161614] border border-forest/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-xs uppercase tracking-wider text-gray mb-1"
                      >
                        City of Interest *
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        required
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Lucknow"
                        className="w-full bg-[#161614] border border-forest/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="model"
                        className="block text-xs uppercase tracking-wider text-gray mb-1"
                      >
                        Investment Model *
                      </label>
                      <select
                        id="model"
                        name="model"
                        value={formData.model}
                        onChange={handleChange}
                        className="w-full bg-[#161614] border border-forest/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors duration-200"
                      >
                        <option value="Fix Revenue">Fix Revenue Model</option>
                        <option value="Revenue Sharing">
                          Revenue Sharing Model
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs uppercase tracking-wider text-gray mb-1"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your investment profile..."
                      className="w-full bg-[#161614] border border-forest/50 text-white rounded-lg px-4 py-3 focus:outline-none focus:border-lime focus:ring-1 focus:ring-lime transition-colors duration-200"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-lime text-richblack font-syne font-bold py-3.5 px-6 rounded-lg text-sm hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(212,223,0,0.3)] transition-all duration-300 active:scale-95"
                  >
                    Submit Application
                  </button>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center font-dmsans">
                <CheckCircle2 className="text-lime w-16 h-16 mb-4 animate-bounce" />
                <h2 className="font-syne text-2xl font-bold text-cream mb-2">
                  Application Received!
                </h2>
                <p className="text-gray max-w-sm text-sm">
                  Thank you for your interest. We&apos;ll contact you shortly!
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 bg-forest border border-lime/30 text-lime px-6 py-2 rounded-full font-semibold hover:bg-forest/80 transition-colors duration-200"
                >
                  Close Window
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
