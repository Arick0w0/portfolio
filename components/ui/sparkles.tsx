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
  const [particles, setParticles] = useState<any[]>([]);

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

      const newParticles = Array.from({ length: particleCount }, () => ({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * ((maxSize || 3) - (minSize || 1)) + (minSize || 1),
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random(),
      }));

      setParticles(newParticles);

      let animationFrameId: number;
      const animate = () => {
        ctx.clearRect(0, 0, dimensions.width, dimensions.height);
        newParticles.forEach((particle) => {
          particle.x += particle.speedX;
          particle.y += particle.speedY;
          particle.opacity = Math.sin(Date.now() * 0.001 + particle.x) * 0.5 + 0.5;

          if (particle.x < 0 || particle.x > dimensions.width) particle.speedX *= -1;
          if (particle.y < 0 || particle.y > dimensions.height) particle.speedY *= -1;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = `${particleColor || "#ffffff"}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
          ctx.fill();
        });
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
