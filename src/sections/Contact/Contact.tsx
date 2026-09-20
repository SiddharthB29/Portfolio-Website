import { motion, useReducedMotion } from 'framer-motion';
import styles from './Contact.module.css';
import { checklist, email } from '../../data/portfolio';
import SectionHeading from '../../components/SectionHeading';
import SocialLinks from '../../components/SocialLinks';
import { Doodle, Bird, Plant } from '../../components/ChalkDoodles';

export default function Contact() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section} id="contact">
      <SectionHeading kicker="what I look for" title="Let's talk" />

      <motion.div
        className={styles.sheet}
        variants={{ hidden: { opacity: 0, y: 70, rotate: -4 }, show: { opacity: 1, y: 0, rotate: -1.2, transition: { type: 'spring', stiffness: 55, damping: 13 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className={styles.kicker}>I do my best work when there&rsquo;s…</p>

        <ul className={styles.list}>
          {checklist.map((item, i) => (
            <motion.li
              key={item}
              className={styles.item}
              initial={reduce ? undefined : { opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 + i * 0.22, duration: 0.4 }}
            >
              <motion.svg
                className={styles.checkbox}
                viewBox="0 0 28 28"
                fill="none"
                stroke="var(--red)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <motion.rect
                  x="4"
                  y="4"
                  width="20"
                  height="20"
                  rx="3"
                  initial={reduce ? undefined : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.22, duration: 0.45 }}
                />
                <motion.path
                  d="M8 14 L12.5 19 L20 9"
                  initial={reduce ? undefined : { pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.75 + i * 0.22, duration: 0.35 }}
                />
              </motion.svg>
              <span className={styles.itemText}>{item}</span>
            </motion.li>
          ))}
        </ul>

        <motion.a
          className={styles.cta}
          href={`mailto:${email}?subject=Let%27s%20chat`}
          whileHover={reduce ? undefined : { rotate: -2, scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
          initial={reduce ? undefined : { opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 160, damping: 12, delay: 1.1 }}
        >
          let&rsquo;s chat!
          <span className={styles.ctaCircle} aria-hidden />
        </motion.a>

        <p className={styles.mailNote}>
          or write to me at{' '}
          <a className="redlink" href={`mailto:${email}`}>
            {email}
          </a>
        </p>

        <SocialLinks className={styles.socials} />
      </motion.div>

      <Doodle className={styles.dBird} delay={0.9}><Bird /></Doodle>
      <Doodle className={styles.dPlant} delay={1.05}><Plant /></Doodle>
    </section>
  );
}
