import React, { useEffect, useState } from 'react';
import './Hero.css';

const roles = ['Full Stack Developer', 'CS Student @ NIT Srinagar', 'Problem Solver', 'Open Source Enthusiast'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
      } else {
        setRoleIndex((roleIndex + 1) % roles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
      </div>
      <div className="container hero-content">
        <p className="hero-greeting animate-fade-up">👋 Hi there, I'm</p>
        <h1 className="hero-name animate-fade-up">Annu Mathur</h1>
        <div className="hero-role animate-fade-up">
          <span className="role-prefix">$ </span>
          <span className="role-text">{displayed}</span>
          <span className="cursor">|</span>
        </div>
        <p className="hero-desc animate-fade-up">
          A passionate developer building full-stack web applications and AI-powered systems.
          Currently pursuing B.Tech in CSE at NIT Srinagar.
        </p>
        <div className="hero-social animate-fade-up">
          <a href="https://github.com/Annu45" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/annu-mathur003" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="mailto:annumathur003@gmail.com" className="social-icon" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://leetcode.com/u/annumathur003" target="_blank" rel="noreferrer" className="social-icon" title="LeetCode">
            <i className="fas fa-code"></i>
          </a>
        </div>
        <div className="hero-btns animate-fade-up">
          <button className="btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
            View Projects
          </button>
          <button className="btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </button>
        </div>
      </div>
      <div className="scroll-hint">
        <div className="scroll-line"></div>
        <span>scroll</span>
      </div>
    </section>
  );
}
