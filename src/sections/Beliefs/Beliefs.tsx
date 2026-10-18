import styles from './Beliefs.module.css';
import { useReducedMotion } from 'framer-motion';
import { beliefs } from '../../data/portfolio';
import StickyNote from '../../components/StickyNote';
import SectionHeading from '../../components/SectionHeading';
import { Doodle, Fish } from '../../components/ChalkDoodles';
import InkSticker, { InkArt } from '../../components/InkSticker';
import ichigo from '../../assets/ichigo.png';

export default function Beliefs() {
  const reduce = useReducedMotion();
  return (
    <section className={styles.section} id="beliefs">
      <SectionHeading kicker="3 things I strongly believe in" title="Beliefs" />

      <InkSticker className={styles.dIchigo} delay={0.15}><InkArt src={ichigo} /></InkSticker>

      <div className={styles.cluster}>
        {beliefs.map((b, i) => (
          <StickyNote
            key={b.text}
            variant={b.variant}
            tilt={[-4, 2.5, 5][i]}
            delay={reduce ? 0 : i * 0.12}
            className={styles.note}
          >
            <span className={styles.text}>
              {b.text.split('\n').map((line) => (
                <span key={line} className={styles.line}>
                  {line}
                </span>
              ))}
            </span>
          </StickyNote>
        ))}
      </div>

      <Doodle className={styles.fish} delay={0.8}>
        <Fish />
      </Doodle>
    </section>
  );
}
