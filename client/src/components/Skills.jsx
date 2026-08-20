const gradients = [
  'linear-gradient(135deg,#E0507A,#B8375C)',
  'linear-gradient(135deg,#C9922C,#E8C078)',
  'linear-gradient(135deg,#6E8F6E,#4f6f52)',
  'linear-gradient(135deg,#8b6bb0,#5f4a7d)',
  'linear-gradient(135deg,#4a90a4,#2e6a7d)'
];

export default function Skills({ items }) {
  return (
    <section id="skills">
      <div className="container">
        <div className="reveal">
          <span className="section-subtitle">— what I work with</span>
          <h2 className="section-title">Technical <span>skills</span></h2>
        </div>
        <div className="skills-flow">
          {items.map((skill, idx) => (
            <div className={`skill-petal reveal ${idx % 3 === 1 ? 'reveal-delay-1' : idx % 3 === 2 ? 'reveal-delay-2' : ''}`} key={skill._id}>
              <div className="skill-head">
                <div className="skill-ico" style={{ background: gradients[idx % gradients.length] }}>{skill.icon}</div>
                <div className="skill-cat">{skill.category}</div>
              </div>
              <div className="skill-pills">
                {skill.items.map((it, i) => <span className="skill-pill" key={i}>{it}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
