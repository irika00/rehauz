// src/components/navbar/Navbar.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FiHeart,
  FiUser,
  FiSearch
} from 'react-icons/fi';
import { IoMdHeartEmpty } from "react-icons/io";
import { IoBagHandleOutline } from "react-icons/io5";
import { GoMail } from "react-icons/go";
import { HiPlus } from "react-icons/hi2";
import logo from '../../assets/images/logo.png';
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
          <img src={logo} alt="Rehaus Logo" className="logo-img" />
        </Link>
      </div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="search-container">
        <FiSearch className= "search-icon" />
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
              <FiUser /> My Profile
            </button>
            <button className="sell-button" onClick={() => navigate('/sell')} title="Add a listing">
              <HiPlus />
            </button>
            <button className="icon-button" onClick={() => navigate('/messages')}>
              <GoMail />
            </button>
            <button className="icon-button" onClick={() => navigate('/wishlist')}>
              <IoMdHeartEmpty/>
            </button>
            <button className="icon-button" onClick={() => navigate('/shopping-bag')}>
              <IoBagHandleOutline />
            </button>
          </>
        ) : (
          // NOT logged in - show Sign Up and Login buttons
          <>
            <button className="sell-button" onClick={() => navigate('/sell')} title="Add a listing">
              <HiPlus />
            </button>
            <button className="icon-button" onClick={() => navigate('/messages')}>
              <GoMail />
            </button>
            <button className="icon-button" onClick={() => navigate('/wishlist')}>
              <IoMdHeartEmpty />
            </button>
            <button className="icon-button" onClick={() => navigate('/shopping-bag')}>
              <IoBagHandleOutline />
            </button>
            <Link to="/signup" className="signup-link">Sign Up</Link>
            <Link to="/login" className="login-button">Login</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
