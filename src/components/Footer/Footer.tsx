// src/components/Footer/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      {/* Rehaus Section */}
      <div className="footer-section">
        <h3 className="footer-heading">Rehaus</h3>
        <ul className="footer-links">
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/impact">Impact</Link></li>
          <li><Link to="/resolution-centre">Customer Service</Link></li>
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