export default function ProductListing() {
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
              <button className="p-2">💬</button>
              <button className="p-2">♡</button>
              <button className="p-2">🛍️</button>
              <button className="px-4 py-2">Sign Up</button>
              <button className="bg-black text-white px-4 py-2 rounded">Login</button>
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
          <div className="grid grid-cols-2 gap-12 mb-12">
            {/* Left Column - Product Image */}
            <div>
              <div className="bg-gray-200 w-full h-96 mb-6"></div>
              
              {/* More From This Seller */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">More From This Seller</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-200 h-40"></div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex-1 border border-black py-2 rounded">Button</button>
                  <button className="flex-1 bg-black text-white py-2 rounded">Create Bundle</button>
                </div>
                <button className="w-full bg-black text-white py-2 rounded mt-2">Visit Shop</button>
              </div>
            </div>
  
            {/* Right Column - Product Details */}
            <div>
              <h2 className="text-2xl font-bold mb-2">Name</h2>
              <p className="text-xl mb-4">Price</p>
              <p className="text-gray-600 mb-6">Description</p>
              
              <button className="w-full bg-black text-white py-3 rounded mb-3">Add to Bag</button>
              <button className="w-full bg-black text-white py-3 rounded mb-3">Make an Offer</button>
              <button className="w-full bg-black text-white py-3 rounded mb-6">Message Seller</button>
  
              {/* Seller Info */}
              <div className="border-t pt-6 mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                  <span className="font-semibold">@username</span>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>⭐</span>
                  ))}
                </div>
              </div>
  
              {/* Recent Reviews */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Recent Reviews</h3>
                
                {/* Review 1 */}
                <div className="mb-4 pb-4 border-b">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-semibold">by @user1 • 2 months ago</p>
                      <p className="text-sm text-gray-700">Fast shipping & item is exactly as described. Thank you!</p>
                    </div>
                  </div>
                </div>
  
                {/* Review 2 */}
                <div className="mb-4 pb-4 border-b">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-semibold">by @user2 • 3 months ago</p>
                      <p className="text-sm text-gray-700">Item is in great condition, fast shipping, thank you</p>
                    </div>
                  </div>
                </div>
  
                {/* Review 3 */}
                <div className="mb-4">
                  <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <span key={i} className="text-yellow-500">⭐</span>
                    ))}
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-semibold">by @user3 • 6 months ago</p>
                      <p className="text-sm text-gray-700">Item was just as described and in great condition :) thanks</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* You also might like */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6">You also might like</h3>
            <div className="grid grid-cols-5 gap-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="bg-gray-200 h-40"></div>
              ))}
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
              <div className="flex gap-4">
                <span>📍</span>
                <span>📷</span>
                <span>▶️</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }