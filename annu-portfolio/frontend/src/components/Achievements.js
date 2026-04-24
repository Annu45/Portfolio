import React from 'react';
import './Achievements.css';

const achievements = [
  {
    icon: '🏆',
    title: 'InApp–IEEE CS Student Project Awards 2026',
    desc: 'Dr. B.R. Ambedkar AI Avatar project selected for elevator pitch round out of institute-wide nominations (Project ID: IIA-2225).',
    color: '#f59e0b'
  },
  {
    icon: '💻',
    title: 'LeetCode — Top 12.55%',
    desc: '251+ problems solved. Contest Rating: 1711. 100-Day Badge. Max Streak: 41 days.',
    link: { label: 'LeetCode Profile', url: 'https://leetcode.com/u/annumathur003/' },
    color: '#10b981'
  },
  {
    icon: '📜',
    title: 'DSA with Java — Apna College',
    desc: 'Completed comprehensive Data Structures & Algorithms course with Java.',
    link: { label: 'Certificate', url: 'https://drive.google.com/file/d/1XKpw9DGs5zahjQTT5VNUaCYtGMwWhYg9/view?usp=drivesdk' },
    color: '#06b6d4'
  },
  {
    icon: '🌐',
    title: 'Full-Stack Web Development — Apna College',
    desc: 'Completed Full-Stack Web Development certification.',
    link: { label: 'Certificate', url: 'https://drive.google.com/file/d/1rQrZd5TaFLgtJKrbgLQgWFt1RXPftgiB/view?usp=drivesdk' },
    color: '#8b5cf6'
  },
  {
    icon: '☕',
    title: 'Java (Basics) — HackerRank',
    desc: 'Certified Java developer by HackerRank.',
    link: { label: 'Certificate', url: 'https://www.hackerrank.com/certificates/iframe/18938f831440' },
    color: '#ef4444'
  },
  {
    icon: '🎪',
    title: 'Leadership — Range-Chinar Fest, NIT Srinagar',
    desc: 'Core team member; managed registration and payment for 1,000+ participants.',
    link: { label: 'Certificate', url: 'https://drive.google.com/file/d/1Peks7EgX0gO0nXI1mbg-nX2EZgiLTFEJ/view?usp=drivesdk' },
    color: '#f97316'
  }
];

export default function Achievements() {
  return (
    <section id="achievements">
      <div className="container">
        <p className="section-subtitle">// what i've accomplished</p>
        <h2 className="section-title">Achievements <span>&amp; Certifications</span> 🏆</h2>
        <div className="ach-grid">
          {achievements.map((a, i) => (
            <div key={i} className="ach-card" style={{ '--ach-color': a.color }}>
              <div className="ach-emoji">{a.icon}</div>
              <div className="ach-body">
                <h3 className="ach-title">{a.title}</h3>
                <p className="ach-desc">{a.desc}</p>
                {a.link && (
                  <a href={a.link.url} target="_blank" rel="noreferrer" className="ach-link">
                    <i className="fas fa-external-link-alt"></i> {a.link.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
