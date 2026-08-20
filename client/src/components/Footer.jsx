export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-photo">
          <div className="inner">
            {/* Same swap as the hero: put profile.jpg in client/public/ then use <img src="/profile.jpg" alt="Annu Mathur" /> */}
            <span className="mono">AM</span>
          </div>
        </div>
        <div className="footer-mid">
          <h3>Annu Mathur</h3>
          <p>Full-stack developer &amp; CSE undergrad at NIT Srinagar, crafting backend systems and AI-powered products with care.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/Annu45" target="_blank" rel="noreferrer" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.98 5.24.98 11.52c0 4.84 3.14 8.94 7.5 10.39.55.1.75-.24.75-.53 0-.26-.01-1.13-.02-2.05-3.05.66-3.7-1.3-3.7-1.3-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.67.08-.67 1.1.08 1.68 1.13 1.68 1.13.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.7-1.48-2.44-.28-5-1.22-5-5.4 0-1.2.43-2.17 1.13-2.94-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.12a10.5 10.5 0 0 1 5.5 0c2.1-1.42 3.02-1.12 3.02-1.12.6 1.52.22 2.64.11 2.92.7.77 1.13 1.74 1.13 2.94 0 4.2-2.57 5.12-5.02 5.39.39.34.74 1.02.74 2.06 0 1.49-.01 2.68-.01 3.05 0 .29.2.64.76.53a10.53 10.53 0 0 0 7.48-10.39C23.02 5.24 18.27.5 12 .5Z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/annumathur003/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z"/></svg>
          </a>
          <a href="mailto:annumathur003@gmail.com" aria-label="Email">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 4.5A1.5 1.5 0 0 1 3 3h18a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 21 21H3a1.5 1.5 0 0 1-1.5-1.5v-15Zm2.4.75 8.1 6.3 8.1-6.3H3.9Zm16.6 1.34-8.1 6.3a1.5 1.5 0 0 1-1.8 0l-8.1-6.3v11.66h18V6.59Z"/></svg>
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© <span id="year"></span> Annu Mathur. Designed &amp; built with <span className="heart">♥</span> and a lot of coffee.</span>
        <a href="#hero" className="back-to-top">Back to top ↑</a>
      </div>
    </footer>
  );
}
