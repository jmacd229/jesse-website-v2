import { css } from '@linaria/core';

export const workExperienceContent = css`
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 0.25rem;
`;

export const workExperienceVersion = css`
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  background-color: var(--primary-500);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  width: 1.5rem;
  height: 1.5rem;
  box-shadow: var(--elevation-1);
  font-family: 'Inter';
`;

export const workExperienceDate = css`
  position: relative;
  white-space: nowrap;
  bottom: 0;
  color: var(--neutral-600);
  background-color: var(--element-background);
  border-radius: var(--radius-1);
  border: 1px solid var(--neutral-300);
  box-shadow: var(--elevation-1);
  padding: 0.25rem 0.5rem;
  transition:
    color 500ms,
    font-weight 500ms;
`;

export const workExperience = css`
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    .${workExperienceContent} {
      transform: scale(1.2) translateY(-1rem);
    }

    .${workExperienceVersion} {
      background-color: var(--primary-700);
      transform: scale(1.2) translateX(0.5rem);
    }

    .${workExperienceDate} {
      color: var(--primary-900);
      font-weight: 500;
    }
  }

  html.dark & {
    --logo-color: var(--white);
  }

  html.no-motion & {
    .${workExperienceContent}, .${workExperienceVersion} {
      transform: none;
    }
  }
`;

export const workExperienceTitle = css`
  color: var(--neutral-900);
  font-size: 1.5rem;
  font-weight: 400;
`;

export const workExperienceIcon = css`
  height: 100%;
  overflow: hidden;
`;

export const workExperienceDateAnchor = css`
  height: 1px;
`;
