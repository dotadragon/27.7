import React, { useState } from 'react'

// ponytail: simple clean personalization widget
const Handler1 = () => {
  const [name, setName] = useState("")

  return (
    <div className="card-simple">
      <div>
        <h3>Personalization</h3>
        <p>Enter your name to personalize your store experience.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name..."
          className="input-simple"
        />
        <div style={{ 
          fontSize: '0.85rem', 
          color: 'var(--text-muted)', 
          textAlign: 'center', 
          padding: '8px', 
          borderRadius: '6px', 
          background: 'var(--surface)',
          border: '1px solid var(--border)'
        }}>
          {name ? `Welcome, ${name}` : "Browsing as Guest"}
        </div>
      </div>
    </div>
  )
}

export default Handler1