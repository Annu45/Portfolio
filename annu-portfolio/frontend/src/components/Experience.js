import React from 'react';
import './Experience.css';

const experience = {
  company: 'DIAT Pune (Govt. of India, MoD)',
  role: 'Winter Research Intern',
  period: 'Dec 2025 – Jan 2026',
  project: 'Dr. B.R. Ambedkar 3D AI Avatar',
  guide: 'Guided by Prof. C.R.S Kumar (DIAT)',
  points: [
    'Built a retrieval-based response pipeline using FastAPI, LangChain, and LLM APIs on a curated knowledge base as part of a government-supervised 15-member team.',
    'Deployed backend on Render and frontend on Vercel; configured CI/CD via GitHub enabling zero-downtime updates during high-traffic live demonstrations.',
    'Implemented API failover strategies to handle rate limits; integrated MongoDB Atlas for persistent query storage and usage analytics across sessions.'
  ],
  links: [
    { label: 'Live Demo', url: 'https://ambedkar-rag-backend.vercel.app/', icon: 'fas fa-external-link-alt' },
    { label: 'Certificate', url: 'https://drive.google.com/file/d/19PXCLSK9FElpUFQH-RPDNb7ptYLdhnIg/view?usp=drivesdk', icon: 'fas fa-certificate' }
  ]
};

export default function Experience() {
  return (
    <section id="experience" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-subtitle">// where i've worked</p>
        <h2 className="section-title">Work <span>Experience</span></h2>
        <div className="exp-card">
          <div className="exp-header">
            <div>
              <h3 className="exp-role">{experience.role}</h3>
              <div className="exp-company">{experience.company}</div>
              <div className="exp-project">{experience.project} · <em>{experience.guide}</em></div>
            </div>
            <div className="exp-period">
              <i className="fas fa-calendar-alt"></i>
              {experience.period}
            </div>
          </div>
          <ul className="exp-points">
            {experience.points.map((p, i) => (
              <li key={i}>
                <span className="exp-bullet">▸</span>
                {p}
              </li>
            ))}
          </ul>
          <div className="exp-links">
            {experience.links.map(l => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="exp-link">
                <i className={l.icon}></i> {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
