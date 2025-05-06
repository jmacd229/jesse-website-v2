import { useEffect, useState } from 'react';
import { BREAKPOINT_KEYS, BREAKPOINTS } from './constants';
import { BreakPoint } from './types';

export const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<BreakPoint>();

  useEffect(() => {
    const setBreakpoint = () => setCurrentBreakpoint(getBreakpoint());

    setBreakpoint();
    window.addEventListener('resize', setBreakpoint);

    return () => window.removeEventListener('resize', setBreakpoint);
  }, []);

  return {
    currentBreakpoint,
    // Utility properties for simple display logic
    matchesSmall: currentBreakpoint === 'small',
    matchesMediumDown:
      currentBreakpoint === 'medium' || currentBreakpoint === 'small',
    matchesMediumUp: currentBreakpoint !== 'small',
    matchesLargeDown: currentBreakpoint !== 'xl',
    matchesLargeUp: currentBreakpoint === 'large' || currentBreakpoint === 'xl',
    matchesXL: currentBreakpoint === 'xl',
  };
};

// Gets the current screen-size breakpoint
const getBreakpoint = (): BreakPoint =>
  BREAKPOINT_KEYS.find(
    (breakpoint) => window.innerWidth > BREAKPOINTS[breakpoint]
  ) ?? 'small';
