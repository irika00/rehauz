// src/pages/Auth/SignUp/SignUp.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
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
  };

  const handleGoogleSignup = () => {
    console.log('Continue with Google');
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <div className="logo-circle">⬜</div>
        <p className="tagline">Where Fashion Finds A Second House</p>
      </div>

      <div className="auth-box">
        <h1>Create An Account</h1>
        <p className="auth-subtitle">
          Already have an account? <Link to="/login">Log in</Link>
        </p>

        <form onSubmit={handleSignup} className="auth-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="User Name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Register
          </button>
        </form>

        <div className="divider">
          <span>or</span>
        </div>

        <button onClick={handleGoogleSignup} className="google-button">
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default SignUp;