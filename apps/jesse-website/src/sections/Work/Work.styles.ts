import { css } from '@linaria/core';

export const workContainer = css`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  /* Ensure the container is displayed over the image mask of the about section */
  z-index: 1;
`;

export const mainTitle = css`
  align-self: center;
  margin-bottom: 3rem;
`;
