import { css } from '@linaria/core';
import './heading.tokens.css';

export const headingContainer = css`
  position: relative;
  display: flex;
`;

export const heading = css`
  /* Only the h1 rendering gets the stroked/animated treatment */
  h1& {
    position: relative;
    z-index: 1;
    color: var(--h1-fill-color);
    paint-order: stroke fill;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: var(--h1-stroke-color);
    animation: hover 5s linear infinite;
  }

  html.no-motion h1& {
    left: -4px;
    top: -4px;
  }

  @keyframes hover {
    0% {
      translate: -2px -2px;
    }
    50% {
      translate: -4px -4px;
    }
    100% {
      translate: -2px -2px;
    }
  }
`;

export const headingShadow = css`
  position: absolute;
  color: var(--h1-shadow-color);
  top: 0;
  left: 0;
`;

export const centered = css`
  justify-content: center;
  text-align: center;
`;
