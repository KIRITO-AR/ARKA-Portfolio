import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML/CSS', level: 90 },
      { name: 'TypeScript', level: 75 }
    ],
    backend: [
      { name: 'Node.js', level: 80 },
      { name: 'Express', level: 75 },
      { name: 'MongoDB', level: 70 },
      { name: 'SQL', level: 65 }
    ],
    tools: [
      { name: 'Git', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Webpack', level: 70 },
      { name: 'Docker', level: 60 }
    ]
  };

  return (
    <div className="skills">
      <h1>Skills & Expertise</h1>
      
      <div className="skills-container">
        <section className="skill-category">
          <h2>Frontend Development</h2>
          <div className="skill-list">
            {skills.frontend.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="skill-category">
          <h2>Backend Development</h2>
          <div className="skill-list">
            {skills.backend.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="skill-category">
          <h2>Tools & Technologies</h2>
          <div className="skill-list">
            {skills.tools.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">{skill.name}</span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
