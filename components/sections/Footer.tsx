"use client";

import { Heart, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Cloud, ConfettiLayer, Star } from "@/components/ui/Decorations";
import { DecorativeAsset } from "@/components/ui/DecorativeAsset";
import { eventConfig } from "@/lib/event-config";
import { fadeUp, floatingLoop, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

const stitchBase = "/images/stitch/stitch_nolan_s_heroic_5th_birthday_invitation";

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <footer className="relative overflow-hidden px-5 pb-10 pt-14 md:px-8">
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-brand-soft to-transparent" aria-hidden="true" />
      <ConfettiLayer />
      <Cloud className="animate-cloud-drift left-8 top-8 scale-75 opacity-80" />
      <Cloud className="animate-cloud-drift right-8 top-14 hidden opacity-70 [animation-delay:1.5s] md:block" />
      <Star className="right-[18%] top-10 animate-spin-slow" />
      <motion.div
        className="relative mx-auto flex max-w-4xl flex-col items-center gap-5 text-center"
        variants={staggerContainer}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={viewportOnce}
      >
        <motion.div className="w-28" variants={scaleIn} animate={shouldReduceMotion ? undefined : floatingLoop}>
          <DecorativeAsset
            src={`${stitchBase}/isolated_cluster_of_5_glossy_balloons_red_and_white_3d_premium_style_soft/screen.png`}
            alt=""
            width={220}
            height={260}
          />
        </motion.div>
        <motion.div className="flex flex-col gap-3" variants={fadeUp}>
          <h2 className="text-[2rem] leading-tight text-ink md:text-[2.7rem]">
            On a hâte de te voir !
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
            Prépare ton plus beau sourire pour une super journée.
          </p>
        </motion.div>
        <motion.div className="mt-2 flex flex-col items-center gap-2 text-sm font-semibold text-muted-foreground" variants={fadeUp}>
          <span className="inline-flex items-center gap-2">
            <Heart className="size-4 text-brand-red" aria-hidden="true" />
            Invitation digitale créée avec amour
          </span>
          <span className="inline-flex items-center gap-2">
            <Sparkles className="size-4 text-brand-red" aria-hidden="true" />
            Contact parent : {eventConfig.contactParent}
          </span>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export { Footer };
