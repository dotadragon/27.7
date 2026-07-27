import React, { useState, useEffect } from 'react'
import './App.css'
import Handler from './Handler'
import Handler1 from './Handler1'
import Conditional from './Conditional'
import Darkmode from './Darkmode'
import Fetch from './Fetch'

// ponytail: simple human-designed clean UI, zero AI purple fluff
function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])

  return (
    <div className="app-layout">
      {/* Header */}
      <header className="site-header">
        <div className="brand">
          <span className="brand-name">STUDIO STORE</span>
        </div>
        <div className="header-actions">
          <Darkmode dark={dark} setDark={setDark} />
        </div>
      </header>

      {/* Main Container */}
      <main className="main-content">
        {/* Simple Clean Hero */}
        <section className="hero-simple">
          <h1>Curated Goods</h1>
          <p>Simple, functional essentials designed for everyday utility.</p>
        </section>

        {/* Widgets Grid */}
        <section className="widgets-grid">
          <Handler />
          <Handler1 />
          <Conditional />
        </section>

        {/* Product Catalog */}
        <section className="catalog-section">
          <Fetch />
        </section>
      </main>

      {/* Footer */}
      <footer className="site-footer">
        <p>© 2026 Studio Store</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
