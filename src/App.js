// src/App.js
import React from 'react';
import Navbar from './components/navbar/Navigationbar.tsx';
import CategoryNav from './components/navbar/CategoryNav.tsx';
import Footer from './components/Footer/Footer.tsx';
import Login from './pages/Auth/Login/Login.tsx';
import Signup from './pages/Auth/SignUp/SignUp.tsx';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <CategoryNav />
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
