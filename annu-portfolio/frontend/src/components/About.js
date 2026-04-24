import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-subtitle">// get to know me</p>
        <h2 className="section-title">About <span>Me</span></h2>
        <div className="about-grid">
          <div className="about-text">
            <p>
              Hi! I'm <strong>Annu Mathur</strong>, a 2nd-year Computer Science student at 
              <strong> NIT Srinagar</strong> (CGPA: 7.39), passionate about building 
              full-stack web applications and AI-powered systems.
            </p>
            <p>
              I've had the opportunity to work as a <strong>Winter Research Intern at DIAT Pune</strong> 
              (Govt. of India, MoD), where I built a government-deployed AI avatar system.
              I enjoy solving complex problems — from designing RESTful APIs to implementing RAG pipelines.
            </p>
            <p>
              When I'm not coding, you'll find me grinding LeetCode (Top 12.55% globally, 251+ problems)
              or contributing to my college's cultural fest.
            </p>
            <div className="about-courses">
              <h4>Relevant Coursework</h4>
              <div className="course-tags">
                {['Data Structures & Algorithms', 'OOP', 'Database Management Systems'].map(c => (
                  <span key={c} className="tag">{c}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="about-stats">
            <div className="stat-card">
              <div className="stat-num">251+</div>
              <div className="stat-label">LeetCode Problems</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">1711</div>
              <div className="stat-label">Contest Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">130+</div>
              <div className="stat-label">CodeChef Problems</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">Top 12%</div>
              <div className="stat-label">Global Ranking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
