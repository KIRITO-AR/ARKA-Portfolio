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
      title: 'eBook',
      description: 'Library based website with database and vast dataset of book.',
      tech: ['React', 'News API', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/KIRITO-AR/ebook.git',
      live: 'https://kirito-ar.github.io/ebook/'
    },
    {
      title: 'JiNsX-AI BOT-Verified by discord',
      description: 'JiNsX Ai is a multifaceted AI companion designed to transform your Discord server into a dynamic and intelligent community hub. Go beyond simple commands with a creative powerhouse that generates stunning AI art, music, and memes. Leverage it as a productivity tool to summarize webpages, analyze data, and get real-time answers from the web. Enhance your community with intelligent moderation, interactive games, and a unique personality system that remembers users and conversations for a truly personalized experience. From utility to entertainment, JiNsX Ai is the ultimate all-in-one bot for your server.',
      tech: ['python', 'Discord API', 'Gemini', 'Supabase', 'PostgreSQL'],
      github: 'https://github.com/KIRITO-AR/JiNsX-Ai-discord-bot.git',
      live: 'https://ji-ns-x-ai-web.vercel.app/'
    },
    {
      title: 'Quantum AI',
      description: 'A full-stack a full stack web chatbot ai integrated with n8n automation.',
      tech: ['MERN Stack', 'REACT', 'MongoDB', 'n8n'],
      github: 'https://github.com/KIRITO-AR/Quntambot.AI.git',
      live: 'https://quntambot-ai.vercel.app/'
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
