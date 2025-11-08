export default function ResolutionCenter() {
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
  
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Page Title */}
          <h2 className="text-3xl font-bold mb-8">Purchases</h2>
  
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column - Purchase Items */}
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="bg-white border rounded-lg p-6">
                <div className="bg-gray-200 w-full h-48 mb-4"></div>
                <p className="font-semibold mb-1">Item Name</p>
                <p className="text-lg font-bold mb-4">$0</p>
                <button className="bg-black text-white px-6 py-2 rounded">
                  Raise an Issue
                </button>
              </div>
  
              {/* Item 2 */}
              <div className="bg-white border rounded-lg p-6">
                <div className="bg-gray-200 w-full h-48 mb-4"></div>
                <p className="font-semibold mb-1">Item Name</p>
                <p className="text-lg font-bold mb-4">$0</p>
                <button className="bg-black text-white px-6 py-2 rounded">
                  Raise an Issue
                </button>
              </div>
            </div>
  
            {/* Right Column - Issue Options */}
            <div className="bg-white border rounded-lg p-6">
              <div className="space-y-4">
                <div className="pb-4 border-b">
                  <p className="font-semibold mb-1">Seller is not responding</p>
                  <p className="text-sm text-gray-500">Menu description.</p>
                </div>
  
                <div className="pb-4 border-b">
                  <p className="font-semibold mb-1">I have not received my item</p>
                  <p className="text-sm text-gray-500">Menu description.</p>
                </div>
  
                <div className="pb-4 border-b">
                  <p className="font-semibold mb-1">Item is not as described</p>
                  <p className="text-sm text-gray-500">Menu description.</p>
                </div>
  
                <div className="pb-4 border-b">
                  <p className="font-semibold mb-1">Order not shipped</p>
                  <p className="text-sm text-gray-500">Menu description.</p>
                </div>
  
                <div>
                  <p className="font-semibold mb-1">Other</p>
                  <p className="text-sm text-gray-500">Menu description.</p>
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