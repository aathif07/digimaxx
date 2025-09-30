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
    { imgSrc: 'https://sb.kaleidousercontent.com/67418/400x400/d2ee90c914/linkedin-logo.png', alt: 'LinkedIn Marketing' },
    { imgSrc: 'data:image/jpeg;base64,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', alt: 'Twitter Marketing' },
    { imgSrc: 'https://cdn.simpleicons.org/shopify/7AB55C', alt: 'E-commerce Solutions' },
    { imgSrc: 'https://cdn.simpleicons.org/canva/00C4CC', alt: 'Design & Branding' },
    { imgSrc: 'https://cdn.simpleicons.org/mailchimp/FFE01B', alt: 'Email Marketing' },
    { imgSrc: 'https://cdn.simpleicons.org/wordpress/21759B', alt: 'Content Management' },
    { imgSrc: 'https://namisite.com/wp-content/uploads/2024/06/ms-licen-removebg-preview.png', alt: 'Microsoft Solutions' },
    { imgSrc: 'https://png.pngtree.com/png-vector/20241102/ourlarge/pngtree-cloud-computing-concept-png-image_14157582.png', alt: 'Cloud Solutions' },
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
