// src/App.js
import React from 'react';
import Navbar from './components/navbar/Navigationbar.tsx';
import CategoryNav from './components/navbar/CategoryNav.tsx';
import Footer from './components/Footer/Footer.tsx';
import Login from './pages/Auth/Login/Login.tsx';
import Signup from './pages/Auth/SignUp/SignUp.tsx';
import ProductPage from './pages/ProductPage/ProductPage.tsx';
import StylePreferences from './pages/Onboarding/StylePreferences.tsx';
import SearchResults from './pages/SearchResults/SearchResults.tsx';
import Wishlist from './pages/Wishlist/Wishlist.tsx';
import ShoppingBag from './pages/ShoppingBag/ShoppingBag.tsx';
import Checkout from './pages/Checkout/Checkout.tsx';
import Home from './pages/Home/Home.tsx';
import ResolutionCentre from './pages/ResolutionCentre/ResolutionCentre.tsx';

import AboutUs from './pages/AboutUs/AboutUs.tsx';
import Impact from './pages/Impact/Impact.tsx';

import Messages from './pages/Messages/Messages.tsx';
import Profile from './pages/Profile/Profile.tsx';



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
          <Route path="/onboarding/style-preferences" element={<StylePreferences />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/shopping-bag" element={<ShoppingBag />} />
          <Route path="/checkout" element={<Checkout />} />
          
          <Route path="/home" element={<Home />} />
          <Route path="/resolution-centre" element={<ResolutionCentre />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/profile" element={<Profile />} />
          
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;