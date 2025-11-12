// src/components/navbar/Navbar.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navigationbar.css';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const isLoggedIn = false; // For now, hardcode this. Later we'll use real auth state

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <Link to="/home" style={{ textDecoration: 'none', color: 'inherit' }}>
          <h1>Rehaus</h1>
        </Link>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="search-container">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        {searchQuery && (
          <button 
            type="button"
            onClick={handleClearSearch}
            className="clear-button"
          >
            ✕
          </button>
        )}
      </form>

      {/* Right Side Actions - Changes based on login state */}
      <div className="actions">
        {isLoggedIn ? (
          // Logged IN - show profile and icons
          <>
            <button className="profile-button" onClick={() => navigate('/profile')}>
              My Profile
            </button>
            <button className="icon-button" onClick={() => navigate('/messages')}>💬</button>
            <button className="icon-button" onClick={() => navigate('/wishlist')}>♡</button>
            <button className="icon-button" onClick={() => navigate('/shopping-bag')}>🛍️</button>
          </>
        ) : (
          // NOT logged in - show Sign Up and Login buttons
          <>
            <button className="icon-button" onClick={() => navigate('/messages')}>💬</button>
            <button className="icon-button" onClick={() => navigate('/wishlist')}>♡</button>
            <button className="icon-button" onClick={() => navigate('/shopping-bag')}>🛍️</button>
            <Link to="/signup" className="signup-link">Sign Up</Link>
            <Link to="/login" className="login-button">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;