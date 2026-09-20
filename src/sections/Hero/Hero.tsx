import { motion, useReducedMotion } from 'framer-motion';
import styles from './Hero.module.css';
import { profile } from '../../data/portfolio';
import PaperSheet from '../../components/PaperSheet';
import Tape from '../../components/Tape';
import SocialLinks from '../../components/SocialLinks';
import { Doodle, Bird, Plant, Flower, Mushroom, BrowserWindow, Sparkle, Spiral, SquiggleArrow, Noodles, Cat } from '../../components/ChalkDoodles';
import portraitFallback from '../../assets/siddharth.jpg';

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section} id="top">
      {/* desk doodles around the sheet */}
      <Doodle className={styles.dBird} delay={1.0}><Bird /></Doodle>
      <Doodle className={styles.dPlant} delay={1.15}><Plant /></Doodle>
      <Doodle className={styles.dFlower} delay={1.3}><Flower /></Doodle>
      <Doodle className={styles.dMushroom} delay={1.45}><Mushroom /></Doodle>
      <Doodle className={styles.dWindow} delay={1.2}><BrowserWindow /></Doodle>
      <Doodle className={styles.dNoodles} delay={1.35}><Noodles /></Doodle>
      <Doodle className={styles.dCat} delay={1.5}><Cat /></Doodle>
      <Doodle className={styles.dSpiral} delay={1.4}><Spiral /></Doodle>
      <Doodle className={styles.dArrow} delay={1.55} float={false}><SquiggleArrow /></Doodle>

      <PaperSheet className={styles.sheet} from={-2}>
        <div className={styles.grid}>
          <motion.div
            className={styles.copy}
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.35 } } }}
          >
            <motion.p
              className={styles.kicker}
              variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            >
              <span className={styles.badge} aria-hidden>
                {profile.availability}
              </span>
            </motion.p>

            <motion.h1
              className={styles.name}
              variants={{ hidden: { opacity: 0, y: 22 }, show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 70, damping: 13 } } }}
            >
              {profile.firstName}
              <span className={styles.nameDot} aria-hidden>&rsquo;s</span>
              <span className={styles.nameLast}> desk</span>
            </motion.h1>

            <motion.p
              className={styles.roles}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            >
              {profile.roles.join('  •  ')}
            </motion.p>

            <motion.p
              className={styles.tagline}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            >
              {profile.tagline.plain}
              <br />
              <span className={styles.taglineHand}>{profile.tagline.hand}</span>
            </motion.p>

            <motion.p
              className={styles.location}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            >
              {profile.location}
            </motion.p>

            <motion.div variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
              <SocialLinks className={styles.socials} />
            </motion.div>

            <motion.a
              href="#work"
              className={styles.cta}
              variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
              whileHover={reduce ? undefined : { rotate: -1.5, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              see the mess →
            </motion.a>
          </motion.div>

          {/* portrait polaroid with drop-in photo slot */}
          <motion.div
            className={styles.photoWrap}
            initial={{ opacity: 0, y: 50, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ type: 'spring', stiffness: 60, damping: 12, delay: 0.7 }}
            whileHover={reduce ? undefined : { rotate: 0, scale: 1.03 }}
          >
            <Tape angle={-7} />
            <div className={styles.photoSlot}>
              <img
                src={portraitFallback}
                alt="Portrait of Siddharth Bharti"
                className={styles.photo}
              />
              <span className={styles.photoNote}>new photo loading…</span>
            </div>
            <p className={styles.photoCaption}>hello, that&rsquo;s me →</p>
          </motion.div>
        </div>

        <Sparkle className={styles.sSparkle} />
        <span className={styles.tapeEdge} aria-hidden />
      </PaperSheet>

      <motion.a
        href="#work"
        className={styles.scrollHint}
        aria-label="Scroll to work"
        initial={{ opacity: 0 }}
        animate={reduce ? { opacity: 1 } : { opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.8, duration: 1.6, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      >
        <svg viewBox="0 0 24 40" width="22" height="38" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
          <path d="M12 4 V30 M5 24 L12 32 L19 24" />
        </svg>
      </motion.a>
    </section>
  );
}
