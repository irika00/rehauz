export default function Checkout() {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">Rehaus</h1>
            <div className="flex items-center gap-2 border rounded px-4 py-2 w-64">
              <input type="text" placeholder="Search" className="outline-none flex-1" />
              <button>✕</button>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium">My Profile</span>
              <button className="p-2">💬</button>
              <button className="p-2">♡</button>
              <button className="p-2">🛍️</button>
            </div>
          </div>
        </header>
  
        {/* Navigation */}
        <nav className="bg-white border-b px-6 py-3">
          <div className="max-w-7xl mx-auto flex gap-8">
            <a href="#" className="hover:underline">Women</a>
            <a href="#" className="hover:underline">Men</a>
            <a href="#" className="hover:underline">Brands</a>
            <a href="#" className="hover:underline">Trending</a>
          </div>
        </nav>
  
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 gap-12">
            {/* Left Column - Forms */}
            <div>
              {/* Shipping Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Full Name"
                      className="w-full border rounded px-4 py-2"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm mb-2">Address Line 1</label>
                    <input 
                      type="text" 
                      placeholder="Last Name"
                      className="w-full border rounded px-4 py-2"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm mb-2">Address Line 2</label>
                    <input 
                      type="text" 
                      placeholder="Value"
                      className="w-full border rounded px-4 py-2"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm mb-2">City</label>
                    <input 
                      type="text" 
                      placeholder="Value"
                      className="w-full border rounded px-4 py-2"
                    />
                  </div>
  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-2">Zip Code</label>
                      <input 
                        type="text" 
                        placeholder="Value"
                        className="w-full border rounded px-4 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">State</label>
                      <select className="w-full border rounded px-4 py-2">
                        <option>Select</option>
                      </select>
                    </div>
                  </div>
  
                  <div>
                    <label className="block text-sm mb-2">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="Value"
                      className="w-full border rounded px-4 py-2"
                    />
                  </div>
  
                  <div>
                    <label className="block text-sm mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="Value"
                      className="w-full border rounded px-4 py-2"
                    />
                  </div>
                </div>
              </div>
  
              {/* Payment */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Payment</h2>
                
                <div className="space-y-4">
                  {/* Debit or Credit Card */}
                  <div className="border rounded">
                    <button className="w-full px-4 py-3 flex justify-between items-center">
                      <span>Debit or Credit Card</span>
                      <span>▲</span>
                    </button>
                    <div className="px-4 pb-4 space-y-4">
                      <div>
                        <label className="block text-sm mb-2">Name</label>
                        <input 
                          type="text" 
                          placeholder="Value"
                          className="w-full border rounded px-4 py-2"
                        />
                      </div>
  
                      <div>
                        <label className="block text-sm mb-2">Card Number</label>
                        <input 
                          type="text" 
                          placeholder="Value"
                          className="w-full border rounded px-4 py-2"
                        />
                      </div>
  
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm mb-2">Date (MM/YYYY)</label>
                          <input 
                            type="text" 
                            placeholder="Value"
                            className="w-full border rounded px-4 py-2"
                          />
                        </div>
                        <div>
                          <label className="block text-sm mb-2">CVV</label>
                          <input 
                            type="text" 
                            placeholder="Value"
                            className="w-full border rounded px-4 py-2"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
  
                  {/* UPI / Paytm */}
                  <div className="border rounded">
                    <button className="w-full px-4 py-3 flex justify-between items-center">
                      <span>UPI / Paytm</span>
                      <span>▼</span>
                    </button>
                  </div>
  
                  {/* G-Pay */}
                  <div className="border rounded">
                    <button className="w-full px-4 py-3 flex justify-between items-center">
                      <span>G-Pay</span>
                      <span>▼</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Right Column - Order Summary */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Seller Name</h2>
              
              {/* Item 1 */}
              <div className="flex gap-4 mb-6 pb-6 border-b">
                <div className="bg-gray-200 w-24 h-24 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold">Name</p>
                  <p className="text-sm text-gray-600">Price</p>
                </div>
              </div>
  
              {/* Item 2 */}
              <div className="flex gap-4 mb-8 pb-8 border-b">
                <div className="bg-gray-200 w-24 h-24 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold">Name</p>
                  <p className="text-sm text-gray-600">Price</p>
                </div>
              </div>
  
              {/* Price Summary */}
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>.$50</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>$5</span>
                </div>
                <div className="flex justify-between text-xl font-bold pt-3 border-t">
                  <span>Total</span>
                  <span>$55</span>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-white border-t mt-20">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-bold text-xl mb-4">Rehaus</h4>
                <ul className="space-y-2 text-sm">
                  <li>About Us</li>
                  <li>Impact</li>
                  <li>Customer Service</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-3">Connect</p>
                <div className="flex gap-3">
                  <span>📍</span>
                  <span>📷</span>
                  <span>🔗</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }