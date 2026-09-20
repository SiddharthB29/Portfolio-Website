import type { Variants } from 'framer-motion';

/** Card tossed onto the desk, then settles with a spring. */
export const cardToss: Variants = {
  hidden: { y: 60, rotate: -4, opacity: 0 },
  show: {
    y: 0,
    rotate: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 60, damping: 12 },
  },
};

/** Softer fade-up for inner content. */
export const fadeUp: Variants = {
  hidden: { y: 24, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

/** Container that staggers children. */
export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

export const springy = {
  type: 'spring' as const,
  stiffness: 260,
  damping: 20,
};

/** Idle floating for doodles: y bobbing + slight rotation. */
export const floatIdle = {
  y: [0, -8, 0],
  rotate: [0, 2, 0],
  transition: {
    duration: 5 + Math.random() * 3,
    repeat: Infinity,
    ease: 'easeInOut' as const,
  },
};
