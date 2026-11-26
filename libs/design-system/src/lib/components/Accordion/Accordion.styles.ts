import { css } from '@linaria/core';

export const accordion = css`
  --animation: 100ms ease-out;

  display: block;
  width: 100%;
  background: none;
  border: none;
  font: inherit;
  color: inherit;
  text-align: inherit;
  cursor: pointer;
  position: relative;
`;

export const title = css`
  --arrow-size: 0.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  &::before {
    display: block;
    content: '';
    left: 0;
    width: 0;
    height: 0;
    border-bottom: var(--arrow-size) solid transparent;
    border-top: var(--arrow-size) solid transparent;
    border-left: var(--arrow-size) solid var(--primary-600);

    transition:
      transform var(--animation),
      border-left-color var(--animation);
  }
`;

export const expander = css`
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition: grid-template-rows var(--animation);
`;

export const content = css`
  min-height: 0;
  transition: visibility var(--animation);
  visibility: hidden;
`;

export const expanded = css`
  .${expander} {
    grid-template-rows: 1fr;
  }

  .${title}::before {
    transform: rotate(90deg);
    border-left-color: var(--secondary-600);
  }

  .${content} {
    visibility: visible;
  }
`;
