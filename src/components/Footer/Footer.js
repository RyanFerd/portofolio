import React from 'react';
import { profile } from '../../data/content';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="container footer-inner">
      <p>&copy; {new Date().getFullYear()} {profile.name}</p>
      <p className="footer-note">Designed and built in React</p>
      <a href="#top">Back to top</a>
    </div>
  </footer>
);

export default Footer;
