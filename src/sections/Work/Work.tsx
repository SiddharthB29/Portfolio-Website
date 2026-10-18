import styles from './Work.module.css';
import { projects } from '../../data/portfolio';
import Polaroid from '../../components/Polaroid';
import StickyNote from '../../components/StickyNote';
import SectionHeading from '../../components/SectionHeading';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp } from '../../motion/variants';
import hirenestCover from '../../assets/hirenestcover.png';
import InkSticker, { InkArt } from '../../components/InkSticker';
import aizen from '../../assets/aizen.png';
import hashira from '../../assets/hashira.png';

export default function Work() {
  const reduce = useReducedMotion();
  return (
    <section className={styles.section} id="work">
      <SectionHeading kicker="the proof" title="Work" />

      <InkSticker className={styles.dAizen} delay={0.1}><InkArt src={aizen} /></InkSticker>
      <InkSticker className={styles.dHashira} delay={0.55}><InkArt src={hashira} glow={false} /></InkSticker>

      <div className={styles.board}>
        {projects.map((p, i) => (
          <motion.div
            key={p.name}
            className={styles.cardSlot}
            variants={{ hidden: { opacity: 0, y: 60, rotate: i % 2 ? 5 : -5 }, show: { opacity: 1, y: 0, rotate: i % 2 ? 2 : -2, transition: { type: 'spring', stiffness: 55, damping: 12, delay: i * 0.12 } } }}
            initial={reduce ? false : 'hidden'}
            whileInView={reduce ? undefined : 'show'}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Polaroid caption={p.caption} tilt={i % 2 ? 2.5 : -3} href={p.href}>
              <img src={hirenestCover} alt={`${p.name} cover art`} loading="lazy" />
            </Polaroid>

            <motion.div className={styles.meta} variants={fadeUp}>
              <h3 className={styles.title}>
                {p.name}
                <span className={styles.arrows} aria-hidden> ↗</span>
              </h3>
              <div className={styles.projectLinks}>
                <a href={p.href} target="_blank" rel="noreferrer">Live demo ↗</a>
                {p.repoHref && <a href={p.repoHref} target="_blank" rel="noreferrer">GitHub ↗</a>}
              </div>
              <p className={styles.desc}>{p.description}</p>
              <ul className={styles.tags}>
                {p.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              {p.note && <p className={styles.note}>{p.note}</p>}
            </motion.div>
          </motion.div>
        ))}

        {/* empty taped frame: more coming */}
        <motion.div
          className={styles.soon}
          variants={{ hidden: { opacity: 0, y: 50, rotate: 6 }, show: { opacity: 1, y: 0, rotate: 4, transition: { type: 'spring', stiffness: 55, damping: 12, delay: 0.2 } } }}
          initial={reduce ? false : 'hidden'}
          whileInView={reduce ? undefined : 'show'}
          viewport={{ once: true, amount: 0.4 }}
        >
          <StickyNote variant="kraft" tilt={4}>
            <span className={styles.soonPlus} aria-hidden>+</span>
            <span className={styles.soonText}>more soon…</span>
          </StickyNote>
        </motion.div>
      </div>
    </section>
  );
}
