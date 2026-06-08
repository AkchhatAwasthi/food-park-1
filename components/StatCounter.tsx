"use client";

import React, { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  isCurrency?: boolean;
}

export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  isCurrency = false,
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const node = ref.current;
      const controls = animate(0, value, {
        duration: 2.0,
        ease: [0.22, 1, 0.36, 1], // Premium cubic-bezier easing
        onUpdate(latestValue) {
          let formattedValue = "";
          if (isCurrency) {
            formattedValue = new Intl.NumberFormat("en-IN").format(
              Math.floor(latestValue)
            );
          } else {
            formattedValue = latestValue.toFixed(decimals);
          }
          node.textContent = `${prefix}${formattedValue}${suffix}`;
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value, prefix, suffix, decimals, isCurrency]);

  return (
    <span
      ref={ref}
      className="font-spacegrotesk text-3xl sm:text-4xl md:text-[44px] lg:text-[44px] xl:text-[52px] font-extrabold text-lime block leading-none tracking-tight mb-2"
    >
      {prefix}0{suffix}
    </span>
  );
}
