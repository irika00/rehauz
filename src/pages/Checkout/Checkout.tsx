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

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState('card');

  // Form data state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    age: '',
    email: '',
    zipCode: '',
    state: '',
    emailAddress: '',
    phoneNumber: '',
    cardName: '',
    cardNumber: '',
    cardDate: '',
    cardCVV: ''
  });

  // Calculate prices
  const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal + shippingCost;

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order placed:', {
      formData,
      cartItems,
      total,
      paymentMethod
    });
    alert('Order placed successfully!');
    navigate('/home');
  };

  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <form onSubmit={handleSubmit}>
          {/* Shipping Information */}
          <section className="checkout-section">
            <h2 className="section-title">Shipping Information</h2>
            
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Address Line 1</label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Address Line 2</label>
              <input
                type="text"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  placeholder="Value"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label>State</label>
                <select
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                >
                  <option value="">Select</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="emailAddress"
                placeholder="Value"
                value={formData.emailAddress}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Value"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
          </section>

          {/* Payment Section */}
          <section className="checkout-section">
            <h2 className="section-title">Payment</h2>

            {/* Debit or Credit Card */}
            <div className="payment-option">
              <button
                type="button"
                className={`payment-toggle ${paymentMethod === 'card' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('card')}
              >
                Debit or Credit Card
                <span className="toggle-icon">{paymentMethod === 'card' ? '−' : '+'}</span>
              </button>
              
              {paymentMethod === 'card' && (
                <div className="payment-details">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="cardName"
                      placeholder="Value"
                      value={formData.cardName}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Card Number</label>
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Value"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Date (MM/YYYY)</label>
                      <input
                        type="text"
                        name="cardDate"
                        placeholder="Value"
                        value={formData.cardDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>CVV</label>
                      <input
                        type="text"
                        name="cardCVV"
                        placeholder="Value"
                        value={formData.cardCVV}
                        onChange={handleInputChange}
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
                className={`payment-toggle ${paymentMethod === 'upi' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('upi')}
              >
                UPI / Paytm
                <span className="toggle-icon">{paymentMethod === 'upi' ? '−' : '+'}</span>
              </button>
            </div>

            {/* G-Pay */}
            <div className="payment-option">
              <button
                type="button"
                className={`payment-toggle ${paymentMethod === 'gpay' ? 'active' : ''}`}
                onClick={() => setPaymentMethod('gpay')}
              >
                G-Pay
                <span className="toggle-icon">{paymentMethod === 'gpay' ? '−' : '+'}</span>
              </button>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-order-button">
              Place Order
            </button>
          </section>
        </form>
      </div>

      {/* Right Side - Order Summary */}
      <div className="checkout-right">
        <h2 className="seller-name">{sellerName}</h2>

        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                {item.image ? (
                  <img src={item.image} alt={item.name} />
                ) : (
                  <div className="image-placeholder" />
                )}
              </div>
              <div className="item-details">
                <div className="item-name">{item.name}</div>
                <div className="item-price">Price</div>
              </div>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <div className="summary-row">
            <span className="summary-label">Subtotal</span>
            <span className="summary-value">${subtotal}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Shipping</span>
            <span className="summary-value">${shippingCost}</span>
          </div>
          <div className="summary-row total">
            <span className="summary-label">Total</span>
            <span className="summary-value">${total}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;