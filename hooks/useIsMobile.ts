'use client';

import { useState, useEffect } from 'react';

/**
 * Client-side mobile detection hook.
 * Returns null while detecting, true for mobile, false for desktop.
 */
export function useIsMobile(): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const checkMobile = () => {
      // Allow ?mobile=true query param for testing
      const urlParams = new URLSearchParams(window.location.search);
      if (urlParams.get('mobile') === 'true') return true;
      if (urlParams.get('mobile') === 'false') return false;

      const userAgent = navigator.userAgent;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      const isSmallScreen = window.innerWidth < 768;

      // Check mobile user agent OR small screen
      return mobileRegex.test(userAgent) || isSmallScreen;
    };

    setIsMobile(checkMobile());

    // Re-check on resize
    const handleResize = () => setIsMobile(checkMobile());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
}
