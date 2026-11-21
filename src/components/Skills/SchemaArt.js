import React, { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../../hooks/motion';

// Sketsa skema database (dekoratif): garis relasi tergambar saat terlihat,
// lalu "query" berupa titik cahaya mengalir di sepanjang relasi.
const tables = [
  { id: 'students', x: 8, y: 14, w: 132, rows: ['id', 'nim', 'name', 'program_id'] },
  { id: 'programs', x: 212, y: 6, w: 128, rows: ['id', 'name', 'faculty'] },
  { id: 'verifications', x: 112, y: 188, w: 146, rows: ['id', 'student_id', 'status', 'checked_at'] },
];
const ROW = 26;
const HEAD = 30;

// Jalur relasi (koordinat pada viewBox 360 x 340)
const relations = [
  { id: 'r1', d: 'M140 138 C 176 138, 176 52, 212 52' },
  { id: 'r2', d: 'M74 156 C 74 176, 140 170, 140 188' },
];

const SchemaArt = () => {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  const reduce = prefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !('IntersectionObserver' in window)) { setOn(true); return undefined; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setOn(true); io.disconnect(); }
    }, { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <svg
      ref={ref}
      className={`schema ${on ? 'is-on' : ''}`}
      viewBox="0 0 360 340"
      role="presentation"
      aria-hidden="true"
    >
      {relations.map((r, i) => (
        <path key={r.id} id={r.id} d={r.d} className="schema-rel" pathLength="1" style={{ '--d': `${0.5 + i * 0.35}s` }} />
      ))}

      {tables.map((t, i) => {
        const h = HEAD + t.rows.length * ROW + 8;
        return (
          <g key={t.id} className="schema-table" style={{ '--d': `${i * 0.12}s` }}>
            <rect x={t.x} y={t.y} width={t.w} height={h} rx="8" className="schema-box" />
            <text x={t.x + 14} y={t.y + 20} className="schema-name">{t.id}</text>
            <line x1={t.x} x2={t.x + t.w} y1={t.y + HEAD} y2={t.y + HEAD} className="schema-rule" />
            {t.rows.map((r, k) => (
              <g key={r}>
                <text x={t.x + 14} y={t.y + HEAD + 20 + k * ROW} className={`schema-col ${r === 'id' ? 'is-key' : ''} ${r.endsWith('_id') ? 'is-fk' : ''}`}>
                  {r}
                </text>
              </g>
            ))}
          </g>
        );
      })}

      {on && !reduce && relations.map((r, i) => (
        <circle key={`p-${r.id}`} r="4" className="schema-pulse">
          <animateMotion dur="3.6s" begin={`${1.4 + i * 1.1}s`} repeatCount="indefinite" keyPoints="0;1;1" keyTimes="0;0.55;1" calcMode="linear">
            <mpath href={`#${r.id}`} />
          </animateMotion>
        </circle>
      ))}
    </svg>
  );
};

export default SchemaArt;
