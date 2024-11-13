import React from 'react';
import './Hero.css';
import myPhoto from '../Image/fotoku.jpg';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={myPhoto} alt="My Profile" className="hero-photo" />
        <h2>Welcome to My Portfolio</h2>
        <p>Full-Stack Developer</p>
        <a href="#contact" className="cta-button">Get in Touch</a>
      </div>
    </section>
  );
};

export default Hero;
