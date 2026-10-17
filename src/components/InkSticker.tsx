/**
 * A red-ink artwork "stamped" straight onto the desk.
 * The art's baked-in black background is blended into the desk color by
 * `.art` (background-blend-mode), so only the red ink shows — then it pops
 * in on scroll and floats gently, just like the chalk doodles.
 */
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import styles from './InkSticker.module.css';

interface InkStickerProps {
  className?: string;
  delay?: number;
  children: ReactNode;
}

export default function InkSticker({ className, delay = 0.8, children }: InkStickerProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      aria-hidden
      className={className}
      style={{ position: 'absolute', pointerEvents: 'none' }}
      initial={{ scale: 0, rotate: -12, opacity: 0 }}
      whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ type: 'spring', stiffness: 160, damping: 14, delay }}
    >
      <motion.div
        animate={reduce ? undefined : { y: [0, -7, 0], rotate: [0, 1.8, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/**
 * Renders a red-ink artwork as a transparent PNG (pre-converted by
 * scripts/make-transparent.mjs) so it floats straight on the desk.
 * The wrapper must be sized (width) by the section's own CSS class.
 */
export function InkArt({ src, className, glow = true }: { src: string; className?: string; glow?: boolean }) {
  return <img aria-hidden className={`${styles.art} ${glow ? '' : styles.noGlow} ${className ?? ''}`} src={src} alt="" />;
}
