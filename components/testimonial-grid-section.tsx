import Image from "next/image"
import { Quote, Star } from "lucide-react"
import { GlowingEffect } from "@/components/ui/glowing-effect"

const testimonials = [
  {
    quote:
      "DigiMaxx has exceeded our expectations in every way. The ease with which we can target specific audience segments has transformed our approach to digital marketing. The automation features have saved us countless hours, allowing us to focus on strategy.",
    name: "Sarah Johnson",
    company: "TechFlow Solutions",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    type: "large-teal",
  },
  {
    quote:
      "I can't imagine managing our digital campaigns without DigiMaxx. The AI-driven strategies have been a game-changer for our marketing team. Our organic traffic has grown by 300%.",
    name: "Michael Chen",
    company: "GrowthLab",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    type: "small-dark",
  },
  {
    quote:
      "DigiMaxx's SEO optimization delivered faster ranking improvements and smarter keyword targeting. Our organic visibility increased dramatically within just 3 months.",
    name: "Emma Rodriguez",
    company: "Digital Dynamics",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    type: "small-dark",
  },
  {
    quote:
      "The AI content creation at scale is incredible. From blog posts to social media campaigns, everything is tailored perfectly to our audience with consistent publishing.",
    name: "David Park",
    company: "ContentCorp",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    type: "small-dark",
  },
  {
    quote:
      "Our paid advertising ROI has maximized with DigiMaxx's AI-driven bidding and targeting. Lower ad spend waste, higher conversions - exactly what we needed.",
    name: "Lisa Thompson",
    company: "AdVantage Media",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    type: "small-dark",
  },
  {
    quote:
      "Social media automation has given us consistency across platforms with stronger engagement and wider brand reach. The trend detection is phenomenal.",
    name: "James Wilson",
    company: "SocialSphere",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    type: "small-dark",
  },
  {
    quote:
      "The email and CRM automation with hyper-personalized flows has increased our open rates by 250% and significantly reduced churn. Customer behavior prediction is spot-on.",
    name: "Rachel Adams",
    company: "EmailMax Pro",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    type: "large-light",
  },
]

interface TestimonialCardProps {
  quote: string;
  type: string;
}

const TestimonialCard = ({ quote, type }: TestimonialCardProps) => {
  const isLargeCard = type.startsWith("large")
  const padding = isLargeCard ? "p-6" : "p-6"

  let cardClasses = `group flex flex-col justify-start items-start overflow-hidden rounded-xl shadow-sm relative ${padding} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer animate-fade-in`
  let quoteClasses = ""
  let cardHeight = ""
  const cardWidth = "w-full md:w-[384px]"

  if (type === "large-teal") {
    cardClasses += " bg-slate-800 text-white"
    quoteClasses += " text-white text-2xl font-medium leading-8"
    cardHeight = "h-[502px]"
  } else if (type === "large-light") {
    cardClasses += " bg-gray-50 text-gray-800"
    quoteClasses += " text-gray-800 text-2xl font-medium leading-8"
    cardHeight = "h-[502px]"
  } else {
    cardClasses += " bg-white text-gray-700"
    quoteClasses += " text-gray-700 text-[17px] font-normal leading-6"
    cardHeight = "h-[280px]"
  }

  return (
    <GlowingEffect
      spread={40}
      glow={true}
      disabled={false}
      proximity={64}
      borderWidth={3}
      className={`${cardClasses} ${cardWidth} ${cardHeight}`}
      style={{
        "--card-background": 
          type === "large-teal" ? "#1e293b" : 
          type === "large-light" ? "#f9fafb" : "#ffffff"
      } as React.CSSProperties}
    >
      {/* Quote Icon */}
      <div className="relative z-10 mb-4">
        <div className="p-3 rounded-full bg-red-500/10 group-hover:bg-red-500/20 transition-colors duration-300">
          <Quote className="w-6 h-6 text-red-500" />
        </div>
      </div>
      
      {/* Testimonial Quote */}
      <div className={`relative z-10 font-normal break-words ${quoteClasses} flex-1 mb-4`}>
        &ldquo;{quote}&rdquo;
      </div>
      
      {/* Rating Stars */}
      <div className="relative z-10 flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      
      {/* Bottom Section */}
      <div className="relative z-10 w-full pt-4 border-t border-gray-200/50 group-hover:border-red-500/20 transition-colors duration-300">
        <span className="text-sm font-medium text-red-500">DigiMaxx Client</span>
      </div>
    </GlowingEffect>
  )
}

export function TestimonialGridSection() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14">
      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]">
            What Makes DigiMaxx SEOs Favourite?
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed">
            {"Discover how businesses achieve accelerated growth with our AI-driven"} <br />{" "}
            {"digital marketing strategies and data-driven optimization solutions"}
          </p>
        </div>
      </div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 max-w-[1100px] mx-auto">
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
          <TestimonialCard {...testimonials[4]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[5]} />
          <TestimonialCard {...testimonials[6]} />
        </div>
      </div>
    </section>
  )
}
