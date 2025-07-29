import React from "react";
import { cn } from "@/lib/utils";

type FancyButtonSize = "sm" | "default" | "lg";
type FancyButtonVariant = "cream" | "green";

interface FancyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: FancyButtonSize;
  variant?: FancyButtonVariant;
  uppercase?: boolean;
  gapClassName?: string;
}

const sizeOverrides = {
  sm: {
    fontSize: "10px",
    padding: "1em 2.4em",
    minWidth: "120px",
  },
  default: {
    // Use original CSS values - no overrides needed
  },
  lg: {
    fontSize: "12px",
    padding: "1.5em 1.8em",
    minWidth: "180px",
  },
};

export default function FancyButton({
  children,
  onClick,
  className = "",
  disabled = false,
  type = "button",
  size = "default",
  variant = "cream",
  uppercase = true,
  gapClassName = "bg-cream",
}: FancyButtonProps) {
  const sizeStyle = sizeOverrides[size] || {};

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "fancy",
        `fancy-${variant}`,
        className,
        disabled ? "opacity-50 cursor-not-allowed" : ""
      )}
      style={sizeStyle}
    >
      <span className={cn("text", uppercase && "uppercase")}>{children}</span>
      <div className={cn("top-key", gapClassName)}></div>
      <div className={cn("bottom-key-1", gapClassName)}></div>
      {/* <div className={cn("bottom-key-2", gapClassName)}></div> */}
    </button>
  );
}
