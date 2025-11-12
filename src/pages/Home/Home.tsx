// src/pages/Home/Home.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  // Sample data for categories
  const styleCategories = [
    { id: 1, title: 'Casual', image: 'https://picsum.photos/200/200?random=1' },
    { id: 2, title: 'Formal', image: 'https://picsum.photos/200/200?random=2' },
    { id: 3, title: 'Vintage', image: 'https://picsum.photos/200/200?random=3' },
  ];

  const qualityCategories = [
    { id: 1, title: 'Like New', image: 'https://picsum.photos/200/200?random=4' },
    { id: 2, title: 'Gently Used', image: 'https://picsum.photos/200/200?random=5' },
    { id: 3, title: 'Well Loved', image: 'https://picsum.photos/200/200?random=6' },
  ];

  const priceCategories = [
    { id: 1, title: 'Under ₹500' },
    { id: 2, title: '₹500 - ₹1500' },
    { id: 3, title: 'Above ₹1500' },
  ];

  const handleCategoryClick = (category) => {
    // Navigate to search page with category filter
    navigate(`/search?category=${category}`);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-card">
            <button className="hero-button">Sell Now</button>
            <p className="hero-subtitle">See how it works</p>
          </div>
          <div className="hero-card">
            <button className="hero-button primary">Buy Now</button>
            <p className="hero-subtitle">Trending</p>
          </div>
        </div>
      </section>

      {/* Tagline Section */}
      <section className="tagline-section">
        <h1 className="tagline">Where fashion finds a second house</h1>
      </section>

      {/* Shop by Style */}
      <section className="category-section">
        <h2 className="category-title">Shop by Style</h2>
        <div className="category-grid">
          {styleCategories.map((category) => (
            <div 
              key={category.id} 
              className="category-card"
              onClick={() => handleCategoryClick(category.title)}
            >
              <div className="category-image">
                <img src={category.image} alt={category.title} />
              </div>
              <h3 className="category-name">{category.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Quality */}
      <section className="category-section">
        <h2 className="category-title">Shop by Quality</h2>
        <div className="category-grid">
          {qualityCategories.map((category) => (
            <div 
              key={category.id} 
              className="category-card"
              onClick={() => handleCategoryClick(category.title)}
            >
              <div className="category-image">
                <img src={category.image} alt={category.title} />
              </div>
              <h3 className="category-name">{category.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Shop by Price */}
      <section className="category-section">
        <h2 className="category-title">Shop by Price</h2>
        <div className="price-grid">
          {priceCategories.map((category) => (
            <div 
              key={category.id} 
              className="price-card"
              onClick={() => handleCategoryClick(category.title)}
            >
              <h3 className="price-name">{category.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;