"use client";

import { ArrowDown, MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cloud, CitySkyline, ConfettiLayer, GradientBlob, Lightning, Star } from "@/components/ui/Decorations";
import { DecorativeAsset } from "@/components/ui/DecorativeAsset";
import { eventConfig } from "@/lib/event-config";
import { fadeUp, pulseCTA, scaleIn, slowRotate, staggerContainer } from "@/lib/motion";

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative isolate min-h-[100dvh] overflow-hidden px-5 pb-12 pt-10 md:px-8 md:pb-20 md:pt-16"
    >
      <GradientBlob className="animate-blob-drift left-[-140px] top-[-160px] size-[360px] bg-brand-red/20 md:size-[520px]" />
      <GradientBlob className="animate-blob-drift bottom-[-180px] right-[-160px] size-[420px] bg-brand-blue/40 [animation-delay:2.2s] md:size-[620px]" />
      <ConfettiLayer />
      <Cloud className="animate-cloud-drift left-5 top-24 scale-75 opacity-80 md:left-12 md:scale-100" />
      <Cloud className="animate-cloud-drift right-2 top-16 scale-75 opacity-70 [animation-delay:1.2s] md:right-20 md:top-24" />
      <Star className="left-[12%] top-[18%] animate-spin-slow" />
      <Star className="animate-pop-soft right-[10%] top-[30%] size-3" />
      <Lightning className="animate-pop-soft right-[8%] top-[48%] hidden opacity-80 md:block" />

      <motion.div
        className="depth-scene relative mx-auto grid w-full max-w-6xl items-center gap-8 rounded-[36px] border border-white/80 bg-white/90 px-5 py-7 shadow-hero backdrop-blur md:grid-cols-[1.02fr_0.98fr] md:gap-10 md:rounded-[44px] md:px-10 md:py-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <div className="absolute inset-0 -z-10 overflow-hidden rounded-[inherit]">
          <motion.div
            className="absolute -left-24 top-10 size-64 rounded-full bg-brand-soft blur-3xl"
            animate={shouldReduceMotion ? undefined : { x: [0, 18, 0], y: [0, -12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -right-16 bottom-4 size-64 rounded-full bg-brand-red/20 blur-3xl"
            animate={shouldReduceMotion ? undefined : { x: [0, -16, 0], y: [0, 10, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-0 bg-halftone-soft opacity-50" />
          <CitySkyline />
        </div>

        <motion.div className="relative z-[1] flex flex-col items-center gap-5 text-center md:items-start md:text-left" variants={fadeUp}>
          <div className="inline-flex items-center rounded-full border border-brand-red/20 bg-brand-soft px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] text-brand-red shadow-soft-red">
            Invitation spéciale
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-[3rem] leading-[0.98] text-ink md:text-[4.65rem]">
              Tu es invité !
            </h1>
            <p className="text-xl font-extrabold text-brand-red md:text-2xl">
              Viens fêter les {eventConfig.age} ans de {eventConfig.childName}
            </p>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Une journée pleine de jeux, de rires et de surprises
            </p>
          </div>
          <div className="grid w-full gap-3 sm:grid-cols-2 md:max-w-xl">
            <motion.div animate={shouldReduceMotion ? undefined : pulseCTA}>
              <Button asChild size="large" variant="primary" leftIcon={<MessageCircle className="size-5" aria-hidden="true" />} className="w-full">
                <a href="#rsvp">Je confirme ma présence</a>
              </Button>
            </motion.div>
            <Button asChild size="large" variant="secondary" rightIcon={<ArrowDown className="size-5" aria-hidden="true" />}>
              <a href="#details">Voir les détails</a>
            </Button>
          </div>
        </motion.div>

        <motion.div className="depth-layer-front relative mx-auto min-h-[360px] w-full max-w-[430px] md:min-h-[520px]" variants={scaleIn}>
          <motion.div
            className="absolute left-1/2 top-8 w-[82%] -translate-x-1/2 md:top-6"
            animate={shouldReduceMotion ? undefined : { y: [0, -14, 0], rotate: [0, 0.8, 0] }}
            transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <DecorativeAsset
              src="https://images.pexels.com/photos/9303080/pexels-photo-9303080.jpeg?auto=compress&cs=tinysrgb&w=900"
              alt="Jeune garçon souriant avec des ballons rouges et blancs"
              width={620}
              height={620}
              priority
              className="aspect-[4/5] rounded-[32px] object-cover shadow-hero"
              sizes="(max-width: 768px) 82vw, 360px"
            />
          </motion.div>
          <motion.div
            className="absolute left-0 top-7 rounded-full bg-brand-red px-4 py-3 text-sm font-extrabold text-white shadow-cta md:left-2"
            animate={shouldReduceMotion ? undefined : slowRotate}
          >
            5 ans
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-0 rounded-full border border-brand-red/20 bg-white px-4 py-3 text-sm font-extrabold text-brand-red shadow-soft-red"
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.45, type: "spring", stiffness: 180, damping: 18 }}
          >
            Super fête en approche !
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export { Hero };
