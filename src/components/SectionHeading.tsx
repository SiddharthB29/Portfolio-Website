import { motion } from 'framer-motion';
import styles from './SectionHeading.module.css';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  /** tilts the underline */
  tilt?: number;
}

export default function SectionHeading({ kicker, title, tilt = -1.5 }: SectionHeadingProps) {
  return (
    <motion.div
      className={styles.wrap}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ type: 'spring', stiffness: 80, damping: 14 }}
    >
      {kicker && (
        <span className={styles.kicker}>
          <svg viewBox="0 0 18 18" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
            <path d="M9 2 Q10 8 9 9 Q8 10 9 16" />
            <path d="M2 9 Q8 8 9 9 Q10 10 16 9" />
          </svg>
          {kicker}
        </span>
      )}
      <h2 className={styles.title}>{title}</h2>
      <svg
        className={styles.underline}
        style={{ transform: `rotate(${tilt}deg)` }}
        viewBox="0 0 220 14"
        fill="none"
        aria-hidden
      >
        <motion.path
          d="M4 9 Q40 3 74 8 Q112 13 150 7 Q182 3 216 8"
          stroke="var(--red)"
          strokeWidth="3.4"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.25 }}
        />
      </svg>
    </motion.div>
  );
}
