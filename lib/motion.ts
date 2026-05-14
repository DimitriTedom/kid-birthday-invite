import type { TargetAndTransition, Variants } from "framer-motion";

export const viewportOnce = {
  once: true,
  amount: 0.22,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 105, damping: 22 },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, filter: "blur(5px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.08 },
  },
};

export const sectionReveal: Variants = {
  hidden: { opacity: 0, y: 34 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 90, damping: 24 },
  },
};

export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.72, rotate: -4 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 260, damping: 18 },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -34 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 95, damping: 22 },
  },
};

export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 34 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 95, damping: 22 },
  },
};

export const floatingLoop: TargetAndTransition = {
  y: [0, -14, 0],
  rotate: [0, 1.2, 0],
  transition: { duration: 6.5, repeat: Infinity, ease: "easeInOut" },
};

export const floatingSlow: TargetAndTransition = {
  y: [0, -18, 0],
  transition: { duration: 9.5, repeat: Infinity, ease: "easeInOut" },
};

export const driftSide: TargetAndTransition = {
  x: [0, 16, 0],
  transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
};

export const slowRotate: TargetAndTransition = {
  rotate: [0, 5, -4, 0],
  transition: { duration: 12, repeat: Infinity, ease: "easeInOut" },
};

export const pulseCTA: TargetAndTransition = {
  scale: [1, 1.025, 1],
  boxShadow: [
    "0 12px 28px rgba(233, 40, 40, 0.28)",
    "0 18px 42px rgba(233, 40, 40, 0.38)",
    "0 12px 28px rgba(233, 40, 40, 0.28)",
  ],
  transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut" },
};
