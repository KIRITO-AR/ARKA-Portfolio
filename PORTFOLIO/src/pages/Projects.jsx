import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern portfolio website built with React and Vite, featuring a responsive design and interactive components.',
      tech: ['React', 'Vite', 'CSS3', 'Font Awesome'],
      github: 'https://github.com/KIRITO-AR/ARKA-Portfolio',
      live: '#'
    },
    {
      title: 'News Web App',
      description: 'A news application that fetches and displays news articles from various sources using News API.',
      tech: ['React', 'News API', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/KIRITO-AR/NEWS-APP',
      live: '#'
    },
    {
      title: 'TextUtils',
      description: 'A text utility application with features like text transformation, word counting, and character analysis.',
      tech: ['React', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/KIRITO-AR/TextUtils-React',
      live: '#'
    },
    {
      title: 'iNotebook',
      description: 'A full-stack note-taking application with user authentication and CRUD operations.',
      tech: ['MERN Stack', 'JWT', 'Bootstrap'],
      github: 'https://github.com/KIRITO-AR/inotebook',
      live: '#'
    }
  ];

  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i> View Code
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
