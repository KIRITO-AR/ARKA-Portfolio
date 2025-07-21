import React from 'react';
import './Overview.css';

const Overview = () => {
  return (
    <div className="overview">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p className="subtitle">Frontend Developer | React Enthusiast | Computer Science Student</p>
        <p className="description">Passionate about creating responsive and user-friendly web applications with modern technologies.</p>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h3>Projects Completed</h3>
          <p className="stat-number">10+</p>
        </div>
        <div className="stat-card">
          <h3>Technologies</h3>
          <p className="stat-number">15+</p>
        </div>
        <div className="stat-card">
          <h3>GitHub Repositories</h3>
          <p className="stat-number">20+</p>
        </div>
      </section>

      <section className="quick-links">
        <h2>Quick Actions</h2>
        <div className="action-cards">
          <div className="action-card">
            <i className="fas fa-file-code"></i>
            <h4>View Latest Project</h4>
          </div>
          <div className="action-card">
            <a href="/assets/resume.pdf" download="Arkaprava_Resume.pdf" className="resume-link">
              <i className="fas fa-download"></i>
              <h4>Download Resume</h4>
            </a>
          </div>
          <div className="action-card">
            <i className="fas fa-paper-plane"></i>
            <h4>Contact Me</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
