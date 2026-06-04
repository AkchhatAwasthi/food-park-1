"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "9105223350876"; // Lucknow phone number from contact details
  const message = "Hi Foodpark, I'm interested in learning more about your cloud kitchen partnership opportunities.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
      {/* Pulsing Outer Ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366]/40 scale-125 animate-ping opacity-60 pointer-events-none" />

      {/* Main Anchor Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl hover:bg-[#20ba5a] transition-colors focus:outline-none focus:ring-4 focus:ring-[#25D366]/50 relative z-10"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.459 3.475 1.332 4.992l-1.417 5.178 5.302-1.391c1.47.8 3.125 1.22 4.771 1.221h.004c5.505 0 9.988-4.482 9.988-9.988 0-2.666-1.038-5.173-2.925-7.061-1.887-1.887-4.394-2.925-7.067-2.925zm0 1.758c2.196 0 4.26.855 5.812 2.408 1.552 1.552 2.408 3.616 2.408 5.812 0 4.532-3.687 8.22-8.216 8.22-.1.001-.198 0-.299-.005a8.2 8.2 0 0 1-3.864-.997l-.348-.206-3.195.838.852-3.11-.226-.36a8.196 8.196 0 0 1-1.258-4.382c0-4.532 3.687-8.22 8.22-8.22zm4.815 11.589c-.263-.131-1.56-.77-1.802-.858-.242-.088-.419-.131-.595.131-.176.264-.683.858-.838 1.034-.154.176-.308.198-.572.066a7.213 7.213 0 0 1-2.124-1.31c-.822-.733-1.378-1.638-1.54-1.902-.162-.264-.017-.406.115-.537.118-.118.264-.308.396-.462.132-.154.176-.264.264-.44.088-.176.044-.33-.022-.462-.066-.132-.595-1.433-.815-1.961-.215-.518-.432-.448-.595-.456l-.507-.008c-.176 0-.462.066-.704.308-.242.242-.924.902-.924 2.199 0 1.297.946 2.55 1.078 2.726.132.176 1.861 2.842 4.509 3.985.63.272 1.122.435 1.506.557.633.201 1.21.173 1.665.105.508-.076 1.56-.638 1.78-.255.22-.383.22-.713.154-.802-.066-.088-.242-.132-.505-.264z" />
        </svg>
      </motion.a>
    </div>
  );
}
