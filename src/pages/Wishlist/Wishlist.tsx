// src/pages/Wishlist/Wishlist.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoMdHeart } from 'react-icons/io';
import { IoBagHandleOutline } from 'react-icons/io5';
import './Wishlist.css';

function Wishlist() {
  const navigate = useNavigate();
  
  // Sample wishlist items
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      image: 'https://picsum.photos/400/500?random=1',
      price: '$45',
      size: 'M',
      condition: 'Like New',
      brand: "Levi's",
      title: 'Vintage Denim Jacket',
      description: 'Classic vintage denim jacket in excellent condition.'
    },
    {
      id: 2,
      image: 'https://picsum.photos/400/500?random=2',
      price: '$30',
      size: 'S',
      condition: 'Good',
      brand: 'Zara',
      title: 'Floral Summer Dress',
      description: 'Beautiful floral print dress, perfect for summer.'
    },
    {
      id: 3,
      image: 'https://picsum.photos/400/500?random=3',
      price: '$60',
      size: '8',
      condition: 'Very Good',
      brand: 'Aldo',
      title: 'Leather Ankle Boots',
      description: 'Stylish leather boots with minimal wear.'
    }
  ]);

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleRemoveFromWishlist = (itemId) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== itemId));
  };

  const handleAddToBag = (item) => {
  // Get existing cart
  const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
  
  // Check if item already exists
  const itemExists = existingCart.some(cartItem => cartItem.id === item.id);
  
  if (!itemExists) {
    existingCart.push(item);
    localStorage.setItem('cart', JSON.stringify(existingCart));
  }
  
  // Silently add to bag - no alert, no navigation
  };

  return (
    <div className="wishlist-page">
      <h1 className="wishlist-title">My Favourites</h1>

      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist">
          <p>Your wishlist is empty</p>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div
              key={item.id}
              className="wishlist-card"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div 
                className="wishlist-image"
                onClick={() => navigate(`/item/${item.id}`)}
              >
                <img src={item.image} alt={item.title} />
                
                {/* Hover overlay with bottom buttons */}
                {hoveredItem === item.id && (
                  <div className="wishlist-hover-overlay">
                    <div className="wishlist-hover-buttons">
                      <button
                        className="wishlist-icon-btn unlike-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRemoveFromWishlist(item.id);
                        }}
                        title="Unlike"
                      >
                        <IoMdHeart />
                      </button>
                      <button
                        className="wishlist-icon-btn add-bag-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleAddToBag(item);
                        }}
                        title="Add to bag"
                      >
                        <IoBagHandleOutline />
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className="wishlist-info">
                <div className="wishlist-brand">{item.brand}</div>
                <div className="wishlist-meta">
                  {item.size} / {item.condition}
                </div>
                <div className="wishlist-price">{item.price}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
