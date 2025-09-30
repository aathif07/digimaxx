"use client"

import type React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "What is DigiMaxx and who is it for?",
    answer:
      "DigiMaxx is a next-generation digital marketing agency designed for businesses, entrepreneurs, and organizations who want to achieve accelerated growth. We're perfect for both startups looking to establish their digital presence and established companies seeking to dominate their market through innovative AI-driven strategies.",
  },
  {
    question: "How does DigiMaxx's AI-driven marketing work?",
    answer:
      "Our AI analyzes market trends, consumer behavior, and your competition in real-time, providing intelligent strategies for maximum impact. We use advanced algorithms to optimize your campaigns, predict market shifts, and ensure your brand stays ahead of the competition with data-driven decision making.",
  },
  {
    question: "What digital marketing services does DigiMaxx offer?",
    answer:
      "We offer comprehensive digital marketing solutions including SEO optimization, content marketing, social media management, market research & analytics, targeted advertising campaigns, and marketing automation. Our integrated approach ensures all channels work together for maximum growth.",
  },
  {
    question: "How quickly can I see results with DigiMaxx?",
    answer:
      "While digital marketing is a long-term strategy, many clients see initial improvements within 30-60 days. Our AI-driven approach accelerates traditional timelines - you'll see increased engagement within weeks, improved search rankings within 2-3 months, and significant ROI growth within 3-6 months.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Absolutely! We work with startups, small businesses, mid-market companies, and enterprise organizations. Our strategies are scalable and customized to fit your budget, goals, and industry. Whether you're just starting out or looking to scale exponentially, we have solutions for every growth stage.",
  },
  {
    question: "How do you measure success and ROI?",
    answer:
      "We provide comprehensive analytics and reporting that track key performance indicators including website traffic, conversion rates, lead generation, brand awareness, and revenue growth. Our transparent reporting shows exactly how your investment translates into measurable business results and accelerated growth.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-base font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-sm font-normal leading-6 break-words">{answer}</div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      {/* Contact Section with Glass Effect */}
      <div className="w-full max-w-[1000px] mb-16">
        <div className="bg-white/10 backdrop-blur-lg rounded-[10px] p-8 shadow-lg border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-6">Have questions or ready to get started? Reach out to our team.</p>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-white mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Your company name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-white/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 text-white placeholder-white/50"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-md transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-8">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Email Us</h4>
                      <a href="mailto:hello@digimaxx.co" className="text-red-400 hover:text-red-300 transition-colors block">
                        hello@digimaxx.co
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Call Us</h4>
                      <a href="tel:+919500009759" className="text-red-400 hover:text-red-300 transition-colors block">
                        +91-9500009759
                      </a>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-medium text-white mb-3">Visit Us</h4>
                      <p className="text-gray-300">Bengaluru, Mumbai & New Delhi</p>
                      <p className="text-gray-400 text-sm mt-1">India</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/20">
                  <h4 className="text-lg font-medium text-white mb-3">Ready to get started?</h4>
                  <p className="text-gray-300 mb-4">
                    Schedule a free consultation to discuss your marketing goals and discover how our AI-driven strategies can accelerate your growth.
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* FAQ Content */}
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Frequently Asked Questions
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm font-medium leading-[18.20px] break-words">
            Everything you need to know about DigiMaxx and how we can accelerate your business growth
          </p>
        </div>
      </div>
      <div className="w-full max-w-[1000px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}