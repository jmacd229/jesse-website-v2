import { css } from '@linaria/core';

export const experienceDetails = css`
  flex: 1 1 0;
  min-width: 0;
`;

export const experienceContainer = css`
  --details-window-gap: 8rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: flex-start;
  column-gap: var(--details-window-gap);
`;

export const experienceItems = css`
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  transition:
    left 500ms cubic-bezier(0.4, 0, 0.2, 1),
    transform 500ms cubic-bezier(0.4, 0, 0.2, 1);

  .${experienceContainer}:has(.${experienceDetails}[data-open]) & {
    left: 0;
    transform: translateX(0);
  }

  html.no-motion & {
    transition: none;
  }
`;

export const headingContainer = css`
  display: grid;
  grid-template-columns: 5rem 1fr;
  align-items: flex-end;
  column-gap: 1rem;
  margin-bottom: 3rem;
`;

export const gears = css`
  grid-row: 1 / span 2;
`;

export const instructions = css`
  align-self: flex-start;
`;

// Applied alongside spotlightHover when an item is selected; styled from its selector
export const active = css``;

export const spotlightHover = css`
  --spotlight-color: color-mix(
    in hsl,
    var(--primary-500),
    var(--element-background) 70%
  );
  cursor: pointer;
  background: radial-gradient(
    circle at 50% 100%,
    var(--spotlight-color) 0%,
    var(--element-background) 70%
  );
  background-size: 100% 350%;
  transition:
    background-size 500ms,
    border-color 500ms,
    box-shadow 500ms;

  &:hover,
  &:focus,
  &.${active} {
    background-size: 100% 100%;
    border-color: var(--primary-500);
    box-shadow: 0 3px 0 var(--secondary-700);
    h4 {
      transition: color 500ms;
    }
  }

  html.dark & {
    --spotlight-color: var(--primary-500);
  }
`;
