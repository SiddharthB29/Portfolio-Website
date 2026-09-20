import styles from './Beliefs.module.css';
import { beliefs } from '../../data/portfolio';
import StickyNote from '../../components/StickyNote';
import SectionHeading from '../../components/SectionHeading';
import { Doodle, Fish } from '../../components/ChalkDoodles';

export default function Beliefs() {
  return (
    <section className={styles.section} id="beliefs">
      <SectionHeading kicker="3 things I strongly believe in" title="Beliefs" />

      <div className={styles.cluster}>
        {beliefs.map((b, i) => (
          <StickyNote
            key={b.text}
            variant={b.variant}
            tilt={[-4, 2.5, 5][i]}
            delay={i * 0.12}
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
