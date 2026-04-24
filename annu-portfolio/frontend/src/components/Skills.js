import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Skills.css';

const icons = {
  'Languages': 'fas fa-code',
  'Backend': 'fas fa-server',
  'Frontend': 'fas fa-desktop',
  'Databases & Cloud': 'fas fa-database',
  'Tools': 'fas fa-tools'
};

const colors = {
  'Languages': '#8b5cf6',
  'Backend': '#06b6d4',
  'Frontend': '#10b981',
  'Databases & Cloud': '#f59e0b',
  'Tools': '#ef4444'
};

export default function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get('/api/skills')
      .then(res => setSkills(res.data))
      .catch(() => setSkills([
        { _id: '1', category: 'Languages', items: ['Java', 'C++', 'JavaScript', 'Python', 'SQL'] },
        { _id: '2', category: 'Backend', items: ['Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'LangChain', 'REST APIs'] },
        { _id: '3', category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Bootstrap'] },
        { _id: '4', category: 'Databases & Cloud', items: ['MongoDB Atlas', 'MySQL'] },
        { _id: '5', category: 'Tools', items: ['Git', 'GitHub', 'Postman', 'VS Code', 'IntelliJ', 'Cloudinary'] }
      ]));
  }, []);

  return (
    <section id="skills" style={{ background: 'var(--bg-secondary)' }}>
      <div className="container">
        <p className="section-subtitle">// what i work with</p>
        <h2 className="section-title">Technical <span>Skills</span></h2>
        <div className="skills-grid">
          {skills.map(s => (
            <div key={s._id} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon" style={{ color: colors[s.category] || 'var(--accent-purple)' }}>
                  <i className={icons[s.category] || 'fas fa-star'}></i>
                </div>
                <h3 className="skill-category" style={{ color: colors[s.category] || 'var(--accent-purple)' }}>
                  {s.category}
                </h3>
              </div>
              <div className="skill-items">
                {s.items.map(item => (
                  <span key={item} className="skill-item">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
