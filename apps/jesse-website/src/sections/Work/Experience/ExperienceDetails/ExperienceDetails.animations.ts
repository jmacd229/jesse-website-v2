import { Card } from '@jmacd229/design-system';
import { motion, type Variants } from 'motion/react';

const EASE = [0.4, 0, 0.2, 1] as const;

const WIPE_DURATION = 0.5;

export const AnimatedCard = motion(Card);

export const cardWipeVariants: Variants = {
  hidden: {
    clipPath: 'inset(0 0 0 100%)',
    transition: { duration: 0.35, ease: EASE },
  },
  visible: {
    clipPath: 'inset(0 0 0 0)',
    transition: { duration: WIPE_DURATION, ease: EASE },
  },
};

export const cardRevealVariants: Variants = {
  hidden: { opacity: 0, transition: { duration: 0.15, ease: EASE } },
  visible: {
    opacity: 1,
    transition: { duration: 0.3, ease: EASE, delay: WIPE_DURATION },
  },
};

export const contentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.35, ease: EASE, delay: 0.06 },
  },
  exit: { opacity: 0, transition: { duration: 0.12, ease: EASE } },
};
