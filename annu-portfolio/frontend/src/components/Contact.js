import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      await axios.post('/api/contact', form);
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
    setLoading(false);
  };

  return (
    <section id="contact" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-subtitle">// get in touch</p>
        <h2 className="section-title">Contact <span>Me</span></h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-tagline">
              I'm currently open to <strong>internship opportunities</strong> and 
              <strong> interesting projects</strong>. Feel free to reach out!
            </p>
            <div className="contact-items">
              <a href="mailto:annumathur003@gmail.com" className="contact-item">
                <i className="fas fa-envelope"></i>
                <span>annumathur003@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/in/annu-mathur003" target="_blank" rel="noreferrer" className="contact-item">
                <i className="fab fa-linkedin"></i>
                <span>linkedin.com/in/annu-mathur003</span>
              </a>
              <a href="https://github.com/Annu45" target="_blank" rel="noreferrer" className="contact-item">
                <i className="fab fa-github"></i>
                <span>github.com/Annu45</span>
              </a>
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 6006969953</span>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows="5"
                required
              />
            </div>
            {status === 'success' && (
              <p className="form-success">✅ Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="form-error">❌ Something went wrong. Try emailing directly.</p>
            )}
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
