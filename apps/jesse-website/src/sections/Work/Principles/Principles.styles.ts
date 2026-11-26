import { css } from '@linaria/core';

export const principlesContainer = css`
  margin-bottom: 4rem;
`;

export const principles = css`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1rem;

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: flex-start;
    gap: 2rem;
  }

  @media (min-width: 993px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
  }
`;

export const mainTitle = css`
  justify-content: flex-end;
`;
