"use client";

import { CalendarPlus, Download } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DecorativeAsset } from "@/components/ui/DecorativeAsset";
import { Star } from "@/components/ui/Decorations";
import { Section } from "@/components/ui/Section";
import { buildGoogleCalendarUrl, buildIcsFileContent, downloadIcsFile } from "@/lib/calendar";
import { eventConfig } from "@/lib/event-config";
import { fadeUp, floatingLoop, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

const stitchBase = "/images/stitch/stitch_nolan_s_heroic_5th_birthday_invitation";

const CalendarSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const startDate = new Date(eventConfig.eventDateISO);
  const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000);

  const calendarEvent = {
    title: eventConfig.eventTitle,
    uid: eventConfig.eventSlug,
    description: eventConfig.eventDescription,
    location: eventConfig.locationLabel,
    startDate,
    endDate,
  };

  const handleDownload = () => {
    const content = buildIcsFileContent(calendarEvent);
    downloadIcsFile(content, `${eventConfig.eventSlug}.ics`);
  };

  return (
    <Section
      id="calendar"
      title="N'oublie pas la date"
      description="Ajoute l'anniversaire à ton calendrier pour ne rien oublier."
    >
      <motion.div
        variants={staggerContainer}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={viewportOnce}
      >
      <Card className="grid items-center gap-7 rounded-[36px] p-6 md:grid-cols-[1fr_220px] md:p-8">
        <Star className="right-8 top-8 animate-spin-slow" />
        <motion.div className="flex flex-col gap-5" variants={fadeUp}>
          <motion.div
            className="flex size-16 items-center justify-center rounded-full bg-brand-soft text-brand-red shadow-soft-red"
            whileHover={{ scale: 1.05, rotate: 3 }}
          >
            <CalendarPlus className="size-7" aria-hidden="true" />
          </motion.div>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-extrabold text-ink">
              {eventConfig.displayDate} à {eventConfig.displayTime}
            </p>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Reçois un rappel automatique le jour J, directement dans ton calendrier.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <Button
              asChild
              size="large"
              variant="primary"
              leftIcon={<CalendarPlus className="size-5" aria-hidden="true" />}
            >
              <a
                href={buildGoogleCalendarUrl(calendarEvent)}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ajouter à Google Calendar
              </a>
            </Button>
            <Button
              size="large"
              variant="secondary"
              leftIcon={<Download className="size-5" aria-hidden="true" />}
              onClick={handleDownload}
            >
              Télécharger le rappel
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="mx-auto w-full max-w-[210px]"
          variants={scaleIn}
          animate={shouldReduceMotion ? undefined : floatingLoop}
        >
          <DecorativeAsset
            src={`${stitchBase}/isolated_3d_glossy_birthday_cake_red_and_white_frosting_5_yellow_candles/screen.png`}
            alt="Gâteau d'anniversaire rouge et blanc avec cinq bougies"
            width={280}
            height={280}
          />
        </motion.div>
      </Card>
      </motion.div>
    </Section>
  );
};

export { CalendarSection };
