import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './Nav.module.css';
import { nav } from '../data/portfolio';
import { HandCircle, Bird } from './ChalkDoodles';

/** Finds the section currently filling the viewport. */
function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export default function Nav() {
  const reduce = useReducedMotion();
  const active = useActiveSection(nav.map((n) => n.href.slice(1)));
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 70, damping: 14, delay: 0.25 }}
    >
      <nav className={styles.nav} aria-label="Primary">
        <span className={styles.doodles} aria-hidden>
          <motion.span
            className={styles.doodleBird}
            animate={reduce ? undefined : { rotate: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Bird />
          </motion.span>
          <span className={styles.smile}>
            <svg viewBox="0 0 40 40" width="34" height="34" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <circle cx="20" cy="18" r="9" />
              <circle cx="17" cy="16" r="1" fill="currentColor" />
              <circle cx="23" cy="16" r="1" fill="currentColor" />
              <path d="M16 21 Q20 25 24 21" />
              <path d="M8 30 Q12 34 16 30" />
            </svg>
          </span>
        </span>

        <ul className={styles.links}>
          {nav.map((item, i) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a href={item.href} className={`${styles.link} ${isActive ? styles.active : ''}`}>
                  <span className={styles.label}>{item.label}</span>
                  {isActive && (
                    <HandCircle className={styles.circle} />
                  )}
                  {i === 0 && (
                    <span className={styles.progressTag}>in-progress</span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </motion.header>
  );
}
