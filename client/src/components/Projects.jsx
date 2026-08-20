export default function Projects({ items }) {
  return (
    <section id="projects">
      <div className="container">
        <div className="reveal">
          <span className="section-subtitle">— things I've built</span>
          <h2 className="section-title">Featured <span>projects</span></h2>
        </div>

        {items.map((p, idx) => (
          <div className={`project-row reveal ${idx % 2 === 1 ? 'reverse' : ''}`} key={p._id}>
            <div className="project-visual">
              <span className="proj-num">{String(idx + 1).padStart(2, '0')}</span>
              <span className="icon-big">{p.icon}</span>
            </div>
            <div className="project-copy">
              <div className="project-tagline">{p.tagline}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tech">
                {p.tech.map((t, i) => <span className="tag" key={i}>{t}</span>)}
              </div>
              <div className="project-links">
                <a href={p.linkUrl} target="_blank" rel="noreferrer">{p.linkLabel} →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
