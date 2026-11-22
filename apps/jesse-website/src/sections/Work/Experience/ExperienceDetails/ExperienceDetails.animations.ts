import { Card, Chip } from '@jmacd229/design-system';
import { motion, type Variants } from 'motion/react';

const EASE = [0.4, 0, 0.2, 1] as const;

const WIPE_DURATION = 0.5;
const CONTENT_START = WIPE_DURATION - 0.1;
const SEQUENCE_DELAY = 0.12;

export const AnimatedCard = motion.create(Card);
export const AnimatedChip = motion.create(Chip);

export const cardWipeVariants: Variants = {
  hidden: {
    clipPath: 'inset(0 0 0 100%)',
    transition: { duration: 0.35, ease: EASE },
  },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    transition: {
      duration: WIPE_DURATION,
      ease: EASE,
      delayChildren: CONTENT_START,
    },
  },
};

export const sheetVariants: Variants = {
  hidden: { y: '-100%', transition: { duration: 0.25, ease: EASE } },
  visible: {
    y: 0,
    transition: { duration: 0.3, ease: EASE, delayChildren: 0.15 },
  },
};

export const closeButtonVariants: Variants = {
  hidden: { opacity: 0, transition: { duration: 0.15, ease: EASE } },
  visible: {
    opacity: 1,
    transition: { duration: 0.2, ease: EASE, delay: CONTENT_START },
  },
};

export const headerVariants: Variants = {
  hidden: { opacity: 0, '--underline-opacity': 0 },
  visible: {
    opacity: 1,
    '--underline-opacity': 1,
    transition: {
      duration: 0.2,
      ease: EASE,
      '--underline-opacity': { duration: 0.25, delay: 0.2, ease: EASE },
    },
  },
};

export const sequenceVariants: Variants = {
  visible: {
    transition: { delayChildren: SEQUENCE_DELAY, staggerChildren: 0.2 },
  },
};

export const chipSequenceVariants: Variants = {
  visible: {
    transition: {
      delayChildren: SEQUENCE_DELAY,
      staggerChildren: 0.02,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, ease: EASE } },
};

export const chipVariants: Variants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};
