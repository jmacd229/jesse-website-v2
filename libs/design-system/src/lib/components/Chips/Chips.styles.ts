import { css } from '@linaria/core';

export const chip = css`
  border-radius: var(--radius-2);
  padding: 0.25rem 0.5rem;
  border: 1px solid var(--neutral-300);
  font-size: 14px;
`;

export const chipList = css`
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
`;
