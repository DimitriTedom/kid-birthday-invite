"use client";

import { ExternalLink, MapPinned } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cloud, Lightning, Star } from "@/components/ui/Decorations";
import { DecorativeAsset } from "@/components/ui/DecorativeAsset";
import { Section } from "@/components/ui/Section";
import { eventConfig } from "@/lib/event-config";
import { floatingLoop, scaleIn, slideFromLeft, slideFromRight, staggerContainer, viewportOnce } from "@/lib/motion";

const stitchBase = "/images/stitch/stitch_nolan_s_heroic_5th_birthday_invitation";

const LocationSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="location"
      title="Où se passe la fête ?"
      description="Le bouton ouvrira l'itinéraire dans Google Maps."
      className="bg-white/30"
    >
      <motion.div
        className="grid items-center gap-6 lg:grid-cols-[0.92fr_1.08fr]"
        variants={staggerContainer}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={viewportOnce}
      >
        <motion.div variants={slideFromLeft}>
        <Card className="rounded-[34px] p-6 md:p-8">
          <div className="flex flex-col gap-6">
            <motion.div
              className="flex size-16 items-center justify-center rounded-full bg-brand-red text-white shadow-cta"
              whileHover={{ rotate: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              <MapPinned className="size-7" aria-hidden="true" />
            </motion.div>
            <div className="flex flex-col gap-3">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-red">
                Adresse
              </p>
              <h3 className="text-2xl font-extrabold text-ink">
                {eventConfig.locationLabel}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">
                {eventConfig.locationAddress || "Adresse à confirmer."}
              </p>
              <p className="text-sm font-semibold leading-relaxed text-muted-foreground">
                Le bouton ouvrira l’itinéraire dans Google Maps.
              </p>
            </div>
            <Button asChild size="large" variant="primary" rightIcon={<ExternalLink className="size-5" aria-hidden="true" />}>
              <a href={eventConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                Voir l&apos;itinéraire
              </a>
            </Button>
          </div>
        </Card>
        </motion.div>

        <motion.div
          className="depth-scene relative mx-auto w-full max-w-[520px] rounded-[36px] bg-comic-rays p-5 shadow-hero md:p-8"
          variants={slideFromRight}
        >
          <Cloud className="animate-cloud-drift left-2 top-6 scale-75 opacity-80" />
          <Star className="right-10 top-8 animate-spin-slow" />
          <Lightning className="animate-pop-soft bottom-12 left-10 opacity-70" />
          <motion.div variants={scaleIn} animate={shouldReduceMotion ? undefined : floatingLoop}>
            <DecorativeAsset
              src={`${stitchBase}/isolated_stylized_3d_map_illustration_red_and_white_theme_location_pin_curved/screen.png`}
              alt="Illustration de carte rouge et blanche avec une épingle de localisation"
              width={620}
              height={620}
              className="relative z-[1]"
            />
          </motion.div>
          <motion.div
            className="absolute left-[25%] top-[48%] z-[2] h-1.5 w-[42%] origin-left rounded-full bg-brand-red/70 shadow-cta"
            initial={shouldReduceMotion ? false : { scaleX: 0, opacity: 0 }}
            whileInView={shouldReduceMotion ? undefined : { scaleX: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      </motion.div>
    </Section>
  );
};

export { LocationSection };
