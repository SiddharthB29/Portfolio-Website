import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import styles from './StickyNote.module.css';

interface StickyNoteProps {
  children: ReactNode;
  variant?: 'lined' | 'graph' | 'kraft';
  tilt?: number;
  delay?: number;
  className?: string;
}

/** Sticky/scrap note in three paper styles; hovers with a springy wobble. */
export default function StickyNote({
  children,
  variant = 'kraft',
  tilt = -2,
  delay = 0,
  className,
}: StickyNoteProps) {
  const reduce = useReducedMotion();
  const restRotate = reduce ? 0 : tilt;

  return (
    <motion.div
      className={`${styles.note} ${styles[variant]} paper-grain ${className ?? ''}`}
      style={{ rotate: restRotate }}
      initial={reduce ? false : { opacity: 0, y: 40, rotate: restRotate - 5 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, rotate: restRotate }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: 'spring', stiffness: 90, damping: 11, delay }}
      whileHover={
        reduce
          ? undefined
          : { rotate: restRotate + 3, scale: 1.06, y: -6, transition: { type: 'spring', stiffness: 300, damping: 14 } }
      }
    >
      {children}
    </motion.div>
  );
}
