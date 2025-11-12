// src/components/navbar/CategoryNav.tsx
import React from 'react';
import './CategoryNav.css';

function CategoryNav() {
  return (
    <div className="category-nav">
      <a href="/women" className="category-link">Women</a>
      <a href="/men" className="category-link">Men</a>
      <a href="/brands" className="category-link">Brands</a>
      <a href="/trending" className="category-link">Trending</a>
    </div>
  );
}

export default CategoryNav;