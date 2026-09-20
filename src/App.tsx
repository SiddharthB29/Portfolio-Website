import Nav from './components/Nav';
import StampStrip from './components/StampStrip';
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
      <Nav />
      <StampStrip />
      <main>
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
