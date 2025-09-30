import { useState, useEffect } from "react";

/**
 * Hook to control animations based on the current page
 * @param allowedPages - Array of page paths where animations should run
 * @param currentPage - Current page path (optional, will use window.location if not provided)
 * @returns Boolean indicating whether animations should be enabled
 */
export function usePageAnimation(
  allowedPages: string[], 
  currentPage?: string
): boolean {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Get current page path
    const path = currentPage || (typeof window !== 'undefined' ? window.location.pathname : "/");
    setCurrentPath(path);
  }, [currentPage]);

  useEffect(() => {
    // Check if current page is in allowed pages
    const isAllowed = allowedPages.some(page => 
      currentPath === page || currentPath.startsWith(page)
    );
    setShouldAnimate(isAllowed);
  }, [currentPath, allowedPages]);

  return shouldAnimate;
}

/**
 * Hook to control animations for specific sections
 * @param sectionId - Unique identifier for the section
 * @param enabledSections - Array of section IDs that should have animations
 * @returns Boolean indicating whether animations should be enabled
 */
export function useSectionAnimation(
  sectionId: string,
  enabledSections: string[]
): boolean {
  return enabledSections.includes(sectionId);
}