import { css } from '@linaria/core';

export const mainTitle = css`
  /* Allows for slight overlap into right side of page. Prevents text wrapping too early*/
  width: 130%;
`;

export const subTitle = css`
  text-align: center;
  @media (min-width: 576px) {
    text-align: start;
  }
`;

// No base styles of its own: only referenced from the containers' selectors below
export const jesse = css``;

export const textContainer = css`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  flex-shrink: 100;
  width: 100%;

  @media (min-width: 993px) {
    .${jesse} {
      display: none;
    }
  }
`;

export const headingContainer = css`
  display: flex;
  flex-direction: column;
  column-gap: 2rem;

  @media (max-width: 992px) {
    display: grid;
    grid-template-columns: auto auto;

    .${mainTitle} {
      width: 120%;
    }
  }

  .${jesse} {
    grid-column: 2;
    grid-row: 1 / span 2;
    align-self: center;
  }

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column;

    .${mainTitle} {
      text-align: center;
      width: 100%;
    }

    .${jesse} {
      order: -1;
      margin-bottom: 1rem;
      max-width: 12rem;
    }
  }
`;

export const homeContainer = css`
  display: flex;
  position: relative;
  align-items: flex-start;
  min-height: 800px;
  width: 100%;
  justify-content: space-around;
  gap: 3rem;
`;

export const introCard = css`
  position: relative;
  margin-top: 3rem;
  max-width: 48rem;
`;

export const rocket = css`
  position: absolute;
  width: 7rem;
  bottom: -4rem;
  right: -1.5rem;

  @media (min-width: 993px) {
    width: 11rem;
    bottom: -5rem;
    right: -5rem;
  }
`;

export const graphic = css`
  position: relative;
  right: 0;
  top: 2rem;
  width: 30rem;
  height: 100%;

  @media (max-width: 992px) {
    display: none;
  }
`;
