import Image from "next/image"

interface Testimonial {
  quote: string
  name: string
  company: string
  avatar: string
  type: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The SEO optimization tools in digimaxx have transformed our content strategy. Our organic traffic increased by 180% in just three months.",
    name: "Sarah Johnson",
    company: "TechGrowth SEO",
    avatar: "/images/avatars/sarah-johnson.png",
    type: "large-teal",
  },
  {
    quote:
      "Keyword research and competitor analysis that used to take days now takes minutes with digimaxx's AI-powered insights.",
    name: "Michael Chen",
    company: "DigitalPulse Agency",
    avatar: "/images/avatars/michael-chen.png",
    type: "small-dark",
  },
  {
    quote:
      "The content optimization suggestions are incredibly accurate. We've seen a 3x improvement in our content quality scores.",
    name: "Emma Rodriguez",
    company: "ContentFirst Media",
    avatar: "/images/avatars/emma-rodriguez.png",
    type: "small-dark",
  },
  {
    quote:
      "digimaxx's backlink analysis helped us identify 200+ high-value link opportunities we'd completely missed before.",
    name: "David Wilson",
    company: "LinkBuilder Pro",
    avatar: "/images/avatars/david-wilson.png",
    type: "small-dark",
  },
  {
    quote:
      "Our client retention rate jumped to 95% after implementing digimaxx's SEO recommendations across their campaigns.",
    name: "Jessica Taylor",
    company: "SEO Masters Inc",
    avatar: "/images/avatars/jessica-taylor.png",
    type: "small-dark",
  },
  {
    quote:
      "The competitor gap analysis feature alone is worth the subscription. We've captured keywords from our top 3 competitors.",
    name: "Robert Kim",
    company: "RankBoost Agency",
    avatar: "/images/avatars/robert-kim.png",
    type: "small-dark",
  },
  {
    quote:
      "From technical SEO audits to content planning, digimaxx covers our entire SEO workflow. It's become our indispensable SEO partner.",
    name: "Amanda Foster",
    company: "WebVisibility Group",
    avatar: "/images/avatars/amanda-foster.png",
    type: "large-light",
  },
]

const TestimonialCard = ({ quote, name, company, avatar, type }: Testimonial) => {
  const isLargeCard = type.startsWith("large")
  const padding = isLargeCard ? "p-6" : "p-[30px]"

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding}`
  let quoteClasses = ""
  let backgroundElements = null
  let cardHeight = ""
  const cardWidth = "w-full md:w-[384px]"

  if (type === "large-teal") {
    cardClasses += " bg-primary"
    quoteClasses += " text-primary-foreground text-2xl font-medium leading-8"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else if (type === "large-light") {
    cardClasses += " bg-[rgba(231,236,235,0.12)]"
    quoteClasses += " text-foreground text-2xl font-medium leading-8"
    cardHeight = "h-[502px]"
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/images/large-card-background.svg')", zIndex: 0 }}
      />
    )
  } else {
    cardClasses += " bg-card outline outline-1 outline-border outline-offset-[-1px]"
    quoteClasses += " text-foreground/80 text-[17px] font-normal leading-6"
    cardHeight = "h-[244px]"
  }

  return (
    <div className={`${cardClasses} ${cardWidth} ${cardHeight}`}>
      {backgroundElements}
      <div className={`relative z-10 font-normal break-words ${quoteClasses}`}>{quote}</div>
    </div>
  )
}

export function TestimonialGridSection() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14">
      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]">
            What Makes digimaxx SEOs Favourite?
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed">
            {"Discover why SEO professionals trust digimaxx to boost their rankings,"} <br />{" "}
            {"drive organic traffic, and maximize their digital marketing ROI"}
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