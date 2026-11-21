import React, { useEffect, useRef, useState } from 'react';
import { profile, downloadUrl } from '../../data/content';
import './Navbar.css';

const links = [
  ['About', 'about'],
  ['Work', 'work'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Contact', 'contact'],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const bar = useRef(null);

  // Sembunyi saat scroll turun, muncul saat scroll naik; progress bar di atas.
  useEffect(() => {
    let last = window.scrollY;
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      setScrolled(y > 24);
      if (y < 200) setActive('');
      if (Math.abs(y - last) > 6) {
        setHidden(y > last && y > 240);
        last = y;
      }
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

  // Tandai section yang sedang tampil.
  useEffect(() => {
    const els = links.map(([, id]) => document.getElementById(id)).filter(Boolean);
    if (!('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className={`nav ${hidden && !open ? 'is-hidden' : ''} ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <span className="nav-progress" ref={bar} aria-hidden="true" />
      <div className="nav-inner">
        <a href="#top" className="nav-logo" aria-label={`${profile.name}, back to top`} onClick={() => setOpen(false)}>
          {profile.monogram}
          <span className="nav-logo-dot" aria-hidden="true" />
        </a>

        <nav className="nav-links" aria-label="Primary">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''}>
              {label}
            </a>
          ))}
        </nav>

        {profile.cv && (
          <a className="nav-cv" href={downloadUrl(profile.cv)} target="_blank" rel="noopener noreferrer">
            Download CV
          </a>
        )}

        <button
          className="nav-burger"
          aria-expanded={open}
          aria-controls="nav-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>

      <div className="nav-menu" id="nav-menu" aria-hidden={!open}>
        {links.map(([label, id], i) => (
          <a
            key={id}
            href={`#${id}`}
            style={{ '--i': i }}
            tabIndex={open ? 0 : -1}
            onClick={() => setOpen(false)}
          >
            {label}
          </a>
        ))}
        {profile.cv && (
          <a
            href={downloadUrl(profile.cv)}
            style={{ '--i': links.length }}
            tabIndex={open ? 0 : -1}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Download CV
          </a>
        )}
      </div>
    </header>
  );
};

export default Navbar;
