import React from 'react';
import './Contact.css';

export const Contact: React.FC = () => {
  return (
    <div className="contact-wrapper">
      {/* Container Utama Struk Contact */}
      <div className="contact-receipt-card">
        {/* Header Struk */}
        <div className="contact-receipt-header">
          <div className="receipt-meta-top">
            <span>TERMINAL #01-CONNECT</span>
            <span>LOCATION: JAKARTA, ID</span>
          </div>

          <h2 className="contact-title">
            GET IN <span className="highlight">TOUCH</span>
          </h2>
          <p className="contact-subtitle">
            [CHECKOUT SUMMARY]: Feel free to reach out via my socials or drop an email.
          </p>

          <div className="receipt-dash-line"></div>
        </div>

        {/* Content Body / Rincian Kontak */}
        <div className="contact-receipt-body">
          {/* Status availability */}
          <div className="info-row">
            <span className="info-label">AVAILABILITY</span>
            <span className="status-badge">🟢 OPEN FOR OPPORTUNITIES</span>
          </div>

          <div className="receipt-dash-line"></div>

          {/* Social Media Links List Dengan Ikon SVG */}
          <div className="contact-links-list">
            {/* EMAIL */}
            <div className="contact-item">
              <div className="item-left">
                <span className="item-no">01</span>
                <span className="item-icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </span>
                <span className="item-name">EMAIL</span>
              </div>
              <a href="mailto:medinafikantii@gmail.com" className="item-link">
                medinafikantii@gmail.com &rsaquo;
              </a>
            </div>

            {/* INSTAGRAM */}
            <div className="contact-item">
              <div className="item-left">
                <span className="item-no">02</span>
                <span className="item-icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                </span>
                <span className="item-name">INSTAGRAM</span>
              </div>
              <a
                href="https://www.instagram.com/mfnadina_?igsi=bmduZXh6aG5vNmNl"
                target="_blank"
                rel="noreferrer"
                className="item-link"
              >
                @mfnadina_ &rsaquo;
              </a>
            </div>

            {/* LINKEDIN */}
            <div className="contact-item">
              <div className="item-left">
                <span className="item-no">03</span>
                <span className="item-icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect width="4" height="12" x="2" y="9"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </span>
                <span className="item-name">LINKEDIN</span>
              </div>
              <a
                href="https://www.linkedin.com/in/medina-fikanti-8b53aa307"
                target="_blank"
                rel="noreferrer"
                className="item-link"
              >
                Medina Fikanti &rsaquo;
              </a>
            </div>

            {/* GITHUB */}
            <div className="contact-item">
              <div className="item-left">
                <span className="item-no">04</span>
                <span className="item-icon-box">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                    <path d="M9 18c-4.51 2-5-2-7-2"/>
                  </svg>
                </span>
                <span className="item-name">GITHUB</span>
              </div>
              <a
                href="https://github.com/medinafikanti25-ui"
                target="_blank"
                rel="noreferrer"
                className="item-link"
              >
                medinafikanti25-ui &rsaquo;
              </a>
            </div>
          </div>

          <div className="receipt-dash-line"></div>

          {/* Footer Barcode Struk */}
          <div className="contact-summary-footer">
            <div className="summary-row">
              <span>RESPONSE TIME:</span>
              <span className="bold-value">&lt; 24 HOURS</span>
            </div>

            <div className="contact-barcode">
              <div className="barcode-lines"></div>
              <span>THANK YOU FOR VISITING</span>
            </div>
          </div>
        </div>

        {/* Bergerigi Bawah Struk */}
        <div className="receipt-zigzag-bottom"></div>
      </div>
    </div>
  );
};

export default Contact;