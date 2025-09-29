"use client"

import { useState, useEffect } from "react"
import type React from "react"

interface BrandEnhancementProps {
  /** Width of component – number (px) or any CSS size value */
  width?: number | string
  /** Height of component – number (px) or any CSS size value */
  height?: number | string
  /** Extra Tailwind / CSS classes for root element */
  className?: string
}

const DeploymentEasy: React.FC<BrandEnhancementProps> = ({ width = "100%", height = "100%", className = "" }) => {
  /* ------------------------------------------------------------
   * Theme-based design tokens using global CSS variables
   * ---------------------------------------------------------- */
  const themeVars = {
    "--brand-primary-color": "hsl(var(--primary))",
    "--brand-background-color": "hsl(var(--background))",
    "--brand-text-color": "hsl(var(--foreground))",
    "--brand-text-secondary": "hsl(var(--muted-foreground))",
    "--brand-border-color": "hsl(var(--border))",
  } as React.CSSProperties

  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isEnhancing, setIsEnhancing] = useState(false)
  const [brandMetrics, setBrandMetrics] = useState([
    "[✨] Brand Consistency Score: 0%",
    "[🎨] Visual Identity: Optimizing...",
    "[📝] Brand Voice Analysis: In progress",
    "[🎯] Message Alignment: 0% match",
    "[🚀] Brand Recognition: +0%",
    "[📊] Brand Sentiment: 0/5.0",
    "[🌟] Customer Trust: +0%",
    "[💼] Professional Appeal: Enhancing",
    "[🔄] Cross-platform Sync: Initializing",
    "[📱] Social Media Presence: Building",
    "[🎪] Campaign Integration: Connecting",
    "[🏆] Brand Authority: Establishing",
    "[💡] Creative Guidelines: Updating",
    "[🎭] Brand Personality: Defining",
    "[🌐] Global Consistency: Progressing",
    "[📈] Brand Value: +0% increase",
    "[🔥] Market Position: Strengthening",
    "[✅] Brand Enhancement: Pending",
    "🚀 Your brand is being optimized!",
  ])

  useEffect(() => {
    setIsVisible(true)
    
    // Animate metrics loading sequentially
    const timers = [
      setTimeout(() => {
        setBrandMetrics(prev => prev.map((item, i) => 
          i === 0 ? "[✨] Brand Consistency Score: 75%" : 
          i === 3 ? "[🎯] Message Alignment: 70% match" : 
          i === 4 ? "[🚀] Brand Recognition: +150%" : item
        ))
      }, 800),
      setTimeout(() => {
        setBrandMetrics(prev => prev.map((item, i) => 
          i === 1 ? "[🎨] Visual Identity: Optimized" : 
          i === 2 ? "[📝] Brand Voice Analysis: Complete" : 
          i === 5 ? "[📊] Brand Sentiment: 3.2/5.0" : 
          i === 6 ? "[🌟] Customer Trust: +120%" : item
        ))
      }, 1200),
      setTimeout(() => {
        setBrandMetrics(prev => prev.map((item, i) => 
          i === 7 ? "[💼] Professional Appeal: Enhanced" : 
          i === 8 ? "[🔄] Cross-platform Sync: Active" : 
          i === 9 ? "[📱] Social Media Presence: Unified" : item
        ))
      }, 1600),
      setTimeout(() => {
        setBrandMetrics(prev => prev.map((item, i) => 
          i === 10 ? "[🎪] Campaign Integration: Seamless" : 
          i === 11 ? "[🏆] Brand Authority: Established" : 
          i === 12 ? "[💡] Creative Guidelines: Updated" : item
        ))
      }, 2000),
      setTimeout(() => {
        setBrandMetrics(prev => prev.map((item, i) => 
          i === 13 ? "[🎭] Brand Personality: Defined" : 
          i === 14 ? "[🌐] Global Consistency: Achieved" : 
          i === 15 ? "[📈] Brand Value: +250% increase" : item
        ))
      }, 2400),
      setTimeout(() => {
        setBrandMetrics(prev => prev.map((item, i) => 
          i === 0 ? "[✨] Brand Consistency Score: 98%" : 
          i === 3 ? "[🎯] Message Alignment: 95% match" : 
          i === 4 ? "[🚀] Brand Recognition: +340%" : 
          i === 5 ? "[📊] Brand Sentiment: 4.9/5.0" : 
          i === 6 ? "[🌟] Customer Trust: +280%" : 
          i === 15 ? "[📈] Brand Value: +450% increase" : 
          i === 16 ? "[🔥] Market Position: Strengthened" : 
          i === 17 ? "[✅] Brand Enhancement: Complete" : 
          i === 18 ? "🚀 Your brand is now optimized!" : item
        ))
      }, 2800)
    ]
    
    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  const handleEnhanceClick = () => {
    if (!isEnhancing) {
      setIsEnhancing(true)
      // Simulate enhancement process
      setTimeout(() => {
        setIsEnhancing(false)
      }, 2000)
    }
  }

  return (
    <div
      className={`w-full h-full flex items-center justify-center p-4 relative ${className}`}
      style={{
        width,
        height,
        position: "relative",
        background: "transparent",
        ...themeVars,
      }}
      role="img"
      aria-label="Brand Enhancement console showing optimization metrics and enhance button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* -------------------------------------------------------- */}
      {/* Brand Metrics Dashboard                                */}
      {/* -------------------------------------------------------- */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.01)' : 'scale(1)'}`,
          width: "340px",
          height: "239px",
          background: "linear-gradient(180deg, var(--brand-background-color) 0%, transparent 100%)",
          backdropFilter: "blur(7.907px)",
          borderRadius: "10px",
          overflow: "hidden",
          transition: "all 0.3s ease-out",
          opacity: isVisible ? 1 : 0,
          boxShadow: isHovered 
            ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04)" 
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        {/* Inner translucent panel – replicates subtle overlay */}
        <div
          style={{
            position: "absolute",
            inset: "2px",
            borderRadius: "8px",
            background: "hsl(var(--foreground) / 0.08)",
          }}
        />

        {/* Brand metrics text */}
        <div
          style={{
            position: "relative",
            padding: "8px",
            height: "100%",
            overflow: "hidden",
            fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            fontSize: "10px",
            lineHeight: "16px",
            color: "var(--brand-text-color)",
            whiteSpace: "pre",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.5s ease-out 0.3s",
          }}
        >
          {brandMetrics.map((metric, index) => (
            <p 
              key={index} 
              style={{ 
                margin: 0,
                transition: "all 0.3s ease-out",
                animation: isEnhancing ? "pulse 1s infinite" : "none"
              }}
            >
              {metric}
            </p>
          ))}
        </div>

        {/* Inner border overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            border: "0.791px solid var(--brand-border-color)",
            borderRadius: "10px",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* -------------------------------------------------------- */}
      {/* Call-to-action button                                   */}
      {/* -------------------------------------------------------- */}
      <button
        style={{
          position: "absolute",
          top: "calc(50% + 57.6px)",
          left: "50%",
          transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6.375px",
          padding: "5.1px 10.2px",
          background: "var(--brand-primary-color)",
          color: "hsl(var(--primary-foreground))",
          border: "none",
          cursor: isEnhancing ? "not-allowed" : "pointer",
          borderRadius: "8.925px",
          fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          fontSize: "16.575px",
          lineHeight: "25.5px",
          letterSpacing: "-0.51px",
          fontWeight: 500,
          whiteSpace: "nowrap",
          boxShadow: isHovered
            ? "0px 50px 15px rgba(0, 0, 0, 0), 0px 32px 12px rgba(0, 0, 0, 0.01), 0px 18px 10px rgba(0, 0, 0, 0.05), 0px 8px 8px rgba(0, 0, 0, 0.09), 0px 2px 5px rgba(0, 0, 0, 0.1)"
            : "0px 42.075px 11.475px rgba(0, 0, 0, 0), 0px 26.775px 10.2px rgba(0, 0, 0, 0.01), 0px 15.3px 8.925px rgba(0, 0, 0, 0.05), 0px 6.375px 6.375px rgba(0, 0, 0, 0.09), 0px 1.275px 3.825px rgba(0, 0, 0, 0.1)",
          transition: "all 0.2s ease",
          opacity: isVisible ? 1 : 0,
          transformOrigin: "center",
        }}
        onClick={handleEnhanceClick}
        disabled={isEnhancing}
        onMouseEnter={(e) => {
          if (!isEnhancing) {
            e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.05)"
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)"
        }}
      >
        {isEnhancing ? "✨ Enhancing..." : "✨ Enhance Brand"}
      </button>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}

export default DeploymentEasy