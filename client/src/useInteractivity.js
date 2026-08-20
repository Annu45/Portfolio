import { useEffect } from 'react';

/**
 * Wires up all the vanilla-JS style interactivity (theme toggle, scroll reveal,
 * animated counters, magnetic buttons, tilt, typewriter, vine progress) once the
 * DOM for a section actually exists. Call with `ready = true` once your API data
 * has loaded and rendered.
 */
export function useInteractivity(ready) {
  useEffect(() => {
    if (!ready) return;

    const cleanups = [];

    /* ---------- Vine scroll-progress spine ---------- */
    const vineFill = document.getElementById('vineFill');
    const vineLength = vineFill ? vineFill.getTotalLength() : 0;
    if (vineFill) {
      vineFill.style.strokeDasharray = vineLength;
      vineFill.style.strokeDashoffset = vineLength;
    }
    function updateVine() {
      if (!vineFill) return;
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      vineFill.style.strokeDashoffset = vineLength * (1 - pct);
    }

    /* ---------- Theme toggle ---------- */
    const root = document.documentElement;
    const themeToggle = document.getElementById('themeToggle');
    const stored = localStorage.getItem('annu-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) root.classList.add('dark');

    function syncToggleLabel() {
      if (!themeToggle) return;
      const isDark = root.classList.contains('dark');
      themeToggle.setAttribute('aria-checked', String(isDark));
      const knob = themeToggle.querySelector('.knob');
      if (knob) knob.textContent = isDark ? '🌙' : '☀️';
    }
    syncToggleLabel();

    function onThemeClick() {
      root.classList.toggle('dark');
      localStorage.setItem('annu-theme', root.classList.contains('dark') ? 'dark' : 'light');
      syncToggleLabel();
    }
    themeToggle?.addEventListener('click', onThemeClick);
    cleanups.push(() => themeToggle?.removeEventListener('click', onThemeClick));

    /* ---------- Navbar scroll state + active link ---------- */
    const navbar = document.getElementById('navbar');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function onScroll() {
      if (window.scrollY > 40) navbar?.classList.add('scrolled');
      else navbar?.classList.remove('scrolled');

      let current = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 140;
        if (window.scrollY >= top) current = sec.id;
      });
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.section === current);
      });

      updateVine();
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    cleanups.push(() => window.removeEventListener('scroll', onScroll));

    /* ---------- Mobile menu ---------- */
    const hamburger = document.getElementById('hamburger');
    const navLinksWrap = document.getElementById('navLinks');
    function onHamburger() { navLinksWrap?.classList.toggle('open'); }
    hamburger?.addEventListener('click', onHamburger);
    cleanups.push(() => hamburger?.removeEventListener('click', onHamburger));

    const linkClickHandlers = [];
    navLinks.forEach(link => {
      const handler = () => navLinksWrap?.classList.remove('open');
      link.addEventListener('click', handler);
      linkClickHandlers.push([link, handler]);
    });
    cleanups.push(() => linkClickHandlers.forEach(([l, h]) => l.removeEventListener('click', h)));

    /* ---------- Smooth scroll for in-page links ---------- */
    const anchorEls = document.querySelectorAll('a[href^="#"]');
    const anchorHandlers = [];
    anchorEls.forEach(a => {
      const handler = (e) => {
        const id = a.getAttribute('href').slice(1);
        const target = document.getElementById(id);
        if (target) {
          e.preventDefault();
          window.scrollTo({ top: target.offsetTop - 74, behavior: 'smooth' });
        }
      };
      a.addEventListener('click', handler);
      anchorHandlers.push([a, handler]);
    });
    cleanups.push(() => anchorHandlers.forEach(([a, h]) => a.removeEventListener('click', h)));

    /* ---------- Hero typewriter ---------- */
    const roles = ['Full-Stack Developer', 'CSE Undergrad @ NIT Srinagar', 'Backend & AI Enthusiast', 'Problem Solver — 264+ LeetCode'];
    const roleEl = document.getElementById('roleText');
    let rIdx = 0, cIdx = 0, deleting = false, typeTimer = null, stopped = false;
    function typeLoop() {
      if (!roleEl || stopped) return;
      const word = roles[rIdx];
      if (!deleting) {
        cIdx++;
        roleEl.textContent = word.slice(0, cIdx);
        if (cIdx === word.length) { deleting = true; typeTimer = setTimeout(typeLoop, 1700); return; }
      } else {
        cIdx--;
        roleEl.textContent = word.slice(0, cIdx);
        if (cIdx === 0) { deleting = false; rIdx = (rIdx + 1) % roles.length; }
      }
      typeTimer = setTimeout(typeLoop, deleting ? 35 : 75);
    }
    typeLoop();
    cleanups.push(() => { stopped = true; clearTimeout(typeTimer); });

    /* ---------- Scroll reveal ---------- */
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
    cleanups.push(() => io.disconnect());

    /* ---------- Animated counters ---------- */
    const countEls = document.querySelectorAll('[data-count]');
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        countIO.unobserve(el);
        const target = parseFloat(el.dataset.count);
        const isDecimal = el.dataset.decimal === 'true';
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const duration = 1200;
        const start = performance.now();
        function tick(now) {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          const value = target * eased;
          el.textContent = prefix + (isDecimal ? value.toFixed(2) : Math.round(value)) + suffix;
          if (p < 1) requestAnimationFrame(tick);
          else el.textContent = prefix + (isDecimal ? target.toFixed(2) : Math.round(target)) + suffix;
        }
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.4 });
    countEls.forEach(el => countIO.observe(el));
    cleanups.push(() => countIO.disconnect());

    /* ---------- Magnetic buttons ---------- */
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const magnets = document.querySelectorAll('.btn-primary, .btn-secondary, .nav-resume-btn');
    const magnetHandlers = [];
    if (isFinePointer) {
      magnets.forEach(btn => {
        const move = (e) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          btn.style.transform = `translate(${x * 0.18}px, ${y * 0.35 - 3}px)`;
        };
        const leave = () => { btn.style.transform = ''; };
        btn.addEventListener('mousemove', move);
        btn.addEventListener('mouseleave', leave);
        magnetHandlers.push([btn, move, leave]);
      });
    }
    cleanups.push(() => magnetHandlers.forEach(([b, m, l]) => {
      b.removeEventListener('mousemove', m);
      b.removeEventListener('mouseleave', l);
    }));

    /* ---------- Tilt on project visuals / portrait ---------- */
    const tiltEls = document.querySelectorAll('.project-visual, .portrait-blob');
    const tiltHandlers = [];
    if (isFinePointer) {
      tiltEls.forEach(el => {
        const move = (e) => {
          const rect = el.getBoundingClientRect();
          const px = (e.clientX - rect.left) / rect.width - 0.5;
          const py = (e.clientY - rect.top) / rect.height - 0.5;
          el.style.transform = `perspective(700px) rotateY(${px * 10}deg) rotateX(${py * -10}deg)`;
        };
        const leave = () => { el.style.transform = ''; };
        el.addEventListener('mousemove', move);
        el.addEventListener('mouseleave', leave);
        tiltHandlers.push([el, move, leave]);
      });
    }
    cleanups.push(() => tiltHandlers.forEach(([e, m, l]) => {
      e.removeEventListener('mousemove', m);
      e.removeEventListener('mouseleave', l);
    }));

    /* ---------- Copy email to clipboard ---------- */
    const copyHint = document.getElementById('copyHint');
    function onCopy(e) {
      e.preventDefault();
      e.stopPropagation();
      const value = copyHint.dataset.copy;
      navigator.clipboard.writeText(value).then(() => {
        const original = copyHint.textContent;
        copyHint.textContent = 'Copied ✓';
        copyHint.classList.add('copied');
        setTimeout(() => {
          copyHint.textContent = original;
          copyHint.classList.remove('copied');
        }, 1600);
      });
    }
    copyHint?.addEventListener('click', onCopy);
    cleanups.push(() => copyHint?.removeEventListener('click', onCopy));

    /* ---------- Footer year ---------- */
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    return () => cleanups.forEach(fn => fn());
  }, [ready]);
}
