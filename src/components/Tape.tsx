import styles from './Tape.module.css';

interface TapeProps {
  className?: string;
  /** rotation in degrees */
  angle?: number;
  variant?: 'tan' | 'red';
  /** horizontal offset, centered by default */
  x?: string;
}

export default function Tape({ className, angle = -4, variant = 'tan', x = '-50%' }: TapeProps) {
  return (
    <span
      aria-hidden
      className={`${styles.tape} ${variant === 'red' ? styles.red : ''} ${className ?? ''}`}
      style={{ transform: `translateX(${x}) rotate(${angle}deg)` }}
    />
  );
}
