import { motion, useReducedMotion } from 'framer-motion';
import styles from './Skills.module.css';
import { skillGroups } from '../../data/portfolio';
import SectionHeading from '../../components/SectionHeading';
import InkSticker, { InkArt } from '../../components/InkSticker';
import kurama from '../../assets/ink/newkurama.png';

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section className={styles.section} id="skills">
      <SectionHeading kicker="tools of the trade" title="Skills" />

      <InkSticker className={styles.dKurama} delay={0.9}><InkArt src={kurama} /></InkSticker>

      <div className={styles.stack}>
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.index}
            className={styles.card}
            variants={{ hidden: { opacity: 0, y: 50, rotate: i % 2 ? 4 : -4 }, show: { opacity: 1, y: 0, rotate: i % 2 ? 1.2 : -1.2, transition: { type: 'spring', stiffness: 70, damping: 13, delay: i * 0.07 } } }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            whileHover={reduce ? undefined : { rotate: 0, scale: 1.015, y: -4, transition: { type: 'spring', stiffness: 260, damping: 16 } }}
          >
            <span className={styles.index}>{group.index}</span>
            <h3 className={styles.groupTitle}>{group.title}</h3>
            <ul className={styles.chips}>
              {group.skills.map((skill) => (
                <li key={skill} className={styles.chip}>
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
