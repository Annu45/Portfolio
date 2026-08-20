import { useEffect, useState } from 'react';
import { api } from './api.js';
import { useInteractivity } from './useInteractivity.js';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Leadership from './components/Leadership.jsx';
import Projects from './components/Projects.jsx';
import OpenSource from './components/OpenSource.jsx';
import Skills from './components/Skills.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([
      api.getExperience(),
      api.getLeadership(),
      api.getProjects(),
      api.getSkills(),
      api.getAchievements()
    ])
      .then(([experience, leadership, projects, skills, achievements]) => {
        setData({ experience, leadership, projects, skills, achievements });
      })
      .catch((err) => setError(err.message));
  }, []);

  useInteractivity(!!data);

  if (error) {
    return (
      <div style={{ padding: 60, textAlign: 'center', fontFamily: 'sans-serif' }}>
        <p>Couldn't load content from the API ({error}).</p>
        <p>Make sure the server is running and VITE_API_URL points to it.</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div style={{ padding: 60, textAlign: 'center', fontFamily: 'sans-serif' }}>
        Loading…
      </div>
    );
  }

  return (
    <>
      <div className="vine-spine" aria-hidden="true">
        <svg viewBox="0 0 40 800" preserveAspectRatio="none">
          <path id="vineTrack" className="vine-track" d="M20,0 C10,80 30,160 20,240 C10,320 30,400 20,480 C10,560 30,640 20,720 C15,760 20,780 20,800" vectorEffect="non-scaling-stroke"/>
          <path id="vineFill" className="vine-fill" d="M20,0 C10,80 30,160 20,240 C10,320 30,400 20,480 C10,560 30,640 20,720 C15,760 20,780 20,800" vectorEffect="non-scaling-stroke"/>
        </svg>
      </div>

      <Navbar />
      <Hero />
      <About />
      <Experience items={data.experience} />
      <Leadership items={data.leadership} />
      <Projects items={data.projects} />
      <OpenSource />
      <Skills items={data.skills} />
      <Achievements items={data.achievements} />
      <Contact />
      <Footer />
    </>
  );
}
