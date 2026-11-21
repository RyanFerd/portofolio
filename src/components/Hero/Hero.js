import React, { useEffect, useRef, useState } from 'react';
import { profile } from '../../data/content';
import { prefersReducedMotion, useMagnetic } from '../../hooks/motion';
import './Hero.css';

const Word = ({ children, i }) => (
  <span className="hero-line">
    <span className="hero-word" style={{ '--i': i }}>{children}</span>
  </span>
);

const NameLines = () => (
  <>
    <Word i={0}>{profile.first}</Word>
    <Word i={1}>{profile.last}</Word>
  </>
);

const Hero = () => {
  const root = useRef(null);
  const name = useRef(null);
  const [time, setTime] = useState('');
  const workBtn = useMagnetic();
  const mailBtn = useMagnetic();

  // Jam lokal
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone: profile.timezone,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  // Cahaya biru yang mengikuti kursor. Tanpa kursor (HP) atau saat diam,
  // cahaya bergerak sendiri pelan-pelan.
  useEffect(() => {
    const el = root.current;
    const nm = name.current;
    if (!el || !nm) return undefined;

    const set = (cx, cy) => {
      const r = el.getBoundingClientRect();
      const n = nm.getBoundingClientRect();
      el.style.setProperty('--hx', `${cx}px`);
      el.style.setProperty('--hy', `${cy}px`);
      el.style.setProperty('--nx', `${cx + r.left - n.left}px`);
      el.style.setProperty('--ny', `${cy + r.top - n.top}px`);
    };

    if (prefersReducedMotion()) {
      const r = el.getBoundingClientRect();
      set(r.width * 0.5, r.height * 0.7);
      return undefined;
    }

    let tx = 0, ty = 0, cx = 0, cy = 0;
    let hovering = false, lastMove = 0, visible = true, ready = false, raf = 0;
    const t0 = performance.now();

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      tx = e.clientX - r.left;
      ty = e.clientY - r.top;
      hovering = true;
      lastMove = performance.now();
    };
    const onLeave = () => { hovering = false; };

    const tick = (now) => {
      raf = requestAnimationFrame(tick);
      if (!visible) return;
      const r = el.getBoundingClientRect();
      if (!hovering || now - lastMove > 3500) {
        const t = (now - t0) / 1000;
        tx = r.width * (0.5 + 0.34 * Math.sin(t * 0.42));
        ty = r.height * (0.68 + 0.16 * Math.sin(t * 0.61 + 1.3));
      }
      if (!ready) { cx = tx; cy = ty; ready = true; }
      cx += (tx - cx) * 0.07;
      cy += (ty - cy) * 0.07;
      set(cx, cy);
    };

    const io = new IntersectionObserver(([en]) => { visible = en.isIntersecting; });
    io.observe(el);
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero-inner">
        <div className="hero-meta hero-fade">
          {profile.status ? (
            <p className="hero-status">
              <span className="hero-dot" aria-hidden="true" />
              {profile.status}
            </p>
          ) : <span />}
          <p className="hero-clock">
            {profile.region}, {time} {profile.timezoneLabel}
          </p>
        </div>

        <h1 className="hero-name" ref={name}>
          <span className="hero-base"><NameLines /></span>
          <span className="hero-lit" aria-hidden="true"><NameLines /></span>
        </h1>

        <div className="hero-foot hero-fade">
          <div>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-tag">{profile.tagline}</p>
          </div>
          <div className="hero-cta">
            <a href="#work" className="btn btn-solid" ref={workBtn}>See selected work</a>
            <a href="#contact" className="btn btn-ghost" ref={mailBtn}>Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
