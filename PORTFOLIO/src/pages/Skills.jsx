import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    programming: [
      { name: 'JavaScript', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'C', level: 75 },
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'CSS3', level: 80 },
      { name: 'React.js', level: 85 },
      { name: 'Tailwind CSS', level: 80 },
      { name: 'Bootstrap', level: 85 },
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 70 },
      { name: 'Python Flask', level: 70 },
      
    ],
    databases: [
      { name: 'MongoDB', level: 75 },
      { name: 'MySQL', level: 70 },
      { name: 'SQLite', level: 65 },
      { name: 'Oracle', level: 70 }
    ],
    tools: [
      { name: 'Git', level: 80 },
      { name: ' Vs Code ', level: 90 },
      { name: 'GitHub', level: 75 },
      { name: 'n8n', level: 70 },
      { name: 'Retell', level: 70 }
    ]
  };

  return (
    <div className="skills">
      <h1>Skills & Expertise</h1>
      
      <div className="skills-container">
        <section className="skill-category">
          <h2><i className="fas fa-code"></i>Programming & Technologies</h2>
          <div className="skill-list">
            {skills.programming.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="skill-category">
          <h2><i className="fas fa-database"></i>Databases</h2>
          <div className="skill-list">
            {skills.databases.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </span>
                <div className="skill-bar">
                  <div className="skill-progress" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="skill-category">
          <h2><i className="fas fa-tools"></i>Tools</h2>
          <div className="skill-list">
            {skills.tools.map((skill, index) => (
              <div key={index} className="skill-item">
                <span className="skill-name">
                  <span>{skill.name}</span>
                  <span>{skill.level}%</span>
                </span>
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