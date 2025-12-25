"use client";
import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: any;
  [key: string]: any;
}) {
  return (
    <Component
      className={cn(
        "relative text-xl p-[1px] overflow-hidden",
        containerClassName
      )}
      {...otherProps}
    >
      <div className="absolute inset-0">
        <motion.div
          className={cn(
            "absolute inset-0 rounded-lg",
            borderClassName
          )}
          style={{
            background: "linear-gradient(90deg, #a855f7, #3b82f6, #06b6d4, #10b981, #a855f7)",
            backgroundSize: "400% 400%",
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: duration / 1000,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      <div className={cn("relative bg-slate-900/90 rounded-lg", className)}>
        {children}
      </div>
    </Component>
  );
}
