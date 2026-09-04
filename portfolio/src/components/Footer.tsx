import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="global-footer">
      {/* Running Marquee Text */}
      <div className="marquee-container">
        <div className="marquee-content">
          <span>• LET'S BUILD SOMETHING GREAT TOGETHER</span>
          <span>• OPEN FOR FREELANCE &amp; COLLABORATION</span>
          <span>• BACKEND DEVELOPER</span>
          <span>• UNIVERSITAS PAMULANG</span>
          <span>• LET'S BUILD SOMETHING GREAT TOGETHER</span>
          <span>• OPEN FOR FREELANCE &amp; COLLABORATION</span>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="footer-bottom-content">
        <div className="footer-left">
          <span className="footer-brand">MEDINA FIKANTI &copy; 2026</span>
          <p className="footer-subtext">Engineered with precision &amp; styled like a receipt.</p>
        </div>

        <button className="back-to-top-btn" onClick={scrollToTop}>
          [ BACK TO TOP &uarr; ]
        </button>
      </div>
    </footer>
  );
};

export default Footer;