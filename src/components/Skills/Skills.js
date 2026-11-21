import React from 'react';
import { skills } from '../../data/content';
import SchemaArt from './SchemaArt';
import './Skills.css';

const Skills = () => (
  <section className="skills" id="skills">
    <div className="container skills-grid">
      <div className="skills-head">
        <h2 className="section-title">Skills</h2>
        <p>Tools I use to take a product from schema to screen.</p>
        <SchemaArt />
      </div>

      <div className="skills-groups">
        {skills.map((g) => (
          <div className="skills-group" key={g.group}>
            <h3>{g.group}</h3>
            <ul>
              {g.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
