import { motion, useReducedMotion } from 'framer-motion';
import styles from './StampStrip.module.css';

/** Tiny inline stamp glyphs (recycled doodle paths at stamp scale). */
function Glyph({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

const glyphs = [
  'M12 3 L21 20 L3 20 Z',
  'M4 12 Q12 2 20 12 Q12 22 4 12 Z',
  'M12 4 V20 M5 12 H19',
  'M6 6 Q12 10 18 6 L18 18 Q12 14 6 18 Z',
  'M12 3 L15 9 L21 9 L16 14 L18 20 L12 16 L6 20 L8 14 L3 9 L9 9 Z',
  'M4 18 Q12 4 20 18 Z',
  'M12 6 Q16 2 20 6 Q16 10 12 6 M12 6 Q8 10 4 6',
  'M5 12 H19 M12 5 V19',
  'M4 8 H20 V16 H4 Z',
  'M12 20 Q4 14 8 8 Q12 12 12 20 M12 20 Q20 14 16 8 Q12 12 12 20',
];

function Column({ side }: { side: 'left' | 'right' }) {
  const reduce = useReducedMotion();
  return (
    <motion.aside
      aria-hidden
      className={`${styles.column} ${side === 'left' ? styles.left : styles.right}`}
      initial={{ opacity: 0, x: side === 'left' ? -40 : 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
    >
      <motion.div
        animate={reduce ? undefined : { y: ['-2%', '2%', '-2%'] }}
        transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className={styles.stamp}>
            <Glyph d={glyphs[(i + (side === 'right' ? 5 : 0)) % glyphs.length]} />
          </span>
        ))}
      </motion.div>
    </motion.aside>
  );
}

export default function StampStrip() {
  return (
    <>
      <Column side="left" />
      <Column side="right" />
    </>
  );
}
