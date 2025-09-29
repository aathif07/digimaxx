"use client"

import { useState, useRef, useEffect } from "react"
import AiCodeReviews from "./bento/ai-code-reviews"
import RealtimeCodingPreviews from "./bento/real-time-previews"
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"
import MCPConnectivityIllustration from "./bento/mcp-connectivity-illustration" // Updated import
import EasyDeployment from "./bento/easy-deployment"
import ParallelCodingAgents from "./bento/parallel-agents" // Updated import

const BentoCard = ({ title, description, Component }: { title: string; description: string; Component: React.ComponentType }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    // Trigger entrance animation
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])
  
  return (
    <div 
      className={`overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative transition-all duration-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{
        transform: isHovered ? 'translateY(-8px)' : '',
        boxShadow: isHovered 
          ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(255, 255, 255, 0.1)'
          : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background with blur effect */}
      <div
        className="absolute inset-0 rounded-2xl transition-all duration-700 ease-in-out"
        style={{
          background: isHovered 
            ? "rgba(231, 236, 235, 0.15)" 
            : "rgba(231, 236, 235, 0.08)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      />
      {/* Additional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl transition-all duration-500 ease-out" />

      <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
          <p className="self-stretch text-foreground text-lg font-normal leading-7 transition-colors duration-300">
            {title} <br />
            <span className="text-muted-foreground transition-colors duration-300">{description}</span>
          </p>
        </div>
      </div>
      <div className="self-stretch h-72 relative -mt-0.5 z-10 transition-transform duration-500 ease-out" 
           style={{ transform: isHovered ? 'scale(1.02)' : 'scale(1)' }}>
        <Component />
      </div>
    </div>
  )
}

export function BentoSection() {
  const [sectionVisible, setSectionVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    // Trigger section entrance animation
    const timer = setTimeout(() => setSectionVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])
  
  const cards = [
    {
      title: "AI-Powered Content Creation",
      description: "Generate compelling content at scale with advanced AI algorithms.",
      Component: AiCodeReviews,
    },
    {
      title: "Growth Acceleration",
      description: "Exponential growth strategies powered by machine learning insights.",
      Component: RealtimeCodingPreviews,
    },
    {
      title: "Audience Intelligence",
      description: "Deep audience insights and behavioral pattern analysis.",
      Component: OneClickIntegrationsIllustration,
    },
    {
      title: "Performance Analytics",
      description: "Real-time performance monitoring and actionable insights.",
      Component: MCPConnectivityIllustration,
    },
    {
      title: "Precision Targeting",
      description: "Laser-focused strategies that hit the mark every time.",
      Component: ParallelCodingAgents,
    },
    {
      title: "Brand Optimization",
      description: "AI-driven brand voice optimization and consistency.",
      Component: EasyDeployment,
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div 
        ref={sectionRef}
        className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6"
      >
        <div 
          className={`w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0 transition-all duration-1000 ease-out ${sectionVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
        />
        <div 
          className={`self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10 transition-all duration-700 ease-out ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px] transition-all duration-700 delay-100 ease-out">
              Services That Drive Results
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed transition-all duration-700 delay-200 ease-out">
              Comprehensive AI-powered marketing solutions designed to maximize your growth potential and make your
              brand ubiquitous.
            </p>
          </div>
        </div>
        <div 
          className={`self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 transition-all duration-700 delay-300 ease-out ${sectionVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {cards.map((card, index) => (
            <div 
              key={card.title} 
              className="transition-all duration-500 ease-out"
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <BentoCard {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
