import { useAnimation } from "@/context/animation-context";

/**
 * Hook to control component animations based on global settings and component-specific rules
 * @param componentId - Unique identifier for the component
 * @param enabledComponents - Array of component IDs that should have animations
 * @returns Boolean indicating whether animations should be enabled
 */
export function useAnimationControl(
  componentId: string,
  enabledComponents: string[] = []
): boolean {
  const { animationsEnabled } = useAnimation();
  
  // If no specific components are defined, use global setting
  if (enabledComponents.length === 0) {
    return animationsEnabled;
  }
  
  // Check if this specific component should have animations
  return animationsEnabled && enabledComponents.includes(componentId);
}

/**
 * Hook to control page-specific animations
 * @param allowedPages - Array of page paths where animations should run
 * @param currentPage - Current page path (optional, will use context if not provided)
 * @returns Boolean indicating whether animations should be enabled
 */
export function usePageAnimationControl(
  allowedPages: string[]
): boolean {
  const { animationsEnabled, currentPage } = useAnimation();
  
  // Check if current page is in allowed pages
  const isAllowedPage = allowedPages.some(page => 
    currentPage === page || currentPage.startsWith(page)
  );
  
  return animationsEnabled && isAllowedPage;
}