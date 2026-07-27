import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Fetch from './Fetch'
import Contact from './Contact'

function App() {
  const [dark, setDark] = useState(false)
  const [activeTab, setActiveTab] = useState('home')
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [activeTab])

  // Cart Management
  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id)
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta
            return newQty > 0 ? { ...item, quantity: newQty } : null
          }
          return item
        })
        .filter(Boolean)
    )
  }

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
  }

  const clearCart = () => setCart([])

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div className="app-layout">
      {/* Interactive Site Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        cartCount={totalItems}
        cartTotal={totalPrice}
        onOpenCart={() => setIsCartOpen(true)}
        dark={dark}
        setDark={setDark}
      />

      {/* Main Dynamic View Switching */}
      <main className="main-content">
        {activeTab === 'home' && <Home onNavigate={setActiveTab} />}
        {activeTab === 'store' && (
          <section className="catalog-section" style={{ paddingTop: '20px' }}>
            <Fetch onAddToCart={handleAddToCart} />
          </section>
        )}
        {activeTab === 'contact' && <Contact onNavigate={setActiveTab} />}
      </main>

      {/* Slide-over Cart Drawer Modal */}
      {isCartOpen && (
        <div className="cart-overlay" onClick={() => setIsCartOpen(false)}>
          <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="cart-header">
              <h2>Your Cart ({totalItems})</h2>
              <button
                className="close-btn"
                onClick={() => setIsCartOpen(false)}
                aria-label="Close cart"
              >
                ✕
              </button>
            </div>

            <div className="cart-body">
              {cart.length === 0 ? (
                <div className="cart-empty">Your cart is currently empty.</div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="cart-item-row">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-item-img"
                    />
                    <div className="cart-item-info">
                      <div className="cart-item-title">{item.title}</div>
                      <div className="cart-item-price">
                        ${Number(item.price).toFixed(2)} each
                      </div>
                      <div className="cart-item-controls">
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </button>
                        <span className="qty-val">{item.quantity}</span>
                        <button
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </button>
                        <span
                          style={{
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            marginLeft: '8px',
                          }}
                        >
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      🗑️
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="cart-footer">
                <div className="cart-subtotal-row">
                  <span>Total Amount:</span>
                  <span style={{ fontSize: '1.2rem' }}>
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="cart-footer-actions">
                  <button
                    className="btn-secondary"
                    onClick={clearCart}
                    style={{ flex: 1 }}
                  >
                    Clear Cart
                  </button>
                  <button
                    className="btn-simple"
                    onClick={() =>
                      alert(
                        `Checkout simulated! Total: $${totalPrice.toFixed(2)}`
                      )
                    }
                    style={{ flex: 2 }}
                  >
                    Checkout (${totalPrice.toFixed(2)})
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Footer Navigation */}
      <footer className="site-footer">
        <p>© 2026 Studio Store</p>
        <div className="footer-links">
          <button
            className="footer-link-btn"
            onClick={() => setActiveTab('home')}
          >
            Home
          </button>
          <button
            className="footer-link-btn"
            onClick={() => setActiveTab('store')}
          >
            Products
          </button>
          <button
            className="footer-link-btn"
            onClick={() => setActiveTab('contact')}
          >
            Contact
          </button>
        </div>
      </footer>
    </div>
  )
}

export default App
