import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Project/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Ryan Ferdiansyah. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;