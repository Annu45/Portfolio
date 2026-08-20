export default function OpenSource() {
  return (
    <section id="opensource" className="tight">
      <div className="container">
        <div className="reveal">
          <span className="section-subtitle">— giving back</span>
          <h2 className="section-title">Open source <span>contribution</span></h2>
        </div>
        <div className="oss-card reveal">
          <div className="oss-icon">🌱</div>
          <div>
            <div className="oss-title">Eventra — GirlScript Summer of Code 2026</div>
            <p className="oss-desc">
              Fixed responsive layout issues and refined form validation on the Feedback and Contact
              pages, removing duplicated UI components in the process. Resolved merge conflicts and
              addressed maintainer review feedback to get the change merged (PR #991).
            </p>
            <div className="oss-meta">
              <span className="tag">React.js</span><span className="tag">JavaScript</span><span className="tag">Git</span><span className="tag">GitHub</span>
            </div>
            <div className="project-links" style={{ marginTop: 16 }}>
              <a href="https://github.com/SandeepVashishtha/Eventra/pull/851" target="_blank" rel="noreferrer">View Pull Request →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
