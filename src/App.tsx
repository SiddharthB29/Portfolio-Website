import Nav from './components/Nav';
import Hero from './sections/Hero/Hero';
import Work from './sections/Work/Work';
import Stats from './sections/Stats/Stats';
import Skills from './sections/Skills/Skills';
import Beliefs from './sections/Beliefs/Beliefs';
import Contact from './sections/Contact/Contact';
import Footer from './sections/Footer/Footer';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Work />
        <Stats />
        <Skills />
        <Beliefs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
