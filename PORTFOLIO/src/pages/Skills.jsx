import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    frontend: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'HTML5/CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Bootstrap', level: 85 }
    ],
    backend: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 70 },
      { name: 'MongoDB', level: 70 },
      { name: 'MySQL', level: 65 }
    ],
    tools: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Firebase', level: 75 },
      { name: 'Postman', level: 80 },
      { name: 'npm/yarn', level: 85 }
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
