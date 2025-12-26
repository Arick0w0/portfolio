"use client";
import { useEffect, useState } from "react";

interface EncryptedTextProps {
  text: string;
  className?: string;
  interval?: number;
  maxIterations?: number;
}

export const EncryptedText = ({
  text,
  className = "",
  interval = 50,
  maxIterations = 10,
}: EncryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isEncrypted, setIsEncrypted] = useState(false);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    let iteration = 0;

    const intervalId = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === " ") return " ";
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalId);
        setIsEncrypted(false);
      }

      iteration += 1 / 3;
    }, interval);

    return () => clearInterval(intervalId);
  }, [text, interval, isEncrypted]);

  const handleMouseEnter = () => {
    setIsEncrypted(true);
    let iteration = 0;

    const intervalId = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            if (char === " ") return " ";
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalId);
        setIsEncrypted(false);
      }

      iteration += 1 / 3;
    }, interval);
  };

  return (
    <span
      className={`font-mono cursor-pointer ${className}`}
      onMouseEnter={handleMouseEnter}
    >
      {displayText}
    </span>
  );
};
