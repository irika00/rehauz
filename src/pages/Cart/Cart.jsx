export default function ShoppingBag() {
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
  
        {/* Navigation - Only one instance */}
        <nav className="bg-white border-b px-6 py-3">
          <div className="max-w-7xl mx-auto flex gap-8">
            <a href="#" className="hover:underline">Women</a>
            <a href="#" className="hover:underline">Men</a>
            <a href="#" className="hover:underline">Brands</a>
            <a href="#" className="hover:underline">Trending</a>
          </div>
        </nav>
  
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Shopping Bag Title */}
          <h2 className="text-3xl font-bold mb-8">Shopping Bag</h2>
  
          {/* Shopping Bag Items */}
          <div className="space-y-6 mb-8">
            {/* Item 1 */}
            <div className="bg-white border rounded-lg p-6">
              <div className="flex gap-6 items-start">
                <div className="bg-gray-200 w-32 h-32 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Listing Name</h3>
                  <p className="text-sm font-medium mb-1">Price</p>
                  <p className="text-sm text-gray-600">Description</p>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <button className="p-2">🗑️</button>
                  <button className="border border-gray-300 px-6 py-2 rounded">checkout</button>
                </div>
              </div>
            </div>
  
            {/* Item 2 */}
            <div className="bg-white border rounded-lg p-6">
              <div className="flex gap-6 items-start">
                <div className="bg-gray-200 w-32 h-32 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Listing Name</h3>
                  <p className="text-sm font-medium mb-1">Price</p>
                  <p className="text-sm text-gray-600">Description</p>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <button className="p-2">🗑️</button>
                  <button className="border border-gray-300 px-6 py-2 rounded">checkout</button>
                </div>
              </div>
            </div>
  
            {/* Item 3 */}
            <div className="bg-white border rounded-lg p-6">
              <div className="flex gap-6 items-start">
                <div className="bg-gray-200 w-32 h-32 flex-shrink-0"></div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Listing Name</h3>
                  <p className="text-sm font-medium mb-1">Price</p>
                  <p className="text-sm text-gray-600">Description</p>
                </div>
                <div className="flex flex-col items-end gap-4">
                  <button className="p-2">🗑️</button>
                  <button className="border border-gray-300 px-6 py-2 rounded">checkout</button>
                </div>
              </div>
            </div>
          </div>
  
          {/* Total Price */}
          <div className="bg-white border rounded-lg p-6 flex justify-between items-center">
            <span className="text-xl font-semibold">Total price:</span>
            <button className="border border-gray-300 px-6 py-2 rounded">checkout</button>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-white border-t mt-20">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div>
              <h4 className="font-bold text-xl mb-4">Rehaus</h4>
              <ul className="space-y-2 text-sm mb-8">
                <li>About Us</li>
                <li>Impact</li>
                <li>Customer Service</li>
              </ul>
              <p className="text-gray-400 mb-3">Connect with us</p>
              <div className="flex gap-3">
                <span>📍</span>
                <span>📷</span>
                <span>🔗</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }