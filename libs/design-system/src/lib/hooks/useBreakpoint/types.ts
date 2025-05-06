import { BREAKPOINTS } from './constants';

export type BreakPoint = keyof typeof BREAKPOINTS;

export type BreakpointContextProps = {
  currentBreakpoint?: BreakPoint;
  matchesSmall: boolean;
  matchesMediumDown: boolean;
  matchesMediumUp: boolean;
  matchesLargeDown: boolean;
  matchesLargeUp: boolean;
  matchesXL: boolean;
};
