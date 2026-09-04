import React from 'react';
import './AboutMe.css';

export const AboutMe: React.FC = () => {
  return (
    <div className="aboutme-wrapper">
      {/* Outer Shell Ungu Tua */}
      <div className="aboutme-outer-card">
        {/* Banner Atas Canvas */}
        <div className="canvas-header-pill">
          <span>INTRODUCTION & PROFILE</span>
        </div>

        {/* Kertas Struk / Receipt Paper */}
        <div className="receipt-paper">
          {/* Header Struk */}
          <div className="receipt-header">
            <span className="section-label">• SECTION 01</span>
            <span className="receipt-title-code">STATEMENT #01 // HELLO WORLD!</span>
          </div>

          <div className="receipt-divider"></div>

          {/* Grid Utama (Kiri & Kanan) */}
          <div className="receipt-body-grid">
            {/* Kolom Kiri: Foto & Mindset */}
            <div className="left-column">
              <div className="photo-card">
                <div className="photo-badge">INFORMATICS ENGINEER</div>
                <div className="photo-frame">
                  <img
                    src="/foto-profile.jpg"
                    alt="Medina Fikanti"
                    className="profile-img"
                  />
                </div>
                <div className="photo-info">
                  <strong>Medina Fikanti</strong>
                  <div className="status-row">
                    <span>Informatics Student</span>
                    <span className="active-badge">• Active Student</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Info Bio & Tech */}
            <div className="right-column">
              <h1 className="hero-title">
                hi, I'm <span className="purple-text">Medina Fikanti</span>
              </h1>
              <h2 className="hero-subtitle">
                Informatics Engineering Student 
              </h2>

              <p className="bio-text">
                I am an Informatics student with a strong passion for backend engineering. 
                I enjoy building reliable server-side applications, designing REST APIs, and optimizing databases. 
                Currently sharpening my skills in Node.js, MySQL, and modern backend tech.
              </p>

              {/* Grid Kampus & Fokus */}
              <div className="info-boxes-grid">
                <div className="info-card">
                  <span className="card-tag">UNIVERSITY</span>
                  <h3>Pamulang University</h3>
                  <p>Undergraduate Informatics Engineering Student</p>
                </div>

                <div className="info-card">
                  <span className="card-tag">FOCUS</span>
                  <h3>Informatics Engineering</h3>
                  <p>Backend Developer</p>
                </div>
              </div>

              {/* Core Tech Box */}
              <div className="tech-box">
                <div className="tech-box-header">
                  <span>CORE TECHNOLOGIES & TOOLS</span>
                  <span className="handwriting-sub">// my daily driver</span>
                </div>
                <div className="tech-list">
                  <span>• Node.js</span>
                  <span>• REST API</span>
                  <span>• Web Administration</span>
                  <span>• Git</span>
                  <span>• MySQL</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="button-group">
                <a href="#hide-see" className="btn-solid-purple">
                  View Projects & Works &rsaquo;
                </a>
                <a href="#contact" className="btn-outline-gray">
                  Contact Me
                </a>
                <a
                  href="/CV-Medina.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gray"
                >
                  Resume
                </a>
              </div>
            </div>
          </div>

          {/* Footer Struk + Barcode */}
          <div className="receipt-footer">
            <div className="receipt-divider"></div>
            <div className="footer-info">
              <span>Designed with passion & engineered with precision</span>
              <strong>Medina Fikanti</strong>
            </div>
            <div className="barcode-wrapper">
              <div className="css-barcode"></div>
              <span className="barcode-text">PROFILE-VERIFIED-2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;