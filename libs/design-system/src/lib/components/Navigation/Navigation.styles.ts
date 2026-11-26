import { css } from '@linaria/core';
import './navigation.tokens.css';

export const iconText = css`
  max-width: 0;
  white-space: nowrap;
  overflow: hidden;
  font-weight: 500;
  transition:
    max-width 0.5s ease-in,
    max-height 0.5s ease-in;

  /* Touch screen can always see the text labels since hover is not possible */
  @media (pointer: coarse) {
    max-width: 200px !important;
    max-height: 200px !important;
  }
`;

// Styled only from the comingSoon selector below, preserving its nesting depth
export const comingSoonText = css``;

export const navItem = css`
  position: relative;
  display: flex;
  padding: var(--nav-item-vertical-padding) var(--nav-item-horizontal-padding);
  gap: 0.5rem;
  align-items: flex-end;
  overflow: hidden;
  font-size: 1rem;

  svg {
    flex-shrink: 0;
    transition: color var(--animation);
  }

  /* Pseudo element used for underline animation*/
  &::after {
    position: absolute;
    display: block;
    content: '';
    width: 0%;
    height: 1px;
    background-color: var(--primary-400);
    bottom: 0.5rem;

    transition: width 0.5s ease-in;
  }

  &:hover,
  &:focus {
    .${iconText} {
      max-width: 200px;
    }

    &::after {
      width: calc(100% - (var(--nav-item-horizontal-padding) * 2));
    }

    svg {
      animation: rotate 350ms ease-out 1;
      color: var(--nav-item-hover-color);
    }
  }

  html.no-motion & {
    .${iconText} {
      max-height: 200px;
      max-width: 200px;
    }
    &::after {
      width: 0;
    }
  }

  @keyframes rotate {
    from {
      transform: rotateY(20deg);
    }
    to {
      transform: rotateY(180deg);
    }
  }
`;

export const comingSoon = css`
  &,
  &:hover {
    cursor: default;

    svg {
      color: var(--neutral-300);
    }

    .${iconText} {
      color: var(--neutral-600);
    }

    .${comingSoonText} {
      position: absolute;
      top: 25%;
      rotate: -10deg;
      color: var(--secondary-700);
      transition-duration: 100ms;
    }

    &::after {
      display: none;
    }
  }
`;

/* Reserves space in the layout for either nav type */
export const navAnchor = css`
  /* Vertical Navigation */
  @media (min-width: 1500px) {
    width: 6rem;
  }
  /* Horizontal Navigation */
  @media (max-width: 1499px) {
    height: 6rem;
  }

  html.no-motion & {
    @media (min-width: 1500px) {
      width: 16rem;
    }
  }
`;

/* The nav group is only used to supply a11y list semantics */
export const navGroup = css`
  display: contents;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const rootNavContainer = css`
  position: fixed;
  display: flex;
  z-index: var(--nav-z-index);
  padding: 1rem;
  border: 1px solid transparent;
  border-radius: var(--radius-2);

  transition:
    box-shadow var(--animation),
    background-color var(--animation),
    width var(--animation),
    padding var(--animation),
    border var(--animation);

  a {
    color: unset;
    text-decoration: none;
  }

  /* Vertical Navigation */
  @media (min-width: 1500px) {
    flex-direction: column;
    height: calc(100svh - 4rem);
    top: 1rem;
    padding-left: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;

    &:hover,
    &:focus-within {
      border-color: var(--neutral-300);
      background: var(--element-background);
      box-shadow: var(--elevation-2);
    }
  }

  /* Horizontal Navigation */
  @media (max-width: 1499px) {
    flex-direction: row;
    height: unset;
    width: 100%;
    left: 0;
    padding: 0.25rem 0;
    justify-content: center;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-top: 0;
    border-color: var(--neutral-300);
    background: var(--element-background);
    gap: var(--nav-item-horizontal-padding);
    box-shadow: var(--elevation-1);

    .${navItem} {
      flex-direction: column;
      align-items: center;
      width: 5rem;
      gap: 0.25rem;
      padding: 0;

      .${iconText} {
        max-height: 0;
      }

      /* Horizontal nav items expand in width and height at the same time. Whereas vertical only expands horizontally*/
      &:hover .${iconText}, &:focus .${iconText} {
        max-height: 200px;
      }

      &::after {
        bottom: 0;
      }
    }
  }

  html.no-motion & {
    border-color: var(--neutral-300);
    background: var(--element-background);
    box-shadow: var(--elevation-1);
  }
`;

export const skipToContent = css`
  --skip-content-line-height: 1rem;

  max-width: unset;
  position: fixed;
  overflow: visible;
  z-index: var(--skip-to-content-index);
  background-color: var(--element-background);
  border-radius: var(--radius-2);
  font-size: 1rem;
  line-height: 1rem;
  top: calc(
    (var(--skip-content-line-height) + (var(--nav-item-vertical-padding) * 2)) *
      -1
  );
  transition: top 100ms ease-in-out;

  &:hover,
  &:focus {
    top: 0;
    color: var(--link-hover-color);
  }
`;
