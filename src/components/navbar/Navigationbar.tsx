// src/components/Navbar/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigationbar.css';

function Navbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const isLoggedIn = false; // For now, hardcode this. Later we'll use real auth state
  
    const handleClearSearch = () => {
      setSearchQuery('');
    };
  
    return (
      <nav className="navbar">
        {/* Logo */}
        <div className="logo">
          <h1>Rehaus</h1>
        </div>
  
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          {searchQuery && (
            <button 
              onClick={handleClearSearch}
              className="clear-button"
            >
              ✕
            </button>
          )}
        </div>
  
        {/* Right Side Actions - Changes based on login state */}
        <div className="actions">
          {isLoggedIn ? (
            // Logged IN - show profile and icons
            <>
              <button className="profile-button">My Profile</button>
              <button className="icon-button">💬</button>
              <button className="icon-button">♡</button>
              <button className="icon-button">🛍️</button>
            </>
          ) : (
            // NOT logged in - show Sign Up and Login buttons
            <>
              <button className="icon-button">♡</button>
              <button className="icon-button">🛍️</button>
              <Link to="/signup" className="signup-link">Sign Up</Link>
              <Link to="/login" className="login-button">Login</Link>
            </>
          )}
        </div>
      </nav>
    );
  }
  
  export default Navbar;