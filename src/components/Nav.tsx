import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './Nav.module.css';
import { nav } from '../data/portfolio';
import { HandCircle, Bird } from './ChalkDoodles';

/** Finds the section currently filling the viewport. */
function useActiveSection(ids: readonly string[]): string {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));
    let frame = 0;
    const updateActive = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.innerHeight * 0.35;
        const current = sections.find((section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= marker && bounds.bottom > marker;
        });
        if (current) setActive(current.id);
        else if (window.scrollY < (sections[0]?.offsetTop ?? Infinity)) setActive('');
        else if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
          setActive(ids[ids.length - 1] ?? '');
        }
      });
    };
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);
    updateActive();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
    };
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
      initial={reduce ? false : { y: -70, opacity: 0 }}
      animate={reduce ? undefined : { y: 0, opacity: 1 }}
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
          {nav.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a href={item.href} aria-current={isActive ? 'location' : undefined} className={`${styles.link} ${isActive ? styles.active : ''}`}>
                  <span className={styles.label}>{item.label}</span>
                  {isActive && (
                    <HandCircle className={styles.circle} />
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
