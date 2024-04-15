import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        locked:"bg-neutral-200",
        default: "text-white bg-slate-500 border-2 border-slate-200 rounded-xl border-b-4 active:border-b-2 hover:bg-slate-500/70",
        primary: "text-white border-2 bg-sky-500 border-slate-200 rounded-xl border-b-4 active:border-b-2 hover:bg-sky-500/70",
        primaryOutline:"text-sky-500 border-2 border-sky-200 rounded-xl border-b-4 active:border-b-2 hover:bg-sky-200/70",
        secondary: "text-white border-2 bg-emerald-500 border-slate-200 rounded-xl border-b-4 active:border-b-2 hover:bg-emerald-500/70",
        secondaryOutline:"text-emerald-500 border-2 border-emerald-200 rounded-xl border-b-4 active:border-b-2 hover:bg-emerald-200/70",
        danger:"text-white border-2 bg-rose-500 border-slate-200 rounded-xl border-b-4 active:border-b-2 hover:bg-rose-500/70",
        dangerOutline:"text-rose-500 border-2 border-rose-200 rounded-xl border-b-4 active:border-b-2 hover:bg-rose-200/70",
        super:"text-white border-2 bg-indigo-500 border-slate-200 rounded-xl border-b-4 active:border-b-2 hover:bg-indigo-500/70",
        superOutline:"text-indigo-500 border-2 border-indigo-200 rounded-xl border-b-4 active:border-b-2 hover:bg-indigo-200/70",
        ghost:"text-slate-500 border-2 border-slate-200 rounded-xl border-b-4 active:border-b-2 hover:bg-slate-200",
      },
      size: {
        default: "text-xl h-10 px-4 py-4",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
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
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
