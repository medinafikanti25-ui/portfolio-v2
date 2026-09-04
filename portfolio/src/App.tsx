import Navbar from './components/Navbar';
import HeroHome from './components/HeroHome';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import HideSee from './components/HideSee';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer'; // 1. Import Footer di sini

import './App.css';

function App() {
  return (
    <div
      style={{
        backgroundColor: '#0f0f12',
        backgroundImage:
          'radial-gradient(circle, #3a3150 1px, transparent 1px)',
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
        {/* Section Home */}
        <section id="home" style={{ paddingTop: '20px' }}>
          <HeroHome />
        </section>

        {/* Section About Me */}
        <section id="about" style={{ marginTop: '40px' }}>
          <AboutMe />
        </section>

        {/* Section Experience */}
        <section id="experience" style={{ marginTop: '50px' }}>
          <Experience />
        </section>

        {/* Section Hide n SEE (Projects) */}
        <section id="hide-see" style={{ marginTop: '60px' }}>
          <HideSee />
        </section>

        {/* Section Achievements & Publications */}
        <section id="achievements" style={{ marginTop: '60px' }}>
          <Achievements />
        </section>

        {/* Section Contact */}
        <section
          id="contact"
          style={{
            marginTop: '60px',
            paddingBottom: '20px',
          }}
        >
          <Contact />
        </section>

        {/* 2. Tambahkan Footer di paling bawah */}
        <Footer />
      </main>
    </div>
  );
}

export default App;