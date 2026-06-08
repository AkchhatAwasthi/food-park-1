"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2.0,
        ease: [0.22, 1, 0.36, 1], // Premium cubic-bezier easing
        onUpdate(latestValue) {
          setCount(latestValue);
        },
      });

      return () => controls.stop();
    }
  }, [isInView, value]);

  let formattedValue = "";
  if (isCurrency) {
    formattedValue = new Intl.NumberFormat("en-IN").format(
      Math.floor(count)
    );
  } else {
    formattedValue = count.toFixed(decimals);
  }

  return (
    <span
      ref={ref}
      className="font-spacegrotesk text-3xl sm:text-4xl md:text-[44px] lg:text-[44px] xl:text-[52px] font-extrabold text-lime block leading-none tracking-tight mb-2"
    >
      {prefix}{formattedValue}{suffix}
    </span>
  );
}
