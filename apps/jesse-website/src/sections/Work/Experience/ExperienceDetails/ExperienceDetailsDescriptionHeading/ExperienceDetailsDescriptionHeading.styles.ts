import { css } from '@linaria/core';

export const workItemHeading = css`
  display: flex;
  margin-top: 1.75rem;
  margin-bottom: 0.5rem;
  gap: 1rem;

  a {
    white-space: nowrap;
    svg {
      color: var(--secondary-700);
      vertical-align: text-bottom;
    }
  }

  &:has(a) {
    border: 1px solid var(--neutral-700);
    padding: 1rem;
    border-radius: var(--radius-1);
    background-color: var(--neutral-200);
    margin-top: 0.5rem;
  }
`;

export const centeredHeading = css`
  justify-content: center;
  text-align: center;
`;
