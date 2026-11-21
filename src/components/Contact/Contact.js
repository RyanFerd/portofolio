import React, { useRef, useState } from 'react';
import { profile, downloadUrl } from '../../data/content';
import { useMagnetic } from '../../hooks/motion';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  const copyBtn = useMagnetic();
  const cvBtn = useMagnetic();

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch (e) {
      const t = document.createElement('textarea');
      t.value = profile.email;
      document.body.appendChild(t);
      t.select();
      try { document.execCommand('copy'); } catch (err) { /* abaikan */ }
      document.body.removeChild(t);
    }
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2200);
  };

  const links = [
    { label: 'GitHub', href: profile.github },
    { label: 'Instagram', href: profile.instagram },
    { label: 'LinkedIn', href: profile.linkedin },
  ].filter((l) => l.href);

  return (
    <section className="contact" id="contact">
      <div className="container">
        <p className="contact-lead">Have a project or a role in mind?</p>

        <a className="contact-mail" href={`mailto:${profile.email}`} data-cursor="Email">
          {profile.email}
        </a>

        <div className="contact-row">
          <button className="btn btn-ghost" onClick={copy} ref={copyBtn}>
            {copied ? 'Copied' : 'Copy email'}
          </button>
          {profile.cv && (
            <a className="btn btn-solid" href={downloadUrl(profile.cv)} target="_blank" rel="noopener noreferrer" ref={cvBtn}>
              Download CV
            </a>
          )}
          <span className="sr-only" role="status" aria-live="polite">
            {copied ? 'Email address copied' : ''}
          </span>

          <ul className="contact-links">
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
