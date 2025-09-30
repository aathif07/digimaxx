"use client";

import { useState, useEffect } from "react";
import { Typewriter } from "./ui/typewriter-text";
import { usePageAnimation, useSectionAnimation } from "../hooks/use-page-animation";

export function AnimatedSectionsDemo() {
  // Simulate page changes for demo
  const [currentPage, setCurrentPage] = useState("/");
  const [isVisible, setIsVisible] = useState(true);

  // Define which pages should have animations
  const pagesWithAnimations = ["/", "/home", "/about"];
  const sectionsWithAnimations = ["hero", "services", "testimonials"];

  // Use the hook to control page-specific animations
  const enablePageAnimations = usePageAnimation(pagesWithAnimations, currentPage);
  const enableHeroAnimations = useSectionAnimation("hero", sectionsWithAnimations);
  const enableServicesAnimations = useSectionAnimation("services", sectionsWithAnimations);
  const enableTestimonialsAnimations = useSectionAnimation("testimonials", sectionsWithAnimations);

  // Simulate page navigation for demo
  useEffect(() => {
    const pages = ["/", "/home", "/about", "/services", "/contact"];
    let index = 0;
    
    const interval = setInterval(() => {
      index = (index + 1) % pages.length;
      setCurrentPage(pages[index]);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="mb-8 p-4 bg-primary/10 rounded-lg">
        <h1 className="text-2xl font-bold mb-2">Page-Specific Animation Demo</h1>
        <p className="text-sm">
          Current Page: <span className="font-mono bg-primary/20 px-2 py-1 rounded">{currentPage}</span>
        </p>
        <p className="text-sm mt-1">
          Animations Enabled: <span className="font-mono bg-primary/20 px-2 py-1 rounded">
            {enablePageAnimations ? "YES" : "NO"}
          </span>
        </p>
      </div>

      {/* Hero Section */}
      <section className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border">
        <h2 className="text-xl font-semibold mb-4">Hero Section</h2>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          <Typewriter
            text={["Welcome to digimaxx", "Your Growth Partner"]}
            speed={80}
            loop={true}
            animate={enablePageAnimations && enableHeroAnimations}
            startDelay={200}
          />
        </h1>
        <p className="text-lg text-muted-foreground">
          <Typewriter
            text={["We help brands grow through innovative marketing strategies"]}
            speed={50}
            animate={enablePageAnimations && enableHeroAnimations}
            startDelay={1000}
          />
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-12 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border">
        <h2 className="text-xl font-semibold mb-4">
          <Typewriter
            text={["Our Services"]}
            speed={100}
            animate={enablePageAnimations && enableServicesAnimations}
            startDelay={300}
          />
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">SEO Optimization</h3>
            <p className="text-sm text-muted-foreground">
              <Typewriter
                text={["Boost your search rankings and organic traffic"]}
                speed={60}
                animate={enablePageAnimations && enableServicesAnimations}
                startDelay={500}
              />
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Content Marketing</h3>
            <p className="text-sm text-muted-foreground">
              <Typewriter
                text={["Engage your audience with compelling content"]}
                speed={60}
                animate={enablePageAnimations && enableServicesAnimations}
                startDelay={700}
              />
            </p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Social Media</h3>
            <p className="text-sm text-muted-foreground">
              <Typewriter
                text={["Build your brand presence across platforms"]}
                speed={60}
                animate={enablePageAnimations && enableServicesAnimations}
                startDelay={900}
              />
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mb-12 p-6 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border">
        <h2 className="text-xl font-semibold mb-4">
          <Typewriter
            text={["What Our Clients Say"]}
            speed={100}
            animate={enablePageAnimations && enableTestimonialsAnimations}
            startDelay={400}
          />
        </h2>
        <div className="p-4 bg-white rounded-lg shadow-sm">
          <p className="italic mb-2">
            <Typewriter
              text={["digimaxx transformed our online presence. Our traffic increased by 340% in just 3 months!"]}
              speed={70}
              animate={enablePageAnimations && enableTestimonialsAnimations}
              startDelay={600}
            />
          </p>
          <p className="font-semibold">- Sarah Johnson, CEO of TechStart</p>
        </div>
      </section>

      {/* Controls */}
      <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="font-semibold mb-2">Animation Controls</h3>
        <div className="flex flex-wrap gap-2">
          <button 
            onClick={() => setIsVisible(!isVisible)}
            className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm"
          >
            {isVisible ? "Hide" : "Show"} Sections
          </button>
          <button 
            onClick={() => setCurrentPage("/")}
            className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm"
          >
            Go to Home
          </button>
          <button 
            onClick={() => setCurrentPage("/services")}
            className="px-3 py-1 bg-secondary text-secondary-foreground rounded text-sm"
          >
            Go to Services
          </button>
        </div>
      </div>
    </div>
  );
}