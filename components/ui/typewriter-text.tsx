"use client";

import * as React from "react"
import { useEffect, useState, useRef } from "react";

export interface TypewriterProps {
  text: string | string[];
  speed?: number;
  cursor?: string;
  loop?: boolean;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
  animate?: boolean; // Control whether to animate or not
  onAnimationComplete?: () => void; // Callback when animation completes
  pause?: boolean; // Pause animation
  startDelay?: number; // Delay before starting animation
}

export function Typewriter({
  text,
  speed = 100,
  cursor = "|",
  loop = false,
  deleteSpeed = 50,
  delay = 1500,
  className,
  animate = true, // Default to true for backward compatibility
  onAnimationComplete,
  pause = false, // Default to false
  startDelay = 0, // Default to no delay
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [shouldStart, setShouldStart] = useState(startDelay === 0);
  const animationRef = useRef<NodeJS.Timeout | number>(0);
  const startDelayRef = useRef<NodeJS.Timeout | number>(0);

  // Validate and process input text
  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[textArrayIndex] || "";

  // Handle start delay
  useEffect(() => {
    if (startDelay > 0 && animate) {
      startDelayRef.current = setTimeout(() => {
        setShouldStart(true);
      }, startDelay);
    }
    
    return () => {
      if (startDelayRef.current) {
        clearTimeout(startDelayRef.current as number);
      }
    };
  }, [startDelay, animate]);

  // Reset animation state when text or animate prop changes
  useEffect(() => {
    if (animate && shouldStart) {
      setDisplayText("");
      setCurrentIndex(0);
      setIsDeleting(false);
      setTextArrayIndex(0);
      setHasAnimated(false);
    } else if (!animate) {
      // If not animating, show full text immediately
      setDisplayText(currentText);
    }
  }, [text, animate, currentText, shouldStart]);

  useEffect(() => {
    if (!animate || !currentText || hasAnimated || !shouldStart || pause) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentIndex < currentText.length) {
            setDisplayText((prev) => prev + currentText[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
          } else if (loop) {
            setTimeout(() => setIsDeleting(true), delay);
          } else {
            // Animation completed for this text
            if (textArrayIndex === textArray.length - 1) {
              setHasAnimated(true);
              onAnimationComplete?.();
            } else {
              // Move to next text in array
              setTimeout(() => {
                setDisplayText("");
                setCurrentIndex(0);
                setTextArrayIndex((prev) => prev + 1);
              }, delay);
            }
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText((prev) => prev.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex(0);
            setTextArrayIndex((prev) => (prev + 1) % textArray.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed,
    );

    animationRef.current = timeout;
    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    isDeleting,
    currentText,
    loop,
    speed,
    deleteSpeed,
    delay,
    displayText,
    textArray,
    textArrayIndex,
    animate,
    hasAnimated,
    onAnimationComplete,
    shouldStart,
    pause,
  ]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        clearTimeout(animationRef.current as number);
      }
      if (startDelayRef.current) {
        clearTimeout(startDelayRef.current as number);
      }
    };
  }, []);

  // Calculate the maximum height needed based on the longest text
  const getMaxHeight = () => {
    if (!textArray.length) return '1.2em';
    const longestText = textArray.reduce((a, b) => a.length > b.length ? a : b, '');
    // Rough estimation: assuming ~50 characters per line
    const lines = Math.ceil(longestText.length / 50);
    return `${lines * 1.2}em`;
  };

  return (
    <span 
      className={className}
      style={{
        display: 'inline-block',
        minHeight: '1.2em',
        height: getMaxHeight(), // Set fixed height to prevent layout shifts
        verticalAlign: 'top',
      }}
    >
      <span style={{ 
        display: 'inline-block',
        verticalAlign: 'top',
      }}>
        {displayText}
      </span>
      {animate && shouldStart && !pause && (
        <span 
          className="animate-pulse"
          style={{ 
            display: 'inline-block',
            width: '1ch',
            transition: 'opacity 0.1s ease',
            verticalAlign: 'top',
          }}
        >
          {cursor}
        </span>
      )}
    </span>
  );
}