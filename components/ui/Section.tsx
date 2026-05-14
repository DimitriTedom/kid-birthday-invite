"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, sectionReveal, staggerContainer, viewportOnce } from "@/lib/motion";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

const Section = ({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  children,
  ...props
}: SectionProps) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.section
      className={cn("section overflow-hidden px-5 md:px-8", className)}
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView={shouldReduceMotion ? undefined : "visible"}
      viewport={viewportOnce}
      variants={sectionReveal}
      {...props}
    >
      <motion.div
        className={cn("mx-auto w-full max-w-6xl", align === "center" && "text-center")}
        variants={staggerContainer}
      >
        <motion.div
          variants={fadeUp}
        className={cn(
          "mb-10 flex flex-col gap-3",
          align === "center" && "mx-auto max-w-2xl items-center"
        )}
      >
        {eyebrow ? (
          <p className="w-fit rounded-full border border-brand-red/20 bg-white/75 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-red shadow-soft-red">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-[2rem] leading-[1.08] text-ink md:text-[2.75rem]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {description}
          </p>
        ) : null}
        </motion.div>
        {children}
      </motion.div>
    </motion.section>
  );
};

export { Section };
