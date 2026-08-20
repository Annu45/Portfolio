export default function Navbar() {
  return (
    <header className="navbar" id="navbar">
      <div className="container nav-inner">
        <div className="nav-brand" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Annu<span className="dot">.</span>
        </div>
        <nav className="nav-links" id="navLinks">
          <a href="#about" className="nav-link" data-section="about">About</a>
          <a href="#experience" className="nav-link" data-section="experience">Experience</a>
          <a href="#projects" className="nav-link" data-section="projects">Projects</a>
          <a href="#leadership" className="nav-link" data-section="leadership">Leadership</a>
          <a href="#skills" className="nav-link" data-section="skills">Skills</a>
          <a href="#achievements" className="nav-link" data-section="achievements">Achievements</a>
          <a href="#contact" className="nav-link" data-section="contact">Contact</a>
        </nav>
        <div className="nav-actions">
          <button className="theme-toggle" id="themeToggle" role="switch" aria-checked="false" aria-label="Toggle dark mode">
            <span className="knob">☀️</span>
          </button>
          <span className="nav-resume-btn-wrap">
            <a href="/Annu_Mathur_Resume.pdf" download className="nav-resume-btn">Resume</a>
          </span>
          <button className="hamburger" id="hamburger" aria-label="Open menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
