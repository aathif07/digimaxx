"use client"

import * as React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Solution {
    imgSrc: string
    alt: string
}

interface AnimatedSolutionGridProps {
    solutions: Solution[]
    badgeText?: string
    title: React.ReactNode
    description: React.ReactNode
    ctaText: string
    ctaHref: string
    className?: string
}

const imagePositions = [
    { top: '5%', left: '15%', className: 'hidden lg:block w-24 h-24' },
    { top: '15%', left: '35%', className: 'hidden md:block w-20 h-20' },
    { top: '5%', left: '55%', className: 'hidden md:block w-16 h-16' },
    { top: '10%', right: '15%', className: 'hidden lg:block w-28 h-28' },
    { top: '25%', right: '5%', className: 'hidden md:block w-20 h-20' },
    { top: '45%', right: '10%', className: 'hidden lg:block w-24 h-24' },
    { top: '50%', left: '5%', className: 'hidden md:block w-28 h-28' },
    { bottom: '5%', left: '20%', className: 'hidden lg:block w-20 h-20' },
    { bottom: '15%', left: '45%', className: 'hidden md:block w-16 h-16' },
    { bottom: '10%', right: '30%', className: 'hidden md:block w-24 h-24' },
    { bottom: '2%', right: '15%', className: 'hidden lg:block w-20 h-20' },
    { top: '10%', left: '5%', className: 'block md:hidden w-16 h-16' },
    { top: '5%', right: '10%', className: 'block md:hidden w-20 h-20' },
    { bottom: '5%', left: '10%', className: 'block md:hidden w-20 h-20' },
    { bottom: '10%', right: '5%', className: 'block md:hidden w-16 h-16' },
]

const imageVariants = {
    initial: { opacity: 0, scale: 0.5 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: 'spring' as const,
            stiffness: 260,
            damping: 20,
            delay: Math.random() * 0.5,
        }
    },
}

const floatingAnimation = () => ({
    y: [0, Math.random() * -15 - 5, 0],
    transition: {
        duration: Math.random() * 4 + 5,
        repeat: Infinity,
        repeatType: 'reverse' as const,
        ease: 'easeInOut' as const,
    },
})

const AnimatedSolutionGrid = ({
    solutions,
    badgeText = 'Our Solutions',
    title,
    description,
    ctaText,
    ctaHref,
    className,
}: AnimatedSolutionGridProps) => {
    return (
        <section
            className={cn(
                'relative w-full max-w-7xl mx-auto py-32 sm:py-40 px-4',
                className
            )}
        >
            {solutions.slice(0, imagePositions.length).map((solution, index) => (
                <motion.div
                    key={index}
                    className={cn('absolute rounded-lg shadow-xl', imagePositions[index].className)}
                    style={{
                        top: imagePositions[index].top,
                        left: imagePositions[index].left,
                        right: imagePositions[index].right,
                        bottom: imagePositions[index].bottom,
                    }}
                    variants={imageVariants}
                    initial="initial"
                    animate="animate"
                    whileHover={{ scale: 1.1, zIndex: 20 }}
                    custom={index}
                >
                    <motion.img
                        src={solution.imgSrc}
                        alt={solution.alt}
                        className="w-full h-full object-contain rounded-lg bg-white/10 backdrop-blur-sm p-2"
                        animate={floatingAnimation()}
                    />
                </motion.div>
            ))}

            <div className="relative z-10 flex flex-col items-center text-center">
                {badgeText && (
                    <div className="mb-4 inline-block rounded-full bg-red-600 px-3 py-1 text-sm font-semibold text-white">
                        {badgeText}
                    </div>
                )}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-4 max-w-3xl">
                    {title}
                </h1>
                <p className="max-w-xl text-lg text-muted-foreground mb-8">
                    {description}
                </p>
                <a
                    href={ctaHref}
                    className="inline-flex items-center justify-center rounded-full bg-red-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                    {ctaText}
                    <ArrowRight className="ml-2 h-5 w-5" />
                </a>
            </div>
        </section>
    )
}

const solutions = [
    { imgSrc: 'https://cdn.simpleicons.org/google/4285F4', alt: 'Google Analytics & Ads' },
    { imgSrc: 'https://cdn.simpleicons.org/facebook/1877F2', alt: 'Facebook Marketing' },
    { imgSrc: 'https://cdn.simpleicons.org/instagram/E4405F', alt: 'Instagram Marketing' },
    { imgSrc: 'https://cdn.simpleicons.org/linkedin/0A66C2', alt: 'LinkedIn Marketing' },
    { imgSrc: 'https://cdn.simpleicons.org/twitter/1DA1F2', alt: 'Twitter Marketing' },
    { imgSrc: 'https://cdn.simpleicons.org/shopify/7AB55C', alt: 'E-commerce Solutions' },
    { imgSrc: 'https://cdn.simpleicons.org/canva/00C4CC', alt: 'Design & Branding' },
    { imgSrc: 'https://cdn.simpleicons.org/mailchimp/FFE01B', alt: 'Email Marketing' },
    { imgSrc: 'https://cdn.simpleicons.org/wordpress/21759B', alt: 'Content Management' },
    { imgSrc: 'https://cdn.simpleicons.org/microsoft/5E5E5E', alt: 'Microsoft Solutions' },
    { imgSrc: 'https://cdn.simpleicons.org/amazonaws/FF9900', alt: 'Cloud Solutions' },
    { imgSrc: 'https://cdn.simpleicons.org/spotify/1ED760', alt: 'Audio Marketing' },
    { imgSrc: 'https://cdn.simpleicons.org/zoom/2D8CFF', alt: 'Video Marketing' },
    { imgSrc: 'https://cdn.simpleicons.org/apple/000000', alt: 'iOS Marketing' },
    { imgSrc: 'https://cdn.simpleicons.org/android/3DDC84', alt: 'Android Marketing' },
]

export function PricingSection() {
    return (
        <div className="w-full bg-background">
            <AnimatedSolutionGrid
                solutions={solutions}
                title={
                    <>
                        Elevate Your Brand with Our
                        <br />
                        Solutions
                    </>
                }
                description="Save time and effort with our automation features. Routine SEO tasks are streamlined, allowing you to focus on strategic growth."
                ctaText="Explore Our Integration Library"
                ctaHref="#integrations"
            />
        </div>
    )
}
