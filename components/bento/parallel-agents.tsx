"use client"

import { useState, useEffect } from "react"
import type React from "react"

interface AdvancedTargetingSolutionsProps {
  className?: string
}

const ParallelCodingAgents: React.FC<AdvancedTargetingSolutionsProps> = ({ className = "" }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [campaigns, setCampaigns] = useState([
    { 
      title: "Demographic Targeting", 
      description: "0% accuracy • Unknown", 
      status: "loading",
      progress: 0
    },
    { 
      title: "Behavioral Segmentation", 
      description: "0% ROI • Unknown buyers", 
      status: "loading",
      progress: 0
    },
    { 
      title: "Lookalike Audiences", 
      description: "0% CTR • Unknown customers", 
      status: "loading",
      progress: 0
    },
  ])

  useEffect(() => {
    setIsVisible(true)
    
    // Animate campaign data loading
    const timers = [
      setTimeout(() => {
        setCampaigns(prev => prev.map((item, i) => 
          i === 0 ? {...item, progress: 30} : item
        ))
      }, 800),
      setTimeout(() => {
        setCampaigns(prev => prev.map((item, i) => 
          i === 0 ? {...item, description: "30% accuracy • Millennials", progress: 60} : 
          i === 1 ? {...item, progress: 20} : item
        ))
      }, 1200),
      setTimeout(() => {
        setCampaigns(prev => prev.map((item, i) => 
          i === 0 ? {...item, description: "60% accuracy • Millennials", progress: 95} : 
          i === 1 ? {...item, description: "150% ROI • High-intent buyers", progress: 60} : 
          i === 2 ? {...item, progress: 30} : item
        ))
      }, 1600),
      setTimeout(() => {
        setCampaigns(prev => prev.map((item, i) => 
          i === 0 ? {...item, description: "95% accuracy • Millennials", status: "active", progress: 100} : 
          i === 1 ? {...item, description: "340% ROI • High-intent buyers", status: "optimizing", progress: 100} : 
          i === 2 ? {...item, description: "4.2% CTR • Similar customers", progress: 70} : item
        ))
      }, 2000),
      setTimeout(() => {
        setCampaigns(prev => prev.map((item, i) => 
          i === 2 ? {...item, description: "8.9% CTR • Similar customers", status: "scaling", progress: 100} : item
        ))
      }, 2400)
    ]
    
    return () => timers.forEach(timer => clearTimeout(timer))
  }, [])

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-700"
      case "optimizing": return "bg-blue-100 text-blue-700"
      case "scaling": return "bg-purple-100 text-purple-700"
      case "loading": return "bg-yellow-100 text-yellow-700"
      default: return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active": return "Active"
      case "optimizing": return "Optimizing"
      case "scaling": return "Scaling"
      case "loading": return "Loading"
      default: return "Pending"
    }
  }

  return (
    <div
      className={`w-full h-full relative ${className} flex items-center justify-center`}
      role="img"
      aria-label="Advanced Targeting Solutions showing campaign management"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className="w-full max-w-sm p-6 bg-gradient-to-br from-card/20 to-transparent backdrop-blur-md rounded-2xl border border-border transition-all duration-300 ease-out"
        style={{
          transform: isHovered ? 'scale(1.02)' : 'scale(1)',
          boxShadow: isHovered 
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
            : "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        }}
      >
        <div className="space-y-4">
          {/* Demographic Targeting */}
          {campaigns.map((campaign, index) => (
            <div 
              key={campaign.title}
              className="flex items-center gap-3 p-3 bg-primary/5 rounded-lg border border-primary/20 transition-all duration-500 ease-out"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(10px)",
                transitionDelay: `${index * 200}ms`,
              }}
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="text-primary text-sm">
                  {campaign.title.includes("Demographic") ? "🎯" : 
                   campaign.title.includes("Behavioral") ? "📊" : "📈"}
                </div>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-sm text-foreground">{campaign.title}</div>
                <div className="text-xs text-muted-foreground">{campaign.description}</div>
                {campaign.progress > 0 && campaign.progress < 100 && (
                  <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                    <div 
                      className="bg-primary h-1 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                )}
              </div>
              <div className={`px-2 py-1 text-xs rounded-md font-medium transition-all duration-300 ${getStatusColor(campaign.status)}`}>
                {getStatusText(campaign.status)}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}

export default ParallelCodingAgents