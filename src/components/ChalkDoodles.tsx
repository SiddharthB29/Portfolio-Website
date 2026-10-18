/**
 * Hand-drawn SVG doodles, chalk style.
 * All are stroke-based and driven by `currentColor`, so sections tint them freely.
 * `Doodle` wraps any glyph: pops in with a spring, then idles with a gentle float.
 */
import { motion, useReducedMotion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

interface DoodleProps {
  className?: string;
  style?: CSSProperties;
}

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const floatIdle = {
  y: [0, -8, 0],
  rotate: [0, 2, 0],
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const },
};

export function Doodle({
  className,
  style,
  children,
  delay = 0.6,
  float = true,
}: DoodleProps & { children: ReactNode; delay?: number; float?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      aria-hidden
      style={{ position: 'absolute', pointerEvents: 'none', ...style }}
      initial={reduce ? false : { scale: 0, rotate: -14 }}
      animate={reduce ? undefined : { scale: 1, rotate: 0 }}
      transition={{ type: 'spring', stiffness: 180, damping: 13, delay }}
    >
      <motion.div animate={float && !reduce ? floatIdle : undefined}>{children}</motion.div>
    </motion.div>
  );
}

/* ---------- glyphs ---------- */

export function Bird({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 32" width="48" height="32" className={className} style={style}>
      <g {...base}>
        <path d="M4 26 Q13 7 24 15 Q35 7 44 26" />
        <path d="M17 20 Q24 24 31 20" />
      </g>
    </svg>
  );
}

export function Plant({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 48 56" width="48" height="56" className={className} style={style}>
      <g {...base}>
        <path d="M24 54 Q22 34 24 12" />
        <path d="M24 20 Q12 16 10 6 Q22 8 24 20" />
        <path d="M24 30 Q36 26 40 16 Q27 18 24 30" />
        <path d="M24 42 Q14 40 10 32 Q22 33 24 42" />
      </g>
    </svg>
  );
}

export function Flower({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 44 44" width="44" height="44" className={className} style={style}>
      <g {...base}>
        <circle cx="22" cy="18" r="4" />
        <path d="M22 14 Q20 6 22 4 Q26 8 24 14" />
        <path d="M26 18 Q34 14 36 18 Q32 22 26 20" />
        <path d="M22 22 Q24 30 20 32 Q16 26 20 22" />
        <path d="M18 18 Q10 20 10 16 Q14 12 18 16" />
        <path d="M22 32 Q20 40 22 42" />
      </g>
    </svg>
  );
}

export function Mushroom({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 44 40" width="44" height="40" className={className} style={style}>
      <g {...base}>
        <path d="M6 20 Q8 6 22 6 Q36 6 38 20 Q30 16 22 16 Q14 16 6 20 Z" />
        <path d="M15 20 Q14 32 16 36 L28 36 Q30 32 29 20" />
        <circle cx="16" cy="12" r="1.6" />
        <circle cx="27" cy="10" r="1.6" />
      </g>
    </svg>
  );
}

export function Cat({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 52 52" width="52" height="52" className={className} style={style}>
      <g {...base}>
        <path d="M12 46 Q8 30 16 20 L14 10 L21 16 Q26 14 31 16 L38 10 L36 20 Q44 30 40 46" />
        <circle cx="21" cy="25" r="1.4" />
        <circle cx="31" cy="25" r="1.4" />
        <path d="M24 31 Q26 33 28 31" />
        <path d="M26 35 Q26 40 22 42 M26 35 Q26 40 30 42" />
        <path d="M12 30 Q4 28 6 22 M40 30 Q48 28 46 22" />
      </g>
    </svg>
  );
}

export function Fish({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 56 36" width="56" height="36" className={className} style={style}>
      <g {...base}>
        <path d="M6 18 Q18 4 34 14 L44 8 L42 18 L44 28 L34 22 Q18 32 6 18 Z" />
        <circle cx="14" cy="16" r="1.4" />
        <circle cx="49" cy="8" r="1.6" />
        <circle cx="53" cy="4" r="1.2" />
      </g>
    </svg>
  );
}

export function Dino({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 56 44" width="56" height="44" className={className} style={style}>
      <g {...base}>
        <path d="M8 8 Q20 2 30 10 L44 14 L38 18 Q36 30 24 32 L26 40 M20 32 L20 40 M24 32 L24 40" />
        <circle cx="14" cy="10" r="1.4" />
        <path d="M30 10 Q34 12 32 16" />
        <path d="M4 12 L10 10" />
      </g>
    </svg>
  );
}

export function Noodles({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 56 44" width="56" height="44" className={className} style={style}>
      <g {...base}>
        <path d="M8 18 Q10 34 28 36 Q46 34 48 18 Z" />
        <path d="M6 18 L50 18" />
        <path d="M18 16 L40 2 M24 16 L46 4" />
        <path d="M14 24 Q28 28 42 24" />
      </g>
    </svg>
  );
}

export function Coffee({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 40 44" width="40" height="44" className={className} style={style}>
      <g {...base}>
        <path d="M8 16 L32 16 L29 38 Q20 42 11 38 Z" />
        <path d="M32 20 Q40 22 32 30" />
        <path d="M16 10 Q14 6 17 3 M23 11 Q21 7 24 4" />
      </g>
    </svg>
  );
}

export function BrowserWindow({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 96 72" width="96" height="72" className={className} style={style}>
      <g {...base}>
        <rect x="6" y="8" width="84" height="58" rx="4" />
        <path d="M6 20 L90 20" />
        <circle cx="14" cy="14" r="1.6" />
        <circle cx="21" cy="14" r="1.6" />
        <rect x="30" y="26" width="36" height="8" rx="3" />
        <path d="M16 44 Q24 40 30 46 Q38 52 46 44" />
        <path d="M58 40 L74 40 L74 56 L58 56 Z" />
        <path d="M12 58 L40 58" />
      </g>
    </svg>
  );
}

export function Sparkle({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" className={className} style={style}>
      <path d="M12 2 Q13 9 12 12 Q11 15 12 22 M2 12 Q9 11 12 12 Q15 13 22 12" {...base} />
    </svg>
  );
}

export function SquiggleArrow({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 32 48" width="32" height="48" className={className} style={style}>
      <g {...base}>
        <path d="M16 4 Q8 18 16 26 Q24 34 16 42" />
        <path d="M9 36 L16 43 L23 36" />
      </g>
    </svg>
  );
}

export function Spiral({ className, style }: DoodleProps) {
  return (
    <svg viewBox="0 0 36 36" width="36" height="36" className={className} style={style}>
      <path d="M18 18 Q20 14 16 13 Q10 12 10 19 Q10 28 19 28 Q30 28 30 17 Q30 6 18 6" {...base} />
    </svg>
  );
}

/* ---------- text doodles ---------- */

export function HandCircle({ className, style }: DoodleProps) {
  const reduce = useReducedMotion();
  /** Hand-drawn ellipse used to circle nav items / stamps. */
  return (
    <svg viewBox="0 0 120 52" className={className} style={style} fill="none" preserveAspectRatio="none">
      <motion.path
        d="M14 30 Q30 8 62 9 Q104 10 108 26 Q110 42 64 45 Q22 47 13 32 Q10 20 44 14"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0 }}
          animate={reduce ? undefined : { pathLength: 1 }}
        transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.9 }}
      />
    </svg>
  );
}
