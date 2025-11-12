// src/pages/ShoppingBag/ShoppingBag.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ShoppingBag.css';

function ShoppingBag() {
  const navigate = useNavigate();

  // Sample bag items (later this will come from your backend/Supabase)
  const [bagItems, setBagItems] = useState([
    { 
      id: 1, 
      name: 'Vintage Denim Jacket', 
      price: 45, 
      description: 'Classic vintage denim jacket in excellent condition.',
      image: 'https://picsum.photos/150/150?random=50'
    },
    { 
      id: 2, 
      name: 'Floral Summer Dress', 
      price: 30, 
      description: 'Beautiful floral print dress, perfect for summer.',
      image: 'https://picsum.photos/150/150?random=51'
    },
    { 
      id: 3, 
      name: 'Leather Ankle Boots', 
      price: 60, 
      description: 'Stylish leather boots with minimal wear.',
      image: 'https://picsum.photos/150/150?random=52'
    },
  ]);

  // Calculate total price
  const totalPrice = bagItems.reduce((sum, item) => sum + item.price, 0);

  // Remove item from bag
  const removeItem = (itemId) => {
    setBagItems(bagItems.filter(item => item.id !== itemId));
  };

  // Navigate to checkout with all items
  const handleCheckout = () => {
    if (bagItems.length === 0) {
      alert('Your bag is empty!');
      return;
    }
    
    navigate('/checkout', {
      state: {
        cartItems: bagItems,
        sellerName: 'Rehaus Marketplace'
      }
    });
  };

  // Navigate to checkout with single item
  const handleIndividualCheckout = (item) => {
    navigate('/checkout', {
      state: {
        cartItems: [item],
        sellerName: 'Rehaus Marketplace'
      }
    });
  };

  return (
    <div className="shopping-bag-page">
      <h1 className="bag-title">Shopping Bag</h1>

      {bagItems.length === 0 ? (
        <div className="empty-bag">
          <p>Your shopping bag is empty</p>
        </div>
      ) : (
        <>
          <div className="bag-items">
            {bagItems.map((item) => (
              <div key={item.id} className="bag-item">
                <div className="bag-item-content">
                  <div className="bag-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  
                  <div className="bag-item-details">
                    <h3 className="bag-item-name">{item.name}</h3>
                    <p className="bag-item-price">${item.price}</p>
                    <p className="bag-item-description">{item.description}</p>
                  </div>
                </div>

                <div className="bag-item-actions">
                  <button 
                    className="delete-button" 
                    onClick={() => removeItem(item.id)}
                  >
                    🗑️
                  </button>
                  <button 
                    className="checkout-button-individual"
                    onClick={() => handleIndividualCheckout(item)}
                  >
                    checkout
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total Section */}
          <div className="bag-total">
            <div className="total-row">
              <span className="total-label">Total price: ${totalPrice}</span>
              <button className="checkout-button-final" onClick={handleCheckout}>
                checkout all
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ShoppingBag;