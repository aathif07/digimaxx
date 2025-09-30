"use client";

import { useState, useEffect } from "react";
import { Typewriter } from "./typewriter-text";

export function TypewriterDemo() {
  const [currentPage, setCurrentPage] = useState("home");
  const [showAnimation, setShowAnimation] = useState(true);

  // Example of page-specific animation control
  useEffect(() => {
    // Simulate page changes
    const pages = ["home", "about", "services", "contact"];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % pages.length;
      setCurrentPage(pages[index]);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Control animation based on page
  useEffect(() => {
    // Only animate on home and about pages
    setShowAnimation(currentPage === "home" || currentPage === "about");
  }, [currentPage]);

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Typewriter Animation Demo</h1>
      
      <div className="mb-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-sm text-gray-600 mb-2">Current Page: <span className="font-mono bg-gray-200 px-2 py-1 rounded">{currentPage}</span></p>
        <p className="text-sm text-gray-600">
          Animation Status: <span className="font-mono bg-gray-200 px-2 py-1 rounded">
            {showAnimation ? "ACTIVE" : "INACTIVE"}
          </span>
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-semibold mb-2">Section 1 (Always Animated)</h2>
          <p className="text-foreground">
            Welcome to our website{" "}
            <Typewriter 
              text={["where innovation meets excellence", "where creativity drives success"]} 
              speed={50}
              loop={true}
              animate={true} // Always animate
            />
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Section 2 (Page-Specific Animation)</h2>
          <p className="text-foreground">
            Our services include{" "}
            <Typewriter 
              text={["digital marketing", "web development", "brand strategy"]} 
              speed={75}
              loop={true}
              animate={showAnimation} // Controlled by page
              startDelay={500}
            />
          </p>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Section 3 (Conditional Animation)</h2>
          <p className="text-foreground">
            <Typewriter 
              text={["Transform your business with us", "Achieve your goals faster", "Experience unprecedented growth"]} 
              speed={60}
              loop={false}
              animate={currentPage === "home"} // Only on home page
              startDelay={1000}
            />
          </p>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-semibold mb-2">Usage Examples:</h3>
        <pre className="text-xs bg-gray-800 text-gray-100 p-4 rounded overflow-x-auto">
{`// Always animate
<Typewriter animate={true} />

// Animate only on specific pages
<Typewriter animate={currentPage === "home"} />

// Add delay before starting
<Typewriter startDelay={1000} />

// Pause animation conditionally
<Typewriter pause={isModalOpen} />`}
        </pre>
      </div>
    </div>
  );
}