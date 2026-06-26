import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// shadcn-style API, tuned to JL's drafting-sheet language: mono uppercase,
// square corners, blueprint focus ring. CTAs read as accent via --pine-cta.
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-none font-mono text-label uppercase tracking-[0.14em] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blueprint focus-visible:ring-offset-2 focus-visible:ring-offset-paper disabled:pointer-events-none disabled:opacity-50 cursor-pointer select-none",
  {
    variants: {
      variant: {
        primary: "bg-pine-cta text-paper hover:bg-pine",
        outline:
          "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
        "outline-dark":
          "border border-paper/30 text-paper hover:bg-paper hover:text-ink",
        link: "text-ink underline underline-offset-4 decoration-stone hover:decoration-ink",
      },
      size: {
        default: "px-7 py-4",
        sm: "px-5 py-3",
        none: "p-0",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export { Button };
