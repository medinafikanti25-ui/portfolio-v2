import React, { useState } from 'react';
import './Navbar.css';

interface NavItem {
  label: string;
  href: string;
  isSpecial?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Me', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Hide n SEE', href: '#hide-see', isSpecial: true },
  { label: 'Achievment', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('#home');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    setActiveSection(href);
    setIsOpen(false); // Otomatis tutup menu HP saat salah satu item diklik

    const target = document.querySelector(href);

    if (target) {
      const navbarOffset = 100;
      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        navbarOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="stitch-navbar">
      <div className="navbar-left">
        <div className="logo-badge">M</div>
        <div className="logo-text">
          <span className="logo-title">Hi, Curious?</span>
          <span className="logo-sub">MEDINA</span>
        </div>
      </div>

      {/* Hamburger Button untuk Tampilan HP */}
      <button 
        className={`receipt-hamburger ${isOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`navbar-center-pill ${isOpen ? 'open' : ''}`}>
        {navItems.map((item) => {
          const isActive = activeSection === item.href;

          if (item.isSpecial) {
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href)}
                className={`stitch-nav-link hide-see-link ${isActive ? 'active' : ''}`}
              >
                Hide n <span className="see-text">SEE</span>
              </a>
            );
          }

          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className={`stitch-nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      <div className="navbar-right-cta">
        <button className="status-badge">Open to Opportunities</button>
        <a
          href="#contact"
          onClick={(event) => handleNavClick(event, '#contact')}
          className="get-in-touch-btn"
        >
          Get in Touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;