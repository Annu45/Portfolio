export default function Achievements({ items }) {
  return (
    <section id="achievements">
      <div className="container">
        <div className="reveal">
          <span className="section-subtitle">— what I've accomplished</span>
          <h2 className="section-title">Achievements &amp; <span>certifications</span> 🏆</h2>
        </div>
        <div className="ach-masonry">
          {items.map((a) => (
            <div className="ach-card reveal" style={{ '--ach-color': a.color }} key={a._id}>
              <div className="ach-emoji">{a.emoji}</div>
              <div className="ach-title">{a.title}</div>
              <div className="ach-desc">{a.description}</div>
              {a.linkUrl && (
                <a href={a.linkUrl} target="_blank" rel="noreferrer" className="ach-link">{a.linkLabel}</a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
