"use client";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  return (
    <div className={cn("font-bold", className)}>
      <div className="text-white">
        <div className="text-4xl md:text-7xl">{words}</div>
      </div>
    </div>
  );
};
