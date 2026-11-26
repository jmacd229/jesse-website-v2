import { css } from '@linaria/core';

export const principleDescription = css`
  padding: 0.5rem;
`;

export const principleCardContainer = css`
  display: flex;
  position: relative;
  transition: transform var(--animation);

  &:focus-within {
    outline: 2px solid var(--primary-500);
    border-radius: var(--radius-2);
  }

  &:hover,
  &:focus-within {
    transform: scale(1.05);

    &::before {
      opacity: 1;
      transform: translate(1rem, 0.75rem) scale(0.95, 0.9);
    }
  }
  &::before {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background-color: var(--shadow-color);
    border-radius: var(--radius-2);
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    transition:
      transform var(--animation),
      opacity var(--animation);
  }

  html.no-motion & {
    transform: none;
  }
`;

export const principleCard = css`
  position: relative;
  overflow: hidden;

  --card-padding: 0;
`;

export const principleAccordion = css`
  position: relative;
  z-index: 1;
  padding: 2rem;
`;

export const title = css`
  font-weight: 500;
`;

// Toggled on the icon when the accordion is open; styled from the icon's selector
export const expanded = css``;

export const icon = css`
  position: absolute;
  right: -1rem;
  bottom: -1rem;
  width: 8rem;
  height: 8rem;
  color: var(--primary-500);
  opacity: 0.2;
  transform: scaleX(-1);
  z-index: 0;

  &.${expanded} {
    color: var(--secondary-500);
  }

  transition: color 100ms;

  html.dark & {
    color: var(--primary-800);

    &.${expanded} {
      color: var(--secondary-800);
    }
  }
`;
