"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type SectionDividerProps = {
  className?: string;
};

const SectionDivider = ({ className }: SectionDividerProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "pointer-events-none relative mx-auto h-24 w-full overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      <motion.div
        className="clip-wave absolute inset-x-0 bottom-0 h-16 bg-white/75"
        initial={shouldReduceMotion ? false : { y: 16, opacity: 0 }}
        whileInView={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      />
      <div className="absolute left-1/2 top-8 h-10 w-[78%] -translate-x-1/2 rounded-full bg-brand-soft/80 blur-[22px]" />
      <motion.div
        className="absolute left-[14%] top-8 h-4 w-12 rounded-full bg-white shadow-soft-red md:left-[18%]"
        animate={shouldReduceMotion ? undefined : { x: [0, 18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[12%] top-5 h-5 w-16 rounded-full bg-white shadow-soft-red md:right-[18%]"
        animate={shouldReduceMotion ? undefined : { x: [0, -22, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-1/2 top-12 h-[5px] w-[46%] -translate-x-1/2 rounded-full bg-brand-red/20"
        initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
        whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
};

export { SectionDivider };
