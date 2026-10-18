import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import styles from './Polaroid.module.css';
import Tape from './Tape';

interface PolaroidProps {
  children: ReactNode;
  caption: string;
  /** resting tilt; hover straightens to ~0deg */
  tilt?: number;
  href?: string;
  delay?: number;
  className?: string;
}

/**
 * A taped photo card: rests at a jaunty angle, straightens + lifts on hover.
 * Wrap in motion parent staggering via variants — or pass delay.
 */
export default function Polaroid({
  children,
  caption,
  tilt = -3,
  href,
  delay = 0,
  className,
}: PolaroidProps) {
  const reduce = useReducedMotion();
  const restRotate = reduce ? 0 : tilt;

  const card = (
    <motion.figure
      className={`${styles.card} paper-grain ${className ?? ''}`}
      style={{ rotate: restRotate }}
      initial={reduce ? false : { opacity: 0, y: 60, rotate: restRotate - 6 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: restRotate }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 60, damping: 12, delay }}
      whileHover={
        reduce
          ? undefined
          : { rotate: 0, scale: 1.05, y: -10, zIndex: 5, transition: { type: 'spring', stiffness: 300, damping: 17 } }
      }
    >
      <Tape angle={tilt > 0 ? -6 : 6} />
      <div className={styles.photo}>{children}</div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </motion.figure>
  );

  return href ? (
    <a className={styles.link} href={href} target="_blank" rel="noreferrer">
      {card}
    </a>
  ) : (
    card
  );
}
