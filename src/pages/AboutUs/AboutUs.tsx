// src/pages/AboutUs/AboutUs.tsx
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="about-title">About Rehaus</h1>
        <p className="about-subtitle">Where Fashion Finds A Second House</p>
      </section>

      {/* Our Story Section */}
      <section className="about-section">
        <div className="section-content">
          <h2 className="section-title">Our Story</h2>
          <p className="section-text">
            Rehaus was born from a simple belief: every piece of clothing deserves more than one life. 
            We're building India's most trusted C2C fashion marketplace where pre-loved clothes find new homes 
            and fashion lovers discover unique, affordable pieces.
          </p>
          <p className="section-text">
            In a world where fast fashion dominates, we're creating a community that values sustainability, 
            style, and the stories behind every garment. Whether you're decluttering your closet or hunting 
            for that perfect vintage find, Rehaus is your second house for fashion.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section alt-bg">
        <div className="section-content">
          <h2 className="section-title">Our Mission</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <div className="mission-icon">♻️</div>
              <h3 className="mission-card-title">Sustainable Fashion</h3>
              <p className="mission-card-text">
                Reduce textile waste by giving clothes a second life and promoting circular fashion economy.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">🤝</div>
              <h3 className="mission-card-title">Community First</h3>
              <p className="mission-card-text">
                Build a trusted community of fashion lovers who buy, sell, and share their style stories.
              </p>
            </div>
            <div className="mission-card">
              <div className="mission-icon">💰</div>
              <h3 className="mission-card-title">Affordable Style</h3>
              <p className="mission-card-text">
                Make quality fashion accessible to everyone through peer-to-peer marketplace pricing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-section">
        <div className="section-content">
          <h2 className="section-title">Our Values</h2>
          <div className="values-list">
            <div className="value-item">
              <h3 className="value-title">Trust & Transparency</h3>
              <p className="value-text">
                We believe in honest descriptions, clear photos, and authentic communication between buyers and sellers.
              </p>
            </div>
            <div className="value-item">
              <h3 className="value-title">Quality Over Quantity</h3>
              <p className="value-text">
                Every item on Rehaus is checked for quality, ensuring you get the best pre-loved pieces.
              </p>
            </div>
            <div className="value-item">
              <h3 className="value-title">Sustainability Matters</h3>
              <p className="value-text">
                We're committed to reducing fashion's environmental impact, one garment at a time.
              </p>
            </div>
            <div className="value-item">
              <h3 className="value-title">Empowering Sellers</h3>
              <p className="value-text">
                We make it easy for anyone to turn their closet into cash while helping others find great fashion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-section alt-bg">
        <div className="section-content">
          <h2 className="section-title">Join Our Movement</h2>
          <p className="section-text center">
            Rehaus is more than a marketplace—it's a movement towards sustainable, accessible, and stylish fashion. 
            Whether you're buying your first pre-loved piece or building your resale business, we're here to support you.
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary">Start Selling</button>
            <button className="cta-button secondary">Browse Fashion</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;