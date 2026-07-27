import React from 'react'
import Darkmode from './Darkmode'

const Navbar = ({ activeTab, setActiveTab, cartCount, cartTotal, onOpenCart, dark, setDark }) => {
  return (
    <header className="site-header">
      <div className="brand" onClick={() => setActiveTab('home')} style={{ cursor: 'pointer' }}>
        <span className="brand-name">STUDIO STORE</span>
      </div>

      <nav className="nav-links">
        <button 
          className={`nav-link-btn ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button 
          className={`nav-link-btn ${activeTab === 'store' ? 'active' : ''}`}
          onClick={() => setActiveTab('store')}
        >
          Products
        </button>
        <button 
          className={`nav-link-btn ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </button>
      </nav>

      <div className="header-actions">
        <button
          className="cart-toggle-btn"
          onClick={onOpenCart}
          aria-label="View Shopping Cart"
        >
          <span>🛒 Cart</span>
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          <span className="cart-total-header">${cartTotal.toFixed(2)}</span>
        </button>
        <Darkmode dark={dark} setDark={setDark} />
      </div>
    </header>
  )
}

export default Navbar
