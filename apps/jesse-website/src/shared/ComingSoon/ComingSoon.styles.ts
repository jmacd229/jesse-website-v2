import { css } from '@linaria/core';

export const comingSoonContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const comingSoonCard = css`
  position: relative;
`;

export const hammer = css`
  --animation-width: 6rem;

  position: absolute;
  width: var(--animation-width);
  right: 0;
  top: calc(var(--animation-width) * -0.9);
  scale: -1 1;
`;
