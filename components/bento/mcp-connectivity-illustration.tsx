"use client"

import { useState, useEffect } from "react"
import type React from "react"
import { BarChart3 } from "lucide-react"

interface PerformanceDashboardProps {
  className?: string
}

const McpConnectivityIllustration: React.FC<PerformanceDashboardProps> = ({ className = "" }) => {
  // Performance metrics data with new analytics focus
  const [metrics, setMetrics] = useState([
    { name: "Revenue Growth", value: "0%", status: "loading" },
    { name: "Customer Acquisition", value: "0%", status: "loading" },
    { name: "Conversion Rate", value: "0%", status: "loading" },
    { name: "ROI Performance", value: "0%", status: "loading" },
    { name: "Traffic Analytics", value: "0", status: "loading" },
    { name: "Engagement Rate", value: "+0%", status: "loading" },
  ])

  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    // Animate metrics loading sequentially
    const timers = [
      setTimeout(() => {
        setMetrics(prev => prev.map((item, i) => 
          i === 0 ? {...item, value: "+150%", status: "active"} : item
        ))
      }, 600),
      setTimeout(() => {
        setMetrics(prev => prev.map((item, i) => 
          i === 1 ? {...item, value: "+100%", status: "active"} : item
        ))
      }, 900),
      setTimeout(() => {
        setMetrics(prev => prev.map((item, i) => 
          i === 2 ? {...item, value: "4.2%", status: "optimized"} : item
        ))
      }, 1200),
      setTimeout(() => {
        setMetrics(prev => prev.map((item, i) => 
          i === 3 ? {...item, value: "200%", status: "active"} : item
        ))
      }, 1500),
      setTimeout(() => {
        setMetrics(prev => prev.map((item, i) => 
          i === 4 ? {...item, value: "1.2M", status: "active"} : item
        ))
      }, 1800),
      setTimeout(() => {
        setMetrics(prev => prev.map((item, i) => 
          i === 5 ? {...item, value: "+100%", status: "optimized"} : item
        ))
      }, 2100),
      setTimeout(() => {
        setMetrics(prev => prev.map((item, i) => 
          i === 0 ? {...item, value: "+340%", status: "trending"} : 
          i === 1 ? {...item, value: "+250%", status: "active"} : 
          i === 2 ? {...item, value: "8.9%", status: "optimized"} : 
          i === 3 ? {...item, value: "450%", status: "trending"} : 
          i === 4 ? {...item, value: "2.3M", status: "active"} : 
          i === 5 ? {...item, value: "+190%", status: "optimized"} : item
        ))
      }, 2400)
    ]
    
    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "trending": return "📈"
      case "active": return "🔥"
      case "optimized": return "✅"
      case "loading": return "🔄"
      default: return "📊"
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "trending": return "text-green-500"
      case "active": return "text-blue-500"
      case "optimized": return "text-purple-500"
      case "loading": return "text-yellow-500"
      default: return "text-foreground"
    }
  }

  return (
    <div
      className={`w-full h-full flex items-center justify-center p-4 relative ${className}`}
      role="img"
      aria-label="Performance Dashboard showcasing real-time analytics metrics"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Dashboard */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, calc(-50% + 24px)) ${isHovered ? 'scale(1.02)' : 'scale(1)'}`,
          width: "345px",
          height: "277px",
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, transparent 100%)",
          backdropFilter: "blur(16px)",
          borderRadius: "9.628px",
          border: "0.802px solid hsl(var(--border))",
          overflow: "hidden",
          transition: "all 0.3s ease-out",
          opacity: isVisible ? 1 : 0,
          boxShadow: isHovered 
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          {/* Dashboard Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12.837px",
              padding: "8.826px 12.837px",
              borderBottom: "0.802px solid hsl(var(--border))",
              width: "100%",
              boxSizing: "border-box",
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-20px)",
              transition: "all 0.5s ease-out 0.2s",
            }}
          >
            <div
              style={{
                width: "14.442px",
                height: "14.442px",
                position: "relative",
                flexShrink: 0,
                animation: isHovered ? "pulse 2s infinite" : "none",
              }}
            >
              <BarChart3 className="w-full h-full text-primary" />
            </div>
            <span
              style={{
                fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontSize: "12.837px",
                lineHeight: "19.256px",
                color: "hsl(var(--foreground))",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              Performance Analytics
            </span>
          </div>
          {/* Metrics List */}
          {metrics.map((metric, index) => (
            <div
              key={metric.name}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "8.826px 12.837px",
                borderBottom: index < metrics.length - 1 ? "0.479px solid hsl(var(--border))" : "none",
                width: "100%",
                boxSizing: "border-box",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : index % 2 === 0 ? "translateX(-20px)" : "translateX(20px)",
                transition: `all 0.5s ease-out ${0.3 + index * 0.1}s`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12.837px",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    fontSize: "14px",
                    animation: metric.status === "loading" ? "spin 1s linear infinite" : "none",
                  }}
                >
                  {getStatusIcon(metric.status)}
                </div>
                <span
                  style={{
                    fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: "12.837px",
                    lineHeight: "19.256px",
                    color: "hsl(var(--muted-foreground))",
                    fontWeight: 400,
                    whiteSpace: "nowrap",
                  }}
                >
                  {metric.name}
                </span>
              </div>
              <div
                style={{
                  background: "hsl(var(--primary) / 0.08)",
                  padding: "1.318px 5.272px",
                  borderRadius: "3.295px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  animation: isHovered ? "pulse 2s infinite" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: "9.583px",
                    lineHeight: "15.333px",
                    color: "hsl(var(--primary))",
                    fontWeight: 600,
                    whiteSpace: "nowrap",
                  }}
                >
                  {metric.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

export default McpConnectivityIllustration