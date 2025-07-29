import React from "react";
import { cn } from "@/lib/utils";

export function DecorativeBorder({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative p-8 sm:p-12", className)}>
      {/* Outer decorative frame */}
      <div className="absolute inset-3 sm:inset-4 border border-primary/15">
        {/* Corner decorative elements */}
        <div className="absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-cream border-l border-t border-primary/15"></div>
        <div className="absolute -top-1.5 -right-1.5 sm:-top-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-cream border-r border-t border-primary/15"></div>
        <div className="absolute -bottom-1.5 -left-1.5 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-cream border-l border-b border-primary/15"></div>
        <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-cream border-r border-b border-primary/15"></div>
      </div>

      {/* Inner subtle shadow frame */}
      <div className="absolute inset-6 sm:inset-8 bg-cream/50 shadow-sm border border-primary/8"></div>

      {/* Content container */}
      <div className="relative bg-cream/80 p-4 sm:p-6 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
