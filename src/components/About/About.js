import React, { useEffect, useMemo, useRef } from 'react';
import { about } from '../../data/content';
import { clamp, prefersReducedMotion } from '../../hooks/motion';
import photo from '../Image/fotoku.jpeg';
import './About.css';

const About = () => {
  const words = useMemo(() => about.statement.split(' '), []);
  const para = useRef(null);
  const refs = useRef([]);

  // Kata-kata menyala satu per satu mengikuti posisi scroll.
  useEffect(() => {
    const el = para.current;
    if (!el || prefersReducedMotion()) return undefined;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const start = vh * 0.88;
      const end = vh * 0.32;
      const p = clamp((start - r.top) / (start - end + r.height));
      const n = words.length;
      refs.current.forEach((w, i) => {
        if (w) w.style.setProperty('--l', clamp((p * (n + 10) - i) / 10).toFixed(3));
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [words]);

  return (
    <section className="about" id="about">
      <div className="container about-grid">
        <figure className="about-photo">
          <img src={photo} alt="Portrait of Ryan Ferdiansyah" loading="lazy" />
        </figure>

        <div className="about-body">
          <p className="about-statement" ref={para}>
            {words.map((w, i) => (
              <span key={i} className="about-word" ref={(n) => { refs.current[i] = n; }}>
                {w}{' '}
              </span>
            ))}
          </p>

          <dl className="about-facts">
            {about.facts.map((f) => (
              <div key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default About;
