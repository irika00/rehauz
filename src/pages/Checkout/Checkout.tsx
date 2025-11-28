// src/pages/Checkout/Checkout.tsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get data passed from shopping bag
  const cartItems = location.state?.cartItems || [];
  const sellerName = location.state?.sellerName || "Seller Name";
  const shippingCost = 5;

  // If no items, go back to shopping bag
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate('/shopping-bag');
    }
  }, []);

  // Payment method state - tracks which section is expanded
  const [expandedPayment, setExpandedPayment] = useState('card');

  // Form data state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    zipCode: '',
    state: '',
    cardName: '',
    cardNumber: '',
    cardDate: '',
    cardCVV: ''
  });

  // Calculate prices
  const subtotal = cartItems.reduce((sum, item) => {
    const price = typeof item.price === 'string' 
      ? parseFloat(item.price.replace('$', '')) 
      : item.price;
    return sum + price;
  }, 0);
  const total = subtotal + shippingCost;

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Toggle payment section
  const togglePayment = (method) => {
    setExpandedPayment(expandedPayment === method ? null : method);
  };

  // Handle save shipping info
  const handleSaveShipping = (e) => {
    e.preventDefault();
    console.log('Shipping info saved:', formData);
    alert('Shipping information saved!');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', {
      formData,
      cartItems,
      total,
      expandedPayment
    });
    alert('Order placed successfully!');
    navigate('/home');
  };

  // Format price for display
  const formatPrice = (price) => {
    if (typeof price === 'string') {
      return price;
    }
    return `$${price}`;
  };

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        {/* Shipping Information Section */}
        <div className="info-section">
          <h2 className="section-title">Shipping Information</h2>
          
          <div className="input-box">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-box">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-box">
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-box">
            <input
              type="text"
              name="addressLine1"
              placeholder="Address Line 1"
              value={formData.addressLine1}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-box">
            <input
              type="text"
              name="addressLine2"
              placeholder="Address Line 2 (Optional)"
              value={formData.addressLine2}
              onChange={handleInputChange}
            />
          </div>

          <div className="input-box">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="input-row">
            <div className="input-box">
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="input-box">
              <select
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              >
                <option value="">Select State</option>
                <option value="CA">California</option>
                <option value="NY">New York</option>
                <option value="TX">Texas</option>
                <option value="FL">Florida</option>
              </select>
            </div>
          </div>

          {/* Save Button for Shipping */}
          <button 
            type="button" 
            className="save-shipping-button"
            onClick={handleSaveShipping}
          >
            Save
          </button>
        </div>

        {/* Payment Section */}
        <form onSubmit={handleSubmit}>
          <div className="info-section">
            <h2 className="section-title">Payment Method</h2>

            {/* Debit or Credit Card */}
            <div className="payment-option">
              <button
                type="button"
                className={`payment-toggle ${expandedPayment === 'card' ? 'active' : ''}`}
                onClick={() => togglePayment('card')}
              >
                Debit or Credit Card
                <span className="toggle-icon">{expandedPayment === 'card' ? '−' : '+'}</span>
              </button>
              
              {expandedPayment === 'card' && (
                <div className="payment-details">
                  <div className="input-box">
                    <input
                      type="text"
                      name="cardName"
                      placeholder="Name on Card"
                      value={formData.cardName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="input-box">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Card Number"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="input-row">
                    <div className="input-box">
                      <input
                        type="text"
                        name="cardDate"
                        placeholder="MM/YYYY"
                        value={formData.cardDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        name="cardCVV"
                        placeholder="CVV"
                        value={formData.cardCVV}
                        onChange={handleInputChange}
                        maxLength="3"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* UPI / Paytm */}
            <div className="payment-option">
              <button
                type="button"
                className={`payment-toggle ${expandedPayment === 'upi' ? 'active' : ''}`}
                onClick={() => togglePayment('upi')}
              >
                UPI / Paytm
                <span className="toggle-icon">{expandedPayment === 'upi' ? '−' : '+'}</span>
              </button>
              
              {expandedPayment === 'upi' && (
                <div className="payment-details">
                  <div className="input-box">
                    <input
                      type="text"
                      placeholder="UPI ID"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Google Pay */}
            <div className="payment-option">
              <button
                type="button"
                className={`payment-toggle ${expandedPayment === 'gpay' ? 'active' : ''}`}
                onClick={() => togglePayment('gpay')}
              >
                Google Pay
                <span className="toggle-icon">{expandedPayment === 'gpay' ? '−' : '+'}</span>
              </button>
              
              {expandedPayment === 'gpay' && (
                <div className="payment-details">
                  <div className="input-box">
                    <input
                      type="tel"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-order-button">
              Pay
            </button>
          </div>
        </form>
      </div>

      {/* Right Side - Order Summary */}
      <div className="checkout-right">
        <div className="cart-items-summary">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item-summary">
              <div className="item-image-summary">
                <img src={item.image} alt={item.title || item.name} />
              </div>
              <div className="item-info-summary">
                <div className="item-name-summary">{item.title || item.name}</div>
                {item.brand && item.size && item.condition && (
                  <div className="item-meta-summary">
                    {item.brand} / {item.size} / {item.condition}
                  </div>
                )}
              </div>
              <div className="item-price-summary">{formatPrice(item.price)}</div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <div className="summary-row">
            <span className="summary-label">Subtotal</span>
            <span className="summary-value">${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Shipping</span>
            <span className="summary-value">${shippingCost.toFixed(2)}</span>
          </div>
          <div className="summary-row total">
            <span className="summary-label">Total</span>
            <span className="summary-value">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
