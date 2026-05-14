import Image from "next/image";
import { cn } from "@/lib/utils";

type DecorativeAssetProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  wrapperClassName?: string;
  priority?: boolean;
  sizes?: string;
};

const DecorativeAsset = ({
  src,
  alt,
  width,
  height,
  className,
  wrapperClassName,
  priority = false,
  sizes = "(max-width: 768px) 80vw, 420px",
}: DecorativeAssetProps) => (
  <div className={cn("pointer-events-none", wrapperClassName)}>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes={sizes}
      className={cn("h-auto w-full", className)}
    />
  </div>
);

export { DecorativeAsset };
