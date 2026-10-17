import styles from './Footer.module.css';
import { profile } from '../../data/portfolio';
import InkSticker, { InkArt } from '../../components/InkSticker';
import natsu from '../../assets/natsu.png';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <InkSticker className={styles.dNatsu} delay={0.15}><InkArt src={natsu} /></InkSticker>
      <p className={styles.note}>
        scribbled &amp; shipped by {profile.name} — {new Date().getFullYear()}
      </p>
      <a className={styles.top} href="#top">
        ↑ back to the top of the desk
      </a>
    </footer>
  );
}
