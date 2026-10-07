"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

export const NumberTicker = ({
  value,
  duration = 1400,
  className,
  suffix = "",
}: {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && ref.current) {
      anime({
        targets: ref.current,
        innerHTML: [0, value],
        easing: "easeOutExpo",
        round: value % 1 === 0 ? 1 : 10,
        duration: duration,
        update: function (anim) {
          if (ref.current) {
            ref.current.innerHTML = anim.animations[0].currentValue + suffix;
          }
        },
      });
    }
  }, [isInView, value, duration, suffix]);

  return <span ref={ref} className={cn("inline-block", className)}>0{suffix}</span>;
};
