import { css } from '@linaria/core';
import { closeButton } from '../ExperienceDetails.styles';

export const card = css`
  display: flex;
  position: relative;
`;

export const experienceDetailsDialog = css`
  position: fixed;
  display: flex;
  margin: 0;
  background: none;
  border: none;
  overflow: hidden;

  &::backdrop {
    backdrop-filter: blur(3px);
    background-color: color-mix(in hsl, var(--black), transparent 50%);
  }

  &:open::backdrop {
    animation: backdrop-fade-in 250ms ease-out forwards;
  }

  &[data-exiting]::backdrop {
    animation: backdrop-fade-out 250ms ease-in forwards;
  }

  /*
   * Repositions the shared close button. Nested here so it outranks the base
   * rule on specificity rather than on which file is extracted last.
   */
  .${closeButton} {
    top: 0;
    right: 0;
    z-index: 2;
  }

  @keyframes backdrop-fade-in {
    0% {
      backdrop-filter: blur(0px);
      background-color: color-mix(in hsl, var(--black), transparent 100%);
    }

    100% {
      backdrop-filter: blur(3px);
      background-color: color-mix(in hsl, var(--black), transparent 50%);
    }
  }

  @keyframes backdrop-fade-out {
    to {
      backdrop-filter: blur(0px);
      background-color: transparent;
    }
  }
`;
