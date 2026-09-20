import styles from './Footer.module.css';
import { profile } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.note}>
        scribbled &amp; shipped by {profile.name} — {new Date().getFullYear()}
      </p>
      <a className={styles.top} href="#top">
        ↑ back to the top of the desk
      </a>
    </footer>
  );
}
