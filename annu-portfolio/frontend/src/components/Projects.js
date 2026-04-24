import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Projects.css';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/projects')
      .then(res => setProjects(res.data))
      .catch(() => setProjects([
        {
          _id: '1',
          title: 'WanderNest – Vacation Rental Platform',
          description: 'Engineered a full-stack rental marketplace with RESTful APIs supporting end-to-end listing management, image uploads via Cloudinary CDN, and real-time geocoding using OpenStreetMap Nominatim API. Implemented secure user authentication with Passport.js and role-based authorization.',
          tech: ['Node.js', 'Express.js', 'MongoDB Atlas', 'Cloudinary', 'Passport.js', 'EJS'],
          github: 'https://github.com/Annu45/wandernest',
          live: ''
        },
        {
          _id: '2',
          title: 'Dr. B.R. Ambedkar 3D AI Avatar',
          description: 'Built a retrieval-based response pipeline using FastAPI, LangChain, and LLM APIs. Deployed backend on Render and frontend on Vercel with CI/CD via GitHub. Integrated MongoDB Atlas for persistent query storage and usage analytics.',
          tech: ['FastAPI', 'LangChain', 'MongoDB Atlas', 'React', 'Python', 'Render'],
          github: '',
          live: 'https://ambedkar-rag-backend.vercel.app/'
        },
        {
          _id: '3',
          title: 'Personal Portfolio',
          description: 'Full-stack MERN portfolio with REST APIs serving dynamic project and skill data stored in MongoDB Atlas. Designed fully responsive React UI with component-based architecture and smooth navigation.',
          tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API'],
          github: 'https://github.com/Annu45/Portfolio',
          live: ''
        },
        {
          _id: '4',
          title: 'Random Image Generator',
          description: 'Spring Boot web application using MVC architecture to fetch and display random images via REST API integration. Integrated Swagger for automated API documentation and designed a responsive Bootstrap frontend.',
          tech: ['Java', 'Spring Boot', 'REST API', 'Swagger', 'Bootstrap'],
          github: 'https://github.com/Annu45/Random_Image_Generator.git',
          live: ''
        }
      ]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return (
    <section id="projects"><div className="container"><p style={{ color: 'var(--text-secondary)' }}>Loading projects...</p></div></section>
  );

  return (
    <section id="projects">
      <div className="container">
        <p className="section-subtitle">// things i've built</p>
        <h2 className="section-title">Featured <span>Projects</span></h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={p._id} className="project-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="project-top">
                <i className="fas fa-folder-open project-icon"></i>
                <div className="project-actions">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" title="GitHub">
                      <i className="fab fa-github"></i>
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" title="Live Demo">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                  )}
                </div>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tech">
                {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
