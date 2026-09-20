import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import styles from './PaperSheet.module.css';

interface PaperSheetProps {
  children: ReactNode;
  className?: string;
  /** initial toss angle */
  from?: number;
  delay?: number;
  id?: string;
}

/**
 * A big cream sheet with a hand-drawn red frame — the signature card of the site.
 * Enters like a sheet tossed onto the desk (spring settle).
 */
export default function PaperSheet({ children, className, from = -3, delay = 0, id }: PaperSheetProps) {
  return (
    <motion.div
      id={id}
      className={`${styles.sheet} paper-grain ${className ?? ''}`}
      initial={{ opacity: 0, y: 80, rotate: from * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate: from }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 55, damping: 13, delay }}
    >
      <div className={styles.frame}>{children}</div>
    </motion.div>
  );
}
