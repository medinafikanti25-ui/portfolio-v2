import React from 'react';
import './HeroHome.css';

export const HeroHome: React.FC = () => {
  return (
    <div className="hero-receipt-wrapper">
      {/* Mesin Printer / Slot Mesin */}
      <div className="printer-machine">
        <div className="printer-slot"></div>
      </div>

      {/* Kertas Struk Keluar */}
      <div className="receipt-paper">
        {/* Ring Gerigi / Lubang Struk Atas */}
        <div className="receipt-zigzag-top"></div>

        <div className="receipt-content">
          {/* Badge Header Struk */}
          <div className="receipt-header">
            <span className="receipt-pill-title">welcome!</span>
            <div className="receipt-date">
              <span>Date:</span>
              <strong>{new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</strong>
            </div>
          </div>

          {/* Tabel Struk */}
          <table className="receipt-table">
            <thead>
              <tr>
                <th className="col-qty">Qty</th>
                <th className="col-desc">Description</th>
                <th className="col-total">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="col-qty">1x</td>
                <td className="col-desc">Informatics Student</td>
                <td className="col-total">100%</td>
              </tr>
              <tr>
                <td className="col-qty">1x</td>
                <td className="col-desc">Web Development & Tech Log</td>
                <td className="col-total">PASSION</td>
              </tr>
              <tr>
                <td className="col-qty">1x</td>
                <td className="col-desc">Creative Portfolio Access</td>
                <td className="col-total">FREE</td>
              </tr>
            </tbody>
          </table>

          {/* Footer Struk */}
          <div className="receipt-footer">
            <div className="selected-stamp">
              <span>Selected</span>
              <strong>DEVELOPER</strong>
            </div>
            <div className="big-total-code">
              <span>Item Count</span>
              <strong className="grand-number">03</strong>
            </div>
          </div>

          {/* Stempel / Tanda Tangan Latin */}
          <div className="receipt-signature">
            <p>Thank you for visiting!</p>
            <span className="script-sign">Medina Fikanti</span>
          </div>
        </div>

        {/* Gerigi Bawah Kertas */}
        <div className="receipt-zigzag-bottom"></div>
      </div>
    </div>
  );
};

export default HeroHome;