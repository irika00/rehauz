// src/components/Footer/Footer.tsx
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Rehaus Section */}
      <div className="footer-section">
        <h3 className="footer-heading">Rehaus</h3>
        <ul className="footer-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/impact">Impact</a></li>
          <li><a href="/customer-service">Customer Service</a></li>
        </ul>
      </div>

      {/* Connect with us Section */}
      <div className="footer-section">
        <h3 className="footer-heading">Connect with us</h3>
        <div className="social-icons">
          <a href="#" className="social-icon">📷</a>
          <a href="#" className="social-icon">💼</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;