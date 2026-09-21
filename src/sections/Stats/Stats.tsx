import { motion, useReducedMotion } from 'framer-motion';
import styles from './Stats.module.css';
import { stats } from '../../data/portfolio';
import Polaroid from '../../components/Polaroid';
import SectionHeading from '../../components/SectionHeading';
import CountUp from '../../components/CountUp';
import { HandCircle } from '../../components/ChalkDoodles';
import InkSticker, { InkArt } from '../../components/InkSticker';
import rings from '../../assets/leetcode-rings.jpg';
import konoha from '../../assets/ink/konohanew.png';

export default function Stats() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section} id="stats">
      <SectionHeading kicker="the grind, quantified" title="Stats" />

      <InkSticker className={styles.dKonoha} delay={0.9}><InkArt src={konoha} /></InkSticker>

      <div className={styles.layout}>
        <motion.div
          className={styles.photoSlot}
          variants={{ hidden: { opacity: 0, y: 60, rotate: -8 }, show: { opacity: 1, y: 0, rotate: -3, transition: { type: 'spring', stiffness: 55, damping: 12 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Polaroid caption="orbiting leetcode" tilt={-3} href={stats.profileUrl}>
            <img src={rings} alt="Glowing orbit rings artwork" loading="lazy" />
          </Polaroid>
        </motion.div>

        <motion.div
          className={styles.card}
          variants={{ hidden: { opacity: 0, y: 60, rotate: 5 }, show: { opacity: 1, y: 0, rotate: 1.5, transition: { type: 'spring', stiffness: 55, damping: 12, delay: 0.15 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className={styles.graphCard}>
            <p className={styles.handle}>
              {stats.handle} <span className={styles.on}>on LeetCode</span>
            </p>

            <div className={styles.numbers}>
              <div className={styles.numBlock}>
                <span className={styles.num}>
                  <CountUp to={stats.problemsSolved} suffix="+" />
                </span>
                <span className={styles.numLabel}>problems solved</span>
              </div>
              <div className={styles.divider} aria-hidden />
              <div className={styles.numBlock}>
                <span className={styles.num}>
                  <CountUp to={stats.maxContestRating} />
                </span>
                <span className={styles.numLabel}>max contest rating</span>
              </div>
            </div>

            <a className={styles.profileLink} href={stats.profileUrl} target="_blank" rel="noreferrer">
              peek the profile ↗
            </a>

            <motion.div
              className={styles.stamp}
              animate={reduce ? undefined : { rotate: [4, -6, 3, -3, 4] }}
              transition={{ duration: 0.5, delay: 1.2, repeat: 0 }}
              aria-hidden
            >
              {stats.stamp}
              <HandCircle className={styles.stampCircle} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
