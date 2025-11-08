export default function Home() {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <h1 className="text-2xl font-bold">Rehaus</h1>
            <input 
              type="text" 
              placeholder="Search" 
              className="border rounded px-4 py-2 w-64"
            />
            <div className="flex items-center gap-4">
              <button className="p-2">💬</button>
              <button className="p-2">♡</button>
              <button className="p-2">🛍️</button>
              <span>Sign In</span>
              <button className="bg-black text-white px-4 py-2 rounded">Sign Up</button>
            </div>
          </div>
        </header>
  
        {/* Navigation */}
        <nav className="bg-white border-b px-6 py-3">
          <div className="max-w-7xl mx-auto flex gap-8">
            <a href="#" className="hover:underline">Account</a>
            <a href="#" className="hover:underline">Men</a>
            <a href="#" className="hover:underline">Brands</a>
            <a href="#" className="hover:underline">Trending</a>
          </div>
        </nav>
  
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Hero Banners */}
          <div className="grid grid-cols-2 gap-6 mb-12">
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <button className="bg-black text-white px-6 py-3">Browse Menswear</button>
            </div>
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <button className="bg-black text-white px-6 py-3">Browse Menswear</button>
            </div>
          </div>
  
          {/* Tagline */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Where fashion finds a second house</h2>
            <p className="text-gray-400 text-lg">Examples/Waitlist</p>
          </div>
  
          {/* Shop by Style */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Shop by Style</h3>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="bg-gray-200 h-48 mb-2"></div>
                  <p>Title</p>
                </div>
              ))}
            </div>
          </section>
  
          {/* Shop by Quality */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Shop by Quality</h3>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="bg-gray-200 h-48 mb-2"></div>
                  <p>Title</p>
                </div>
              ))}
            </div>
          </section>
  
          {/* Shop by Price */}
          <section className="mb-12">
            <h3 className="text-xl font-semibold mb-6">Shop by Price</h3>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <p>Title</p>
                </div>
              ))}
            </div>
          </section>
        </div>
  
        {/* Footer */}
        <footer className="bg-gray-100 border-t mt-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-4 gap-8">
              <div>
                <h4 className="font-bold text-xl mb-4">Rehaus</h4>
                <div className="flex gap-3">
                  <span>📷</span>
                  <span>▶️</span>
                </div>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Rehaus</h5>
                <ul className="space-y-2 text-sm">
                  <li>About</li>
                  <li>Careers</li>
                </ul>
              </div>
              <div>
                <h5 className="font-semibold mb-3">Help</h5>
                <ul className="space-y-2 text-sm">
                  <li>Support</li>
                  <li>Returns</li>
                  <li>Shipping</li>
                  <li>Sizing</li>
                  <li>Payments & Refunds</li>
                  <li>FAQ</li>
                </ul>
              </div>
              <div>
                <p className="text-sm">📧 Contact Us</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }