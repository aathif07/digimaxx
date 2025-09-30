# Typewriter Animation Guide

This guide explains how to use the enhanced typewriter component with page-specific animations.

## Enhanced Typewriter Component Features

The updated [Typewriter](file:///Users/aathifsb/Library/CloudStorage/GoogleDrive-aathifxx7@gmail.com/My Drive/projects/digimaxx/components/ui/typewriter-text.tsx#L12-L58) component includes several new props for better control:

### New Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animate` | boolean | `true` | Control whether animation should run |
| `pause` | boolean | `false` | Pause animation when true |
| `startDelay` | number | `0` | Delay before starting animation (ms) |
| `onAnimationComplete` | function | `undefined` | Callback when animation completes |

### Preventing Layout Shifts

The component now includes built-in layout shift prevention:
- Uses `minHeight` to maintain consistent spacing
- Proper cursor positioning with inline-block elements
- Smooth transitions to prevent jumping content

## Page-Specific Animations

### Using the usePageAnimation Hook

```typescript
import { usePageAnimation } from '../hooks/use-page-animation';

function MyComponent() {
  // Enable animations only on specific pages
  const shouldAnimate = usePageAnimation(['/', '/home', '/about']);
  
  return (
    <Typewriter 
      text="Hello World" 
      animate={shouldAnimate}
    />
  );
}
```

### Using the useSectionAnimation Hook

```typescript
import { useSectionAnimation } from '../hooks/use-page-animation';

function MyComponent() {
  // Enable animations only for specific sections
  const enableHeroAnimations = useSectionAnimation('hero', ['hero', 'services']);
  
  return (
    <Typewriter 
      text="Welcome" 
      animate={enableHeroAnimations}
    />
  );
}
```

## Implementation Examples

### 1. Conditional Animation Based on Page

```typescript
"use client";
import { usePathname } from 'next/navigation';
import { Typewriter } from './ui/typewriter-text';

export function PageHeader() {
  const pathname = usePathname();
  const isHomePage = pathname === '/' || pathname === '/home';
  
  return (
    <h1>
      <Typewriter 
        text="Welcome to Our Site" 
        animate={isHomePage}
        startDelay={300}
      />
    </h1>
  );
}
```

### 2. Delayed Sequential Animations

```typescript
export function SequentialAnimations() {
  return (
    <div>
      <h2>
        <Typewriter 
          text="First Line" 
          startDelay={0}
        />
      </h2>
      <p>
        <Typewriter 
          text="Second Line" 
          startDelay={1000} // Starts after 1 second
        />
      </p>
      <p>
        <Typewriter 
          text="Third Line" 
          startDelay={2000} // Starts after 2 seconds
        />
      </p>
    </div>
  );
}
```

### 3. Pausing Animations

```typescript
export function ModalWithAnimation() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      
      {isOpen && (
        <div className="modal">
          <h3>
            <Typewriter 
              text="Modal Title" 
              pause={!isOpen} // Pause when modal is closed
            />
          </h3>
        </div>
      )}
    </>
  );
}
```

## Best Practices

1. **Performance**: Only enable animations on pages where they add value
2. **Accessibility**: Consider reducing motion for users with preferences set
3. **Layout Stability**: Always use the built-in layout shift prevention
4. **User Experience**: Add small delays (200-500ms) for better visual flow

## Troubleshooting

### Animations Not Working
- Ensure `animate` prop is set to `true`
- Check that `text` prop is properly defined
- Verify component is mounted in a client-side context

### Layout Shifts
- Make sure parent containers have sufficient min-height
- Use the provided CSS classes for consistent spacing

### Performance Issues
- Limit the number of simultaneous animations
- Use `startDelay` to stagger animations
- Disable animations on low-performance devices