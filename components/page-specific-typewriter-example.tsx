"use client";

import { useState, useEffect } from "react";
import { Typewriter } from "./ui/typewriter-text";

interface PageSpecificTypewriterProps {
  pageIdentifier: string;
  allowedPages: string[];
  text: string | string[];
  className?: string;
  speed?: number;
  loop?: boolean;
}

export function PageSpecificTypewriter({
  pageIdentifier,
  allowedPages,
  text,
  className,
  speed = 100,
  loop = false,
}: PageSpecificTypewriterProps) {
  const [currentPath, setCurrentPath] = useState("");

  // In a real app, you would use useRouter from next/navigation
  // For demo purposes, we'll simulate path changes
  useEffect(() => {
    // Simulate getting current path
    setCurrentPath(window.location.pathname || "/");
    
    // In a real Next.js app, you would use:
    // const pathname = usePathname();
    // setCurrentPath(pathname);
  }, []);

  // Determine if animation should run based on current page
  const shouldAnimate = allowedPages.includes(pageIdentifier);

  return (
    <Typewriter
      text={text}
      speed={speed}
      loop={loop}
      animate={shouldAnimate}
      className={className}
      startDelay={200} // Small delay for better UX
    />
  );
}

// Example usage in a component
export function MarketingHeader() {
  const currentPage = typeof window !== 'undefined' ? window.location.pathname : '/';
  
  return (
    <div className="py-12 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        <Typewriter
          text={["Digital Marketing Excellence", "SEO & Growth Strategies"]}
          speed={80}
          loop={true}
          animate={currentPage === "/" || currentPage === "/home"}
          startDelay={300}
        />
      </h1>
      
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        <Typewriter
          text={["Transform your online presence with data-driven marketing solutions"]}
          speed={50}
          animate={currentPage === "/" || currentPage === "/home"}
          startDelay={1000}
        />
      </p>
    </div>
  );
}