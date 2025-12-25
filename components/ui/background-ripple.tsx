"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundRipple = React.memo(
  ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let animationFrameId: number;
      let ripples: Array<{
        x: number;
        y: number;
        radius: number;
        maxRadius: number;
        speed: number;
        opacity: number;
      }> = [];

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      resizeCanvas();
      window.addEventListener("resize", resizeCanvas);

      const createRipple = (x?: number, y?: number) => {
        ripples.push({
          x: x ?? Math.random() * canvas.width,
          y: y ?? Math.random() * canvas.height,
          radius: 0,
          maxRadius: Math.random() * 400 + 250,
          speed: Math.random() * 1.5 + 0.8,
          opacity: Math.random() * 0.5 + 0.3,
        });
      };

      // Create initial ripples
      for (let i = 0; i < 5; i++) {
        createRipple();
      }

      // Periodically create new ripples
      const rippleInterval = setInterval(() => {
        if (ripples.length < 8) {
          createRipple();
        }
      }, 2000);

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Dark background
        ctx.fillStyle = "rgba(0, 0, 0, 0.95)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ripples = ripples.filter((ripple) => {
          ripple.radius += ripple.speed;

          const gradient = ctx.createRadialGradient(
            ripple.x,
            ripple.y,
            ripple.radius,
            ripple.x,
            ripple.y,
            ripple.radius + 50
          );

          const currentOpacity =
            ripple.opacity * (1 - ripple.radius / ripple.maxRadius);

          gradient.addColorStop(0, `rgba(56, 189, 248, ${currentOpacity * 0.8})`); // cyan-400
          gradient.addColorStop(0.5, `rgba(147, 51, 234, ${currentOpacity * 0.6})`); // purple-600
          gradient.addColorStop(1, "rgba(147, 51, 234, 0)");

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
          ctx.stroke();

          return ripple.radius < ripple.maxRadius;
        });

        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
        clearInterval(rippleInterval);
        cancelAnimationFrame(animationFrameId);
      };
    }, []);

    return (
      <canvas
        ref={canvasRef}
        className={cn(
          "absolute inset-0 z-0 bg-gradient-to-b from-black via-slate-950 to-black",
          className
        )}
      />
    );
  }
);

BackgroundRipple.displayName = "BackgroundRipple";
