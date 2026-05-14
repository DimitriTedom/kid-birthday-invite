"use client";

import { CalendarDays, Clock, MapPin, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ConfettiLayer, Star } from "@/components/ui/Decorations";
import { Section } from "@/components/ui/Section";
import { eventConfig } from "@/lib/event-config";
import { fadeUp, staggerContainer } from "@/lib/motion";

const EventInfo = () => {
  const items = [
    { title: "Date", value: eventConfig.displayDate, icon: CalendarDays },
    { title: "Heure", value: eventConfig.displayTime, icon: Clock },
    { title: "Lieu", value: eventConfig.locationLabel, icon: MapPin },
  ];

  return (
    <Section
      id="details"
      eyebrow="Mission anniversaire"
      title="Les infos de la mission"
      description="Prépare-toi pour une journée pleine d'aventures."
      className="bg-white/30"
    >
      <div className="relative rounded-[36px] bg-brand-soft/50 p-3 md:p-6">
        <div className="absolute inset-0 bg-halftone-soft opacity-60" aria-hidden="true" />
        <ConfettiLayer />
        <motion.div
          className="relative grid gap-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <Card className="min-h-[180px]">
                <Star className="right-5 top-5 size-3 opacity-80" />
                <div className="flex size-14 items-center justify-center rounded-full bg-brand-red text-white shadow-cta">
                  <item.icon className="size-6" aria-hidden="true" />
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-red">
                    {item.title}
                  </p>
                  <p className="text-xl font-extrabold leading-snug text-ink">
                    {item.value}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="relative mt-4 rounded-[28px] border border-brand-red/20 bg-white/90 p-5 shadow-soft-red md:p-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 110, damping: 20 }}
        >
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-ink shadow-soft-red">
              <Sparkles className="size-5" aria-hidden="true" />
            </div>
            <p className="pt-2 text-base font-bold leading-relaxed text-ink">
              Pense à arriver quelques minutes avant le début de la fête.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export { EventInfo };
