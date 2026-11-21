import React, { useEffect, useRef, useState } from 'react';
import { projects } from '../../data/content';
import { hasFinePointer, prefersReducedMotion } from '../../hooks/motion';
import './Projects.css';

import img1 from '../Image/project1.png';
import img2 from '../Image/project2.png';
import img3 from '../Image/project3.png';
import img4 from '../Image/project4.png';
import img5 from '../Image/project5.png';
import img6 from '../Image/gerbangbeasiswa.png';

const images = {
  'project1.png': img1,
  'project2.png': img2,
  'project3.png': img3,
  'project4.png': img4,
  'project5.png': img5,
  'gerbangbeasiswa.png': img6,
};

const isLink = (href) => !!href && href !== '#';

const Projects = () => {
  const [open, setOpen] = useState(-1);
  const [hover, setHover] = useState(-1);
  const preview = useRef(null);
  const pos = useRef({ x: 0, y: 0, tx: 0, ty: 0, ready: false });

  // Preview gambar yang mengikuti kursor (hanya perangkat dengan mouse).
  useEffect(() => {
    const el = preview.current;
    if (!el || !hasFinePointer()) return undefined;
    const p = pos.current;
    let raf = 0;
    const loop = () => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      let x = p.tx + 32;
      if (x + w > window.innerWidth - 16) x = p.tx - w - 32;
      const y = Math.min(Math.max(p.ty - h / 2, 16), window.innerHeight - h - 16);
      if (!p.ready) { p.x = x; p.y = y; p.ready = true; }
      const k = prefersReducedMotion() ? 1 : 0.16;
      p.x += (x - p.x) * k;
      p.y += (y - p.y) * k;
      el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const onMove = (e) => { p.tx = e.clientX; p.ty = e.clientY; };
    window.addEventListener('pointermove', onMove, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  const showPreview = hover > -1 && hover !== open && !!projects[hover].image;

  return (
    <section className="work" id="work">
      <div className="container">
        <div className="work-head">
          <h2 className="section-title">Selected work</h2>
          <p className="work-count">{projects.length} projects</p>
        </div>

        <ul
          className={`work-list ${hover > -1 ? 'is-hovering' : ''}`}
          onMouseLeave={() => setHover(-1)}
        >
          {projects.map((p, i) => {
            const isOpen = open === i;
            const live = isLink(p.liveLink);
            const code = isLink(p.githubLink);
            return (
              <li
                key={p.title}
                className={`row ${isOpen ? 'is-open' : ''} ${hover === i ? 'is-hover' : ''}`}
                onMouseEnter={() => setHover(i)}
              >
                <button
                  className="row-btn"
                  aria-expanded={isOpen}
                  aria-controls={`panel-${i}`}
                  id={`row-${i}`}
                  data-cursor={isOpen ? 'Close' : 'Open'}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span className="row-title">{p.title}</span>
                  <span className="row-kind">{p.kind}{p.year ? `, ${p.year}` : ''}</span>
                  <span className="row-icon" aria-hidden="true" />
                </button>

                <div className="row-panel" id={`panel-${i}`} role="region" aria-labelledby={`row-${i}`}>
                  <div className="row-panel-inner">
                    <div className="row-body">
                      <div className="row-text">
                        <p>{p.description}</p>
                        {(live || code) && (
                          <div className="row-links">
                            {live && (
                              <a className="btn btn-solid" href={p.liveLink} target="_blank" rel="noopener noreferrer">
                                Live demo
                              </a>
                            )}
                            {code && (
                              <a className="btn btn-ghost" href={p.githubLink} target="_blank" rel="noopener noreferrer">
                                Source code
                              </a>
                            )}
                          </div>
                        )}
                      </div>
                      {p.technologies.length > 0 && (
                        <ul className="row-tech" aria-label="Technologies">
                          {p.technologies.map((t) => <li key={t}>{t}</li>)}
                        </ul>
                      )}
                      {p.image && (
                        <figure className="row-fig">
                          <img src={images[p.image]} alt={`${p.title} screenshot`} loading="lazy" />
                        </figure>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className={`preview ${showPreview ? 'is-on' : ''}`} ref={preview} aria-hidden="true">
        <div className="preview-card">
          {projects.map((p, i) => (p.image ? (
            <img key={p.title} src={images[p.image]} alt="" className={hover === i ? 'is-on' : ''} />
          ) : null))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
