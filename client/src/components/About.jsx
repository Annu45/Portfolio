export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="reveal">
          <span className="section-subtitle">— get to know me</span>
          <h2 className="section-title">A little <span>about</span> me</h2>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              Hi! I'm <strong>Annu Mathur</strong>, a Computer Science undergraduate at
              <strong> NIT Srinagar</strong> entering my final year. I'm passionate about backend
              development, scalable systems, and AI-powered applications.
            </p>
            <p>
              I enjoy building RESTful APIs and full-stack web applications with Node.js,
              Express.js, MongoDB, FastAPI, and React. Through academic projects and a research
              internship, I've gained hands-on experience designing backend services, integrating
              databases, and shipping AI-powered features from prototype to production.
            </p>
            <p>
              I'm also an enthusiastic problem solver — 270+ problems on LeetCode
            </p>
            <div className="about-courses">
              <h4>Relevant coursework</h4>
              <div className="course-tags">
                <span className="tag">Data Structures &amp; Algorithms</span>
                <span className="tag">Object-Oriented Programming</span>
                <span className="tag">Database Management Systems</span>
                <span className="tag">Operating Systems</span>
                <span className="tag">Computer Networks</span>
              </div>
            </div>
          </div>
          <div className="about-stats reveal reveal-delay-1">
            <div className="stat-petal">
              <div className="stat-num" data-count="270" data-suffix="+">0</div>
              <div className="stat-label">LeetCode Problems</div>
            </div>
            <div className="stat-petal">
              <div className="stat-num" data-count="1711">0</div>
              <div className="stat-label">Contest Rating</div>
            </div>
            <div className="stat-petal">
              <div className="stat-num" data-count="13" data-prefix="Top " data-suffix="%">Top 0%</div>
              <div className="stat-label">LeetCode Ranking</div>
            </div>
            <div className="stat-petal">
              <div className="stat-num" data-count="7.65" data-decimal="true">0</div>
              <div className="stat-label">CGPA at NIT Srinagar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
