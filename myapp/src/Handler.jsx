import React from 'react'

// ponytail: simple clean discount widget
const Handler = () => {
  function claimPromo() {
    alert("Discount code 'STUDIO20' applied for 20% off!")
  }

  return (
    <div className="card-simple">
      <div>
        <h3>Member Discount</h3>
        <p>Claim your 20% discount code for your next order.</p>
      </div>
      <button onClick={claimPromo} className="btn-simple" style={{ width: '100%' }}>
        Claim 20% Off Code
      </button>
    </div>
  )
}

export default Handler