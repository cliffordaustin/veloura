"use client";

import { Icon } from "@iconify/react";

const RotatingTextCircle = ({ text }: { text: string }) => {
  return (
    <div className="relative w-24 h-24 md:w-32 md:h-32 flex items-center justify-center -translate-y-1">
      <style jsx>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin 15s linear infinite;
        }
      `}</style>
      <svg
        className="absolute w-full h-full animate-spin-slow"
        viewBox="0 0 100 100"
      >
        <path
          id="circlePath"
          d="M 8,50 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
          fill="none"
        />
        <text>
          <textPath
            href="#circlePath"
            className="font-synonym text-[8px] uppercase tracking-wider fill-primary"
          >
            {text.repeat(6)}
          </textPath>
        </text>
      </svg>
      <Icon icon="mdi:clover" className="text-primary size-12 md:size-16" />
    </div>
  );
};

export default RotatingTextCircle;
