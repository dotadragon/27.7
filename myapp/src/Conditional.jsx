import React, { useState } from 'react'

// ponytail: simple clean age verification widget
const Conditional = () => {
  const [age, setAge] = useState(15)
  const isAdult = age >= 18

  return (
    <div className="card-simple">
      <div>
        <h3>Age Verification</h3>
        <p>Verify your age to access restricted items.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Age:</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(Math.max(0, parseInt(e.target.value) || 0))}
            className="input-simple"
            style={{ width: '80px' }}
          />
        </div>
        <div style={{ 
          fontSize: '0.85rem',
          fontWeight: 600,
          padding: '8px',
          borderRadius: '6px',
          textAlign: 'center',
          background: 'var(--surface)',
          color: isAdult ? '#16a34a' : '#dc2626',
          border: '1px solid var(--border)'
        }}>
          {isAdult ? "Access Granted (18+)" : "Access Restricted (Under 18)"}
        </div>
      </div>
    </div>
  )
}

export default Conditional
