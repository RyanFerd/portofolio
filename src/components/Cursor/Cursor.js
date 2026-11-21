import React, { useEffect, useRef } from 'react';
import { hasFinePointer, prefersReducedMotion } from '../../hooks/motion';
import './Cursor.css';

// Cincin kecil yang mengikuti kursor (hanya perangkat dengan mouse).
// Elemen dengan atribut data-cursor="Teks" menampilkan label di dalam cincin.
const Cursor = () => {
  const ring = useRef(null);
  const label = useRef(null);

  useEffect(() => {
    const el = ring.current;
    if (!el || !hasFinePointer() || prefersReducedMotion()) return undefined;

    let x = -100, y = -100, cx = -100, cy = -100, raf = 0;

    const loop = () => {
      cx += (x - cx) * 0.2;
      cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
      raf = requestAnimationFrame(loop);
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      el.classList.add('is-visible');
    };
    const onOver = (e) => {
      const t = e.target.closest ? e.target.closest('a, button, [data-cursor]') : null;
      const text = t && t.getAttribute('data-cursor');
      el.classList.toggle('is-link', !!t && !text);
      el.classList.toggle('is-label', !!text);
      if (label.current) label.current.textContent = text || '';
    };
    const onLeave = () => el.classList.remove('is-visible');

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('mouseover', onOver);
    document.documentElement.addEventListener('mouseleave', onLeave);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="cursor" ref={ring} aria-hidden="true">
      <span className="cursor-ring"><span className="cursor-label" ref={label} /></span>
    </div>
  );
};

export default Cursor;
