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
