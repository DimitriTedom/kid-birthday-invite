import { cn } from "@/lib/utils";

type DecorationProps = {
  className?: string;
};

const GradientBlob = ({ className }: DecorationProps) => (
  <div
    aria-hidden="true"
    className={cn("pointer-events-none absolute rounded-full blur-3xl will-change-transform", className)}
  />
);

const Star = ({ className }: DecorationProps) => (
  <span
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute block size-4 rotate-45 rounded-[4px] bg-brand-yellow shadow-[0_8px_18px_rgba(255,216,77,0.35)] before:absolute before:inset-0 before:rotate-45 before:rounded-[4px] before:bg-brand-yellow",
      className
    )}
  />
);

const Lightning = ({ className }: DecorationProps) => (
  <span
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute block h-9 w-5 rotate-12 bg-brand-red shadow-cta will-change-transform",
      className
    )}
    style={{
      clipPath: "polygon(48% 0, 100% 0, 66% 42%, 100% 42%, 34% 100%, 46% 56%, 0 56%)",
    }}
  />
);

const Cloud = ({ className }: DecorationProps) => (
  <span
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute block h-8 w-20 rounded-full bg-white shadow-soft-red will-change-transform before:absolute before:left-4 before:top-[-14px] before:size-9 before:rounded-full before:bg-white after:absolute after:right-4 after:top-[-20px] after:size-12 after:rounded-full after:bg-white",
      className
    )}
  />
);

const ConfettiLayer = ({ className }: DecorationProps) => (
  <div
    aria-hidden="true"
    className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
  >
    <span className="confetti-bit absolute left-[12%] top-[18%] size-2 rounded-full bg-brand-yellow" />
    <span className="confetti-bit absolute left-[24%] top-[72%] h-2 w-5 rotate-12 rounded-full bg-brand-red/70 [animation-delay:1.3s]" />
    <span className="confetti-bit absolute left-[72%] top-[18%] h-2 w-4 -rotate-12 rounded-full bg-brand-blue [animation-delay:.7s]" />
    <span className="confetti-bit absolute left-[82%] top-[64%] size-2 rounded-full bg-brand-yellow [animation-delay:2.1s]" />
    <span className="confetti-bit absolute left-[46%] top-[10%] h-2 w-5 rotate-45 rounded-full bg-brand-red/60 [animation-delay:1.8s]" />
    <span className="confetti-bit absolute left-[58%] top-[82%] size-2 rounded-full bg-brand-red/50 [animation-delay:2.7s]" />
    <span className="confetti-bit absolute left-[36%] top-[32%] h-2 w-4 -rotate-45 rounded-full bg-brand-yellow/80 [animation-delay:3.2s]" />
  </div>
);

const CitySkyline = ({ className }: DecorationProps) => (
  <div
    aria-hidden="true"
    className={cn("pointer-events-none absolute bottom-0 left-0 right-0 h-20 opacity-10", className)}
  >
    <div className="absolute bottom-0 left-0 h-10 w-[18%] rounded-t-md bg-ink" />
    <div className="absolute bottom-0 left-[17%] h-16 w-[13%] rounded-t-md bg-ink" />
    <div className="absolute bottom-0 left-[30%] h-12 w-[18%] rounded-t-md bg-ink" />
    <div className="absolute bottom-0 left-[48%] h-20 w-[12%] rounded-t-md bg-ink" />
    <div className="absolute bottom-0 left-[60%] h-14 w-[22%] rounded-t-md bg-ink" />
    <div className="absolute bottom-0 left-[82%] h-11 w-[18%] rounded-t-md bg-ink" />
  </div>
);

export { CitySkyline, Cloud, ConfettiLayer, GradientBlob, Lightning, Star };
