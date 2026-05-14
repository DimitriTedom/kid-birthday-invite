"use client";

import { Cake, Camera, Flag, Gift, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Cloud, ConfettiLayer, Star } from "@/components/ui/Decorations";
import { Section } from "@/components/ui/Section";
import { eventConfig } from "@/lib/event-config";
import { fadeUp, popIn, staggerContainer, viewportOnce } from "@/lib/motion";

const icons = [Sparkles, Gift, Cake, Camera, Flag];

const PartyTimeline = () => {
  return (
    <Section
      id="program"
      title="Programme de la fête"
      description="Chaque moment est pensé pour rendre la mission inoubliable."
    >
      <div className="relative mx-auto max-w-4xl">
        <ConfettiLayer />
        <Cloud className="animate-cloud-drift -right-8 top-4 hidden opacity-70 md:block" />
        <Star className="-left-2 top-12 animate-spin-slow" />
        <motion.div
          className="absolute left-6 top-10 h-[calc(100%-5rem)] w-1 origin-top rounded-full bg-gradient-to-b from-brand-red via-brand-red to-brand-soft md:left-1/2 md:-translate-x-1/2"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.ol
          className="relative grid gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {eventConfig.programSteps.map((step, index) => {
            const Icon = icons[index] ?? Sparkles;
            const isEven = index % 2 === 0;

            return (
              <motion.li
                key={step.title}
                className="relative grid gap-4 pl-16 md:grid-cols-[1fr_72px_1fr] md:pl-0"
                variants={fadeUp}
              >
                <div className={isEven ? "md:col-start-1" : "md:col-start-3"}>
                  <Card className="rounded-[26px]">
                    <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-red">
                      Étape {index + 1}
                    </p>
                    <h3 className="mt-2 text-xl font-extrabold text-ink">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </Card>
                </div>
                <motion.div
                  className="absolute left-0 top-6 flex size-[52px] items-center justify-center rounded-full border-4 border-brand-warm bg-brand-red text-white shadow-cta md:static md:col-start-2 md:mx-auto md:size-16"
                  variants={popIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                >
                  <Icon className="size-6" aria-hidden="true" />
                </motion.div>
              </motion.li>
            );
          })}
        </motion.ol>
      </div>
    </Section>
  );
};

export { PartyTimeline };
