import { useState } from 'react';
import { api } from '../api.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSending(true);
    setStatus({ type: '', text: '' });
    try {
      await api.sendMessage(form);
      setStatus({ type: 'success', text: 'Thanks! Your message landed in my inbox ✉️' });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', text: err.message || 'Something went wrong. Please try again.' });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact">
      <div className="container">
        <div className="reveal">
          <span className="section-subtitle">— get in touch</span>
          <h2 className="section-title">Let's <span>connect</span></h2>
        </div>
        <div className="contact-grid">
          <div className="reveal">
            <p className="contact-tagline">
              I'm currently open to <strong>internship opportunities</strong> and
              <strong> interesting projects</strong>. Feel free to reach out — I usually reply within a day.
            </p>
            <div className="contact-items">
              <a href="mailto:annumathur003@gmail.com" className="contact-item" id="emailContactItem">
                <span className="ic">✉️</span> annumathur003@gmail.com
                <span className="copy-hint" id="copyHint" data-copy="annumathur003@gmail.com">Copy</span>
              </a>
              <a href="https://www.linkedin.com/in/annumathur003/" target="_blank" rel="noreferrer" className="contact-item">
                <span className="ic">in</span> linkedin.com/in/annumathur003
              </a>
              <a href="https://github.com/Annu45" target="_blank" rel="noreferrer" className="contact-item">
                <span className="ic">⌥</span> github.com/Annu45
              </a>
            </div>
          </div>

          <form className="contact-form reveal reveal-delay-1" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Your message..." value={form.message} onChange={handleChange} required></textarea>
            </div>
            <p className="form-note">Sent straight to my inbox via my own Express + MongoDB API.</p>
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? 'Sending…' : 'Send Message'}
            </button>
            {status.text && (
              <p className={`form-status ${status.type === 'success' ? 'success' : 'error'}`}>{status.text}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
