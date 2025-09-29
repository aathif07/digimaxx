"use client"

import { useState, useEffect } from "react"
import type React from "react"

const RealtimeCodingPreviews: React.FC = () => {
  const themeVars = {
    "--realtime-primary-color": "hsl(var(--primary))",
    "--realtime-background-editor": "hsl(var(--background) / 0.8)",
    "--realtime-background-preview": "hsl(var(--background) / 0.8)",
    "--realtime-text-color": "hsl(var(--foreground))",
    "--realtime-text-editor": "hsl(var(--foreground))",
    "--realtime-text-preview": "hsl(var(--primary-foreground))",
    "--realtime-border-color": "hsl(var(--border))",
    "--realtime-border-main": "hsl(var(--border))",
    "--realtime-connection-color": "hsl(var(--muted-foreground))",
  }

  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [growthMetrics, setGrowthMetrics] = useState([
    { label: "📈 Growth Analytics Dashboard", value: "" },
    { label: "📊 Revenue Growth:", value: "+0%" },
    { label: "👥 Customer Acquisition:", value: "+0%" },
    { label: "💰 ROI:", value: "0% YoY" },
    { label: "🎯 Conversion Rate:", value: "0%" },
    { label: "🚀 Traffic:", value: "0 monthly" },
    { label: "📱 Mobile Users:", value: "0%" },
    { label: "⭐ Customer Satisfaction:", value: "0/5" },
    { label: "🔥 Hot Keywords:", value: "0 trending" },
    { label: "📲 Social Engagement:", value: "+0%" },
  ])

  useEffect(() => {
    setIsVisible(true)
    
    // Animate metrics loading sequentially
    const timers = [
      setTimeout(() => {
        setGrowthMetrics(prev => prev.map((item, i) => 
          i === 1 ? {...item, value: "+150%"} : item
        ))
      }, 600),
      setTimeout(() => {
        setGrowthMetrics(prev => prev.map((item, i) => 
          i === 2 ? {...item, value: "+100%"} : item
        ))
      }, 900),
      setTimeout(() => {
        setGrowthMetrics(prev => prev.map((item, i) => 
          i === 3 ? {...item, value: "200% YoY"} : item
        ))
      }, 1200),
      setTimeout(() => {
        setGrowthMetrics(prev => prev.map((item, i) => 
          i === 4 ? {...item, value: "5.2%"} : item
        ))
      }, 1500),
      setTimeout(() => {
        setGrowthMetrics(prev => prev.map((item, i) => 
          i === 1 ? {...item, value: "+340%"} : 
          i === 2 ? {...item, value: "+250%"} : 
          i === 3 ? {...item, value: "450% YoY"} : 
          i === 4 ? {...item, value: "8.9%"} : item
        ))
      }, 1800),
      setTimeout(() => {
        setGrowthMetrics(prev => prev.map((item, i) => 
          i === 5 ? {...item, value: "1.5M monthly"} : 
          i === 6 ? {...item, value: "52%"} : 
          i === 7 ? {...item, value: "3.7/5"} : item
        ))
      }, 2100),
      setTimeout(() => {
        setGrowthMetrics(prev => prev.map((item, i) => 
          i === 8 ? {...item, value: "25 trending"} : 
          i === 9 ? {...item, value: "+100%"} : 
          i === 5 ? {...item, value: "2.3M monthly"} : 
          i === 6 ? {...item, value: "68%"} : 
          i === 7 ? {...item, value: "4.8/5"} : 
          i === 8 ? {...item, value: "45 trending"} : 
          i === 9 ? {...item, value: "+190%"} : item
        ))
      }, 2400)
    ]
    
    return () => timers.forEach(timer => clearTimeout(timer))
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
      aria-label="Business Growth Analytics dashboard showing performance metrics and insights"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Left Panel - Analytics Dashboard */}
      <div
        style={{
          position: "absolute",
          top: "46px",
          left: "50%",
          transform: `translateX(-50%) ${isHovered ? 'scale(1.01)' : 'scale(1)'}`,
          width: "350px",
          height: "221px",
          background: "linear-gradient(180deg, var(--realtime-background-editor) 0%, transparent 100%)",
          backdropFilter: "blur(7.907px)",
          borderRadius: "9.488px",
          border: "1px solid var(--realtime-border-main)",
          overflow: "hidden",
          boxSizing: "border-box",
          transition: "all 0.3s ease-out",
          opacity: isVisible ? 1 : 0,
          transformOrigin: "center",
        }}
        data-name="analytics-dashboard"
      >
        <div
          style={{
            padding: "9.488px 9.492px",
            height: "100%",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "10.279px",
              lineHeight: "15.814px",
              letterSpacing: "-0.3163px",
              color: "var(--realtime-text-editor)",
              width: "100%",
              maxWidth: "100%",
              position: "relative",
              margin: 0,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(10px)",
              transition: "all 0.5s ease-out 0.3s",
            }}
          >
            {growthMetrics.map((metric, index) => (
              <p 
                key={index} 
                style={{ 
                  margin: 0, 
                  whiteSpace: "pre-wrap", 
                  fontWeight: index === 0 ? 600 : 400,
                  color: index === 0 ? "var(--realtime-primary-color)" : "var(--realtime-text-editor)",
                  transition: "all 0.3s ease-out"
                }}
              >
                {metric.label} {metric.value}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Right Panel - Growth Insights */}
      <div
        style={{
          position: "absolute",
          top: "46px",
          left: "calc(50% + 87.499px)",
          transform: `translateX(-50%) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
          width: "175px",
          height: "221px",
          background: "linear-gradient(180deg, var(--realtime-background-preview) 0%, transparent 100%)",
          backdropFilter: "blur(7.907px)",
          borderRadius: "9.488px",
          borderTopRightRadius: "9.488px",
          overflow: "hidden",
          boxSizing: "border-box",
          transition: "all 0.4s ease-out",
          opacity: isVisible ? 1 : 0,
          transformOrigin: "center",
        }}
        data-name="growth-insights"
      >
        <div
          style={{
            padding: "9.488px 9.492px",
            height: "100%",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "center",
            background: "var(--realtime-background-preview)",
          }}
        >
          {/* Growth Action Button */}
          <div
            style={{
              position: "absolute",
              top: "calc(50% + 0.001px)",
              left: "calc(50% - 71.501px)",
              transform: `translate(-50%, -50%) ${isHovered ? 'scale(1.05)' : 'scale(1)'}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7.907px",
              background: "var(--realtime-primary-color)",
              color: "var(--realtime-text-preview)",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              padding: "6.326px 12.651px",
              borderRadius: "11.07px",
              boxShadow: isHovered
                ? "0px 60px 20px rgba(0, 0, 0, 0), 0px 40px 15px rgba(0, 0, 0, 0.01), 0px 25px 12px rgba(0, 0, 0, 0.05), 0px 12px 10px rgba(0, 0, 0, 0.09), 0px 3px 6px rgba(0, 0, 0, 0.1)"
                : "0px 52.186px 14.233px rgba(0, 0, 0, 0), 0px 33.209px 12.651px rgba(0, 0, 0, 0.01), 0px 18.977px 11.07px rgba(0, 0, 0, 0.05), 0px 7.907px 7.907px rgba(0, 0, 0, 0.09), 0px 1.581px 4.744px rgba(0, 0, 0, 0.1)",
              boxSizing: "border-box",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(-50%, -50%) scale(1.05)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(-50%, -50%) scale(1)"
            }}
          >
            <div
              style={{
                fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "20.558px",
                lineHeight: "31.628px",
                letterSpacing: "-0.6326px",
                fontWeight: 500,
                color: "var(--realtime-text-preview)",
                textAlign: "left",
                whiteSpace: "pre",
                animation: isHovered ? "pulse 2s infinite" : "none",
              }}
            >
              🚀 Accelerate Growth
            </div>
          </div>
        </div>
      </div>

      {/* Connection Line */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            width: "2px",
            height: "285.088px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 1s ease-out 0.5s",
          }}
        >
          <svg
            width="2"
            height="285.088"
            viewBox="0 0 2 285.088"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              position: "absolute",
              inset: 0,
              display: "block",
              maxWidth: "none",
              width: "100%",
              height: "100%",
            }}
          >
            <defs>
              <linearGradient id="connectionGradient" x1="1" y1="0" x2="1" y2="285.088" gradientUnits="userSpaceOnUse">
                <stop stopColor="var(--realtime-primary-color)" stopOpacity="0" />
                <stop offset="0.5" stopColor="var(--realtime-primary-color)" />
                <stop offset="1" stopColor="var(--realtime-primary-color)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M1 0V285.088" stroke="url(#connectionGradient)" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.02); }
        }
      `}</style>
    </div>
  )
}

export default RealtimeCodingPreviews