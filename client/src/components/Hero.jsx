export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="blob hero-bg-blob-1" aria-hidden="true"></div>
      <div className="blob hero-bg-blob-2" aria-hidden="true"></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          
          <h1 className="hero-name">
            <span className="script">Hi, I'm</span>
            Annu Mathur
          </h1>
          <div className="hero-role">
            <span>$</span>&nbsp;<span className="role-text" id="roleText"></span><span className="cursor"></span>
          </div>
          <p className="hero-desc">
            A Computer Science undergrad at <strong>NIT Srinagar</strong>, building full-stack web apps
            and AI-powered systems — from RAG pipelines with FastAPI &amp; Gemini to MERN-stack products
            end to end. I like backend architecture, clean APIs, and solving problems until they click.
          </p>
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Let's Talk</a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Annu45" target="_blank" rel="noreferrer" className="social-icon" title="GitHub" aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.84 3.14 8.94 7.5 10.39.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.7-1.48-2.44-.28-5-1.22-5-5.4 0-1.2.43-2.17 1.13-2.94-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12a10.5 10.5 0 0 1 5.5 0c2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.77 1.13 1.74 1.13 2.94 0 4.2-2.57 5.12-5.02 5.39.39.34.74 1.02.74 2.06 0 1.49-.01 2.68-.01 3.05 0 .29.2.64.76.53a10.53 10.53 0 0 0 7.48-10.39C23.02 5.24 18.27.5 12 .5Z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/annumathur003/" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z"/></svg>
            </a>
            <a href="mailto:annumathur003@gmail.com" className="social-icon" title="Email" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 4.5A1.5 1.5 0 0 1 3 3h18a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 21 21H3a1.5 1.5 0 0 1-1.5-1.5v-15Zm2.4.75 8.1 6.3 8.1-6.3H3.9Zm16.6 1.34-8.1 6.3a1.5 1.5 0 0 1-1.8 0l-8.1-6.3v11.66h18V6.59Z"/></svg>
            </a>
            <a href="https://leetcode.com/u/annumathur003" target="_blank" rel="noreferrer" className="social-icon" title="LeetCode" aria-label="LeetCode">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.48 22a5.5 5.5 0 0 1-3.94-1.65l-4.3-4.4a5.5 5.5 0 0 1 0-7.7l4.94-5.05A5.5 5.5 0 0 1 14.12 1.5h1.02l-6.5 6.65a3.1 3.1 0 0 0 0 4.35l4.3 4.4a3.1 3.1 0 0 0 4.42 0l1.7-1.75 1.6 1.65-1.7 1.75A5.5 5.5 0 0 1 15.02 20l-1.54 2Zm7.4-9.7-3.63-3.7-1.6 1.63 3.62 3.72 1.6-1.65ZM9.5 12h7v2.3h-7V12Z"/></svg>
            </a>
          </div>
        </div>

        <div className="hero-portrait-wrap">
          <div className="portrait-blob">
            <svg className="frame" viewBox="0 0 200 200" aria-hidden="true">
              <path d="M45,-58C58,-49,68,-34,71,-17C74,0,70,19,60,35C50,51,34,64,15,69C-4,73,-25,68,-42,56C-59,44,-72,25,-74,4C-76,-16,-67,-38,-51,-51C-35,-64,-13,-69,6,-73C25,-77,32,-67,45,-58Z" transform="translate(100 100)" fill="none" stroke="var(--rose)" strokeWidth="1.5" strokeDasharray="4 6" opacity="0.5"/>
            </svg>
            <div className="portrait-img">
              
                  <img src="/profile.jpg" alt="Annu Mathur" />
              
            </div>
          </div>
          <div className="portrait-badge">
            <span className="num" data-count="270" data-suffix="+">0</span>
            <span>LeetCode<br/>problems solved</span>
          </div>
          <div className="portrait-badge portrait-badge-2">
            <span>🎓 NIT Srinagar<br/>CSE '27</span>
          </div>
        </div>
      </div>
    </section>
  );
}
