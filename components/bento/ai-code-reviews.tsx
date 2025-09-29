"use client"

import { useState, useEffect } from "react"
import type React from "react"

const AiCodeReviews: React.FC = () => {
  const themeVars = {
    "--ai-primary-color": "hsl(var(--primary))",
    "--ai-background-color": "hsl(var(--background))",
    "--ai-text-color": "hsl(var(--foreground))",
    "--ai-text-dark": "hsl(var(--primary-foreground))",
    "--ai-border-color": "hsl(var(--border))",
    "--ai-border-main": "hsl(var(--foreground) / 0.1)",
    "--ai-highlight-primary": "hsl(var(--primary) / 0.12)",
    "--ai-highlight-header": "hsl(var(--accent) / 0.2)",
  }

  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [metrics, setMetrics] = useState([
    { label: "✨ AI Content Strategy", value: "" },
    { label: "📈 Engagement Rate:", value: "+0%" },
    { label: "🎯 Target Audience:", value: "Millennials" },
    { label: "📝 Content Type:", value: "Blog Posts" },
    { label: "🔥 Trending Topics:", value: "" },
    { label: "• Sustainable Living", value: "" },
    { label: "• Digital Wellness", value: "" },
    { label: "• Remote Work Tips", value: "" },
    { label: "💡 AI Suggestions:", value: "Ready" },
  ])

  useEffect(() => {
    setIsVisible(true)
    
    // Animate metrics loading
    const timer1 = setTimeout(() => {
      setMetrics(prev => prev.map((item, i) => 
        i === 1 ? {...item, value: "+150%"} : item
      ))
    }, 800)
    
    const timer2 = setTimeout(() => {
      setMetrics(prev => prev.map((item, i) => 
        i === 1 ? {...item, value: "+250%"} : item
      ))
    }, 1200)
    
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div
      style={
        {
          width: "100%",
          height: "100%",
          position: "relative",
          background: "transparent",
          ...themeVars,
        } as React.CSSProperties
      }
      role="img"
      aria-label="Content Creation AI interface showing marketing content generation"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Content Box (Blurred) */}
      <div
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%) scale(0.9)",
          width: "340px",
          height: "205.949px",
          background: "linear-gradient(180deg, var(--ai-background-color) 0%, transparent 100%)",
          opacity: isVisible ? 0.6 : 0,
          borderRadius: "8.826px",
          border: "0.791px solid var(--ai-border-color)",
          overflow: "hidden",
          backdropFilter: "blur(16px)",
          transition: "opacity 0.5s ease-out",
        }}
      >
        <div
          className="border rounded-lg bg-card"
          style={{
            padding: "7.355px 8.826px",
            height: "100%",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "9.562px",
              lineHeight: "14.711px",
              letterSpacing: "-0.2942px",
              color: "hsl(var(--muted-foreground))",
              width: "100%",
              maxWidth: "320px",
              margin: 0,
            }}
          >
            {metrics.slice(0, 9).map((metric, index) => (
              <p 
                key={index} 
                style={{ 
                  margin: 0, 
                  whiteSpace: "pre-wrap", 
                  fontWeight: index === 0 || index === 4 ? 600 : 400,
                  transition: "all 0.3s ease-out"
                }}
              >
                {metric.label} {metric.value}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Foreground Content Box (Main) */}
      <div
        style={{
          position: "absolute",
          top: "51.336px",
          left: "50%",
          transform: `translateX(-50%) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
          width: "340px",
          height: "221.395px",
          background: "var(--ai-background-color)",
          backdropFilter: "blur(16px)",
          borderRadius: "9.488px",
          border: "1px solid var(--ai-border-main)",
          overflow: "hidden",
          transition: "all 0.3s ease-out",
          boxShadow: isHovered 
            ? "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 5px 10px -5px rgba(0, 0, 0, 0.04)" 
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div
          className="bg-card border border-border"
          style={{
            padding: "9.488px",
            height: "100%",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              width: "100%",
              top: "47.67px",
              height: "33.118px",
              background: "hsl(var(--foreground) / 0.08)",
              zIndex: 1,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-20px)",
              transition: "all 0.5s ease-out 0.2s",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              width: "100%",
              top: "80.791px",
              height: "45.465px",
              background: "var(--ai-highlight-primary)",
              zIndex: 1,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(20px)",
              transition: "all 0.5s ease-out 0.4s",
            }}
          />
          <div
            style={{
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "10.279px",
              lineHeight: "15.814px",
              letterSpacing: "-0.3163px",
              color: "var(--ai-text-color)",
              width: "100%",
              maxWidth: "320px",
              position: "relative",
              zIndex: 2,
              margin: 0,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.5s ease-out 0.3s",
            }}
          >
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 600 }}>🚀 Content Generation</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>📊 Analytics: High Performance</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>🎯 SEO Score: 95/100</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>📈 Conversion Rate: +180%</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>✍️ Content Ideas:</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>• Email Campaigns</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>• Social Media Posts</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>• Landing Page Copy</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>• Blog Articles</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>🎨 Brand Voice: Optimized</p>
          </div>
          <button
            style={{
              position: "absolute",
              top: "calc(50% + 29.745px)",
              right: "20px",
              transform: `translateY(-50%) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3.953px",
              background: "var(--ai-primary-color)",
              color: "var(--ai-text-dark)",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              padding: "3.163px 6.326px",
              borderRadius: "5.535px",
              fontSize: "10.279px",
              lineHeight: "15.814px",
              letterSpacing: "-0.3163px",
              boxShadow: isHovered
                ? "0px 30px 10px rgba(0, 0, 0, 0), 0px 20px 8px rgba(0, 0, 0, 0.02), 0px 12px 7px rgba(0, 0, 0, 0.06), 0px 5px 5px rgba(0, 0, 0, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.12)"
                : "0px 26.093px 7.116px rgba(0, 0, 0, 0), 0px 16.605px 6.326px rgba(0, 0, 0, 0.01), 0px 9.488px 5.535px rgba(0, 0, 0, 0.05), 0px 3.953px 3.953px rgba(0, 0, 0, 0.09), 0px 0.791px 2.372px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1.05)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(-50%) scale(1)"
            }}
          >
            <span
              style={{
                fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 500,
              }}
            >
              Generate Content
            </span>
            <span
              style={{
                fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                fontWeight: 500,
                animation: isHovered ? "pulse 1.5s infinite" : "none",
              }}
            >
              ✨
            </span>
          </button>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }
      `}</style>
    </div>
  )
}

export default AiCodeReviews