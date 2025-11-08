export default function Wishlist() {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">Rehaus</h1>
            <div className="flex items-center gap-2 border rounded px-4 py-2 w-96">
              <input type="text" placeholder="Search" className="outline-none flex-1" />
              <button>✕</button>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium">My Profile</span>
              <button className="p-2">♡</button>
              <button className="p-2">🛍️</button>
            </div>
          </div>
        </header>
  
        <div className="max-w-7xl mx-auto px-6 py-12">
          {/* Wishlist Title */}
          <h2 className="text-3xl font-bold mb-8">My Wishlist</h2>
  
          {/* Wishlist Grid */}
          <div className="grid grid-cols-3 gap-6 mb-20">
            {/* Card 1 */}
            <div className="bg-white border rounded-lg p-6">
              <div className="bg-gray-200 w-full h-48 mb-4"></div>
              <p className="font-semibold text-lg mb-1">Price</p>
              <p className="text-sm text-gray-600">Size / Condition / Brand</p>
            </div>
  
            {/* Card 2 */}
            <div className="bg-white border rounded-lg p-6">
              <div className="bg-gray-200 w-full h-48 mb-4"></div>
              <p className="font-semibold text-lg mb-2">Title</p>
              <p className="text-sm text-gray-600">
                Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
              </p>
            </div>
  
            {/* Card 3 */}
            <div className="bg-white border rounded-lg p-6">
              <div className="bg-gray-200 w-full h-48 mb-4"></div>
              <p className="font-semibold text-lg mb-2">Title</p>
              <p className="text-sm text-gray-600">
                Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
              </p>
            </div>
  
            {/* Card 4 */}
            <div className="bg-white border rounded-lg p-6">
              <div className="bg-gray-200 w-full h-48 mb-4"></div>
              <p className="font-semibold text-lg mb-2">Title</p>
              <p className="text-sm text-gray-600">
                Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
              </p>
            </div>
  
            {/* Card 5 */}
            <div className="bg-white border rounded-lg p-6">
              <div className="bg-gray-200 w-full h-48 mb-4"></div>
              <p className="font-semibold text-lg mb-2">Title</p>
              <p className="text-sm text-gray-600">
                Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
              </p>
            </div>
  
            {/* Card 6 */}
            <div className="bg-white border rounded-lg p-6">
              <div className="bg-gray-200 w-full h-48 mb-4"></div>
              <p className="font-semibold text-lg mb-2">Title</p>
              <p className="text-sm text-gray-600">
                Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
              </p>
            </div>
          </div>
        </div>
  
        {/* Footer */}
        <footer className="bg-white border-t">
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
                <p className="font-semibold mb-3">Connect with us</p>
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