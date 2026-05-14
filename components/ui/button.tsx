import * as React from "react"
import { Slot, Slottable } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "shine-sweep group/button relative inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full font-bold transition-all duration-300 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-60 active:scale-[0.98] [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg]:scale-110",
  {
    variants: {
      variant: {
        default:
          "bg-brand-red text-white shadow-cta hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-hero",
        primary:
          "bg-brand-red text-white shadow-cta hover:-translate-y-0.5 hover:bg-brand-deep hover:shadow-hero",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-brand-red bg-white text-brand-red shadow-soft-red hover:-translate-y-0.5 hover:bg-brand-soft",
        secondary:
          "border-2 border-brand-red bg-white text-brand-red shadow-soft-red hover:-translate-y-0.5 hover:bg-brand-soft",
        white:
          "bg-white text-brand-red shadow-soft-red hover:-translate-y-0.5 hover:bg-brand-soft",
        ghost:
          "border border-transparent text-brand-red hover:bg-brand-soft/70",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-3 text-sm",
        sm: "min-h-10 px-4 py-2 text-xs",
        lg: "px-7 py-3.5 text-base",
        large: "px-7 py-3.5 text-base",
        icon: "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, leftIcon, rightIcon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {leftIcon}
        <Slottable>{children}</Slottable>
        {rightIcon}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
