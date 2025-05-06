import { BreakPoint } from './types';

export const BREAKPOINTS = {
  xl: 1500,
  large: 992,
  medium: 768,
  small: 576,
} as const;

export const BREAKPOINT_KEYS = Object.keys(BREAKPOINTS) as BreakPoint[];
