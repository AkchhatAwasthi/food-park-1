import React from "react";

export default function MarqueeTicker() {
  const text = "Zauqeen • Beijing Bites • Biryani Xchange • Chai Station • Salad Story • The Indian Plate • Sambhar Sutra • Chaat Bazaar • Pizza Street • Toast Mafia • ";
  const repeatedText = `${text}${text}${text}`;

  return (
    <div className="w-full bg-forest h-16 flex items-center overflow-hidden border-y border-lime/20 relative z-10">
      <div className="animate-marquee-strip whitespace-nowrap flex">
        <span className="font-spacegrotesk text-sm md:text-base font-medium text-lime uppercase tracking-widest block py-2 select-none">
          {repeatedText}
        </span>
      </div>
    </div>
  );
}
