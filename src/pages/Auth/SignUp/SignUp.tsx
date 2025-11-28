// src/pages/Auth/SignUp/SignUp.tsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './SignUp.css';

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup:', formData);
    navigate('/onboarding/style-preferences');
  };

  const handleGoogleSignup = () => {
    console.log('Continue with Google');
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <div className="logo-circle"></div>
        <p className="tagline">Where Fashion Finds A Second House</p>
      </div>

      <div className="auth-box">
        <h1 className="auth-title">Create An Account</h1>
        <p className="auth-subtitle">
          Already have an account? <Link to="/login">Log in</Link>
        </p>

        <form onSubmit={handleSignup} className="auth-form">
          <div className="form-group">
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name*"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username*"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address*"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password*"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Sign Up
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button onClick={handleGoogleSignup} className="google-button">
          <FcGoogle className="google-icon" />
          Sign up with Google
        </button>
      </div>
    </div>
  );
}

export default SignUp;
