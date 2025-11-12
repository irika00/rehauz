// src/pages/Profile/Profile.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('purchases');

  // Sample user data
  const user = {
    name: 'Priya Sharma',
    email: 'priya.sharma@email.com',
    joinDate: 'January 2024',
    avatar: '👩'
  };

  // Sample purchases
  const purchases = [
    {
      id: 1,
      name: 'Vintage Denim Jacket',
      price: 45,
      image: 'https://picsum.photos/150/150?random=20',
      date: 'Nov 1, 2024',
      status: 'Delivered'
    },
    {
      id: 2,
      name: 'Floral Summer Dress',
      price: 30,
      image: 'https://picsum.photos/150/150?random=21',
      date: 'Oct 28, 2024',
      status: 'Delivered'
    },
    {
      id: 3,
      name: 'Leather Ankle Boots',
      price: 60,
      image: 'https://picsum.photos/150/150?random=22',
      date: 'Oct 15, 2024',
      status: 'Delivered'
    }
  ];

  // Sample items sold
  const sold = [
    {
      id: 1,
      name: 'Black Leather Handbag',
      price: 55,
      image: 'https://picsum.photos/150/150?random=30',
      date: 'Nov 5, 2024',
      status: 'Sold'
    },
    {
      id: 2,
      name: 'Silk Scarf',
      price: 20,
      image: 'https://picsum.photos/150/150?random=31',
      date: 'Oct 20, 2024',
      status: 'Sold'
    }
  ];

  return (
    <div className="profile-page">
      <div className="profile-container">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">{user.avatar}</div>
          <div className="profile-info">
            <h1 className="profile-name">{user.name}</h1>
            <p className="profile-email">{user.email}</p>
            <p className="profile-join-date">Member since {user.joinDate}</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="profile-stats">
          <div className="stat-item">
            <div className="stat-number">{purchases.length}</div>
            <div className="stat-label">Purchases</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">{sold.length}</div>
            <div className="stat-label">Items Sold</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">5.0</div>
            <div className="stat-label">Rating</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="profile-tabs">
          <button
            className={`tab-button ${activeTab === 'purchases' ? 'active' : ''}`}
            onClick={() => setActiveTab('purchases')}
          >
            My Purchases
          </button>
          <button
            className={`tab-button ${activeTab === 'sold' ? 'active' : ''}`}
            onClick={() => setActiveTab('sold')}
          >
            Items Sold
          </button>
        </div>

        {/* Content Area */}
        <div className="profile-content">
          {activeTab === 'purchases' && (
            <div className="items-grid">
              {purchases.length > 0 ? (
                purchases.map((item) => (
                  <div key={item.id} className="profile-item-card">
                    <div className="profile-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="profile-item-details">
                      <h3 className="profile-item-name">{item.name}</h3>
                      <p className="profile-item-price">${item.price}</p>
                      <p className="profile-item-date">{item.date}</p>
                      <span className="profile-item-status delivered">{item.status}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <p>No purchases yet</p>
                  <button className="browse-button" onClick={() => navigate('/home')}>
                    Start Shopping
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'sold' && (
            <div className="items-grid">
              {sold.length > 0 ? (
                sold.map((item) => (
                  <div key={item.id} className="profile-item-card">
                    <div className="profile-item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="profile-item-details">
                      <h3 className="profile-item-name">{item.name}</h3>
                      <p className="profile-item-price">${item.price}</p>
                      <p className="profile-item-date">{item.date}</p>
                      <span className="profile-item-status sold">{item.status}</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">
                  <p>No items sold yet</p>
                  <button className="browse-button" onClick={() => navigate('/home')}>
                    Start Selling
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;