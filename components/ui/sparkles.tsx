"use client";
import React, { useId, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SparklesProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}

export const SparklesCore = (props: SparklesProps) => {
  const {
    id,
    background,
    minSize,
    maxSize,
    particleDensity,
    className,
    particleColor,
  } = props;
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const idForCanvas = useId();

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [particles, setParticles] = useState<any[] | Float32Array>([]);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      canvas.width = dimensions.width;
      canvas.height = dimensions.height;

      const particleCount = Math.floor(
        (dimensions.width * dimensions.height) / (particleDensity || 1200)
      );

      const newParticles = new Float32Array(particleCount * 4); // x, y, size, opacity
      const particleSpeeds = new Float32Array(particleCount * 2); // speedX, speedY

      for (let i = 0; i < particleCount; i++) {
        const i4 = i * 4;
        const i2 = i * 2;
        newParticles[i4] = Math.random() * dimensions.width;     // x
        newParticles[i4 + 1] = Math.random() * dimensions.height;// y
        newParticles[i4 + 2] = Math.random() * ((maxSize || 3) - (minSize || 1)) + (minSize || 1); // size
        newParticles[i4 + 3] = Math.random();                    // opacity

        particleSpeeds[i2] = (Math.random() - 0.5) * 0.5;        // speedX
        particleSpeeds[i2 + 1] = (Math.random() - 0.5) * 0.5;    // speedY
      }

      setParticles(newParticles);

      let animationFrameId: number;
      const animate = () => {
        ctx.clearRect(0, 0, dimensions.width, dimensions.height);
        ctx.fillStyle = particleColor || "#ffffff";

        for (let i = 0; i < particleCount; i++) {
          const i4 = i * 4;
          const i2 = i * 2;

          // Update position
          newParticles[i4] += particleSpeeds[i2];
          newParticles[i4 + 1] += particleSpeeds[i2 + 1];

          // Update opacity (simple sine wave based on X pos + time)
          newParticles[i4 + 3] = Math.sin(Date.now() * 0.001 + newParticles[i4]) * 0.5 + 0.5;

          // Bounce check
          if (newParticles[i4] < 0 || newParticles[i4] > dimensions.width)
            particleSpeeds[i2] *= -1;
          if (newParticles[i4 + 1] < 0 || newParticles[i4 + 1] > dimensions.height)
            particleSpeeds[i2 + 1] *= -1;

          ctx.globalAlpha = newParticles[i4 + 3];
          ctx.beginPath();
          ctx.arc(newParticles[i4], newParticles[i4 + 1], newParticles[i4 + 2], 0, Math.PI * 2);
          ctx.fill();
        }
        animationFrameId = requestAnimationFrame(animate);
      };
      animate();

      return () => cancelAnimationFrame(animationFrameId);
    }
  }, [dimensions, maxSize, minSize, particleColor, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      id={id || idForCanvas}
      className={cn("pointer-events-none", className)}
      style={{
        background: background || "transparent",
      }}
    />
  );
};
