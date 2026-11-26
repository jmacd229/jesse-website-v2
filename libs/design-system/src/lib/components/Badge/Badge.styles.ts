import { css } from '@linaria/core';
import { BadgePosition } from './types';

// Empty handles: all of these are styled from the badge selector below, which
// keeps the original nesting (and therefore the original specificity).
export const badgeContent = css``;

export const topLeft = css``;

export const topRight = css``;

export const bottomLeft = css``;

export const bottomRight = css``;

export const badge = css`
  --badge-color: var(--secondary-800);
  --badge-border: 2px;
  /* Highlights capped and shadows deepened so white text holds 7:1 on the lighter base */
  --hi2: color-mix(in srgb, var(--badge-color), var(--white) 8%);
  --hi1: color-mix(in srgb, var(--badge-color), var(--white) 4%);
  --lo1: color-mix(in srgb, var(--badge-color), var(--black) 15%);
  --lo2: color-mix(in srgb, var(--badge-color), var(--black) 30%);
  --starburst: polygon(
    100% 50%,
    86.71% 59.84%,
    93.3% 75%,
    76.87% 76.87%,
    75% 93.3%,
    59.84% 86.71%,
    50% 100%,
    40.16% 86.71%,
    25% 93.3%,
    23.13% 76.87%,
    6.7% 75%,
    13.29% 59.84%,
    0% 50%,
    13.29% 40.16%,
    6.7% 25%,
    23.13% 23.13%,
    25% 6.7%,
    40.16% 13.29%,
    50% 0%,
    59.84% 13.29%,
    75% 6.7%,
    76.87% 23.13%,
    93.3% 25%,
    86.71% 40.16%
  );

  position: absolute;
  z-index: var(--badge-z-index);
  display: grid;
  place-items: center;
  width: 32px;
  aspect-ratio: 1;
  padding: 0.5rem;
  text-align: center;
  clip-path: var(--starburst);
  background: color-mix(in srgb, var(--badge-color), var(--white) 40%);

  &::before {
    /*
     * Each point is two triangular facets meeting at a ridge from the centre to the tip.
     * Facet shades are pre-computed for a light source at the top-left.
     */
    content: '';
    position: absolute;
    inset: var(--badge-border);
    z-index: -1;
    clip-path: var(--starburst);
    background: conic-gradient(
      var(--badge-color) 0 15deg,
      var(--hi2) 0 30deg,
      var(--lo1) 0 45deg,
      var(--hi1) 0 60deg,
      var(--lo2) 0 75deg,
      var(--badge-color) 0 90deg,
      var(--lo2) 0 105deg,
      var(--lo1) 0 120deg,
      var(--lo2) 0 135deg,
      var(--lo2) 0 150deg,
      var(--lo1) 0 165deg,
      var(--lo2) 0 180deg,
      var(--badge-color) 0 195deg,
      var(--lo2) 0 210deg,
      var(--hi1) 0 225deg,
      var(--lo1) 0 240deg,
      var(--hi2) 0 255deg,
      var(--badge-color) 0 270deg,
      var(--hi2) 0 285deg,
      var(--hi1) 0 300deg,
      var(--hi2) 0 315deg,
      var(--hi2) 0 330deg,
      var(--hi1) 0 345deg,
      var(--hi2) 0 360deg
    );
  }

  /* Diagonal shine that sweeps across every few seconds, beneath the text */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    z-index: -1;
    background: linear-gradient(
        115deg,
        transparent 40%,
        color-mix(in srgb, var(--white) 35%, transparent) 50%,
        transparent 60%
      )
      100% / 300% 100% no-repeat;
    animation: badge-shine 5s ease-in-out infinite;
  }

  /* Tilted like a sticker */
  .${badgeContent} {
    font-size: 12px;
    font-weight: 700;
    line-height: 1;
    color: var(--white);
  }

  &.${topLeft} {
    top: var(--badge-y-offset, 0);
    left: var(--badge-x-offset, 0);
    .${badgeContent} {
      transform: rotate(-12deg);
    }
  }
  &.${topRight} {
    top: var(--badge-y-offset, 0);
    right: var(--badge-x-offset, 0);
    .${badgeContent} {
      transform: rotate(12deg);
    }
  }
  &.${bottomLeft} {
    bottom: var(--badge-y-offset, 0);
    left: var(--badge-x-offset, 0);
    .${badgeContent} {
      transform: rotate(12deg);
    }
  }
  &.${bottomRight} {
    bottom: var(--badge-y-offset, 0);
    right: var(--badge-x-offset, 0);
    .${badgeContent} {
      transform: rotate(-12deg);
    }
  }

  @keyframes badge-shine {
    25%,
    100% {
      background-position: 0%;
    }
  }

  /* 'html.no-motion *' doesn't reach pseudo-elements */
  html.no-motion &::after {
    animation: none;
  }

  /* Base colours chosen so text holds WCAG AAA (7:1) against every facet shade */
  html.dark & {
    --badge-color: var(--secondary-700);
    --hi2: color-mix(in srgb, var(--badge-color), var(--white) 18%);
    --hi1: color-mix(in srgb, var(--badge-color), var(--white) 8%);
    --lo1: color-mix(in srgb, var(--badge-color), var(--black) 10%);
    --lo2: color-mix(in srgb, var(--badge-color), var(--black) 20%);

    .${badgeContent} {
      color: color-mix(in srgb, var(--badge-color), var(--black) 85%);
    }
  }
`;

export const POSITION_CLASSES: Record<BadgePosition, string> = {
  'top-left': topLeft,
  'top-right': topRight,
  'bottom-left': bottomLeft,
  'bottom-right': bottomRight,
};
