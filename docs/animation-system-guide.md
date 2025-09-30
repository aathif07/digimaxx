# Animation System Guide

This guide explains how to use the new animation system to control typewriter animations and other animated components across different pages.

## System Overview

The animation system consists of:

1. **Animation Context** - Global state management for animations
2. **Animation Hooks** - Utilities for controlling animations in components
3. **Enhanced Components** - Components that respect animation settings

## Setting Up Animation Control

### 1. Animation Provider

The [AnimationProvider](file:///Users/aathifsb/Library/CloudStorage/GoogleDrive-aathifxx7@gmail.com/My%20Drive/projects/digimaxx/context/animation-context.tsx#L9-L46) must be included in your root layout:

```tsx
// app/layout.tsx
import { AnimationProvider } from "@/context/animation-context"

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AnimationProvider>
          {children}
        </AnimationProvider>
      </body>
    </html>
  )
}
```

### 2. Define Animation Pages

Edit the `pagesWithAnimations` array in the context to specify which pages should have animations:

```tsx
const pagesWithAnimations = [
  "/",
  "/home",
  "/about",
  "/services"
]
```

## Using Animation Hooks

### useAnimation Hook

Access global animation state:

```tsx
import { useAnimation } from "@/context/animation-context"

function MyComponent() {
  const { animationsEnabled, currentPage } = useAnimation()
  
  return (
    <div>
      Animations: {animationsEnabled ? "ON" : "OFF"}
      Current Page: {currentPage}
    </div>
  )
}
```

### useAnimationControl Hook

Control animations for specific components:

```tsx
import { useAnimationControl } from "@/hooks/use-animation-control"

function MyComponent() {
  // Enable animations only for specific components
  const shouldAnimate = useAnimationControl("hero-section", ["hero-section", "testimonial-section"])
  
  return (
    <Typewriter 
      text="Hello World" 
      animate={shouldAnimate}
    />
  )
}
```

### usePageAnimationControl Hook

Control animations based on current page:

```tsx
import { usePageAnimationControl } from "@/hooks/use-animation-control"

function MyComponent() {
  // Enable animations only on specific pages
  const shouldAnimate = usePageAnimationControl(["/", "/home", "/about"])
  
  return (
    <Typewriter 
      text="Welcome" 
      animate={shouldAnimate}
    />
  )
}
```

## Component Implementation

### Updating Existing Components

Update components to respect animation settings:

```tsx
"use client"
import { usePageAnimationControl } from "@/hooks/use-animation-control"
import { Typewriter } from "@/components/ui/typewriter-text"

export function LargeTestimonial() {
  const shouldAnimate = usePageAnimationControl(["/", "/about", "/home"])

  return (
    <section>
      <div>
        <Typewriter
          text={["Your animated text"]}
          animate={shouldAnimate}
          startDelay={500}
        />
      </div>
    </section>
  )
}
```

### Creating New Animated Components

```tsx
"use client"
import { useAnimationControl } from "@/hooks/use-animation-control"
import { Typewriter } from "@/components/ui/typewriter-text"

export function AnimatedSection() {
  const shouldAnimate = useAnimationControl("my-section", ["my-section"])

  return (
    <section>
      <h2>
        <Typewriter
          text="Section Title"
          animate={shouldAnimate}
          startDelay={200}
        />
      </h2>
      <p>
        <Typewriter
          text="Section description"
          animate={shouldAnimate}
          startDelay={400}
        />
      </p>
    </section>
  )
}
```

## Best Practices

### 1. Performance Optimization

- Only enable animations on pages where they add value
- Use `startDelay` to create staggered animations
- Limit the number of simultaneous animations

### 2. User Experience

- Provide visual feedback when animations are disabled
- Consider user preferences for reduced motion
- Use appropriate delays between sequential animations

### 3. Accessibility

- Ensure content is readable without animations
- Provide alternative content for users who disable animations
- Test with screen readers and assistive technologies

## Troubleshooting

### Animations Not Working

1. Check that [AnimationProvider](file:///Users/aathifsb/Library/CloudStorage/GoogleDrive-aathifxx7@gmail.com/My%20Drive/projects/digimaxx/context/animation-context.tsx#L9-L46) is included in your layout
2. Verify the current page is in `pagesWithAnimations`
3. Ensure the `animate` prop is set correctly on components

### Animations Running on Wrong Pages

1. Update the `pagesWithAnimations` array in the context
2. Check that `usePageAnimationControl` is used correctly
3. Verify page paths match exactly

### Performance Issues

1. Reduce the number of animated components on a single page
2. Increase delays between sequential animations
3. Disable animations on low-performance devices

## Example Implementation

Here's a complete example of a page with controlled animations:

```tsx
"use client"
import { usePageAnimationControl } from "@/hooks/use-animation-control"
import { Typewriter } from "@/components/ui/typewriter-text"

export default function HomePage() {
  const shouldAnimate = usePageAnimationControl(["/", "/home"])

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">
        <Typewriter
          text="Welcome to Our Site"
          animate={shouldAnimate}
          startDelay={200}
        />
      </h1>
      
      <p className="text-xl mb-8">
        <Typewriter
          text="We create amazing digital experiences"
          animate={shouldAnimate}
          startDelay={500}
        />
      </p>
      
      <section className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          <Typewriter
            text="Our Services"
            animate={shouldAnimate}
            startDelay={800}
          />
        </h2>
        {/* ... rest of the content */}
      </section>
    </div>
  )
}
```

This system ensures that animations only run on specified pages and sections, preventing performance issues and unwanted animations on pages where they're not needed.