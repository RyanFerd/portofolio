import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <div className="contact-content">
          <div className="contact-info">
            <p>
              I'm always open to new opportunities and collaborations.
              Feel free to reach out to me through any of the following channels:
            </p>
            <div className="contact-links">
              <a href="ryanferdiansyah90@gmail.com" className="contact-link">
                <i className="fas fa-envelope"></i>
                ryanferdiansyah90@gmail.com
              </a>
              <a href="https://github.com/RyanFerd" className="contact-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" className="contact-link" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
                LinkedIn
              </a>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;