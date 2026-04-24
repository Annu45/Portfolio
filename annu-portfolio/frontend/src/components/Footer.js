import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="brand-bracket">&lt;</span>
          <span className="brand-name">Annu Mathur</span>
          <span className="brand-bracket">/&gt;</span>
        </div>
        <p className="footer-text">
          Designed &amp; Built by <strong>Annu Mathur</strong> · MERN Stack
        </p>
        <div className="footer-links">
          <a href="https://github.com/Annu45" target="_blank" rel="noreferrer"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/annu-mathur003" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
          <a href="mailto:annumathur003@gmail.com"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
    </footer>
  );
}
