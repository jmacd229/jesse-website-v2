import { css } from '@linaria/core';
import './toggle.tokens.css';

// Toggled on the container when the switch is on; styled from its selector
export const active = css``;

export const switchHandle = css`
  display: flex;
  flex-direction: column;
  position: relative;
  left: 0;
  border-radius: 50%;
  align-items: center;
  height: 100%;
  width: var(--toggle-handle-size);
  aspect-ratio: 1 / 1;
  transition:
    left 150ms ease-in-out,
    outline-color var(--animation),
    background-color var(--animation);

  &:hover,
  &:focus {
    outline-color: var(--primary-500) !important;
    background-color: var(--primary-100) !important;
  }

  @media (min-width: 1500px) {
    flex-direction: row;
  }
`;

/* A temporary class only added on first render to calculate the label width */
export const loading = css``;

/* Only load animations onto the label after we've calculated the width and hidden the temporary class */
export const loaded = css``;

export const label = css`
  font-size: 1rem;
  white-space: nowrap;
  position: absolute;
  align-self: center;
  top: var(--toggle-label-gap);
  height: 0;
  overflow: hidden;
  background-color: var(--element-background);
  border: 0px solid var(--neutral-800);
  padding: 0 0.25rem;

  @media (min-width: 1500px) {
    top: 0;
    left: var(--toggle-label-gap);
    padding: 0.25rem 0;
    height: unset;
    width: 0;
  }

  &.${loading} {
    opacity: 0;
    padding: 0 0.5rem;
    border: 1px solid transparent;
    width: auto;
    height: 0;
  }

  &.${loaded} {
    transition:
      width var(--animation),
      border-width var(--animation),
      height var(--animation),
      padding var(--animation);
  }
`;

export const touchTarget = css`
  position: absolute;
  cursor: pointer;
  height: 60px;
  width: calc(var(--toggle-width) * 2);
  z-index: -1;
  right: -var(--toggle-width);
  top: -100%;
`;

export const switchContainer = css`
  position: relative;
  width: var(--toggle-width);
  display: flex;
  border-radius: var(--radius-2);
  height: var(--toggle-handle-size);
  cursor: pointer;
  padding: var(--toggle-padding);
  border: var(--toggle-border-width) solid transparent;

  &.${active} .${switchHandle} {
    left: calc(var(--toggle-width) - var(--toggle-handle-size));
  }

  &:focus {
    border-radius: var(--radius-2);
  }

  transition:
    border-color var(--animation),
    background-color var(--animation);

  &:hover,
  &:focus {
    border-color: var(--page-font-color);
    background-color: var(--neutral-200);

    .${switchHandle} {
      outline-color: var(--neutral-500);
      background-color: var(--element-background);
    }

    .${label} {
      height: 1rem;
      padding: 0.5rem;
      border-width: 1px;

      @media (min-width: 1500px) {
        width: 150px;
        height: unset;
      }
    }
  }

  @media (min-width: 1500px) {
    width: var(--toggle-handle-size);
    height: var(--toggle-width);
    flex-direction: column;

    .${switchHandle} {
      height: var(--toggle-handle-size);
      width: 100%;
      left: unset;
      top: 0;
    }

    &.${active} .${switchHandle} {
      top: calc(var(--toggle-width) - var(--toggle-handle-size));
      left: unset;
    }
  }
`;
