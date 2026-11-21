import React, { useEffect, useRef, useState } from 'react';
import { experience, highlights } from '../../data/content';
import { clamp, prefersReducedMotion } from '../../hooks/motion';
import './Experience.css';

const groups = [
  { label: 'Work', items: experience.work },
  { label: 'Education', items: experience.education },
  { label: 'Certifications and training', items: experience.training },
  { label: 'Organizations', items: experience.organizations },
].filter((g) => g.items && g.items.length);

// Angka menghitung naik sekali saat terlihat.
const Stat = ({ to, decimals = 0, suffix = '', label }) => {
  const ref = useRef(null);
  const [val, setVal] = useState(prefersReducedMotion() ? to : 0);
  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) { setVal(to); return undefined; }
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const run = (now) => {
        const p = clamp((now - t0) / 1600);
        setVal(to * (1 - Math.pow(1 - p, 4)));
        if (p < 1) raf = requestAnimationFrame(run);
      };
      raf = requestAnimationFrame(run);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);
  return (
    <div className="stat" ref={ref}>
      <p className="stat-num">{val.toFixed(decimals)}{suffix}</p>
      <p className="stat-label">{label}</p>
    </div>
  );
};

const Experience = () => {
  const tl = useRef(null);
  const fill = useRef(null);

  // Garis timeline tergambar mengikuti scroll; titik menyala saat tercapai.
  useEffect(() => {
    const el = tl.current;
    if (!el) return undefined;
    const items = Array.from(el.querySelectorAll('.tl-item'));
    if (prefersReducedMotion()) {
      items.forEach((i) => i.classList.add('is-lit'));
      if (fill.current) fill.current.style.transform = 'scaleY(1)';
      return undefined;
    }
    let raf = 0;
    const update = () => {
      raf = 0;
      const mark = window.innerHeight * 0.6;
      const r = el.getBoundingClientRect();
      if (fill.current) fill.current.style.transform = `scaleY(${clamp((mark - r.top) / r.height)})`;
      items.forEach((i) => i.classList.toggle('is-lit', i.getBoundingClientRect().top < mark));
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
  }, []);

  return (
    <section className="exp" id="experience">
      <div className="container exp-grid">
        <div className="exp-head">
          <h2 className="section-title">Experience</h2>
          <div className="stats">
            {highlights.map((h) => <Stat key={h.label} {...h} />)}
          </div>
        </div>

        <div className="tl" ref={tl}>
          <span className="tl-line" aria-hidden="true">
            <span className="tl-fill" ref={fill} />
          </span>

          {groups.map((g) => (
            <div className="tl-group" key={g.label}>
              <h3 className="tl-group-title">{g.label}</h3>
              {g.items.map((it) => (
                <article className="tl-item" key={`${it.org}-${it.role}`}>
                  <span className="tl-dot" aria-hidden="true" />
                  <p className="tl-period">{it.period || 'Graduated'}</p>
                  <div className="tl-body">
                    <h4>{it.role}{it.program ? `, ${it.program}` : ''}</h4>
                    <p className="tl-org">{it.org}</p>
                    {it.points.length > 0 && (it.chips ? (
                      <ul className="tl-chips">
                        {it.points.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    ) : (
                      <ul className="tl-points">
                        {it.points.map((p) => <li key={p}>{p}</li>)}
                      </ul>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
