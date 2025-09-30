"use client";

import { usePageAnimationControl } from "@/hooks/use-animation-control";
import { Typewriter } from "@/components/ui/typewriter-text"

export function LargeTestimonial() {
  // Only animate on homepage and about page
  const shouldAnimate = usePageAnimationControl(["/", "/about", "/home"]);

  return (
    <section className="w-full px-5 overflow-hidden flex justify-center items-center">
      <div className="flex-1 flex flex-col justify-start items-start overflow-hidden">
        <div className="self-stretch px-4 py-12 md:px-6 md:py-16 lg:py-28 flex flex-col justify-start items-start gap-2">
          <div className="self-stretch flex justify-between items-center">
            <div className="flex-1 px-4 py-8 md:px-12 lg:px-20 md:py-8 lg:py-10 overflow-hidden rounded-lg flex flex-col justify-center items-center gap-6 md:gap-8 lg:gap-11">
              <div className="w-full max-w-[1024px] text-center text-foreground leading-7 md:leading-10 lg:leading-[64px] font-medium text-lg md:text-3xl lg:text-6xl">
                <Typewriter
                  text={[
                    "DigiMaxx's AI-driven strategies increased our online visibility by 300%.",
                    "Transform your digital presence completely.",
                    "Achieve accelerated growth with DigiMaxx."
                  ]}
                  speed={80}
                  loop={true}
                  deleteSpeed={40}
                  delay={2000}
                  className="leading-7 md:leading-10 lg:leading-[64px] font-medium text-lg md:text-3xl lg:text-6xl"
                  animate={shouldAnimate}
                  startDelay={500}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}