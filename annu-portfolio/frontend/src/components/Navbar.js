import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = ['About', 'Experience', 'Projects', 'Skills', 'Achievements', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <span className="brand-bracket">&lt;</span>
        <span className="brand-name">Annu</span>
        <span className="brand-bracket">/&gt;</span>
      </div>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <button onClick={() => scrollTo(l)} className="nav-link">
              <span className="nav-num">0{links.indexOf(l) + 1}.</span> {l}
            </button>
          </li>
        ))}
        <li>
          <a
            href="https://drive.google.com/file/d/YOUR_RESUME_LINK"
            target="_blank"
            rel="noreferrer"
            className="nav-resume-btn"
          >
            Resume
          </a>
        </li>
      </ul>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
