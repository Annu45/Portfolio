export default function Leadership({ items }) {
  return (
    <section id="leadership" className="tight">
      <div className="container">
        <div className="reveal">
          <span className="section-subtitle">— beyond the code</span>
          <h2 className="section-title">Leadership <span>experience</span></h2>
        </div>
        {items.map((item) => (
          <div className="leader-card reveal" key={item._id}>
            <div className="leader-icon">{item.icon || '🎪'}</div>
            <div>
              <div className="leader-title">{item.role}</div>
              <div className="leader-desc">
                {item.points.join(' ')} — {item.period}
                {item.links?.map((link, i) => (
                  <span key={i}> · <a href={link.url} target="_blank" rel="noreferrer">{link.label}</a></span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
