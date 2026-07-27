import React from 'react'
import Handler from './Handler'
import Handler1 from './Handler1'
import Conditional from './Conditional'

const Home = ({ onNavigate }) => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-simple">
        <h1>Curated Goods for Everyday Living</h1>
        <p>
          Discover minimal, highly functional essentials crafted for utility, quality, and timeless design.
        </p>
        <div className="hero-cta-group">
          <button className="btn-simple" onClick={() => onNavigate('store')}>
            Browse Products →
          </button>
          <button className="btn-secondary" onClick={() => onNavigate('contact')}>
            Contact Us
          </button>
        </div>
      </section>

      {/* Interactive Store Widgets */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '16px' }}>
          Store Services & Perks
        </h2>
        <div className="widgets-grid">
          <Handler />
          <Handler1 />
          <Conditional />
        </div>
      </section>

      {/* Highlights Banner */}
      <section className="home-banner-box">
        <div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '6px' }}>
            Free Express Shipping Worldwide
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            Enjoy complimentary express shipping on all orders over $100.
          </p>
        </div>
        <button className="btn-simple" onClick={() => onNavigate('store')}>
          Shop Now
        </button>
      </section>
    </div>
  )
}

export default Home
