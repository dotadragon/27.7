import React, { useState, useEffect } from 'react'

// ponytail: simple clean catalog fetching logic with fallback & cart handler
const FALLBACK_PRODUCTS = [
  {
    id: 1,
    title: "Minimalist Chronograph Watch",
    price: 189.00,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Nordic Ceramic Pitcher",
    price: 64.00,
    category: "Living",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Wireless Studio Headphones",
    price: 299.00,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Matte Mechanical Keyboard",
    price: 145.00,
    category: "Tech",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&auto=format&fit=crop&q=80"
  }
]

const Fetch = ({ onAddToCart }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [addedId, setAddedId] = useState(null)

  useEffect(() => {
    setLoading(true)
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 4000)

    fetch("https://fakestoreapi.com/products", { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("API error")
        return res.json()
      })
      .then((dat) => {
        clearTimeout(timeoutId)
        if (Array.isArray(dat) && dat.length > 0) {
          setData(dat)
        } else {
          setData(FALLBACK_PRODUCTS)
        }
        setLoading(false)
      })
      .catch(() => {
        clearTimeout(timeoutId)
        setData(FALLBACK_PRODUCTS)
        setLoading(false)
      })
  }, [])

  const handleAdd = (product) => {
    if (onAddToCart) {
      onAddToCart(product)
    }
    setAddedId(product.id)
    setTimeout(() => setAddedId(null), 1000)
  }

  return (
    <div>
      <div className="catalog-header">
        <h2>Products</h2>
        <span className="catalog-count">{data.length} items</span>
      </div>

      {loading ? (
        <div className="products-grid">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="skeleton-box">
              <div className="skeleton-shimmer" style={{ height: '160px' }}></div>
              <div className="skeleton-shimmer" style={{ width: '40%' }}></div>
              <div className="skeleton-shimmer" style={{ width: '80%' }}></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="products-grid">
          {data.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-img-box">
                <img src={product.image} alt={product.title} loading="lazy" />
              </div>
              <div className="product-details">
                <span className="product-category-tag">{product.category}</span>
                <h3 className="product-name" title={product.title}>{product.title}</h3>
                <div className="product-bottom">
                  <span className="product-price-value">${Number(product.price).toFixed(2)}</span>
                  <button 
                    className="btn-secondary" 
                    onClick={() => handleAdd(product)}
                  >
                    {addedId === product.id ? '✓ Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Fetch