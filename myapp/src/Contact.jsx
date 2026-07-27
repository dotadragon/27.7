import React, { useState } from 'react'

const Contact = ({ onNavigate }) => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.")
      return
    }
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <div className="hero-simple">
        <h1>Get in Touch</h1>
        <p>Have questions about products, orders, or custom requests? We're here to help.</p>
      </div>

      <div className="contact-grid">
        {/* Contact Form */}
        <div className="card-simple">
          <h3>Send Us a Message</h3>
          {submitted ? (
            <div className="contact-success-box">
              <span style={{ fontSize: '1.5rem' }}>✓</span>
              <h4>Thank you, {formData.name}!</h4>
              <p>Your message has been sent successfully. Our support team will get back to you within 24 hours.</p>
              <button className="btn-simple" onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>Name *</label>
                <input 
                  type="text" 
                  className="input-simple"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input 
                  type="email" 
                  className="input-simple"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" 
                  className="input-simple"
                  placeholder="Inquiry subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea 
                  className="input-simple"
                  rows="5"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  style={{ resize: 'vertical' }}
                ></textarea>
              </div>

              <button type="submit" className="btn-simple" style={{ width: '100%' }}>
                Submit Inquiry
              </button>
            </form>
          )}
        </div>

        {/* Support & Address Information */}
        <div className="card-simple" style={{ height: 'fit-content' }}>
          <h3>Studio Information</h3>
          
          <div className="contact-info-list">
            <div className="info-item">
              <strong>📍 Address</strong>
              <p>100 Studio Way, Suite 400<br/>San Francisco, CA 94107</p>
            </div>

            <div className="info-item">
              <strong>✉️ Email Support</strong>
              <p>support@studiostore.com</p>
            </div>

            <div className="info-item">
              <strong>🕒 Operating Hours</strong>
              <p>Monday – Friday: 9:00 AM – 6:00 PM PST<br/>Weekend: Closed</p>
            </div>
          </div>

          <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border)', marginTop: '8px' }}>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Want to check our latest inventory?
            </p>
            <button className="btn-secondary" onClick={() => onNavigate('store')} style={{ width: '100%' }}>
              Return to Catalog →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
