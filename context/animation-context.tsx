"use client";

import { createContext, useContext, useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface AnimationContextType {
  animationsEnabled: boolean;
  toggleAnimations: () => void;
  currentPage: string;
  isClient: boolean;
}

const AnimationContext = createContext<AnimationContextType | undefined>(undefined);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [animationsEnabled, setAnimationsEnabled] = useState(true);
  const [isClient, setIsClient] = useState(false);
  const isFirstRender = useRef(true);
  
  // Define which pages should have animations
  const pagesWithAnimations = [
    "/",
    "/home",
    "/about",
    "/services"
  ];

  // Check if current page should have animations
  const shouldHaveAnimations = pagesWithAnimations.includes(pathname || "");

  // Update animations enabled state when page changes
  useEffect(() => {
    // Skip the first render to avoid hydration issues
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    
    setAnimationsEnabled(shouldHaveAnimations);
  }, [pathname, shouldHaveAnimations]);

  // Set isClient to true after mount
  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleAnimations = () => {
    setAnimationsEnabled(!animationsEnabled);
  };

  return (
    <AnimationContext.Provider 
      value={{ 
        animationsEnabled: isClient ? animationsEnabled : false, 
        toggleAnimations,
        currentPage: pathname || "/",
        isClient
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
}