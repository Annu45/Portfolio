export default function Experience({ items }) {
  return (
    <section id="experience">
      <div className="container">
        <div className="reveal">
          <span className="section-subtitle">— where I've worked</span>
          <h2 className="section-title">Work <span>experience</span></h2>
        </div>

        <div className="timeline">
          {items.map((exp) => (
            <div className="timeline-node reveal" key={exp._id}>
              <div className="exp-card">
                <div className="exp-header">
                  <div>
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-company">{exp.organization}</div>
                    {exp.projectLine && <div className="exp-project">{exp.projectLine}</div>}
                  </div>
                  <div className="exp-period">{exp.period}</div>
                </div>
                <ul className="exp-points">
                  {exp.points.map((pt, i) => (
                    <li key={i}><span className="exp-bullet">▸</span>{pt}</li>
                  ))}
                </ul>
                {exp.links?.length > 0 && (
                  <div className="exp-links">
                    {exp.links.map((link, i) => (
                      <a key={i} href={link.url} target="_blank" rel="noreferrer" className="exp-link">{link.label}</a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
