// src/pages/Impact/Impact.tsx
import React from 'react';
import './Impact.css';

function Impact() {
  // Sample statistics (you can update these with real data later)
  const stats = {
    itemsResold: '10,000+',
    co2Saved: '25,000 kg',
    waterSaved: '500,000 L',
    activeUsers: '5,000+'
  };

  return (
    <div className="impact-page">
      {/* Hero Section */}
      <section className="impact-hero">
        <h1 className="impact-title">Our Environmental Impact</h1>
        <p className="impact-subtitle">Making a difference, one garment at a time</p>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-content">
          <h2 className="stats-heading">Impact So Far</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{stats.itemsResold}</div>
              <div className="stat-label">Items Given Second Life</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.co2Saved}</div>
              <div className="stat-label">CO₂ Emissions Saved</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.waterSaved}</div>
              <div className="stat-label">Water Conserved</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{stats.activeUsers}</div>
              <div className="stat-label">Community Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="impact-section">
        <div className="section-content">
          <h2 className="section-title">Why Pre-Loved Fashion Matters</h2>
          <div className="impact-reasons">
            <div className="reason-card">
              <div className="reason-icon">🌍</div>
              <h3 className="reason-title">Reducing Fashion Waste</h3>
              <p className="reason-text">
                The fashion industry is one of the largest polluters globally. By choosing pre-loved fashion, 
                we keep clothes out of landfills and reduce the demand for new production.
              </p>
              <div className="reason-stat">
                <strong>92 million tons</strong> of textile waste is produced each year globally
              </div>
            </div>

            <div className="reason-card">
              <div className="reason-icon">💧</div>
              <h3 className="reason-title">Conserving Water</h3>
              <p className="reason-text">
                Manufacturing a single cotton t-shirt requires approximately 2,700 liters of water. 
                When you buy pre-loved, you save all that water from being used in new production.
              </p>
              <div className="reason-stat">
                <strong>2,700 liters</strong> of water saved per pre-loved t-shirt
              </div>
            </div>

            <div className="reason-card">
              <div className="reason-icon">🏭</div>
              <h3 className="reason-title">Lowering Carbon Footprint</h3>
              <p className="reason-text">
                The fashion industry accounts for 10% of global carbon emissions. Choosing second-hand 
                reduces the carbon footprint by up to 82% compared to buying new.
              </p>
              <div className="reason-stat">
                <strong>82% less</strong> carbon emissions per pre-loved item
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="impact-section alt-bg">
        <div className="section-content">
          <h2 className="section-title">Our Sustainability Commitments</h2>
          <div className="commitments-list">
            <div className="commitment-item">
              <div className="commitment-number">01</div>
              <div className="commitment-content">
                <h3 className="commitment-title">Carbon-Neutral Shipping</h3>
                <p className="commitment-text">
                  We partner with eco-friendly logistics providers and offset carbon emissions from all deliveries.
                </p>
              </div>
            </div>

            <div className="commitment-item">
              <div className="commitment-number">02</div>
              <div className="commitment-content">
                <h3 className="commitment-title">Sustainable Packaging</h3>
                <p className="commitment-text">
                  All packaging materials are recyclable, biodegradable, or reusable. We encourage sellers to use 
                  eco-friendly packaging options.
                </p>
              </div>
            </div>

            <div className="commitment-item">
              <div className="commitment-number">03</div>
              <div className="commitment-content">
                <h3 className="commitment-title">Education & Awareness</h3>
                <p className="commitment-text">
                  We actively educate our community about sustainable fashion practices and the environmental 
                  impact of their choices.
                </p>
              </div>
            </div>

            <div className="commitment-item">
              <div className="commitment-number">04</div>
              <div className="commitment-content">
                <h3 className="commitment-title">Circular Economy</h3>
                <p className="commitment-text">
                  We're building a circular fashion economy where clothes are continuously reused, repaired, 
                  and recycled rather than discarded.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="impact-section cta-section">
        <div className="section-content">
          <h2 className="section-title">Be Part of the Change</h2>
          <p className="cta-text">
            Every item you buy or sell on Rehaus contributes to a more sustainable fashion future. 
            Join thousands of conscious consumers making a difference today.
          </p>
          <div className="impact-cta-buttons">
            <button className="impact-cta-button primary">Start Shopping</button>
            <button className="impact-cta-button secondary">Sell Your Items</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Impact;