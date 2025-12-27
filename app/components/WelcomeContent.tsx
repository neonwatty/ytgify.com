'use client';

import { useIsMobile } from '@/hooks/useIsMobile';
import MobileWelcome from './MobileWelcome';
import DesktopWelcome from './DesktopWelcome';

function WelcomeLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] grid-pattern flex items-center justify-center">
      <div className="animate-pulse flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#E91E8C]/20 to-[#7B2FBE]/20" />
        <div className="w-48 h-4 rounded bg-gray-800" />
        <div className="w-32 h-4 rounded bg-gray-800" />
      </div>
    </div>
  );
}

export default function WelcomeContent() {
  const isMobile = useIsMobile();

  // Show loading state while detecting device
  if (isMobile === null) {
    return <WelcomeLoadingSkeleton />;
  }

  return isMobile ? <MobileWelcome /> : <DesktopWelcome />;
}
