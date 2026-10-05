import About from './components/About/About.jsx';
import CTA from './components/CTA/CTA.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Hero from './components/Hero/Hero.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Portfolio from './components/Portfolio/Portfolio.jsx';
import Process from './components/Process/Process.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import Services from './components/Services/Services.jsx';
import Skills from './components/Skills/Skills.jsx';
import WhyUs from './components/WhyUs/WhyUs.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyUs />
        <Services />
        <Portfolio />
        <Process />
        <Reviews />
        <Skills />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
