"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Cloud, ConfettiLayer, Lightning, Star } from "@/components/ui/Decorations";
import { DecorativeAsset } from "@/components/ui/DecorativeAsset";
import { Section } from "@/components/ui/Section";
import { eventConfig } from "@/lib/event-config";
import { fadeUp, floatingLoop, popIn, staggerContainer, viewportOnce } from "@/lib/motion";

const stitchBase = "/images/stitch/stitch_nolan_s_heroic_5th_birthday_invitation";

const getTimeLeft = (target: Date) => {
  const total = target.getTime() - new Date().getTime();
  const clamped = Math.max(total, 0);
  const seconds = Math.floor(clamped / 1000);

  return {
    days: Math.floor(seconds / 86400),
    hours: Math.floor((seconds % 86400) / 3600),
    minutes: Math.floor((seconds % 3600) / 60),
    seconds: seconds % 60,
    expired: total <= 0,
  };
};

const Countdown = () => {
  const shouldReduceMotion = useReducedMotion();
  const targetDate = useMemo(() => new Date(eventConfig.eventDateISO), []);
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft(targetDate));

    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  const items = [
    { label: "Jours", value: mounted ? timeLeft.days : 0 },
    { label: "Heures", value: mounted ? timeLeft.hours : 0 },
    { label: "Minutes", value: mounted ? timeLeft.minutes : 0 },
    { label: "Secondes", value: mounted ? timeLeft.seconds : 0 },
  ];

  return (
    <Section
      id="countdown"
      title="La fête commence dans"
      description={timeLeft.expired ? "La fête a commencé, place aux sourires." : "Le compte à rebours est déjà lancé."}
      align="center"
      className="py-12 md:py-20"
    >
      <div className="relative">
        <ConfettiLayer />
        <Cloud className="animate-cloud-drift -left-6 top-2 scale-75 opacity-70 md:left-0" />
        <Lightning className="animate-pop-soft right-0 top-8 opacity-70" />
        <Star className="left-[42%] -top-5 animate-spin-slow" />
        <motion.div
          className="pointer-events-none absolute -right-8 -top-10 hidden w-24 md:block"
          aria-hidden="true"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView={shouldReduceMotion ? undefined : "visible"}
          viewport={viewportOnce}
          variants={popIn}
        >
          <motion.div animate={shouldReduceMotion ? undefined : floatingLoop}>
            <DecorativeAsset
              src={`${stitchBase}/isolated_3d_glossy_red_number_5_balloon_red_and_white_candy_cane_stripes/screen.png`}
              alt=""
              width={180}
              height={220}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {items.map((item) => (
            <motion.div key={item.label} variants={fadeUp}>
              <Card className="card-glow-pulse flex min-h-[150px] flex-col items-center justify-center gap-3 rounded-[30px] bg-white/90 text-center shadow-hero">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={`${item.label}-${item.value}`}
                    className="font-display text-[2.6rem] font-extrabold leading-none text-brand-red md:text-[3.4rem]"
                    initial={{ y: 10, scale: 0.94, opacity: 0 }}
                    animate={{ y: 0, scale: 1, opacity: 1 }}
                    exit={{ y: -8, scale: 0.98, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  >
                    {String(item.value).padStart(2, "0")}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-ink/70">
                  {item.label}
                </span>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export { Countdown };
