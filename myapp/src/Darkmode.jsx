import React from 'react'

// ponytail: simple clean theme toggle
const Darkmode = ({ dark, setDark }) => {
  return (
    <button 
      onClick={() => setDark(!dark)} 
      className="theme-toggle-btn"
      aria-label="Toggle theme"
    >
      <span>{dark ? '☀️ Light' : '🌙 Dark'}</span>
    </button>
  )
}

export default Darkmode