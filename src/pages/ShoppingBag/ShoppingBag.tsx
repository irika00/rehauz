// src/pages/ShoppingBag/ShoppingBag.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { RiDeleteBin6Line } from 'react-icons/ri';
import './ShoppingBag.css';

function ShoppingBag() {
  const navigate = useNavigate();
  const [bagItems, setBagItems] = useState([]);

  // Load items from localStorage whenever component mounts
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setBagItems(parsedCart);
    }
  }, []);

  // Group items by seller (for now, all items are from "Rehaus Marketplace")
  const groupedItems = bagItems.reduce((groups, item) => {
    const seller = item.seller || 'Rehaus Marketplace';
    if (!groups[seller]) {
      groups[seller] = [];
    }
    groups[seller].push(item);
    return groups;
  }, {});

  // Calculate total price for a seller's items
  const calculateSellerTotal = (items) => {
    return items.reduce((sum, item) => {
      const price = typeof item.price === 'string' 
        ? parseFloat(item.price.replace('$', '')) 
        : item.price;
      return sum + price;
    }, 0);
  };

  // Remove item from bag
  const removeItem = (itemId) => {
    const updatedItems = bagItems.filter(item => item.id !== itemId);
    setBagItems(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  // Navigate to checkout with seller's items
  const handleSellerCheckout = (sellerName, items) => {
    navigate('/checkout', {
      state: {
        cartItems: items,
        sellerName: sellerName
      }
    });
  };

  // Format price for display
  const formatPrice = (price) => {
    if (typeof price === 'string') {
      return price;
    }
    return `$${price}`;
  };

  return (
    <div className="shopping-bag-page">
      <h1 className="bag-title">Shopping Bag</h1>

      {bagItems.length === 0 ? (
        <div className="empty-bag">
          <p>Your shopping bag is empty</p>
        </div>
      ) : (
        <div className="seller-groups">
          {Object.entries(groupedItems).map(([sellerName, items]) => {
            const sellerTotal = calculateSellerTotal(items);
            
            return (
              <div key={sellerName} className="seller-group">
                <div className="seller-items">
                  {items.map((item) => (
                    <div key={item.id} className="bag-item">
                      <div className="item-left">
                        <div className="bag-item-image">
                          <img src={item.image} alt={item.title || item.name} />
                        </div>
                        
                        <div className="bag-item-details">
                          <h3 className="bag-item-name">{item.title || item.name}</h3>
                          {item.brand && item.size && item.condition && (
                            <p className="bag-item-meta">
                              {item.brand} / {item.size} / {item.condition}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="item-right">
                        <button 
                          className="delete-button" 
                          onClick={() => removeItem(item.id)}
                          aria-label="Remove item"
                        >
                          <RiDeleteBin6Line />
                        </button>
                        <p className="bag-item-price">{formatPrice(item.price)}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Seller Total and Checkout */}
                <div className="seller-footer">
                  <div className="seller-total">
                    <span className="total-label">Total</span>
                    <span className="total-price">${sellerTotal.toFixed(2)}</span>
                  </div>
                  <button 
                    className="checkout-button"
                    onClick={() => handleSellerCheckout(sellerName, items)}
                  >
                    Checkout {items.length} {items.length === 1 ? 'item' : 'items'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ShoppingBag;
