import React, { useEffect, useRef } from 'react';
import { marquee } from '../../data/content';
import { prefersReducedMotion } from '../../hooks/motion';
import './Marquee.css';

// Pita teknologi. Melaju lebih cepat saat halaman di-scroll, lalu pelan kembali.
const Marquee = () => {
  const track = useRef(null);

  useEffect(() => {
    const el = track.current;
    if (!el || prefersReducedMotion() || !el.getAnimations) return undefined;
    const anim = el.getAnimations()[0];
    if (!anim) return undefined;

    let last = window.scrollY;
    let rate = 1;
    let raf = 0;
    const loop = () => {
      const y = window.scrollY;
      const v = Math.abs(y - last);
      last = y;
      rate += (1 + Math.min(v * 0.3, 7) - rate) * 0.08;
      anim.playbackRate = rate;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track" ref={track}>
        {[0, 1].map((k) => (
          <ul className="marquee-group" key={k}>
            {marquee.map((item) => (
              <li key={item}>
                {item}
                <svg viewBox="0 0 12 12" width="12" height="12"><path d="M6 0l1.4 4.6L12 6 7.4 7.4 6 12 4.6 7.4 0 6l4.6-1.4z" fill="currentColor" /></svg>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
