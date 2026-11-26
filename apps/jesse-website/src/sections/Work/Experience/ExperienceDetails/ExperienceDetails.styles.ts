import { css } from '@linaria/core';

/*
 * Shared with ExperienceDetailsMobileDialog, which repositions it. Lives here
 * rather than in ExperienceDetails.tsx to avoid an import cycle, since
 * ExperienceDetails.tsx renders the dialog.
 */
export const closeButton = css`
  --button-size: 3rem;

  position: absolute;
  top: calc((var(--card-padding) / 2) * -1);
  right: calc((var(--card-padding) / 2) * -1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background-color: var(--primary-500);
  border-radius: 50%;
  padding: 0.5rem;
  width: var(--button-size);
  height: var(--button-size);
  border: 1px solid var(--white);
  box-shadow: var(--elevation-1);
  cursor: pointer;

  transition: background-color var(--animation);

  &:hover,
  &:focus {
    background-color: var(--secondary-600);
  }
`;

export const detailsContainer = css`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  overflow-y: auto;

  @media (min-width: 576px) {
    max-height: calc(100vh - 11rem);
  }

  @media (min-width: 1500px) {
    max-height: calc(100vh - 8rem);
  }
`;

export const experienceDetails = css`
  position: sticky;
  align-self: flex-start;
  top: 5rem;

  @media (min-width: 1500px) {
    top: 2rem;
  }
`;

export const mainTitle = css`
  background-color: var(--element-background);
  color: var(--neutral-900);
  width: 100%;

  > * {
    width: 100%;
    padding-bottom: 1rem;
  }

  h2::after {
    opacity: var(--underline-opacity, 1);
  }
`;

export const chipList = css`
  &:not(:empty) {
    margin: 1rem 0;
  }
`;

export const roleTitle = css`
  margin-top: 1rem;
  color: var(--primary-900);
  background-color: var(--element-background);
  z-index: 1;
`;

export const version = css`
  font-size: 1.5rem;
  color: var(--neutral-700);
  vertical-align: middle;
  margin-left: 1rem;
`;

export const stickyHeader = css`
  position: sticky;
  top: 0;
  z-index: 1;
  padding-bottom: 0.5rem;
  background-color: var(--element-background);
`;
