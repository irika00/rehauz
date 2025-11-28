// src/pages/Auth/Login/Login.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  const handleGoogleLogin = () => {
    console.log('Continue with Google');
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <div className="logo-circle"></div>
        <p className="tagline">Where Fashion Finds A Second House</p>
      </div>

      <div className="auth-box">
        <h1 className="auth-title">Log In</h1>
        <p className="auth-subtitle">
          Don't have an account? <Link to="/signup">Create an account</Link>
        </p>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email*"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password*"
              required
            />
            <a href="/forgot-password" className="forgot-link">Forgot Password?</a>
          </div>

          <button type="submit" className="auth-button">
            Log In
          </button>
        </form>

        <div className="divider">
          <span>OR</span>
        </div>

        <button onClick={handleGoogleLogin} className="google-button">
          <FcGoogle className="google-icon" />
          Continue with Google
        </button>
      </div>
    </div>
  );
}

export default Login;
