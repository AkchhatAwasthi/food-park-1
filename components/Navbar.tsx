"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useModal } from "@/context/ModalContext";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const { openModal } = useModal();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Our Brands", href: "/brands" },
    { name: "Partnership", href: "/franchise" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? "bg-[#1C1C1A]/80 backdrop-blur-md border-b border-forest/30 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center hover:opacity-90 transition-opacity"
          >
            <img
              src="https://res.cloudinary.com/dmj0smemf/image/upload/v1781096838/Untitled_design_2_3_hxuivd.png"
              alt="Foodpark Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 font-dmsans">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group relative py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive ? "text-lime" : "text-gray hover:text-lime"
                  }`}
                >
                  {link.name}
                  {/* Underline Slide-in */}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[2px] bg-lime transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Button / Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={openModal}
              className="hidden md:inline-flex items-center justify-center bg-lime text-richblack font-syne font-semibold px-6 py-2.5 rounded-full text-sm hover:scale-[1.03] hover:shadow-[0_4px_20px_rgba(212,223,0,0.3)] transition-all duration-300 active:scale-95"
            >
              Partner With Us
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-lime hover:text-acid transition-colors"
              aria-label="Open mobile menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-richblack flex flex-col justify-between p-6 md:p-8"
          >
            {/* Header in Mobile Menu */}
            <div className="flex items-center justify-between">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center hover:opacity-90 transition-opacity"
              >
                <img
                  src="https://res.cloudinary.com/dmj0smemf/image/upload/v1781096838/Untitled_design_2_3_hxuivd.png"
                  alt="Foodpark Logo"
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-lime hover:text-acid transition-colors"
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col space-y-6 my-auto font-syne text-3xl font-bold">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block py-2 transition-colors ${
                        isActive
                          ? "text-lime border-l-4 border-lime pl-4"
                          : "text-cream hover:text-lime"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Mobile CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex flex-col space-y-4"
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModal();
                }}
                className="w-full bg-lime text-richblack font-syne font-bold py-4 rounded-xl text-center hover:bg-acid transition-colors duration-300"
              >
                Partner With Us
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
