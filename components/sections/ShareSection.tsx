"use client";

import { useEffect, useState } from "react";
import { Check, Copy, MessageCircle, QrCode, Share2 } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { QRCodeSVG } from "qrcode.react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cloud, ConfettiLayer, Star } from "@/components/ui/Decorations";
import { Section } from "@/components/ui/Section";
import { eventConfig } from "@/lib/event-config";
import { fadeUp, popIn, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";
import { buildWhatsappShareUrl, copyToClipboard, shareWithWebApi } from "@/lib/share";

const ShareSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState(eventConfig.siteUrl);
  const shareMessage = eventConfig.eventDescription;

  useEffect(() => {
    if (eventConfig.siteUrl === "https://example.com") {
      setShareUrl(window.location.href);
    }
  }, []);

  const handleCopy = async () => {
    const success = await copyToClipboard(shareUrl);
    setCopied(success);
    if (success) {
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleNativeShare = async () => {
    await shareWithWebApi({
      title: eventConfig.eventTitle,
      text: shareMessage,
      url: shareUrl,
    });
  };

  return (
    <Section
      id="share"
      title="Partager l'invitation"
      description="Envoie l'invitation facilement aux proches."
      className="pb-10"
    >
      <motion.div
        className="relative grid gap-6 lg:grid-cols-[1fr_360px]"
        variants={staggerContainer}
        initial={shouldReduceMotion ? false : "hidden"}
        whileInView={shouldReduceMotion ? undefined : "visible"}
        viewport={viewportOnce}
      >
        <ConfettiLayer />
        <Cloud className="animate-cloud-drift -left-8 top-4 hidden opacity-70 md:block" />
        <motion.div variants={fadeUp}>
        <Card className="rounded-[36px] p-6 md:p-8">
          <div className="flex flex-col gap-5">
            <motion.div className="flex size-16 items-center justify-center rounded-full bg-brand-soft text-brand-red shadow-soft-red" variants={popIn}>
              <Share2 className="size-7" aria-hidden="true" />
            </motion.div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
              Choisis la meilleure option pour partager l&apos;invitation, ou laisse le QR code faire le travail.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:max-w-2xl">
              <Button
                size="large"
                variant="primary"
                leftIcon={copied ? <Check className="size-5" aria-hidden="true" /> : <Copy className="size-5" aria-hidden="true" />}
                onClick={handleCopy}
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={copied ? "copied" : "copy"}
                    initial={shouldReduceMotion ? false : { y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={shouldReduceMotion ? undefined : { y: -8, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    {copied ? "Lien copié" : "Copier le lien"}
                  </motion.span>
                </AnimatePresence>
              </Button>
              <Button
                asChild
                size="large"
                variant="secondary"
                leftIcon={<MessageCircle className="size-5" aria-hidden="true" />}
              >
                <a
                  href={buildWhatsappShareUrl(`${shareMessage} ${shareUrl}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Partager sur WhatsApp
                </a>
              </Button>
              <Button
                size="large"
                variant="ghost"
                leftIcon={<Share2 className="size-5" aria-hidden="true" />}
                onClick={handleNativeShare}
                className="sm:col-span-2 lg:col-span-1"
              >
                Partager
              </Button>
            </div>
          </div>
        </Card>
        </motion.div>

        <motion.div variants={scaleIn}>
        <Card className="qr-glow flex flex-col items-center gap-4 rounded-[36px] p-6 text-center">
          <Star className="right-8 top-8 animate-spin-slow" />
          <motion.div
            className="flex size-14 items-center justify-center rounded-full bg-brand-red text-white shadow-cta"
            animate={shouldReduceMotion ? undefined : { scale: [1, 1.06, 1] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <QrCode className="size-6" aria-hidden="true" />
          </motion.div>
          <div className="rounded-[28px] border-[10px] border-brand-red bg-white p-4 shadow-soft-red">
            <QRCodeSVG value={shareUrl} size={172} fgColor="#1E1E2F" bgColor="#FFFFFF" />
          </div>
          <p className="text-sm font-semibold leading-relaxed text-muted-foreground">
            Scanne le QR code pour ouvrir l&apos;invitation.
          </p>
        </Card>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export { ShareSection };
