"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverBorderGradient = ({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}: React.PropsWithChildren<
  {
    as?: any;
    containerClassName?: string;
    className?: string;
    duration?: number;
    clockwise?: boolean;
  } & Record<string, any>
>) => {
  return (
    <Tag
      className={cn(
        "relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ rotate: 0 }}
        animate={{
          rotate: clockwise ? 360 : -360,
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
        }}
      >
        <div className='bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] w-full h-full' />
      </motion.div>
    </Tag>
  );
};
