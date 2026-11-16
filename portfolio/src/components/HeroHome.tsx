import React from 'react';

export const HeroHome: React.FC = () => {
  return (
    <div className="rc-hero">
      <div className="rc-hero-head">
        <span className="rc-pill">welcome!</span>
        <div className="rc-date">
          <span>Date:</span>
          <strong>{new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' })}</strong>
        </div>
      </div>

      <h1 className="rc-name">MEDINA FIKANTI</h1>
      <p className="rc-role">DATA ANALYST / INFORMATICS ENGINEERING</p>

      <table className="rc-table">
        <thead>
          <tr>
            <th className="rc-qty">Qty</th>
            <th>Description</th>
            <th className="rc-total">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="rc-qty">1x</td>
            <td>Informatics Student</td>
            <td className="rc-total">100%</td>
          </tr>
          <tr>
            <td className="rc-qty">1x</td>
            <td>Web Development &amp; Tech Log</td>
            <td className="rc-total">PASSION</td>
          </tr>
          <tr>
            <td className="rc-qty">1x</td>
            <td>Creative Portfolio Access</td>
            <td className="rc-total">FREE</td>
          </tr>
        </tbody>
      </table>

      <div className="rc-hero-foot">
        <div className="rc-stamp">
          <span>Selected</span>
          <strong>DEVELOPER</strong>
        </div>
        <div className="rc-count">
          <span>Item Count</span>
          <strong>03</strong>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
