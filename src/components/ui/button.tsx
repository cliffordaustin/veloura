import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-cream hover:bg-primary-600 font-bold",
        destructive: "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-cream",
        secondary:
          "bg-cream-300 text-primary hover:bg-cream-400 border border-primary-200",
        ghost: "bg-transparent text-primary hover:bg-cream-200",
        link: "bg-transparent text-primary font-medium relative inline-flex items-baseline cursor-pointer hover:text-primary-700 p-0 h-auto",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  underlineColor?: "green" | "cream";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      children,
      underlineColor = "green",
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    // Special rendering for link variant with animated underlines
    if (variant === "link") {
      const underlineClasses =
        underlineColor === "cream"
          ? {
              primary: "bg-cream",
              secondary: "bg-cream-300",
            }
          : {
              primary: "bg-primary",
              secondary: "bg-primary-600",
            };

      return (
        <Comp
          className={cn(
            buttonVariants({ variant, size: undefined, className }),
            "group"
          )}
          ref={ref}
          {...props}
        >
          <span className="relative">
            {children}

            {/* Long underline - starts from left */}
            <span
              className={cn(
                "absolute left-0 -bottom-1.5 h-0.5 w-0 transition-all duration-500 ease-out group-hover:w-3/5",
                underlineClasses.primary
              )}
            ></span>

            {/* Short underline - starts from right side, same bottom position */}
            <span
              className={cn(
                "absolute right-0 -bottom-1.5 h-0.5 w-0 transition-all duration-400 delay-150 ease-out group-hover:w-2/5",
                underlineClasses.secondary
              )}
            ></span>
          </span>
        </Comp>
      );
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
