import Navbar from './components/Navbar';
import HeroHome from './components/HeroHome';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import HideSee from './components/HideSee';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';
import './receipt.css';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#0f0f12',
        backgroundImage: 'radial-gradient(circle, #3a3150 1px, transparent 1px)',
        backgroundSize: '22px 22px',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      {/* Sticky Navbar */}
      <div
        style={{
          position: 'sticky',
          top: '15px',
          zIndex: 100,
          padding: '0 20px',
        }}
      >
        <Navbar />
      </div>

      <main style={{ width: '100%' }}>
        {/* Satu gulungan struk yang keluar dari printer */}
        <div className="rc-page">
          <div className="rc-printer">
            <small>MF-2026 / THERMAL PRINTER</small>
            <i className="rc-led" />
            <div className="rc-slot" />
          </div>

          <div className="rc-paper">
            <section id="home">
              <HeroHome />
            </section>

            <section id="about">
              <AboutMe />
            </section>

            <section id="experience">
              <Experience />
            </section>

            <section id="hide-see">
              <HideSee />
            </section>

            <section id="achievements">
              <Achievements />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </div>
          <div className="rc-tear" />
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default App;
