"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cloud, ConfettiLayer, Lightning, Star } from "@/components/ui/Decorations";
import { DecorativeAsset } from "@/components/ui/DecorativeAsset";
import { eventConfig } from "@/lib/event-config";
import { floatingLoop, pulseCTA } from "@/lib/motion";
import { buildRsvpWhatsappUrl } from "@/lib/share";

const stitchBase = "/images/stitch/stitch_nolan_s_heroic_5th_birthday_invitation";

const RSVPWhatsapp = () => {
  const [burst, setBurst] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const rsvpUrl = buildRsvpWhatsappUrl(
    eventConfig.whatsappNumber,
    eventConfig.whatsappMessage
  );

  const handleClick = () => {
    if (shouldReduceMotion) return;
    setBurst(true);
    window.setTimeout(() => setBurst(false), 900);
  };

  return (
    <section id="rsvp" className="relative px-5 py-12 md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          className="red-action-panel relative overflow-hidden rounded-[36px] px-6 py-9 text-white shadow-hero md:rounded-[44px] md:px-12 md:py-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ type: "spring", stiffness: 110, damping: 20 }}
        >
          <ConfettiLayer />
          {burst ? <div className="confetti-burst" aria-hidden="true" /> : null}
          <Cloud className="animate-cloud-drift right-6 top-7 scale-75 opacity-20" />
          <Star className="left-[45%] top-7 animate-spin-slow" />
          <Lightning className="animate-pop-soft right-[12%] bottom-8 bg-white/80" />
          <div className="relative z-[1] grid items-center gap-7 md:grid-cols-[1fr_210px]">
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <h2 className="text-[2.1rem] leading-[1.08] md:text-[3rem]">
                  Tu viens à la fête ?
                </h2>
                <p className="max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
                  Confirme ta présence en un clic pour aider à bien préparer la journée.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <motion.div
                  animate={shouldReduceMotion ? undefined : pulseCTA}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    asChild
                    size="large"
                    variant="white"
                    leftIcon={<MessageCircle className="size-5" aria-hidden="true" />}
                    className="w-full sm:w-auto"
                  >
                    <a href={rsvpUrl} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
                      Confirmer sur WhatsApp
                    </a>
                  </Button>
                </motion.div>
                <p className="text-sm font-semibold text-white/80">
                  Un message prérempli s&apos;ouvrira automatiquement.
                </p>
              </div>
            </div>
            <div className="relative mx-auto hidden w-full max-w-[210px] md:block">
              <motion.div animate={shouldReduceMotion ? undefined : floatingLoop}>
                <DecorativeAsset
                  src={`${stitchBase}/isolated_3d_glossy_red_number_5_balloon_red_and_white_candy_cane_stripes/screen.png`}
                  alt=""
                  width={260}
                  height={320}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export { RSVPWhatsapp };
